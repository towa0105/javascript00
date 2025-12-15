const doc =        document;
const runButtons = doc.querySelectorAll( '[data-question] button' );

runButtons.forEach( ( runButton ) => {
  runButton.addEventListener( 'click', (e) => {
    const wrapper = e.currentTarget.closest( 'section' );
    const num =     wrapper.getAttribute( 'data-question' ).padStart( 2, 0 );
    eval(`q${ num }()`);
  });
} );
