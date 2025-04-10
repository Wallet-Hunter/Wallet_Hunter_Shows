import React from "react";

// Sample blog data with links
const blogPosts = [
  {
    title: "Web3’s Transformative Week: AI Agents, Stablecoin Adoption, and Crypto-Fiat Conversions",
    date: "March 30, 2025",
    snippet:
      "This week in Web3 has been nothing short of revolutionary — from the rise of AI-powered agents redefining decentralized ecosystems to a surge in stablecoin adoption across global markets. Meanwhile, seamless crypto-to-fiat conversions are bridging the gap between traditional finance and the blockchain world, signaling a major leap toward mass adoption.",
    link: "https://www.linkedin.com/pulse/web3s-transformative-week-ai-agents-stablecoin-adoption-48pmc/?trackingId=qARcYb0kSL21TJVhqiEwjQ%3D%3D",
  },
  {
    title: "The Future of Web3 & FinTech: Key Highlights from March 27, 2025",
    date: "March 28, 2025",
    snippet:
      "Web3 and FinTech took a giant leap forward on March 27, 2025, with major global events, record-breaking funding rounds, and disruptive product launches stealing the spotlight. From Asia’s largest FinTech summit to breakthroughs in blockchain infrastructure, the day underscored the rapid innovation driving the future of finance.",
    link: "https://www.linkedin.com/pulse/future-web3-fintech-key-highlights-from-march-27-2025-g5wic/?trackingId=dXiiEt4fRXy2ejWz8rf2Gw%3D%3D",
  },
  {
    title: "The Future of Web3: Token Generation Events, Airdrops, and Real-World Assets (RWAs) Revolutionizing the Space",
    date: "March 25, 2025",
    snippet:
      "The Web3 landscape is evolving fast, with Token Generation Events and airdrops unlocking new community dynamics, while Real-World Assets (RWAs) are bridging the gap between blockchain and traditional finance. This shift signals a new era of utility, ownership, and accessibility in the decentralized economy.",
    link: "https://www.linkedin.com/pulse/future-web3-token-generation-events-airdrops-real-world-nxzlc/?trackingId=TpieYTeGTgaRxZOHHd%2FYCQ%3D%3D",
  },
];

const styles = {
  section: {
    paddingTop: "2rem",
    paddingBottom: "4rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    background: "radial-gradient(circle at top left, #111 0%, #0a0a0a 50%, #000 100%)",
    color: "#fff",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "2.5rem",
    color: "#54d5d9",
    marginBottom: "0.5rem",
    fontWeight: "700",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "3rem",
    fontSize: "1.1rem",
  },
  blogList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    padding: "0 1rem",
  },
  post: {
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "left",
    transition: "all 0.3s ease",
    border: "1px solid #333",
    textDecoration: "none", // for anchor styling
    display: "block", // ensure full clickable area
  },
  postTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#54d5d9",
    marginBottom: "0.5rem",
  },
  postDate: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: "1rem",
  },
  postSnippet: {
    fontSize: "1rem",
    color: "#ccc",
    lineHeight: "1.6",
  },
  postHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 0 15px #54d5d9",
  },
};

const Blog = () => {
  return (
    <section id="blog" style={styles.section}>
      <h2 style={styles.title}>FROM OUR BLOG</h2>
      <p style={styles.subtitle}>
        Insights, stories, and updates from the world of tech and innovation.
      </p>

      <div style={styles.blogList}>
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.post}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.postHover)}
            onMouseLeave={(e) =>
              Object.keys(styles.postHover).forEach(
                (k) => (e.currentTarget.style[k] = "")
              )
            }
          >
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postDate}>{post.date}</p>
            <p style={styles.postSnippet}>{post.snippet}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
