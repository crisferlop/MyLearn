
angular.module('MyLearn').controller('DiscusionAreaController', function ($scope, $http, $routeParams) {
    console.log("Comentario: ", new Commentary("Hola", "Hola", "Hola", "Hola", "Hola",
        [new CommentaryResponse("Hola", "Hola", "Hola", "Hola"),
         new CommentaryResponse("Hola", "Hola", "Hola", "Hola"),
         new CommentaryResponse("Hola", "Hola", "Hola", "Hola"),
         new CommentaryResponse("Hola", "Hola", "Hola", "Hola"),
         new CommentaryResponse("Hola", "Hola", "Hola", "Hola")
        ]));
    $scope.commentaries = [new Commentary("el documento se lo subi ya!", "19-marzo-2016", "Cosmefulanito", "MyPhoto", "Archivo adjunto",
        [new CommentaryResponse("NO invente!", "19-marzo-2016", "Cosmefulanito2", "MyPhoto", "Archivo adjunto"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola")
        ]),
        new Commentary("el documento se lo subi ya!", "19-marzo-2016", "Cosmefulanito", "MyPhoto", "Archivo adjunto",
        [new CommentaryResponse("NO invente!", "19-marzo-2016", "Cosmefulanito2", "MyPhoto", "Archivo adjunto"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Aqui se arregla", "19-marzo-2016", "Hola", "Hola"),
         new CommentaryResponse("Hola", "19-marzo-2016", "Hola", "Hola")
        ])
    ];
});