let company = {
    name: 'Samsung', employees: '287439',
    name: 'Apple', employees: '137000' ,
    name: 'Microsoft', employees: '144000' ,
    name: 'Honda', employees: '208235' ,
    name: 'Alibaba', employees: '117600' ,
};
console.log(company);


let companies = prompt('Укажите компанию');{

if (companies == 'Samsung')
    console.log(company.name, company.employees);

else
console.log('Нет такой компании');

}
