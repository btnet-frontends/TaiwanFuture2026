const { ref, onMounted, computed, nextTick, watch } = Vue;
const app = {
    setup() {
        const menuIsopen = ref(false)
        const isPreload = ref(false)
        const achievement = ref([])
        const issue = ref([])
        const speakers = ref([])
        const prizeIsOpen = ref(false)
        const articles1 = ref([])
        const articles2 = ref([])
        const reviews = ref([])
        const logos=ref([])
        let swiper1 = null
        let swiper2 = null
        let swiper3 = null
        axios.get(`assets/js/data.json?timestamp=${new Date().getTime()}`)
            .then(res => res.data)
            .then(data => {
                achievement.value = data.achievement
                issue.value = data.issue
                speakers.value = data.speakers
                articles1.value = data.articles1
                reviews.value = data.reviews
                logos.value=data.logos
                nextTick(() => {
                    swiper1 = new Swiper(".mySwiper1", {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        loop: true,
                        centeredSlides: false,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                            },
                            650: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            1450: {
                                slidesPerView: 4,
                            },
                        },
                        navigation: {
                            nextEl: ".swiper-button-next1",
                            prevEl: ".swiper-button-prev1",
                        },
                        pagination: {
                            el: ".swiper-pagination1",
                            clickable: true,
                        },
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        }
                    })
                    // swiper2 = new Swiper(".mySwiper2", {
                    //     slidesPerView: 4,
                    //     spaceBetween: 30,
                    //     slidesPerGroup: 1,
                    //     loop: true,
                    //     centeredSlides: false,
                    //     breakpoints: {
                    //         0: {
                    //             slidesPerView: 1,
                    //         },
                    //         650: {
                    //             slidesPerView: 2,
                    //         },
                    //         1100: {
                    //             slidesPerView: 3,
                    //         },
                    //         1450: {
                    //             slidesPerView: 4,
                    //         },
                    //     },
                    //     navigation: {
                    //         nextEl: ".swiper-button-next2",
                    //         prevEl: ".swiper-button-prev2",
                    //     },
                    //     pagination: {
                    //         el: ".swiper-pagination2",
                    //         clickable: true,
                    //     },
                    //     autoplay: {
                    //         delay: 4000,
                    //         disableOnInteraction: false,
                    //     }
                    // })
                    swiper3 = new Swiper(".mySwiper3", {
                        slidesPerView: 4,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        loop: true,
                        centeredSlides: false,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                            },
                            650: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            1450: {
                                slidesPerView: 4,
                            },
                        },
                        navigation: {
                            nextEl: ".swiper-button-next3",
                            prevEl: ".swiper-button-prev3",
                        },
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        }
                    })
                    isPreload.value = true
                })
            })

        const popupIsopen = ref(false)
        const current_speaker = ref(null)
        //講師彈跳視窗
        function speaker_popup(person) {
            current_speaker.value = person
            popupIsopen.value = true
        }

        function speaker_close() {
            popupIsopen.value = false
            document.querySelector('.speaker-popup .popup-content').scrollTop = 0
        }

        //滾動
        let position = 0
        function scrollTo(section) {

            const target = document.querySelector(`.${section}`)
            if (target) {
                position = target.offsetTop
            }

            if (window.innerWidth <= 1360) {
                position -= 65
            } else {
                position -= 75
            }
            if (section == "home") {
                position = 0
            }
            else if (section == "article") {
                position = document.querySelector(`.${section}`).offsetTop - 10
            }
            else if (section == "award-list" || section == "signup") {
                position = document.querySelector(".information").offsetTop + document.querySelector(`.${section}`).offsetTop - 100
            }
            if (menuIsopen.value) {
                setTimeout(scrollToPosition, 300)
            }
            else {
                scrollToPosition()
            }
            menuIsopen.value = false
        }
        function scrollToPosition() {
            window.scrollTo({
                top: position,
                behavior: "smooth"
            })
        }
        const isScroll = ref(false)
        window.addEventListener("scroll", () => {
            var top = window.scrollY
            var a = document.querySelector(".kv").offsetHeight
            if (top >= a / 2) {
                isScroll.value = true
            }
            else {
                isScroll.value = false
            }
        })

        //議程
        const agendaStatus = ref(true)
        const agendaIsOpen = ref(false)
        function agendaClick() {
            agendaStatus.value = !agendaStatus.value
        }

        //提交表單
        const formData = ref({
            Name: "",
            Gender: "",
            Cell_phone: "",
            Email: "",
            Industry_type: "",
            Company_name: "",
            Job_title: "",
            Age: "",
            Session1: "",
            Session2: "",
            Session3: "",
            Session4: "",
            Is_agree: ""
        })

        var nameRegex = /^(?!\s*$)[\u4e00-\u9fa5A-Za-z\s]+$/
        var mobileRegex = /^09\d{8}$/
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        var ageRegex = /^[1-9]\d?$/
        const signup_popup = ref(false)
        const btnClick = ref(false)
        function signup() {
            if (!btnClick.value) {

                if (formData.value.Name == '') {
                    alert('請填寫姓名')
                }
                else if (!nameRegex.test(formData.value.Name)) {
                    alert('姓名格式錯誤')
                }
                else if (formData.value.Gender == '') {
                    alert('請選擇性別')
                }
                else if (formData.value.Cell_phone == '') {
                    alert('請填寫手機號碼')
                }
                else if (!mobileRegex.test(formData.value.Cell_phone)) {
                    alert('手機號碼格式錯誤')
                }
                else if (formData.value.Email == '') {
                    alert('請填寫E-mail')
                }
                else if (!emailRegex.test(formData.value.Email)) {
                    alert('E-mail格式錯誤')
                }
                else if (formData.value.Industry_type == '') {
                    alert('請選擇產業別')
                }
                else if (formData.value.Company_name == '') {
                    alert('請填寫公司')
                }
                else if (formData.value.Job_title == '') {
                    alert('請填寫職稱')
                }
                else if (formData.value.Age == '') {
                    alert('請填寫年齡')
                }
                else if (!ageRegex.test(formData.value.Age)) {
                    alert('請輸入1~99的數字')
                }
                else if (formData.value.Session1 == '' && formData.value.Session2 == '' && formData.value.Session3 == '' && formData.value.Session4 == '') {
                    alert('請選擇參加場次')
                }
                else if (formData.value.Is_agree == '') {
                    alert('請勾選同意')
                }
                else {
                    ['Session1', 'Session2', 'Session3', 'Session4'].forEach(session => {
                        if (formData.value[session])
                            formData.value[session] = 'v'
                    })
                    // console.log(formData.value)
                    btnClick.value = true
                    // axios.post("https://events.businesstoday.com.tw/backend/TaiwanFuture2025/sign_up?v=" + new Date(), formData.value)
                    //     .then((res) => {
                    //         if (res.data.bIsSuccess == 1) {
                    //             signup_popup.value = true
                    //         }
                    //         else {
                    //             alert(res.data.sError)
                    //         }
                    //         btnClick.value = false
                    //     })
                    //     .catch((error) => {
                    //         alert("連線失敗，請重新試一次")
                    //     })
                }
            }
        }

        function signup_popup_close() {
            location.href = "./index.html"
        }

        return {
            isPreload, menuIsopen, achievement, issue, speakers, current_speaker,
            scrollTo, isScroll, agendaStatus, agendaClick, agendaIsOpen,
            prizeIsOpen, swiper1, swiper2, swiper3, articles1, reviews,logos,
            formData, signup, signup_popup, signup_popup_close,
            speaker_popup, speaker_close, popupIsopen,

        }
    }
}
Vue.createApp(app).mount("#app")