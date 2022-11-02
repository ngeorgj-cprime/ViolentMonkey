// ==UserScript==
// @name        delete problematic conditions
// @namespace   Violentmonkey Scripts
// @match       https://*.atlassian.net/secure/admin/workflows/ViewWorkflowTransition.jspa
// @grant       none
// @version     1.0
// @author      -
// @description 10/21/2022, 11:40:50 AM
// ==/UserScript==

var searchText = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var criterias = document.getElementsByClassName('criteria-item')

for (let i=0; i<criterias.length; i++) {
  let criteria = criterias[i]
  let found_text = criteria.innerText.includes(searchText)
  if (found_text) {
    let criteria_children = criteria.children
    for (let j=0; j < criteria_children.length; j++) {
      let current_node = criteria_children[j]
      if (current_node.class = "aui-buttons") {
        let links = current_node.children
        for (let p=0;p<links.length;p++) {
          let atag = links[p]
          if (atag.href.indexOf("/DeleteWorkflowTransition") > -1) {
             window.open(atag.href, '_blank');
             window.close();
          }
        }
      }
    }
  }
}
