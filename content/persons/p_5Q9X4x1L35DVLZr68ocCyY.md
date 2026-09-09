---
schema: wang-person/v1
id: p_5Q9X4x1L35DVLZr68ocCyY
status: active
merged_into: null
display_name: 王應飛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQrQnB3z9utdoukkA3JQAb
        subject_person_id: p_5Q9X4x1L35DVLZr68ocCyY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應飛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VeJokqAXRB8ka9L6XTwyP4
          claim_id: c_VQrQnB3z9utdoukkA3JQAb
          source_id: s_y1cDTCAugo8nwS5zyphcPe
          stance: supports
          locator: CBDB:638004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638004）
          source: &a1
            id: s_y1cDTCAugo8nwS5zyphcPe
            source_type: api_record
            title: 中国历代人物传记资料库：王應飛（CBDB 638004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638004&o=json
            external_identifier: CBDB:638004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNS3G18PZowhfNfPPYCBRZ
        subject_person_id: p_5Q9X4x1L35DVLZr68ocCyY
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
        - id: cs_4wybbYq9uhYxSsrdkquAgC
          claim_id: c_WNS3G18PZowhfNfPPYCBRZ
          source_id: s_y1cDTCAugo8nwS5zyphcPe
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

# 王應飛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應飛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應飛（CBDB 638004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638004&o=json)
