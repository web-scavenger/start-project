

class ToggleElement {
    constructor(selector, timeout = 350) {
      this.item = typeof selector === 'string' ? document.querySelector(selector) : selector;
      this.timeout = timeout;
    }
  
    show() {
      this.item.setAttribute('data-show', true);
      return new Promise(res => setTimeout(() => res({ animated: true }), this.timeout));
    }
  
    hide() {
      this.item.setAttribute('data-show', false);
      return new Promise(res => setTimeout(() => res({ animated: true }), this.timeout));
    }
  }
  
  export default ToggleElement;
  