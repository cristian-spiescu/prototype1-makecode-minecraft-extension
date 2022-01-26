
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://minecraft.makecode.com/blocks/custom
 */

 enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo1(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}

player.onChat("ex1", function() {
    blocks.clone(world(2201, 89, -500), world(2225, 93, -495), world(2201, 80, -500), CloneMask.Replace, CloneMode.Normal)
})


player.onChat("exclear", function() {
    blocks.fill(AIR, world(2201, 80, -500), world(2225, 84, -495))
})
