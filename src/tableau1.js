class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image("1a","assets/cams/1A.jpg")
        this.load.image("1b","assets/cams/1B.jpg")
        this.load.image("1c","assets/cams/1C.jpg")
        this.load.image("2a","assets/cams/2A.jpg")
        this.load.image("2b","assets/cams/2B.jpg")
        this.load.image("3","assets/cams/3.jpg")
        this.load.image("4a","assets/cams/4A.jpg")
        this.load.image("4b","assets/cams/4B.jpg")
        this.load.image("5","assets/cams/5.jpg")
        this.load.image("7","assets/cams/7.jpg")

        this.load.image("static0","assets/static/frame_0_delay-0.1s.jpg.")
        this.load.image("static1","assets/static/frame_1_delay-0.1s.jpg")
        this.load.image("static2","assets/static/frame_2_delay-0.1s.jpg")
        this.load.image("static3","assets/static/frame_3_delay-0.1s.jpg.")
        this.load.image("static4","assets/static/frame_4_delay-0.1s.jpg")
        this.load.image("static5","assets/static/frame_5_delay-0.1s.jpg")
        this.load.image("static6","assets/static/frame_6_delay-0.1s.jpg.")

        this.load.audio("camswitchsound","assets/sounds/camsoundcut.mp3")
    }

    setbg(key){
        this.bg = this.add.image(580,200,key)

    }

    create(){

        this.bg = 0

        this.sfx = this.sound.add("camswitchsound", {
            volume: 0.4,
            loop: false
        })

    /**this.cam1 = this.add image(0,0,'1A').setOrigin(0,0);
        this.cam1.visible = false**/

        this.staticfiltre = this.add.sprite(0, 0, 'static0').setOrigin(0,0);
        this.anims.create({
            key: 'staticcam',
            frames: [
                {key: 'static0'},
                {key: 'static1'},
                {key: 'static2'},
                {key: 'static3'},
                {key: 'static4'},
                {key: 'static5'},
                {key: 'static6'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.staticfiltre.alpha=0.9
        this.staticfiltre.play('staticcam');

        this.initKeyboard();

    }

    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.sfx.play();
                    me.setbg('1a');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.sfx.play();
                    me.setbg('1b');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.sfx.play();
                    me.setbg('1c');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.sfx.play();
                    me.setbg('2a');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.sfx.play();
                    me.setbg('2b');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.sfx.play();
                    me.setbg('3');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.sfx.play();
                    me.setbg('4a');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.sfx.play();
                    me.setbg('4b');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.sfx.play();
                    me.setbg('5');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.sfx.play();
                    me.setbg('7');
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;

                    break;
            }
        });
    }

    update(){



    }
}

