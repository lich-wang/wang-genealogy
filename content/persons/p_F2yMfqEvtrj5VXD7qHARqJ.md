---
schema: wang-person/v1
id: p_F2yMfqEvtrj5VXD7qHARqJ
status: active
merged_into: null
display_name: 王忠保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcBRLsMtGZWtn5mjtsx4G1
        subject_person_id: p_F2yMfqEvtrj5VXD7qHARqJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t16F6R3p58k7MgbGXufitU
          claim_id: c_hcBRLsMtGZWtn5mjtsx4G1
          source_id: s_HQrhN9RDRXcMYoim6qfqPn
          stance: supports
          locator: CBDB:637780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637780）
          source: &a1
            id: s_HQrhN9RDRXcMYoim6qfqPn
            source_type: api_record
            title: 中国历代人物传记资料库：王忠保（CBDB 637780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637780&o=json
            external_identifier: CBDB:637780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jF3EXqtr7r9N3dZo8e5pLF
        subject_person_id: p_F2yMfqEvtrj5VXD7qHARqJ
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
        - id: cs_CgMSBGeMQbd5m1wJs81YZi
          claim_id: c_jF3EXqtr7r9N3dZo8e5pLF
          source_id: s_HQrhN9RDRXcMYoim6qfqPn
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

# 王忠保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠保 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠保（CBDB 637780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637780&o=json)
