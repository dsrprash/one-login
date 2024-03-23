let orgs = new Map();
orgs.set('dev', 'https://prash-env-dev-ed.lightning.force.com/');
orgs.set('cpqdev','https://prash-cpq-dev-ed.my.salesforce.com/')

function handleClick(orgname){

    console.log('orgname ==> '+orgname);
    let url = orgs.get(orgname);
    console.log('url ==> '+url);
    window.open(url, '_blank');
}