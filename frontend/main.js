'use strict';

import 'normalize.css';
import './styles.css';
import getHeadline from './getHeadlines';

const onTabClick = (event) => {
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
            active = true
        }

        try {
            getHeadline(title, active);
        }catch(err){
            console.log('there has been a prblem houston!')
        }
    })
}

document.addEventListener('DOMContentLoaded', () => fetchHeadlines())

export default {fetchHeadlines, onTabClick}