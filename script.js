const perks = document.querySelectorAll("tr img");
const pName = document.querySelector('.perk-name')
const pInfo = document.querySelector('.perk-info')

for (let i = 0; i < perks.length; i++) {
    perks[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}

perks.forEach(item => {
    item.addEventListener('mouseover', () => {
        const itemId = item.id;
        switch (itemId) {
            // First Set
            case 'gsa1':
                pName.textContent = 'Gimme A Reason'
                pInfo.textContent = 'Start with Frag Grenade and Compact SMG. Movement has no effect on weapon accuracy, recoil effect also reduced.'
                break;
            case 'gsa2':
                pName.textContent = 'Swapping Mags II'
                pInfo.textContent = 'Reload speed increased by 10% on primary weapons.'
                break;

            // First Column
            case 'gsb1':
                pName.textContent = 'Fire In The Hole'
                pInfo.textContent = 'Frag Grenade can kill 25% more targets (base: 14).'
                break;
            case 'gsb2':
                pName.textContent = 'Impact Grenades'
                pInfo.textContent = 'Frag Grenades explode on impact. They deal 100% more damage but have 50% smaller explosion radius.'
                break;
            case 'gsb3':
                pName.textContent = 'Power Nap'
                pInfo.textContent = 'Unequipped weapon automatically reloads after 7 seconds.'
                break;
            case 'gsb4':
                pName.textContent = 'Special Mag'
                pInfo.textContent = 'Reload speed increased by 25% on all weapons.'
                break;

            // Second Column
            case 'gsc1':
                pName.textContent = 'Swapping Mags'
                pInfo.textContent = 'Reload speed increased by 25% on all weapons.'
                break;
            case 'gsc2':
                pName.textContent = 'Front Line Supply'
                pInfo.textContent = 'Headshots made with primary or secondary weapons automatically restore 5% rounds to the magazine.'
                break;
            case 'gsc3':
                pName.textContent = 'Adrenaline'
                pInfo.textContent = 'Reloading a weapon with less than 25% ammo in the magazine provides a 50% reload speed boost for 5 seconds.'
                break;
            case 'gsc4':
                pName.textContent = 'Re-filling'
                pInfo.textContent = `Reloading a fully unloaded primary weapon increases its next magazine's capacity by 15%.`
                break;

            // Third Column
            case 'gsd1':
                pName.textContent = 'Heavy Metal'
                pInfo.textContent = 'Start with improved MAG5 Machinegun that deals 50% more damage, and has 50% more ammo. All MAG5 machinegun pickups also improved.'
                break;
            case 'gsd2':
                pName.textContent = 'Gunner'
                pInfo.textContent = 'Start with Sporting Carbine PAC-15.'
                break;
            case 'gsd3':
                pName.textContent = 'This Is My Rifle'
                pInfo.textContent = 'Start with ARK-103 Assault Rifle.'
                break;
            case 'gsd4':
                pName.textContent = 'S890'
                pInfo.textContent = `Start with an S890 Combat Shotgun.`
                break;

            // Second Set
            case 'gse1':
                pName.textContent = 'Seek And Destroy'
                pInfo.textContent = 'All active special zombies within a radius of 20 meters will be automatically marked.'
                break;
            case 'gse2':
                pName.textContent = 'Swapping Mags III'
                pInfo.textContent = 'Reload speed increased by 15% on secondary weapons.'
                break;

            // 2 First Column
            case 'gsf1':
                pName.textContent = 'Bounty Hunter'
                pInfo.textContent = 'Deal 25% more damage to special zombies.'
                break;
            case 'gsf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'gsf3':
                pName.textContent = 'Sleight Of Hand'
                pInfo.textContent = 'Switch weapons 150% faster.'
                break;
            case 'gsf4':
                pName.textContent = 'Sort It All Out'
                pInfo.textContent = `Emptying the magazine of the primary weapon loads the secondary weapon with explosive rounds.`
                break;

            // 2 Second Column
            case 'gsg1':
                pName.textContent = 'Gun Fanatic'
                pInfo.textContent = `Draining primary and secondary weapon's magazines automatically reloads primary weapon.`
                break;
            case 'gsg2':
                pName.textContent = 'Concentration'
                pInfo.textContent = 'Killing 5 zombies consecutively with only headshots grants temporary health boost (cooldown 30 seconds).'
                break;
            case 'gsg3':
                pName.textContent = 'Judo'
                pInfo.textContent = 'When pinned down by usual or special zombies you will automatically rise up and push your attackers back (cooldown 180 seconds).'
                break;
            case 'gsg4':
                pName.textContent = 'Encore'
                pInfo.textContent = `Instead of becoming incapacitated, you gain a 75% temporary health boost and keep going (cooldown: 180 seconds).`
                break;

            // 2 Third Column
            case 'gsh1':
                pName.textContent = 'Welcoming Committee'
                pInfo.textContent = 'Stationary machinegun ammo increased by 25% for all teammates.'
                break;
            case 'gsh2':
                pName.textContent = 'S890 Shorty'
                pInfo.textContent = 'Start with a S890 Shorty in your secondary weapon slot.'
                break;
            case 'gsh3':
                pName.textContent = 'Senjata'
                pInfo.textContent = 'Start with a Senjata PDW in your secondary weapon slot.'
                break;
            case 'gsh4':
                pName.textContent = 'Bad Oder'
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop a primary weapon (cooldown: 180 seconds).`
                break;

            // Third Set
            case 'gsi1':
                pName.textContent = 'My Bad'
                pInfo.textContent = 'Deal 50% less friendly fire damage to your teammates.'
                break;
            case 'gsi2':
                pName.textContent = 'Deep Pockets II'
                pInfo.textContent = 'Carried ammo capacity for primary and secondary weapons increased by 10%.'
                break;

            // 3 First Column
            case 'gsj1':
                pName.textContent = 'Deep Pockets'
                pInfo.textContent = 'Carried ammo capacity for primary and secondary weapons increased by 25%.'
                break;
            case 'gsj2':
                pName.textContent = 'Action Hero'
                pInfo.textContent = 'When you become the last of your team still standing you gain ability to shoot with your primary and secondary weapons without spending rounds in its magazines for 7 seconds.'
                break;
            case 'gsj3':
                pName.textContent = 'Free Refill'
                pInfo.textContent = 'Restore 3% of primary weapon ammo for each kill made with equipment.'
                break;
            case 'gsj4':
                pName.textContent = 'The More, The Merrier'
                pInfo.textContent = `Carried ammo capacity for primary and secondary weapons is increased by 5% for the entire team.`
                break;

            // 3 Second Column
            case 'gsk1':
                pName.textContent = 'Work Belt'
                pInfo.textContent = 'Max number of Frag Grenades increased to 3.'
                break;
            case 'gsk2':
                pName.textContent = 'Pocket Factory'
                pInfo.textContent = `You won't be able to pick equipment bags on the mission, but your equipment will be constantly regenerating (150 seconds to replenish to maximum).`
                break;
            case 'gsk3':
                pName.textContent = 'Headhunter Reward'
                pInfo.textContent = 'Killing 5 zombies consecutively with only headshots refills one equipment charge (cooldown 15 seconds).'
                break;
            case 'gsk4':
                pName.textContent = `It's Not Over`
                pInfo.textContent = `When you become the last member of your team still standing, your equipment gets fully restocked (cooldown: 180 seconds).`
                break;

            // 3 Third Column
            case 'gsl1':
                pName.textContent = 'Annihilator'
                pInfo.textContent = 'Primary, secondary and heavy weapons deal 15% more damage.'
                break;
            case 'gsl2':
                pName.textContent = 'Switcheroo'
                pInfo.textContent = 'Switching to primary or secondary weapons increases firearm damage by 50% for 5 seconds.'
                break;
            case 'gsl3':
                pName.textContent = 'Thrifty'
                pInfo.textContent = 'Reloading a weapon with less than 25% ammo in the magazine provides a 50% firearm damage boost for 3 seconds.'
                break;
            case 'gsl4':
                pName.textContent = `I'm Not Alone`
                pInfo.textContent = `Firearm damage increased by 10% for the whole team.`
                break;

            // Fourth Set
            case 'gsm1':
                pName.textContent = 'War Face'
                pInfo.textContent = 'Killing 25 zombies in rapid succession grants 50% firearm damage boost to entire team for 20 seconds.'
                break;
            case 'gsm2':
                pName.textContent = 'Fire In The Hole II'
                pInfo.textContent = 'Frag Grenade can kill 20% more targets (base: 14).'
                break;

            // DIVISON CODE 
            // First Set
            case 'hra1':
                pName.textContent = 'Demoman'
                pInfo.textContent = 'Start with C4, Shotgun and Hailstorm MGL.'
                break;
            case 'hra2':
                pName.textContent = 'Throwing Arm II'
                pInfo.textContent = 'Throw distance of a C4 increased by 25%.'
                break;

            // First Column
            case 'hrb1':
                pName.textContent = 'Throwing Arm'
                pInfo.textContent = 'Throw distance of a C4 increased by 50%.'
                break;
            case 'hrb2':
                pName.textContent = 'Here Kitty'
                pInfo.textContent = 'C4 will attract zombies for 5 seconds after being planted but can kill 35% less targets (base: 14).'
                break;
            case 'hrb3':
                pName.textContent = 'Not Today'
                pInfo.textContent = 'You may become incapacitated 1 additional time before dying.'
                break;
            case 'hrb4':
                pName.textContent = 'The Perfect Composition'
                pInfo.textContent = 'The explosion radius of C4 and Claymores is increased by 25%.'
                break;

            // Second Column
            case 'hrc1':
                pName.textContent = 'Welcome Mat'
                pInfo.textContent = 'Upon trigger Claymores will attract zombies for 3 seconds before explosion. Start with Claymores.'
                break;
            case 'hrc2':
                pName.textContent = 'Green Fingered'
                pInfo.textContent = 'Planting speed of Claymores is increased by 50%. 25% chance to plant the Claymore at no cost to your equipment. Start with Claymores.'
                break;
            case 'hrc3':
                pName.textContent = 'Welcoming Committee'
                pInfo.textContent = 'Any mortar used by you or teammates can kill 25% more targets (base: 40).'
                break;
            case 'hrc4':
                pName.textContent = 'Impact Grenades'
                pInfo.textContent = `Projectiles fired from the Hailstorm MGL explode upon contact.`
                break;

            // Third Column
            case 'hrd1':
                pName.textContent = 'Unshakeable'
                pInfo.textContent = 'Self-inflicted explosive damage reduced by 100%.'
                break;
            case 'hrd2':
                pName.textContent = 'Directed Blast'
                pInfo.textContent = 'You deal 100% more damage to zombies with all explosives.'
                break;
            case 'hrd3':
                pName.textContent = 'Nimble Thumbs'
                pInfo.textContent = `All shotgun's reload speed increased by 50%.`
                break;
            case 'hrd4':
                pName.textContent = `You've Worn Me Out`
                pInfo.textContent = `Killing enemies with equipment restores 2 grenades for the Hailstorm MGL.`
                break;

            // Second Set
            case 'hre1':
                pName.textContent = 'Demolition Squad'
                pInfo.textContent = 'Explosive equipment can kill 25% more targets. Applies for the whole team.'
                break;
            case 'hre2':
                pName.textContent = 'Sleight Of Hand'
                pInfo.textContent = 'Switch weapons 25% faster.'
                break;

            // 2 First Column
            case 'hrf1':
                pName.textContent = 'Bounty Hunter'
                pInfo.textContent = 'Deal 25% more damage to special zombies.'
                break;
            case 'hrf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'hrf3':
                pName.textContent = 'Walk Softly'
                pInfo.textContent = 'Start with a S890 shotgun.'
                break;
            case 'hrf4':
                pName.textContent = 'Smells Like Gunpowder'
                pInfo.textContent = `All Hailstorm MGLs within 10 meters will be automatically marked if you don't have a heavy weapon.`
                break;

            // 2 Second Column
            case 'hrg1':
                pName.textContent = 'Tooled Up'
                pInfo.textContent = `Increase Claymore capacity to 4 and C4 capacity to 3.`
                break;
            case 'hrg2':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = 'Killing 15 zombies in rapid succession refills one equipment charge (cooldown 60 seconds).'
                break;
            case 'hrg3':
                pName.textContent = `I'll Take That`
                pInfo.textContent = 'Killing a special zombie restores one equipment charge (cooldown 60 seconds).'
                break;
            case 'hrg4':
                pName.textContent = 'Shrapnel'
                pInfo.textContent = `All your explosives can kill 10% more targets.`
                break;

            // 2 Third Column
            case 'hrh1':
                pName.textContent = 'Free Refill I'
                pInfo.textContent = 'Restores 1% of primary weapon ammo for each kill made with equipment.'
                break;
            case 'hrh2':
                pName.textContent = 'Free Refill II'
                pInfo.textContent = 'Each kill made with equipment restores 1 round to your primary weapon magazine.'
                break;
            case 'hrh3':
                pName.textContent = 'Third Hand'
                pInfo.textContent = 'Killing 15 zombies in rapid succession instantly reloads your primary weapon.'
                break;
            case 'hrh4':
                pName.textContent = 'Free Refill III'
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop a Hailstorm MGL (cooldown: 180 seconds).`
                break;

            // Third Set
            case 'hri1':
                pName.textContent = 'Hollywood'
                pInfo.textContent = 'Explosive and fire damage dealt to yourself and your teammates reduced by 30%.'
                break;
            case 'hri2':
                pName.textContent = 'Directed Blast II'
                pInfo.textContent = 'Your explosives can kill 10% more targets.'
                break;

            // 3 First Column
            case 'hrj1':
                pName.textContent = 'Scorched Earth'
                pInfo.textContent = 'Claymore and C4 explosions will set the nearby area on fire.'
                break;
            case 'hrj2':
                pName.textContent = 'Deep Pockets'
                pInfo.textContent = 'Carried ammo capacity for heavy weapon increased by 35%.'
                break;
            case 'hrj3':
                pName.textContent = 'Hole Puncher'
                pInfo.textContent = 'Shotgun range increased by 50%.'
                break;
            case 'hrj4':
                pName.textContent = 'Alert Red!'
                pInfo.textContent = `C4 explosions also release a gas cloud that grants a masking effect to players and hurts zombies.`
                break;

            // 3 Second Column
            case 'hrk1':
                pName.textContent = 'Senjata'
                pInfo.textContent = 'Start with a Senjata PDW in your secondary weapon slot.'
                break;
            case 'hrk2':
                pName.textContent = 'Thumper'
                pInfo.textContent = `Start with a Thumper GL in your secondary weapon slot.`
                break;
            case 'hrk3':
                pName.textContent = 'Heavy Rain'
                pInfo.textContent = 'Start with improved Hailstorm MGL that does 50% more damage, and has 50% more ammo. All Hailstorm MGL pickups for you also improved [base: 8 ammo].'
                break;
            case 'hrk4':
                pName.textContent = `Ride Of The Valkyries`
                pInfo.textContent = `Start with an improved Multi-shot Rocket Launcher that kills 50% more zombies. All MRL202 Commando pickups for you are also improved [base: 4 ammo].`
                break;

            // 3 Third Column
            case 'hrl1':
                pName.textContent = 'Knock Knock'
                pInfo.textContent = 'Start with a Breaching Charge.'
                break;
            case 'hrl2':
                pName.textContent = 'Job Satisfaction'
                pInfo.textContent = 'Killing 15 zombies in rapid succession grants a temporary health boost.'
                break;
            case 'hrl3':
                pName.textContent = 'Predator'
                pInfo.textContent = 'Killing special zombies boosts firearm damage by 50% for 10 seconds.'
                break;
            case 'hrl4':
                pName.textContent = `All Around Is Ashes`
                pInfo.textContent = `The Thumper GL deals 25% increased damage.`
                break;

            // Fourth Set
            case 'hrm1':
                pName.textContent = 'Technician'
                pInfo.textContent = 'C4, Claymore Landmines and MGL can kill 25% more targets.'
                break;
            case 'hrm2':
                pName.textContent = 'Thumper II'
                pInfo.textContent = 'Carried ammo capacity for Thumper GL increased by 1.'
                break;
        }


    })
})