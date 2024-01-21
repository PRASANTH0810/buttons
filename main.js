  var Stocks = 100;

        function decrease() {
            Stocks = Stocks - 10;
            document.getElementById("box").textContent = Stocks;
        }

        function increase() {
            Stocks = Stocks + 10;
            document.getElementById("box").textContent = Stocks;
        }