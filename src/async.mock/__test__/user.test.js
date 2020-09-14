import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    register("mocked username", "mocked password");

    expect(axios.post).toHaveBeenCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);

    await expect(
      register("mocked username", "mocked password")
    ).rejects.toThrow("wrong username or password");
  });
});
