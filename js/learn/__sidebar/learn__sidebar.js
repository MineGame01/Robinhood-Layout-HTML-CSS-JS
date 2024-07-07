{
    const sideBarMenuElement = document.querySelector(".learn__sidebar");
    const sideBarContentElement = document.querySelector(".learn__info");

    const listPage = {
        learn: "Learn",
        manage: "Manage",
        customize: "Customize",
    }

    const colors = {
        active: "white",
        noActive: "#545D61",
    }

    setupSideBarMenu(sideBarMenuElement, sideBarContentElement, listPage, colors);
}