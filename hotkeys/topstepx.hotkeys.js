function buttonClickMarketQuantity(buySell, quantity)
{
    var buttonTextToSearch = buySell ? 'buy' : 'sell';
    console.log(buttonTextToSearch + ' Quantity ' + quantity + ' Hotkey pressed');
    var quantity_input = document.querySelector('div[class^=ordercard_order] input[type=number]')
    if(quantity_input == null) { console.log('Unable to locate Quantity Edit Box'); return; }
    quantity_input.value = quantity;
    quantity_input.dispatchEvent(new Event('change', {bubbles: true}));
    
    var button = [...document.querySelector('#orderCardTab').querySelectorAll('button')].filter(button => button.innerHTML.toLowerCase().startsWith(buttonTextToSearch))[0];
    if(button == null) { console.log('Unable to locate button with text: ' + buttonTextToSearch); return; }
    button.click();
}
