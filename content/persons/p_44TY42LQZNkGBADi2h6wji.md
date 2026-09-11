---
schema: wang-person/v1
id: p_44TY42LQZNkGBADi2h6wji
status: active
merged_into: null
display_name: 王隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14xgZ34D95AXnenP2RLTC9
        subject_person_id: p_44TY42LQZNkGBADi2h6wji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fu6yGgm3KEQgo64m3usu5
          claim_id: c_14xgZ34D95AXnenP2RLTC9
          source_id: s_utsBWtPgJYGb6QAXY3tk2V
          stance: supports
          locator: CBDB:508806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508806）
          source: &a1
            id: s_utsBWtPgJYGb6QAXY3tk2V
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 508806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508806&o=json
            external_identifier: CBDB:508806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UZBtEAwqf5PPGvcGv5pPeQ
        subject_person_id: p_44TY42LQZNkGBADi2h6wji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 508806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LHYcgx8JGm9bmaIMJ-6N3F
          claim_id: c_UZBtEAwqf5PPGvcGv5pPeQ
          source_id: s_utsBWtPgJYGb6QAXY3tk2V
          stance: supports
          locator: CBDB:508806
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

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。曾任千戶。（中国历代人物传记资料库 CBDB 508806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 508806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508806&o=json)
