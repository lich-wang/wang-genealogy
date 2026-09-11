---
schema: wang-person/v1
id: p_NJ1FnMUfkBY1Q2LFwCXEzP
status: active
merged_into: null
display_name: 王志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cxthe5bPfo4TdEtimbQKAf
        subject_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gS9baUmHCffDGF6oMQ8hj9
          claim_id: c_Cxthe5bPfo4TdEtimbQKAf
          source_id: s_7W8qZ36mAWLCALnL2npAQB
          stance: supports
          locator: CBDB:242213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242213）
          source: &a1
            id: s_7W8qZ36mAWLCALnL2npAQB
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fXY9TGvG4xC7kfWpNwEZxF
        subject_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eDSK3Z5Jr5SXX0oE2uCGUd
          claim_id: c_fXY9TGvG4xC7kfWpNwEZxF
          source_id: s_7W8qZ36mAWLCALnL2npAQB
          stance: supports
          locator: CBDB:242213
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

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 242213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json)
