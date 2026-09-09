---
schema: wang-person/v1
id: p_1MAtxCoxmtiSeWbncaX2ta
status: active
merged_into: null
display_name: 王瑞霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_or2HnejEEi8CugdddgUCB3
        subject_person_id: p_1MAtxCoxmtiSeWbncaX2ta
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7B3gpcy5e7woMNHREE31Bq
          claim_id: c_or2HnejEEi8CugdddgUCB3
          source_id: s_YprYLij2EGyP89aHhbuhVb
          stance: supports
          locator: CBDB:639440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639440）
          source: &a1
            id: s_YprYLij2EGyP89aHhbuhVb
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞霖（CBDB 639440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639440&o=json
            external_identifier: CBDB:639440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJjcY1WxfR4PMtmqBP2j2c
        subject_person_id: p_1MAtxCoxmtiSeWbncaX2ta
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
        - id: cs_TvJBNwU3J2ogfH7Afw292v
          claim_id: c_zJjcY1WxfR4PMtmqBP2j2c
          source_id: s_YprYLij2EGyP89aHhbuhVb
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

# 王瑞霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞霖（CBDB 639440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639440&o=json)
