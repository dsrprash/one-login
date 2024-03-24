let orgs = new Map();
orgs.set('dev', {name:'Salesforce Dev Edition', url:'https://prash-env-dev-ed.lightning.force.com/', desc: 'Ths is personal developer edition org'});
orgs.set('cpqdev',{name:'CPQ Dev', url:'https://prash-cpq-dev-ed.my.salesforce.com/', desc:'This CPQ pre-installed org'})

function loadFunction(){
    let cardsDiv = document.getElementById('cards');
    

    let cardsHtml = '';
    for([key, value] of orgs){
        cardsHtml = cardsHtml + 
                    '<div class="card" onclick="handleClick("'+key+'");">'+
                        '<h2>'+value.name+'</h2>' +
                        '<p class="card-description">'+value.desc+'</p>'+
                    '</div>';
    }
    cardsDiv.innerHTML = cardsHtml;
}


function handleClick(orgname){

    console.log('orgname ==> '+orgname);
    let url = orgs.get(orgname);
    console.log('url ==> '+url);
    window.open(url, '_blank');

}