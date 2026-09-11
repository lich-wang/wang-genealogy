---
schema: wang-person/v1
id: p_uP2DpmGdAAbQkFyCgtVG9r
status: active
merged_into: null
display_name: 王國楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZiCx6aNxno1K5DFGF4i7J
        subject_person_id: p_uP2DpmGdAAbQkFyCgtVG9r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwQW3HEtnoVajA69rCscpg
          claim_id: c_6ZiCx6aNxno1K5DFGF4i7J
          source_id: s_HEJMMjS19yqqTeSFtNQ1vL
          stance: supports
          locator: CBDB:343436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343436）
          source: &a1
            id: s_HEJMMjS19yqqTeSFtNQ1vL
            source_type: api_record
            title: 中国历代人物传记资料库：王國楨（CBDB 343436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343436&o=json
            external_identifier: CBDB:343436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vWT9LBQC7j75g5LNSV78hy
        subject_person_id: p_uP2DpmGdAAbQkFyCgtVG9r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨，明人物。明清進士進士，籍贯安邑，入仕進士。（中国历代人物传记资料库 CBDB 343436）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vL4k-pnyzWE9ogrcMCQxey
          claim_id: c_vWT9LBQC7j75g5LNSV78hy
          source_id: s_HEJMMjS19yqqTeSFtNQ1vL
          stance: supports
          locator: CBDB:343436
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

# 王國楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國楨 | accepted |
| bio.summary | 王國楨，明人物。明清進士進士，籍贯安邑，入仕進士。（中国历代人物传记资料库 CBDB 343436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國楨（CBDB 343436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343436&o=json)
