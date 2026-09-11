---
schema: wang-person/v1
id: p_ekQdUE4KoV1wLq7q5qqecF
status: active
merged_into: null
display_name: 王復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3FBHZbcV1Kh6Co3AJFWJo4
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ArYmyCh9iE3NtsNSEuAT7g
          claim_id: c_3FBHZbcV1Kh6Co3AJFWJo4
          source_id: s_Fu5GFLZoDxZtCf12B9s2aN
          stance: supports
          locator: CBDB:69424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69424）
          source: &a1
            id: s_Fu5GFLZoDxZtCf12B9s2aN
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 69424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69424&o=json
            external_identifier: CBDB:69424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NUDt8f7mJY22gjZHLZg9SB
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQ6sf8ToaYgnYastXPD7j3
          claim_id: c_NUDt8f7mJY22gjZHLZg9SB
          source_id: s_Fu5GFLZoDxZtCf12B9s2aN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Xmap9QvueayDAonGDYDnQ6
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Pq6wmTmWzZKP2E5HZe83o
          claim_id: c_Xmap9QvueayDAonGDYDnQ6
          source_id: s_Fu5GFLZoDxZtCf12B9s2aN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kvyp6N9ReccjxGmGkFHx24
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
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
        - id: cs_aCNqwgxUkoNsRFe2QdvD5j
          claim_id: c_kvyp6N9ReccjxGmGkFHx24
          source_id: s_Fu5GFLZoDxZtCf12B9s2aN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EBX4osehApgE0WpJxgkh1z
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cnbYqduEX3SbiD5E1M5816
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DarryrXQ0Oq_Bvlmh73JSB
          claim_id: c_EBX4osehApgE0WpJxgkh1z
          source_id: s_qwM9yrjBKcaiGzv3wnoFP1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13130：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qwM9yrjBKcaiGzv3wnoFP1
            source_type: api_record
            title: 中国历代人物传记资料库：王崧生（CBDB 526956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526956&o=json
            external_identifier: CBDB:526956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cnbYqduEX3SbiD5E1M5816
        status: active
        display_name: 王崧生
        merged_into_person_id: null
    - claim:
        id: c_sPw4Bpte2Su_ZNwpvaSqBh
        subject_person_id: p_ekQdUE4KoV1wLq7q5qqecF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5MBFmq7sBAvppnMomxKEi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OHa-s2zH_GLGgWeV1HiDQ6
          claim_id: c_sPw4Bpte2Su_ZNwpvaSqBh
          source_id: s_Fu5GFLZoDxZtCf12B9s2aN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13130：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z5MBFmq7sBAvppnMomxKEi
        status: active
        display_name: 王梁生
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1748年 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cnbYqduEX3SbiD5E1M5816 | 王崧生 | accepted |
| children | p_Z5MBFmq7sBAvppnMomxKEi | 王梁生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 69424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69424&o=json)
- [中国历代人物传记资料库：王崧生（CBDB 526956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526956&o=json)
