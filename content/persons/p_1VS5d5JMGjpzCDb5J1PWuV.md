---
schema: wang-person/v1
id: p_1VS5d5JMGjpzCDb5J1PWuV
status: active
merged_into: null
display_name: 王琯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B6umZzPyTYYFAM4C2hMg3t
        subject_person_id: p_1VS5d5JMGjpzCDb5J1PWuV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RgCYdBJ5hiwhkix1UgdRP4
          claim_id: c_B6umZzPyTYYFAM4C2hMg3t
          source_id: s_f1j5yBbHJtgBZHsN6jF75s
          stance: supports
          locator: CBDB:244058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244058）
          source: &a1
            id: s_f1j5yBbHJtgBZHsN6jF75s
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 244058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json
            external_identifier: CBDB:244058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3xXLyo1kaXEFFbUfmuQYk
        subject_person_id: p_1VS5d5JMGjpzCDb5J1PWuV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3JbAURcZgdGvSEv9v9mq3O
          claim_id: c_V3xXLyo1kaXEFFbUfmuQYk
          source_id: s_f1j5yBbHJtgBZHsN6jF75s
          stance: supports
          locator: CBDB:244058
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

# 王琯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琯 | accepted |
| bio.summary | 王琯，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244058） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琯（CBDB 244058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244058&o=json)
