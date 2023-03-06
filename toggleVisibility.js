exports.toggleVisibility = function (parent) {
  console.log(parent);
  try {
    if (parent.childElementCount > 0) {
      let children = parent.childNodes;
      for (let i = 0; i < children.length; i++) {
        if (children[i].style.visibility === 'hidden') {
          children[i].style.visibility = 'visible';
        } else {
          children[i].style.visibility = 'hidden';
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};
