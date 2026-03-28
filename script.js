/* --- ARROW & PIXY: MULTI-GAME PREMIUM HUB v2.5 --- */

const PRODUCTS = [
    // --- BLOX FRUITS: PERMANENT FRUITS ---
    { name: "Perm Kitsune", price: "$24.00", category: "bloxfruits", type: "fruit", img: "https://preview.redd.it/perm-kitsune-giveaway-v0-foaxzfogemsf1.jpeg?auto=webp&s=94a2a2c0048bf4711a9f21178cedfca3b8edcd93" },
    { name: "Perm Tiger", price: "$18.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gyZCxTRCgfyEm6bPMuZrHkiBbF8G1xxmCQ&s" },
    { name: "Perm Dragon", price: "$28.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLovGwYvr49lrw5kpgEvrLNKDd8Ic4qEa7iQ&s" },
    { name: "Perm Dough", price: "$14.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wrTjb1UMO5S4iPCdLZxplBCEqZTcXVmTiA&s" },
    { name: "Perm Portal", price: "$12.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn8yRYpQRE4oemeIAFr-6Wn4FIMqJnE-0-w&s" },
    { name: "Perm Buddha", price: "$10.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRajWNQo3fRYVs5BWQYWramjiHCXp3SeEBw&s" },
    { name: "Perm Magma", price: "$8.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNn2RvVQYFgNa57CvYTIl3K-cU_LxXhMJkog&s" },
    { name: "Perm Ice", price: "$4.50", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagQnm0exENY-Eg_3et1_Ly2GKyv833p6k-w&s" },
    { name: "Perm Control", price: "$24.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh20HvZ8zEqO4q5R8ydkyxEMbT8b4o9csUdg&s" },
    { name: "Perm Yeti", price: "$18.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExFeJZqCBXRXx0qm7aBlTnCf_H0DMdHxD0w&s" },
    { name: "Perm Spirit", price: "$15.50", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2RfexXPWXc6g48Z4U4WR1zyisAK1dR8jvw&s" },
    { name: "Perm Gas", price: "$15.00", category: "bloxfruits", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9G1EKxOivFnbcPWPB_gePwHhdr1x_C7clg&s" },

    // --- BLOX FRUITS: GAMEPASSES ---
    { name: "Fruit Notifier", price: "$16.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d90e7a4dc5a82f0d8b0d22951c99bd63/150/150/Image/Webp/noFilter" },
    { name: "Dark Blade", price: "$7.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d11805051612e36ad5b32c0b78459680/150/150/Image/Webp/noFilter" },
    { name: "2x Mastery", price: "$2.50", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-acf0a1f1983c30f7ccded0c756845f36/150/150/Image/Webp/noFilter" },
    { name: "2x Money", price: "$2.50", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-63a5bf6ea7e029c50bd82024ac2beae4/150/150/Image/Webp/noFilter" },
    { name: "Fast Boats", price: "$2.00", category: "bloxfruits", type: "pass", img: "https://tr.rbxcdn.com/180DAY-021c08aab80ee2cbdba77de1fd128a7a/150/150/Image/Webp/noFilter" },
    { name: "+1 Storage", price: "$3.50", category: "bloxfruits", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOjUGNYSrdLiMjb6DKS0gGvqb1Fi-RnH6UA&s" },
    { name: "2x Drop Chance", price: "$2.00", category: "bloxfruits", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlzIH6JXX5qYbSHT-LsTDxK555C4AlsHz7g&s" },

    // --- ADOPT ME: HIGH TIERS (WITH FR/NFR/MFR) ---
    { 
        name: "Shadow Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/1.png",
        variants: [{ label: "FR", price: "$157.00" }, { label: "NFR", price: "$355.00" }, { label: "MFR", price: "$850.00" }]
    },
    { 
        name: "Bat Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/3.png",
        variants: [{ label: "FR", price: "$240.00" }, { label: "NFR", price: "$615.00" }, { label: "MFR", price: "$1650.00" }]
    },
    { 
        name: "Frost Dragon", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/4.png",
        variants: [{ label: "FR", price: "$75.00" }, { label: "NFR", price: "$172.50" }, { label: "MFR", price: "$440.00" }]
    },
    { 
        name: "Giraffe", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/2.png",
        variants: [{ label: "FR", price: "$107.00" }, { label: "NFR", price: "$255.00" }, { label: "MFR", price: "$824.00" }]
    },
    { 
        name: "Owl", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/6.png",
        variants: [{ label: "FR", price: "$69.00" }, { label: "NFR", price: "$187.00" }, { label: "MFR", price: "$620.00" }]
    },
    { 
        name: "Parrot", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/5.png",
        variants: [{ label: "FR", price: "$55.00" }, { label: "NFR", price: "$118.00" }, { label: "MFR", price: "$377.00" }]
    },
    { 
        name: "Evil Unicorn", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/7.png",
        variants: [{ label: "FR", price: "$36.00" }, { label: "NFR", price: "$72.00" }, { label: "MFR", price: "$269.00" }]
    },
    { 
        name: "Crow", category: "adoptme", type: "pet", 
        img: "https://adoptmetradingvalues.com/images/8.png",
        variants: [{ label: "FR", price: "$46.50" }, { label: "NFR", price: "$113.00" }, { label: "MFR", price: "$437.00" }]
    },

    // --- MURDER MYSTERY 2 ---
    { name: "Corrupt", price: "$12.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/sD936Kmg/Corrupt-Transparent.webp" },
    { name: "Harvester", price: "$8.50", category: "mm2", type: "weapon", img: "https://i.postimg.cc/NFdpF3Yg/Harvester-Improved.webp" },
    { name: "Icepiercer", price: "$7.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/RF9kHzr0/no-Filter.webp" },
    { name: "Turkey", price: "$32.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/Jn1NXppt/Turkey-2023.webp" },
    { name: "Dark Set", price: "$40.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/xdPH9K9r/Darkset.webp" },
    { name: "Travelers Set", price: "$150.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/hj5XGsw2/Traveler-Set.webp" },
    { name: "Sakura Set", price: "$40.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/RC2TsLFb/Sakura-Set.webp" },
    { name: "Celestial Set", price: "$75.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/pd0fDD4T/5b63b5431082f50e49cac9b22dfbe962.webp" },
    { name: "Vampire Set", price: "$50.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/8PhLy8xv/Vampires-Set.webp" },
    { name: "Ever Set", price: "$95.00", category: "mm2", type: "weapon", img: "https://i.postimg.cc/LXcZTvT6/bd77924ec927a2f62235f8bfa672d9e6Evergreen-Set.png" },
    { name: "1000 Value", price: "$15.00", category: "mm2", type: "weapon", img: "https://production-gameflipusercontent.fingershock.com/us-east-1:9caa5859-f660-4c80-9667-6322748fcb06/fd346457-ec01-43a1-9678-cd6ee8f7aee1/76213771-e0fe-4fd6-b822-865ea2cbe7c2/640x640.webp" },

    // --- RIVALS (ADD YOUR NEW STUFF BELOW) ---
    { name: "Skin Case", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/L6M1gChs/Skin-Case-1.webp" },
    { name: "Skin Case (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/L6M1gChs/Skin-Case-1.webp" },
    { name: "Skin Case 2", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/Mp9M4z52/Skin-Case-2.webp" },
    { name: "Skin Case 2 (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/Mp9M4z52/Skin-Case-2.webp" },
    { name: "Skin Case 3", price: "$1.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/Rh1qTmh8/Skin-Case3Purple.webp" },
    { name: "Skin Case 3 (x3)", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/Rh1qTmh8/Skin-Case3Purple.webp" },
    { name: "Prime Bundle", price: "$3.50", category: "rivals", type: "skin", img: "https://pic.mmowts.com/web/image/roblox/34cbdea48f807adee0e3562483d8e22d.png?width=300" },
    { name: "Heavy Duty Bundle", price: "$11.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/fysRyPCF/Heavy-Weapons-Bundel.webp" },
    { name: "Classic Bundle", price: "$6.50", category: "rivals", type: "skin", img: "https://i.postimg.cc/rFQwyQrt/Classic-Bundel-Rivals.webp" },
    { name: "Pixel Bundle", price: "$4.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/qRspPLrR/Pixel-Bundel-Rivals.webp" },
    { name: "Standard Weapons Bundle", price: "$6.00", category: "rivals", type: "skin", img: "https://i.postimg.cc/VkJmf1wZ/Standard-Weapons-Bundel.webp" },
    { name: "Contraband Bundle", price: "$6.00", category: "rivals", type: "skin", img: "https://pic.mmowts.com/web/image/roblox/b69669d2a775ceb7ff562546c0d00efe.png?width=300" },
    // Example: { name: "New Skin", price: "$5.00", category: "rivals", type: "skin", img: "URL_HERE" }
];

const WALLETS = {
    LTC: "LUTPGLQ8B84n5D9gWhjCyDQx6Leb8o91tC",
    USDT_TRX: "TCrPMWfvVZjQdDDQdTyK7DNDzxgKGFhDZR",
    USDT_ETH: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E",
    USDT_BNB: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E"
};

const WEBHOOK_URL = "https://discord.com/api/webhooks/1487133287880331406/o1EAfZifztySMNI8zNH5pqNsrNDbdmj6H4_mt2PnWOMbjhRN0t1DcHLL7P258jltw3WX";

// HUB NAVIGATION
function openStore(game) {
    document.getElementById('hub-view').classList.add('hidden');
    document.getElementById('main-store').classList.remove('hidden');
    
    const title = document.getElementById('store-title');
    const subtitle = document.getElementById('store-subtitle');
    
    const titles = {
        'bloxfruits': ["Blox Fruits", "PERMANENT FRUITS & PASSES"],
        'adoptme': ["Adopt Me", "HIGH-TIER LEGENDARIES"],
        'mm2': ["Murder Mystery 2", "GODLIES & ANCIENTS"],
        'rivals': ["Rivals", "EXCLUSIVE WEAPON SKINS"]
    };

    title.innerHTML = `${titles[game][0]} <span class="highlight">Store</span>`;
    subtitle.innerText = titles[game][1];

    renderItems(game);
}

function backToHub() {
    document.getElementById('hub-view').classList.remove('hidden');
    document.getElementById('main-store').classList.add('hidden');
}

function updatePrice(selectElement) {
    const card = selectElement.closest('.item-card');
    card.querySelector('.price').innerText = selectElement.value;
}

function renderItems(game) {
    const container = document.getElementById('store-content');
    container.innerHTML = '';
    const filtered = PRODUCTS.filter(p => p.category === game);
    const types = [...new Set(filtered.map(p => p.type))];

    types.forEach(type => {
        const section = document.createElement('section');
        section.className = 'game-section';
        section.innerHTML = `<div class="section-title"><h2>${type.toUpperCase()}S</h2></div><div class="items-grid"></div>`;
        const grid = section.querySelector('.items-grid');

        filtered.filter(p => p.type === type).forEach(p => {
            let variantHtml = p.variants ? `
                <select class="variant-select" onchange="updatePrice(this)" style="margin-bottom:10px; background:#111; border:1px solid #333; color:white; padding:8px; border-radius:8px; width:100%;">
                    ${p.variants.map(v => `<option value="${v.price}">${v.label} - ${v.price}</option>`).join('')}
                </select>` : '';
            
            grid.innerHTML += `
                <div class="item-card">
                    <img src="${p.img}">
                    <h3>${p.name}</h3>
                    ${variantHtml}
                    <p class="price">${p.price || p.variants[0].price}</p>
                    <button onclick="preparePurchase(this, '${p.name}')">PURCHASE</button>
                </div>`;
        });
        container.appendChild(section);
    });
}

function preparePurchase(btn, baseName) {
    const card = btn.closest('.item-card');
    const price = card.querySelector('.price').innerText;
    const select = card.querySelector('.variant-select');
    const finalName = select ? `${baseName} (${select.options[select.selectedIndex].text.split(' - ')[0]})` : baseName;
    openModal(finalName, price);
}

function openModal(name, price) {
    // RESET LOGIC: Always show Step 1 and hide others when opening
    document.getElementById('step-1').classList.remove('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.add('hidden');
    
    // Clear the old hash input so they don't submit the wrong one twice
    document.getElementById('tx-hash').value = "";

    document.getElementById('modal-item-name').innerText = name + " - " + price;
    document.getElementById('checkout-modal').style.display = 'flex';
    
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `👀 Checkout Started: **${name}** [${price}]` })
    });
}

function closeModal() { 
    document.getElementById('checkout-modal').style.display = 'none'; 
    
    // Optional: Reset the button text in case it was stuck on "VERIFYING..."
    const btn = document.querySelector('button[onclick="confirmPurchase()"]');
    if(btn) {
        btn.innerText = "CONFIRM PURCHASE";
        btn.disabled = false;
    }
}
function goToStep2() { 
    if(!document.getElementById('roblox-user').value || !document.getElementById('contact-method').value) return alert("Fill details!");
    document.getElementById('step-1').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden'); 
}

function showAddress() {
    const method = document.getElementById('crypto-select').value;
    document.getElementById('address-box').classList.toggle('hidden', !method);
    if(method) document.getElementById('wallet-address').innerText = WALLETS[method];
}

function copyAddress() {
    navigator.clipboard.writeText(document.getElementById('wallet-address').innerText).then(() => {
        document.getElementById('copy-btn').innerText = "COPIED!";
        setTimeout(() => document.getElementById('copy-btn').innerText = "COPY ADDRESS", 1500);
    });
}
async function confirmPurchase() {
    const tx = document.getElementById('tx-hash').value.trim();
    const method = document.getElementById('crypto-select').value;
    const itemName = document.getElementById('modal-item-name').innerText;
    const robloxUser = document.getElementById('roblox-user').value;
    const contact = document.getElementById('contact-method').value;
    const comments = document.getElementById('order-comments').value || "None";

    if(!tx) return alert("Please paste the TXID!");

    const btn = document.querySelector('button[onclick="confirmPurchase()"]');
    btn.innerText = "VERIFYING...";
    btn.disabled = true;

    const icon = document.getElementById('status-icon');
    const header = document.getElementById('status-header');
    const text = document.getElementById('status-text');

    // Default: Assume failure until proven otherwise
    let verificationStatus = "⚠️ INVALID/UNVERIFIED";
    let statusColor = 15158332; // Red
    icon.innerText = "❌";
    header.innerText = "Verification Failed";
    header.style.color = "#e74c3c";
    text.innerText = "The TXID provided does not match our wallet records or is invalid.";

    try {
        // --- LTC AUTOMATIC VERIFICATION ---
        if (method === 'LTC') {
            const res = await fetch(`https://api.blockcypher.com/v1/ltc/main/txs/${tx}`);
            const data = await res.json();
            
            // Check if any output address matches your LTC wallet
            if (data && data.outputs && data.outputs.some(out => out.addresses && out.addresses.some(addr => addr.toLowerCase() === WALLETS.LTC.toLowerCase()))) {
                if ((data.confirmations || 0) >= 1) {
                    icon.innerText = "✅";
                    header.innerText = "Payment Confirmed!";
                    header.style.color = "#2ecc71";
                    text.innerText = "LTC payment verified on-chain! We are processing your order now.";
                    verificationStatus = "✅ LTC VERIFIED";
                    statusColor = 3066993; // Green
                } else {
                    icon.innerText = "⏳";
                    header.innerText = "Confirming...";
                    header.style.color = "var(--gold)";
                    text.innerText = "Transaction found on the network! Waiting for 1 block confirmation.";
                    verificationStatus = "⏳ LTC PENDING (0 CONF)";
                    statusColor = 16763904; // Gold
                }
            }
        } 
        // --- USDT MANUAL LOGGING (ETH, BNB, TRX) ---
        else {
            const isTrx = method === 'USDT_TRX' && tx.length >= 32;
            const isEvm = (method === 'USDT_ETH' || method === 'USDT_BNB') && tx.startsWith('0x');

            if (isTrx || isEvm) {
                icon.innerText = "⏳";
                header.innerText = "Manual Review";
                header.style.color = "var(--gold)";
                text.innerText = "USDT details logged. An admin will verify the hash manually on the explorer.";
                verificationStatus = `⏳ MANUAL REVIEW: ${method}`;
                statusColor = 16763904;
            }
        }
    } catch (e) {
        console.error("Verification Error:", e);
        verificationStatus = "🚨 SYSTEM ERROR - CHECK MANUALLY";
    }

    // Send the final result to your Discord Webhook
    await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            embeds: [{
                title: verificationStatus,
                color: statusColor,
                fields: [
                    { name: "🛍️ Item", value: itemName, inline: true },
                    { name: "👤 Roblox", value: robloxUser, inline: true },
                    { name: "💰 Method", value: method, inline: true },
                    { name: "🔗 TXID", value: `\`${tx}\``, inline: false },
                    { name: "📱 Contact", value: contact, inline: true },
                    { name: "💬 Comments", value: comments, inline: true }
                ],
                footer: { text: "Arrow & Pixy Ironclad Engine" },
                timestamp: new Date()
            }]
        })
    });

    // Show the result screen to the user
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');
    btn.innerText = "CONFIRM PURCHASE";
    btn.disabled = false;
}
