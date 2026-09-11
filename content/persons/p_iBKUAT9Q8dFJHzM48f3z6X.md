---
schema: wang-person/v1
id: p_iBKUAT9Q8dFJHzM48f3z6X
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQdBjtofEQaAhz6qqFuehQ
        subject_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G6sQvpfeP55yjQxTw4YoQ7
          claim_id: c_TQdBjtofEQaAhz6qqFuehQ
          source_id: s_pMJYGS5scSzA2L9ioPcuXv
          stance: supports
          locator: CBDB:255597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255597）
          source: &a1
            id: s_pMJYGS5scSzA2L9ioPcuXv
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 255597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json
            external_identifier: CBDB:255597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSfRGkshHWF33UyeVh8rNK
        subject_person_id: p_iBKUAT9Q8dFJHzM48f3z6X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6zxQvYK8UN-VQ_eyk3RZnD
          claim_id: c_HSfRGkshHWF33UyeVh8rNK
          source_id: s_pMJYGS5scSzA2L9ioPcuXv
          stance: supports
          locator: CBDB:255597
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 255597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 255597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255597&o=json)
