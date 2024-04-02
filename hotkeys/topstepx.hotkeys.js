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

function buttonClickBuySellCommon(buttonTextToSearch, quantity)
{
    console.log(buttonTextToSearch + ' Quantity ' + quantity + ' Hotkey pressed');
    setQuantity(quantity);
    buttonClickCommon(buttonTextToSearch);
}

function buttonClickMarketQuantity(buySell, quantity)
{
    var buttonTextToSearch = buySell ? 'buy' : 'sell';
    buttonClickBuySellCommon(buttonTextToSearch, quantity);
}

function buttonClickJoinQuantity(buySell, quantity)
{
    var buttonTextToSearch = buySell ? 'join bid' : 'join ask';
    buttonClickBuySellCommon(buttonTextToSearch, quantity);
}

function buttonClickClosePosition()
{
    buttonClickCommon('close position');
}

function buttonClickReversePosition()
{
    buttonClickCommon('reverse position');
}

function buttonClickFlattenAll()
{
    buttonClickCommon('flatten all');
}

function buttonClickCancelAll()
{
    buttonClickCommon('cancel all');
}

function setQuantity(quantity)
{
    setQuantityCommon(quantity);
}

