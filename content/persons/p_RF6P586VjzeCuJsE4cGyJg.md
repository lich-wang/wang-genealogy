---
schema: wang-person/v1
id: p_RF6P586VjzeCuJsE4cGyJg
status: active
merged_into: null
display_name: 王鯉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbQHNUT6aGuaQuqDyHNqH1
        subject_person_id: p_RF6P586VjzeCuJsE4cGyJg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iBcBgcFNaeFESo4xNB58E5
          claim_id: c_nbQHNUT6aGuaQuqDyHNqH1
          source_id: s_5KpvxSNEp3HHqCZEu6brFb
          stance: supports
          locator: CBDB:252488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252488）
          source: &a1
            id: s_5KpvxSNEp3HHqCZEu6brFb
            source_type: api_record
            title: 中国历代人物传记资料库：王鯉（CBDB 252488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json
            external_identifier: CBDB:252488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNpSccM1RmCT5ZxS9Rq4dZ
        subject_person_id: p_RF6P586VjzeCuJsE4cGyJg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯉，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BXQ69LBalvPDgP_XS0ptmi
          claim_id: c_FNpSccM1RmCT5ZxS9Rq4dZ
          source_id: s_5KpvxSNEp3HHqCZEu6brFb
          stance: supports
          locator: CBDB:252488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M2WUZi4MMe6ZRVAHDC7M3F
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RF6P586VjzeCuJsE4cGyJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MEtJzju9zSXRWubEXhdW9b
          claim_id: c_M2WUZi4MMe6ZRVAHDC7M3F
          source_id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鯉 与 王鯨 为同胞（CBDB 记「弟」），王鯨 之父／母即 王鯉 之父／母。
          source:
            id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
            source_type: api_record
            title: 中国历代人物传记资料库：王鯉（CBDB 252488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json
            external_identifier: CBDB:252488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H62vCdFCPfwbu588ZF5Rs
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oyuX4AAJwaG6oooypaspoi
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RF6P586VjzeCuJsE4cGyJg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfdBOC4R3QRHgrZj2gH8hx
          claim_id: c_oyuX4AAJwaG6oooypaspoi
          source_id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XEoc6ZKhyEQ8YfB5jjk1Gx
            source_type: api_record
            title: 中国历代人物传记资料库：王鯉（CBDB 252488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json
            external_identifier: CBDB:252488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
---

# 王鯉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯉 | accepted |
| bio.summary | 王鯉，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H62vCdFCPfwbu588ZF5Rs | 王紀 | accepted |
| other | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯉（CBDB 252488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252488&o=json)
