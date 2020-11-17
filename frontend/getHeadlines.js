const getHeadline = async (title, active) => {
    const tabContents = document.getElementById('tab-content')
    let panel = document.createElement('article');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('class', 'tab-panel')
    panel.setAttribute('id', title);

    // if (active = true) {
    //     panel.setAttribute('aria-hidden', 'false');
    //     panel.classList.add('active')
    // }else{
    //     panel.setAttribute('aria-hidden', 'true')
    // }

    let list = document.createElement('ol');
    let url = `https://content.guardianapis.com/search?order-by=relevance&q=${title}&api-key=9wur7sdh84azzazdt3ye54k4`;

    console.log('you are about to start a fetch')

    fetch(url
    //     , 
    //     {
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: { 'Content-Type': 'application/json' }
    // }
    )
        .then((response) => response.json())
        .then((data) => {
            
            let results = data.response.results
            console.log('this is data', results)
            results.forEach(element=>{
            let item = document.createElement('li');
            let link = document.createElement('a');
            link.setAttribute('href', element.webUrl)
            link.appendChild(document.createTextNode(element.webTitle))
            item.appendChild(link)
            list.appendChild(item)
            }) 
            panel.appendChild(list)
            tabContents.appendChild(panel)
        })
        .catch((error) => {
            console.log(error)
            panel.appendChild(document.createTextNode('No headlines available'))
        });        
}

export default getHeadline;