tippy('td:first-child', {  // Target first cell (Title)
    content: (reference) => reference.closest('tr').getAttribute('data-tippy-content'),
    allowHTML: true,
    delay: [500, 0],
    theme: 'light-border',
    interactive: true,
    placement: 'right',
    maxWidth: 350,
    offset: [0, 10],
    popperOptions: {
        modifiers: [{
            name: 'flip',
            options: {
                fallbackPlacements: ['left']
            }
        }]
    }
});