
import Button from '@mui/material/Button';
import React from 'react'
import { useState } from 'react';

export const SideSearchbar = () => {
  const [follow1, setFollow1] = useState(false);
  const [follow2, setFollow2] = useState(false);
  const [follow3, setFollow3] = useState(false);
  return (
    <div style={{ paddingLeft: "2rem" }}>
      <button style={{ backgroundColor: "black", color: "white", width: "22%", border: "none", borderRadius: "20px", padding: "0.7rem", marginTop: "2rem", marginBottom: "2rem" }}>Get unlimited access</button>
      <br />
      <input type="text" placeholder="Search" style={{ width: "19%", borderRadius: "100px", marginBottom: "1rem", padding: "0.7rem", fontSize: "16px", paddingLeft: "2rem", border: " 1px solid gainsboro" }} />
      <h4 style={{ fontWeight: "500" }}>What We're Reading Today</h4>
      <div>
        <span>
          <img style={{ width: "1.5%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-920879930-1380x1380.jpg" alt="" />
        </span>
        <span style={{ fontSize: "13px", paddingLeft: "1rem", fontWeight: "700" }}>
          Elaine kasket in Human Parts
        </span>
      </div>
      <div style={{ fontWeight: "700", paddingTop: "0.5rem", paddingBottom: "1.5rem" }}>
        When Safe isn't Enough :The Need to Return <br /> to Ukraine and Home
      </div>
      <div>
        <span>
          <img style={{ width: "1.5%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-920879930-1380x1380.jpg" alt="" />
        </span>
        <span style={{ fontSize: "13px", paddingLeft: "1rem", fontWeight: "700" }}>
          Benjamin Sledge in Human Parts
        </span>
      </div>
      <div style={{ fontWeight: "700", paddingTop: "0.5rem", paddingBottom: "1.5rem" }}>
        I Was Eddie Munson and You Hated Me
      </div>
      <div>
        <span>
          <img style={{ width: "1.5%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="https://www.jetsetter.com//uploads/sites/7/2019/04/GettyImages-920879930-1380x1380.jpg" alt="" />
        </span>
        <span style={{ fontSize: "13px", paddingLeft: "1rem", fontWeight: "700" }}>
          Jonathan Lethem
        </span>
      </div>
      <div style={{ fontWeight: "700", paddingTop: "0.5rem" }}>
        Freewriting on God's Olivetti
      </div>
      <br />
      <a href="" style={{ fontWeight: "400", fontSize: "12px", textDecoration: "none" }}>see full list</a>
      <div style={{ paddingLeft: "1rem", paddingTop: "1px", width: "25%", backgroundColor: "#c4e8ed", marginTop: "3rem", borderRadius: "5px" }} >
        <h4 style={{ fontSize: "17px", fontWeight: "700" }}>Writting on Medium</h4>
        <div style={{ fontSize: "15px", fontWeight: "600" }}>
          <div style={{ paddingBottom: "0.5rem" }}>New writer FAQ</div>
          <div style={{ paddingBottom: "0.5rem" }}>Expert writing advice</div>
          <div style={{ paddingBottom: "0.5rem" }}>Expert writing advice </div>
        </div>
        <div>
          <button style={{ backgroundColor: "black", color: "white", width: "30%", border: "none", borderRadius: "20px", padding: "0.5rem", marginTop: "1rem", marginBottom: "1.2rem" }}>Start Writting</button>
        </div>
      </div>
      <div style={{ fontWeight: "600", paddingBottom: "1rem" }}>Recommended topics</div>
      <div style={{ display: "flex", flexDirection: "row", paddingBottom: "3rem", flexWrap: "wrap", width: "25%" }}>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Technology</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Business</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Productivity</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Psychology</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Mindfulness</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Art</Button>
        <Button color="secondary" style={{ borderRadius: "20px", color: "black" }}>Science</Button>
      </div>
      <div style={{ fontWeight: "600", paddingBottom: "0.5rem" }}>Who to Follow</div>
      <div style={{ display: "grid", gridTemplateColumns: "15% 60% 25%", width: "25%", marginBottom: "1rem" }}>
        <span>
          <img style={{ width: "80%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="data:image/jpeg;base64,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" alt="" />
        </span>
        <span>
          <div style={{ fontWeight: "700" }}>Gideon M-K;Health Nerd</div>
          <div style={{ fontSize: "13px" }}>Epidermiologist. writer.</div>
          <div style={{ fontSize: "13px" }}>Podcaster. Twitter...</div>
        </span>
        <span>
          {follow1 ? <Button color="primary" variant='outlined' style={{ color: "white", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase", backgroundColor: "black" }} onClick={() => setFollow1(!follow1)}>Following</Button>
            : <Button color="primary" variant='outlined' style={{ color: "black", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase" }} onClick={() => setFollow1(!follow1)} >Follow</Button>
          }
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "15% 60% 25%", width: "25%", marginBottom: "1rem" }}>
        <span>
          <img style={{ width: "80%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="data:image/jpeg;base64,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" alt="" />
        </span>
        <span>
          <div style={{ fontWeight: "700" }}>Susan Orlean</div>
          <div style={{ fontSize: "13px" }}>Staff Writer. The New Yorker.</div>
          <div style={{ fontSize: "13px" }}>Author of The Library Book...</div>
        </span>
        <span>
          {follow2 ? <Button color="primary" variant='outlined' style={{ color: "white", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase", backgroundColor: "black" }} onClick={() => setFollow2(!follow2)}>Following</Button>
            : <Button color="primary" variant='outlined' style={{ color: "black", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase" }} onClick={() => setFollow2(!follow2)} >Follow</Button>
          }
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "15% 60% 25%", width: "25%", marginBottom: "1.5rem" }}>
        <span>
          <img style={{ width: "80%", borderRadius: "100%", textAlign: "center", justifyContent: "center" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYEhUfEhgYDx8SEhAVJSEnJyUhJCQpLjwzKSw4LSQkNDo0ODE1Nzc3KDE8SEg1PzxCNzUBDAwMEA8QGBAQGDQdGR0/PzE/MTUxMTYxNTE0ND80PzExMT8xMTExMTQ/MTE0MTExMTQxNDQxMTQxMTExMTQxMf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xAA5EAACAQIFAgMFBQgCAwAAAAABAgADEQQFEiExQVEGImETMnGBkQdCobHBFCNSYtHh8PEzgkOSsv/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwEE/8QAIhEAAgICAwEBAAMBAAAAAAAAAAECESExAxJBUTIiYXET/9oADAMBAAIRAxEAPwDYoQhMNCEIQAIQhAAhCEACEJGZnmqUgQPO9uB931J6QBKyQeoFFyQPiZHVs8oobFgT2DC/4yh51n9V72Yhe4JVT+plcoYsipcncngqPNDA/X6apjPE9GjYuGseLCGG8W4R+C6/GmbSlYbGU6yVk38oBW++lutpUKtepTclXsO+u14OvA6o3nDY+lV9x1f0Db/SOphmAz06hqdWYHa59nUHwcTQ8h8SkkJVYutveItUT422I9RAxx+FwhOKQQCDcHgzsBQhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIjiauhSevSADXG4g3KLt3I5+AkHiqCOPMPKDx3b9YpjcZcimhszcnqq33Mr/iLGu5TB0G0sy/vGH/jTqZmy0VSKt4hzEM7rQ3C7M1vKPnKdVqPqvrJ36cS55xh6aIKYtTprxfYuerGVfF0KZFqbr/1a8GDJ/KKhSjrF2BLBwDc8C0jsYp6qBfoW/SSfhTAs9KohvY2t8e894/J6ysSN/W2widksMfo2rRXbDY6VYdbGxEk8rzE0WUXJS+w/g+Hb5fSMsQa1JrPTTSObk7xWlhadZGak2moN2QnZvVTGTsSmjWfCniFX00nYWb/ja+xPb0PpLhPnTKs3NMlGJtcXtsQe/oZtXhHO/wBppaXYNUQbnguvRrRhJL1FihCEBAhCEACEIQAIQhAAhCEACEIQAIQhADhMrGe5oFub7DYC/XoPnJvNMSKaHudhMtzjMfbV9APkUm9unczGUhH0lMNj7CpVc7kaj6Lbyj9fnIzEZkmEw74qoA1asbheu/ur8I0fE61pqdg73b0Qb/lYSCx9Q43GU6Z/4w42vwv+WmXSKbdCVHAYvMKntKjEKx2UbACXTK/BdJR5lubbk8yy5XgqdNQqgAAdpJphlPUgdh1kbcmX6xiiDyrBhCURbKvJA5kh+yjfYEHmStKgiCwH943qKBCUaCM03grea5FSqKbqJn+cZG2Db2tMnSD5lmrYg8yv5zh9dNgRe43EWMmmNKCkjKM0q+day8Nsw9efxlr8J50aL06inZSNQ/iQ8iU7NU9m9SmeB7vy4/CK5JitLW6f5edO1ZyadH1BRqq6K6m6soIPcGKSmeAM6WpSGGc/vEW6X+8l/wBJc5pKSp0EIQgYEIQgAQhCABCEIAEIQgAQhI/N8cKSEk7kQNSt0VPx1nIRWUG3lPyXv8+Jm2Grn2VSofechR3sefwh4qzRq9XRfa92t26CJ1n0PTpsfcVmqW7/AObRSusC+MxdmNjulO3/AGO5kVkhc4waOik3+kZ1saXWox5Y/p/aP/CD3rsByVsPrMloaGZI2TL6mpEbgsoMlKV4xwlPSigbWUACP6LdzJxOiYuAY1xA5jkVV7xviagHEeWiUbsZOhMjsZT2MfVsQqglmCgdzIDMPEeHW4Dhj6byVFm6Mw8a4YpW1dCbSCy+rZxLt4t9niKZambta9uotKDQazD4y8dHLyYlZoOXZi9KpRrIfMjfXrb85vGExAqU0qLwyqR8xPnXLsSoYK/unr2M3zwyhXB4ZTa4pJex24monP6SsIQmiBCEIAEIQgAQhCABCEIAeXawJPAmZ+Nc9vr/AIFuB/M3aWzxfmho0tKnzsP/AFWYznOIetUVL3Aa9ul5m2UiqVjbL6JeoHqb7l3+XA+pEYZtjLe2bq50r8Ov+esmWcU6buTYHa/8o4/G5+UqGOcuS52T7g6tNBukJCtdbH4ya8HrUbEWp7Nzc9JXVN5efAWXVKhrNT2a1ge0SWEPxZkizY3McTT2XEqzD3gAfL8TwIhgfGOJvZwHHdf6z1R8JNZtZ1VNYKtzo+R5kvlXhpVDK+l3Z9Rb3D6iw7xKVHTbv+ixZVivaorbgkbjtPGc4g06bsDuAbfGL4DCik2gbr0jfxPQ1IB0LC8ysZDtnBmOaY3E1WLMWZAd7cc2ncNjHpiof2dHRDZyLP1tcEHfjpNFTJ6YpsACVdVDKQNIsNrdZG08oVSVpo1jyoQgH4kzVSWRXFt3ZW6lFMRTFRKeg232tM6zLDezrOnG91+c3oZWlOmbqLkb2GwmLeL0C4kgbWUfmY0XmifJHFnR5lBHIS7DrbuJqH2T+LS9sDXa5APsGJ3P8p/SZZSqE00qDlDZ7cgHgyf8H4NzjsM9Hc+0ViO1tz8OtvnHRGSs+iYTypuAe4nqaTCEIQAIQhAAhCEACeWawuZ6la8ZZg9OiQlwSDuIGpWU/wAd5wrOVU6idgAekotC1rXuT62t6x1i8O+k1qpIvuB1MRyWkpAdrBRdmv7qoOv4TEVfwM70JTQ1PdI/dJwXA+83YSl4quXYk/Lawt2A6R9n+aNiarPuEvZB6CMf2chQ1tj/AFmonJ3hCdMbj4zZPswoBMPr6uxvMcXY/CbT4Ae2Eoj+W8lyaOjgWaLq2ERtyt/wi1OgqDyqB8pxMSF5jTHZ0Fsii7ngDcxU0WalqhdzZlv3ieeKDTHyiNF7sCTyLx5mRBQfCanhmONNDHAPcWveSAUAdpVMNiyHUIQWLNfftJmlji1w3lbqDFuh+thmT+UmYd40t+2N2KL+s2TNa4CMb9JjXivzV1PU0x+ZjQ2S50kkhvk9QBtLbqwsw7y8fZ8RRxhpOLhlvTbvYhgL/K0zykxVgRLrk2J3pVF95WUrf4gkfOPdMglaN/VgQCOCNp6iOEa6IRwVUj6RaORCEIQAIQhAAhCEACU7x3jhSQakZgQdNhfjcy4yJ8RZaMTQanbz2uh7NA2OGYFmePqYyoL2ROFG9uPxnrN8QtPD/s9I7bCo38Sjc3+dvrO4/CPRqMCmlwzAgn3YyxVK6hSdwov8YqKkNhcGarWUWA4liGBVUCGxsLE+v+GIZb+7pu5G1rD17GRaZi3Fz73eNYtHc0wYXzLxa80fwg7fslF03stiJndXEaqT358oH5mXf7NMeDTagx3U3X1Uyc8xK8TqRcqmZeUkDe0TySzFqjm7t0/hHaSAwtM32G4kTnGRM1MvRqPTqKfuuQD8pBHZd4JDEZdUZvaU6pU393YrIjNcXjiDSChb7F77AT3lOUvWQH9rqBwbFdfG3+5IV/C9R9nxLFdF/W/bmOk/EY+qw2Q2XYWnQGt3Be25Z+I+p4tMQ1qDe0KmzMpuo+cjM98P4WnTZFYvULAX1XIBX+ssPhrAphqS00UAabn1MGvpjwrWiHzajU0kNxf6zMPFdQDFBRwqKD+c1rxDiVVWZjYAEzDcwxJq1XqfxMSPh0j8aOXnkLVBb4SQynMfZnSx2v8AT1jLD2amdxcG3qRESN+v6x2iafp9N+D82TFYWm6kFlULUF+GH9eZPTG/sZqulWopcCmycHq9xb9ZskYm9hCEIGBCEIAEInWrBBc/SV3NM1O41W9BGjFsSUkixmoo5YfWIVMbSXdqiD/uJnGJzZC1veJ772M9sUo0xWxGw30IB5qnUfAQlFRWWbC5PCI7xrhFqFqrmzMSQoFjoBsv1v8AhM1RKjvrKmxYjcbWv0l6xWNOIcPVIGo3H3gqdB2Pf6SPxWd0Ff2aDWwNgwXUR6DmSs6XErYSoEKWNjySP1kC40sd7m/SWbPq+ob6vn/qVp2A42jIWWD2jjZSdr7/ABjzLczfD1BUQ8G49R1EjFF52x4+kKFT9RuPh/xBTxNMEGz23B5Es+Hqgrf6zG/C+GcoGQkMOCJfcozqx0VPK3B7H1nO8PB2xdxySGKys+09pSbQ17kdCZ6dsTp09bW52kzQCuAQYucPTtve/wAYyXwp/wBWsNWVShloU66ja36DoJILX0qWO20e1URQTM/8b+JVooadMg1G4/l9Zqj4T5OS8sg/HniDXehTPPvkdB2lFpKCdzadd2Ylibkm5PeFJd7kbDmVSpHDKTlK2L0303t25nSb9f7z1hAG9oTzp2ilPC6yVBsQdj6TTUWDw1i6lNqZR2HmHA1AT6Jy2uXRNRBbSLkC2rafMWTJUFUJrA32JewvNv8ABGY1HT2dRrsj27kD1ig1aL1CEIwgQhCAFLznOAtyTv09ZS8bmrO2x3J4EZ5rmBqOTqsL7D0kaWPCi5JtYD8Jd40QSt2yWw2Ip0Sa1Tzt/wCNBuLwxlWpXHtax8p/40bl/l2E94bDUqINStarVA8qav3dMd3P6SuZ34nLEmn5nJtr+4o/lE5pW2dsajElMbUp0kHtKoFVtwLajx2HAlPNdWqHSzE/d+6o+QjVWcuWYl2PJO5j/D4UqhqtYCx0gdR1P6Qqg7Nkdj65LEE3PBPUxnoNrme2JLbncmemFxt9Zuibycw3vAd4v+zFX0kbRvTNjftJdaoKX+9wISY8UXfwHRDU79ZY8xyoPuBY9DIT7PBqpX4sbES81E29ZyS/R2R/KKrhszrYXyuC6Dg9RHGI8cUUHnfSexjrH4UNfaZr4hwevE+ztsq7/Ex4u9mSbWiWzv7QNQK0QWPQ2solBqs9apqdrsx5JjrG4PQxAHEZmtax5ttLxrw5Ztt/yFhgGDAc3tuPyhUp6FI9d5zB121gAnc2O14tmYvUIGyj3b8maxVVYOYWgVIc7KdiexjjBDzAjexs3wMd4Coj0CptfhowV2pMWAuLWImG4PWYIRU8o2J6Tcfs9y8PTTGBzd6Sq6EbBl2v9LTFKeYLvdQevHWap4C8RVv3eHXCqmrgghF09yOZqMksYNUhOCdmkwhCEAPneq3u9yN4rhsQy307evL/AAHaNnBuLC/mA+sTzCnUFNzTRmt7xA237ystE47I3O8xZv3atsDuAbKD8ep9ZFLh3a5Ast/e6R5SymtUJZ1YC3JFgT/aWBMgooKbGozi+6hbIew3O/ykdHSk2R+EyWoqh3Au+4DOBt8IpmNOwCO49R6dvQTmeY+qukIEVRxYeYyu4nGVG99iW/8AmZs1tREcRbVt/uPETVTFlsOp7xlh1Bcar2vv3MmMXi1CBQukW2uLf3msSP1kS4tO0Km4B4nl3B6fXaeUO/8ASFYDtk1z7OE/dOfW/wCEvGmY54Pz6rhhdCCt7Mre6f6TRsB4tw1SwqXpN67p9RJS45XZ0R5o/lkrUw5MpHiLA+zrmpb3lBHxHImi4atSqC6VEcfyuDIjxJl4qqFHI3B7RetFFJSMox2EJDPb7u3pKky2vLv4hxi0GNNiC1rEDcyo1fNd7WuTYCUhZz8iQ4yuolMln3a2w7RLGVg9yq2HxjemoJ830kpjMKoRNO9yCfWP/oiuqQ0wRZRbow/GOWxOm6kA3AIvHL07C2wIHAkfmCjVt90KDMNeEeKZ32XY8WN95o/gDNqFKpeujI5QaHA2He4mYU0YW9eJuvhrLqeKw1J6WIqakpKlRLr7tt7bek1mJ4yX7LcUKqalNxcgHow7iPJAYBRhUpojmpSaoEAbZqTWNh8ztv3Em6FVaiq6m6sLiaTYpCEIAfOTk2PNvSesJWCgtUceyDeZNXvbQa52kdj1LFaYRUsbkkXd/WPN4M4lkkMyz5KoVKStTUne/BHwjfEY9wqoGWmlufvP8TITH1mWot3JA+W0b4gliGY6r+6O0kkXchxj3Jsw3396/MinMcVnd2CnoNh2iATfeaicnYJdd7fCe2JNmYkkk8mPMBgGqOo4F7fKJYqmVLJ1Vv8AcLCqQrjKS6EI5K77cfOMlXe4khhKeumwNtVxpHEX8OYRKmMo0nsVZ7Nf3R6n0E016sUyZCA4PUAj5iSqGSOaZVRp4pqdCqjKULL93Ud7gd/SR3DH1/OUj8IS2KBiOOYlicW4U+Y/+xixEa10LCw3M1oE2isFGqMTuxvv3i9ZdIW/Gna3eSa4BUr6bkEbPfjURuPlxGeZD95oBuqk79dMidC1YxqNc6uh4ipxJ2F7AWt6CesYgsLWBtsB0jBibw2DdEqMbbjdzwY31+cKe1jfr6xNFGm4968Vp4VipI3b8YJA5MdHFIUChfNwpHTvLZ4Rzeth7NTbSRyDw/pKbluGD1AGOgg8cX9JPV3rYcqGp2Rjsbc/OZ6Mso3zA5lSxOGFbSBwWU8o4I2+to+y6mFSwFrs5I7Ekk/iTMk8KZ86H2d7hrBb8XPBPztNdwNMIigep35NzGJSVDmEIQMPnCo+lSeCON7WkNjMxqM2p3PFgAbMw+PaS2LvoKrtcfOQyYUqHDEE8gk+YH+kaewhqkRbtqe9iLnvcx2cPUB06SbqDx+IiQpkm2228d1sYQug82sp9O0Rjp/Rpr0trbc9BEKtYMeLQq3Y2txzBKXBbYGaFt6JHDYkKhANm5U+kaNiCzEncnn1iuIena1NTYcljuYyJ8w/TiYjW6wTmABKFR978o3pPUwtQVEOmodar3VSCp/AxsMSRpCEgn3vSdZzqBbcjvNF8Ln4Tyl8XXUFtrg1HJ90SQzrBYRCR7R0fW+khfaI4F7NtuOnfmQeQZnUosj02BtyjeZHB5uP1j3NcWK9apUVdCHZE6IvJH1Jj0yTqsncDgzVGpCunSSWvYKBzeIJikpsDTphyjeUlvfYHfbtzaTnhl8vSmBi61nLv5AxA2K21W3ttIPGLTp1ansnDoKjGmwvZhe45hl7BUqaF/E2TVkpnFtT9nq0lwNrFuD/AKlGr1bve97m3xk/neZVHu1SoalQ8XOyDsB0EhMFQDEM+28nVFrbFWoWQs7WJ27lfSRjHfbiP8we/Qqg2UHb8I0pEG9+fuwQP4cQHmPqOKYeUbmcanZAALE2jZENzYw2DwhyUYHVfcm5kphMxdVK1Drpkbgm9vURDCJqFyLG30ncThyBt1jONoWMqZMZXXWjVUE3pswNNuqGb1kmapiKY0m7Kq6/Qz51pEGwbe6+QTWfsuSoyM7XsBYm1vgPX9IqQ0qZosIQmiHzc9+ZAY5z9OPhCEpIWJ7yfDGowpqLs3XoB3hWwYaqyg6gCRtOwkmWihOrT0mw777TyQtRr6goXZQeW9f87whMQzEa1EtcgXUHnv8ACNChB35/KEJqJyHODpl3G1z1vxFvZlmIB63MITVsHokMvpad+slkPeEJVEXsSqkK1+/MTrliLL9TCEGCGzYWwZnN9pFUapD6gNTAeUevEIRJDxbOPgahIL8nuY0roFNoQiFGO6FUuACd7AfITtXynj+s7CHoPRIZeRbb6RxXYDntvCEo9Els42KCgWUaiLA2voHpNe+yTFF8NVQm5WoDxbkf2hCL4My/whCYB//Z" alt="" />
        </span>
        <span>
          <div style={{ fontWeight: "700" }}>Melody Wilding, LMSW</div>
          <div style={{ fontSize: "13px" }}>Author of TRUST YOURSELF</div>
          <div style={{ fontSize: "13px" }}>Executive coach to Sensitive...</div>
        </span>
        <span>
          {follow3 ? <Button color="primary" variant='outlined' style={{ color: "white", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase", backgroundColor: "black" }} onClick={() => setFollow3(!follow3)}>Following</Button>
            : <Button color="primary" variant='outlined' style={{ color: "black", borderRadius: "20px", border: "1px solid black", textTransform: "lowercase" }} onClick={() => setFollow3(!follow3)} >Follow</Button>
          }
        </span>
      </div>
      <div style={{ color: "green", marginBottom: "3rem" }}>See more suggestions</div>
      <div style={{ fontSize: "17px", fontWeight: "500", marginBottom: "1.5rem" }}>Reading List</div>
      <div style={{ fontSize: "14px", marginBottom: "4rem" }}>Click the Bookmark on any story to easily add it to your <br /> reading list or a custom list that you can share.</div>
      <div style={{ fontSize: "12px"}}>
        Help

        Status

        Writers

        Blog

        Careers

        Privacy

        Terms

        About
        <br />
        Knowable
      </div>
    </div>
  )
}
