import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface PayloadClientProps {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({
  initOptions: PayloadClientProps = {},
}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is not set");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
  }
};
