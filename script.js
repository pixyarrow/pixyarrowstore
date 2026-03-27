/* --- ARROW & PIXY: IRONCLAD VERIFICATION ENGINE --- */

const PRODUCTS = [
    { name: "Perm Kitsune", price: "$24.00", type: "fruit", img: "https://preview.redd.it/perm-kitsune-giveaway-v0-foaxzfogemsf1.jpeg?auto=webp&s=94a2a2c0048bf4711a9f21178cedfca3b8edcd93" },
    { name: "Perm Tiger", price: "$18.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gyZCxTRCgfyEm6bPMuZrHkiBbF8G1xxmCQ&s" },
    { name: "Perm Dragon", price: "$28.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLovGwYvr49lrw5kpgEvrLNKDd8Ic4qEa7iQ&s" },
    { name: "Perm Dough", price: "$14.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wrTjb1UMO5S4iPCdLZxplBCEqZTcXVmTiA&s" },
    { name: "Perm Portal", price: "$12.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQn8yRYpQRE4oemeIAFr-6Wn4FIMqJnE-0-w&s" },
    { name: "Perm Buddha", price: "$10.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRajWNQo3fRYVs5BWQYWramjiHCXp3SeEBw&s" },
    { name: "Perm Magma", price: "$8.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNn2RvVQYFgNa57CvYTIl3K-cU_LxXhMJkog&s" },
    { name: "Perm Ice", price: "$4.50", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagQnm0exENY-Eg_3et1_Ly2GKyv833p6k-w&s" },
    { name: "Perm Control", price: "$24.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh20HvZ8zEqO4q5R8ydkyxEMbT8b4o9csUdg&s" },
    { name: "Perm Yeti", price: "$18.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExFeJZqCBXRXx0qm7aBlTnCf_H0DMdHxD0w&s" },
    { name: "Perm Spirit", price: "$15.50", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2RfexXPWXc6g48Z4U4WR1zyisAK1dR8jvw&s" },
    { name: "Perm Gas", price: "$15.00", type: "fruit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9G1EKxOivFnbcPWPB_gePwHhdr1x_C7clg&s" },
    { name: "Fruit Notifier", price: "$16.00", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d90e7a4dc5a82f0d8b0d22951c99bd63/150/150/Image/Webp/noFilter" },
    { name: "Dark Blade", price: "$7.00", type: "pass", img: "https://tr.rbxcdn.com/180DAY-d11805051612e36ad5b32c0b78459680/150/150/Image/Webp/noFilter" },
    { name: "2x Mastery", price: "$2.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-acf0a1f1983c30f7ccded0c756845f36/150/150/Image/Webp/noFilter" },
    { name: "2x Money", price: "$2.50", type: "pass", img: "https://tr.rbxcdn.com/180DAY-63a5bf6ea7e029c50bd82024ac2beae4/150/150/Image/Webp/noFilter" },
    { name: "Fast Boats", price: "$2.00", type: "pass", img: "https://tr.rbxcdn.com/180DAY-021c08aab80ee2cbdba77de1fd128a7a/150/150/Image/Webp/noFilter" },
    { name: "+1 Storage", price: "$3.50", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOjUGNYSrdLiMjb6DKS0gGvqb1Fi-RnH6UA&s" },
    { name: "2x Drop Chance", price: "$2.00", type: "pass", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlzIH6JXX5qYbSHT-LsTDxK555C4AlsHz7g&s" },
];

const WALLETS = {
    LTC: "LUTPGLQ8B84n5D9gWhjCyDQx6Leb8o91tC",
    USDT_TRX: "TCrPMWfvVZjQdDDQdTyK7DNDzxgKGFhDZR",
    USDT_ETH: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E",
    USDT_BNB: "0x1758Cd49b80C309D8B9aD7ad025BD5E1830f7e1E"
};

const WEBHOOK_URL = "https://discord.com/api/webhooks/1487133287880331406/o1EAfZifztySMNI8zNH5pqNsrNDbdmj6H4_mt2PnWOMbjhRN0t1DcHLL7P258jltw3WX";

function renderStore() {
    const fruitGrid = document.getElementById('bf-fruits');
    const passGrid = document.getElementById('bf-passes');
    if(!fruitGrid || !passGrid) return;
    fruitGrid.innerHTML = '';
    passGrid.innerHTML = '';
    PRODUCTS.forEach(p => {
        const card = `<div class="item-card"><img src="${p.img}"><h3>${p.name}</h3><p class="price">${p.price}</p><button onclick="openModal('${p.name}')">PURCHASE</button></div>`;
        if(p.type === 'fruit') fruitGrid.innerHTML += card; else passGrid.innerHTML += card;
    });
}

function openModal(name) {
    document.getElementById('modal-item-name').innerText = name;
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('step-1').classList.remove('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.add('hidden');
}

function goToStep2() {
    if(!document.getElementById('roblox-user').value || !document.getElementById('contact-method').value) {
        return alert("Please fill details!");
    }
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}

function showAddress() {
    const method = document.getElementById('crypto-select').value;
    const box = document.getElementById('address-box');
    const display = document.getElementById('wallet-address');
    if(!method) { box.classList.add('hidden'); return; }
    box.classList.remove('hidden');
    display.innerText = WALLETS[method];
}

function copyAddress() {
    const address = document.getElementById('wallet-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.innerText = "COPIED!";
        setTimeout(() => btn.innerText = "COPY ADDRESS", 1500);
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

    let verificationStatus = "❌ PENDING REVIEW";
    let statusColor = 15158332;

    try {
        if (method === 'LTC') {
            const res = await fetch(`https://api.blockcypher.com/v1/ltc/main/txs/${tx}`);
            const data = await res.json();
            
            if (data && data.outputs && data.outputs.some(out => out.addresses && out.addresses.some(addr => addr.toLowerCase() === WALLETS.LTC.toLowerCase()))) {
                if ((data.confirmations || 0) >= 1) {
                    icon.innerText = "✅";
                    header.innerText = "Payment Confirmed!";
                    header.style.color = "#2ecc71";
                    text.innerText = "LTC payment verified. Processing your order now!";
                    verificationStatus = "✅ LTC VERIFIED";
                    statusColor = 3066993;
                } else {
                    icon.innerText = "⏳";
                    header.innerText = "Confirming...";
                    text.innerText = "Transaction found! Waiting for 1 network confirmation.";
                    verificationStatus = "⏳ LTC PENDING (0 CONF)";
                    statusColor = 16763904;
                }
            }
        } else {
            // Manual check for USDT
            icon.innerText = "⏳";
            header.innerText = "Verifying USDT...";
            text.innerText = "Our system is checking the blockchain for your USDT deposit. This takes 1-3 minutes.";
            verificationStatus = `⏳ MANUAL CHECK: ${method}`;
            statusColor = 16763904;
        }
    } catch (e) {
        console.error(e);
        icon.innerText = "⏳";
        header.innerText = "Manual Verification Required";
        text.innerText = "We couldn't auto-verify, but we've logged your TXID. Admin will check it manually.";
    }

    // Send to Discord
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
                    { name: "📱 Contact", value: contact, inline: true },
                    { name: "💰 Method", value: method, inline: true },
                    { name: "🔗 TXID", value: `\`${tx}\`` },
                    { name: "💬 Comments", value: comments }
                ],
                timestamp: new Date()
            }]
        })
    });

    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-success').classList.remove('hidden');
    btn.innerText = "CONFIRM PURCHASE";
    btn.disabled = false;
}

renderStore();
