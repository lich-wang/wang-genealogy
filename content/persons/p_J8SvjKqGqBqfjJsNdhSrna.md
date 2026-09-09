---
schema: wang-person/v1
id: p_J8SvjKqGqBqfjJsNdhSrna
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zZ5ns8pGZ9EPWUx4QXWz8p
        subject_person_id: p_J8SvjKqGqBqfjJsNdhSrna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SQLfmwSN2Z5CQs3QCjDj9p
          claim_id: c_zZ5ns8pGZ9EPWUx4QXWz8p
          source_id: s_LDK6PshUTDiJaHe6w3DV4v
          stance: supports
          locator: CBDB:156677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156677）
          source: &a1
            id: s_LDK6PshUTDiJaHe6w3DV4v
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 156677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156677&o=json
            external_identifier: CBDB:156677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DTBsc14ENQVN1EZAhJ4xFU
        subject_person_id: p_J8SvjKqGqBqfjJsNdhSrna
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
        - id: cs_fyHh77qrWCDLgPBBPPBPW3
          claim_id: c_DTBsc14ENQVN1EZAhJ4xFU
          source_id: s_LDK6PshUTDiJaHe6w3DV4v
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 156677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156677&o=json)
