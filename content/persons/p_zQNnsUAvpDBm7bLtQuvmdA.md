---
schema: wang-person/v1
id: p_zQNnsUAvpDBm7bLtQuvmdA
status: active
merged_into: null
display_name: 王焄寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yuNNUz3CES8C691wFFhTVL
        subject_person_id: p_zQNnsUAvpDBm7bLtQuvmdA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焄寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_thmm2Lm5mL8sqfdoCi9dA6
          claim_id: c_yuNNUz3CES8C691wFFhTVL
          source_id: s_r5wny681cKUjK7WfBFcJJZ
          stance: supports
          locator: CBDB:535590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535590）
          source: &a1
            id: s_r5wny681cKUjK7WfBFcJJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王焄寶（CBDB 535590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535590&o=json
            external_identifier: CBDB:535590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2PWcBZa1GKKuAmPiM9xdkL
        subject_person_id: p_zQNnsUAvpDBm7bLtQuvmdA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焄寶，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 535590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IXYD-wOt9dSq0Qqz-vnQMf
          claim_id: c_2PWcBZa1GKKuAmPiM9xdkL
          source_id: s_r5wny681cKUjK7WfBFcJJZ
          stance: supports
          locator: CBDB:535590
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

# 王焄寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焄寶 | accepted |
| bio.summary | 王焄寶，宋人物。籍贯錢塘，入仕進士。（中国历代人物传记资料库 CBDB 535590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焄寶（CBDB 535590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535590&o=json)
