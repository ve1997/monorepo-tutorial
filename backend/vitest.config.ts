import * as dotenv from "dotenv";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		include: ["test/**/*.test.{js,ts}"],
		env: dotenv.config({ path: ".env" }).parsed,
	},
});
