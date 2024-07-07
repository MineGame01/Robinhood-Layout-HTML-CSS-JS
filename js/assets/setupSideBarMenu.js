const setupSideBarMenu = (sideBarMenuElement, sideBarContentElement, listPage, colors) => {
    const ulElement = sideBarMenuElement.querySelector("ul");
    const backBtnElement = sideBarMenuElement.querySelector("button:first-child");
    const nextBtnElement = sideBarMenuElement.querySelector("button:last-child");

    const listPageValue = [...Object.keys(listPage)];
    const listPageName = [...Object.values(listPage)];

    if (!sideBarContentElement.getAttribute("page")) sideBarContentElement.setAttribute("page", listPageValue[0]);

    let currentPage;

    const checkCurrentPage = () => {
        currentPage = sideBarContentElement.getAttribute("page");
    }

    listPageName.forEach(name => {
        const liElement = document.createElement("li");
        const buttonElement = document.createElement("button");
        buttonElement.innerText = name;

        liElement.appendChild(buttonElement);
        ulElement.appendChild(liElement);
    });

    const arrayLiElementsOnlyButtonForPage = Array.from(ulElement.children);
    
    arrayLiElementsOnlyButtonForPage.forEach((li, index) => 
        li.firstElementChild.setAttribute("value", listPageValue[index])
    );

    function updatePage() {
        checkCurrentPage();

        arrayLiElementsOnlyButtonForPage.forEach(li => {
            const valueButton = li.firstElementChild.getAttribute("value");
            li.firstElementChild.style.color = valueButton === currentPage ? colors.active : colors.noActive;
        });

        listPageValue.forEach(page => {
            document.querySelector("." + sideBarContentElement.className + "-" + page).style.display = currentPage === page ? 
                "block" : "none";
        });
    }

    function onChangePage(isReversed = false) {
        checkCurrentPage();

        let listPageCopy = isReversed ? [...listPageValue].reverse() : listPageValue;
        let index = listPageCopy.indexOf(currentPage);

        if (index !== listPageCopy.length - 1) {
            sideBarContentElement.setAttribute("page", listPageCopy[index + 1]);
        } else if (index === listPageCopy.length - 1) {
            sideBarContentElement.setAttribute("page", listPageCopy[0]);
        }

        updatePage();
    }

    if (nextBtnElement) nextBtnElement.onclick = () => onChangePage();
    if (nextBtnElement) backBtnElement.onclick = () => onChangePage(true);

    arrayLiElementsOnlyButtonForPage.forEach((li, index) => {
        li.firstElementChild.onclick = function() {
            sideBarContentElement.setAttribute("page", listPageValue[index]);
            updatePage();
        }
    })

    updatePage();
}