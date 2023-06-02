defmodule PortfolioWeb.Router do
  use PortfolioWeb, :router

  # Other routes...

  scope "/", PortfolioWeb do
    pipe_through :browser

    get "/", PageController, :index
    post "/contact", PageController, :contact
  end
end
