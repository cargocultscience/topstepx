let hotkeys_version = "3.0.1";

async function setupHotkeys(accounts, override_url) {
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
        {"keys" : ["alt", "ctrl", "numpad1"], "f" : () => setContract('nq', 10)},
        {"keys" : ["alt", "ctrl", "numpad2"], "f" : () => setContract('es', 10)},
        {"keys" : ["alt", "ctrl", "numpad3"], "f" : () => setContract('gc', 10)},
        {"keys" : ["alt", "ctrl", "numpad4"], "f" : () => setContract('cl', 10)},
        {"keys" : ["alt", "ctrl", "numpad5"], "f" : () => setContract('nkd', 10)},
        {"keys" : ["alt", "ctrl", "numpad6"], "f" : () => setContract('ym', 10)},
        {"keys" : ["alt", "ctrl", "numpad7"], "f" : () => setContract('si', 10)},
        {"keys" : ["alt", "ctrl", "numpad8"], "f" : () => setContract('mnq', 10)},
        {"keys" : ["alt", "ctrl", "numpad9"], "f" : () => setContract('mes', 10)},
        
        // change quantity selected
        {"keys" : ["shift", "alt", "ctrl", "digit1"], "f" : () => setQuantity(1)},
        {"keys" : ["shift", "alt", "ctrl", "digit2"], "f" : () => setQuantity(2)},
        {"keys" : ["shift", "alt", "ctrl", "digit3"], "f" : () => setQuantity(3)},
        {"keys" : ["shift", "alt", "ctrl", "digit4"], "f" : () => setQuantity(4)},
        {"keys" : ["shift", "alt", "ctrl", "digit5"], "f" : () => setQuantity(5)},
        {"keys" : ["shift", "alt", "ctrl", "digit9"], "f" : () => setQuantity(10)},
        {"keys" : ["shift", "alt", "ctrl", "digit0"], "f" : () => setQuantity(15)},
        
        // switch to account
        {"keys" : ["ctrl", "numpad1"], "f" : () => setAccount(accounts[0])},
        {"keys" : ["ctrl", "numpad2"], "f" : () => setAccount(accounts[1])},
        {"keys" : ["ctrl", "numpad3"], "f" : () => setAccount(accounts[2])},
        {"keys" : ["ctrl", "numpad4"], "f" : () => setAccount(accounts[3])},
        {"keys" : ["ctrl", "numpad5"], "f" : () => setAccount(accounts[4])},
        {"keys" : ["ctrl", "numpad6"], "f" : () => setAccount(accounts[5])},
        {"keys" : ["ctrl", "numpad7"], "f" : () => setAccount(accounts[6])},
        {"keys" : ["ctrl", "numpad8"], "f" : () => setAccount(accounts[7])},
        {"keys" : ["ctrl", "numpad9"], "f" : () => setAccount(accounts[8])},
        
        // move stop to break even
        {"keys" : ["alt", "ctrl", "keye"], "f" : () => buttonClickStopBreakEven()},
    ];

    var hotkeysDict = {}
    if(override_url) {
        console.log("attempting to override hotkey definitions from " + override_url);
        const response = await fetch(override_url);
        const override_js = await response.text();
        eval(override_js);
    }
    console.log(hotkeys);
    hotkeys.forEach((m) => hotkeysDict[m["keys"].sort().join()] = m["f"])
        
    document.addEventListener('keydown',handleKeyDown);
    function handleKeyDown(event) {
        if(event.repeat == true) return;
        let eventKeySet = new Set();
        if(event.shiftKey)
        {
            eventKeySet.add("shift");
        }
        if(event.altKey)
        {
            eventKeySet.add("alt");
        }
        if(event.ctrlKey)
        {
            eventKeySet.add("ctrl");
        }
        if(event.metaKey)
        {
            eventKeySet.add("meta");
        }
        eventKeySet.add(event.code.toLowerCase());
        eventKey = Array.from(eventKeySet).sort().join();
       
        if(eventKey in hotkeysDict)
        {
            event.preventDefault();
            console.log("Firing hotkey: " + eventKey)
            hotkeysDict[eventKey]();
        }
    }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function buttonClickCommon(buttonTextToSearch)
{
    var button = [...document.querySelector('[id^=orderCardTab]').querySelectorAll('button')].filter(button => button.innerHTML.toLowerCase().startsWith(buttonTextToSearch))[0];
    if(button == null) { console.log('Unable to locate button with text: ' + buttonTextToSearch); return; }
    button.click();
}

function setQuantityCommon(quantity)
{
    var quantity_input = document.querySelector('div[class^=ordercard_order] input[type=number]')
    if(quantity_input == null) { console.log('Unable to locate Quantity Edit Box'); return; }
    quantity_input.value = quantity;
    quantity_input[Object.keys(quantity_input).filter((k) => k.startsWith('__reactProps'))[0]].onChange({'target' : { 'value' : quantity}});
}


async function buttonClickBuySellQuantityCommon(buttonTextToSearch, quantity)
{
    setQuantity(quantity);
    await sleep(10);
    buttonClickCommon(buttonTextToSearch);
}

function buttonClickBuySellMarketQuantity(buySell, quantity)
{
    var buttonTextToSearch = buySell ? 'buy' : 'sell';
    console.log(buttonTextToSearch + ' Quantity ' + quantity + ' hotkey pressed');  
    buttonClickBuySellQuantityCommon(buttonTextToSearch, quantity);
}

function buttonClickBuySellJoinQuantity(buySell, quantity)
{
    var buttonTextToSearch = buySell ? 'join bid' : 'join ask';
    console.log(buttonTextToSearch + ' Quantity ' + quantity + ' hotkey pressed');
    buttonClickBuySellQuantityCommon(buttonTextToSearch, quantity);
}

function buttonClickBuySellMarket(buySell)
{
    var buttonTextToSearch = buySell ? 'buy' : 'sell';
    console.log(buttonTextToSearch + ' hotkey pressed');
    buttonClickCommon(buttonTextToSearch);
}

function buttonClickBuySellJoin(buySell)
{
    var buttonTextToSearch = buySell ? 'join bid' : 'join ask';
    console.log(buttonTextToSearch + ' hotkey pressed');
    buttonClickCommon(buttonTextToSearch);
}

function buttonClickClosePosition()
{
    console.log('Close Position hotkey pressed');
    buttonClickCommon('close position');
}

function buttonClickReversePosition()
{
    console.log('Reverse Position hotkey pressed');
    buttonClickCommon('reverse position');
}

function buttonClickCancelOrders()
{
    console.log('Cancel Orders hotkey pressed');
    buttonClickCommon('cancel orders');
}

function buttonClickFlattenAll()
{
    console.log('Flatten All hotkey pressed');
    buttonClickCommon('flatten all');
}

function buttonClickCancelAll()
{
    console.log('Cancel All hotkey pressed');
    buttonClickCommon('cancel all');
}

function buttonClickStopBreakEven()
{
    console.log('Stop Break Even hotkey pressed');
    buttonClickCommon('b/e');
}

function setQuantity(quantity)
{
    console.log('Set Quantity ' + quantity + ' hotkey pressed');
    setQuantityCommon(quantity);
}

async function setContract(contract, delayMilliseconds)
{
    var input_div = [...document.querySelectorAll('div[class^=MuiInputBase-root')].filter(d => d.innerText.toLowerCase().startsWith('contract'))[0]
    if(input_div == null)
    {
        console.log('unable to find input div for contract section');
        return;
    }

    input_div.dispatchEvent(new Event('click', { bubbles : true }));
    await sleep(delayMilliseconds);
    var list_item = [...document.querySelectorAll('li')].filter(d => d.innerText.toLowerCase().startsWith(contract.toLowerCase()))[0]
    if(list_item == null)
    {
        console.log('unable to find li element for contract ' + contract);
    }
    else
    {
        list_item.dispatchEvent(new Event('click', { bubbles: true }));
    }
    input_div.dispatchEvent(new Event('click', { bubbles : true }));
}

async function setAccount(account, delayMilliseconds = 25)
{
    var input_div = document.querySelector('div[class^=ordercard_account]').querySelector('div[role=combobox]')
    if(input_div == null)
    {
        console.log('unable to find input div for contract section');
        return;
    }
	input_div.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp', bubbles: true}));
    await sleep(delayMilliseconds);
	var account_li = [...document.querySelectorAll('li')].filter(d => d.innerText.toLowerCase().includes(account.toLowerCase()))[0]
    if(account_li == null)
    {
        console.log('unable to find li element for account ' + account);
    }
    else
    {
        account_li.dispatchEvent(new Event('click', { bubbles: true }));
    }
}