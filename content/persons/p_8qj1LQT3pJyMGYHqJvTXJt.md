---
schema: wang-person/v1
id: p_8qj1LQT3pJyMGYHqJvTXJt
status: active
merged_into: null
display_name: 王心定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46HrStN5Mw7L866x2irKhD
        subject_person_id: p_8qj1LQT3pJyMGYHqJvTXJt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_itkruhwdtCGMg2gUpToG3e
          claim_id: c_46HrStN5Mw7L866x2irKhD
          source_id: s_7e3epZGPvcDW8cAaMDNLas
          stance: supports
          locator: CBDB:637734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637734）
          source: &a1
            id: s_7e3epZGPvcDW8cAaMDNLas
            source_type: api_record
            title: 中国历代人物传记资料库：王心定（CBDB 637734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637734&o=json
            external_identifier: CBDB:637734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5F7PBPgCA6EUgCGN2YgMV
        subject_person_id: p_8qj1LQT3pJyMGYHqJvTXJt
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
        - id: cs_gzr4JVqtQbqz55Me47fGWJ
          claim_id: c_H5F7PBPgCA6EUgCGN2YgMV
          source_id: s_7e3epZGPvcDW8cAaMDNLas
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

# 王心定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心定 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心定（CBDB 637734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637734&o=json)
