---
schema: wang-person/v1
id: p_8ZzeDPJo9mUk4CtbmH7JwH
status: active
merged_into: null
display_name: 王希文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cnFg1RmWt5kCWKZ6e8JFCb
        subject_person_id: p_8ZzeDPJo9mUk4CtbmH7JwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NiTkfhE4BX4FUgtuKgNbJ5
          claim_id: c_cnFg1RmWt5kCWKZ6e8JFCb
          source_id: s_w2639fELDkQb8jDWGeagXs
          stance: supports
          locator: CBDB:35314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35314）
          source: &a1
            id: s_w2639fELDkQb8jDWGeagXs
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 35314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35314&o=json
            external_identifier: CBDB:35314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fDQrzXsjbJSWfZFmUgJFzi
        subject_person_id: p_8ZzeDPJo9mUk4CtbmH7JwH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1258年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jcePqv5ESdCLdHeTFHFBVL
          claim_id: c_fDQrzXsjbJSWfZFmUgJFzi
          source_id: s_w2639fELDkQb8jDWGeagXs
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
        id: c_DHW1DTf76AF6AH427bi9SV
        subject_person_id: p_8ZzeDPJo9mUk4CtbmH7JwH
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
        - id: cs_QQTp3pwsg2QEJy89LAfPYJ
          claim_id: c_DHW1DTf76AF6AH427bi9SV
          source_id: s_w2639fELDkQb8jDWGeagXs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eVuoxpdwUPC0jT7FNJRMeu
        subject_person_id: p_sBhQEJ3nTkHUbcPY7uuMe4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZzeDPJo9mUk4CtbmH7JwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87s7i0KacW-CSFxtI0aZc1
          claim_id: c_eVuoxpdwUPC0jT7FNJRMeu
          source_id: s_w2639fELDkQb8jDWGeagXs
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1957;1958：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sBhQEJ3nTkHUbcPY7uuMe4
        status: active
        display_name: 王義端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| death.date | 1258年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sBhQEJ3nTkHUbcPY7uuMe4 | 王義端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希文（CBDB 35314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35314&o=json)
