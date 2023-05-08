const menu = [
    {
      id: 1,
      title: "(은이세끼) 송은이의 대파송송 국물 떡볶이 전참시 밀키트 (3팩, 6인분)",
      category: "인기상품",
      discountPrice: "20,400",
      won: "원",
      des: "2",
      percent: "%",
      price: "19,800",
      img: "https://shop-phinf.pstatic.net/20230222_298/1677027742829hkuHR_JPEG/78163638547196153_1610216070.jpg?type=f295_381",
    },
    {
      id: 2,
      title: "캠핑음식 모듬 수제꼬치 구이 닭꼬치 파닭 베이컨 16종",
      category: "인기상품",
      discountPrice: "20,900",
      won: "원",
      des: "71",
      percent: "%",
      price: "5,900",
      img: "https://shop-phinf.pstatic.net/20220729_172/1659085299818u52N1_JPEG/60221195534089306_303729288.jpg?type=f295_381",
    },
    {
      id: 3,
      title: "대저 짭짤이 토마토 고당도 부산 대저토마토 2.5kg 로얄과",
      category: "인기상품",
      discountPrice: "32,900",
      won: "원",
      des: "12",
      percent: "%",
      price: "28,900",
      img: "https://shop-phinf.pstatic.net/20230224_120/1677220346261dVDm5_JPEG/78356129949020730_321057162.jpg?type=f295_381",
    },
    {
      id: 4,
      title: "(은이세끼) 송은이의 대파송송 국물 떡볶이 밀키트 (2인분)",
      category: "인기상품",
      discountPrice: "",
      won: "",
      des: "",
      percent: "",
      price: "6,800",
      img: "https://shop-phinf.pstatic.net/20230227_223/1677468794122H787x_JPEG/78604636830836295_303039859.jpg?type=f295_381",
    },
    {
      id: 5,
      title: "셰프 수제소스 파스타 2인분 5종 쿠킹박스 전참시 밀키트 홈파티 캠핑 음식",
      category: "😘뚝딱한끼제안",
      discountPrice: "17,900",
      won: "원",
      des: "22",
      percent: "%",
      price: "13,900",
      img: "https://shop-phinf.pstatic.net/20221209_253/1670578945868JVAwp_JPEG/71714729525924966_705509236.jpg?type=f295_381",
    },
    {
      id: 6,
      title: "알듬뿍 냉장 전참시 알탕 해산물 캠핑 밀키트 술안주 3~4인분 이상",
      category: "🍲따끈한국물",
      discountPrice: "35,000",
      won: "원",
      des: "35",
      percent: "%",
      price: "22,500",
      img: "https://shop-phinf.pstatic.net/20220908_91/1662621292612nhfPd_JPEG/63757127436359070_1121437443.jpg?type=f295_381",
    },
    {
      id: 7,
      title: "꽉찬 마블링 꽃갈비로만 만든 우대갈비 홍김동전 캠핑 바베큐 전참시 손님접대용 캠마카세",
      category: "🍗캠핑스페셜",
      discountPrice: "76,900",
      won: "원",
      des: "36",
      percent: "%",
      price: "48,900",
      img: "https://shop-phinf.pstatic.net/20220609_275/1654742037913ET63k_JPEG/55877864870424413_1254032769.jpg?type=f295_381",
    },
    {
      id: 8,
      title: "쟌슨빌 소세지 골라담기 (킬바사, 오리지널 스모크, 베다체다 치즈, 갈릭브릿)",
      category: "😘뚝딱한끼제안",
      discountPrice: "6,900",
      won: "원",
      des: "5",
      percent: "%",
      price: "6,550",
      img: "https://shop-phinf.pstatic.net/20220527_249/16536219702480rxs9_JPEG/54757798069703798_46598200.jpg?type=f295_381",
    },
    {
      id: 9,
      title: "소고기 스키야키 밀키트 캠핑요리 2~3인분 1034g",
      category: "🍲따끈한국물",
      discountPrice: "21,900",
      won: "원",
      des: "13",
      percent: "%",
      price: "18,900",
      img: "https://shop-phinf.pstatic.net/20220810_62/16601142824712o8hC_JPEG/61250171098023813_1460064378.jpg?type=f295_381",
    },
    {
      id: 10,
      title: "소곱창 대창 특양 구이 180g 200g 소스포함",
      category: "🥂멋진홈파티",
      discountPrice: "57,800",
      won: "원",
      des: "82",
      percent: "%",
      price: "10,000",
      img: "https://shop-phinf.pstatic.net/20221121_180/1668997222729XTHoy_JPEG/70133057541274239_45102532.jpg?type=f295_381",
    },
    {
      id: 11,
      title: "60시간 저온숙성 수제 화덕피자 냉동 9종 10인치",
      category: "😘뚝딱한끼제안",
      discountPrice: "16,400",
      won: "원",
      des: "27",
      percent: "%",
      price: "11,900",
      img: "https://shop-phinf.pstatic.net/20220722_209/1658476652890z8c5g_JPEG/59612436590463957_383639724.jpg?type=f295_381",
    },
    {
      id: 12,
      title: "깐새우장 양념 간장 밥도둑 순살 대하장",
      category: "😘뚝딱한끼제안",
      discountPrice: "25,900",
      won: "원",
      des: "61",
      percent: "%",
      price: "9,900",
      img: "https://shop-phinf.pstatic.net/20220930_114/1664516863399IpUFw_JPEG/65652759036233729_1920046230.jpg?type=f295_381",
    },
    {
      id: 13,
      title: "깐새우장 양념 간장 밥도둑 순살 대하장",
      category: "🐟신선별미",
      discountPrice: "24,900",
      won: "원",
      des: "24",
      percent: "%",
      price: "18,900",
      img: "https://shop-phinf.pstatic.net/20220829_148/1661764006853o279U_JPEG/62899902574854049_90590621.jpg?type=f295_381",
    },
    {
      id: 14,
      title: "깐새우장 양념 간장 밥도둑 순살 대하장",
      category: "🍗캠핑스페셜",
      discountPrice: "63,800",
      won: "원",
      des: "68",
      percent: "%",
      price: "1,900",
      img: "https://shop-phinf.pstatic.net/20221125_226/1669362604623odlwo_JPEG/70498438353365383_14716486.jpg?type=f295_381",
    },
    {
      id: 15,
      title: "국내가공 오동통 반건조 가문어통족 400g 안주 세트 대왕오징어 땅콩 마요네즈 버터 포함",
      category: "🥂멋진홈파티",
      discountPrice: "19,800",
      won: "원",
      des: "31",
      percent: "%",
      price: "13,600",
      img: "https://shop-phinf.pstatic.net/20220921_11/1663740604654KjYcY_JPEG/64876450347238619_2018832812.jpg?type=f295_381",
    },
    {
      id: 16,
      title: "굳지않는 쫄깃한 앙꼬절편 떡 4가지맛 500g",
      category: "🍊음료&계절간식",
      discountPrice: "7,900",
      won: "원",
      des: "25",
      percent: "%",
      price: "5,900",
      img: "https://shop-phinf.pstatic.net/20221228_259/16721910772314xb2j_JPEG/73326965923658845_153504284.jpg?type=f295_381",
    },
    {
      id: 17,
      title: "프리미엄 남미식 스웨덴식 영국식 전통 수제 소시지 국내산 돼지고기",
      category: "🥂멋진홈파티",
      discountPrice: "12,900",
      won: "원",
      des: "23",
      percent: "%",
      price: "9,900",
      img: "https://shop-phinf.pstatic.net/20230324_67/1679642416156HM7nM_JPEG/80778199870150426_617576227.jpg?type=f295_381",
    },
    {
      id: 18,
      title: "널담 제로스파클링 0칼로리 무설탕 탄산음료 1box (24개입)",
      category: "🍊음료&계절간식",
      discountPrice: "36,900",
      won: "원",
      des: "24",
      percent: "%",
      price: "27,900",
      img: "https://shop-phinf.pstatic.net/20220830_24/1661838324817kfdhh_PNG/62974220514929870_1670081106.png?type=f295_381",
    },
    {
      id: 19,
      title: "셰프가 만든 간장 연어장 노르웨이 생연어 반찬 덮밥",
      category: "🥂멋진홈파티",
      discountPrice: "49,800",
      won: "원",
      des: "62",
      percent: "%",
      price: "18,600",
      img: "https://shop-phinf.pstatic.net/20220823_132/1661243150003gKCmy_JPEG/62378929718221866_601296371.jpg?type=f295_381",
    },
    {
      id: 20,
      title: "육즙가득 쟌슨빌 쌀 핫도그 골라담기 (크리스피, 먹물, 반반) 80g x 5팩",
      category: "🍊음료&계절간식",
      discountPrice: "10,000",
      won: "원",
      des: "21",
      percent: "%",
      price: "7,900",
      img: "https://shop-phinf.pstatic.net/20220719_195/1658194772058IXz5K_JPEG/59330606861256888_215988323.jpg?type=f295_381",
    },
    {
      id: 21,
      title: "전복죽 밀키트 소고기 미역국 간편 영양죽 실속 선물세트 간편조리",
      category: "🐟신선별미",
      discountPrice: "37,700",
      won: "원",
      des: "68",
      percent: "%",
      price: "12,000",
      img: "https://shop-phinf.pstatic.net/20230106_16/1672997758146eYzJu_JPEG/74133585958575527_15365119.jpg?type=f295_381",
    },
    {
      id: 22,
      title: "자연해동 인절미 앙금 찹쌀떡 4종 550g 쑥떡 호박 흑임자",
      category: "🍊음료&계절간식",
      discountPrice: "20,900",
      won: "원",
      des: "35",
      percent: "%",
      price: "13,500",
      img: "https://shop-phinf.pstatic.net/20221228_129/1672191941933T7BYx_JPEG/73327787635993095_817735123.jpg?type=f295_381",
    },
    {
      id: 23,
      title: "육즙가득 쟌슨빌 소세지 볶음밥 골라담기 (야채, 김치, 중화) 250g x 3팩",
      category: "🥂멋진홈파티",
      discountPrice: "10,000",
      won: "원",
      des: "13",
      percent: "%",
      price: "8,670",
      img: "https://shop-phinf.pstatic.net/20220719_173/1658199257403ObUe7_JPEG/59335092225578967_1401559929.jpg?type=f295_381",
    },
    {
      id: 24,
      title: "살가득 소꼬리 알꼬리 1kg 찜용 탕용 수육용 캐나다산 엑셀비프",
      category: "🥂멋진홈파티",
      discountPrice: "54,000",
      won: "원",
      des: "35",
      percent: "%",
      price: "34,900",
      img: "https://shop-phinf.pstatic.net/20230217_266/1676623125627A7Q5U_JPEG/77758909319819133_65226001.jpg?type=f295_381",
    },
    {
      id: 25,
      title: "연평도 순살 간장게장 양념게장 간편 꽃게장",
      category: "😘뚝딱한끼제안",
      discountPrice: "22,900",
      won: "원",
      des: "27",
      percent: "%",
      price: "16,500",
      img: "https://shop-phinf.pstatic.net/20230210_128/1676016236203MNe2d_JPEG/3318920037434207_1351969558.jpg?type=f295_381",
    },
    {
      id: 26,
      title: "연평도 알배기 암꽃게 간장게장 양념게장 알배기",
      category: "😘뚝딱한끼제안",
      discountPrice: "150,000",
      won: "원",
      des: "73",
      percent: "%",
      price: "39,800",
      img: "https://shop-phinf.pstatic.net/20230203_130/1675399598489wJAYT_JPEG/76535426268079783_1038094855.jpg?type=f295_381",
    },
    {
      id: 27,
      title: "[부산 기능장] 초코 블루베리 카라멜 촉촉 파운드 케이크",
      category: "🍊음료&계절간식",
      discountPrice: "",
      won: "",
      des: "",
      percent: "",
      price: "19,800",
      img: "https://shop-phinf.pstatic.net/20230127_75/1674805371110Yvq7k_JPEG/75941198894816507_1045339401.jpg?type=f295_381",
    },
    {
      id: 28,
      title: "간편 전자레인지 2분 고등어 갈치 가자미 임연수 꽁치 구이 5개 세트 구운 생선",
      category: "🥂멋진홈파티",
      discountPrice: "58,000",
      won: "원",
      des: "39",
      percent: "%",
      price: "19,800",
      img: "https://shop-phinf.pstatic.net/20221103_180/1667465707655RFtV0_JPEG/68601596322991688_1634423106.jpg?type=f295_381",
    },
    {
      id: 29,
      title: "돼지 목살 찹스테이크 쿠킹박스 밀키트 홈파티 캠핑 785g",
      category: "🍗캠핑스페셜",
      discountPrice: "20,900",
      won: "원",
      des: "19",
      percent: "%",
      price: "16,900",
      img: "https://shop-phinf.pstatic.net/20221207_249/1670406278464j4FpP_JPEG/71542106226067279_549671439.jpg?type=f295_381",
    },
    {
      id: 30,
      title: "국내산 자포니카 민물장어 1kg 손질후 700g 내외",
      category: "🥂멋진홈파티",
      discountPrice: "45,000",
      won: "원",
      des: "14",
      percent: "%",
      price: "38,500",
      img: "https://shop-phinf.pstatic.net/20220718_57/1658128111191votwl_JPEG/59264009859500063_312383622.jpg?type=f295_381",
    },
  ];
  
  const sectionCenter = document.querySelector(".all > .item_wrap");
  const btnContainer = document.querySelector(".btn-container");

  // 페이지 로드시 모든 아이템을 보여주기
  window.addEventListener("DOMContentLoaded", () => {
    dispalyMenuItems(menu);
    dispalyMenuButtons();
  });
  
  function dispalyMenuItems(menuItems) {
    let dispalyMemu = menuItems.map((item) => {
      return `
      <div class="item">
        <div class="product_info">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="item_thumb">
                <div class="inner">
                    <a href="#">
                        <img src="./images/ico_newpage.png" alt="">
                    </a>
                    <a href="#">
                        <img src="./images/ico_cart.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="item_text">
            <p class="item_tit">
              ${item.title}
            </p>
            <div class="discount_price">
                <strong>${item.discountPrice}</strong>
                ${item.won}
            </div>
            <div class="price_wrap">
                <div class="dc">${item.des}${item.percent}</div>
                <div class="price">
                    <p>${item.price}<span>원</span></p>
                </div>
            </div>
        </div>
      </div>
      `;
    });
    dispalyMemu = dispalyMemu.join("");
    // console.log(dispalyMemu);
    sectionCenter.innerHTML = dispalyMemu; 
  }
  
  function dispalyMenuButtons() {
    const categoires = menu.reduce((values, item) => {
      if(!values.includes(item.category)){
        values.push(item.category);
      };
      return values;
    }, ["인기상품"]);
    const categoryBtns = categoires.map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    // console.log(categoryBtns);
    btnContainer.innerHTML = categoryBtns;
  
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
    console.log(filterBtns);
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
          if(menuItem.category === category){
            return menuItem;
          }
        });
        if(category === "all") {
          dispalyMenuItems(menu);
        } else {
          dispalyMenuItems(menuCategory);
        }
      });
    });
  }
  
  