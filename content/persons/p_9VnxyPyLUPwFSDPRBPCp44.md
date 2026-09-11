---
schema: wang-person/v1
id: p_9VnxyPyLUPwFSDPRBPCp44
status: active
merged_into: null
display_name: 王毓奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TKNoxQFBHM3MP5mEpATZEN
        subject_person_id: p_9VnxyPyLUPwFSDPRBPCp44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y454qrQ8wUBxaYihpLdKEu
          claim_id: c_TKNoxQFBHM3MP5mEpATZEN
          source_id: s_428kv3mgumX2FkVZ6UYc8C
          stance: supports
          locator: CBDB:343742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343742）
          source: &a1
            id: s_428kv3mgumX2FkVZ6UYc8C
            source_type: api_record
            title: 中国历代人物传记资料库：王毓奇（CBDB 343742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343742&o=json
            external_identifier: CBDB:343742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WhWbgAZjmDYy81Hd8smRPE
        subject_person_id: p_9VnxyPyLUPwFSDPRBPCp44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓奇，明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 343742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_La8lheDCJAwjrr_zv7YpHC
          claim_id: c_WhWbgAZjmDYy81Hd8smRPE
          source_id: s_428kv3mgumX2FkVZ6UYc8C
          stance: supports
          locator: CBDB:343742
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

# 王毓奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓奇 | accepted |
| bio.summary | 王毓奇，明人物。明清進士進士，籍贯清源，入仕進士。（中国历代人物传记资料库 CBDB 343742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓奇（CBDB 343742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343742&o=json)
