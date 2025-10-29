import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/form/button"
import { describe, it, expect } from "vitest"

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-primary")
  })

  it("renders with variant prop", () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole("button", { name: /outline button/i })
    expect(button).toHaveClass("border")
  })

  it("renders with size prop", () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole("button", { name: /large button/i })
    expect(button).toHaveClass("h-11")
  })

  it("can be disabled", () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole("button", { name: /disabled button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50")
  })
})
