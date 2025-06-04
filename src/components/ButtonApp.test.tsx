import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import ButtonApp from "./ButtonApp";

describe("ButtonApp 컴포넌트", () => {
  it("초기 상태에서 버튼이 렌더링되고 메시지는 보이지 않는다", () => {
    render(<ButtonApp />);

    // 버튼이 존재하는지 확인
    expect(screen.getByTestId("click-button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();

    // 초기에는 성공 메시지가 보이지 않음
    expect(screen.queryByTestId("success-message")).not.toBeInTheDocument();
    expect(screen.queryByText("버튼 클릭됨!")).not.toBeInTheDocument();
  });

  //   it("버튼 클릭 시 성공 메시지가 표시된다", async () => {
  //     const user = userEvent.setup();
  //     render(<ButtonApp />);

  //     const button = screen.getByTestId("click-button");

  //     // 버튼 클릭
  //     await user.click(button);

  //     // 성공 메시지가 표시되는지 확인
  //     expect(screen.getByTestId("success-message")).toBeInTheDocument();
  //     expect(screen.getByText("버튼 클릭됨!")).toBeInTheDocument();
  //   });

  //   it("버튼을 여러 번 클릭해도 메시지가 계속 표시된다", async () => {
  //     const user = userEvent.setup();
  //     render(<ButtonApp />);

  //     const button = screen.getByTestId("click-button");

  //     // 첫 번째 클릭
  //     await user.click(button);
  //     expect(screen.getByText("버튼 클릭됨!")).toBeInTheDocument();

  //     // 두 번째 클릭
  //     await user.click(button);
  //     expect(screen.getByText("버튼 클릭됨!")).toBeInTheDocument();

  //     // 세 번째 클릭
  //     await user.click(button);
  //     expect(screen.getByText("버튼 클릭됨!")).toBeInTheDocument();
  //   });

  //   it("버튼에 올바른 텍스트가 표시된다", () => {
  //     render(<ButtonApp />);

  //     const button = screen.getByTestId("click-button");
  //     expect(button).toHaveTextContent("Click me");
  //   });

  //   it("제목이 올바르게 렌더링된다", () => {
  //     render(<ButtonApp />);

  //     expect(screen.getByText("버튼 테스트 앱")).toBeInTheDocument();
  //   });
});
