---
schema: wang-person/v1
id: p_dGgKKJfH2m66oZFz8w19vK
status: active
merged_into: null
display_name: 王化鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rg4Jm6RBern7rPXj2M8Q3k
        subject_person_id: p_dGgKKJfH2m66oZFz8w19vK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BRWym6bP2WbzUKfzigPhYh
          claim_id: c_rg4Jm6RBern7rPXj2M8Q3k
          source_id: s_zc3zTWPJqA9v9R4KyZdfB2
          stance: supports
          locator: CBDB:636412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636412）
          source: &a1
            id: s_zc3zTWPJqA9v9R4KyZdfB2
            source_type: api_record
            title: 中国历代人物传记资料库：王化鳳（CBDB 636412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636412&o=json
            external_identifier: CBDB:636412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C4ijU1yN5PcVp6LiBHyR4Z
        subject_person_id: p_dGgKKJfH2m66oZFz8w19vK
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
        - id: cs_zWXTHJXpz1JweG537BUVTU
          claim_id: c_C4ijU1yN5PcVp6LiBHyR4Z
          source_id: s_zc3zTWPJqA9v9R4KyZdfB2
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

# 王化鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化鳳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化鳳（CBDB 636412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636412&o=json)
