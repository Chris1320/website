export default defineEventHandler(async (event) => {
    setHeader(event, "cache-control", "no-store");
    return { status: "ok" };
});
