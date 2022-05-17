import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { PagerIndicator } from "components/PagerIndicator";
import { Line } from "components/Line";
import { Button } from "components/Button";

const HomepagePage = () => {
  const handleNavigate1 = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      <Column
        className="bg-white_A700 items-center justify-start mx-[auto] w-[100%]"
        compId="32:255"
        comWidth={1440}
        comHeight={4536}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="font-interui lg:h-[567px] xl:h-[648px] h-[728px] 2xl:h-[729px] 3xl:h-[875px] w-[100%]"
          compId="82"
          comWidth={1440}
          comHeight={728}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute lg:h-[567px] xl:h-[648px] h-[728px] 2xl:h-[729px] 3xl:h-[875px] inset-[0] w-[100%]"
            compId="84"
            comWidth={1440}
            comHeight={728}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src="img_heroimage.png"
              className="absolute lg:h-[567px] xl:h-[648px] h-[728px] 2xl:h-[729px] 3xl:h-[875px] inset-[0] object-cover w-[100%]"
              compId="43:3"
              comWidth={1440}
              comHeight={728}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="heroimage"
            />
            <Image
              src="img_navbarcontaine.svg"
              className="absolute h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-cover top-[0] w-[100%]"
              compId="39:10"
              comWidth={1440}
              comHeight={100}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="NavbarContaine"
            />
          </Stack>
          <Column
            className="absolute bottom-[6%] inset-x-[0] items-center justify-start mx-[auto] w-[94%]"
            compId="59"
            comWidth={1348}
            comHeight={522}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-between w-[100%]"
              compId="57"
              comWidth={1348}
              comHeight={249}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src="img_group1.svg"
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] lg:mt-[117px] xl:mt-[134px] mt-[151px] 3xl:mt-[181px] object-contain 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
                compId="415:7"
                comWidth={98}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group1"
              />
              <Column
                className="items-center justify-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] w-[70%]"
                compId="44:7"
                comWidth={948}
                comHeight={241}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-interui mx-[auto] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_901 text-left lg:tracking-ls3 2xl:tracking-ls4 xl:tracking-ls4 tracking-ls4800000000000001 3xl:tracking-ls5"
                  compId="43:7"
                  comWidth={139}
                  comHeight={35}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >{`INDOORS`}</Text>
                <Text
                  className="font-merriweather font-normal lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] not-italic lg:text-fs32 xl:text-fs37 text-fs42 3xl:text-fs50 text-gray_901 text-left"
                  compId="43:8"
                  comWidth={948}
                  comHeight={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`See Bamboo’s New Range Of Indoor Furniture`}</Text>
                <Text
                  className="font-interui font-normal leading-lh lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_901 w-[59%]"
                  compId="43:9"
                  comWidth={556}
                  comHeight={104}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  {
                    <>
                      {`Classic meet modern living, `}
                      <br />
                      {`Bamboo has a fantastic range of indoor furniture,`}
                      <br />
                      {`perfect for any modern home.`}
                    </>
                  }
                </Text>
              </Column>
              <Image
                src="img_group2_1.svg"
                className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] lg:mt-[117px] xl:mt-[134px] mt-[151px] 3xl:mt-[181px] object-contain 3xl:w-[117px] lg:w-[76px] xl:w-[87px] w-[98px]"
                compId="415:4"
                comWidth={98}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group2"
              />
            </Row>
            <Stack
              className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] mx-[auto] w-[14%]"
              compId="86"
              comWidth={188}
              comHeight={60}
              compLeft={10}
              compRight={10}
              compType="Stack"
            >
              <Image
                src="img_btncontainer_1.svg"
                className="common-pointer absolute lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-[0] object-cover rounded-radius30 w-[100%]"
                compId="43:12"
                comWidth={188}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Image"
                onClick={handleNavigate1}
                alt="btnContainer"
              />
              <Text
                className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left tracking-ls1 w-[max-content]"
                compId="43:13"
                comWidth={97}
                comHeight={26}
                compLeft={46}
                compRight={45}
                compType="Text"
              >{`SEE MORE`}</Text>
            </Stack>
            <PagerIndicator
              className="h-[25px] lg:mt-[127px] xl:mt-[145px] mt-[164px] 3xl:mt-[196px] mx-[auto] w-[auto]"
              compId="4"
              comWidth={160}
              comHeight={25}
              compLeft={10}
              compRight={10}
              compType="PagerIndicator"
              count={4}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] bg-white_A700"
              activeIndex={undefined}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[25px] h-[25px] border-white_A700 border-2 border-solid"
              sliderRef={undefined}
              selectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] mx-[10.00px] xl:mx-[8px]"
              unselectedWrapperCss="2xl:mx-[10px] 3xl:mx-[12px] inline-block lg:mx-[7px] mx-[10.00px] xl:mx-[8px]"
            />
          </Column>
        </Stack>
        <Text
          className="font-bold font-merriweather 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-black_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left"
          compId="32:333"
          comWidth={414}
          comHeight={73}
          compLeft={10}
          compRight={10}
          compType="Text"
        >{`Featured Product`}</Text>
        <Row
          className="font-jacquesfrancois items-center justify-start lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]"
          compId="78"
          comWidth={1440}
          comHeight={2240}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] w-[28%]"
            compId="75"
            comWidth={396}
            comHeight={2160}
            compLeft={96}
            compRight={0}
            compType="Column"
          >
            <Image
              src="img_product1.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] object-cover rounded-radius10 w-[100%]"
              compId="32:321"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product1"
            />
            <Image
              src="img_product4.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:324"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product4"
            />
            <Image
              src="img_product7.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:327"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product7"
            />
            <Image
              src="img_product10.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:330"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product10"
            />
          </Column>
          <Column
            className="lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[28%]"
            compId="77"
            comWidth={396}
            comHeight={2190}
            compLeft={30}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] w-[100%]"
              compId="88"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src="img_productimg_1.png"
                className="absolute lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] inset-[0] object-cover rounded-radius10 w-[100%]"
                compId="32:322"
                comWidth={396}
                comHeight={510}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Productimg"
              />
              <Row
                className="absolute bg-gradient  bottom-[0] items-center justify-end rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compId="60"
                comWidth={396}
                comHeight={70}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-right text-white_A700"
                  compId="32:380"
                  comWidth={82}
                  comHeight={38}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`$400.00`}</Text>
                <Image
                  src="img_group3_1.svg"
                  className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain lg:w-[32px] xl:w-[37px] w-[42px] 3xl:w-[50px]"
                  compId="37:14"
                  comWidth={42}
                  comHeight={42}
                  compLeft={83}
                  compRight={32}
                  compType="Image"
                  alt="Group3"
                />
              </Row>
            </Stack>
            <Image
              src="img_product5.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] object-cover rounded-radius10 w-[100%]"
              compId="32:325"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product5"
            />
            <Image
              src="img_product8.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] object-cover rounded-radius10 w-[100%]"
              compId="32:328"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product8"
            />
            <Image
              src="img_product11.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] object-cover rounded-radius10 w-[100%]"
              compId="32:331"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product11"
            />
          </Column>
          <Column
            className="lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[28%]"
            compId="76"
            comWidth={396}
            comHeight={2160}
            compLeft={30}
            compRight={0}
            compType="Column"
          >
            <Image
              src="img_product3.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] object-cover rounded-radius10 w-[100%]"
              compId="32:323"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product3"
            />
            <Image
              src="img_product6.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:326"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product6"
            />
            <Image
              src="img_product9.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:329"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product9"
            />
            <Image
              src="img_product12.png"
              className="lg:h-[397px] xl:h-[454px] h-[510px] 2xl:h-[511px] 3xl:h-[613px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] object-cover rounded-radius10 w-[100%]"
              compId="32:332"
              comWidth={396}
              comHeight={510}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Product12"
            />
          </Column>
        </Row>
        <Stack
          className="font-interui lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[13%]"
          compId="90"
          comWidth={188}
          comHeight={60}
          compLeft={10}
          compRight={10}
          compType="Stack"
        >
          <Image
            src="img_btncontainer_1.svg"
            className="absolute lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-[0] object-cover rounded-radius10 w-[100%]"
            compId="32:343"
            comWidth={188}
            comHeight={60}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="btnContainer"
          />
          <Text
            className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left tracking-ls1 w-[max-content]"
            compId="32:344"
            comWidth={112}
            comHeight={26}
            compLeft={38}
            compRight={38}
            compType="Text"
          >{`LOAD MORE`}</Text>
        </Stack>
        <Column
          className="bg-gray_100 font-merriweather items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
          compId="79"
          comWidth={1440}
          comHeight={780}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] mx-[auto] lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-gray_900 text-left"
            compId="32:315"
            comWidth={320}
            comHeight={55}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Bamboo Products`}</Text>
          <Column
            className="font-interui items-start justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[100%]"
            compId="65"
            comWidth={1440}
            comHeight={38}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="94"
              comWidth={1440}
              comHeight={35}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-center w-[100%]"
                compId="64"
                comWidth={1440}
                comHeight={35}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1"
                  compId="32:316"
                  comWidth={79}
                  comHeight={35}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`CHAIR`}</Text>
                <Text
                  className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1"
                  compId="32:318"
                  comWidth={111}
                  comHeight={35}
                  compLeft={75}
                  compRight={0}
                  compType="Text"
                >{`CABINET`}</Text>
                <Text
                  className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1"
                  compId="32:319"
                  comWidth={67}
                  comHeight={35}
                  compLeft={75}
                  compRight={0}
                  compType="Text"
                >{`SOFA`}</Text>
                <Text
                  className="font-medium lg:ml-[58px] xl:ml-[66px] ml-[75px] 3xl:ml-[90px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1"
                  compId="32:317"
                  comWidth={88}
                  comHeight={35}
                  compLeft={75}
                  compRight={0}
                  compType="Text"
                >{`BENCH`}</Text>
              </Row>
            </Column>
            <Line
              className="bg-orange_A200 h-[4px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:mx-[478px] xl:mx-[547px] mx-[615px] 3xl:mx-[738px] w-[4%]"
              compId="32:320"
              comWidth={60}
              comHeight={4}
              compLeft={615}
              compRight={615}
              compType="Line"
            />
          </Column>
          <Row
            className="lg:gap-[31px] xl:gap-[35px] gap-[40px] 3xl:gap-[48px] grid grid-cols-3 items-center justify-start 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] mx-[auto] w-[89%]"
            compId="32:310"
            comWidth={1280}
            comHeight={250}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Image
              src="img_rectangle31.png"
              className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] object-contain rounded-radius10 w-[100%]"
              compId="32:311"
              comWidth={400}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Rectangle31"
            />
            <Image
              src="img_rectangle32.png"
              className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] object-contain rounded-radius10 w-[100%]"
              compId="32:312"
              comWidth={400}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Rectangle32"
            />
            <Image
              src="img_rectangle33.png"
              className="lg:h-[195px] xl:h-[223px] h-[250px] 2xl:h-[251px] 3xl:h-[301px] object-contain rounded-radius10 w-[100%]"
              compId="32:313"
              comWidth={400}
              comHeight={250}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="Rectangle33"
            />
          </Row>
          <div
            className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] overflow-hidden relative w-[89%]"
            compId="5"
            comWidth={1280}
            comHeight={10}
            compLeft={10}
            compRight={10}
            compType="ProgressBar"
            name="Group5"
          >
            <div className="w-full h-full absolute bg-gray_400"></div>
            <div
              className="h-full absolute bg-gray_600"
              style={{ width: "28%" }}
            ></div>
          </div>
        </Column>
        <footer
          className="font-interui w-[100%]"
          compId="32:256"
          comWidth={1440}
          comHeight={425}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-gray_900 items-center justify-start w-[100%]"
            compId="32:257"
            comWidth={1440}
            comHeight={425}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="xl:h-[106px] h-[119px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]"
              compId="92"
              comWidth={1439}
              comHeight={119}
              compLeft={0}
              compRight={1}
              compType="Stack"
            >
              <Row
                className="absolute items-center justify-between left-[5%] top-[24%] w-[79%]"
                compId="32:277"
                comWidth={1144}
                comHeight={40}
                compLeft={66}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between w-[51%]"
                  compId="32:298"
                  comWidth={587}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_101 text-left tracking-ls1"
                    compId="32:299"
                    comWidth={318}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`SUBSCRIBE TO OUR NEWSLETTER`}</Text>
                  <div className="w-[42%] input-wrap">
                    <Image
                      src="img_arrow_1.svg"
                      className="absolute right-[15px] lg:right-[11px] xl:right-[13px] 3xl:right-[18px] my-[auto] inset-y-[0]"
                      compId="32:303"
                      comWidth={10}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Arrow"
                    />
                    <Button
                      className="bg-gray_902 font-normal not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[10px] xl:py-[11px] py-[13.44px] 2xl:py-[13px] 3xl:py-[16px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_50 text-left tracking-ls1 w-[100%]"
                      compId="32:300"
                      comWidth={0}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Button"
                    >{`Enter Your E-mail Address Here`}</Button>
                  </div>
                </Row>
                <Row
                  className="items-center justify-between lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[23%]"
                  compId="93"
                  comWidth={260}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold xl:my-[1px] lg:my-[1px] my-[2px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_101 text-left tracking-ls1"
                    compId="32:278"
                    comWidth={110}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`JOIN US ON`}</Text>
                  <Image
                    src="img_facebook.svg"
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                    compId="32:291"
                    comWidth={30}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Facebook"
                  />
                  <Image
                    src="img_twitter.svg"
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                    compId="32:288"
                    comWidth={30}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Twitter"
                  />
                  <Image
                    src="img_instagram_1.svg"
                    className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                    compId="32:279"
                    comWidth={30}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Instagram"
                  />
                </Row>
              </Row>
              <Image
                src="img_divider_1.svg"
                className="absolute xl:h-[106px] h-[119px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] inset-[0] object-cover w-[100%]"
                compId="32:294"
                comWidth={1439}
                comHeight={119}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Divider"
              />
            </Stack>
            <Row
              className="items-center justify-start lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] w-[100%]"
              compId="66"
              comWidth={1440}
              comHeight={99}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-medium lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:my-[30px] xl:my-[34px] my-[39px] 3xl:my-[46px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_101 text-left tracking-ls1"
                compId="32:276"
                comWidth={203}
                comHeight={21}
                compLeft={194}
                compRight={0}
                compType="Text"
              >{`TERMS & CODITION POLICY`}</Text>
              <Image
                src="img_group2_2.svg"
                className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] object-contain w-[8%]"
                compId="32:259"
                comWidth={112}
                comHeight={99}
                compLeft={267}
                compRight={0}
                compType="Image"
                alt="Group2"
              />
              <Text
                className="font-bold lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:my-[30px] xl:my-[34px] my-[39px] 3xl:my-[46px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_101 text-left"
                compId="32:258"
                comWidth={238}
                comHeight={21}
                compLeft={232}
                compRight={0}
                compType="Text"
              >{`© 2019 Bamboo All Rights Reserved`}</Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepagePage;
