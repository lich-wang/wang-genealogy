---
schema: wang-person/v1
id: p_6zgueKBTLH65ghccEBpJUs
status: active
merged_into: null
display_name: 王軒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yyDhvLePdtfTMDjRV5jxYd
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uvwnbh8KAF7T1TGu8B4rSs
          claim_id: c_yyDhvLePdtfTMDjRV5jxYd
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: CBDB:200441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200441）
          source: &a1
            id: s_4uC29d4Vjc4o2MpghhPq5U
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 200441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json
            external_identifier: CBDB:200441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AAxmich8oju7L6LMGEY5i9
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhpGB5tS1vGBDZ3nCmR8bP
          claim_id: c_AAxmich8oju7L6LMGEY5i9
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xGJ9Jee6B4pc1qGgPN8dA7
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
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
        - id: cs_11NdQtJVdncYDutRAKmpzt
          claim_id: c_xGJ9Jee6B4pc1qGgPN8dA7
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
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

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軒（CBDB 200441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json)
