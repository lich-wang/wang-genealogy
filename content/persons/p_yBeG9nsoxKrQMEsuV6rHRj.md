---
schema: wang-person/v1
id: p_yBeG9nsoxKrQMEsuV6rHRj
status: active
merged_into: null
display_name: 王浑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WxiT6z974iY4m393zpGr9a
        subject_person_id: p_yBeG9nsoxKrQMEsuV6rHRj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浑（3世紀—？），字长源，琅邪郡临沂县（今山东省临沂市）人，曹魏官员，與西晉司徒王渾同名。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Cj3dUDwYtpYDWqntY0EhQs
          claim_id: c_WxiT6z974iY4m393zpGr9a
          source_id: s_ahGummTh-jkJHeWCJVw8DQ
          stance: supports
          locator: 导言
          quotation: 王浑（3世紀—？），字长源，琅邪郡临沂县（今山东省临沂市）人，曹
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_ahGummTh-jkJHeWCJVw8DQ
            source_type: website
            title: 中文维基百科：王浑 (贞陵亭侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF)
            external_identifier: Q22814894
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2uw98gVWgDWWZ9gyii78zx
        subject_person_id: p_yBeG9nsoxKrQMEsuV6rHRj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b9EhqHPmdcX4gQ5NfQEBF3
          claim_id: c_2uw98gVWgDWWZ9gyii78zx
          source_id: s_N5L7uU1FpU8s8LjWSjgh8R
          stance: supports
          locator: Q22814894
          quotation: null
          interpretation_note: null
          source:
            id: s_N5L7uU1FpU8s8LjWSjgh8R
            source_type: api_record
            title: 维基数据：王浑（Q22814894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814894
            external_identifier: Q22814894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZEGbajtFFfCEGL9fGWFgZi
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBeG9nsoxKrQMEsuV6rHRj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Xm7m7JPEVCAFYBfC1VAJJg
          claim_id: c_ZEGbajtFFfCEGL9fGWFgZi
          source_id: s_7e9JNdDEAeud4LTuyM2xyw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7e9JNdDEAeud4LTuyM2xyw
            source_type: api_record
            title: 维基数据：王雄（Q5364171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5364171
            external_identifier: Q5364171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:08.333Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%84_(%E4%B8%89%E5%9B%BD)
        - id: cs_8s8ogaLFM3wtscrboMqten
          claim_id: c_ZEGbajtFFfCEGL9fGWFgZi
          source_id: s_N5L7uU1FpU8s8LjWSjgh8R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N5L7uU1FpU8s8LjWSjgh8R
            source_type: api_record
            title: 维基数据：王浑（Q22814894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814894
            external_identifier: Q22814894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF)
      object_person:
        id: p_LG8YoDXiRnc6qeaM7WWt1b
        status: active
        display_name: 王雄
        merged_into_person_id: null
  children:
    - claim:
        id: c_tTiAvv4sFLJQLVbvwSEhbM
        subject_person_id: p_yBeG9nsoxKrQMEsuV6rHRj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TfKe1cH32mQ1z8aTR1Zbt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oWZueoAm3QQBcihBiu6RFb
          claim_id: c_tTiAvv4sFLJQLVbvwSEhbM
          source_id: s_N5L7uU1FpU8s8LjWSjgh8R
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_N5L7uU1FpU8s8LjWSjgh8R
            source_type: api_record
            title: 维基数据：王浑（Q22814894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814894
            external_identifier: Q22814894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF)
        - id: cs_NMVp6Ye86T6r1NJJEdDUEf
          claim_id: c_tTiAvv4sFLJQLVbvwSEhbM
          source_id: s_iQGhX7L3HdfnK94yTB5eGv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iQGhX7L3HdfnK94yTB5eGv
            source_type: api_record
            title: 维基数据：王戎（Q701720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q701720
            external_identifier: Q701720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:20.699Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%88%8E
      object_person:
        id: p_TfKe1cH32mQ1z8aTR1Zbt4
        status: active
        display_name: 王戎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王浑（3世紀—？），字长源，琅邪郡临沂县（今山东省临沂市）人，曹魏官员，與西晉司徒王渾同名。 | accepted |
| name.primary | 王浑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LG8YoDXiRnc6qeaM7WWt1b | 王雄 | accepted |
| children | p_TfKe1cH32mQ1z8aTR1Zbt4 | 王戎 | accepted |

## 外部来源

- [维基数据：王浑（Q22814894）](https://www.wikidata.org/wiki/Q22814894)
- [维基数据：王戎（Q701720）](https://www.wikidata.org/wiki/Q701720)
- [维基数据：王雄（Q5364171）](https://www.wikidata.org/wiki/Q5364171)
- [中文维基百科：王浑 (贞陵亭侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B5%91_(%E8%B4%9E%E9%99%B5%E4%BA%AD%E4%BE%AF))
