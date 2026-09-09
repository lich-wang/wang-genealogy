---
schema: wang-person/v1
id: p_t8shTQbiML52cwU2H4T7BM
status: active
merged_into: null
display_name: 王其定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vQfYm3AD4JfS65PdyzN4c
        subject_person_id: p_t8shTQbiML52cwU2H4T7BM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRMGQCvjWR3MMyiKU7vkqG
          claim_id: c_4vQfYm3AD4JfS65PdyzN4c
          source_id: s_wEAMNnmCix2GsTbMihHCzm
          stance: supports
          locator: CBDB:556810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556810）
          source: &a1
            id: s_wEAMNnmCix2GsTbMihHCzm
            source_type: api_record
            title: 中国历代人物传记资料库：王其定（CBDB 556810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json
            external_identifier: CBDB:556810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2EtQVLydrq6PGmufiB9dQn
        subject_person_id: p_t8shTQbiML52cwU2H4T7BM
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
        - id: cs_wYp9ZWpp5pVhUsR4ik5jAu
          claim_id: c_2EtQVLydrq6PGmufiB9dQn
          source_id: s_wEAMNnmCix2GsTbMihHCzm
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

# 王其定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其定 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其定（CBDB 556810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json)
