---
schema: wang-person/v1
id: p_AQxepAi75nALPZgMv9J3DC
status: active
merged_into: null
display_name: 王景聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1zC2smWNPAHXw2s1UzruU
        subject_person_id: p_AQxepAi75nALPZgMv9J3DC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fbBUiBCYSWP67C9re7SxEf
          claim_id: c_W1zC2smWNPAHXw2s1UzruU
          source_id: s_HUwCJEvCbE9a4eApc4wGTS
          stance: supports
          locator: CBDB:638508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638508）
          source: &a1
            id: s_HUwCJEvCbE9a4eApc4wGTS
            source_type: api_record
            title: 中国历代人物传记资料库：王景聘（CBDB 638508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638508&o=json
            external_identifier: CBDB:638508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXqGvgPiNPkDQcdW6tC4aG
        subject_person_id: p_AQxepAi75nALPZgMv9J3DC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景聘，清人物。籍贯衛輝府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638508）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xOuhgQ_fGD7DUgRElNVVis
          claim_id: c_yXqGvgPiNPkDQcdW6tC4aG
          source_id: s_HUwCJEvCbE9a4eApc4wGTS
          stance: supports
          locator: CBDB:638508
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王景聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景聘 | accepted |
| bio.summary | 王景聘，清人物。籍贯衛輝府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景聘（CBDB 638508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638508&o=json)
