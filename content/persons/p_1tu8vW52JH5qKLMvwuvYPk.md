---
schema: wang-person/v1
id: p_1tu8vW52JH5qKLMvwuvYPk
status: active
merged_into: null
display_name: 王慶有
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sy1u4bRH4Fod1roVn56wuE
        subject_person_id: p_1tu8vW52JH5qKLMvwuvYPk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDen1ESzpACjFEhv2EFGHG
          claim_id: c_sy1u4bRH4Fod1roVn56wuE
          source_id: s_3N81C7qCEaV9XNE4yhp4ao
          stance: supports
          locator: CBDB:637941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637941）
          source: &a1
            id: s_3N81C7qCEaV9XNE4yhp4ao
            source_type: api_record
            title: 中国历代人物传记资料库：王慶有（CBDB 637941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637941&o=json
            external_identifier: CBDB:637941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yv7Szw93iaG6giyUJK96Kn
        subject_person_id: p_1tu8vW52JH5qKLMvwuvYPk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶有，清人物。籍贯天津，曾任復設訓導。（中国历代人物传记资料库 CBDB 637941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BpQJyXqKTtDWQyuWQfEAD3
          claim_id: c_yv7Szw93iaG6giyUJK96Kn
          source_id: s_3N81C7qCEaV9XNE4yhp4ao
          stance: supports
          locator: CBDB:637941
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

# 王慶有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶有 | accepted |
| bio.summary | 王慶有，清人物。籍贯天津，曾任復設訓導。（中国历代人物传记资料库 CBDB 637941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶有（CBDB 637941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637941&o=json)
