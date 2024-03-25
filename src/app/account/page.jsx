"use client";
import store  from '../store';
import { Languages } from '../store';
import { observer } from 'mobx-react';
import styles  from './styles.module.css';
import MyButton from '../components/buttons/block/Button.tsx'
import { usePathname, useRouter } from 'next/navigation';

function Account() {
  const router = useRouter();
  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText}>
        {store.language === Languages.English ? "My Account" : "Mon Compte"}
      </div>
      <div className={styles.accountView}>
        <div className={styles.accountItemView}>
          <div className={styles.accountItem}>
              <div className={styles.accountPrompt}>
                  <div className={styles.accountPromptText}>
                    {store.language === Languages.English ? "Translate to: " : "Traduire en: "}
                  </div>
              </div>
              <div className={styles.accountResponse}>
                  <div className={styles.accountResponseOptions}>
                    <MyButton 
                    onClick={() => store.toggleLanguage()}
                    style={{backgroundColor: "rgba(96, 252, 162, 1)", fontFamily: 'sans-serif'}}
                    size='sm'
                    >
                      {store.language === Languages.English ? "Francais" : "English"}
                    </MyButton>
                  </div>
              </div>
          </div> 
        </div>
        <div className={styles.buttonView}>
          <MyButton 
            onClick={() => router.push('/welcome')}
            style={{backgroundColor: "rgba(96, 252, 162, 1)", fontFamily: 'sans-serif'}}
            size='sm'
          >
            {store.language === Languages.English ? "Log Out" : "Déconnecter"}  
          </MyButton>
          <MyButton 
            onClick={() => router.push('/signup')}
            style={{backgroundColor: "rgba(96, 252, 162, 1)", fontFamily: 'sans-serif'}}
            size='sm'
          >
            {store.language === Languages.English ? "Apply" : "Appliquer"}
          </MyButton>
        </div>
      </div>
    </div>
  );
}
  
export default observer(Account);