---
schema: wang-person/v1
id: p_ZNXjHrZiyFvixpRF1VLBU5
status: active
merged_into: null
display_name: 王鍈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ff12NHbJfqgEvBVQaB1uqM
        subject_person_id: p_ZNXjHrZiyFvixpRF1VLBU5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9DDpaCgtozAP3NRNwx9rLV
          claim_id: c_ff12NHbJfqgEvBVQaB1uqM
          source_id: s_rQHqFCtCSZGgAs3RtWHo9g
          stance: supports
          locator: CBDB:343790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343790）
          source: &a1
            id: s_rQHqFCtCSZGgAs3RtWHo9g
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 343790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343790&o=json
            external_identifier: CBDB:343790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UzHGQxNkc14eaTp5MtNLyL
        subject_person_id: p_ZNXjHrZiyFvixpRF1VLBU5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMU4q7TbHk-NKCwGYDSTYr
          claim_id: c_UzHGQxNkc14eaTp5MtNLyL
          source_id: s_rQHqFCtCSZGgAs3RtWHo9g
          stance: supports
          locator: CBDB:343790
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

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | 王鍈，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 343790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343790&o=json)
