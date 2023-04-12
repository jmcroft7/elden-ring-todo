console.log("js running");

function convertData(array) {
    console.log(array);

    // bootstrap container
    const container = document.createElement("div");
    container.classList.add("container");

    // accordionContainer
    const accordionContainer = document.createElement("div");
    accordionContainer.classList.add("accordion");
    accordionContainer.setAttribute("id", `accordionContainer`);

    // add to document
    document.body.appendChild(container);
    container.appendChild(accordionContainer);

    // forEach title in data
    for (let i = 0; i < array.length; i++) {
        // accordionItem
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionContainer.appendChild(accordionItem);

        // accordionHeader
        const accordionHeader = document.createElement("h2");
        accordionHeader.classList.add("accordion-header");
        accordionHeader.setAttribute("id", `header${i}`);
        accordionItem.appendChild(accordionHeader);

        // accordionButton
        const accordionButton = document.createElement("button");
        accordionButton.classList.add(
            "accordion-button",
            "collapsed",
            "bg-dark",
            "text-light"
        );
        accordionButton.setAttribute("type", "button");
        accordionButton.setAttribute("data-bs-toggle", "collapse");
        accordionButton.setAttribute("data-bs-target", `#accordionCollapse${i}`);
        accordionButton.setAttribute("aria-expanded", "false");
        accordionButton.setAttribute("aria-controls", `accordionCollapse${i}`);
        accordionButton.innerHTML = array[i].title;
        accordionHeader.appendChild(accordionButton);

        // accordionCollapse
        const accordionCollapse = document.createElement("div");
        accordionCollapse.classList.add(
            "accordion-collapse",
            "collapse",
            "bg-dark",
            "text-light"
        );
        accordionCollapse.setAttribute("id", `accordionCollapse${i}`);
        accordionCollapse.setAttribute("data-bs-parent", `#accordionContainer`);
        accordionCollapse.setAttribute("aria-labelledby", `header${i}`);
        accordionItem.appendChild(accordionCollapse);

        // accordionBody
        const accordionBody = document.createElement("div");
        accordionBody.classList.add("accordion-body");
        accordionCollapse.appendChild(accordionBody);

        // forEach item in Data array
        for (let j = 0; j < array[i].data.length; j++) {
            // formCheck
            const formCheck = document.createElement("div");
            formCheck.classList.add("form-check");
            accordionBody.appendChild(formCheck);

            // formLabel
            const formLabel = document.createElement("label");
            formLabel.classList.add("form-check-label");
            formLabel.setAttribute("for", `formCheck${i}${j}`);
            formCheck.appendChild(formLabel);

            // formInput
            const formInput = document.createElement("input");
            formInput.classList.add("form-check-input", "strikethrough");
            formInput.setAttribute("type", "checkbox");
            formInput.setAttribute("value", 1);
            formInput.setAttribute("id", `formCheck${i}${j}`);
            formLabel.appendChild(formInput);

            // formSpan
            const formSpan = document.createElement("span");
            formSpan.classList.add("strikeThis");
            formSpan.innerHTML = array[i].data[j]
            formLabel.appendChild(formSpan);

            const itemBreak = document.createElement("br");
            formLabel.appendChild(itemBreak);
        }
    }
}

fetch("./data/data.json")
    .then((response) => response.json())
    .then((text) => convertData(text));


