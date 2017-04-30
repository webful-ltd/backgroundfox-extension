# BackgroundFox

Firefox for Android extension.

Loads YouTube videos in a simplified player that keeps audio working in the background if you switch tab or app.

## Limitations

* The redirect process is quite clunky and happens after the original YouTube page mostly loaded.
* You can't easily return to the normal YouTube video page or get controls for a video as a one-off. This breaks playlist playback and makes it hard to get a sharing URL,'like' or playlist a video.
* Autoplay doesn't work on Firefox mobile as the flag is ignored by the browser.

## Supporting repo

See also [backgroundfox-embedder](https://github.com/webful-ltd/backgroundfox-embedder) which enables the videos to be embedded and makes this work.

This uses a separate site to allow for improvements on the embed page without requiring an extension update every time.

## Install the alpha

BackgroundFox is still in early testing and not yet published on Mozilla's extension site. If you're feeling brave you can install version 0.1.

### Steps to install
* Follow [the version 0.1 extension link](build/backgroundfox-0.1-an+fx-android.xpi).
* Click GitHub's _Open binary file_ link and save the file.
* Click the _Open_ button on the notification.
* In the `file:///...` address in the address bar, scroll to the end and delete the file name, leaving just the containing folder. Open that address.
* In the list of your downloaded files, find `backgroundfox-0.1-an+fx-android.xpi`
* Click the link and press _Allow_ on the notification that says installation was blocked.
