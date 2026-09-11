---
schema: wang-person/v1
id: p_2yFKrCBAhokmR8NmY63Pn8
status: active
merged_into: null
display_name: 王丙章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gT3Tn72C6yJzqe8hjCZZFp
        subject_person_id: p_2yFKrCBAhokmR8NmY63Pn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvJqBkNXpqsMALGjr8Arb4
          claim_id: c_gT3Tn72C6yJzqe8hjCZZFp
          source_id: s_6GGHsTDDfhj3PLkCQNsQQF
          stance: supports
          locator: CBDB:635738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635738）
          source: &a1
            id: s_6GGHsTDDfhj3PLkCQNsQQF
            source_type: api_record
            title: 中国历代人物传记资料库：王丙章（CBDB 635738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635738&o=json
            external_identifier: CBDB:635738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cpBVCqy4U3CME4btmTksD4
        subject_person_id: p_2yFKrCBAhokmR8NmY63Pn8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙章，清人物。籍贯錦州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 635738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9uauJpuIc-mDdWicf6bYd
          claim_id: c_cpBVCqy4U3CME4btmTksD4
          source_id: s_6GGHsTDDfhj3PLkCQNsQQF
          stance: supports
          locator: CBDB:635738
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

# 王丙章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙章 | accepted |
| bio.summary | 王丙章，清人物。籍贯錦州府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 635738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙章（CBDB 635738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635738&o=json)
