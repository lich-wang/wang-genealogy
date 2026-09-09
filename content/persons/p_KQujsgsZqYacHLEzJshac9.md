---
schema: wang-person/v1
id: p_KQujsgsZqYacHLEzJshac9
status: active
merged_into: null
display_name: 王斗樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jcKvSa6Wh8gapFsv7f9Bqo
        subject_person_id: p_KQujsgsZqYacHLEzJshac9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VFPk2E7uJZGGG1Kktd8j2D
          claim_id: c_jcKvSa6Wh8gapFsv7f9Bqo
          source_id: s_4fa3nW7AA9ZVQwJTFU5tXy
          stance: supports
          locator: CBDB:470836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470836）
          source: &a1
            id: s_4fa3nW7AA9ZVQwJTFU5tXy
            source_type: api_record
            title: 中国历代人物传记资料库：王斗樞（CBDB 470836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470836&o=json
            external_identifier: CBDB:470836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTLaWSfAmudT3cZd8ZZZEF
        subject_person_id: p_KQujsgsZqYacHLEzJshac9
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
        - id: cs_59GunEjqXn2Bh4mkKd571B
          claim_id: c_VTLaWSfAmudT3cZd8ZZZEF
          source_id: s_4fa3nW7AA9ZVQwJTFU5tXy
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

# 王斗樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗樞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗樞（CBDB 470836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470836&o=json)
