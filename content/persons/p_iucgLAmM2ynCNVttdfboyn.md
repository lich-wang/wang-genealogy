---
schema: wang-person/v1
id: p_iucgLAmM2ynCNVttdfboyn
status: active
merged_into: null
display_name: 王遜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sui6G9QQ7PcCnrbvmRLhBx
        subject_person_id: p_iucgLAmM2ynCNVttdfboyn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gyvWwFzHrZsFZk9voSGMHa
          claim_id: c_sui6G9QQ7PcCnrbvmRLhBx
          source_id: s_p7AN57ZwD5WKfjszqQUmXN
          stance: supports
          locator: CBDB:465574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465574）
          source: &a1
            id: s_p7AN57ZwD5WKfjszqQUmXN
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 465574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465574&o=json
            external_identifier: CBDB:465574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PGCak2PukLJ2x39zWW4XT2
        subject_person_id: p_iucgLAmM2ynCNVttdfboyn
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
        - id: cs_vYZe1Fk5Q4QD3GMbc76avc
          claim_id: c_PGCak2PukLJ2x39zWW4XT2
          source_id: s_p7AN57ZwD5WKfjszqQUmXN
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

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遜（CBDB 465574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465574&o=json)
