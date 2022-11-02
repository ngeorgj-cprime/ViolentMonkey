// ==UserScript==
// @name        Click all Workflows
// @namespace   Click all Workflows
// @match       https://*/jira/settings/issues/workflows
// @grant       none
// @version     1.0
// @author      Nivaldo Georg Junior
// @description 11/1/2022, 6:47:00 PM
// ==/UserScript==
setTimeout(function() {

    // Configuration
    var tagClass = "be6mls-2 iqxNGD"
    var buttonInputOpenAll = "<input id='buttonOpenAll' title='Clicking here will iteratively Click to Edit all the workflows IN THIS PAGE' style='background-color: #E30B5D; border: 1px solid white; cursor: pointer; margin-left: 10px; right: 35px; color: white; border-radius: 5px;  width: 200px;' type='button' value='Edit All Workflows' id='buttonOpenAllWorkflows'>"
    var buttonParent = document.getElementsByClassName(tagClass)

    // Inject the Button
    buttonParent[0].innerHTML = buttonParent[0].innerHTML + buttonInputOpenAll

    function searchAndClickALL() {

        // Set a few variables
        var searchText = "EditWorkflowDispatcher.jspa"
        var allLinkTags = document.getElementsByTagName('a')
        var tbody = document.getElementsByTagName('tbody')[0]
        var buttons = tbody.getElementsByTagName('button')

        // Iter each button and click it
        for (var e = 0; e < buttons.length; e++) {
            buttons[e].click()
            // Get all the anchors
            var buttonLinks = document.getElementsByTagName('a')
              for (var l = 0; l < buttonLinks.length; l++) {

                // IF anchor has string match, click it.
                if (buttonLinks[l].href.indexOf(searchText) > -1) {
                    window.open(buttonLinks[l].href, '_blank');
                    window.focus()
                }
            }
        }
    }

var button = document.getElementById('buttonOpenAll')
button.addEventListener("click", searchAndClickALL);

}, 3000)
