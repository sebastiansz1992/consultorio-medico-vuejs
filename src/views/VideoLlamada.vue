<template>
  <div id="videollamada">
    <h1 class="text-2xl mb-4">Consultorio Video Chat</h1>
    <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 bg-black">
      <div id="video-llamada-medico"></div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
import { connect, createLocalVideoTrack } from "twilio-video";
export default {
  name: "videollamada",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Video llamada | Consultorio Medico";
      }
    }
  },
  data() {
    return {
      token: ""
    };
  },
  components: {},
  methods: {
    obtenerAccesoToken: function() {
      axios
        .get("http://127.0.0.1:8000/tokenVideoLlamada")
        .then(response => {
          this.$data.token = response.data;
          this.conectarVideoLlamada();
        })
        .catch(error => {
          console.log(error);
        });
    },
    conectarVideoLlamada: function() {
      connect(this.$data.token, { name: "Sala consultorio medico" }).then(
        room => {
          console.log(`Se conecto exitosamente a la sala: ${room}`);
          const videoChatWindow = document.getElementById("video-llamada-medico");
          console.log(videoChatWindow);
          createLocalVideoTrack().then(track => {
            videoChatWindow.appendChild(track.attach());
          });
          room.on("usuario conectado", usuario => {
            console.log(`usuario "${usuario.identity}" conectado`);
                usuario.tracks.forEach(publication => {
                    if (publication.isSubscribed) {
                        const track = publication.track;
                        videoChatWindow.appendChild(track.attach());
                    }
                });

                usuario.on('trackSubscribed', track => {
                    videoChatWindow.appendChild(track.attach());
                });
          });
        },
        error => {
          console.log(this.$data.token);
          console.error(`Imposibel conectar a la sala: ${error.message}`);
        }
      );
    }
  },
  mounted() {
    this.obtenerAccesoToken();
  }
};
</script>

<style>
.servicios-medicos-margin {
  margin-top: 2%;
  margin-bottom: 2%;
}

.servicios-medicos-title {
  font-family: "Nunito Bold";
  text-align: center;
}

.servicios-medicos-description {
  font-family: "Nunito Regular";
}

.servicios-medicos-background-header-card {
  background-color: #0e539a;
  color: #ffffff;
  font-family: "Nunito Bold";
}
</style>
