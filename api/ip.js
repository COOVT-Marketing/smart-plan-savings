module.exports = function handler(req, res) {
  var xf = req.headers["x-forwarded-for"] || "";
  var ip = String(xf).split(",")[0].trim()
    || req.headers["x-real-ip"]
    || req.headers["x-vercel-forwarded-for"]
    || "";
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ ip: String(ip) });
};
