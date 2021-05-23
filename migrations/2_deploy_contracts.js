const DefiToken = artifacts.require("DefiToken");

async function estimateGas(contract, ...params) {
  const estimation = await contract.new.estimateGas(...params);
  return { gas: estimation + 4500000 };
}

module.exports = async (deployer, network, accounts) => {
  await deployer;
  var addressPancakeRouter =
    network == "bsc"
      ? "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"
      : "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
  await deployer.deploy(
    DefiToken,
    addressPancakeRouter
  );

  const token = await DefiToken.deployed();
};
