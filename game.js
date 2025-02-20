const gameConfig = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    backgroundColor: '#1a1a1a',
    scene: { preload, create, update }
};

let balance = 0;
let balanceText;
let coin;

function preload() {
    this.load.image('coin', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gold_coin_icon.svg/512px-Gold_coin_icon.svg.png');
}

function create() {
    // Відображення балансу
    balanceText = this.add.text(20, 20, 'Баланс: 0', { fontSize: '24px', fill: '#fff' });

    // Монета по центру
    coin = this.add.image(200, 300, 'coin').setInteractive();
    coin.setScale(0.5);

    // Клік по монеті
    coin.on('pointerdown', () => {
        balance++;
        balanceText.setText('Баланс: ' + balance);
        coin.setScale(0.55); // Анімація натискання
        this.time.delayedCall(100, () => coin.setScale(0.5));
    });
}

function update() {}

const game = new Phaser.Game(gameConfig);
