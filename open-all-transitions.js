// ==UserScript==
// @name        Autoclick on Workflow Transitions
// @namespace   Autoclick on Workflow Transitions
// @match       https://*/secure/admin/workflows/ViewWorkflowSteps.jspa
// @grant       none
// @version     1.0
// @author      -
// @description 10/21/2022, 11:40:50 AM
// ==/UserScript==

const automatic = false


function clickAllTransitions() {
  const allHTMLTags = document.getElementsByTagName("a")

  for (let i=0; i<allHTMLTags.length; i++) {
    let current_a = allHTMLTags[i]
    if (current_a.href.indexOf("ViewWorkflowTransition.jspa") > -1) {
      window.open(current_a.href); // , '_blank'
      window.focus()
      }
    }
}

if (automatic) {
   clickAllTransitions()
}

else {

   // Configuration
    var navId = "workflow-links"
    var buttonInputOpenAll = "<input id='buttonOpenAll' title='Clicking here will iteratively Click to Edit all the workflows IN THIS PAGE' style='background-color: #E30B5D; border: 1px solid white; cursor: pointer; margin-left: 10px; color: white; border-radius: 1px;  width: 150px; height: 35px;' type='button' value='Open All Transitions' id='buttonOpenAllWorkflows'>"
    var buttonParent = document.getElementById(navId)

    // Inject the Button
    buttonParent.innerHTML = buttonParent.innerHTML + buttonInputOpenAll

    var button = document.getElementById('buttonOpenAll')
    button.addEventListener("click", clickAllTransitions);

}



