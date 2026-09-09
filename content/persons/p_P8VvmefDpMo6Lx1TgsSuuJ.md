---
schema: wang-person/v1
id: p_P8VvmefDpMo6Lx1TgsSuuJ
status: active
merged_into: null
display_name: 王良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59p9uo7CHVSaJ1xW3DC9mx
        subject_person_id: p_P8VvmefDpMo6Lx1TgsSuuJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2Ruy5Sg42K9jfg3AEMs9d
          claim_id: c_59p9uo7CHVSaJ1xW3DC9mx
          source_id: s_MjAqU8qXoXyUGLA5dw6M6h
          stance: supports
          locator: CBDB:100682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100682）
          source: &a1
            id: s_MjAqU8qXoXyUGLA5dw6M6h
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 100682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100682&o=json
            external_identifier: CBDB:100682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5DR6Y6g6x498PwhT7JJg8
        subject_person_id: p_P8VvmefDpMo6Lx1TgsSuuJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZ52XA4hbNzGMowv2KNSE6
          claim_id: c_G5DR6Y6g6x498PwhT7JJg8
          source_id: s_MjAqU8qXoXyUGLA5dw6M6h
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

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 100682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100682&o=json)
