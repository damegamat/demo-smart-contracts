import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Hello', function () {
  it('say hello', async function () {
    const HelloWorld = await ethers.getContractFactory('HelloWorld')
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    expect(await hello.hello()).to.equal('Hello, ;)')
  })
})
