---
schema: wang-person/v1
id: p_hHaNFVLZtAsRZ44eF1EKQ6
status: active
merged_into: null
display_name: 王真
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJXGSZ7trSS6Anox7hpsw1
        subject_person_id: p_hHaNFVLZtAsRZ44eF1EKQ6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真（？—1402年），陝西承宣布政使司西安府咸寧縣（今陝西省西安市）人，明朝軍事將領、靖難之役人物。 洪武年間，其由士兵起家，后累功至燕山右護衛百戶。靖難之役時，燕王朱棣起兵，王真參與攻打北京九門，后戰永平、真定，攻下廣昌，襲擊雁門。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TKnSafRRRQfUCMRqbW3yn0
          claim_id: c_uJXGSZ7trSS6Anox7hpsw1
          source_id: s_2sKhDnZDRGRJZuuJLZORXq
          stance: supports
          locator: 导言
          quotation: 王真（？—1402年），陝西承宣布政使司西安府咸寧縣（今陝西省西
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_2sKhDnZDRGRJZuuJLZORXq
            source_type: website
            title: 中文维基百科：王真 (明朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9C%9F_(%E6%98%8E%E6%9C%9D)
            external_identifier: Q11573181
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nV3Gqj7WEj3WNYZPPacXTQ
        subject_person_id: p_hHaNFVLZtAsRZ44eF1EKQ6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1402年3月
            calendar_note: 维基数据 P570 结构化日期，精度：月
            earliest: 1402-03-01
            latest: 1402-03-31
            precision: month
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mw5Jx5H1sG4RorLJ9WfcAv
          claim_id: c_nV3Gqj7WEj3WNYZPPacXTQ
          source_id: s_udhJevzBg2tDgqjDrLY7XG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_udhJevzBg2tDgqjDrLY7XG
            source_type: api_record
            title: 维基数据：王真（Q11573181）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573181
            external_identifier: Q11573181
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.946Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFwBcCZP2WTVkxYLVVfhFr
        subject_person_id: p_hHaNFVLZtAsRZ44eF1EKQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5gSMpYw28DjNfU3TPRCnpD
          claim_id: c_oFwBcCZP2WTVkxYLVVfhFr
          source_id: s_udhJevzBg2tDgqjDrLY7XG
          stance: supports
          locator: Q11573181
          quotation: null
          interpretation_note: null
          source:
            id: s_udhJevzBg2tDgqjDrLY7XG
            source_type: api_record
            title: 维基数据：王真（Q11573181）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573181
            external_identifier: Q11573181
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.946Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BhzpG2uMreJGUfVSZvvmJp
        subject_person_id: p_hHaNFVLZtAsRZ44eF1EKQ6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7Bf4ZXvAFHzV9L1P1qBKDF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TTC5oDM8GEY1uiasNaVezr
          claim_id: c_BhzpG2uMreJGUfVSZvvmJp
          source_id: s_udhJevzBg2tDgqjDrLY7XG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_udhJevzBg2tDgqjDrLY7XG
            source_type: api_record
            title: 维基数据：王真（Q11573181）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573181
            external_identifier: Q11573181
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.946Z
            metadata_json: null
        - id: cs_vP8e3nwD2LZFkEiDQSSJ1X
          claim_id: c_BhzpG2uMreJGUfVSZvvmJp
          source_id: s_kLaoPE42GQgENRgbHoxthC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kLaoPE42GQgENRgbHoxthC
            source_type: api_record
            title: 维基数据：王通（Q7218785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7218785
            external_identifier: Q7218785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:11.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%9A_(%E6%88%90%E5%B1%B1%E4%BE%AF)
      object_person:
        id: p_7Bf4ZXvAFHzV9L1P1qBKDF
        status: active
        display_name: 王通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王真（？—1402年），陝西承宣布政使司西安府咸寧縣（今陝西省西安市）人，明朝軍事將領、靖難之役人物。 洪武年間，其由士兵起家，后累功至燕山右護衛百戶。靖難之役時，燕王朱棣起兵，王真參與攻打北京九門，后戰永平、真定，攻下廣昌，襲擊雁門。 | accepted |
| death.date | 1402年3月 | accepted |
| name.primary | 王真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7Bf4ZXvAFHzV9L1P1qBKDF | 王通 | accepted |

## 外部来源

- [维基数据：王通（Q7218785）](https://www.wikidata.org/wiki/Q7218785)
- [维基数据：王真（Q11573181）](https://www.wikidata.org/wiki/Q11573181)
- [中文维基百科：王真 (明朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9C%9F_(%E6%98%8E%E6%9C%9D))
