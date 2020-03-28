import html from 'choo/html'

export default state =>
  state.activeView === 'list' || state.firstTime
    ? html`
        <div id="target" class="${state.isSnapping ? 'flashing' : ''}"></div>
      `
    : html`
        <div id="target" class="${state.isSnapping ? 'flashing' : ''}"></div>
      `
