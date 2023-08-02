import {
  useTheme,
  Link,
  Button,
  Loading,
  useWidth,
  Grid,
  Flex,
  Spacing,
  responsive,
  Typography,
  ContainerProps,
} from "@wipsie/ui";
import { DefaultLayout } from "../components/DefaultLayout";
import { useRouter } from "next/router";
import { CustomFrame } from "../components/custom/CustomFrame";
import { CustomLabel } from "../components/custom/CustomLabel";
import { ReactNode, useState } from "react";
import { RingAnimation } from "@components/custom/RingAnimation";
import { ArrowDownSvg } from "@components/custom/ArrowDownSvg";
import { Vignette } from "@components/custom/Vignette";
import { ExclamationDouble } from "@components/custom/ExclamationDouble";
import { ExclamationSimple } from "@components/custom/ExclamationSimple";
import { PatternCircle } from "@components/custom/PatternCircle";
import {
  ClipContainer,
  ClipContainerType,
  CustomClipMaterials,
} from "@components/custom/CustomClipMaterials";
import { PanelSvg } from "@components/custom/PanelSvg";
import { PaintSplash } from "@components/custom/PaintSplash";
import { FilmGrainEffect } from "@components/custom/FilmGrainEffect";
import { HoverClipPanel } from "@components/custom/HoverClipPanel";
import { TextBallon } from "@components/custom/TextBallon";

export default function Home(props) {
  const theme = useTheme();
  const width = useWidth();
  const router = useRouter();

  const [isFrameShown, setIsFrameShown] = useState(false);
  const [isPulsarShown, setIsPulsarShown] = useState(false);
  const [isVignetteShown, setIsVignetteShown] = useState(false);
  const [isPaintSplashShown, setIsPaintSplashShown] = useState(false);

  const [sepiaFilter, setSepiaFilter] = useState(false);
  const [invertGrain, setInvertGrain] = useState(false);

  return (
    <DefaultLayout meta={{}}>
      <CustomFrame visible={isFrameShown} />

      <Vignette visible={isVignetteShown} />

      <RingAnimation
        totalRings={5}
        scale={0.5}
        animationDuration={0.6}
        visible={isPulsarShown}
      />

      <Flex
        justify="center"
        align="center"
        direction={{
          xs: "column",
          sm: "row",
        }}
      >
        <CustomLabel
          onClick={() => setIsFrameShown(!isFrameShown)}
          label="Frame"
        />

        <CustomLabel
          onClick={() => setIsPulsarShown(!isPulsarShown)}
          label="Pulsar"
        />

        <CustomLabel
          onClick={() => setIsVignetteShown(!isVignetteShown)}
          label="Vignette"
        />

        <ArrowDownSvg primaryColor="goldenrod" secondaryColor="cyan" />
        <ExclamationDouble primaryColor="red" secondaryColor="orange" />
        <ExclamationSimple primaryColor="green" secondaryColor="wheat" />
        <PatternCircle primaryColor="wheat" style={{ width: 400 }} />

        <Spacing height={2} />

        <HoverClipPanel>
          <img
            src="https://api-media.zetahex.com/download/6024acc5-569a-421d-a665-e8665ce01529?size=1000"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </HoverClipPanel>
        <HoverClipPanel type="Q2">
          <img
            src="https://api-media.zetahex.com/download/c0514df8-e470-4448-ad44-401ff9c77e8b?size=1000"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </HoverClipPanel>
        <HoverClipPanel type="Q3">
          <img
            src="https://api-media.zetahex.com/download/45cdc752-1b9a-4143-b3e9-3b7999479112?size=1000"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </HoverClipPanel>
        <HoverClipPanel type="Q4" p={8}>
          <img
            src="https://api-media.zetahex.com/download/321fe1af-b277-4786-82ce-d9d670aab6c1?size=1000s"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </HoverClipPanel>

        <CustomClipMaterials />

        <TextBallon width={"700px"} type="chat">
          <Typography
            variant="h1"
            align="center"
            style={{
              marginLeft: 125,
              marginTop: 35,
            }}
          >
            Lorem ipsum dolor
            <br />
            sit amet consectetur
            <br />
            adipisicing elit. Velit, sequi.
          </Typography>
        </TextBallon>

        <TextBallon width={"350px"} type="label">
          <Typography
            variant="h2"
            align="center"
            style={{
              marginLeft: 50,
              marginTop: 5,
            }}
          >
            Lorem ipsum
          </Typography>
        </TextBallon>

        <Spacing width={responsive(50, 200)} height={responsive(50, 100)} />
        <Typography variant="h1">awdaw</Typography>
        <Spacing width={responsive(50, 200)} height={responsive(50, 100)} />
        {/* <Spacing width={responsive(100, 300)} height={responsive(100, 300)} /> */}
        <CustomLabel href="/portfolio" label="Portfolio" />

        <CustomLabel
          onClick={() => setIsPaintSplashShown(!isPaintSplashShown)}
          label="Paint Splash"
        />
        <PaintSplash
          visible={isPaintSplashShown}
          width={300}
          primaryColor="red"
        />

        <CustomLabel
          onClick={() => setSepiaFilter(!sepiaFilter)}
          label="Sepia Filter"
        />

        <CustomLabel
          onClick={() => setInvertGrain(!invertGrain)}
          label="Invert Grain"
        />

        <FilmGrainEffect
          sepiaFilter={sepiaFilter}
          invertGrain={invertGrain}
          animationDuration={2}
          style={{
            width: "500px",
            height: "400px",
          }}
        >
          <img
            src="https://api-media.zetahex.com/download/83801b95-8583-4245-953e-e781953fd0b2?size=1000"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </FilmGrainEffect>
      </Flex>
    </DefaultLayout>
  );
}
