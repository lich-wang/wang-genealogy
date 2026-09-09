---
schema: wang-person/v1
id: p_YonRMhmGb1WnbV3qheHfV3
status: active
merged_into: null
display_name: 王黻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5YnaP4zrGsaMcTEPEDoaY5
        subject_person_id: p_YonRMhmGb1WnbV3qheHfV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FS5A5DJpCRgQKKLyHzWNG6
          claim_id: c_5YnaP4zrGsaMcTEPEDoaY5
          source_id: s_CiyUmP2Vtd9sGm63S5HtXM
          stance: supports
          locator: CBDB:342699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342699）
          source: &a1
            id: s_CiyUmP2Vtd9sGm63S5HtXM
            source_type: api_record
            title: 中国历代人物传记资料库：王黻（CBDB 342699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342699&o=json
            external_identifier: CBDB:342699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6gZV1PobJJ4pbXr5HyWb4H
        subject_person_id: p_YonRMhmGb1WnbV3qheHfV3
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
        - id: cs_yRnY3dDvfLECW4Ciwd9fpt
          claim_id: c_6gZV1PobJJ4pbXr5HyWb4H
          source_id: s_CiyUmP2Vtd9sGm63S5HtXM
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

# 王黻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王黻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王黻（CBDB 342699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342699&o=json)
