class Link {
  /**
   * Generate a hash in uuid format
   */
  hash() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  /**
   * Generate string with node and redirect on browser
   */
  to(url) {
    return `${url}?hash=${this.hash()}`;
  }
}

module.exports = new Link();
