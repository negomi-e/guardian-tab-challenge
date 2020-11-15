'use strict';

import {getHeadline} from './getHeadlines';

const onTabClick = (event) => {
    //edit tabs
    let activeNavTabs = document.querySelectorAll('.activeNav')
    activeNavTabs.forEach(el => {
        el.className = el.className.replace('activeNav', '');
        el.removeAttribute('aria-selected')
    })
    event.target.setAttribute("aria-selected", true);
    event.target.parentElement.className = "activeNav"

    //edit table content
    let activePanels = document.querySelectorAll('.active')
    activePanels.forEach(el => {
        el.className = el.className.replace('active', 'inactive');
        el.setAttribute('aria-hidden', 'true')
    })
    let page = event.target.href.split('#')[1];
    let panel = document.getElementById(page)
    panel.className = panel.className.replace('inactive', 'active')
    panel.setAttribute('aria-hidden', 'false')

}

const tabs = document.querySelector('nav')

tabs.addEventListener('click', onTabClick, false);
tabs.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        tabs.click();
    }
});



const fetchHeadlines = async () => {
    
    let titles = document.querySelectorAll('.tab');
    let activeItem = document.querySelector('.activeNav');
    let active = false;
    titles.forEach(item=>{
        let title = item.id
        if(title === activeItem.id){
            active= true
        }
        // await getHeadline(title, active);
    })
    

    // Promise.all([
    //     fetch('https://content.guardianapis.com/search?order-by=relevance&q=uknews&api-key=test'),
    //     fetch('https://content.guardianapis.com/search?section=sport&order-by=newest&page=20&q=sport&api-key=test'),
    //     fetch('https://content.guardianapis.com/search?order-by=relevance&q=travel&api-key=test')
    // ])
    //     .then((responses) => Promise.all(responses.map((response) => {
    //         // console.log('this is response', response)
    //         return response.json();
    //     })
    //     ).then((data) => {
    //         const allHeadlines = [];
    //         data.forEach(set => {
    //             console.log('first group', set)
    //             allHeadlines.push(set.response.results)

    //         })

    //         console.log(allHeadlines)
    //         allHeadlines.forEach(category => {


    //             category.forEach(element => {
    //                 console.log('this is an element', element)
    //                 if (element.sectionId === 'travel' || element.sectionId === 'uk-news' || element.sectionId === 'sport') {

    //                     let panel = document.getElementById(element.sectionId)
                        
    //                     let list = panel.getElementsByTagName('ol')[0];
    //                     console.log(list)
    //                     let item = document.createElement('li');
    //                     let link = document.createElement('a');
    //                     link.setAttribute('href', element.webUrl)
    //                     link.appendChild(document.createTextNode(element.webTitle))
    //                     item.appendChild(link)
    //                     list.appendChild(item)
    //                     panel.appendChild(list)
    //                 }

    //             })
    //         })
    //     })
    //         .catch((error) => console.log(error))

        // )
}

// const loadPage = async () =>{


//     console.log('the data is here too', data)
//     const exampleContent = [
//         {page: 'sport',
//         content: ['Sport 1', 'Article 2', 'Article 3', 'Article 4']},
//         {page: 'uknews',
//         content: ['News 1', 'Article 2', 'Article 3', 'Article 4']},
//         {page: 'other',
//         content: ['Other 1', 'Article 2', 'Article 3', 'Article 4']}
//     ]



//     const tabContents = document.getElementById('tab-content')

//     exampleContent.forEach(element =>{
//         let panel = document.getElementById(element.page)
//         let list = document.createElement('ol');

//         element.content.forEach(el =>{
//             let item = document.createElement('li');
//             item.appendChild(document.createTextNode(el))
//             list.appendChild(item)
//         })
//         panel.appendChild(list)  
//         tabContents.appendChild(panel)
//     })
// }

document.addEventListener('DOMContentLoaded', () => fetchHeadlines())