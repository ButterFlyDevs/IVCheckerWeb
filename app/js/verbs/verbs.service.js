angular.module('verbs')
    .factory("verbsService", function () {

         return {

            getAll: function(a,b) {

                console.log('llamada a la función');
                gapi.client.ivchecker.verbs.getOne().execute(
                            function (resp) {
                                console.log('Respuesta del server')
                                console.log(resp);
                                return resp;
                            });

            },

            restar:function(a,b) {
              return a-b;
            }
          }
    });