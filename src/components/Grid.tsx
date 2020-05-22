import styled from "styled-components";
import {grid, GridProps, layout, LayoutProps} from "styled-system";

const Grid = styled.div<GridProps & LayoutProps>`
  ${grid}
  ${layout}
`

export default Grid;
