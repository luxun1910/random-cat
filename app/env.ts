if (!process.env.CAT_API_KEY) {
    throw new Error("Missing CAT_API_KEY");
}

export const CAT_API_KEY = process.env.CAT_API_KEY;