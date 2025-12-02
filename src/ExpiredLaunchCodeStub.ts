import type { LaunchCode } from "./LaunchCode"

export class ExpiredLaunchCodeStub implements LaunchCode {
  isSigned() {
    return true
  }

  isExpired() {
    return true
  }
}
