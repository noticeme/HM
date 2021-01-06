var answer = prompt('Введите кампанию');
function Introduction() {
    var company = [
        { name: 'Samsung', employees: '287439'},
        { name: 'Apple', employees: '137000' },
        { name: 'Microsoft', employees: '144000' },
        { name: 'Honda', employees: '208235' },
        { name: 'Alibaba', employees: '117600' },];

    if (answer == company[Samsung] || (answer == company['Apple'] || answer == company['Microsoft'] || answer == company['Honda'] || answer == company['Alibaba'] ) {
        alert (company());
        
    }
    else {
        if (confirm('You not guessed.' + ' ' + 'Continue game?') ) {
        Introduction();
        }
        else {
        //nothing
        }
    
    }
}

