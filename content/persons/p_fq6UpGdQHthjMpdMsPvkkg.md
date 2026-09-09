---
schema: wang-person/v1
id: p_fq6UpGdQHthjMpdMsPvkkg
status: active
merged_into: null
display_name: 王淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YjJfjsSdvkq4EU4hx81YPD
        subject_person_id: p_fq6UpGdQHthjMpdMsPvkkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a88WixmN5ZreCuRC5DGUav
          claim_id: c_YjJfjsSdvkq4EU4hx81YPD
          source_id: s_3DZX9VZcD2i2B24KsNyk4u
          stance: supports
          locator: CBDB:688005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688005）
          source: &a1
            id: s_3DZX9VZcD2i2B24KsNyk4u
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 688005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688005&o=json
            external_identifier: CBDB:688005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hia1KT1azc5TwQVmSvDYtA
        subject_person_id: p_fq6UpGdQHthjMpdMsPvkkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCvi4cZD92rNgsvJjUq7cc
          claim_id: c_hia1KT1azc5TwQVmSvDYtA
          source_id: s_3DZX9VZcD2i2B24KsNyk4u
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

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 688005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688005&o=json)
