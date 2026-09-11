---
schema: wang-person/v1
id: p_C3UyF1t9PwmEJYY4zJQBV8
status: active
merged_into: null
display_name: 王炫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HB2DiEKgpZebcnJoQVWAKr
        subject_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_REvdoTZm7sKYq86M8mJ6ya
          claim_id: c_HB2DiEKgpZebcnJoQVWAKr
          source_id: s_vsPQhuFPZN5zYGJjKkNhX6
          stance: supports
          locator: CBDB:272149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272149）
          source: &a1
            id: s_vsPQhuFPZN5zYGJjKkNhX6
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 272149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json
            external_identifier: CBDB:272149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PtairUh4d4bgNJ1PQFG5dp
        subject_person_id: p_C3UyF1t9PwmEJYY4zJQBV8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lv9Y8_NYTnKZam70YzMzWM
          claim_id: c_PtairUh4d4bgNJ1PQFG5dp
          source_id: s_vsPQhuFPZN5zYGJjKkNhX6
          stance: supports
          locator: CBDB:272149
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

# 王炫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炫 | accepted |
| bio.summary | 王炫，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炫（CBDB 272149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272149&o=json)
