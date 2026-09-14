---
schema: wang-person/v1
id: p_u62LKUyfEkGuhsTSB7MsDc
status: active
merged_into: null
display_name: 王拱巳
cbdb_id: 22237
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BT955u5h53c1C2d8mZkW4M
        subject_person_id: p_u62LKUyfEkGuhsTSB7MsDc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱巳（生于1119年），宋人物。籍贯咸平，曾任太常寺博士。（中国历代人物传记资料库 CBDB 22237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e4aaHatJ8IOaM0I822qF7a
          claim_id: c_BT955u5h53c1C2d8mZkW4M
          source_id: s_r4TGCE5qHpaYEuNN2g9a2r
          stance: supports
          locator: CBDB:22237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r4TGCE5qHpaYEuNN2g9a2r
            source_type: api_record
            title: 中国历代人物传记资料库：王拱巳（CBDB 22237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22237&o=json
            external_identifier: CBDB:22237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HMB5EC8ZJbuGU2nm6Zvec2
        subject_person_id: p_u62LKUyfEkGuhsTSB7MsDc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1119-01-01
            latest: 1119-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1HUr1Xug2UJ6uJA2R9xhrZ
          claim_id: c_HMB5EC8ZJbuGU2nm6Zvec2
          source_id: s_r4TGCE5qHpaYEuNN2g9a2r
          stance: supports
          locator: CBDB:22237
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1119
          source:
            id: s_r4TGCE5qHpaYEuNN2g9a2r
            source_type: api_record
            title: 中国历代人物传记资料库：王拱巳（CBDB 22237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22237&o=json
            external_identifier: CBDB:22237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nQ2cHmSRTd8tBEpPKjDpKt
        subject_person_id: p_u62LKUyfEkGuhsTSB7MsDc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱巳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2oT8V6Avo6MvVvfUJjVHi8
          claim_id: c_nQ2cHmSRTd8tBEpPKjDpKt
          source_id: s_r4TGCE5qHpaYEuNN2g9a2r
          stance: supports
          locator: CBDB:22237
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1119
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jMmU6wNMasLu6DH2OgtDLW
        subject_person_id: p_Hy3oL9P7FfBor4frFk5Jm5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u62LKUyfEkGuhsTSB7MsDc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QTaFmExKElZokF17zBrqB
          claim_id: c_jMmU6wNMasLu6DH2OgtDLW
          source_id: s_-GBDigBx0KcHwiWlKIz9_S
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12850）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_-GBDigBx0KcHwiWlKIz9_S
            source_type: api_record
            title: 中国历代人物传记资料库：王拱巳（CBDB 22237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22237&o=json
            external_identifier: CBDB:22237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hy3oL9P7FfBor4frFk5Jm5
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王拱巳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王拱巳（生于1119年），宋人物。籍贯咸平，曾任太常寺博士。（中国历代人物传记资料库 CBDB 22237） | accepted |
| birth.date | 1119年 | accepted |
| name.primary | 王拱巳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hy3oL9P7FfBor4frFk5Jm5 | 王拱辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱巳（CBDB 22237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22237&o=json)
