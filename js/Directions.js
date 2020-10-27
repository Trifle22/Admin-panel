let tab = function() {
  let law = document.querySelectorAll('.law');
  let lawList = document.querySelectorAll('.law-list');
  let lawName;

  law.forEach(item => {
    item.addEventListener('click', selectLaw)
  });

  function selectLaw() {
    law.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    lawName = this.getAttribute('data-tab-name');
    selectLawList(lawName);
  }

  function selectLawList(lawName) {
    lawList.forEach(item => {
      item.classList.contains(lawName) ? item.classList.add('is-active') : item.classList.remove('is-active'); 
    })
  }

};
tab();