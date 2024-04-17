const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function showTabContents(event) {
    let tabActive = document.querySelector('.tab_active');
    let currentTab = event.target;
    
    tabActive.classList.remove('tab_active');
    currentTab.classList.add('tab_active');

    let tabContentActive = document.querySelector('.tab__content_active');
    tabsArray = Array.from(tabs);
    let currentTabContent = tabContents[tabsArray.indexOf(currentTab)];

    tabContentActive.classList.remove('tab__content_active');
    currentTabContent.classList.add('tab__content_active');
}

for (const tab of tabs) {
    tab.addEventListener('click', showTabContents);
}
