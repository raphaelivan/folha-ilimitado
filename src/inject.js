var FolhaIlimitado = {
  $spanDialog: document.getElementsByTagName("span")[0],
  $body: document.body,

  init:  function () {
    /* Hides the dialog box */
    this.$spanDialog.style.display = "none";

    /* Removes the style attribute ofbody that blocks the page */
    this.$body.setAttribute("style", "")

    /* Clears the memory by removing the init method so that it runs */
    delete this.init;
  }
}

/* Calls the init method of FolhaIlimitado object */
FolhaIlimitado.init();
