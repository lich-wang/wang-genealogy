---
schema: wang-person/v1
id: p_rkNR943i8ihMdYMz3NXSiB
status: active
merged_into: null
display_name: 王廣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6VDGeVpXbPSfH79EaQiTFL
        subject_person_id: p_rkNR943i8ihMdYMz3NXSiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oqP51TkQvTpLQKD2fHsJjE
          claim_id: c_6VDGeVpXbPSfH79EaQiTFL
          source_id: s_g9BVRy3VX4LXQ79Nij29Cy
          stance: supports
          locator: CBDB:238297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238297）
          source: &a1
            id: s_g9BVRy3VX4LXQ79Nij29Cy
            source_type: api_record
            title: 中国历代人物传记资料库：王廣（CBDB 238297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238297&o=json
            external_identifier: CBDB:238297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xjLYcAM8PZLQwGmLdPJDaT
        subject_person_id: p_rkNR943i8ihMdYMz3NXSiB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣，明人物。正统七年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 238297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OgW-s2xUMTGqass_meEGlM
          claim_id: c_xjLYcAM8PZLQwGmLdPJDaT
          source_id: s_g9BVRy3VX4LXQ79Nij29Cy
          stance: supports
          locator: CBDB:238297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T7mt27A9iDLWPJjMDS4sLV
        subject_person_id: p_gjG6yS82eJN4fARf6aE7Hv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rkNR943i8ihMdYMz3NXSiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IElqzNrhe_TJsICsyLIVF1
          claim_id: c_T7mt27A9iDLWPJjMDS4sLV
          source_id: s_jMVq19kPvJicmt1gu14zal
          stance: supports
          locator: CBDB：兄弟 王庾（126670）之父／母 王文貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王廣 与 王庾 为同胞（CBDB 记「弟」），王庾 之父／母即 王廣 之父／母。
          source:
            id: s_jMVq19kPvJicmt1gu14zal
            source_type: api_record
            title: 中国历代人物传记资料库：王廣（CBDB 238297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238297&o=json
            external_identifier: CBDB:238297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gjG6yS82eJN4fARf6aE7Hv
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6At9k1Jdr7FIvvfanhCW-z
        subject_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rkNR943i8ihMdYMz3NXSiB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ROhovRC9rHheZHwXP6JXX
          claim_id: c_6At9k1Jdr7FIvvfanhCW-z
          source_id: s_jMVq19kPvJicmt1gu14zal
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126670 王庾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jMVq19kPvJicmt1gu14zal
            source_type: api_record
            title: 中国历代人物传记资料库：王廣（CBDB 238297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238297&o=json
            external_identifier: CBDB:238297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6e5ELnuv2E5KGPsNrAysQX
        status: active
        display_name: 王庾
        merged_into_person_id: null
---

# 王廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣 | accepted |
| bio.summary | 王廣，明人物。正统七年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 238297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gjG6yS82eJN4fARf6aE7Hv | 王文貴 | accepted |
| other | p_6e5ELnuv2E5KGPsNrAysQX | 王庾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣（CBDB 238297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238297&o=json)
