---
schema: wang-person/v1
id: p_AVjLopUsjbUfxxtc2TwjsZ
status: active
merged_into: null
display_name: 王萬銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4cBb9oaJqoMkxZ8dKxrz5v
        subject_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_njSj2P6wq8Cm1gdRexWgvx
          claim_id: c_4cBb9oaJqoMkxZ8dKxrz5v
          source_id: s_yPhhAajLqpJk35ENPVZFRp
          stance: supports
          locator: CBDB:700321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700321）
          source: &a1
            id: s_yPhhAajLqpJk35ENPVZFRp
            source_type: api_record
            title: 中国历代人物传记资料库：王萬銘（CBDB 700321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json
            external_identifier: CBDB:700321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QJjWHhCwGmsYwMn3Y8Rvfd
        subject_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬銘，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700321）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eHXSlGbNPblYEi0oXBHcb4
          claim_id: c_QJjWHhCwGmsYwMn3Y8Rvfd
          source_id: s_yPhhAajLqpJk35ENPVZFRp
          stance: supports
          locator: CBDB:700321
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

# 王萬銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬銘 | accepted |
| bio.summary | 王萬銘，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700321） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬銘（CBDB 700321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json)
