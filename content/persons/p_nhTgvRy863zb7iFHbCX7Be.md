---
schema: wang-person/v1
id: p_nhTgvRy863zb7iFHbCX7Be
status: active
merged_into: null
display_name: 王承祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d6LvRoggZGC8n8vBe4tMLv
        subject_person_id: p_nhTgvRy863zb7iFHbCX7Be
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5cv1EYuusVks2gzQA7YtG
          claim_id: c_d6LvRoggZGC8n8vBe4tMLv
          source_id: s_XonLGdYw1fTK6Ex1BBDtTw
          stance: supports
          locator: CBDB:576094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576094）
          source: &a1
            id: s_XonLGdYw1fTK6Ex1BBDtTw
            source_type: api_record
            title: 中国历代人物传记资料库：王承祖（CBDB 576094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576094&o=json
            external_identifier: CBDB:576094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xH3Ypp3du2w8hiYMyKpmJg
        subject_person_id: p_nhTgvRy863zb7iFHbCX7Be
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
        - id: cs_9C9eGCS5uDY2zRnVNqEB5d
          claim_id: c_xH3Ypp3du2w8hiYMyKpmJg
          source_id: s_XonLGdYw1fTK6Ex1BBDtTw
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

# 王承祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承祖（CBDB 576094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576094&o=json)
