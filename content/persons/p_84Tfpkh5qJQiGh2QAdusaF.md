---
schema: wang-person/v1
id: p_84Tfpkh5qJQiGh2QAdusaF
status: active
merged_into: null
display_name: 王時泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sJDNJ9A1NqwB25FUL4XayC
        subject_person_id: p_84Tfpkh5qJQiGh2QAdusaF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBQqLYG1PG3kJPJBsy2D9z
          claim_id: c_sJDNJ9A1NqwB25FUL4XayC
          source_id: s_zjCnnqQf6L2su76DQA3a6c
          stance: supports
          locator: CBDB:343522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343522）
          source: &a1
            id: s_zjCnnqQf6L2su76DQA3a6c
            source_type: api_record
            title: 中国历代人物传记资料库：王時泰（CBDB 343522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343522&o=json
            external_identifier: CBDB:343522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jPEojBq1vE2ouabYSGP7sq
        subject_person_id: p_84Tfpkh5qJQiGh2QAdusaF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時泰，清人物。明清進士進士，籍贯新鄉，入仕進士，曾任場鹽大使。（中国历代人物传记资料库 CBDB 343522）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NKUWg8Vb4tvsaMKqx31LCC
          claim_id: c_jPEojBq1vE2ouabYSGP7sq
          source_id: s_zjCnnqQf6L2su76DQA3a6c
          stance: supports
          locator: CBDB:343522
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

# 王時泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時泰 | accepted |
| bio.summary | 王時泰，清人物。明清進士進士，籍贯新鄉，入仕進士，曾任場鹽大使。（中国历代人物传记资料库 CBDB 343522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時泰（CBDB 343522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343522&o=json)
