provider "heroku" {
  version = "~> 2.0"
}

provider "github" {
  individual = "true"
  anonymous = "true"
}

data "github_release" "release" {
    repository  = "holdermind-stock-service"
    owner       = "mombachm"
    retrieve_by = "latest"
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
    url = data.github_release.release.tarball_url
    version = data.github_release.release.name
  }
}

