const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

// XBY
        coinmarketcap.multi(coins => {
            var maintenant=new Date();
            var jour=maintenant.getDate();
            var mois=maintenant.getMonth()+1;
            var an=maintenant.getFullYear();
            var heure=maintenant.getHours();
            var minute=maintenant.getMinutes();
            var seconde=maintenant.getSeconds();
            var pc1 = " :chart_with_upwards_trend: ";
            var pc2 = " :chart_with_upwards_trend: ";
            var pc3 = " :chart_with_upwards_trend: ";

            if (coins.get("XBY").percent_change_1h < 0) {
                pc1 = ":chart_with_downwards_trend:";
            }else {pc1 = pc1};
            
            if (coins.get("XBY").percent_change_24h < 0) {
                pc2 = ":chart_with_downwards_trend:";
            }else {pc2 = pc2};

            if (coins.get("XBY").percent_change_7d < 0) {
                pc3 = ":chart_with_downwards_trend:";
            }else {pc3 = pc3};

            message.channel.sendMessage("*" + jour + "-" + mois + "-" + an + " (" + heure + ":" + minute + ":" + seconde +")*\n" + "__**" + coins.get("XBY").name + "**__" + "\nRank: " + coins.get("XBY").rank + "\nPrice : " + coins.get("XBY").price_usd + " :dollar: (USD)\n" + "Percent Change 1h : " + coins.get("XBY").percent_change_1h + " %" + pc1 + "\nPercent Change 24h : " + coins.get("XBY").percent_change_24h + " %" + pc2 + "\nPercent Change 7d : " + coins.get("XBY").percent_change_7d + " %" + pc3 );// Prints price of BTC in USD
            console.log("Commande $pXBY effectuée");
        });
