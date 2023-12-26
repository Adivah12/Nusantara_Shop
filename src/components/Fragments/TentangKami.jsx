import { Tentang } from "../Elements/Tentang";
import { InstagramIcon } from "../Elements/Icons/Instagram";
import { FacebookIcon } from "../Elements/Icons/Facebook";
import { Xicon } from "../Elements/Icons/X";
import { WhatsappIcon } from "../Elements/Icons/Whatsapp";
import { TelegramIcon } from "../Elements/Icons/Telegram";

export const TentangKami = () => {
  return (
    <>
      {/* Instagram */}
      <Tentang to="https://www.instagram.com/accounts/login/">
        <InstagramIcon /> Instagram
      </Tentang>
      {/* facebook */}
      <Tentang to="https://id-id.facebook.com/login/device-based/regular/login/?login_attempt=1">
        <FacebookIcon /> Facebook
      </Tentang>
      {/* Twitter */}
      <Tentang to="https://twitter.com/">
        <Xicon /> Twitter
      </Tentang>
      {/* WhatsApp */}
      <Tentang to="https://web.whatsapp.com/">
        <WhatsappIcon /> WhatsApp
      </Tentang>
      {/* Telegram */}
      <Tentang to="https://web.telegram.org/a/">
        <TelegramIcon /> Telegram
      </Tentang>
    </>
  );
};
