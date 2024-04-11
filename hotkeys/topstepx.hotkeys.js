function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function buttonClickCommon(buttonTextToSearch)
{
    var button = [...document.querySelector('#orderCardTab').querySelectorAll('button')].filter(button => button.innerHTML.toLowerCase().startsWith(buttonTextToSearch))[0];
    if(button == null) { console.log('Unable to locate button with text: ' + buttonTextToSearch); return; }
    button.click();
}

function setQuantityCommon(quantity)
{
    var quantity_input = document.querySelector('div[class^=ordercard_order] input[type=number]')
    if(quantity_input == null) { console.log('Unable to locate Quantity Edit Box'); return; }
    quantity_input.value = quantity;
    quantity_input.dispatchEvent(new Event('change', {bubbles: true}));
}


function buttonClickBuySellQuantityCommon(buttonTextToSearch, quantity)
{
    setQuantity(quantity);
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

function setQuantity(quantity)
{
    console.log('Set Quantity ' + quantity + ' hotkey pressed');
    setQuantityCommon(quantity);
}

async function setContract(contractStartsWith)
{
    var input_div = [...document.querySelectorAll('div[class^=MuiInputBase-root')].filter(d => d.innerText.toLowerCase().startsWith('contract'))[0]
    if(input_div == null)
    {
        console.log('unable to find input div for contract section');
        return;
    }

    input_div.dispatchEvent(new Event('click', { bubbles : true }));
    await sleep(100);
    var list_item = [...document.querySelectorAll('li')].filter(d => d.innerText.toLowerCase().startsWith(contract.toLowerCase()))[0]
    if(list_item == null)
    {
        console.log('unable to find li element for contract ' + contract);
        return;
    }
    list_item.dispatchEvent(new Event('click', {bubbles: true}));
    input_div.dispatchEvent(new Event('click', { bubbles : true }));
}