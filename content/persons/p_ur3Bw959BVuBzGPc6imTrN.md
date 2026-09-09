---
schema: wang-person/v1
id: p_ur3Bw959BVuBzGPc6imTrN
status: active
merged_into: null
display_name: 王奇雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKLVW9VXQPndCq4o9f7m1c
        subject_person_id: p_ur3Bw959BVuBzGPc6imTrN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zf9M47gqwQmeyuSReMgTBY
          claim_id: c_AKLVW9VXQPndCq4o9f7m1c
          source_id: s_iHZF6UpGbHAQeTCrwErF6Z
          stance: supports
          locator: CBDB:458918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458918）
          source: &a1
            id: s_iHZF6UpGbHAQeTCrwErF6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王奇雲（CBDB 458918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458918&o=json
            external_identifier: CBDB:458918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u3DmBHNRrGQM57zCbKoPNV
        subject_person_id: p_ur3Bw959BVuBzGPc6imTrN
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
        - id: cs_Tuxvu3oXQEfmD4GE1td3A5
          claim_id: c_u3DmBHNRrGQM57zCbKoPNV
          source_id: s_iHZF6UpGbHAQeTCrwErF6Z
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

# 王奇雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇雲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇雲（CBDB 458918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458918&o=json)
