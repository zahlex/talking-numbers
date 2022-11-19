# talking-numbers

## Principle

Randomly generated numbers in a specifiable range are pronounced in a selectable language to be entered into a text field

## Installation

The latest version of this project is also available on [Docker Hub](https://hub.docker.com/repository/docker/zahlex/talking-numbers).
It can be run using the following command:

```
docker run -p 8080:8080 -v <google-creditals-file>.json:/app/credentials.json zahlex/talking-numbers:latest
```

This project relies on the [Google Cloud Text-To-Speech API](https://cloud.google.com/text-to-speech).
A service account and downloaded JSON credentials are needed to run this project.

## Design

The design was created in [Affinity Designer](https://affinity.serif.com/designer/).
The project file can be found in the [.design](./.design) folder

Two third party fonts are used:

- [Just Overthink](https://www.dafont.com/de/just-overthink.font) (License: Commercial)
- [Outbound](https://affinity.serif.com/de/store/product/handwritten-font-bundle-by-ian-barnard/) (License: Commercial)

## License

All remaining resources of this project are licensed under the BSD 3-Clause License