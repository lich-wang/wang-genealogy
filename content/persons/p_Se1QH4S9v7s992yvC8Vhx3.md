---
schema: wang-person/v1
id: p_Se1QH4S9v7s992yvC8Vhx3
status: active
merged_into: null
display_name: 王方誕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_orB8m4rRAwc6gMQGsMDujt
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方誕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tTn1eh4USGZvVpB8LvH5u8
          claim_id: c_orB8m4rRAwc6gMQGsMDujt
          source_id: s_oT5MsX4wxHbxwTukuy13EU
          stance: supports
          locator: CBDB:175644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175644）
          source: &a1
            id: s_oT5MsX4wxHbxwTukuy13EU
            source_type: api_record
            title: 中国历代人物传记资料库：王方誕（CBDB 175644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175644&o=json
            external_identifier: CBDB:175644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ha4d7PMr1TQiKNVUhhjdUb
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuSuiEgmzcTwY25535zWec
          claim_id: c_ha4d7PMr1TQiKNVUhhjdUb
          source_id: s_oT5MsX4wxHbxwTukuy13EU
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
        id: c_oQoj1wFdCiFFpNArfCwVtL
        subject_person_id: p_Se1QH4S9v7s992yvC8Vhx3
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
        - id: cs_a4jvLMnH2onRryqpkY4Qh9
          claim_id: c_oQoj1wFdCiFFpNArfCwVtL
          source_id: s_oT5MsX4wxHbxwTukuy13EU
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

# 王方誕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方誕 | accepted |
| death.date | 625年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方誕（CBDB 175644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175644&o=json)
