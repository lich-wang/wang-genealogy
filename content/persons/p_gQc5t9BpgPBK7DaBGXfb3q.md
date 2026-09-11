---
schema: wang-person/v1
id: p_gQc5t9BpgPBK7DaBGXfb3q
status: active
merged_into: null
display_name: 王鎧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1Zy5YmEKp34Q61gJ7GY6e
        subject_person_id: p_gQc5t9BpgPBK7DaBGXfb3q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QmnKnVRi69VHJTVUqNXyLa
          claim_id: c_M1Zy5YmEKp34Q61gJ7GY6e
          source_id: s_czrvT6gTBAU4uvPMDJgoZ6
          stance: supports
          locator: CBDB:484001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484001）
          source: &a1
            id: s_czrvT6gTBAU4uvPMDJgoZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 484001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484001&o=json
            external_identifier: CBDB:484001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3vUAWUrtErW9vaQ4Xh4kPt
        subject_person_id: p_gQc5t9BpgPBK7DaBGXfb3q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧，明人物。入仕世襲(替)，曾任同知。（中国历代人物传记资料库 CBDB 484001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ooKilynKU0-I1kU-tOcDaN
          claim_id: c_3vUAWUrtErW9vaQ4Xh4kPt
          source_id: s_czrvT6gTBAU4uvPMDJgoZ6
          stance: supports
          locator: CBDB:484001
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

# 王鎧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧 | accepted |
| bio.summary | 王鎧，明人物。入仕世襲(替)，曾任同知。（中国历代人物传记资料库 CBDB 484001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎧（CBDB 484001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484001&o=json)
