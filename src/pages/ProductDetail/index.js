import React from "react";

import { BarData } from "./chartData.js";
import { Chart } from "react-google-charts";
import { Column } from "components/Column";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { PagerIndicator } from "components/PagerIndicator";

const ProductDetailPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-merriweather mx-[auto] w-[100%]"
        compId="32:381"
        comWidth={1440}
        comHeight={2191}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="28"
          comWidth={1440}
          comHeight={2191}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Image
            src={"images/img_navcontainer.svg"}
            className="h-[100px] 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] object-cover w-[100%]"
            compId="37:16"
            comWidth={1440}
            comHeight={100}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="NavContainer"
          />
          <Row
            className="items-start justify-start 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] mt-[97px] w-[100%]"
            compId="26"
            comWidth={1440}
            comHeight={802}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div className="lg:h-[623px] xl:h-[712px] h-[800px] 2xl:h-[801px] 3xl:h-[961px] ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[42%]">
              <Chart
                width="100%"
                height="100%"
                chartType="BarChart"
                data={BarData}
                options={{ isStacked: true }}
              />
            </div>
            <Column
              className="items-start justify-start lg:mb-[43px] xl:mb-[49px] mb-[56px] 3xl:mb-[67px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] w-[35%]"
              compId="25"
              comWidth={510}
              comHeight={746}
              compLeft={89}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-merriweather mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs32 xl:text-fs37 text-fs42 3xl:text-fs50 text-gray_900 text-left w-[81%]"
                compId="32:474"
                comWidth={411}
                comHeight={64}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Sona Armless Chair`}</Text>
              <Text
                className="font-jacquesfrancois font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-gray_900 text-right w-[21%]"
                compId="32:473"
                comWidth={109}
                comHeight={51}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`$400.00`}</Text>
              <Text
                className="font-bold font-interui mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_900 text-left tracking-ls1 w-[27%]"
                compId="41:1"
                comWidth={138}
                comHeight={21}
                compLeft={0}
                compRight={10}
                compType="Text"
              >
                <span className="text-gray_900 font-medium">
                  <>{`Available`}</>
                </span>
                <span className="text-gray_900">
                  <>{` : `}</>
                </span>
                <span className="text-gray_900 font-normal">
                  <>{`In Stock`}</>
                </span>
              </Text>
              <Text
                className="font-interui font-normal leading-lh mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic text-black_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[95%]"
                compId="40:2"
                comWidth={482}
                comHeight={195}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Bamboo chairs combine premium quality materials with unique high-style design, with the advanced product engineering and packaging reinforcement, each product is designed, manufactured and packaged with shipping in mind.`}</Text>
              <Column
                className="font-interui lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]"
                compId="54"
                comWidth={510}
                comHeight={242}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="16"
                  comWidth={510}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start w-[18%]"
                    compId="44:19"
                    comWidth={93}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left tracking-ls1 w-[77%]"
                      compId="32:472"
                      comWidth={72}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`COLOR`}</Text>
                    <Column
                      className="lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                      compId="55"
                      comWidth={93}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Image
                        src={"images/img_color.svg"}
                        className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] object-cover w-[100%]"
                        compId="44:13"
                        comWidth={93}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="color"
                      />
                    </Column>
                  </Column>
                  <Column
                    className="items-start mb-[1px] lg:ml-[112px] xl:ml-[128px] ml-[144px] 3xl:ml-[172px] w-[19%]"
                    compId="29"
                    comWidth={97}
                    comHeight={59}
                    compLeft={144}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left tracking-ls1 w-[48%]"
                      compId="40:3"
                      comWidth={47}
                      comHeight={29}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`SIZE`}</Text>
                    <Column
                      className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                      compId="56"
                      comWidth={97}
                      comHeight={25}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="xl:gap-[10px] gap-[12px] 3xl:gap-[14px] lg:gap-[9px] grid grid-cols-3 items-center justify-between ml-[1px] w-[99%]"
                        compId="44:17"
                        comWidth={96}
                        comHeight={25}
                        compLeft={1}
                        compRight={0}
                        compType="Row"
                      >
                        <Stack
                          className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] w-[100%]"
                          compId="36"
                          comWidth={24}
                          comHeight={25}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_container.svg"}
                            className="absolute lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] inset-[0] object-cover rounded-radius2 w-[100%]"
                            compId="41:3"
                            comWidth={24}
                            comHeight={25}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="container"
                          />
                          <Text
                            className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_800 text-left tracking-ls1 w-[max-content]"
                            compId="41:7"
                            comWidth={14}
                            comHeight={15}
                            compLeft={5}
                            compRight={5}
                            compType="Text"
                          >{`XL`}</Text>
                        </Stack>
                        <Stack
                          className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] w-[100%]"
                          compId="38"
                          comWidth={24}
                          comHeight={25}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_container_1.svg"}
                            className="absolute lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] inset-[0] object-cover rounded-radius2 w-[100%]"
                            compId="41:4"
                            comWidth={24}
                            comHeight={25}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="container"
                          />
                          <Text
                            className="absolute font-medium h-[max-content] inset-y-[0] my-[auto] right-[33%] text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_900 text-left tracking-ls1 w-[29%]"
                            compId="41:8"
                            comWidth={7}
                            comHeight={15}
                            compLeft={0}
                            compRight={8}
                            compType="Text"
                          >{`S`}</Text>
                        </Stack>
                        <Stack
                          className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] w-[100%]"
                          compId="40"
                          comWidth={24}
                          comHeight={25}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_container.svg"}
                            className="absolute lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] inset-[0] object-cover rounded-radius2 w-[100%]"
                            compId="41:5"
                            comWidth={24}
                            comHeight={25}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="container"
                          />
                          <Text
                            className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-gray_800 text-left tracking-ls1 w-[max-content]"
                            compId="41:9"
                            comWidth={10}
                            comHeight={15}
                            compLeft={7}
                            compRight={7}
                            compType="Text"
                          >{`M`}</Text>
                        </Stack>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row
                  className="items-center justify-between mt-[102px] 3xl:mt-[122px] lg:mt-[79px] xl:mt-[90px] w-[100%]"
                  compId="41:14"
                  comWidth={510}
                  comHeight={80}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold xl:mb-[19px] mb-[22px] 3xl:mb-[26px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:my-[17px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left w-[10%]"
                    compId="32:467"
                    comWidth={51}
                    comHeight={35}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`QTY`}</Text>
                  <Button
                    className="border border-gray_500 border-solid font-medium lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] lg:py-[11px] xl:py-[13px] py-[14.655px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius30 text-bluegray_900 text-center lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 w-[19%]"
                    compId="1"
                    comWidth={96}
                    comHeight={48}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                  >{`- 01 +`}</Button>
                  <Stack
                    className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] w-[63%]"
                    compId="42"
                    comWidth={319}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_btncontainer.svg"}
                      className="absolute lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] inset-[0] object-cover rounded-radius10 w-[100%]"
                      compId="32:462"
                      comWidth={319}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="btnContainer"
                    />
                    <Row
                      className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[60%]"
                      compId="11"
                      comWidth={191}
                      comHeight={38}
                      compLeft={64}
                      compRight={64}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_vector.svg"}
                        className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain lg:w-[20px] xl:w-[23px] w-[26px] 3xl:w-[31px]"
                        compId="41:53"
                        comWidth={26}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                      <Text
                        className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs20 xl:text-fs23 text-fs26 3xl:text-fs31 text-gray_900 text-left xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 tracking-ls208 w-[82%]"
                        compId="37:15"
                        comWidth={157}
                        comHeight={38}
                        compLeft={8}
                        compRight={0}
                        compType="Text"
                      >{`SHOP NOW`}</Text>
                    </Row>
                  </Stack>
                </Row>
              </Column>
              <Row
                className="font-interui items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] w-[40%]"
                compId="44:20"
                comWidth={205}
                comHeight={30}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold mt-[1px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-gray_900 text-left tracking-ls1 w-[35%]"
                  compId="41:15"
                  comWidth={71}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`SHARE`}</Text>
                <Image
                  src={"images/img_social.svg"}
                  className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain w-[54%]"
                  compId="41:46"
                  comWidth={110}
                  comHeight={30}
                  compLeft={24}
                  compRight={0}
                  compType="Image"
                  alt="social"
                />
              </Row>
            </Column>
          </Row>
          <Text
            className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left w-[27%]"
            compId="32:460"
            comWidth={382}
            comHeight={73}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Related Product`}</Text>
          <Row
            className="font-jacquesfrancois items-center justify-end lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] w-[100%]"
            compId="19"
            comWidth={1440}
            comHeight={450}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Stack
              className="lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] w-[22%]"
              compId="44"
              comWidth={320}
              comHeight={450}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_rectangle.png"}
                className="absolute lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] inset-[0] object-cover rounded-radius10 w-[100%]"
                compId="32:447"
                comWidth={320}
                comHeight={450}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle"
              />
              <Row
                className="absolute bg-gradient  bottom-[0] items-center justify-end rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compId="13"
                comWidth={320}
                comHeight={70}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] not-italic lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700 w-[26%]"
                  compId="32:455"
                  comWidth={82}
                  comHeight={38}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`$300.00`}</Text>
                <Image
                  src={"images/img_group3_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain lg:w-[32px] xl:w-[37px] w-[42px] 3xl:w-[50px]"
                  compId="37:13"
                  comWidth={42}
                  comHeight={42}
                  compLeft={45}
                  compRight={32}
                  compType="Image"
                  alt="Group3"
                />
              </Row>
            </Stack>
            <Stack
              className="lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[22%]"
              compId="46"
              comWidth={320}
              comHeight={450}
              compLeft={50}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_rectangle_1.png"}
                className="absolute lg:h-[350px] xl:h-[401px] h-[450px] 2xl:h-[451px] 3xl:h-[541px] inset-[0] object-cover rounded-radius10 w-[100%]"
                compId="32:454"
                comWidth={320}
                comHeight={450}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle"
              />
              <Image
                src={"images/img_group.svg"}
                className="absolute bottom-[4%] lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-x-[0] mx-[auto] object-contain w-[11%]"
                compId="32:456"
                comWidth={36}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group"
              />
            </Stack>
            <Stack
              className="lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[22%]"
              compId="48"
              comWidth={320}
              comHeight={444}
              compLeft={50}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_rectangle_2.png"}
                className="absolute lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] inset-[0] object-cover rounded-radius10 w-[100%]"
                compId="32:431"
                comWidth={320}
                comHeight={444}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle"
              />
              <PagerIndicator
                className="absolute bottom-[4%] h-[12px] inset-x-[0] mx-[auto] w-[auto]"
                compId="2"
                comWidth={60}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="PagerIndicator"
                count={3}
                activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700"
                activeIndex={undefined}
                inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] border-white_A700 border-2 border-solid"
                sliderRef={undefined}
                selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
              />
            </Stack>
            <Stack
              className="lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] w-[13%]"
              compId="50"
              comWidth={182}
              comHeight={444}
              compLeft={50}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_rectangle_3.png"}
                className="absolute lg:h-[346px] xl:h-[395px] h-[444px] 2xl:h-[445px] 3xl:h-[534px] inset-[0] object-cover rounded-radius10 w-[100%]"
                compId="32:439"
                comWidth={182}
                comHeight={444}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Rectangle"
              />
              <Image
                src={"images/img_group3_2.svg"}
                className="absolute bottom-[2%] lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] object-contain right-[0] w-[29%]"
                compId="32:441"
                comWidth={53}
                comHeight={12}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group3"
              />
            </Stack>
          </Row>
          <footer
            className="font-interui 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] w-[100%]"
            compId="32:382"
            comWidth={1440}
            comHeight={425}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-gray_900 items-center justify-start w-[100%]"
              compId="32:383"
              comWidth={1440}
              comHeight={425}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="xl:h-[106px] h-[119px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]"
                compId="52"
                comWidth={1439}
                comHeight={119}
                compLeft={0}
                compRight={1}
                compType="Stack"
              >
                <Row
                  className="absolute items-center justify-between left-[5%] top-[24%] w-[79%]"
                  compId="32:403"
                  comWidth={1144}
                  comHeight={40}
                  compLeft={66}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[51%]"
                    compId="32:424"
                    comWidth={587}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[54%]"
                      compId="32:425"
                      comWidth={318}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`SUBSCRIBE TO OUR NEWSLETTER`}</Text>
                    <div className="w-[42%] input-wrap">
                      <Image
                        src={"images/img_arrow.svg"}
                        className="absolute right-[15px] lg:right-[11px] xl:right-[13px] 3xl:right-[18px] my-[auto] inset-y-[0]"
                        compId="32:429"
                        comWidth={10}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="arrow"
                      />
                      <Button
                        className="bg-bluegray_901 font-normal not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[10px] xl:py-[11px] py-[13.44px] 2xl:py-[13px] 3xl:py-[16px] rounded-radius20 xl:text-fs10 text-fs12 3xl:text-fs14 lg:text-fs9 text-gray_200 text-left tracking-ls1 w-[100%]"
                        compId="32:426"
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
                    compId="53"
                    comWidth={260}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold xl:my-[1px] lg:my-[1px] my-[2px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[42%]"
                      compId="32:404"
                      comWidth={110}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`JOIN US ON`}</Text>
                    <Image
                      src={"images/img_facebook.svg"}
                      className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                      compId="32:417"
                      comWidth={30}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Facebook"
                    />
                    <Image
                      src={"images/img_twitter.svg"}
                      className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                      compId="32:414"
                      comWidth={30}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Twitter"
                    />
                    <Image
                      src={"images/img_instagram.svg"}
                      className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
                      compId="32:405"
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
                  src={"images/img_divider.svg"}
                  className="absolute xl:h-[106px] h-[119px] 2xl:h-[120px] 3xl:h-[143px] lg:h-[93px] inset-[0] object-cover w-[100%]"
                  compId="32:420"
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
                compId="15"
                comWidth={1440}
                comHeight={99}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-medium lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:my-[30px] xl:my-[34px] my-[39px] 3xl:my-[46px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 tracking-ls1 w-[15%]"
                  compId="32:402"
                  comWidth={213}
                  comHeight={21}
                  compLeft={194}
                  compRight={0}
                  compType="Text"
                >{`TERMS & CONDITION POLICY`}</Text>
                <Image
                  src={"images/img_group2.svg"}
                  className="2xl:h-[100px] 3xl:h-[119px] lg:h-[77px] xl:h-[89px] h-[99px] lg:ml-[199px] xl:ml-[228px] ml-[257px] 3xl:ml-[308px] object-contain w-[8%]"
                  compId="32:385"
                  comWidth={112}
                  comHeight={99}
                  compLeft={257}
                  compRight={0}
                  compType="Image"
                  alt="Group2"
                />
                <Text
                  className="font-medium lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:my-[30px] xl:my-[34px] my-[39px] 3xl:my-[46px] lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left text-white_A700 w-[16%]"
                  compId="32:384"
                  comWidth={237}
                  comHeight={21}
                  compLeft={232}
                  compRight={0}
                  compType="Text"
                >{`© 2019 Bamboo All Rights Reserved`}</Text>
              </Row>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default ProductDetailPage;
