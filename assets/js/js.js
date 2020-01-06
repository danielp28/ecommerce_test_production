function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
$(document).ready(function () {
  $('.add-to-cart').on('click', function () {

    var $this = $('.nermalflip'),
      $index = $this.index(),

      $img = $this.children('img'),
      $imgSrc = $img.attr('src'),
      $imgAlt = $img.attr('data-alt'),
      $imgExt = $imgAlt.split('.');

    if ($imgExt[1] === 'gif') {
      $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
    } else {
      $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
    }

  });
});


