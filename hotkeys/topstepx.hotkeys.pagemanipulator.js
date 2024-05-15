function hotkeysVersion()
{
    return "4.2.2";
}

function ondocloaded(event)
{
    console.log("ondocloaded");
    console.log(Object.keys(document).filter(k => k.startsWith('tradingview')));
}

async function setupHotkeys(accounts) {
    window.onloadeddata = ondocloaded;
    var hotkeysDict = {}
    console.log(hotkeys);
    hotkeys.forEach((m) => hotkeysDict[m["keys"].sort().join()] = m["f"])
        
    document.addEventListener('keydown',handleKeyDownDocument);
    /*
    chartConnected = false;
    while(!chartConnected) {
        console.log("Trying to connect chart");
        chartArray = Object.keys(document).filter(k => k.startsWith('tradingview'));
        if(chartArray.length > 0) {
            chart = chartArray[0];
            console.log("Connected chart: " + chart);
            chartConnected = true;
            chart.addEventListener('keydown', handleKeyDownChart);
        }
        sleep(1000);
    }
    */
    //document[Object.keys(document).filter(k => k.startsWith('tradingview'))[0]].addEventListener('keydown',handleKeyDownChart);
    console.log(Object.keys(document).filter(k => k.startsWith('tradingview')));
    function handleKeyDownChart(event) {
        console.log("handle keydown chart");
        handleKeyDownCommon(event, "chart");
    }

    function handleKeyDownDocument(event) {
        handleKeyDownCommon(event, "document");
    }
    
    function handleKeyDownCommon(event, source) {
        console.log(event, source);
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
            console.log("Firing hotkey: " + eventKey + " from " + source);
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
    input_div.dispatchEvent(new Event('click', { bubbles : true }));
}