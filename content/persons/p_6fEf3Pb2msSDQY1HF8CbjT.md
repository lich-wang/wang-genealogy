---
schema: wang-person/v1
id: p_6fEf3Pb2msSDQY1HF8CbjT
status: active
merged_into: null
display_name: 王宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jtHMqx6W1phvtf8HTfxAbg
        subject_person_id: p_6fEf3Pb2msSDQY1HF8CbjT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xic455fpJokP2sj5AFvUQo
          claim_id: c_jtHMqx6W1phvtf8HTfxAbg
          source_id: s_HVp6mh4Me4A5EBFsENk9NA
          stance: supports
          locator: CBDB:69283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69283）
          source: &a1
            id: s_HVp6mh4Me4A5EBFsENk9NA
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 69283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69283&o=json
            external_identifier: CBDB:69283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_paMsbpDbFKXcyNn8wrrMYk
        subject_person_id: p_6fEf3Pb2msSDQY1HF8CbjT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1720年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GuEzCBYmb9giDoZjWf9DD
          claim_id: c_paMsbpDbFKXcyNn8wrrMYk
          source_id: s_HVp6mh4Me4A5EBFsENk9NA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N3r5zDK2nszKr7RpWfcEs7
        subject_person_id: p_6fEf3Pb2msSDQY1HF8CbjT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EzN8PDQUAgLydpsnSrMe67
          claim_id: c_N3r5zDK2nszKr7RpWfcEs7
          source_id: s_HVp6mh4Me4A5EBFsENk9NA
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
        id: c_mrJgk7BTZenDN6nXjbPQKs
        subject_person_id: p_6fEf3Pb2msSDQY1HF8CbjT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸（1720年—1797年），清人物。籍贯太倉直隸州，身份为畫家、詩人，入仕鄉貢舉人，曾任知府、府同知。（中国历代人物传记资料库 CBDB 69283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XT7cQdYG5P8tRCCljBaGsF
          claim_id: c_mrJgk7BTZenDN6nXjbPQKs
          source_id: s_HVp6mh4Me4A5EBFsENk9NA
          stance: supports
          locator: CBDB:69283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| birth.date | 1720年 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | 王宸（1720年—1797年），清人物。籍贯太倉直隸州，身份为畫家、詩人，入仕鄉貢舉人，曾任知府、府同知。（中国历代人物传记资料库 CBDB 69283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 69283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69283&o=json)
