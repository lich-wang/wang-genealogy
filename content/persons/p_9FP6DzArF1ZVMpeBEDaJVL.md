---
schema: wang-person/v1
id: p_9FP6DzArF1ZVMpeBEDaJVL
status: active
merged_into: null
display_name: 王伯虎
cbdb_id: 3971
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CGLbRoRxChQcnMpfrMH9fM
        subject_person_id: p_9FP6DzArF1ZVMpeBEDaJVL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯虎，宋人物。籍贯吳江，入仕進士，曾任朝散郎、上輕車都尉、司理參軍。（中国历代人物传记资料库 CBDB 3971）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XzIZyMS5LF7STXMQmV26Kw
          claim_id: c_CGLbRoRxChQcnMpfrMH9fM
          source_id: s_hbsg7EGpNVwEQ2nMFNBfzZ
          stance: supports
          locator: CBDB:3971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hbsg7EGpNVwEQ2nMFNBfzZ
            source_type: api_record
            title: 中国历代人物传记资料库：王伯虎（CBDB 3971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3971&o=json
            external_identifier: CBDB:3971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XCUwwBXHWE8Fia9HaMURdA
        subject_person_id: p_9FP6DzArF1ZVMpeBEDaJVL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯虎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3vt1KnwgvdEAzR8K4tfMSe
          claim_id: c_XCUwwBXHWE8Fia9HaMURdA
          source_id: s_hbsg7EGpNVwEQ2nMFNBfzZ
          stance: supports
          locator: CBDB:3971
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZPBgRNDX3G36SFgk62G7xd
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9FP6DzArF1ZVMpeBEDaJVL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avqBREmS0B3x6dh5adBAKL
          claim_id: c_ZPBgRNDX3G36SFgk62G7xd
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（子 王伯虎 ⇄ 父 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Yic4HWUmUS3sWTFBmHNmnx
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 10336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json
            external_identifier: CBDB:10336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4H6hmNE3a7KsJizuXuhwwM
        status: active
        display_name: 王礎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯虎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯虎，宋人物。籍贯吳江，入仕進士，曾任朝散郎、上輕車都尉、司理參軍。（中国历代人物传记资料库 CBDB 3971） | accepted |
| name.primary | 王伯虎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H6hmNE3a7KsJizuXuhwwM | 王礎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯虎（CBDB 3971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3971&o=json)
- [中国历代人物传记资料库：王礎（CBDB 10336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json)
