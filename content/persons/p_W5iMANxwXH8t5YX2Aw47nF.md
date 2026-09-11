---
schema: wang-person/v1
id: p_W5iMANxwXH8t5YX2Aw47nF
status: active
merged_into: null
display_name: 王道顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5iNkkh6tyEeauKdN7GFYz7
        subject_person_id: p_W5iMANxwXH8t5YX2Aw47nF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k1CTWeu7Bs3MyKcT2pWJRe
          claim_id: c_5iNkkh6tyEeauKdN7GFYz7
          source_id: s_PD4AGAhNhMKzNEGaGSAnmX
          stance: supports
          locator: CBDB:210025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210025）
          source: &a1
            id: s_PD4AGAhNhMKzNEGaGSAnmX
            source_type: api_record
            title: 中国历代人物传记资料库：王道顯（CBDB 210025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json
            external_identifier: CBDB:210025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q6jFbbh5LMNJKwJ1SEZ68A
        subject_person_id: p_W5iMANxwXH8t5YX2Aw47nF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道顯，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5EJMYrKZ4rKVC0-uB9UZ7I
          claim_id: c_Q6jFbbh5LMNJKwJ1SEZ68A
          source_id: s_PD4AGAhNhMKzNEGaGSAnmX
          stance: supports
          locator: CBDB:210025
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

# 王道顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道顯 | accepted |
| bio.summary | 王道顯，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道顯（CBDB 210025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210025&o=json)
