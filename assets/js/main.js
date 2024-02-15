// nav function start
const {createApp} = Vue
createApp({

    // data
        data:function(){
            return {
                cek: false
            }
        },

        // mount
        mounted() {
            // Memanggil method pada saat mounted untuk menyesuaikan kelas awal
            if (window.innerWidth < 1024) {
                this.handleScroll();
            }
            // else{
            //     this.lgScroll(); 
            // }
            
            // Tambahkan event listener scroll dengan pemilihan metode sesuai kondisi lebar layar
            window.addEventListener('scroll', () => {
                if (window.innerWidth < 1024) {
                this.handleScroll();
                } 
                // else {
                // this.lgScroll();
                // }
            });
        },

    // mount remove
        destroyed() {
            // Hapus event listener saat komponen di-unmount
            window.removeEventListener('scroll', this.handleScroll);
            // window.removeEventListener('scroll', this.lgScroll);
        },

    // method
        methods:{
            toogle(){
                this.cek = !this.cek
                console.log(`navbar diubah ${this.cek}`);
            },
            closeSidebar(event) {
                const sidebarElement = document.querySelector('.sidebar');
                if (this.cek && !sidebarElement.contains(event.target)) {
                    this.cek = false;
                }
            },
            handleScroll() {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;

                if (window.pageYOffset > fixedNav) {
                    header.classList.add('nav-fixed');
                } else {
                    header.classList.remove('nav-fixed');
                }
            },
            // lgScroll(){
            //     const item2 = document.querySelector('.item2');

            //     if(window.pageYOffset > item2.offsetTop){
            //         item2.classList.add('lg-fixed-nav');
            //         item2.classList.remove('aniout');
            //     } else if(window.pageYOffset <= item2.offsetTop) {
            //         item2.classList.remove('lg-fixed-nav');
            //         item2.classList.add('aniout');
            //     }
            // }
        },

}).mount('#nav')
// nav function end

// back up btn start
document.addEventListener('DOMContentLoaded', function() {
const header = document.querySelector('header');
const upper = document.getElementById('up');

function updateClassOnScroll() {
    const fixUp = header.offsetTop;

    if (window.pageYOffset > fixUp) {
        upper.classList.remove('up-btn-non');
        upper.classList.add('up-btn-aktif');
    } else {
        upper.classList.remove('up-btn-aktif');
        upper.classList.add('up-btn-non');
    }
}
// Panggil fungsi pembaruan kelas saat halaman dimuat
updateClassOnScroll();
window.addEventListener('scroll', updateClassOnScroll);

function scrollOnTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
upper.addEventListener('click', scrollOnTop);
});
// back up btn end

// popular function start

document.addEventListener('DOMContentLoaded', function() {
    const cardWrapper = document.querySelector('.wrapper .wrapping');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let scrollPosition = 0;
    const cardWidth = document.querySelector('.card').offsetWidth;

    function nextSlide() {
        scrollPosition += cardWidth;
        updateSlider();
    }

    function prevSlide() {
        scrollPosition -= cardWidth;
        updateSlider();
    }

    function updateSlider() {
        cardWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        updateButtonVisibility();
    }

    function updateButtonVisibility() {
    if (scrollPosition === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    if(scrollPosition >= cardWrapper.scrollWidth - cardWrapper.clientWidth){
        nextBtn.classList.add('hidden');
    }else{
        nextBtn.classList.remove('hidden');
    }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Inisialisasi visibilitas tombol saat halaman dimuat
    updateButtonVisibility();
});

// popular function end

// testimonial function start

const app = Vue.createApp({
    data() {
    return {
        currentIndex: 0,
        contents: [
        {nama: 'Healen Smith', img: './assets/img/profil/Ellipse.svg', komentar: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ipsam facilis esse eos cupiditate nemo?'},
        {nama: 'Mark Spencer', img: './assets/img/profil/Ellipse (1).svg', komentar: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ipsam facilis esse eos cupiditate nemo?'},
        {nama: 'Eun jun-hyo', img: './assets/img/profil/Ellipse (2).svg', komentar: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ipsam facilis esse eos cupiditate nemo?'}
        ],
    };
    },

    computed: {
    currentSlide() {
        return this.contents[this.currentIndex];
    },
    },
    mounted() {
    setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.contents.length;
    }, 4000); // interval
    },
});

app.mount('#testi');

// testimonial function end