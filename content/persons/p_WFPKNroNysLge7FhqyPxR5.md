---
schema: wang-person/v1
id: p_WFPKNroNysLge7FhqyPxR5
status: active
merged_into: null
display_name: 王穆之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PCMiJHbtDwg5xkNU8rJfSf
        subject_person_id: p_WFPKNroNysLge7FhqyPxR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆之（320年代—365年），史料所见人物。本项目依据《王穆之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__IojDhtbT81MsM21PzLgRs
          claim_id: c_PCMiJHbtDwg5xkNU8rJfSf
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: Q2193695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_G4kq3Cb635RMLnfu6u5Vdj
            source_type: api_record
            title: 维基数据：王穆之（Q2193695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193695
            external_identifier: Q2193695
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:32:01.266Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CdofoG7M5e4QrRJoGBEJDC
        subject_person_id: p_WFPKNroNysLge7FhqyPxR5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 320年代
            calendar_note: 维基数据 P569 结构化日期，精度：年代
            earliest: 0320-01-01
            latest: 0329-12-31
            precision: decade
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kW5hAhW4NjreG7Xzmrg1gy
          claim_id: c_CdofoG7M5e4QrRJoGBEJDC
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G4kq3Cb635RMLnfu6u5Vdj
            source_type: api_record
            title: 维基数据：王穆之（Q2193695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193695
            external_identifier: Q2193695
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:32:01.266Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EMHepeAh6H65shPUhC9NrG
        subject_person_id: p_WFPKNroNysLge7FhqyPxR5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 365年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0365-01-01
            latest: 0365-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KfP2hLxZf1dPVyVGcccJcK
          claim_id: c_EMHepeAh6H65shPUhC9NrG
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G4kq3Cb635RMLnfu6u5Vdj
            source_type: api_record
            title: 维基数据：王穆之（Q2193695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193695
            external_identifier: Q2193695
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:32:01.266Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KW38XyDCmGBxHazPH76y9K
        subject_person_id: p_WFPKNroNysLge7FhqyPxR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P5apAtvkYqXb4UU5FfdULv
          claim_id: c_KW38XyDCmGBxHazPH76y9K
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: Q2193695
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1p3BAUGNEf6CLE14tg72E5
        subject_person_id: p_3bM8PH72KLRFNj3e74B58y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WFPKNroNysLge7FhqyPxR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WmPAu1vCat2JrumwgEf81K
          claim_id: c_1p3BAUGNEf6CLE14tg72E5
          source_id: s_THfHMKuPHEdNZL4q1b3yWH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_THfHMKuPHEdNZL4q1b3yWH
            source_type: api_record
            title: 维基数据：王蒙（Q15908648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15908648
            external_identifier: Q15908648
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:45.713Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
        - id: cs_krMuEe5H5b92RRVkGsvBBS
          claim_id: c_1p3BAUGNEf6CLE14tg72E5
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4kq3Cb635RMLnfu6u5Vdj
            source_type: api_record
            title: 维基数据：王穆之（Q2193695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193695
            external_identifier: Q2193695
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:32:01.266Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
        - id: cs_4x16qyFVfucfyaGpHEAtBi
          claim_id: c_1p3BAUGNEf6CLE14tg72E5
          source_id: s_n1RG6NB3vV5caJqrGj9imb
          stance: supports
          locator: 条文：之子/之女
          quotation: 王穆之（{{Bd|340年代||365年|2月22日}}），太原郡晋阳县（今山西省太原市），司徒左長史王濛之女，晋哀帝的皇后
          interpretation_note: null
          source:
            id: s_n1RG6NB3vV5caJqrGj9imb
            source_type: website
            title: 中文维基百科：王穆之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:25.195Z
            metadata_json: null
        - id: cs_HtjGhELkBAZP9yQGcFTrTM
          claim_id: c_1p3BAUGNEf6CLE14tg72E5
          source_id: s_mMPSqBQSkfbpCknNDekm5q
          stance: supports
          locator: 条文：之子/之女
          quotation: 王穆之，太原郡晋阳县（今山西省太原市），司徒左長史王濛之女，晋哀帝的皇后
          interpretation_note: null
          source:
            id: s_mMPSqBQSkfbpCknNDekm5q
            source_type: website
            title: 中文维基百科：王穆之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:49.196Z
            metadata_json: null
      object_person:
        id: p_3bM8PH72KLRFNj3e74B58y
        status: active
        display_name: 王蒙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_SXnaQyjA8vYRGoiXLTrnJS
        subject_person_id: p_WFPKNroNysLge7FhqyPxR5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oASRQV26mFF6UVeutbBaHu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_qq2U3G1yKHHtZvVgVURydn
          claim_id: c_SXnaQyjA8vYRGoiXLTrnJS
          source_id: s_6Q3w7SCDAVdhQtXXwsLAFh
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Q3w7SCDAVdhQtXXwsLAFh
            source_type: api_record
            title: 维基数据：晋哀帝（Q7398）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7398
            external_identifier: Q7398
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:02.902Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%99%89%E5%93%80%E5%B8%9D
        - id: cs_wwE2xA1epP8gVznCVUybnS
          claim_id: c_SXnaQyjA8vYRGoiXLTrnJS
          source_id: s_G4kq3Cb635RMLnfu6u5Vdj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4kq3Cb635RMLnfu6u5Vdj
            source_type: api_record
            title: 维基数据：王穆之（Q2193695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193695
            external_identifier: Q2193695
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:32:01.266Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B
        - id: cs_BAHjFZFVzKY7cJHNJvDtJ9
          claim_id: c_SXnaQyjA8vYRGoiXLTrnJS
          source_id: s_eXf225vjb89MnPaQVDcxdu
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王穆之，王濛之女，母為安國鄉君爰氏。哀帝為琅邪王時，迎娶為王妃，即位後立為皇后
          interpretation_note: null
          source:
            id: s_eXf225vjb89MnPaQVDcxdu
            source_type: website
            title: 中文维基百科：晉哀帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%99%89%E5%93%80%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:41.838Z
            metadata_json: null
      object_person:
        id: p_oASRQV26mFF6UVeutbBaHu
        status: active
        display_name: 司馬丕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王穆之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穆之（320年代—365年），史料所见人物。本项目依据《王穆之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 320年代 | accepted |
| death.date | 365年 | accepted |
| name.primary | 王穆之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3bM8PH72KLRFNj3e74B58y | 王蒙 | accepted |
| spouses | p_oASRQV26mFF6UVeutbBaHu | 司馬丕 | accepted |

## 外部来源

- [维基数据：晋哀帝（Q7398）](https://www.wikidata.org/wiki/Q7398)
- [维基数据：王蒙（Q15908648）](https://www.wikidata.org/wiki/Q15908648)
- [维基数据：王穆之（Q2193695）](https://www.wikidata.org/wiki/Q2193695)
- [中文维基百科：晉哀帝](https://zh.wikipedia.org/wiki/%E6%99%89%E5%93%80%E5%B8%9D)
- [中文维基百科：王穆之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86%E4%B9%8B)
