{
    const sideBarMenuElement = document.querySelector(".products__sidebar");
    const sideBarContentElement = document.querySelector(".products__content");

    const listPage = {
        management: "Cash Management",
        stocks: "Stocks & Funds",
        options: "Options",
        gold: "Gold",
    }

    const colors = {
        active: "#000000",
        noActive: "#6F787E",
    }

    setupSideBarMenu(sideBarMenuElement, sideBarContentElement, listPage, colors);
}