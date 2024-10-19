document.addEventListener('DOMContentLoaded', () => {
    console.log('Script started');

    // Define the data structure for the Stacks ecosystem
    const data = {
        name: "Stacks Ecosystem",
        children: [
            {
                name: "Wallets",
                children: [
                    { name: "Xverse", url: "https://www.xverse.app/" },
                    { name: "Hiro Wallet", url: "https://wallet.hiro.so/" },
                    { name: "Stack Wallet", url: "https://stackswallet.com/" }
                ]
            },
            {
                name: "Exchanges",
                children: [
                    { name: "Binance", url: "https://www.binance.com/en/trade/STX_USDT" },
                    { name: "OKX", url: "https://www.okx.com/trade-spot/stx-usdt" },
                    { name: "Bybit", url: "https://www.bybit.com/en-US/trade/spot/STX/USDT" },
                    { name: "KuCoin", url: "https://www.kucoin.com/trade/STX-USDT" }
                ]
            },
            {
                name: "DeFi",
                children: [
                    { name: "ALEX", url: "https://www.alexgo.io/" },
                    { name: "Arkadiko", url: "https://arkadiko.finance/" },
                    { name: "Zest Protocol", url: "https://zestprotocol.com/" },
                    { name: "LNSwap", url: "https://lnswap.org/" }
                ]
            },
            {
                name: "NFTs",
                children: [
                    { name: "Gamma", url: "https://gamma.io/" },
                    { name: "STXNFT", url: "https://stxnft.com/" },
                    { name: "Tradeport", url: "https://www.tradeport.xyz/" }
                ]
            },
            {
                name: "Infrastructure",
                children: [
                    { name: "Hiro", url: "https://www.hiro.so/" },
                    { name: "Stacks Foundation", url: "https://stacks.org/" },
                    { name: "Secret Key Labs", url: "https://secretkeylabs.com/" }
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
    "Wallets": "#FF6B6B",
    "Exchanges": "#4ECDC4",
    "DeFi": "#45B7D1",
    "NFTs": "#FFA500",
    "Infrastructure": "#7FDBFF",
    "default": "#CCCCCC"
};
