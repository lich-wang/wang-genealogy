---
schema: wang-person/v1
id: p_3X1KC12ABbsesvY3QqkPpo
status: active
merged_into: null
display_name: 王賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ef2LvHxRa6eCJMTEhujds
        subject_person_id: p_3X1KC12ABbsesvY3QqkPpo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a9J7WKgsszuGGUXJ4H2dG8
          claim_id: c_4ef2LvHxRa6eCJMTEhujds
          source_id: s_hgxi2ne6AwFKSAoSv5dVLg
          stance: supports
          locator: CBDB:640329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640329）
          source: &a1
            id: s_hgxi2ne6AwFKSAoSv5dVLg
            source_type: api_record
            title: 中国历代人物传记资料库：王賡（CBDB 640329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640329&o=json
            external_identifier: CBDB:640329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPER68PQyibHNt4QqXMdTP
        subject_person_id: p_3X1KC12ABbsesvY3QqkPpo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inNMtAWTGU685hanN6cYJp
          claim_id: c_gPER68PQyibHNt4QqXMdTP
          source_id: s_hgxi2ne6AwFKSAoSv5dVLg
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

# 王賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡（CBDB 640329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640329&o=json)
