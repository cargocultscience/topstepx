fetch('https://raw.githubusercontent.com/cargocultscience/topstepx/main/hotkeys/topstepx.hotkeys.pagemanipulator.js')
.then((res) => res.text())
.then((js) => {
  eval(js);
  console.log("Hotkeys version: " + hotkeysVersion());
  accounts = ['practice', '84774', '84944', '84963'];
  
  var hotkeys = [
    // market buy
    {"keys" : ["alt", "ctrl", "keyb"], "f" : () => buttonClickBuySellMarket(true)},
    // market sell
    {"keys" : ["alt", "ctrl", "keys"], "f" : () => buttonClickBuySellMarket(false)},
    // join bid
    {"keys" : ["shift", "alt", "ctrl", "keyb"], "f" : () => buttonClickBuySellJoin(true)},
    // join ask
    {"keys" : ["shift", "alt", "ctrl", "keys"], "f" : () => buttonClickBuySellJoin(false)},
    // close position
    {"keys" : ["alt", "ctrl", "keyc"], "f" : () => buttonClickClosePosition()},
    // reverse position
    {"keys" : ["alt", "ctrl", "keyr"], "f" : () => buttonClickReversePosition()},
    // cancel orders
    {"keys" : ["shift", "alt", "ctrl", "keyc"], "f" : () => buttonClickCancelOrders()},
    // flatten all
    {"keys" : ["alt", "ctrl", "keyf"], "f" : () => buttonClickFlattenAll()},
    // cancel all
    {"keys" : ["alt", "ctrl", "keyx"], "f" : () => buttonClickCancelAll()},
    
    // buy quantity 1 at market
    {"keys" : ["alt", "ctrl", "digit1"], "f" : () => buttonClickBuySellMarketQuantity(true, '1')},
    // buy quantity 2 at market
    {"keys" : ["alt", "ctrl", "digit2"], "f" : () => buttonClickBuySellMarketQuantity(true, '2')},
    // buy quantity 3 at market
    {"keys" : ["alt", "ctrl", "digit3"], "f" : () => buttonClickBuySellMarketQuantity(true, '3')},
    // buy quantity 4 at market
    {"keys" : ["alt", "ctrl", "digit4"], "f" : () => buttonClickBuySellMarketQuantity(true, '4')},
    // buy quantity 5 at market
    {"keys" : ["alt", "ctrl", "digit5"], "f" : () => buttonClickBuySellMarketQuantity(true, '5')},
    // buy quantity 10 at market
    {"keys" : ["alt", "ctrl", "digit9"], "f" : () => buttonClickBuySellMarketQuantity(true, '10')},
    // buy quantity 15 at market
    {"keys" : ["alt", "ctrl", "digit0"], "f" : () => buttonClickBuySellMarketQuantity(true, '15')},
    // sell quantity 1 at market
    {"keys" : ["alt", "ctrl", "f1"], "f" : () => buttonClickBuySellMarketQuantity(false, '1')},
    // sell quantity 2 at market
    {"keys" : ["alt", "ctrl", "f2"], "f" : () => buttonClickBuySellMarketQuantity(false, '2')},
    // sell quantity 3 at market
    {"keys" : ["alt", "ctrl", "f3"], "f" : () => buttonClickBuySellMarketQuantity(false, '3')},
    // sell quantity 4 at market
    {"keys" : ["alt", "ctrl", "f4"], "f" : () => buttonClickBuySellMarketQuantity(false, '4')},
    // sell quantity 5 at market
    {"keys" : ["alt", "ctrl", "f5"], "f" : () => buttonClickBuySellMarketQuantity(false, '5')},
    // sell quantity 10 at market
    {"keys" : ["alt", "ctrl", "f9"], "f" : () => buttonClickBuySellMarketQuantity(false, '10')},
    // sell quantity 15 at market
    {"keys" : ["alt", "ctrl", "f10"], "f" : () => buttonClickBuySellMarketQuantity(false, '15')},

    // join bid with quantity 1
    {"keys" : ["alt", "digit1"], "f" : () => buttonClickBuySellJoinQuantity(true, '1')},
    // join bid with quantity 2
    {"keys" : ["alt", "digit2"], "f" : () => buttonClickBuySellJoinQuantity(true, '2')},
    // join bid with quantity 3
    {"keys" : ["alt", "digit3"], "f" : () => buttonClickBuySellJoinQuantity(true, '3')},
    // join bid with quantity 4
    {"keys" : ["alt", "digit4"], "f" : () => buttonClickBuySellJoinQuantity(true, '4')},
    // join bid with quantity 5
    {"keys" : ["alt", "digit5"], "f" : () => buttonClickBuySellJoinQuantity(true, '5')},
    // join bid with quantity 10
    {"keys" : ["alt", "digit9"], "f" : () => buttonClickBuySellJoinQuantity(true, '10')},
    // join bid with quantity 15
    {"keys" : ["alt", "digit0"], "f" : () => buttonClickBuySellJoinQuantity(true, '15')},
    // join ask with quantity 1
    {"keys" : ["alt", "f1"], "f" : () => buttonClickBuySellJoinQuantity(false, '1')},
    // join ask with quantity 2
    {"keys" : ["alt", "f2"], "f" : () => buttonClickBuySellJoinQuantity(false, '2')},
    // join ask with quantity 3
    {"keys" : ["alt", "f3"], "f" : () => buttonClickBuySellJoinQuantity(false, '3')},
    // join ask with quantity 4
    {"keys" : ["alt", "f4"], "f" : () => buttonClickBuySellJoinQuantity(false, '4')},
    // join ask with quantity 5
    {"keys" : ["alt", "f5"], "f" : () => buttonClickBuySellJoinQuantity(false, '5')},
    // join ask with quantity 10
    {"keys" : ["alt", "f9"], "f" : () => buttonClickBuySellJoinQuantity(false, '10')},
    // join ask with quantity 15
    {"keys" : ["alt", "f10"], "f" : () => buttonClickBuySellJoinQuantity(false, '15')},

    // change contract
    {"keys" : ["alt", "ctrl", "keyu"], "f" : () => setContract('nq', 10)},
    {"keys" : ["alt", "ctrl", "keyi"], "f" : () => setContract('es', 10)},
    {"keys" : ["alt", "ctrl", "keyo"], "f" : () => setContract('gc', 10)},
    {"keys" : ["alt", "ctrl", "keyp"], "f" : () => setContract('cl', 10)},
    {"keys" : ["alt", "ctrl", "keyg"], "f" : () => setContract('nkd', 10)},
    {"keys" : ["alt", "ctrl", "keyh"], "f" : () => setContract('ym', 10)},
    {"keys" : ["alt", "ctrl", "keyj"], "f" : () => setContract('si', 10)},
    {"keys" : ["alt", "ctrl", "keyk"], "f" : () => setContract('mnq', 10)},
    {"keys" : ["alt", "ctrl", "keyl"], "f" : () => setContract('mes', 10)},

    // change quantity selected
    {"keys" : ["shift", "alt", "ctrl", "digit1"], "f" : () => setQuantity(1)},
    {"keys" : ["shift", "alt", "ctrl", "digit2"], "f" : () => setQuantity(2)},
    {"keys" : ["shift", "alt", "ctrl", "digit3"], "f" : () => setQuantity(3)},
    {"keys" : ["shift", "alt", "ctrl", "digit4"], "f" : () => setQuantity(4)},
    {"keys" : ["shift", "alt", "ctrl", "digit5"], "f" : () => setQuantity(5)},
    {"keys" : ["shift", "alt", "ctrl", "digit9"], "f" : () => setQuantity(10)},
    {"keys" : ["shift", "alt", "ctrl", "digit0"], "f" : () => setQuantity(15)},
    
    // switch to account
    {"keys" : ["shift", "alt", "ctrl", "keyu"], "f" : () => setAccount(accounts[0])},
    {"keys" : ["shift", "alt", "ctrl", "keyi"], "f" : () => setAccount(accounts[1])},
    {"keys" : ["shift", "alt", "ctrl", "keyo"], "f" : () => setAccount(accounts[2])},
    {"keys" : ["shift", "alt", "ctrl", "keyp"], "f" : () => setAccount(accounts[3])},
    {"keys" : ["shift", "alt", "ctrl", "keyg"], "f" : () => setAccount(accounts[4])},
    {"keys" : ["shift", "alt", "ctrl", "keyh"], "f" : () => setAccount(accounts[5])},
    {"keys" : ["shift", "alt", "ctrl", "keyj"], "f" : () => setAccount(accounts[6])},
    {"keys" : ["shift", "alt", "ctrl", "keyk"], "f" : () => setAccount(accounts[7])},
    {"keys" : ["shift", "alt", "ctrl", "keyl"], "f" : () => setAccount(accounts[8])},

    // move stop to break even
    {"keys" : ["alt", "ctrl", "keye"], "f" : () => buttonClickStopBreakEven()},
  
    // center dom
    {"keys" : ["shift", "alt", "ctrl", "keyd"], "f" : () => centerDom()},

    // debug mode
    {"keys" : ["alt", "ctrl", "keyd"], "f" : () => toggleDebug()},
];
setupHotkeys(accounts);
});
