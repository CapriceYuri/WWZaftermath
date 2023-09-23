const perks = document.querySelectorAll("tr img");
const pName = document.querySelector('.perk-name')
const pInfo = document.querySelector('.perk-info')


// CODE DIVISION
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
                pName.textContent = 'Bad Odor'
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

            // DIVISON CODE 
            // First Set
            case 'ma1':
                pName.textContent = 'Booster Shot'
                pInfo.textContent = 'Start with a Stim Pistol, Compact SMG and free Medkit. Using Medkit on a teammate will also apply 25% of its effect to you.'
                break;
            case 'ma2':
                pName.textContent = 'Painkiller II'
                pInfo.textContent = 'Stim Pistol effects last 25% longer.'
                break;

            // First Column
            case 'mb1':
                pName.textContent = 'Doctor In The House'
                pInfo.textContent = 'Medkits heal 10% more (base: 70%).'
                break;
            case 'mb2':
                pName.textContent = 'Triage'
                pInfo.textContent = 'Apply Medkits 50% faster [base: 4 seconds].'
                break;
            case 'mb3':
                pName.textContent = 'Sugar Coated'
                pInfo.textContent = 'Healing a teammate with a Medkit also grants them a temporary health boost.'
                break;
            case 'mb4':
                pName.textContent = 'Breathe Deeply'
                pInfo.textContent = 'The rounds of the Stim Pistol are replaced with healing gas syringes that burst upon contact with surfaces, releasing healing gas that grants a 75% temporary health boost to all players.'
                break;

            // Second Column
            case 'mc1':
                pName.textContent = 'Patch Up'
                pInfo.textContent = 'Restore 30% health to a teammate after reviving them (base: 20%).'
                break;
            case 'mc2':
                pName.textContent = 'Paramedic'
                pInfo.textContent = 'Revive speed increased by 50%.'
                break;
            case 'mc3':
                pName.textContent = 'Pick Me Up'
                pInfo.textContent = 'When you revive a teammate, both of you gain temporary health boost.'
                break;
            case 'mc4':
                pName.textContent = 'Candy'
                pInfo.textContent = `Reviving a teammate in battle restores one equipment charge for both of you.`
                break;

            // Third Column
            case 'md1':
                pName.textContent = 'Big Pharma'
                pInfo.textContent = 'Max number of Stim Pistol charges increased to 4 [base: 3 charges].'
                break;
            case 'md2':
                pName.textContent = 'Painkiller'
                pInfo.textContent = 'Stim Pistol gives 25% more temporary health and its effects last 50% longer.'
                break;
            case 'md3':
                pName.textContent = 'Empathy'
                pInfo.textContent = `Using the Stim Pistol on a teammate will also apply 50% of its effect to you.`
                break;
            case 'md4':
                pName.textContent = `Take A Break`
                pInfo.textContent = `Using the Stim Pistol on a teammate also fully restores their stamina for melee strikes.`
                break;

            // Second Set
            case 'me1':
                pName.textContent = 'Tenacity'
                pInfo.textContent = 'All incapacitated team members will stay alive for 30% longer (base: 40 seconds).'
                break;
            case 'me2':
                pName.textContent = 'Triage II'
                pInfo.textContent = 'Apply Medkits 25% faster [base: 4 seconds].'
                break;

            // 2 First Column
            case 'mf1':
                pName.textContent = 'Second Wind'
                pInfo.textContent = '25% chance to regain 25% health and keep going instead of becoming incapacitated (cooldown 60 seconds).'
                break;
            case 'mf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'mf3':
                pName.textContent = 'Navy Seal'
                pInfo.textContent = 'Start with SMG TMP5.'
                break;
            case 'mf4':
                pName.textContent = 'Trail Of Breadcrumbs'
                pInfo.textContent = `All medical items within 10 meters will be automatically marked if you don't have any.`
                break;

            // 2 Second Column
            case 'mg1':
                pName.textContent = 'Efficiency'
                pInfo.textContent = `30% chance of using a Medkit without depleting your supply.`
                break;
            case 'mg2':
                pName.textContent = 'Good Karma'
                pInfo.textContent = 'Using Medkit on a teammate will also apply 50% of its effect to you.'
                break;
            case 'mg3':
                pName.textContent = `Combat Medic`
                pInfo.textContent = 'Kill 15 zombies in rapid succession gives 50% chance to receive a Medkit (cooldown 180 seconds).'
                break;
            case 'mg4':
                pName.textContent = `They Don't Need It At All`
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop a medical item (cooldown: 180 seconds).`
                break;

            // 2 Third Column
            case 'mh1':
                pName.textContent = 'Free Hugs'
                pInfo.textContent = '25% chance of using the Stim Pistol without depleting its charge.'
                break;
            case 'mh2':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = 'Killing 15 zombies in rapid succession refills one equipment charge (cooldown 20 seconds).'
                break;
            case 'mh3':
                pName.textContent = `I'll Take That`
                pInfo.textContent = 'Killing a special zombie restores one equipment charge (cooldown 30 seconds).'
                break;
            case 'mh4':
                pName.textContent = 'It Was Intentional'
                pInfo.textContent = `Using the Stim Pistol creates an additional healing gas cloud under your feet (cooldown: 30 seconds).`
                break;

            // Third Set
            case 'mi1':
                pName.textContent = 'Fighting Chance'
                pInfo.textContent = 'Using the Stim Pistol on a teammate who is pinned will get them to their feet.'
                break;
            case 'mi2':
                pName.textContent = 'Remote Healthcare'
                pInfo.textContent = 'Stim Pistol range increased by 25%.'
                break;

            // 3 First Column
            case 'mj1':
                pName.textContent = 'Forgive And Forget'
                pInfo.textContent = 'Friendly fire damage reduced by 25% for all team members.'
                break;
            case 'mj2':
                pName.textContent = 'In The Zone'
                pInfo.textContent = 'Using a Stim Pistol or Medkit adds a 50% firearm damage boost for 10 seconds.'
                break;
            case 'mj3':
                pName.textContent = 'Fighting Fit'
                pInfo.textContent = 'Firearm damage increased by 25% when your whole team have more than 50% health.'
                break;
            case 'mj4':
                pName.textContent = 'Just A Scratch'
                pInfo.textContent = `While under the Stim Pistol's effect, the player receives 10% less damage from any source.`
                break;

            // 3 Second Column
            case 'mk1':
                pName.textContent = 'Battle Surgeon'
                pInfo.textContent = 'Stim Pistol heals 10% of health in addition to the boost effect.'
                break;
            case 'mk2':
                pName.textContent = 'Emergency Rescue'
                pInfo.textContent = `When your health drops below 25%, you gain temporary health (cooldown 180 seconds).`
                break;
            case 'mk3':
                pName.textContent = 'Secret Ingredient'
                pInfo.textContent = 'Stim Pistol grants additional masking effect lasting 5 seconds.'
                break;
            case 'mk4':
                pName.textContent = `Too Slowly`
                pInfo.textContent = `Reload speed is increased by 10% under the effect of the Stim Pistol.`
                break;

            // 3 Third Column
            case 'ml1':
                pName.textContent = 'Lobotomy'
                pInfo.textContent = 'Restore 2 rounds in magazine for each headshot made with SMG.'
                break;
            case 'ml2':
                pName.textContent = 'Swapping Mags!'
                pInfo.textContent = `SMGs' reload speed increased by 25%.`
                break;
            case 'ml3':
                pName.textContent = 'Adrenaline'
                pInfo.textContent = 'Reload speed increased by 50% when health is below 35%.'
                break;
            case 'ml4':
                pName.textContent = `Emergency Measures`
                pInfo.textContent = `Penetration of SMGs is increased by 1 while the player's health is below 30%.`
                break;

            // Fourth Set
            case 'mm1':
                pName.textContent = `Doctor's Bag`
                pInfo.textContent = 'Medkits used by you and your teammates restore 10% more health.'
                break;
            case 'mm2':
                pName.textContent = 'Navy Seal II'
                pInfo.textContent = 'SMG range increased by 25%.'
                break;


            // DIVISON CODE 
            // First Set
            case 'fa1':
                pName.textContent = 'Mule'
                pInfo.textContent = 'Start with a Supply Bag and Scout Rifle. Increase carried ammo capacity for primary and secondary weapons by 10% for all teammates.'
                break;
            case 'fa2':
                pName.textContent = 'Knock Knock II'
                pInfo.textContent = '10% chance of using Breaching Charge without spending it.'
                break;

            // First Column
            case 'fb1':
                pName.textContent = 'Kickback'
                pInfo.textContent = 'When a teammate uses your Supply Bag there is a 20% chance you will also gain explosive ammo.'
                break;
            case 'fb2':
                pName.textContent = 'Armory'
                pInfo.textContent = 'Using a Supply Bag gives a 20% chance to restore one equipment charge. But the bag owner can only restore his equipment when someone else gains this benefit from his bag.'
                break;
            case 'fb3':
                pName.textContent = 'Stand By Me'
                pInfo.textContent = 'Increases firearm damage by 100% for 10 seconds when reviving or unpinning a teammate.'
                break;
            case 'fb4':
                pName.textContent = 'It Might Work'
                pInfo.textContent = 'You can restore a depleted automatic turret with a 20% chance (10% for the Horde mode).'
                break;

            // Second Column
            case 'fc1':
                pName.textContent = 'Night Owl'
                pInfo.textContent = 'Masking Grenades grant an additional temporary health boost. Start with Masking Grenades.'
                break;
            case 'fc2':
                pName.textContent = 'Side Effects'
                pInfo.textContent = 'Masking Grenade gas is lethal to zombies. Start with Masking Grenades.'
                break;
            case 'fc3':
                pName.textContent = `Give Em Hell`
                pInfo.textContent = 'Reviving a teammate grants explosive ammo for both of you.'
                break;
            case 'fc4':
                pName.textContent = 'No Need For Instructions'
                pInfo.textContent = `Automatic turrets placed by you and your allies deal 25% more damage.`
                break;

            // Third Column
            case 'fd1':
                pName.textContent = 'Knock Knock'
                pInfo.textContent = 'You start with a Breaching Charge.'
                break;
            case 'fd2':
                pName.textContent = 'Paramedic'
                pInfo.textContent = 'Revive speed increased by 100%.'
                break;
            case 'fd3':
                pName.textContent = 'Cloakroom'
                pInfo.textContent = `Reviving a teammate grants masking effect for 3 seconds for both of you.`
                break;
            case 'fd4':
                pName.textContent = `Cheer Up`
                pInfo.textContent = `Reviving a teammate refills one equipment charge for both of you.`
                break;

            // Second Set
            case 'fe1':
                pName.textContent = 'Please Stand Up'
                pInfo.textContent = 'If everyone in a team is incapacitated or pinned by a zombie then the Fixer is able to stand up (cooldown 60 seconds).'
                break;
            case 'fe2':
                pName.textContent = 'Paramedic II'
                pInfo.textContent = 'Revive speed increased by 25%.'
                break;

            // 2 First Column
            case 'ff1':
                pName.textContent = 'My Round I'
                pInfo.textContent = 'Increase carried ammo capacity for primary and secondary weapons by 10% for you and all teammates.'
                break;
            case 'ff2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'ff3':
                pName.textContent = 'Gunner'
                pInfo.textContent = 'Start with Sporting Carbine Pac-15.'
                break;
            case 'ff4':
                pName.textContent = 'Scrap Metal... Again'
                pInfo.textContent = `All equipment bags within 20 meters will be automatically marked if you have no equipment charges.`
                break;

            // 2 Second Column
            case 'fg1':
                pName.textContent = 'One For The Road'
                pInfo.textContent = `Max Masking Grenade and Supply Bag capacity increased to 2. However Masking Grenade effect duration decreased by 3 seconds and Supply Bag contains 25% less explosive ammo.`
                break;
            case 'fg2':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = 'Kill 15 zombies in rapid succession refills one equipment charge (cooldown 90 seconds).'
                break;
            case 'fg3':
                pName.textContent = `Scavenger`
                pInfo.textContent = 'Killing special zombie restores one equipment charge (cooldown 90 seconds).'
                break;
            case 'fg4':
                pName.textContent = `I Am Not A Snack`
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop an equipment bag (cooldown: 180 seconds).`
                break;

            // 2 Third Column
            case 'fh1':
                pName.textContent = 'Instand Replay'
                pInfo.textContent = 'Anyone that uses your supply bag restores 20% of their primary weapon ammunition (base 10%).'
                break;
            case 'fh2':
                pName.textContent = 'Under The Table'
                pInfo.textContent = 'Anyone entering Masking Grenade gas cloud restores 10% of primary weapon ammo.'
                break;
            case 'fh3':
                pName.textContent = `Go Get Em`
                pInfo.textContent = `Reviving a teammate will restore 25% of primary weapon's ammunition for you and your teammate.`
                break;
            case 'fh4':
                pName.textContent = 'Almost Missed'
                pInfo.textContent = `Damage to marked enemies is increased by 10% for you and your team.`
                break;

            // Third Set
            case 'fi1':
                pName.textContent = 'Efficiency'
                pInfo.textContent = 'Supply bag contains 25% more explosive ammo. Masking grenade effect duration increased by 2 seconds.'
                break;
            case 'fi2':
                pName.textContent = 'My Round III'
                pInfo.textContent = 'Carried ammo capacity increased for primary and secondary weapons by 5% for you and all teammates.'
                break;

            // 3 First Column
            case 'fj1':
                pName.textContent = 'Lighting Hands'
                pInfo.textContent = `All semi automatic rifles' reload speed increased by 25%.`
                break;
            case 'fj2':
                pName.textContent = 'Power Shot'
                pInfo.textContent = 'All semi automatic rifles gain increased penetration.'
                break;
            case 'fj3':
                pName.textContent = 'Casull 6'
                pInfo.textContent = 'Start with a Casull 6 in your secondary weapon slot.'
                break;
            case 'fj4':
                pName.textContent = `It Ain't Much But...`
                pInfo.textContent = `The first 5% of ammo in the primary weapon's magazine will be explosive for the entire team.`
                break;

            // 3 Second Column
            case 'fk1':
                pName.textContent = 'Fourth Of July'
                pInfo.textContent = 'Your Supply Bag can be used 1 more time(s) before depleting (base 4 uses).'
                break;
            case 'fk2':
                pName.textContent = 'Shadow Walker'
                pInfo.textContent = `Masking Grenade effect duration increased by 2 seconds (base 6 seconds).`
                break;
            case 'fk3':
                pName.textContent = 'Darkness Falls'
                pInfo.textContent = 'Masking Grenade gas cloud duration is increased by 7 seconds (base 5 seconds).'
                break;
            case 'fk4':
                pName.textContent = `Hidden Pocket`
                pInfo.textContent = `Using a Supply Bag additionally restores the secondary weapon's ammunition.`
                break;

            // 3 Third Column
            case 'fl1':
                pName.textContent = 'My Round II'
                pInfo.textContent = 'Increase carried ammo capacity for heavy weapons by 10% for all teammates'
                break;
            case 'fl2':
                pName.textContent = 'Bandolier'
                pInfo.textContent = `Mortar and Stationary machinegun ammo capacity increased by 25% for all team. Durability of defenses increased by 25% for all team [base: 4 Mortar ammo, 200 machinegun ammo].`
                break;
            case 'fl3':
                pName.textContent = 'The Big Five O'
                pInfo.textContent = 'Start with improved BF25 Payload Rifle that deals 50% more damage and has 50% more ammo. All BF25 Payload Rifle pickups for you also improved [base: 6 ammo].'
                break;
            case 'fl4':
                pName.textContent = `3 in 1`
                pInfo.textContent = `The first use of a placed Supply Bag will restore 10% health to you and your allies, but its total usage number is reduced by 1.`
                break;

            // Fourth Set
            case 'fm1':
                pName.textContent = `Corporate Power Nap`
                pInfo.textContent = 'Unequipped weapon automatically reloads every 10 seconds for all teammates'
                break;
            case 'fm2':
                pName.textContent = 'Bounty Hunter'
                pInfo.textContent = 'Deal 10% more damage to special zombies.'
                break;


            // DIVISON CODE 
            // First Set
            case 'sa1':
                pName.textContent = 'Shock Troops'
                pInfo.textContent = `Start with Stun Gun and Compact SMG. Melee strikes damage two targets and do twice more damage when you're not tired. Melee attacks are not slower when tired.`
                break;
            case 'sa2':
                pName.textContent = 'Juiced Up II'
                pInfo.textContent = 'Stun Gun effect duration increased by 15%.'
                break;

            // First Column
            case 'sb1':
                pName.textContent = 'Crowd Control'
                pInfo.textContent = 'Push radius from melee attacks increased by 50%.'
                break;
            case 'sb2':
                pName.textContent = 'All Elbows'
                pInfo.textContent = 'Movement speed penalty when zombies are very close reduced by 100%.'
                break;
            case 'sb3':
                pName.textContent = 'Rooted'
                pInfo.textContent = 'You can never be pinned down by usual zombies (does not affect special zombies).'
                break;
            case 'sb4':
                pName.textContent = 'Crowd Control II'
                pInfo.textContent = 'Restore one equipment charge when your health drops below 35%.'
                break;

            // Second Column
            case 'sc1':
                pName.textContent = 'Juiced Up'
                pInfo.textContent = 'Stun Gun effect duration increased by 100%.'
                break;
            case 'sc2':
                pName.textContent = 'Zeus'
                pInfo.textContent = 'Increase Stun Gun range by 50% and target count to 20 (base range: 12 m, base target count: 15).'
                break;
            case 'sc3':
                pName.textContent = `High Voltage`
                pInfo.textContent = 'Stun Gun damage Increased by 150%.'
                break;
            case 'sc4':
                pName.textContent = 'Clear!'
                pInfo.textContent = `Using the Stun Gun on a pinned teammate will get them to their feet.`
                break;

            // Third Column
            case 'sd1':
                pName.textContent = 'Bullet-Dodger'
                pInfo.textContent = 'Take 100% less friendly fire from bullets while performing melee attacks.'
                break;
            case 'sd2':
                pName.textContent = 'Nimble'
                pInfo.textContent = 'Take 50% less damage while performing melee attacks.'
                break;
            case 'sd3':
                pName.textContent = 'With My Last Breath'
                pInfo.textContent = `Melee strikes damage 2 more targets when health is below 35%.`
                break;
            case 'sd4':
                pName.textContent = `Blood Is Boiling`
                pInfo.textContent = `You deal 50% more damage to special zombies with a melee weapon if your health is below 35%.`
                break;

            // Second Set
            case 'se1':
                pName.textContent = 'Slice And Dice'
                pInfo.textContent = 'You and all teammates can perform more melee strikes (+2) before becoming tired.'
                break;
            case 'se2':
                pName.textContent = 'Zeus II'
                pInfo.textContent = 'Increase Stun Gun range by 15% [base: 12 meters].'
                break;

            // 2 First Column
            case 'sf1':
                pName.textContent = 'Trophy Hunter'
                pInfo.textContent = 'Deal 25% more damage to special zombies.'
                break;
            case 'sf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'sf3':
                pName.textContent = 'Silent Killer'
                pInfo.textContent = 'Start with a TMP5 SMG with silencer upgrade.'
                break;
            case 'sf4':
                pName.textContent = 'Where Are You?'
                pInfo.textContent = `All Lurkers within 10 meters are automatically marked.`
                break;

            // 2 Second Column
            case 'sg1':
                pName.textContent = 'Vigour'
                pInfo.textContent = `Killing 10 zombies in rapid succession with a melee weapon grants temporary health boost (cooldown 30 seconds).`
                break;
            case 'sg2':
                pName.textContent = 'Cloak And Dagger'
                pInfo.textContent = 'Killing 10 zombies in rapid succession with a melee weapon grants a masking effect (cooldown 30 seconds).'
                break;
            case 'sg3':
                pName.textContent = `Third Hand`
                pInfo.textContent = 'Killing 5 zombies with melee strikes in rapid succession instantly reloads your primary weapon.'
                break;
            case 'sg4':
                pName.textContent = `Relentlessly`
                pInfo.textContent = `Killing 10 zombies in rapid succession with a melee weapon restores 5% of your health (cooldown: 30 seconds).`
                break;

            // 2 Third Column
            case 'sh1':
                pName.textContent = 'Heavy Metal I'
                pInfo.textContent = 'Start with an improved Forest Warrior Chainsaw that deals 50% more damage and has 50% more fuel. All Forest Warrior Chainsaw pickups for you are also improved [base: 100 fuel].'
                break;
            case 'sh2':
                pName.textContent = 'Heavy Metal II'
                pInfo.textContent = 'Starts with improved Taiga-12 Heavy Assault Shotgun that deals 25% more damage and has 25% more ammo. All Taiga-12 Heavy Assault Shotgun pickups for you also improved [base: 50 ammo].'
                break;
            case 'sh3':
                pName.textContent = `Battle Cry`
                pInfo.textContent = `Automatically stand up from being pinned after 5 seconds.`
                break;
            case 'sh4':
                pName.textContent = 'Thank You For The Chance'
                pInfo.textContent = `30% chance of using an Adrenaline kit without depleting your supply.`
                break;

            // Third Set
            case 'si1':
                pName.textContent = 'Executioner'
                pInfo.textContent = 'Perform 1 more melee strike before becoming tired. Melee damage increased by 50%.'
                break;
            case 'si2':
                pName.textContent = 'Executioner III'
                pInfo.textContent = 'Perform 1 more melee strike before becoming tired.'
                break;

            // 3 First Column
            case 'sj1':
                pName.textContent = 'Shock Therapy'
                pInfo.textContent = `You will not become fatigued when melee attacking zombies electrified by the Stun Gun.`
                break;
            case 'sj2':
                pName.textContent = 'Samurai'
                pInfo.textContent = 'Killing 15 zombies in rapid succession allows you to hit 1 more target per melee strike for 10 seconds.'
                break;
            case 'sj3':
                pName.textContent = 'Bloodlust'
                pInfo.textContent = 'Killing special zombies with a melee weapon will increase firearm damage by 100% for 15 seconds.'
                break;
            case 'sj4':
                pName.textContent = `This Is Invigorating`
                pInfo.textContent = `Signature Strikes damage 1 more target.`
                break;

            // 3 Second Column
            case 'sk1':
                pName.textContent = 'Spare Batteries'
                pInfo.textContent = 'Max capacity for Stun Gun charges increased to 4 [base: 3 charges].'
                break;
            case 'sk2':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = `Killing 15 zombies in rapid succession refills one equipment charge (cooldown 60 seconds).`
                break;
            case 'sk3':
                pName.textContent = 'Loan Shark'
                pInfo.textContent = 'Killing a special zombie gives a 50% chance to restore one charge to your equipment.'
                break;
            case 'sk4':
                pName.textContent = `On One's Own`
                pInfo.textContent = `One equipment charge gets restored for you every 60 seconds.`
                break;

            // 3 Third Column
            case 'sl1':
                pName.textContent = 'Flash Sale'
                pInfo.textContent = `Using the Stun Gun restores 1% of your primary weapon's ammunition for every target you stun.`
                break;
            case 'sl2':
                pName.textContent = 'Swapping Mags!'
                pInfo.textContent = `SMGs' reload speed is increased by 25%.`
                break;
            case 'sl3':
                pName.textContent = 'Adrenaline'
                pInfo.textContent = 'Reload speed increased by 50% when health is below 35%.'
                break;
            case 'sl4':
                pName.textContent = `Dead...Reward`
                pInfo.textContent = `Killing 10 zombies in rapid succession with a melee weapon restores 5% of your primary weapon's ammunition.`
                break;

            // Fourth Set
            case 'sm1':
                pName.textContent = `Blade Master`
                pInfo.textContent = 'Melee strikes damage 1 more target.'
                break;
            case 'sm2':
                pName.textContent = 'Nimble II'
                pInfo.textContent = 'Take 10% less damage while performing melee attacks.'
                break;


            // DIVISON CODE 
            // First Set
            case 'exa1':
                pName.textContent = 'Firestarter'
                pInfo.textContent = `Start with Molotov and Shotgun. You deal 25% more damage during swarm attacks.`
                break;
            case 'exa2':
                pName.textContent = 'Wheatgrass II'
                pInfo.textContent = 'Health increased by 5%.'
                break;

            // First Column
            case 'exb1':
                pName.textContent = 'Pyromaniac'
                pInfo.textContent = `Molotov's fire damage increased by 50%.`
                break;
            case 'exb2':
                pName.textContent = 'Hangover'
                pInfo.textContent = 'Molotovs burn 75% longer.'
                break;
            case 'exb3':
                pName.textContent = 'Crowd Control'
                pInfo.textContent = 'Push radius from melee attacks increased by 50%.'
                break;
            case 'exb4':
                pName.textContent = 'Minefield'
                pInfo.textContent = 'The maximum number of Claymores is increased by 1, but they can kill 15% fewer targets. Start with a Claymore.'
                break;

            // Second Column
            case 'exc1':
                pName.textContent = 'Rage Mode'
                pInfo.textContent = 'When pinned down by usual or special zombies you will automatically rise up and push your attackers back (cooldown 300 seconds).'
                break;
            case 'exc2':
                pName.textContent = 'All Elbows'
                pInfo.textContent = 'Movement speed penalty when zombies are very close reduced by 100%.'
                break;
            case 'exc3':
                pName.textContent = `Rooted`
                pInfo.textContent = 'You can never be pinned down by usual zombies (does not affect special zombies).'
                break;
            case 'exc4':
                pName.textContent = 'Stop, Drop, And Roll'
                pInfo.textContent = `When you become incapacitated, you ignite enemies around you.`
                break;

            // Third Column
            case 'exd1':
                pName.textContent = 'Dragon Hide'
                pInfo.textContent = 'Fire resistance increased by 100%.'
                break;
            case 'exd2':
                pName.textContent = 'Heavy Metal'
                pInfo.textContent = 'Start with improved RPGL4 that deals 100% more damage. All RPGL4 pickups for you also improved.'
                break;
            case 'exd3':
                pName.textContent = 'Heavy Metal II'
                pInfo.textContent = `Start with improved Taiga-12 Heavy Assault Shotgun that deals 25% more damage, and has 25% more ammo. All Taiga-12 Heavy Assault Shotgun pickups for you also improved.`
                break;
            case 'exd4':
                pName.textContent = `Big Bang`
                pInfo.textContent = `Start with an improved Multi-shot Rocket Launcher that kills 50% more zombies. All MRL202 Commando pickups for you are also improved.`
                break;

            // Second Set
            case 'exe1':
                pName.textContent = 'Bandolier'
                pInfo.textContent = 'Mortar and Stationary machinegun ammo capacity increased by 25% for all team. Durability of defenses increased by 25% for all team.'
                break;
            case 'exe2':
                pName.textContent = 'Bullet Rain II'
                pInfo.textContent = 'Shotgun and semi automatic weapons reload speed increased by 10%.'
                break;

            // 2 First Column
            case 'exf1':
                pName.textContent = 'Deep Pockets'
                pInfo.textContent = 'Carried ammo capacity for primary and secondary weapons increased by 25%.'
                break;
            case 'exf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'exf3':
                pName.textContent = 'Rifleman'
                pInfo.textContent = 'Start with ARK-103 Assault Rifle.'
                break;
            case 'exf4':
                pName.textContent = 'S890'
                pInfo.textContent = `Start with an S890 Combat Shotgun.`
                break;

            // 2 Second Column
            case 'exg1':
                pName.textContent = 'Green Fingered'
                pInfo.textContent = `Your Claymores are rigged to explode only when there are at least 5 targets in the blast area. Start with Claymore.`
                break;
            case 'exg2':
                pName.textContent = 'Fire Trap'
                pInfo.textContent = 'Claymore explosions set fire to surrounding area. Start with Claymore.'
                break;
            case 'exg3':
                pName.textContent = `Combat Engineer`
                pInfo.textContent = '20% chance to restore an expended Defense Kit. (10% for Horde Mode).'
                break;
            case 'exg4':
                pName.textContent = `Burnout`
                pInfo.textContent = `During swarm attacks, fire damage is increased by 25%.`
                break;

            // 2 Third Column
            case 'exh1':
                pName.textContent = 'Second Wind'
                pInfo.textContent = 'Instead of becoming incapacitated you will regain 25% health and keep going (cooldown 120 seconds).'
                break;
            case 'exh2':
                pName.textContent = 'Job Satisfaction'
                pInfo.textContent = 'Killing 15 zombies in rapid succession grants temporary health boost (cooldown 30 seconds).'
                break;
            case 'exh3':
                pName.textContent = `Cloak And Dagger`
                pInfo.textContent = `Killing 15 zombies in rapid succession grants masking effect for 3 seconds.`
                break;
            case 'exh4':
                pName.textContent = 'Heavy Bone'
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop an MRL202 Commando (cooldown: 120 seconds).`
                break;

            // Third Set
            case 'exi1':
                pName.textContent = 'Hollywood II'
                pInfo.textContent = 'Explosives and fire damage dealt to yourself and your teammates reduced by 50%.'
                break;
            case 'exi2':
                pName.textContent = 'Know-How II'
                pInfo.textContent = 'Molotovs and Claymores can kill 10% more targets.'
                break;

            // 3 First Column
            case 'exj1':
                pName.textContent = 'Broad Shoulders'
                pInfo.textContent = `Heavy weapon ammo capacity increased by 25%.`
                break;
            case 'exj2':
                pName.textContent = 'Bullet Rain'
                pInfo.textContent = `All fully automatic weapons' reload speed increased by 25%.`
                break;
            case 'exj3':
                pName.textContent = 'Third Hand'
                pInfo.textContent = 'Killing 15 zombies in rapid succession instantly reloads your primary weapon.'
                break;
            case 'exj4':
                pName.textContent = `Nimble Fingers`
                pInfo.textContent = `Shotgun reload speed is increased by 25%.`
                break;

            // 3 Second Column
            case 'exk1':
                pName.textContent = 'Party At My Place'
                pInfo.textContent = 'Maximum Molotov capacity increased to 3 and Claymore capacity to 4.'
                break;
            case 'exk2':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = `Killing 15 zombies in rapid succession refills one equipment charge (cooldown 60 seconds).`
                break;
            case 'exk3':
                pName.textContent = 'Pocket Factory'
                pInfo.textContent = `You won't be able to pick equipment bags on the mission but your equipment will be constantly regenerating (150 seconds to replenish to maximum).`
                break;
            case 'exk4':
                pName.textContent = `Impromptu`
                pInfo.textContent = `Special zombies are stunned by the Molotov's splash.`
                break;

            // 3 Third Column
            case 'exl1':
                pName.textContent = 'Know-How'
                pInfo.textContent = `Molotovs and Claymores can kill 25% more targets.`
                break;
            case 'exl2':
                pName.textContent = 'Hot Sauce'
                pInfo.textContent = `Molotov's splash damage increased by 100%.`
                break;
            case 'exl3':
                pName.textContent = 'Ghost'
                pInfo.textContent = 'Automatically receive masking effect if you are the last of your team still standing (does not apply if you are incapacitated or pinned).'
                break;
            case 'exl4':
                pName.textContent = `Heavy Stride`
                pInfo.textContent = `Claymore mines explode twice with a delay of 5 seconds, but each explosion can kill 15% fewer targets. Start with a Claymore.`
                break;

            // Fourth Set
            case 'exm1':
                pName.textContent = `Daredevil`
                pInfo.textContent = 'When there are more than 30 zombies in the area, firearm damage is increased by 25% and number of melee strikes before becoming fatigued increased by 2.'
                break;
            case 'exm2':
                pName.textContent = 'Deep Pocket II'
                pInfo.textContent = 'Carried ammo capacity for primary weapons increased by 10%.'
                break;


            // DIVISON CODE 
            // First Set
            case 'dma1':
                pName.textContent = 'Flying Start'
                pInfo.textContent = `Start with a Scout Rifle and Quadrocopter that will stun single zombies at short range. 12 shots per full charge but stunning a special zombie costs 5 shots.`
                break;
            case 'dma2':
                pName.textContent = 'Ammo Drop'
                pInfo.textContent = 'Person being followed regains 10% of primary ammo when Quadrocopter is depleted.'
                break;

            // First Column
            case 'dmb1':
                pName.textContent = 'Go The Distance'
                pInfo.textContent = `Quadrocopter charge (the number of stun shots or kills the Quadrocopter can perform) is increased by 15%.`
                break;
            case 'dmb2':
                pName.textContent = 'Take A Load Off'
                pInfo.textContent = `Quadrocopter's charge increased by 30%, but you carry 20% less ammo for primary and secondary weapons.`
                break;
            case 'dmb3':
                pName.textContent = 'Longshot'
                pInfo.textContent = `Quadrocopter's attack range increased by 100% (base: 2 meters for stun gun, 15 meters for pistol).`
                break;
            case 'dmb4':
                pName.textContent = 'Good Boy'
                pInfo.textContent = `The Stun Gun of the Quadrocopter is replaced with a Stim Pistol. If the player doesn't have temporary health, the Quadrocopter shoots them with the Stim Pistol. Has 3 charges.`
                break;

            // Second Column
            case 'dmc1':
                pName.textContent = 'Silent Stinger'
                pInfo.textContent = 'Your Quadrocopter will be equipped with a silenced pistol and will attack zombies in a 15 meter radius. 15 kills per full charge.'
                break;
            case 'dmc2':
                pName.textContent = 'Firecracker'
                pInfo.textContent = 'Your Quadrocopter will be equipped with an unsilenced pistol and will attack zombies in a 15 meter radius. Shot damage increased by 100%. 15 kills per full charge.'
                break;
            case 'dmc3':
                pName.textContent = `Lighting Storm`
                pInfo.textContent = `Your Quadrocopter's stun gun's fire rate is increased by 50%.`
                break;
            case 'dmc4':
                pName.textContent = 'On a Bender'
                pInfo.textContent = `Your Quadrocopter will be equipped with Frag Grenades and will drop them on large groups of enemies.`
                break;

            // Third Column
            case 'dmd1':
                pName.textContent = 'Overdrive'
                pInfo.textContent = `Tapping "Use Equipment" button increases Quadrocopter's rate of fire by 100% for 6 seconds. It cannot be depleted during this time but will be depleted as soon as the effect is over.`
                break;
            case 'dmd2':
                pName.textContent = 'Well Trained'
                pInfo.textContent = 'Tapping "Use Equipment" button toggles active Quadrocopter between "follow" and "stationary" modes. Quadrocopter damage in stationary mode increased by 50% (applies to both stun gun and handgun versions).'
                break;
            case 'dmd3':
                pName.textContent = 'The Big Five O'
                pInfo.textContent = `Start with improved BF25 Payload Rifle that deals 50% more damage and has 50% more ammo. All BF25 Payload Rifle pickups for you also improved [base: 6 ammo].`
                break;
            case 'dmd4':
                pName.textContent = `It's Alive`
                pInfo.textContent = `Tapping the "Use Equipment" button activates all remaining charges of the Quadrocopter's Stim Pistol plus an additional one. After that, it will be depleted. Only works if the Quadrocopter is equipped with a Stim Pistol.`
                break;

            // Second Set
            case 'dme1':
                pName.textContent = 'Rechargeable'
                pInfo.textContent = 'Active Quadrocopter will passively restore its charge by 1% per seconds after 5 seconds from its last shot.'
                break;
            case 'dme2':
                pName.textContent = 'Unfettered'
                pInfo.textContent = 'Movement speed penalty when zombies are very close reduced by 50% for person followed by your Quadrocopter.'
                break;

            // 2 First Column
            case 'dmf1':
                pName.textContent = 'Burst Pro'
                pInfo.textContent = 'Reload speed of firearms with burst fire mode increased by 25%.'
                break;
            case 'dmf2':
                pName.textContent = 'Wheatgrass'
                pInfo.textContent = 'Health increased by 25%.'
                break;
            case 'dmf3':
                pName.textContent = 'Weapon Of Choice'
                pInfo.textContent = 'Start with Le Clairon Bullpup Rifle.'
                break;
            case 'dmf4':
                pName.textContent = 'Scrap Metal... Again II'
                pInfo.textContent = `All equipment bags within 20 meters will be automatically marked if you have no equipment charges.`
                break;

            // 2 Second Column
            case 'dmg1':
                pName.textContent = 'Backup Plan'
                pInfo.textContent = `When you are grabbed, if you have no Quadrocopter following you but have one in your inventory, a Quadrocopter will automatically be launched (cooldown 180 seconds).`
                break;
            case 'dmg2':
                pName.textContent = 'Parting Gift'
                pInfo.textContent = `Receive small amount of temporary health when the Quadrocopter is depleted (applies to the person it's following).`
                break;
            case 'dmg3':
                pName.textContent = `Saving Grace`
                pInfo.textContent = 'If a player followed by a Quadrocopter is hit and about to be incapacitated, the Quadrocopter will grant a masking effect for 6 seconds (cooldown 180 seconds).'
                break;
            case 'dmg4':
                pName.textContent = `Clear!`
                pInfo.textContent = `If a player followed by a Quadrocopter is incapacitated, the Quadrocopter will revive them and get depleted (cooldown: 180 seconds).`
                break;

            // 2 Third Column
            case 'dmh1':
                pName.textContent = 'Pied Piper'
                pInfo.textContent = `Holding "Use Equipment" button commands Quadrocopter to fly to the point you're aiming at. After it reaches that point it will attract zombies for 5 seconds and will then be depleted.`
                break;
            case 'dmh2':
                pName.textContent = 'Sharing Is Caring'
                pInfo.textContent = `Holding "Use Equipment" button commands Quadrocopter to follow a teammate you're aiming at. You must have a spare Quadrocopter and you can't have more than two Quadrocopters active at the same time.`
                break;
            case 'dmh3':
                pName.textContent = `Coming In Hot`
                pInfo.textContent = `Holding "Use Equipment" button commands Quadrocopter to fly to the point you're aiming at and explode there.`
                break;
            case 'dmh4':
                pName.textContent = 'Seems He Fell Here'
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop an equipment bag (cooldown: 180 seconds).`
                break;

            // Third Set
            case 'dmi1':
                pName.textContent = 'Payload Power-Up'
                pInfo.textContent = 'Quadrocopter equipped with stun gun can hit 2 targets per shot (base: 1) Each target hit carries a charge cost. Quadrocopter equipped with pistol deals 50% more damage.'
                break;
            case 'dmi2':
                pName.textContent = 'Spotter'
                pInfo.textContent = 'Firearm damage increased by 15% for person followed by your Quadrocopter.'
                break;

            // 3 First Column
            case 'dmj1':
                pName.textContent = 'Housekeeping'
                pInfo.textContent = `Quadrocopter automatically defuses enemy landmines and captures hostile automatic turrets in 10 meters radius.`
                break;
            case 'dmj2':
                pName.textContent = 'Keep It Down'
                pInfo.textContent = `Active Quadrocopter will automatically target the Screamer if he's not killed within 20 seconds after his first scream. Quadrocopter will be depleted after the Screamer is dead.`
                break;
            case 'dmj3':
                pName.textContent = 'Eye In The Sky'
                pInfo.textContent = 'All active special zombies within a radius 14 meters around your Quadrocopter will be automatically marked.'
                break;
            case 'dmj4':
                pName.textContent = `Splasher`
                pInfo.textContent = `Your Quadrocopter automatically disinfects you if you get hit by the Infector's spit.`
                break;

            // 3 Second Column
            case 'dmk1':
                pName.textContent = 'Pocket Factory'
                pInfo.textContent = `You won't be able to pick equipment bags on the mission but your equipment will be constantly regenerating (150 seconds to replenish to maximum).`
                break;
            case 'dmk2':
                pName.textContent = 'Flight Of Fury'
                pInfo.textContent = `Killing 15 zombies in rapid succession restores one Quadrocopter to your inventory (cooldown 180 seconds).`
                break;
            case 'dmk3':
                pName.textContent = 'Special Prize'
                pInfo.textContent = `Killing a special zombie restores one Quadrocopter to your inventory (cooldown 180 seconds).`
                break;
            case 'dmk4':
                pName.textContent = `New Battery`
                pInfo.textContent = `There is a 25% chance that the Quadrocopter's ability will not consume its charge.`
                break;

            // 3 Third Column
            case 'dml1':
                pName.textContent = 'Multitasking'
                pInfo.textContent = `Automatically reload primary weapon on Quadrocopter launch.`
                break;
            case 'dml2':
                pName.textContent = 'Not On My Watch'
                pInfo.textContent = `Friendly fire taken is decreased by 100% for person followed by your Quadrocopter.`
                break;
            case 'dml3':
                pName.textContent = 'Next Best Thing'
                pInfo.textContent = 'Start with Geist 17MP machine pistol as secondary weapon.'
                break;
            case 'dml4':
                pName.textContent = `Gathered My Thoughts`
                pInfo.textContent = `The player followed by your Quadrocopter receives 25% more sprint stamina.`
                break;

            // Fourth Set
            case 'dmm1':
                pName.textContent = `Out With A Bang`
                pInfo.textContent = 'Quadrocopter stuns up to 10 zombies in 5 meters radius when it is depleted (also applies for handgun version).'
                break;
            case 'dmm2':
                pName.textContent = 'Guardian Angel'
                pInfo.textContent = 'Person followed by your Quadrocopter will take 10% less damage.'
                break;


            // DIVISON CODE 
            // First Set
            case 'va1':
                pName.textContent = 'Safeguard'
                pInfo.textContent = `Start with Mobile Shield and M500 Shotgun. Take 100% less friendly fire damage while using Shield Charge or Blocking.`
                break;
            case 'va2':
                pName.textContent = 'Peripheral Vision'
                pInfo.textContent = 'Increase angle at which attacks will be blocked by your Shield by 10% (base: 220 deg).'
                break;

            // First Column
            case 'vb1':
                pName.textContent = 'Quick Hands'
                pInfo.textContent = `Blocking zombie hit or performing Shield Charge reloads your primary and secondary weapons.`
                break;
            case 'vb2':
                pName.textContent = 'Adrenaline Rush'
                pInfo.textContent = `Blocking zombie hit or performing Shield Charge fully restores melee stamina.`
                break;
            case 'vb3':
                pName.textContent = 'Fancy Footwork'
                pInfo.textContent = `Better maneuverability when using Shield Charge and you can move 30% faster while blocking.`
                break;
            case 'vb4':
                pName.textContent = 'Breakthrough!'
                pInfo.textContent = `Hitting an enemy while using the Shield Charge will grant you 75% temporary health.`
                break;

            // Second Column
            case 'vc1':
                pName.textContent = 'Passive Aggression'
                pInfo.textContent = 'Shield Block can withstand incoming hits for 3 more seconds (base: 5 seconds).'
                break;
            case 'vc2':
                pName.textContent = 'All Round Defense'
                pInfo.textContent = 'For the first 3 seconds Shield Block protects you from all directions.'
                break;
            case 'vc3':
                pName.textContent = `Residual Defense`
                pInfo.textContent = `Take 50% less damage from zombies for 3 seconds after Shield Block ends.`
                break;
            case 'vc4':
                pName.textContent = 'Hoplite'
                pInfo.textContent = `All teammates take 25% less damage if you hold the Shield Block within 5 meters of them.`
                break;

            // Third Column
            case 'vd1':
                pName.textContent = 'Conditioning'
                pInfo.textContent = `You can perform 2 more Shield Charges per full shield energy (base: 2 charges).`
                break;
            case 'vd2':
                pName.textContent = 'Recuperation'
                pInfo.textContent = `You won't be able to collect equipment bags, but your Shield energy will constantly recharge (140 seconds to replenish to maximum).`
                break;
            case 'vd3':
                pName.textContent = 'Pickpocket'
                pInfo.textContent = `Killing 15 zombies in rapid succession refills one equipment charge (cooldown 30 seconds).`
                break;
            case 'vd4':
                pName.textContent = `Tax Collector`
                pInfo.textContent = `You refill 1 equipment charge for each special zombie hit during a shield charge (cooldown: 30 seconds).`
                break;

            // Second Set
            case 've1':
                pName.textContent = 'Armor Plated'
                pInfo.textContent = 'You gain passive shield protection for 3 seconds when you start interacting with something (cooldown 10 sec).'
                break;
            case 've2':
                pName.textContent = 'Steadfast'
                pInfo.textContent = 'All zombie damage is reduced by 25% when using Shield Block.'
                break;

            // 2 First Column
            case 'vf1':
                pName.textContent = 'Stronger Together'
                pInfo.textContent = 'Health for you and all teammates increased by 7.5%.'
                break;
            case 'vf2':
                pName.textContent = 'Outer Shell'
                pInfo.textContent = 'When your health is below 30% incoming damage depletes Shield energy before health. Full Shield energy prevents damage up to 50% of health.'
                break;
            case 'vf3':
                pName.textContent = 'Juggernaut'
                pInfo.textContent = 'Health increased by 35% but sprint stamina decreased by 50%.'
                break;
            case 'vf4':
                pName.textContent = 'Guard Dog'
                pInfo.textContent = `Start with an improved Forest Warrior Chainsaw that deals 50% more damage and has 50% more fuel. All Forest Warrior Chainsaw pickups for you are also improved.`
                break;

            // 2 Second Column
            case 'vg1':
                pName.textContent = 'Rolling Refill'
                pInfo.textContent = `Passing near an Ammo Crate during a Shield Charge automatically refills your ammo.`
                break;
            case 'vg2':
                pName.textContent = 'Magnet'
                pInfo.textContent = `Restore 2% of primary weapon ammo for each enemy killed with a Shield Charge.`
                break;
            case 'vg3':
                pName.textContent = `Supply Train`
                pInfo.textContent = 'Passing near a teammate during a Shield Charge reloads their primary weapon. You receive 5% ammo for your primary weapon for each teammate reloaded.'
                break;
            case 'vg4':
                pName.textContent = `Special Coating`
                pInfo.textContent = `Passing near a teammate during a Shield Charge grants a 75% temporary health boost to them.`
                break;

            // 2 Third Column
            case 'vh1':
                pName.textContent = 'Freight Train'
                pInfo.textContent = `You can kill 40% more zombies with a shield charge (base: 14 zombies).`
                break;
            case 'vh2':
                pName.textContent = 'Shake It Off'
                pInfo.textContent = `Performing a Shield Charge removes all negative effects received from special zombies.`
                break;
            case 'vh3':
                pName.textContent = `Long Run`
                pInfo.textContent = `Your Shield Charge speed and covered distance increased by 20%.`
                break;
            case 'vh4':
                pName.textContent = 'Bad Odor II'
                pInfo.textContent = `There is a chance that killing a special zombie will cause it to drop a primary weapon (cooldown: 180 seconds).`
                break;

            // Third Set
            case 'vi1':
                pName.textContent = 'On Your Feet'
                pInfo.textContent = 'A single incapacitated teammate within 2 meters of where you finish a Shield Charge will get back up on their feet.'
                break;
            case 'vi2':
                pName.textContent = 'Secret Stash'
                pInfo.textContent = 'All zombie damage is reduced by 25% when using Shield Block.'
                break;

            // 3 First Column
            case 'vj1':
                pName.textContent = 'Elbow Room'
                pInfo.textContent = `When you, or a teammate within 2 meters of you, starts reviving an incapacitated character, surrounding enemies will be pushed back (cooldown 60 seconds).`
                break;
            case 'vj2':
                pName.textContent = 'Placebo Effect'
                pInfo.textContent = `Heal 10% of max health when someone uses a medkit within 2 meters of you and you're not the target of healing.`
                break;
            case 'vj3':
                pName.textContent = 'Inspirational'
                pInfo.textContent = 'Killing 15 zombies in rapid succession while you are the only member of your team still standing respawns a randomly selected dead teammate (cooldown 60 seconds).'
                break;
            case 'vj4':
                pName.textContent = `Risen From The Ashes`
                pInfo.textContent = `When you become the last member of your team standing, you gain temporary health (cooldown: 60 seconds).`
                break;

            // 3 Second Column
            case 'vk1':
                pName.textContent = 'Sturdy'
                pInfo.textContent = `When your Shield Block is completely expended, you gain a temporary health boost (cooldown 60 sec).`
                break;
            case 'vk2':
                pName.textContent = 'Hurry Back'
                pInfo.textContent = `Respawn time for the whole team decreased by 15%.`
                break;
            case 'vk3':
                pName.textContent = 'Centre Of Attention'
                pInfo.textContent = `Activating Shield Block will force all zombies within 3 meters in front of you to target you instead of your teammates.`
                break;
            case 'vk4':
                pName.textContent = `Reinforced Metal`
                pInfo.textContent = `The Shield Block reduces all damage by 5%.`
                break;

            // 3 Third Column
            case 'vl1':
                pName.textContent = 'Trial Blazer'
                pInfo.textContent = `Finishing a Shield Charge sets enemies in front of you on fire (distance 2 meters).`
                break;
            case 'vl2':
                pName.textContent = 'You Made Me Mad'
                pInfo.textContent = `Melee attacks and firearms deal 50% more damage for 5 seconds after you holster the Shield.`
                break;
            case 'vl3':
                pName.textContent = 'Avenger'
                pInfo.textContent = 'Firearm damage increased by 20% for each dead or incapacitated teammate.'
                break;
            case 'vl4':
                pName.textContent = `Revenge`
                pInfo.textContent = `You take 5% less damage for each killed or incapacitated teammate.`
                break;

            // Fourth Set
            case 'vm1':
                pName.textContent = `Breathing Room`
                pInfo.textContent = 'Automatically push back nearby zombies when you are hit and about to be incapacitated (cooldown 60 seconds).'
                break;
            case 'vm2':
                pName.textContent = 'Linebacker'
                pInfo.textContent = 'Shield Charge allows you to run for an additional 1 seconds (base: 5 seconds).'
                break;
        }
    })
})