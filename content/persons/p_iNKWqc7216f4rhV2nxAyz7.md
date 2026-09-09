---
schema: wang-person/v1
id: p_iNKWqc7216f4rhV2nxAyz7
status: active
merged_into: null
display_name: 王守一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_687UzrAhDgUBmNur47EmWh
        subject_person_id: p_iNKWqc7216f4rhV2nxAyz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wqos6Y1AEYdv9HwYjn1jmK
          claim_id: c_687UzrAhDgUBmNur47EmWh
          source_id: s_jFK1nutNqP6dnUo6kczws9
          stance: supports
          locator: CBDB:32343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32343）
          source: &a1
            id: s_jFK1nutNqP6dnUo6kczws9
            source_type: api_record
            title: 中国历代人物传记资料库：王守一（CBDB 32343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json
            external_identifier: CBDB:32343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrbgHrF3NPTMP9HFJDAWkn
        subject_person_id: p_iNKWqc7216f4rhV2nxAyz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shFjYwkgD7itpBP9BDDC2s
          claim_id: c_yrbgHrF3NPTMP9HFJDAWkn
          source_id: s_jFK1nutNqP6dnUo6kczws9
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

# 王守一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守一 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守一（CBDB 32343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json)
