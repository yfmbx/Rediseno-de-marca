document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('playPauseBtn');


    try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (video) video.pause();
        if (btn) btn.style.display = 'none';
    }
    } catch (e) {

    }


    if (btn) {
    btn.addEventListener('click', function () {
        if (!video) return;
        if (video.paused) {
        video.play();
        btn.textContent = 'Pause';
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Pause background video');
        } else {
        video.pause();
        btn.textContent = 'Play';
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', 'Play background video');
        }
    });
    }


    document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    const btn = item.querySelector('.drop-toggle');
    const menu = item.querySelector('.dropdown');
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        item.classList.toggle('show');
    });

    item.addEventListener('focusout', (e) => {

        if (!item.contains(e.relatedTarget)) {
        item.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
        }
    });
    });

});

document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.getElementById('marquee');
  const marqueeContent = document.querySelector('.marquee-content');

  if (!marqueeContent) {
    console.error("No existe .marquee-content en el DOM");
    return;
  }

  const clone = marqueeContent.cloneNode(true);
  marquee.appendChild(clone);
});

document.addEventListener('DOMContentLoaded', function () {
  const myCarousel = document.querySelector('#carouselCocaCola');
  if (myCarousel) {
    new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: 'carousel'
    });
  }
});


$(function() {
	$(".panes").addClass('magic'); 
	
	let current_slide = 1;
	let count_slides = $(".panes > .pane").length;
	
	function update_view() {
		$(".panes > .pane").removeClass('expand');
		$(".panes > .pane:nth-child("+current_slide+")").addClass('expand');
	};

	update_view();
	
	$(".panes > .pane").on('click', function(e) {
		if ($(e.target).closest('a').length) {
			return;
		}
		current_slide = $(this).index() + 1;
		update_view();
	});
});

$(function() {
  $(".panes").addClass('magic');
  let current_slide = 1;
  let count_slides = $(".panes > .pane").length;

  function update_view() {
    $(".panes > .pane").removeClass('expand');
    $(".panes > .pane:nth-child("+current_slide+")").addClass('expand');
  }

  update_view();

  $(".panes > .pane").on('click', function(e) {
    if ($(e.target).closest('button').length) return;
    current_slide = $(this).index() + 1;
    update_view();
  });


  $(".toggle").on("click", function(e) {
    e.stopPropagation();
    $(this).siblings(".extra").slideToggle();
  });
});


const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.querySelectorAll('.pane .label').forEach(label => {
  label.addEventListener('click', function () {
    const pane = this.closest('.pane');
    document.querySelectorAll('.pane').forEach(p => p.classList.remove('expanded'));
    pane.classList.add('expanded');
  });
});

