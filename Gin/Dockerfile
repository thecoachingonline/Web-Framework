FROM golang:alpine

MAINTAINER Maintainer

ENV GIN_MODE=release
ENV PORT=3004

WORKDIR /go/src/go-docker-dev.to

COPY src /go/src/go-docker-dev.to/src
COPY templates /go/src/go-docker-dev.to/templates

# Run the two commands below to install git and dependencies for the project. 
# RUN apk update && apk add --no-cache git
# RUN go get ./...

COPY dependencies /go/src #if you don't want to pull dependencies from git 

RUN go build go-docker-dev.to/src/app

EXPOSE $PORT

ENTRYPOINT ["./app"]