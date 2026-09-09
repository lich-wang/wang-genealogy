---
schema: wang-person/v1
id: p_mv9x6mZcxgErkiGWJ68o4e
status: active
merged_into: null
display_name: 王洵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9LEDDnS5RqBDCFnWnn1AX2
        subject_person_id: p_mv9x6mZcxgErkiGWJ68o4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_atPDsZPTmt42a1aB3PUz1x
          claim_id: c_9LEDDnS5RqBDCFnWnn1AX2
          source_id: s_xvKV5UZqkpTXHg1cFBPA4B
          stance: supports
          locator: CBDB:342779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342779）
          source: &a1
            id: s_xvKV5UZqkpTXHg1cFBPA4B
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 342779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342779&o=json
            external_identifier: CBDB:342779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vawF9K6mXe2TXPPyZ6bbaE
        subject_person_id: p_mv9x6mZcxgErkiGWJ68o4e
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
        - id: cs_AzrF4aUsQfFnCqJiaVyz3w
          claim_id: c_vawF9K6mXe2TXPPyZ6bbaE
          source_id: s_xvKV5UZqkpTXHg1cFBPA4B
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

# 王洵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洵（CBDB 342779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342779&o=json)
