---
schema: wang-person/v1
id: p_BS59WtwbAaqRXm83dBaHiL
status: active
merged_into: null
display_name: 王立
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXjVh9Zb6lV57fMbfFDWoI
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立（前1世纪—4年），字子叔，魏郡元城（今河北省大名县）人，西汉外戚，汉成帝生母皇太后王政君及成帝大将軍王鳳的六弟。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fyg7eMBLJypuGEHhm3s3_d
          claim_id: c_bXjVh9Zb6lV57fMbfFDWoI
          source_id: s_qhGzucecHxOGj8AcN8J2mw
          stance: supports
          locator: 导言
          quotation: 王立（前1世纪—4年），字子叔，魏郡元城（今河北省大名县）人，西
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_qhGzucecHxOGj8AcN8J2mw
            source_type: website
            title: 中文维基百科：王立 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
            external_identifier: Q672221
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cdxBAeTbapxcCDJHuV76v9
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0100-01-01
            latest: -0001-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zYD266oHTRRQGqyH9Cej4L
          claim_id: c_cdxBAeTbapxcCDJHuV76v9
          source_id: s_tUBJ6CGFTo89Ahc3RGMuv1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tUBJ6CGFTo89Ahc3RGMuv1
            source_type: api_record
            title: 维基数据：王立（Q672221）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q672221
            external_identifier: Q672221
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:36.543Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mKUNSMENptwnmEFNZ4qHnM
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4nG7fcXAotXMN4UF7R2tN5
          claim_id: c_mKUNSMENptwnmEFNZ4qHnM
          source_id: s_tUBJ6CGFTo89Ahc3RGMuv1
          stance: supports
          locator: Q672221
          quotation: null
          interpretation_note: null
          source:
            id: s_tUBJ6CGFTo89Ahc3RGMuv1
            source_type: api_record
            title: 维基数据：王立（Q672221）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q672221
            external_identifier: Q672221
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:36.543Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VdZJD76E881tfkexKR13bq
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BS59WtwbAaqRXm83dBaHiL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CHhKq7MUVfE1WsJsddfB9e
          claim_id: c_VdZJD76E881tfkexKR13bq
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_eCg9hd88EQLcp7mBmJRQHQ
          claim_id: c_VdZJD76E881tfkexKR13bq
          source_id: s_tUBJ6CGFTo89Ahc3RGMuv1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tUBJ6CGFTo89Ahc3RGMuv1
            source_type: api_record
            title: 维基数据：王立（Q672221）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q672221
            external_identifier: Q672221
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:36.543Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children:
    - claim:
        id: c_KNMEAAyR67TnkRhvBTJLiL
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ev9rPKJUrkBKAQXV6D6QqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_StdCzRkeye1dLWKfqdkuCr
          claim_id: c_KNMEAAyR67TnkRhvBTJLiL
          source_id: s_hKRe4zANDCej6Dhqiteb2R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKRe4zANDCej6Dhqiteb2R
            source_type: api_record
            title: 维基数据：王丹（Q104698719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q104698719
            external_identifier: Q104698719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
      object_person:
        id: p_Ev9rPKJUrkBKAQXV6D6QqB
        status: active
        display_name: 王丹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王立（前1世纪—4年），字子叔，魏郡元城（今河北省大名县）人，西汉外戚，汉成帝生母皇太后王政君及成帝大将軍王鳳的六弟。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_Ev9rPKJUrkBKAQXV6D6QqB | 王丹 | accepted |

## 外部来源

- [维基数据：王丹（Q104698719）](https://www.wikidata.org/wiki/Q104698719)
- [维基数据：王立（Q672221）](https://www.wikidata.org/wiki/Q672221)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王立 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AB%8B_(%E8%A5%BF%E6%B1%89))
