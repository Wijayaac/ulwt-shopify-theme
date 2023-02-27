class EdgeSection extends HTMLElement {
  constructor() {
    super();
    this.containerElement = document.body.querySelector(".page-width");
    this.edgeSection = this.querySelector(".edge-tm");

    this.setSpace();

    const resizeObserver = new ResizeObserver((entries) => this.setSpace());
    resizeObserver.observe(this);
  }
  setSpace() {
    let space =
      this.containerElement.getBoundingClientRect().left ||
      this.containerElement.offsetLeft;

    this.style.setProperty("--spacing", `${space + 30}px`);
  }
}

customElements.define("edge-section", EdgeSection);
