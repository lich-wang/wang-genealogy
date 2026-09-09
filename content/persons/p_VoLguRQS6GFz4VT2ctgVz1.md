---
schema: wang-person/v1
id: p_VoLguRQS6GFz4VT2ctgVz1
status: active
merged_into: null
display_name: 王褘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RMfEPkt1t86YYTnAVw3W4c
        subject_person_id: p_VoLguRQS6GFz4VT2ctgVz1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8LMgs8enkuAdW1N1tUceBw
          claim_id: c_RMfEPkt1t86YYTnAVw3W4c
          source_id: s_yJ7PKiyC3T63eiPrGAvXta
          stance: supports
          locator: CBDB:150817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150817）
          source: &a1
            id: s_yJ7PKiyC3T63eiPrGAvXta
            source_type: api_record
            title: 中国历代人物传记资料库：王褘（CBDB 150817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150817&o=json
            external_identifier: CBDB:150817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQbwbMRKk6HdPPJMXG9Gjt
        subject_person_id: p_VoLguRQS6GFz4VT2ctgVz1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDrkP4L2PQ2dqEskjyDUyf
          claim_id: c_yQbwbMRKk6HdPPJMXG9Gjt
          source_id: s_yJ7PKiyC3T63eiPrGAvXta
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

# 王褘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王褘 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王褘（CBDB 150817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150817&o=json)
