import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";

const CasestudyPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-merriweather mx-[auto] w-[100%]"
        compId="82:0"
        comWidth={1600}
        comHeight={2700}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] w-[100%]"
          compId="120"
          comWidth={1600}
          comHeight={900}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] inset-[0] w-[100%]"
            compId="122"
            comWidth={1600}
            comHeight={900}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <div
              className="absolute bg-gray_102 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] inset-[0] w-[100%]"
              compId="82:3"
              comWidth={1600}
              comHeight={900}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="absolute right-[0] w-[44%]"
              compId="123"
              comWidth={699}
              comHeight={900}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_rectangle2.png"}
                className="lg:h-[315px] xl:h-[361px] 2xl:h-[406px] h-[450px] 3xl:h-[487px] object-cover w-[100%]"
                compId="82:68"
                comWidth={699}
                comHeight={450}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle2"
              />
              <Image
                src={"images/img_rectangle21.png"}
                className="lg:h-[315px] xl:h-[361px] 2xl:h-[406px] h-[450px] 3xl:h-[487px] object-cover w-[100%]"
                compId="82:70"
                comWidth={699}
                comHeight={450}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle21"
              />
            </Column>
          </Stack>
          <Column
            className="absolute items-start justify-start left-[9%] top-[5%] w-[63%]"
            compId="106"
            comWidth={1010}
            comHeight={600}
            compLeft={145}
            compRight={0}
            compType="Column"
          >
            <Column
              className="font-merriweather w-[100%]"
              compId="124"
              comWidth={1010}
              comHeight={218}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start w-[100%]"
                compId="105"
                comWidth={1010}
                comHeight={218}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group21.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] h-[47px] 3xl:h-[51px] lg:mb-[118px] xl:mb-[135px] 2xl:mb-[152px] mb-[169px] 3xl:mb-[182px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[17%]"
                  compId="82:8"
                  comWidth={169}
                  comHeight={47}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group21"
                />
                <Text
                  className="font-bold xl:ml-[105px] 2xl:ml-[118px] ml-[132px] 3xl:ml-[142px] lg:ml-[92px] text-bluegray_800 lg:text-fs100 xl:text-fs115 2xl:text-fs129 text-fs144 3xl:text-fs155 text-left w-[70%]"
                  compId="82:25"
                  comWidth={709}
                  comHeight={218}
                  compLeft={132}
                  compRight={0}
                  compType="Text"
                >{`casestudy`}</Text>
              </Row>
            </Column>
            <Text
              className="font-normal font-opensans leading-lh mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[76px] mt-[85px] 3xl:mt-[91px] not-italic text-black_900 lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs22 3xl:text-fs23 text-left w-[49%]"
              compId="93:1"
              comWidth={492}
              comHeight={111}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              {
                <>
                  {`Bamboo is a furnitutre company that provide`}
                  <br />
                  {`quality product to meet your indoor or outdoor `}
                  <br />
                  {`furniture needs.`}
                </>
              }
            </Text>
            <Text
              className="font-normal font-opensans leading-lh mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] mt-[38px] 3xl:mt-[41px] not-italic text-black_900 lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs22 3xl:text-fs23 text-left w-[50%]"
              compId="93:0"
              comWidth={507}
              comHeight={148}
              compLeft={0}
              compRight={10}
              compType="Text"
            >
              {
                <>
                  {`Bamboo e-commerce site is a solution that offer`}
                  <br />
                  {`a simple system that organize different product`}
                  <br />
                  {`where peoples(families, businesses) can intereact`}
                  <br />
                  {`with the product.`}
                </>
              }
            </Text>
          </Column>
        </Stack>
        <Stack
          className="lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] w-[100%]"
          compId="115"
          comWidth={1600}
          comHeight={900}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <div
            className="absolute bg-bluegray_800 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] h-[900px] 3xl:h-[973px] inset-[0] w-[100%]"
            compId="82:4"
            comWidth={1600}
            comHeight={900}
            compLeft={0}
            compRight={0}
            compType="View"
          ></div>
          <Column
            className="absolute items-center justify-start left-[9%] top-[4%] w-[61%]"
            compId="109"
            comWidth={973}
            comHeight={476}
            compLeft={145}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start w-[100%]"
              compId="101"
              comWidth={973}
              comHeight={55}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_group22.svg"}
                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] h-[23px] 3xl:h-[25px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] mb-[19.06px] 3xl:mb-[20px] lg:ml-[52px] xl:ml-[60px] 2xl:ml-[67px] ml-[75px] 3xl:ml-[81px] xl:mt-[10px] 2xl:mt-[11px] mt-[12.94px] 3xl:mt-[13px] lg:mt-[9px] object-contain w-[12%]"
                compId="82:30"
                comWidth={112}
                comHeight={23}
                compLeft={75}
                compRight={0}
                compType="Image"
                alt="Group22"
              />
              <Text
                className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[20px] 3xl:ml-[21px] lg:text-fs25 xl:text-fs28 2xl:text-fs32 text-fs36 3xl:text-fs38 text-gray_102 text-left w-[19%]"
                compId="82:47"
                comWidth={183}
                comHeight={55}
                compLeft={20}
                compRight={0}
                compType="Text"
              >{`Casestudy`}</Text>
            </Row>
            <Text
              className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] mt-[7px] mx-[auto] 3xl:text-fs103 lg:text-fs67 xl:text-fs76 2xl:text-fs86 text-fs96 text-gray_102 text-left w-[21%]"
              compId="82:48"
              comWidth={208}
              comHeight={145}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`goal`}</Text>
            <Row
              className="font-opensans items-center justify-between lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] mt-[82px] 3xl:mt-[88px] w-[100%]"
              compId="102"
              comWidth={973}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold lg:text-fs16 xl:text-fs19 2xl:text-fs21 text-fs24 3xl:text-fs25 text-left text-teal_A400 tracking-ls1 w-[21%]"
                compId="82:73"
                comWidth={204}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`SALE SOLUTION`}</Text>
              <Text
                className="font-bold lg:mr-[130px] xl:mr-[149px] 2xl:mr-[168px] mr-[187px] 3xl:mr-[202px] lg:text-fs16 xl:text-fs19 2xl:text-fs21 text-fs24 3xl:text-fs25 text-left text-teal_A400 tracking-ls1 w-[19%]"
                compId="82:74"
                comWidth={188}
                comHeight={40}
                compLeft={0}
                compRight={187}
                compType="Text"
              >{`PRODUCT HUB`}</Text>
            </Row>
            <Row
              className="font-opensans items-center justify-between 2xl:mt-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[100%]"
              compId="103"
              comWidth={973}
              comHeight={144}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal leading-lh not-italic lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs22 3xl:text-fs23 text-gray_102 text-left w-[41%]"
                compId="82:75"
                comWidth={397}
                comHeight={144}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                {
                  <>
                    {`The Bamboo E-commerce site provide`}
                    <br />
                    {`a digital space were digital transaction `}
                    <br />
                    {`can take place between the buyer and`}
                    <br />
                    {`seller.`}
                  </>
                }
              </Text>
              <Text
                className="font-normal leading-lh not-italic lg:text-fs15 xl:text-fs17 2xl:text-fs19 text-fs22 3xl:text-fs23 text-gray_102 text-left w-[39%]"
                compId="82:76"
                comWidth={375}
                comHeight={144}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                {
                  <>
                    {`The Platform provide a single source`}
                    <br />
                    {`of truth for all all things furniture to`}
                    <br />
                    {`interested parties and eventually be`}
                    <br />
                    {`converted to a Lead`}
                  </>
                }
              </Text>
            </Row>
          </Column>
        </Stack>
        <Row
          className="bg-gray_102 items-start justify-between w-[100%]"
          compId="100"
          comWidth={1600}
          comHeight={900}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <Column
            className="items-start justify-start lg:mb-[228px] xl:mb-[261px] 2xl:mb-[294px] mb-[327px] 3xl:mb-[353px] lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] ml-[145px] 3xl:ml-[156px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] mt-[42px] 3xl:mt-[45px] w-[41%]"
            compId="99"
            comWidth={651}
            comHeight={531}
            compLeft={145}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="125"
              comWidth={651}
              comHeight={199}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-end w-[100%]"
                compId="96"
                comWidth={651}
                comHeight={199}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_group23.svg"}
                  className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] h-[23px] 3xl:h-[25px] lg:mb-[114px] xl:mb-[130px] 2xl:mb-[146px] mb-[163.06px] 3xl:mb-[176px] xl:mt-[10px] 2xl:mt-[11px] mt-[12.94px] 3xl:mt-[13px] lg:mt-[9px] object-contain w-[17%]"
                  compId="82:49"
                  comWidth={112}
                  comHeight={23}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group23"
                />
                <Text
                  className="font-bold lg:mb-[101px] xl:mb-[115px] 2xl:mb-[130px] mb-[144.5px] 3xl:mb-[156px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[20px] 3xl:ml-[21px] text-bluegray_800 lg:text-fs25 xl:text-fs28 2xl:text-fs32 text-fs36 3xl:text-fs38 text-left w-[28%]"
                  compId="82:66"
                  comWidth={183}
                  comHeight={54.5}
                  compLeft={20}
                  compRight={0}
                  compType="Text"
                >{`Casestudy`}</Text>
                <Text
                  className="font-bold lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] mt-[54.5px] 3xl:mt-[58px] text-bluegray_800 3xl:text-fs103 lg:text-fs67 xl:text-fs76 2xl:text-fs86 text-fs96 text-left w-[40%]"
                  compId="82:67"
                  comWidth={261}
                  comHeight={144.5}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`traits`}</Text>
              </Row>
            </Column>
            <Text
              className="font-black lowercase mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] mt-[77px] 3xl:mt-[83px] text-bluegray_800 lg:text-fs33 xl:text-fs38 2xl:text-fs43 text-fs48 3xl:text-fs51 text-left w-[58%]"
              compId="93:9"
              comWidth={376}
              comHeight={75}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`MODERN/CLASSIC`}</Text>
            <Text
              className="font-black lowercase mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] mt-[15px] 3xl:mt-[16px] text-bluegray_800 lg:text-fs33 xl:text-fs38 2xl:text-fs43 text-fs48 3xl:text-fs51 text-left w-[59%]"
              compId="93:10"
              comWidth={384}
              comHeight={75}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`SIMPLE/GENIUNE`}</Text>
            <Text
              className="font-black lowercase mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] mt-[15px] 3xl:mt-[16px] text-bluegray_800 lg:text-fs33 xl:text-fs38 2xl:text-fs43 text-fs48 3xl:text-fs51 text-left w-[27%]"
              compId="93:11"
              comWidth={174}
              comHeight={75}
              compLeft={0}
              compRight={10}
              compType="Text"
            >{`EARTHLY`}</Text>
          </Column>
          <Stack
            className="lg:h-[529px] xl:h-[605px] 2xl:h-[680px] h-[755px] 3xl:h-[816px] lg:mb-[50px] xl:mb-[57px] 2xl:mb-[64px] mb-[72px] 3xl:mb-[77px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[72px] mr-[80px] 3xl:mr-[86px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[65px] mt-[73px] 3xl:mt-[78px] w-[34%]"
            compId="118"
            comWidth={541}
            comHeight={755}
            compLeft={0}
            compRight={80}
            compType="Stack"
          >
            <Row
              className="absolute lg:gap-[42px] xl:gap-[48px] 2xl:gap-[54px] gap-[61px] 3xl:gap-[65px] grid grid-cols-2 items-start justify-between top-[0] w-[100%]"
              compId="117"
              comWidth={541}
              comHeight={408}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Image
                src={"images/img_rectangle3.png"}
                className="lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] 3xl:mt-[106px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] mt-[99px] object-contain w-[100%]"
                compId="93:2"
                comWidth={240}
                comHeight={309}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle3"
              />
              <Image
                src={"images/img_rectangle32_1.png"}
                className="lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] 3xl:mb-[106px] lg:mb-[69px] xl:mb-[79px] 2xl:mb-[89px] mb-[99px] object-contain w-[100%]"
                compId="93:4"
                comWidth={240}
                comHeight={309}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle32"
              />
            </Row>
            <Image
              src={"images/img_rectangle31_1.png"}
              className="absolute lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] left-[22%] object-contain top-[25%] w-[44%]"
              compId="93:3"
              comWidth={240}
              comHeight={309}
              compLeft={120}
              compRight={0}
              compType="Image"
              alt="Rectangle31"
            />
            <Image
              src={"images/img_rectangle34.png"}
              className="absolute bottom-[0] lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] left-[4%] object-contain w-[44%]"
              compId="93:6"
              comWidth={240}
              comHeight={309}
              compLeft={20}
              compRight={0}
              compType="Image"
              alt="Rectangle34"
            />
            <Image
              src={"images/img_rectangle35.png"}
              className="absolute bottom-[10%] lg:h-[217px] xl:h-[248px] 2xl:h-[279px] h-[309px] 3xl:h-[334px] object-contain right-[0] w-[44%]"
              compId="93:7"
              comWidth={240}
              comHeight={309}
              compLeft={0}
              compRight={1}
              compType="Image"
              alt="Rectangle35"
            />
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default CasestudyPage;
