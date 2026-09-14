---
schema: wang-person/v1
id: p_r28xZqjot7YozbDLYTpmY3
status: active
merged_into: null
display_name: 王萬章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KUQeaMs2VM2423RrixvdvY
        subject_person_id: p_r28xZqjot7YozbDLYTpmY3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y98vGETbAfp5NLeTTL9XiS
          claim_id: c_KUQeaMs2VM2423RrixvdvY
          source_id: s_voDPBNMEQDCQ6B9qRPJ7PJ
          stance: supports
          locator: CBDB:36115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36115）
          source: &a1
            id: s_voDPBNMEQDCQ6B9qRPJ7PJ
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 36115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36115&o=json
            external_identifier: CBDB:36115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pEDazcf3sVyJneiGJiAcPN
        subject_person_id: p_r28xZqjot7YozbDLYTpmY3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬章，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 36115）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H0gcVlyn0cdeF2kS7hWT6-
          claim_id: c_pEDazcf3sVyJneiGJiAcPN
          source_id: s_voDPBNMEQDCQ6B9qRPJ7PJ
          stance: supports
          locator: CBDB:36115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RvuX9gFwXcefaPR2ebmn4r
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r28xZqjot7YozbDLYTpmY3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jF3qncsBplfTsYckHDar_w
          claim_id: c_RvuX9gFwXcefaPR2ebmn4r
          source_id: s_4jnSQ75Ysk9GqwG-oLgYGE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 17821）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_4jnSQ75Ysk9GqwG-oLgYGE
            source_type: api_record
            title: 中国历代人物传记资料库：王萬章（CBDB 36115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36115&o=json
            external_identifier: CBDB:36115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dU6PvGgbaH45Bh79md732t
        status: active
        display_name: 王彥隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬章 | accepted |
| bio.summary | 王萬章，宋人物。籍贯德安。（中国历代人物传记资料库 CBDB 36115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dU6PvGgbaH45Bh79md732t | 王彥隆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬章（CBDB 36115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36115&o=json)
