---
schema: wang-person/v1
id: p_bcADb17e2zmWN3twBo66DQ
status: active
merged_into: null
display_name: 王僑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KSLfWU8MGVVBGy9SmTq2nV
        subject_person_id: p_bcADb17e2zmWN3twBo66DQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5i7MvKm9n62gChJgAwBadN
          claim_id: c_KSLfWU8MGVVBGy9SmTq2nV
          source_id: s_3zWAz2GGshvzZV9APKvqMZ
          stance: supports
          locator: CBDB:337551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337551）
          source: &a1
            id: s_3zWAz2GGshvzZV9APKvqMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 337551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337551&o=json
            external_identifier: CBDB:337551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MSSHC1Q6Gz1qXKoBfSa3Hq
        subject_person_id: p_bcADb17e2zmWN3twBo66DQ
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
        - id: cs_HUF2fp5J5J4c8XGZYZBeJj
          claim_id: c_MSSHC1Q6Gz1qXKoBfSa3Hq
          source_id: s_3zWAz2GGshvzZV9APKvqMZ
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

# 王僑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僑（CBDB 337551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337551&o=json)
