---
schema: wang-person/v1
id: p_gukGZ9jgy63mDe91LNuGhL
status: active
merged_into: null
display_name: 馮氏
revision: 1
cbdb_id: 573440
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u6S4-eVA7uZsXnUBmuSuIn
        subject_person_id: p_gukGZ9jgy63mDe91LNuGhL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCEz2RLRUODkS0-68pRrND
          claim_id: c_u6S4-eVA7uZsXnUBmuSuIn
          source_id: s_MS9dQWrZhQ0iO1C8986bM5
          stance: supports
          locator: CBDB:573440
          quotation: null
          interpretation_note: CBDB 明确记录的王言配偶
          source: &a1
            id: s_MS9dQWrZhQ0iO1C8986bM5
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(釋守諲嫂)（CBDB 573440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573440&o=json
            external_identifier: CBDB:573440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_j1GdE2HiqpRQIZZO4Tqz7K
        subject_person_id: p_3j4bJSuSt5rj7UTEa3SeQ5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gukGZ9jgy63mDe91LNuGhL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uFHv1isn4CJUH158qJ42rk
          claim_id: c_j1GdE2HiqpRQIZZO4Tqz7K
          source_id: s_MS9dQWrZhQ0iO1C8986bM5
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，10：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3j4bJSuSt5rj7UTEa3SeQ5
        status: active
        display_name: 王言
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馮氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 馮氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3j4bJSuSt5rj7UTEa3SeQ5 | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(釋守諲嫂)（CBDB 573440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573440&o=json)
