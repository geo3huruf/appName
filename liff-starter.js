window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('textx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dGV4dCZ0ZXh0PVlvdXIlMjBUZXh0Cgp0eXBlID0+IHRleHQKdGV4dCA9PiB5b3VyIHRleHQ=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('imagex').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9aW1hZ2UmaW1nPWh0dHBzOi8vd2FsbHBhcGVyc3R1ZGlvMTAuY29tL3N0YXRpYy93cGRiL3dhbGxwYXBlcnMvMTAwMHg1NjMvMTY4ODkxLmpwZwoKdHlwZSA9PiBpbWFnZQppbWcgPT4gTGluayAobXVzdCBiZSBIVFRQUyk=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('videox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9dmlkZW8mb2N1PWh0dHBzOi8vdGlueXVybC5jb20veThvZzNvcjUmcGl1PWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5nCgp0eXBlID0+IHZpZGVvCm9jdSA9PiB2aWRlbyB1cmwKcGl1ID0+IHByZXZpZXcgaW1hZ2U=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('audiox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LURnZWRHazlBP3R5cGU9YXVkaW8mbGluaz1odHRwczovL3BsYXRlbGV0cy5mdW4vcHVibGljL3NvdW5kcy9tdXNpYy5tcDM=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('stickerx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('V2l0aCBBbmltYXRpb246CmxpbmU6Ly9hcHAvMTYwMjY4NzMwOC1EZ2VkR2s5QT90eXBlPXN0aWNrZXImc3RrPWFuaW0mc2lkPTMyMTI4MjMxJnBrZz0zMDk5MzEyCgpObyBBbmltYXRpb246CmxpbmU6Ly9hcHAvMTYwMjY4NzMwOC1EZ2VkR2s5QT90eXBlPXN0aWNrZXImc3RrPW5vYW5pbSZzaWQ9MzIxMjgyMzEmcGtnPTMwOTkzMTIKCnR5cGUgPT4gc3RpY2tlcgpzdGsgPT4gYW5pbSAvIG5vYW5pbQpzaWQgPT4gc3RpY2tlciBpZApwa2cgPT4gcGFja2FnZXMgaWQ=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
    } else {
        makeText();
        makeImage();
        makeVideo();
        makeAudio();
        makeSticker();
        textFooter();
        imageFooter();
        meProfile();
        Profil_e();
        flexText();
        bigImage();
    }
    }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeText(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeAudio(){
    var tipe = getParameterByName('type');
    if (tipe === 'audio') {
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeSticker(){
    var tipe = getParameterByName('type');
    if (tipe === 'sticker') {
        var stk = getParameterByName('stk');
        var sid = getParameterByName('sid');
        var pkg = getParameterByName('pkg');
        var ep = '';
        if (stk === 'anim') {
            ep = "/IOS/sticker_animation@2x.png";
        } else {
            ep = "/IOS/sticker@2x.png";
        }
        liff.sendMessages([{
          type: "template",
          altText: "Sticker",
          template: {
             type: "image_carousel",
             columns: [{
                 imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+ep,
                 action: {
                     type: "uri",
                     uri: "line://shop/sticker/detail/"+pkg}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function textFooter(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var teks = getParameterByName('text');
        if (tipe === 'fotext') {
            liff.sendMessages([{
                type: 'text',
                text: getParameterByName('text'),
                sentBy: {
                    label: prof.displayName,
                    iconUrl: prof.pictureUrl,
                    linkUrl: "line://app/1602687308-DgedGk9A?type=fotext&text="+encodeURI(teks)}
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function imageFooter(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        if (tipe === 'foimage') {
            liff.sendMessages([{
                type: 'image',
                originalContentUrl: getParameterByName('img'),
                previewImageUrl: getParameterByName('img'),
                sentBy: {
                    label: prof.displayName,
                    iconUrl: prof.pictureUrl,
                    linkUrl: "line://app/1602687308-DgedGk9A?type=foimage&img="+getParameterByName('img')}
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function meProfile(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        if (stat == null) {
            var stat = " - ";
        }
        if (stat.length > 60) {
            var stat = "Status Message is too long! Max 60 words";
        }
        if (tipe === 'profile') {
            liff.sendMessages([{
                type: "template",
                altText: "Profile "+prof.displayName,
                template: {
                    type: "buttons",
                    thumbnailImageUrl: prof.pictureUrl,
                    imageAspectRatio: "square",
                    imageSize: "cover",
                    title: prof.displayName,
                    text: stat,
                    actions: [
                        {
                            type:"uri",
                            label:"Me",
                            uri:"line://app/1602687308-DgedGk9A?type=profile"
                        }
                    ]
                }
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function Profil_e(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        var pict = prof.pictureUrl;
        if (tipe === 'me') {
            liff.sendMessages([{
                type: "flex",
                altText: "Profile "+prof.displayName,
                contents: {
                      type: "bubble",
                      hero: {
                        type: "image",
                        url: prof.pictureUrl,
                        size: "full",
                        aspectRatio: "1:1",
                        aspectMode: "cover",
                        action: {
                          type: "uri",
                          uri: "line://app/1602687308-DgedGk9A?type=foimage&img="+pict
                        }
                      },
                      body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                          {
                            type: "text",
                            text: prof.displayName,
                            align: "center",
                            weight: "bold",
                            size: "xl"
                          },
                          {
                            type: "box",
                            layout: "vertical",
                            margin: "lg",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: prof.statusMessage,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5
                              }
                            ]
                          }
                        ]
                      },
                      footer: {
                        type: "box",
                        layout: "horizontal",
                        spacing: "sm",
                        contents: [
                          {
                            type: "button",
                            style: "primary",
                            height: "sm",
                            color: "#02afff",
                            action: {
                              type: "uri",
                              label: "Web",
                              uri: "https://ari-yk.github.io/"
                            },
                            flex: 1
                          },
                          {
                            type: "button",
                            style: "primary",
                            height: "sm",
                            action: {
                              type: "uri",
                              label: "Me",
                              uri: "line://app/1602687308-DgedGk9A?type=me"
                            },
                            flex: 2
                          },
                          {
                            type: "spacer",
                            size: "sm"
                          }
                        ],
                        flex: 0
                      }
                    }
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function flexText(){
    var tipe = getParameterByName('type');
    if (tipe === 'ftext') {
        liff.sendMessages([{
            type: "flex",
            altText: getParameterByName('text'),
            contents: {
              type: "bubble",
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: getParameterByName('text'),
                    wrap: true,
                    color: "#595959",
                    size: "sm",
                    flex: 5
                  }
                ]
              }
            }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function bigImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'bimg') {
        liff.sendMessages([{
            type: "imagemap",
            baseUrl: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/21/2017/04/11020230/1040x1040-SONGKRAN-2017-NO-TEXT.jpg",
            altText: "imagemap",
            baseSize: {
              height: 1040,
              width: 1040
            },
            actions: [
              {
                type: "uri",
                linkUri: "https://www.facebook.com",
                area: {
                  x: 0,
                  y: 0,
                  width: 520,
                  height: 1040
                }
              }
            ]
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
