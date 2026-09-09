---
schema: wang-person/v1
id: p_iD1eJdJgU3JwR1ZJai5CND
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GkK2wMa4KMARFxZRyPJzo6
        subject_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1roHbvdQzeM2ubYPLJoWyS
          claim_id: c_GkK2wMa4KMARFxZRyPJzo6
          source_id: s_WbwRWZ9r27Kbyi31xSNSvx
          stance: supports
          locator: CBDB:244701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244701）
          source: &a1
            id: s_WbwRWZ9r27Kbyi31xSNSvx
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amNEFfEEpTmsPBrVY39AnL
        subject_person_id: p_iD1eJdJgU3JwR1ZJai5CND
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
        - id: cs_xEh3SGB9hTBrLMtqtBbhw5
          claim_id: c_amNEFfEEpTmsPBrVY39AnL
          source_id: s_WbwRWZ9r27Kbyi31xSNSvx
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 244701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json)
