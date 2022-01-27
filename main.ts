class LabManager {
    
    protected locations = [
        [world(2201, 89, -500), world(2225, 93, -495)],
        [world(2201, 89, -493), world(2225, 97, -483)]
    ]

    constructor(protected target1: Position, protected target2: Position) {
        const that = this;
        // unfortunately MC thinks we have 0 args, and throws warning when we provide an arg;
        // I tried w/ "function", because I thought that maybe it's the arrow function that misleads it
        player.onChat("lab", function(locationIndex) {
            const location = that.locations[locationIndex];
            if (!location) {
                player.say("Error! Location doesn't exist with index = " + locationIndex);
                return;
            }
            blocks.clone(location[0], location[1], target1, CloneMask.Replace, CloneMode.Normal)
            agent.teleport(that.target1.add(pos(-1, 0, 0)), EAST)
        })

        player.onChat("labclear", () => {
            blocks.fill(AIR, this.target1, this.target2);
            agent.teleport(this.target1.add(pos(-1, 0, 0)), EAST)
        })

        const sizeX = this.target2.getValue(Axis.X) - this.target1.getValue(Axis.X) + 1;
        const sizeY = this.target2.getValue(Axis.Y) - this.target1.getValue(Axis.Y) + 1;
        const sizeZ = this.target2.getValue(Axis.Z) - this.target1.getValue(Axis.Z) + 1;
        
        for (const location of this.locations) {
            location[1] = world(
                Math.min(location[1].getValue(Axis.X), location[0].getValue(Axis.X) + sizeX - 1),
                Math.min(location[1].getValue(Axis.Y), location[0].getValue(Axis.Y) + sizeY - 1),
                Math.min(location[1].getValue(Axis.Z), location[0].getValue(Axis.Z) + sizeZ - 1)
            )
        }
    }
}

class LabManagerHenri extends LabManager {
    constructor() {
        super(world(2201, 80, -500), world(2239, 87, -494));
    }
}

class LabManagerStefi extends LabManager {
    constructor() {
        super(world(2201, 80, -490), world(2239, 87, -484));
    }
}