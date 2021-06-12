
// carousel

$('.carousel').slick({
    prevArrow: '<button class="prev-button btn "><i class="fas fa-chevron-circle-left"></i></button>',
    // nextArrow: '<button class="btn btn-custom">Next</button>',
    // prevArrow: '<button class="slick-prev">Prev</button>',
    nextArrow: '<button class="next-button btn"><i class="fas fa-chevron-circle-right"></i></button>',
    enterMode: true,
    centerPadding: '6px',
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

//   end carousel


// Aos


AOS.init();


// Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycby_pFJTnslM2XKdilMRZvcV5ZZdr69Wd7L7J2n_d0DjZ8qnoAjfO96LG7XYNUgHY1U4/exec'
  const form = document.forms['contact-form'];
  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const Myalert = document.querySelector('.pesan-alert');

  form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika submit form.
    // tampilkan button loading, hilangkan tombol kirim.
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');


    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // jika response sukses 
      .then(response => {
         // tampilkan button kirim, hilangkan tombol loading.
        //  tampilkan alert succes.
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        Myalert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response);

      })
      .catch(error => console.error('Error!', error.message))
  })

