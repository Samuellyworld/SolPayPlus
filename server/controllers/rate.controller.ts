// importing relevant modules
import { Request, Response } from 'express';
import puppeteer from 'puppeteer';

const nairaRate= async (req: Request, res: Response) => {
    try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.binance.com/en-NG/trade/USDT_NGN?theme=dark&type=spot');

    const resultSelector = '.showPrice';
    const result= await page.waitForSelector(resultSelector)
    const price=await result.evaluate(el=>el.textContent)

    res.status(200).json({
        data:{
            rate: +price,
        }
    })
    await browser.close(); 
    }
    catch(error){
        res.status(500).json({
            error:{
                message:'Couldnt fetch conversion rates'
            }
        })
    }
  }      

const actualRate= async (req: Request, res: Response) => {
    try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://p2p.binance.com/en/trade/sell/BUSD?fiat=NGN&payment=ALL');

    const inputAmountEL='#C2Csearchamount_searchbox_amount';
    await page.type(inputAmountEL, '10000');

    const searchAmountBtn='#C2Csearchamount_btn_search';
    await page.click(searchAmountBtn);

    const searchResultSelector = '.css-1m1f8hn';
    const result= await page.waitForSelector(searchResultSelector)
    const price=await result.evaluate(el=>el.textContent)

    res.status(200).json({
        data:{
            rate: +price,
        }
    })
    await browser.close(); 
    }
    catch(error){
        res.status(500).json({
            error:{
                message:'Couldnt fetch conversion rates'
            }
        })
    }
  }   
  export {nairaRate, actualRate}
