"use client";

import { useState } from "react";
import styles from './styles.module.css'
import styled from "styled-components"
import Image from 'next/image'

import menu from "../assets/img/menu/AW_KTC_Sub Brand 2.png"
import icon_1 from "../assets/img/card/income_approve.png"
import icon_2 from "../assets/img/card/atm.png"
import icon_3 from "../assets/img/card/withdraw_online.png"
import icon_4 from "../assets/img/card/installment.png"
import banner from "../assets/img/banner/AW_NOV23-014 - Revamp website KTC PROUD_2Desktop1440 × 540.jpg"
import funct from "../assets/img/function/img_01.png"
import promo1 from "../assets/img/promotion/promo_1.png"
import promo2 from "../assets/img/promotion/promo_2.png"
import step1 from "../assets/img/stepper/step1.png"
import step2 from "../assets/img/stepper/step2.png"
import step3 from "../assets/img/stepper/step3.png"

import card1 from "../assets/img/blog/card1.png"
import card2 from "../assets/img/blog/card2.png"
import card3 from "../assets/img/blog/card3.png"

import fastIcon from "../assets/img/stepper/fast.png"

import table from "../assets/img/table/bg_for_interest.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const Banner = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1240px;
  height: 540px;
`

const Card = styled.a`
border-radius: 10px;
border: 1px solid #DFF4FB;
background: linear-gradient(270deg, rgba(233, 241, 252, 0.00) -58.2%, #E9F1FC 13.92%, #FFF 48.92%, rgba(233, 241, 252, 0.89) 89.88%, rgba(233, 241, 252, 0.00) 148.89%);
`

const CardTitle = styled.div`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 150%; 
font-family: sukhumvit-bold;
color:  #484c4f !important;
`

const CardText = styled.div`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
color:  #484c4f !important;
`

const Home = () => {

  const [open, setOpen] = useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const [faq, setFaq] = useState([
    {
      title: 'บัตรกดเงินสด KTC PROUD ที่มีสัญลักษณ์ UnionPay สามารถใช้ทำธุรกรรมใดได้บ้าง ?',
      test: ''
    },
    {
      title: 'บัตรกดเงินสด KTC PROUD อนุมัติวงเงินสูงสุดเท่าใด ?',
      test: ''
    },
    {
      title: 'บัตรกดเงินสด KTC PROUD ต่างจากสินเชื่ออเนกประสงค์ KTC CASH อย่างไร ?',
      test: ''
    },
    {
      title: 'จะชำระค่างวดบัตรกดเงินสด KTC PROUD ได้ที่ช่องทางการชำระเงินใดได้บ้าง ?',
      test: ''
    },
    {
      title: 'กรณีที่มีบัตรเครดิตหรือบริการอื่น ๆ กับ KTC อยู่แล้ว จะสามารถขอสมัครบัตรกดเงินสด KTC PROUD ได้หรือไม่ อย่างไร ?',
      test: ''
    },
  ])

  const [stickyMenu, setStickyMenu] = useState(['รายละเอียดผลิตภัณฑ์', 'ดอกเบี้ยและวงเงิน', 'โปรโมชัน', 'ขั้นตอนการสมัคร', 'รายละเอียดการสมัคร', 'สนใจสมัคร', 'คำถามที่พบบ่อย', 'บทความ'])
  const [cardGoods, setCardGoodsu] = useState([
    {
      title: "เงินเดือน 12,000 ก็สมัครได้​",
      text: ["รับเงินไวด้วย​", 'บริการโอนสินเชื่อก้อนแรกเข้าบัญชีทันที', 'ที่อนุมัติ​'],
      icon: icon_1
    },
    {
      title: "เงินเดือน 12,000 ก็สมัครได้​",
      text: ["รับเงินไวด้วย​", 'บริการโอนสินเชื่อก้อนแรกเข้าบัญชีทันที', 'ที่อนุมัติ​'],
      icon: icon_2
    },
    {
      title: "เงินเดือน 12,000 ก็สมัครได้​",
      text: ["รับเงินไวด้วย​", 'บริการโอนสินเชื่อก้อนแรกเข้าบัญชีทันที', 'ที่อนุมัติ​'],
      icon: icon_3
    },
    {
      title: "เงินเดือน 12,000 ก็สมัครได้​",
      text: ["รับเงินไวด้วย​", 'บริการโอนสินเชื่อก้อนแรกเข้าบัญชีทันที', 'ที่อนุมัติ​'],
      icon: icon_4
    }
  ])

  return (
    <>
      <Container>
        {/* Carousel */}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          style={{ height: '540px' }}
        >
          <SwiperSlide >

            <Image
              src={banner}
              alt="Menu"
              height={544}
            />

            <Banner>
              <div className={styles['banner-text']}>
                <div className="text-4xl sukhumvit-bold mb-4">
                  บัตรกดเงินสด KTC PROUD
                </div>
                <div className="text-xl sukhumvit-bold my-2">
                  อนุมัติปั๊บ รับเงินกู้ก้อนแรกโอนเข้าบัญชีทันที
                </div>
                <div className="text-md my-2">
                  ขั้นต่ำ 10,000 บาท อัตราดอกเบี้ยและค่าธรรมเนียมการใช้วงเงินสูงสุด 25% ต่อปี <br />
                  เริ่มคำนวณดอกเบี้ยฯ นับตั้งแต่วันที่ได้รับเงินกู้
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-2xl">
                    พิเศษ
                  </div>
                  <div>
                    <div className="text-4xl">
                      รับดอกเบี้ยฯ
                    </div>
                    <div className="flex">
                      <div className="text-6xl sukhumvit-bold">
                        19.99 % ต่อปี
                      </div>
                      <div className="text-4xl">
                        *
                      </div>
                    </div>

                  </div>
                </div>

                <div className="text-md my-2">
                  *อัตราดอกเบี้ยฯ พิเศษ สำหรับเงินกู้ก้อนแรก 50,000 บาทขึ้นไป ที่เลือกผ่อนชำระรายเดือน<br />
                  (12-60เดือน) รายการเบิกถอนอื่นจะคิดอัตราดอกเบี้ยฯ ปกติ<br />
                  เฉพาะลูกค้าที่สมัครและได้รับอนุมัติภายใน 31 ธ.ค. 66
                </div>

                <button className="bg-red-500 rounded-lg shadow-lg">
                  <div className="relative">
                    <svg width="125" height="48" viewBox="0 0 125 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6C0 2.68629 2.68629 0 6 0H51.3424L138 48H6C2.68629 48 0 45.3137 0 42V6Z" fill="url(#paint0_linear_1815_46398)" />
                      <defs>
                        <linearGradient id="paint0_linear_1815_46398" x1="-12.0553" y1="-12.5836" x2="27.9161" y2="79.8361" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" stop-opacity="0.52117" />
                          <stop offset="0.870601" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute" style={{ top: '10px', left: '30px' }}>
                      <p className="sukhumvit-bold">
                        สมัครเลย
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </Banner>
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={banner}
              alt="Menu"
              height={544}
            />
            <Banner>
              <div className={styles['banner-text']}>
                <div className="text-4xl sukhumvit-bold mb-4">
                  บัตรกดเงินสด KTC PROUD
                </div>
                <div className="text-xl sukhumvit-bold my-2">
                  อนุมัติปั๊บ รับเงินกู้ก้อนแรกโอนเข้าบัญชีทันที
                </div>
                <div className="text-md my-2">
                  ขั้นต่ำ 10,000 บาท อัตราดอกเบี้ยและค่าธรรมเนียมการใช้วงเงินสูงสุด 25% ต่อปี <br />
                  เริ่มคำนวณดอกเบี้ยฯ นับตั้งแต่วันที่ได้รับเงินกู้
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="text-2xl">
                    พิเศษ
                  </div>
                  <div>
                    <div className="text-4xl">
                      รับดอกเบี้ยฯ
                    </div>
                    <div className="text-6xl sukhumvit-bold">
                      19.99 % ต่อปี
                    </div>
                  </div>
                </div>
                <div className="text-md my-2">
                  *อัตราดอกเบี้ยฯ พิเศษ สำหรับเงินกู้ก้อนแรก 50,000 บาทขึ้นไป ที่เลือกผ่อนชำระรายเดือน<br />
                  (12-60เดือน) รายการเบิกถอนอื่นจะคิดอัตราดอกเบี้ยฯ ปกติ<br />
                  เฉพาะลูกค้าที่สมัครและได้รับอนุมัติภายใน 31 ธ.ค. 66
                </div>

                <button className="bg-red-500 rounded-lg shadow-lg">
                  <div className="relative">
                    <svg width="125" height="48" viewBox="0 0 125 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6C0 2.68629 2.68629 0 6 0H51.3424L138 48H6C2.68629 48 0 45.3137 0 42V6Z" fill="url(#paint0_linear_1815_46398)" />
                      <defs>
                        <linearGradient id="paint0_linear_1815_46398" x1="-12.0553" y1="-12.5836" x2="27.9161" y2="79.8361" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" stop-opacity="0.52117" />
                          <stop offset="0.870601" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute" style={{ top: '10px', left: '30px' }}>
                      <p className="sukhumvit-bold">
                        สมัครเลย
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </Banner>
          </SwiperSlide>
        </Swiper>

        {/* Menu Sticky */}
        <div className={styles['sticky-menu']} >
          <div className="relative max-w-screen-xl mx-auto p-4">
            <div className="flex justify-between items-center gap-4">
              <Image
                src={menu}
                height={32}
                width={115}
                alt="Menu"
              />
              {
                stickyMenu?.map((menu) => (
                  <div key={menu} className='text-gray-700 text-center pt-1' >{menu}</div>
                )
                )
              }
            </div>
          </div>
        </ div>

        <div className="relative">
          {/* Section #2 */}
          <div className={`${styles['background-menu']}`} >
            <div className="max-w-screen-xl mx-auto px-4">
              {/* Content Aventage */}
              <div className="pb-4 pt-3 z-10">
                <div className="sukhumvit-bold text-2xl text-white mb-8">
                  จุดเด่น
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {
                    cardGoods?.map((card) => (
                      <Card key={card.title} href="#" className="block max-w-sm p-5 bg-white rounded-lg shadow hover:bg-gray-100">
                        <Image
                          src={card.icon}
                          width={80}
                          height={80}
                          alt="icon"
                        />
                        <CardTitle className="mt-4">
                          {card.title}
                        </CardTitle>
                        <CardText className="mt-3">
                          {card.text[0]} <br />
                          {card.text[1]} <br />
                          {card.text[2]}
                        </CardText>
                      </Card>
                    )
                    )
                  }
                </div>
              </div>

              <div style={{ height: '120px' }}>
              </div>

              {/* Feature */}
              <div className="grid grid-cols-2 gap-4 z-10 relative">
                <div className="p-2">
                  <Image
                    src={funct}
                    width={510}
                    height={510}
                    alt="Menu"
                    style={{ flexShrink: 0 }}
                  />
                </div>
                <div className="p-4 grid grid-cols-1 gap-4 content-center text-white">
                  <div className="text-2xl mr-2 sukhumvit-bold ">
                    <span className="text-4xl mr-2 text-amber-300">
                      ฟังก์ชันครบ
                    </span>
                    จบในบัตรเดียว
                  </div>
                  <div className="grid grid-cols-2 gap-6 ">
                    <div className="mt-4">
                      <p className="text-xl sukhumvit-bold mb-4">
                        รูด
                      </p>
                      Lorem ipsum dolor sit amet consectetur. Maecenas est lobortis at porttitor gravid
                    </div>
                    <div className="mt-4">
                      <p className="text-xl sukhumvit-bold mb-4">
                        โอน
                      </p>
                      Lorem ipsum dolor sit amet consectetur. Maecenas est lobortis at porttitor gravid
                    </div>
                    <div className="mt-6">
                      <p className="text-xl sukhumvit-bold mb-4">
                        กด
                      </p>
                      Lorem ipsum dolor sit amet consectetur. Maecenas est lobortis at porttitor gravid
                    </div>
                    <div className="mt-6">
                      <p className="text-xl sukhumvit-bold mb-4">
                        ผ่อน
                      </p>
                      Lorem ipsum dolor sit amet consectetur. Maecenas est lobortis at porttitor gravid
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: '120px' }}>
              </div>

              {/* Load and Credit */}
              <div className="relative text-center z-10">
                <div className="text-2xl sukhumvit-bold mb-6 text-gray-700">
                  ดอกเบี้ยและวงเงิน
                </div>

                <div className="flex content-center justify-center">
                  <div style={{ width: '400px' }}>
                    <button type="button" className="w-full text-gray-700 text-lg sukhumvit-bold py-4 border-b-4 border-blue-500"> อัตราดอกเบี้ยพิเศษ</button>
                  </div>
                  <div style={{ width: '400px' }}>
                    <button type="button" className="w-full text-gray-700 text-lg  py-4 border-b border-blue-500">คำนวณสินเชื่อ</button>
                  </div>
                </div>

                <div style={{ height: '40px' }}>
                </div>

                <div className="gap-4 flex justify-center" >
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="text-center">
                      <thead className="text-lg sukhumvit-bold text-gray-800  bg-amber-400 ">
                        <tr>
                          <th scope="col" className="px-6 py-3" style={{ width: '472px' }}>
                            ยอดรับเงินโอนก้อนแรก
                            <p className="sukhumvit text-sm">
                              (บาท)
                            </p>
                          </th>
                          <th scope="col" className="px-6 py-3" style={{ width: '472px' }}>
                            อัตราดอกเบี้ยต่อปี
                            <p className="sukhumvit text-sm">
                              (แบบลดต้นลดดอก)
                            </p>
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 ">
                          <th scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap">
                            50,000 - 149,999
                          </th>
                          <td className="px-6 py-4  text-gray-900 whitespace-nowrap">
                            19.99%
                          </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50 ">
                          <th scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap ">
                            150,000 เป็นต้นไป
                          </th>
                          <td className="px-6 py-4  text-gray-900 whitespace-nowrap">
                            17.99%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style={{ height: '40px' }}>
                </div>

                <div className=" gap-4 flex justify-center ">
                  <div style={{ width: '944px' }} className="text-sm text-gray-700">
                    อัตราดอกเบี้ยฯคำนวณแบบลดต้นลดดอก (Effective Rate) 17.99% ต่อปี หรือเปรียบเทียบเป็นอัตราดอกเบี้ยฯ  คงที่ประมาณการต่ำสุด (Flat Rate) 0.82% <br />ต่อเดือน สำหรับยอดรับเงินโอนก้อนแรกแบบผ่อนชำระรายงวด สำหรับลูกค้าที่สมัครและได้รับอนุมัติภายใน 31 ส.ค. 66
                  </div>
                </div>
              </div>

              <div style={{ height: '120px' }}>
              </div>

              {/* Promotions  */}
              <div className="relative  z-10">
                <div className="flex justify-between items-end">
                  <div className="text-2xl sukhumvit-bold text-gray-600">
                    โปรโมชั่น
                  </div>
                  <div className="text-md text-gray-600">
                    ดูทั้งหมด
                  </div>
                </div>
                <div style={{ height: '24px' }}>
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}

                  // pagination={{
                  //   clickable: true,
                  // }}
                  // modules={[Pagination]}

                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  loop={true}
                  style={{ height: '222px' }}
                >
                  <SwiperSlide className="rounded-lg">
                    <Image
                      src={promo1}
                      height={222}
                      alt="Menu"
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-lg">
                    <Image
                      src={promo2}
                      height={222}
                      alt="Menu"
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-lg">
                    <Image
                      src={promo1}
                      height={222}
                      alt="Menu"
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-lg">
                    <Image
                      src={promo2}
                      height={222}
                      alt="Menu"
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div style={{ height: '120px' }}>
              </div>

              {/* 3 Step Online Registers  */}
              <div className="relative  z-10">
                <div className="flex justify-center">
                  <div className="text-2xl sukhumvit-bold text-gray-800">
                    3 ขั้นตอนสมัครออนไลน์ง่าย ๆ
                    <p className="text-sm sukhumvit text-center mt-2">
                      เพื่อสมัครบัตรกดเงินสด KTC PROUD
                    </p>
                  </div>
                  <div>

                  </div>
                </div>

                <div style={{ height: '40px' }}>
                </div>

                <div className="flex justify-center">
                  <ol style={{ width: '69%' }} className="flex items-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base ">

                    <li className="flex md:w-full items-center text-white  sm:after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-red-700 after:border-1 after:hidden sm:after:inline-block after:mx-6 ">
                      <div className="rounded-full text-sm flex items-center justify-center bg-red-600" style={{ width: '34px', height: '28px' }}>
                        1
                      </div>
                    </li>

                    <li className="flex md:w-full items-center text-white  sm:after:content-[''] after:w-full after:h-1 after:border-dashed after:border-b after:border-red-700 after:border-1 after:hidden sm:after:inline-block after:mx-6 ">
                      <div className="rounded-full text-sm flex items-center justify-center bg-red-600" style={{ width: '34px', height: '28px' }}>
                        2
                      </div>
                    </li>

                    <li className="flex items-cente  text-white">
                      <div className="rounded-full text-sm flex items-center justify-center bg-red-600" style={{ width: '28px', height: '28px' }}>
                        3
                      </div>
                    </li>

                  </ol>
                </div>

                <div style={{ height: '40px' }}>
                </div>

                <div className="flex  items-center justify-around">

                  <div className="w-1/3 flex flex-col justify-center px-5 text-center">
                    <div className="flex justify-center">
                      <Image
                        src={step1}
                        alt="Menu"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="text-md text-gray-800 ">
                      <p className="text-xl sukhumvit-bold mt-5 mb-3">
                        กรอกข้อมูล
                      </p>
                      เมื่อคุณกรอกข้อมูลส่วนตัว <br />
                      และกดส่งผ่านทางเวปไซต์เรียบร้อยแล้ว <br />
                      เจ้าหน้าที่จะติดต่อกลับภายใน 2 ชม.
                    </div>
                  </div>

                  {/* <div className="p-2 w-1/5 flex justify-center">
                    <Image
                      src={fastIcon}
                      alt="Menu"
                      height={120}
                      width={156}
                    />
                  </div> */}

                  <div className="w-1/3 flex flex-col justify-center px-5 text-center">
                    <div className="flex justify-center">
                      <Image
                        src={step2}
                        alt="Menu"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="text-md text-gray-800 ">
                      <p className="text-xl sukhumvit-bold mt-5 mb-3">
                        นัดรับเอกสาร
                      </p>
                      เมื่อคุณกรอกข้อมูลส่วนตัว <br />
                      และกดส่งผ่านทางเวปไซต์เรียบร้อยแล้ว <br />
                      เจ้าหน้าที่จะติดต่อกลับภายใน 2 ชม.
                    </div>
                  </div>

                  {/* <div className="p-2 w-1/5 flex justify-center">
                    <Image
                      src={fastIcon}
                      alt="Menu"
                      height={120}
                      width={156}
                    />
                  </div> */}

                  <div className="w-1/3 flex flex-col justify-center px-5 text-center">
                    <div className="flex justify-center">
                      <Image
                        src={step3}
                        alt="Menu"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="text-md text-gray-800 ">
                      <p className="text-xl sukhumvit-bold mt-5 mb-3">
                        รอผลการอนุมัติ
                      </p>
                      โดยใช้เวลาในการดำเนินการพิจารณา ประมาณ 3-5 <br />
                      วันทำการ นับจากวันที่ใบสมัครเข้าระบบ <br />
                      โดยเอกสารประกอบการสมัครต้องครบถ้วนสมบูรณ์ <br />
                      และได้รับการยืนยันตัวตนจากผู้สมัคร
                    </div>
                  </div>

                </div>


              </div>

              <div style={{ height: '120px' }}>
              </div>

            </div>
          </div>

          <div className={`${styles['bg-fade']}`} >
          </div>
        </div>

        {/* Section #3 */}
        <section>
          <div className="max-w-screen-xl mx-auto px-4 ">

            {/* Register Retail */}
            <div className="relative">
              <div className="text-2xl sukhumvit-bold mb-6 text-center">
                รายละเอียดการสมัคร
              </div>

              <div className="flex content-center justify-center">
                <div style={{ width: '400px' }}>
                  <button type="button" className="w-full text-lg sukhumvit-bold py-4 border-b-4 border-blue-500"> ผู้มีรายได้ประจำ</button>
                </div>
                <div style={{ width: '400px' }}>
                  <button type="button" className="w-full text-gray-700 text-lg  py-4 border-b border-blue-500">เจ้าของกิจการ​</button>
                </div>
              </div>

              <div style={{ height: '40px' }}>
              </div>

              <div className="flex justify-center" >
                <div className="text-gray-700 w-full" style={{ maxWidth: '800px' }}>
                  <div className="text-lg sukhumvit-bold mb-2">
                    คุณสมบัติผู้สมัคร
                  </div>
                  <div className="text-md pl-10">
                    <ul className="list-disc">
                      <li>สัญชาติไทย อายุ  20-60 ปี​</li>
                      <li>รายได้ขั้นต่ำ 12,000 บาท/เดือน​</li>
                      <li>อายุการทำงาน 4 เดือนขึ้นไป​</li>
                      <li>เบอร์โทรศัพท์ที่สามารถติดต่อได้ ที่อยู่อาศัยหรือที่ทำงาน</li>
                    </ul>
                  </div>

                  <div style={{ height: '32px' }}>
                  </div>

                  <div className="text-lg sukhumvit-bold mb-2">
                    เอกสารการสมัคร
                  </div>
                  <div className="text-md pl-10">
                    <ul className="list-disc">
                      <li>สำเนาบัตรประจำตัวประชาชน​</li>
                      <li>สำเนาบัตรประจำตัวข้าราชการหรือรัฐวิสาหกิจ และสำเนาทะเบียนบ้าน​</li>
                      <li>หนังสือรับรองเงินเดือน / สลิปเงินเดือน เดือนล่าสุด (ฉบับจริง)</li>
                      <li>สำเนาบัญชีธนาคารย้อนหลัง 3 เดือน (ชื่อผู้กู้)​​</li>
                      <li>สำเนาหน้าแรกของบัญชีธนาคารเพื่อรับเงินโอน (ชื่อผู้กู้)​​​</li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: '120px' }}>
            </div>

            {/* Form Register */}
            <div className="relative">
              <iframe
                src="https://www.ktc.co.th/apply/webmain-proud"
                title="iframe Example 1"
                className="h-full w-full"
              >
              </iframe>
            </div>

            <div style={{ height: '120px' }}>
            </div>

            {/* FAQ */}
            <div className="relative">
              <div className="text-2xl sukhumvit-bold mb-6 text-center">
                คำถามที่พบบ่อย
              </div>

              <div style={{ height: '40px' }}>
              </div>

              {
                faq.map((faqs) => (

                  <div key={faqs.title}>
                    <h2 >
                      <button type="button" className="flex items-center justify-between w-full border-b p-5 text-gray-700 border-gray-200 focus:ring-1 focus:ring-gray-200   hover:bg-gray-100 gap-3">
                        <span className="flex items-center sukhumvit-bold">
                          {faqs.title}
                        </span>
                        <div>
                          +
                        </div>

                      </button>
                    </h2>
                    <div className="hidden" aria-labelledby="accordion-open-heading-1">
                      <div className="p-5 border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                      </div>
                    </div>
                  </div>
                ))
              }

              <div style={{ height: '40px' }}>
              </div>

              <div className="flex justify-center">

                <button className="text-blue-800 border border-blue-500 rounded-lg px-6 py-2 sukhumvit-bold">
                  แสดงคำถามทั้งหมด
                </button>
              </div>

            </div>

            <div style={{ height: '120px' }}>
            </div>

            {/* Blog */}
            <div className="relative">
              <div className="text-2xl sukhumvit-bold mb-6 text-center">
                บทความที่เกี่ยวข้อง
              </div>

              <div style={{ height: '40px' }}>
              </div>

              <div className="flex justify-center items-start gap-4">
                <div className="w-1/3 flex flex-col justify-center">
                  <Image
                    src={card1}
                    height={217}
                    alt="icon"
                    className="rounded-lg w-full"
                  />
                  <div style={{ height: '20px' }}>
                  </div>
                  <div className="text-gray-700">
                    <p className="sukhumvit-bold">
                      ทำบัตรกดเงินสดใบไหนดี? เปิด 7 เหตุผล ทำไมถึงน่าใช้
                    </p>
                    <p className="text-sm mt-2">

                      การวางแผนการเงินเป็นสิ่งที่คนวัยทำงานควรคำนึงถึง ไม่ว่าจะเป็นเด็กจบใหม่หรือมนุษย์เงินเดือนมือโปรก็ย่อมอยากวางแผนการเงินให้การใช้จ่ายไม่ติดขัด
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <Image
                    src={card2}
                    height={217}
                    alt="icon"
                    className="rounded-lg"
                  />
                  <div style={{ height: '20px' }}>
                  </div>
                  <div className="text-gray-700">
                    <p className="sukhumvit-bold">
                      ทำบัตรกดเงินสดใบไหนดี? เปิด 7 เหตุผล ทำไมถึงน่าใช้
                    </p>
                    <p className="text-sm mt-2">

                      การวางแผนการเงินเป็นสิ่งที่คนวัยทำงานควรคำนึงถึง ไม่ว่าจะเป็นเด็กจบใหม่หรือมนุษย์เงินเดือนมือโปรก็ย่อมอยากวางแผนการเงินให้การใช้จ่ายไม่ติดขัด
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <Image
                    src={card3}
                    height={217}
                    alt="icon"
                    className="rounded-lg"
                  />
                  <div style={{ height: '20px' }}>
                  </div>
                  <div className="text-gray-700">
                    <p className="sukhumvit-bold">
                      ทำบัตรกดเงินสดใบไหนดี? เปิด 7 เหตุผล ทำไมถึงน่าใช้
                    </p>
                    <p className="text-sm mt-2">

                      การวางแผนการเงินเป็นสิ่งที่คนวัยทำงานควรคำนึงถึง ไม่ว่าจะเป็นเด็กจบใหม่หรือมนุษย์เงินเดือนมือโปรก็ย่อมอยากวางแผนการเงินให้การใช้จ่ายไม่ติดขัด
                    </p>
                  </div>
                </div>
              </div>


            </div>

            <div style={{ height: '240px' }}>
            </div>


          </div>
        </section>


      </Container >
    </>
  )
}

export default Home
