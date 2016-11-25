app.controller('AuctionController', function($scope,$http){
  $scope.auction= new Auction("Projecto digi-tres patitos",[
    new AuctionResponse("CosmeFulanito","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito1","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito2","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito3","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito4","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito5","",32,32,"blablabla"),
    new AuctionResponse("CosmeFulanito6","",32,32,"blablabla")
  ],false);


});
