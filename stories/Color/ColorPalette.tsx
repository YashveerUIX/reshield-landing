import styled from "styled-components";

import { Color } from "../../src/uikit";

const Box = styled.div<{
  bgColor: string;
}>`
  width: 200px;
  height: 50px;
  background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
  margin-left: 10px;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-weight: 600;
  width: 150px;
`;

const Palate = ({ name, bgColor }: PropTypes) => {
  return (
    <Wrapper>
      <Span>
        {name} ({bgColor}):
      </Span>
      <Box bgColor={bgColor} />
    </Wrapper>
  );
};

type PropTypes = {
  name: string;
  bgColor: string;
};

const ColorPalette = () => {
  const allColors = Object.keys(Color).map((colorName: string) => {
    const colorKey = colorName as keyof typeof Color;
    return {
      name: colorName,
      value: Color[colorKey],
    };
  });

  return (
    <>
      {allColors.map(({ value, name }) => (
        <Palate bgColor={value} name={name} key={name} />
      ))}
    </>
  );
};

export default ColorPalette;
