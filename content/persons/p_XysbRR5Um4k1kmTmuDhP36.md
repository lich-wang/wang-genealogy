---
schema: wang-person/v1
id: p_XysbRR5Um4k1kmTmuDhP36
status: active
merged_into: null
display_name: 王寭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BiiQfi4XMgc1vHWarKApx4
        subject_person_id: p_XysbRR5Um4k1kmTmuDhP36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3RwXV2z5DJAhpWsUYJG2R4
          claim_id: c_BiiQfi4XMgc1vHWarKApx4
          source_id: s_5CA8yxFTLUGqsvT4sG2gPg
          stance: supports
          locator: CBDB:637253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637253）
          source: &a1
            id: s_5CA8yxFTLUGqsvT4sG2gPg
            source_type: api_record
            title: 中国历代人物传记资料库：王寭（CBDB 637253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637253&o=json
            external_identifier: CBDB:637253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9eeA19ivrDGntA1rG5j4w
        subject_person_id: p_XysbRR5Um4k1kmTmuDhP36
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
        - id: cs_x6tCHeBDgMCSXmbkuGDpi6
          claim_id: c_x9eeA19ivrDGntA1rG5j4w
          source_id: s_5CA8yxFTLUGqsvT4sG2gPg
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

# 王寭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寭（CBDB 637253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637253&o=json)
