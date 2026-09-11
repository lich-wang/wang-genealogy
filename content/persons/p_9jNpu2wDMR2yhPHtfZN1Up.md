---
schema: wang-person/v1
id: p_9jNpu2wDMR2yhPHtfZN1Up
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 35493
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ybs40jwyL6ddoQBzGVcqwy
        subject_person_id: p_9jNpu2wDMR2yhPHtfZN1Up
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，元人物。籍贯合肥，入仕封贈。（中国历代人物传记资料库 CBDB 35493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__fGrMZsnqkr8WjFBVAAxCA
          claim_id: c_Ybs40jwyL6ddoQBzGVcqwy
          source_id: s_i4niC9MMSGPHcpiGKB2rjP
          stance: supports
          locator: CBDB:35493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_i4niC9MMSGPHcpiGKB2rjP
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王也先不華妻)（CBDB 35493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35493&o=json
            external_identifier: CBDB:35493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-73X5GDZT6pu8izc_itJjF
        subject_person_id: p_9jNpu2wDMR2yhPHtfZN1Up
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7FpyUJgLjo1IGo4WYr2Vf_
          claim_id: c_-73X5GDZT6pu8izc_itJjF
          source_id: s_i4niC9MMSGPHcpiGKB2rjP
          stance: supports
          locator: CBDB:35493
          quotation: null
          interpretation_note: CBDB 明确记录的王也先不華配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2jJOXrP4vor57kJaWFmcjn
        subject_person_id: p_LtJ44Gm8BvQAajeZJNo8mV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9jNpu2wDMR2yhPHtfZN1Up
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7w-IHsmMMDEYBQ-DoS-CH
          claim_id: c_2jJOXrP4vor57kJaWFmcjn
          source_id: s_i4niC9MMSGPHcpiGKB2rjP
          stance: supports
          locator: CBDB 双向互证（妻子 孫氏(王也先不華妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LtJ44Gm8BvQAajeZJNo8mV
        status: active
        display_name: 王也先不華
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏，元人物。籍贯合肥，入仕封贈。（中国历代人物传记资料库 CBDB 35493） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LtJ44Gm8BvQAajeZJNo8mV | 王也先不華 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王也先不華妻)（CBDB 35493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35493&o=json)
