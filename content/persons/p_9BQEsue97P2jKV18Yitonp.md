---
schema: wang-person/v1
id: p_9BQEsue97P2jKV18Yitonp
status: active
merged_into: null
display_name: 王漳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGJGrUnRHLPQHCdoWoGXS3
        subject_person_id: p_9BQEsue97P2jKV18Yitonp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zvQd57Joqo1LMFnQBWV1Js
          claim_id: c_yGJGrUnRHLPQHCdoWoGXS3
          source_id: s_crsk5KK9pekBcUQR542Hwt
          stance: supports
          locator: CBDB:639203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639203）
          source: &a1
            id: s_crsk5KK9pekBcUQR542Hwt
            source_type: api_record
            title: 中国历代人物传记资料库：王漳（CBDB 639203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639203&o=json
            external_identifier: CBDB:639203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LHZXMA1yfFQhPihxHB6vr1
        subject_person_id: p_9BQEsue97P2jKV18Yitonp
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
        - id: cs_nxR8kd6wEE7fYocnpLPdQp
          claim_id: c_LHZXMA1yfFQhPihxHB6vr1
          source_id: s_crsk5KK9pekBcUQR542Hwt
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

# 王漳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漳（CBDB 639203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639203&o=json)
