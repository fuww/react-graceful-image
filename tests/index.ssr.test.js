/**
 * @jest-environment node
 */

import React from "react";
import { renderToStaticMarkup } from 'react-dom/server';

import GracefulImage from "../src";

describe("With SSR", () => {
  it("should render without error", () => {
    const props = {
      src: "https://linasmickevicius.com/images/browser.png",
      width: "150",
      height: "150"
    };
    const img = renderToStaticMarkup(<GracefulImage {...props} />);
    expect(img).toContain('https://linasmickevicius.com/images/browser.png');
  });
})
