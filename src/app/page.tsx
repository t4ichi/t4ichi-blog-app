import { Button } from "@/components/ui/button";
import { HStack } from "styled-system/jsx";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <HStack>
        <Button colorPalette="red" variant="solid">
          Button
        </Button>
        <Button colorPalette="red" variant="subtle">
          Button
        </Button>
        <Button colorPalette="red" variant="outline">
          Button
        </Button>
        <Button colorPalette="red" variant="ghost">
          Button
        </Button>
      </HStack>
    </>
  );
}
