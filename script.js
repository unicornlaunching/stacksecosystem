document.addEventListener('DOMContentLoaded', () => {
    console.log('Script started');

    // Define the data structure for the Stacks ecosystem
    const data = {
        name: "Stacks Ecosystem",
        children: [
            {
                name: "Core Infrastructure",
                children: [
                    { name: "Stacks Blockchain", url: "https://www.stacks.co/" },
                    { name: "Clarity Smart Contracts", url: "https://clarity-lang.org/" },
                    { name: "Proof of Transfer (PoX)", url: "https://docs.stacks.co/understand-stacks/proof-of-transfer" },
                    { name: "Stacks 2.0", url: "https://www.stacks.co/stacks-2" },
                    { name: "Nakamoto Release", url: "https://stacks.org/nakamoto" },
                    { name: "sBTC", url: "https://www.stacks.co/sbtc" }
                ]
            },
            {
                name: "Wallets",
                children: [
                    { name: "Xverse", url: "https://www.xverse.app/" },
                    { name: "Hiro Wallet", url: "https://wallet.hiro.so/" },
                    { name: "Stack Wallet", url: "https://stackswallet.com/" },
                    { name: "Leather", url: "https://leather.io/" },
                    { name: "MyStacks Wallet", url: "https://www.mystacks.xyz/" },
                    { name: "Boom Wallet", url: "https://boom.money/" }
                ]
            },
            {
                name: "Exchanges",
                children: [
                    { name: "Binance", url: "https://www.binance.com/en/trade/STX_USDT" },
                    { name: "OKX", url: "https://www.okx.com/trade-spot/stx-usdt" },
                    { name: "Bybit", url: "https://www.bybit.com/en-US/trade/spot/STX/USDT" },
                    { name: "KuCoin", url: "https://www.kucoin.com/trade/STX-USDT" },
                    { name: "Gate.io", url: "https://www.gate.io/trade/STX_USDT" },
                    { name: "Crypto.com", url: "https://crypto.com/exchange/trade/spot/STX_USDT" },
                    { name: "Bitfinex", url: "https://trading.bitfinex.com/t/STX:USD" },
                    { name: "Huobi", url: "https://www.huobi.com/en-us/exchange/stx_usdt" },
                    { name: "Kraken", url: "https://www.kraken.com/prices/stx-stacks-price-chart/usd-us-dollar?interval=1m" }
                ]
            },
            {
                name: "DeFi",
                children: [
                    { name: "ALEX", url: "https://www.alexgo.io/" },
                    { name: "Arkadiko", url: "https://arkadiko.finance/" },
                    { name: "Zest Protocol", url: "https://zestprotocol.com/" },
                    { name: "LNSwap", url: "https://lnswap.org/" },
                    { name: "Lydian", url: "https://lydian.xyz/" },
                    { name: "Stackswap", url: "https://stackswap.org/" },
                    { name: "Catamaran Swaps", url: "https://www.catamaranswaps.org/" },
                    { name: "Bitflow", url: "https://bitflow.finance/" },
                    { name: "STSW Token", url: "https://www.stsw.io/" },
                    { name: "Stacks Degens", url: "https://stacksdegens.com/" }
                ]
            },
            {
                name: "NFTs",
                children: [
                    { name: "Gamma", url: "https://gamma.io/" },
                    { name: "STXNFT", url: "https://stxnft.com/" },
                    { name: "Tradeport", url: "https://www.tradeport.xyz/" },
                    { name: "Byzantion", url: "https://byzantion.xyz/" },
                    { name: "Megapont", url: "https://megapont.com/" },
                    { name: "StacksArt", url: "https://www.stacksart.com/" },
                    { name: "Boom", url: "https://boom.money/" },
                    { name: "Sigle", url: "https://www.sigle.io/" },
                    { name: "Crashpunks", url: "https://crashpunks.com/" },
                    { name: "Stacks Punks", url: "https://stackspunks.com/" }
                ]
            },
            {
                name: "Infrastructure",
                children: [
                    { name: "Hiro", url: "https://www.hiro.so/" },
                    { name: "Stacks Foundation", url: "https://stacks.org/" },
                    { name: "Secret Key Labs", url: "https://secretkeylabs.com/" },
                    { name: "Trust Machines", url: "https://trustmachines.co/" },
                    { name: "Daemon Technologies", url: "https://daemontechnologies.co/" },
                    { name: "Freehold", url: "https://joinfreehold.com/" },
                    { name: "New Internet Labs", url: "https://newinternetlabs.com/" },
                    { name: "Mechanism Capital", url: "https://www.mechanism.capital/" },
                    { name: "Stacks Accelerator", url: "https://www.stacksaccelerator.com/" }
                ]
            },
            {
                name: "Developer Tools",
                children: [
                    { name: "Clarinet", url: "https://github.com/hirosystems/clarinet" },
                    { name: "Stacks.js", url: "https://github.com/hirosystems/stacks.js" },
                    { name: "Clarity Tools", url: "https://clarity.tools/" },
                    { name: "Stacks Explorer", url: "https://explorer.stacks.co/" },
                    { name: "Stacks API", url: "https://docs.hiro.so/api" },
                    { name: "Chainhook", url: "https://chainhook.rs/" },
                    { name: "Clarity VSCode Extension", url: "https://marketplace.visualstudio.com/items?itemName=HiroSystems.clarity-lsp" },
                    { name: "Stacks Blockchain API", url: "https://docs.hiro.so/api" },
                    { name: "Stacks Node", url: "https://docs.stacks.co/understand-stacks/running-mainnet-node" }
                ]
            },
            {
                name: "Education",
                children: [
                    { name: "Clarity Universe", url: "https://clarity-lang.org/universe" },
                    { name: "Stacks Documentation", url: "https://docs.stacks.co/" },
                    { name: "Stacks Academy", url: "https://stacks.academy/" },
                    { name: "Learn Stacks", url: "https://learn.stacks.co/" },
                    { name: "Clarity Book", url: "https://book.clarity-lang.org/" },
                    { name: "Stacks Community", url: "https://community.stacks.org/" }
                ]
            },
            {
                name: "Governance",
                children: [
                    { name: "Stacks Governance", url: "https://stacks.org/governance" },
                    { name: "Stacks Improvement Proposals (SIPs)", url: "https://github.com/stacksgov/sips" },
                    { name: "Stacks Foundation Grants", url: "https://stacks.org/grants" }
                ]
            },
            {
                name: "Community",
                children: [
                    { name: "Stacks Discord", url: "https://discord.gg/stacks" },
                    { name: "Stacks Forum", url: "https://forum.stacks.org/" },
                    { name: "Stacks Telegram", url: "https://t.me/StacksChat" },
                    { name: "Stacks Reddit", url: "https://www.reddit.com/r/stacks/" },
                    { name: "Stacks Twitter", url: "https://twitter.com/Stacks" },
                    { name: "Stacks YouTube", url: "https://www.youtube.com/c/Stacks" }
                ]
            },
            {
                name: "Key People",
                children: [
                    {
                        name: "Founders & Core Team",
                        children: [
                            { name: "Muneeb Ali", description: "Co-founder of Stacks, CEO of Trust Machines" },
                            { name: "Ryan Shea", description: "Co-founder of Stacks" },
                            { name: "Jude Nelson", description: "Principal Engineer at Stacks Foundation" },
                            { name: "Aaron Blankstein", description: "Engineer at Hiro Systems" },
                            { name: "Diwaker Gupta", description: "Head of Technology at Hiro" },
                            { name: "Mitchell Cuevas", description: "Head of Growth at Stacks Foundation" },
                            { name: "Jenny Mith", description: "Executive Director of Stacks Foundation" },
                            { name: "Patrick Stanley", description: "Founder of Freehold" },
                            { name: "Brittany Laughlin", description: "Executive Director at Stacks Foundation" },
                            { name: "Jesse Soslow", description: "Head of Legal and Regulatory Affairs at Hiro" }
                        ]
                    },
                    {
                        name: "Advisors",
                        children: [
                            { name: "Naval Ravikant", description: "Founder of AngelList" },
                            { name: "Albert Wenger", description: "Managing Partner at Union Square Ventures" },
                            { name: "Meltem Demirors", description: "CSO of CoinShares" },
                            { name: "Michael Terpin", description: "Founder of Transform Group" },
                            { name: "William Mougayar", description: "Author and blockchain advisor" }
                        ]
                    },
                    {
                        name: "Investors",
                        children: [
                            {
                                name: "Stacks Ecosystem Investors",
                                children: [
                                    { name: "Union Square Ventures", description: "VC firm, early investor in Stacks" },
                                    { name: "Winklevoss Capital", description: "Investment firm founded by Tyler and Cameron Winklevoss" },
                                    { name: "Blockchain Capital", description: "Venture capital firm focusing on blockchain" },
                                    { name: "Digital Currency Group", description: "Company focusing on the digital currency market" },
                                    { name: "Draper Associates", description: "VC firm founded by Tim Draper" },
                                    { name: "Fenbushi Capital", description: "Venture capital firm focusing on blockchain-enabled companies" },
                                    { name: "Lux Capital", description: "VC firm investing in emerging technologies" },
                                    { name: "Rising Tide", description: "VC firm" },
                                    { name: "Y Combinator", description: "Startup accelerator" },
                                    { name: "Coinbase Ventures", description: "Investment arm of Coinbase" }
                                ]
                            },
                            {
                                name: "ALEX Investors",
                                children: [
                                    { name: "OKX Blockdream Ventures", description: "Venture arm of OKX exchange" },
                                    { name: "STV", description: "Blockchain-focused venture capital firm" },
                                    { name: "Mirana Ventures", description: "Venture capital firm" },
                                    { name: "Hack VC", description: "Crypto-native venture fund" },
                                    { name: "Digital Currency Group", description: "Company focusing on the digital currency market" }
                                ]
                            },
                            {
                                name: "Xverse Investors",
                                children: [
                                    { name: "Digital Currency Group", description: "Company focusing on the digital currency market" },
                                    { name: "Blockchain Founders Fund", description: "Venture capital firm" },
                                    { name: "Mechanism Capital", description: "Crypto-focused investment firm" },
                                    { name: "OKX Blockdream Ventures", description: "Venture arm of OKX exchange" },
                                    { name: "Hivemind", description: "Crypto-focused venture fund" }
                                ]
                            },
                            {
                                name: "Zest Protocol Investors",
                                children: [
                                    { name: "Draper Associates", description: "VC firm founded by Tim Draper" },
                                    { name: "Binance Labs", description: "Venture arm of Binance exchange" },
                                    { name: "Flow Traders", description: "Global trading firm" },
                                    { name: "Trust Machines", description: "Company building on Bitcoin through Stacks" },
                                    { name: "Hivemind", description: "Crypto-focused venture fund" },
                                    { name: "Cadenza", description: "Venture capital firm" }
                                ]
                            },
                            {
                                name: "Velar Investors",
                                children: [
                                    { name: "Blockchain Founders Fund", description: "Venture capital firm" },
                                    { name: "Blockwall Capital", description: "Blockchain and crypto investment firm" },
                                    { name: "Moonrock Capital", description: "Blockchain advisory and investment firm" },
                                    { name: "Woodstock Fund", description: "Multi-asset investment fund" }
                                ]
                            },
                            {
                                name: "Other Project Investors",
                                children: [
                                    { name: "Stacks Foundation", description: "Non-profit organization supporting Stacks ecosystem" },
                                    { name: "Trust Machines", description: "Company building on Bitcoin through Stacks" },
                                    { name: "Freehold", description: "Community-focused organization in Stacks ecosystem" },
                                    { name: "Mechanism Capital", description: "Crypto-focused investment firm" },
                                    { name: "1confirmation", description: "Crypto-focused venture capital firm" },
                                    { name: "Collider Ventures", description: "Early-stage venture capital firm" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Project Leaders",
                        children: [
                            { name: "Marvin Janssen", description: "Co-founder of ALEX" },
                            { name: "Chiente Hsu", description: "Co-founder of ALEX" },
                            { name: "Ken Liao", description: "Co-founder of Arkadiko" },
                            { name: "Philip De Smedt", description: "Co-founder of Arkadiko" },
                            { name: "Jamil Dhanani", description: "Founder of Zest Protocol" },
                            { name: "Léonard Salomon", description: "Founder of Lydian" },
                            { name: "Phillip Roe", description: "Co-founder of Megapont" },
                            { name: "Yannick Folla", description: "Co-founder of Gamma" }
                        ]
                    },
                    {
                        name: "Community Leaders",
                        children: [
                            { name: "Thomas Osmonson", description: "Stacks community developer" },
                            { name: "Xan Ditkoff", description: "Growth lead at Stacks Foundation" },
                            { name: "Jason Schrader", description: "Developer advocate" },
                            { name: "Brice Dobry", description: "Community manager" },
                            { name: "Fernando Hernandez", description: "Developer relations at Hiro" }
                        ]
                    },
                    {
                        name: "Technical Contributors",
                        children: [
                            { name: "Friedger Müffke", description: "Stacks core developer" },
                            { name: "Ludo Galabru", description: "Engineer at Hiro" },
                            { name: "Ken Liao", description: "Clarity language contributor" },
                            { name: "Hank Stoever", description: "Engineer at Hiro" },
                            { name: "Matthew Little", description: "Stacks core developer" }
                        ]
                    }
                ]
            }
        ]
    };

    let width = window.innerWidth;
    let height = window.innerHeight;
    const margin = { top: 20, right: 90, bottom: 30, left: 150 };

    const svg = d3.select("#visualization")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    let treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

    const root = d3.hierarchy(data);

    root.x0 = height / 2;
    root.y0 = 0;

    root.children.forEach(collapse);

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function update(source) {
        const treeData = treeLayout(root);

        const nodes = treeData.descendants();
        const links = treeData.links();

        nodes.forEach(d => { d.y = d.depth * 280 }); // Keep this spacing

        const node = g.selectAll('.node')
            .data(nodes, d => d.id || (d.id = ++i));

        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .on('click', (event, d) => {
                if (d.data.url) {
                    window.open(d.data.url, '_blank');
                } else if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
            });

        nodeEnter.append('circle')
            .attr('r', 0)
            .style("fill", d => d.children || d._children ? colorScheme[d.data.name] || colorScheme.default : "#fff")
            .style("stroke", d => colorScheme[d.data.name] || colorScheme.default)
            .style("stroke-width", "2px");

        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", d => d.children || d._children ? -13 : 13)
            .attr("text-anchor", d => d.children || d._children ? "end" : "start")
            .text(d => d.data.name)
            .style("fill-opacity", 0)
            .attr("transform", d => d.children || d._children ? "translate(0, -15)" : "translate(0, 15)");

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition()
            .duration(750)
            .attr("transform", d => `translate(${d.y},${d.x})`);

        nodeUpdate.select('circle')
            .attr('r', 8)
            .style("fill", d => d.children || d._children ? colorScheme[d.data.name] || colorScheme.default : "#fff")
            .attr('cursor', 'pointer');

        nodeUpdate.select('text')
            .style("fill-opacity", 1);

        const nodeExit = node.exit().transition()
            .duration(750)
            .attr("transform", d => `translate(${source.y},${source.x})`)
            .remove();

        nodeExit.select('circle')
            .attr('r', 0);

        nodeExit.select('text')
            .style('fill-opacity', 0);

        const link = g.selectAll('.link')
            .data(links, d => d.target.id);

        const linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', d => {
                const o = {x: source.x0, y: source.y0}
                return diagonal(o, o)
            });

        const linkUpdate = linkEnter.merge(link);

        linkUpdate.transition()
            .duration(750)
            .attr('d', d => `M ${d.source.y} ${d.source.x}
                         C ${(d.source.y + d.target.y) / 2} ${d.source.x},
                           ${(d.source.y + d.target.y) / 2} ${d.target.x},
                           ${d.target.y} ${d.target.x}`)
            .style("stroke", d => colorScheme[d.source.data.name] || colorScheme.default);

        const linkExit = link.exit().transition()
            .duration(750)
            .attr('d', d => {
                const o = {x: source.x, y: source.y}
                return diagonal(o, o)
            })
            .remove();

        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        // Add hover effect and tooltip
        nodeEnter.append("title")
            .text(d => d.data.description);

        nodeUpdate
            .on("mouseover", function(event, d) {
                d3.select(this).select("circle")
                    .transition()
                    .duration(300)
                    .attr("r", 15);
            })
            .on("mouseout", function(event, d) {
                d3.select(this).select("circle")
                    .transition()
                    .duration(300)
                    .attr("r", 10);
            });
    }

    function diagonal(s, d) {
        const midY = (s.y + d.y) / 2;
        return `M ${s.y} ${s.x}
                C ${midY} ${s.x},
                  ${midY} ${d.x},
                  ${d.y} ${d.x}`;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;

        svg.attr("width", width).attr("height", height);
        treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);
        
        update(root);
    }

    update(root);
    window.addEventListener('resize', resize);

    console.log('Enhanced Stacks ecosystem visualization created with visible links');
});

let i = 0;

const colorScheme = {
    "Core Infrastructure": "#FF6B6B",
    "Wallets": "#4ECDC4",
    "Exchanges": "#45B7D1",
    "DeFi": "#FFA500",
    "NFTs": "#7FDBFF",
    "Infrastructure": "#9B59B6",
    "Developer Tools": "#2ECC71",
    "Education": "#E74C3C",
    "Governance": "#3498DB",
    "Community": "#F39C12",
    "Key People": "#1ABC9C",
    "default": "#CCCCCC"
};
