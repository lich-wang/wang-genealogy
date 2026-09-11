---
schema: wang-person/v1
id: p_b2QAGmA521VRm5qozjXGYi
status: active
merged_into: null
display_name: 王大用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQbU3jDNJWM1K3TpvwHoE3
        subject_person_id: p_b2QAGmA521VRm5qozjXGYi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DN2NDvub75EsHDSAigBeYo
          claim_id: c_HQbU3jDNJWM1K3TpvwHoE3
          source_id: s_sMmeozwNp6quaioxHshgCD
          stance: supports
          locator: CBDB:101040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101040）
          source: &a1
            id: s_sMmeozwNp6quaioxHshgCD
            source_type: api_record
            title: 中国历代人物传记资料库：王大用（CBDB 101040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101040&o=json
            external_identifier: CBDB:101040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XB5c6V87Ki2tpPwET5nYKh
        subject_person_id: p_b2QAGmA521VRm5qozjXGYi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大用，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CQJvmJDgSl7kQh99p8nIVT
          claim_id: c_XB5c6V87Ki2tpPwET5nYKh
          source_id: s_sMmeozwNp6quaioxHshgCD
          stance: supports
          locator: CBDB:101040
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

# 王大用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大用 | accepted |
| bio.summary | 王大用，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大用（CBDB 101040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101040&o=json)
