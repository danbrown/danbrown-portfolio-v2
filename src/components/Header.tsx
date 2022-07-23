import { useState } from "react";
import {
  Flex,
  Link,
  Accordion,
  Button,
  Box,
  Container,
  Hidden,
  Fixed,
  IconButton,
  Portal,
  useScrollBlock,
  responsive,
} from "@wipsie/ui";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [locked, setLocked] = useScrollBlock();

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
    setLocked(!menuVisible);
  };

  return (
    <Flex width="100vw" align="center" justify="center" p={0}>
      <Container
        width="100%"
        display="flex"
        direction="row"
        align="center"
        justify="between"
        shape="square"
      >
        <Flex direction="row" align="center" justify="between">
          a
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
