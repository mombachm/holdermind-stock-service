provider "heroku" {
  version = "~> 2.0"
}

resource "heroku_app" "holdermind-stock-service" {
  name   = "holdermind-stock-service"
  region = "us"
}

resource "heroku_build" "holdermind-stock-service" {
  app = heroku_app.holdermind-stock-service.id

  buildpacks = [
    "https://github.com/heroku/heroku-buildpack-nodejs.git",
    "https://github.com/zidizei/heroku-buildpack-tsc#v2.0"
  ]

  source = {
    url = "https://github.com/mombachm/holdermind-stock-service/archive/master.tar.gz"
    # version = "1.0"
  }
}

