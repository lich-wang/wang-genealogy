---
schema: wang-person/v1
id: p_zEUHmjnp888sGMsnuEi9Bi
status: active
merged_into: null
display_name: 王郁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmQc7AAHs4bmwcW6Wi4PiW
        subject_person_id: p_zEUHmjnp888sGMsnuEi9Bi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2c5Q6zZKUe6UqU9Cn9SeV6
          claim_id: c_BmQc7AAHs4bmwcW6Wi4PiW
          source_id: s_8MKKNU4C63MGiYFfyuE3oE
          stance: supports
          locator: CBDB:44791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（44791）
          source: &a1
            id: s_8MKKNU4C63MGiYFfyuE3oE
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 44791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44791&o=json
            external_identifier: CBDB:44791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tsXcuF2krJhyMVfBo1DdQ9
        subject_person_id: p_zEUHmjnp888sGMsnuEi9Bi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为遼人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4QrQc3J83GrQdV1E6GFx6J
          claim_id: c_tsXcuF2krJhyMVfBo1DdQ9
          source_id: s_8MKKNU4C63MGiYFfyuE3oE
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

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郁 | accepted |
| bio.summary | CBDB 记载为遼人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王郁（CBDB 44791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44791&o=json)
