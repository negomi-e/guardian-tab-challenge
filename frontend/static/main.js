const loadPage = () =>{
    const exampleContent = [
        {page: 'sport',
        content: ['Sport 1', 'Article 2', 'Article 3', 'Article 4']},
        {page: 'uknews',
        content: ['News 1', 'Article 2', 'Article 3', 'Article 4']},
        {page: 'other',
        content: ['Other 1', 'Article 2', 'Article 3', 'Article 4']}
    ]
    const tabContents = document.getElementById('tab-content')
    
    exampleContent.forEach(element =>{
        let panel = document.getElementById(element.page)
        let list = document.createElement('ol');
        
        element.content.forEach(el =>{
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(el))
            list.appendChild(item)
        })
        panel.appendChild(list)  
        tabContents.appendChild(panel)
    })
}

document.addEventListener('DOMContentLoaded', () => loadPage())