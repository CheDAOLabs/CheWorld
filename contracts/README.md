Install
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
curl https://get.starkli.sh | sh
starkliup
```

```bash
export STARKNET_KEYSTORE="/root/key.json"
export STARKNET_ACCOUNT="/root/account-goerli.json"
```

```bash
scarb build
starkli declare ./target/dev/game_Game.sierra.json
```

WARNING: no valid provider option found. Falling back to using the sequencer gateway for the goerli-1 network. Doing this is discouraged. See https://book.starkli.rs/providers for more details.
Enter keystore password:
Not declaring class as it's already declared. Class hash:
0x04421b3816360a8d1618221eea415c100498c498dbdb94d504715d807536395d

```bash
export LORDS_ADDRESS=0;
export DAO_ADDRESS=0;
export ARG=0x000f4dbfe5d15792aa91025e42ee1d74c22bdeb1eef0b9bc19a37216377290c1;
export CLASS_HASH=0x022a83181a3038fa3120d25efb206cdcc3997bec3ba92a98f99ab2e2bf283e4f;
starkli deploy $CLASS_HASH $ARG  

```