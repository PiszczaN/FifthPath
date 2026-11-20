import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library unmounts rendered components by itself only when test
// globals are on. We import test functions explicitly instead, so clean up
// after every test here.
afterEach(cleanup);
