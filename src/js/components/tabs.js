import GraphTabs from 'graph-tabs';

const tabs = document.querySelectorAll('.tabs');

if (tabs) {

  tabs.forEach((tab, index) => {
    tab.setAttribute('data-tabs', `tab-${index}`);
    const currentTab = new GraphTabs(`tab-${index}`);
  });

}
