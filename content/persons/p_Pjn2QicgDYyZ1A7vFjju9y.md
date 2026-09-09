---
schema: wang-person/v1
id: p_Pjn2QicgDYyZ1A7vFjju9y
status: active
merged_into: null
display_name: 王常泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NS5XVYaongP5TDAGjdsWm5
        subject_person_id: p_Pjn2QicgDYyZ1A7vFjju9y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zqfWcz9Am9YM7M3Xf6n5KS
          claim_id: c_NS5XVYaongP5TDAGjdsWm5
          source_id: s_23MMpw8i2TQXatTcmMAHVJ
          stance: supports
          locator: CBDB:637403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637403）
          source: &a1
            id: s_23MMpw8i2TQXatTcmMAHVJ
            source_type: api_record
            title: 中国历代人物传记资料库：王常泰（CBDB 637403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637403&o=json
            external_identifier: CBDB:637403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1A3CJEX1d3NNja3PKxzp3C
        subject_person_id: p_Pjn2QicgDYyZ1A7vFjju9y
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
        - id: cs_jGsNfNfK3WgUw9Qb7ATqE2
          claim_id: c_1A3CJEX1d3NNja3PKxzp3C
          source_id: s_23MMpw8i2TQXatTcmMAHVJ
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

# 王常泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常泰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王常泰（CBDB 637403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637403&o=json)
