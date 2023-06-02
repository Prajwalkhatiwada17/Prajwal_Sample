defmodule PortfolioWeb.PageController do
  use PortfolioWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def contact(conn, %{"name" => name, "email" => email, "message" => message}) do
    # Handle the contact form submission
    # You can add your logic here to process the form data (e.g., send an email)
    conn
    |> put_status(:ok)
    |> json(%{message: "Message received"})
  end
end
