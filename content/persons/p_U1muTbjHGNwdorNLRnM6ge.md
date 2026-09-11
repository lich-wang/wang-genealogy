---
schema: wang-person/v1
id: p_U1muTbjHGNwdorNLRnM6ge
status: active
merged_into: null
display_name: 王茂槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WnogJN4rEZxSpqwUVFRAH2
        subject_person_id: p_U1muTbjHGNwdorNLRnM6ge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f9RA4MQePvL53gNcDedrKH
          claim_id: c_WnogJN4rEZxSpqwUVFRAH2
          source_id: s_gjNDjVM4Y36KC79ynxz5nZ
          stance: supports
          locator: CBDB:640082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640082）
          source: &a1
            id: s_gjNDjVM4Y36KC79ynxz5nZ
            source_type: api_record
            title: 中国历代人物传记资料库：王茂槐（CBDB 640082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640082&o=json
            external_identifier: CBDB:640082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J1MLtwFDgAfBeVs5WQSJkf
        subject_person_id: p_U1muTbjHGNwdorNLRnM6ge
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂槐，清人物。籍贯同州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lA38Ufn9vgWogEVXr6oUL7
          claim_id: c_J1MLtwFDgAfBeVs5WQSJkf
          source_id: s_gjNDjVM4Y36KC79ynxz5nZ
          stance: supports
          locator: CBDB:640082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂槐 | accepted |
| bio.summary | 王茂槐，清人物。籍贯同州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂槐（CBDB 640082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640082&o=json)
