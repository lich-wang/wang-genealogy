---
schema: wang-person/v1
id: p_g6inskWUTxep86qdf15SSK
status: active
merged_into: null
display_name: 王謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8T5c4811YnTaRQNzCQGzn
        subject_person_id: p_g6inskWUTxep86qdf15SSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f3Hdqz1xUTDk5KmigF7BJv
          claim_id: c_z8T5c4811YnTaRQNzCQGzn
          source_id: s_QspyVhQYUzpf6mB8FJ9fxB
          stance: supports
          locator: CBDB:341701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341701）
          source: &a1
            id: s_QspyVhQYUzpf6mB8FJ9fxB
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 341701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341701&o=json
            external_identifier: CBDB:341701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CLa31rBLCuRuTehXn11dC6
        subject_person_id: p_g6inskWUTxep86qdf15SSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，清人物。明清進士進士，籍贯太康，入仕進士。（中国历代人物传记资料库 CBDB 341701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KFFt2ftG2DYzTHyE7reMNL
          claim_id: c_CLa31rBLCuRuTehXn11dC6
          source_id: s_QspyVhQYUzpf6mB8FJ9fxB
          stance: supports
          locator: CBDB:341701
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

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，清人物。明清進士進士，籍贯太康，入仕進士。（中国历代人物传记资料库 CBDB 341701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 341701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341701&o=json)
