---
schema: wang-person/v1
id: p_FySaQ67mXQaGo4CCa3AAv9
status: active
merged_into: null
display_name: 王俞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PSLiSY3xDFGj5BrXCN5ArA
        subject_person_id: p_FySaQ67mXQaGo4CCa3AAv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zBdeBdxgWreqiePCVvxWfr
          claim_id: c_PSLiSY3xDFGj5BrXCN5ArA
          source_id: s_cy9bXQ43nT5VP5Y2syKLf6
          stance: supports
          locator: CBDB:306006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306006）
          source: &a1
            id: s_cy9bXQ43nT5VP5Y2syKLf6
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 306006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json
            external_identifier: CBDB:306006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4NK9H5mHKnMAJLNN31W9K
        subject_person_id: p_FySaQ67mXQaGo4CCa3AAv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D8BRQnMr5wNbELZ5RvZvps
          claim_id: c_j4NK9H5mHKnMAJLNN31W9K
          source_id: s_cy9bXQ43nT5VP5Y2syKLf6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俞（CBDB 306006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json)
