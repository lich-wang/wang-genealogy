---
schema: wang-person/v1
id: p_GKKeJ3Hz6Dm45cTvfc9ptt
status: active
merged_into: null
display_name: 王復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfZJ5ZhLPEN8MqKNr9HvqW
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
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
        - id: cs_9XbWpd47At9F3vLZisrktM
          claim_id: c_NfZJ5ZhLPEN8MqKNr9HvqW
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
          stance: supports
          locator: CBDB:38159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38159）
          source: &a1
            id: s_fKn8zMxfBXwKqqvfYJVsjF
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json
            external_identifier: CBDB:38159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Hj2Xz5jtvevDp9z1hpzQEz
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RWiFpLvyVp9FcHV8hLidkT
          claim_id: c_Hj2Xz5jtvevDp9z1hpzQEz
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
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
        id: c_miGpHYyABYSdRVAkqyEWi3
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1PW62ZjNQoZVg81SvDAKGK
          claim_id: c_miGpHYyABYSdRVAkqyEWi3
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
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
        id: c_XCF3KwtYzQv5cwAwsYMnjk
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VE6DQ55ME5eW6gJFLi85fK
          claim_id: c_XCF3KwtYzQv5cwAwsYMnjk
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
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

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1078年 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json)
