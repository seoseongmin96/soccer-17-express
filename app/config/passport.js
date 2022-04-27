import passport from "passport";
import {Strategy as JwtStrategy, ExtractJwt} from "passport-jwt";
import Database from "./database.js";
import User from ''
export default function PassportConfig(passport) {
    const jwtOptions = {
        // header에 bearer스키마에 담겨온 토큰 해석할 것
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // 해당 복호화 방법사용
        secretOrKey: process.env.JWT_SECERT
      };
    passport.use(new JwtStrategy(jwtOptions,async function (payload, done) {
        User.findOne({
            id: jwt_payload.id
        }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));

}