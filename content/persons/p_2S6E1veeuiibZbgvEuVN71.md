---
schema: wang-person/v1
id: p_2S6E1veeuiibZbgvEuVN71
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jmEYvjx6doc7dBz66e8RrK
        subject_person_id: p_2S6E1veeuiibZbgvEuVN71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1DfxiNo862eM4BAgnXxajt
          claim_id: c_jmEYvjx6doc7dBz66e8RrK
          source_id: s_SRpt7pnveBeny9RdZ7Fgm5
          stance: supports
          locator: CBDB:269333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269333）
          source: &a1
            id: s_SRpt7pnveBeny9RdZ7Fgm5
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 269333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269333&o=json
            external_identifier: CBDB:269333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XXsbtUwT5G4P1ztwewMVq8
        subject_person_id: p_2S6E1veeuiibZbgvEuVN71
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。弘治九年進士，籍贯高陽。（中国历代人物传记资料库 CBDB 269333）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rA3ET_TKvCpAzDB2ZQzcHn
          claim_id: c_XXsbtUwT5G4P1ztwewMVq8
          source_id: s_SRpt7pnveBeny9RdZ7Fgm5
          stance: supports
          locator: CBDB:269333
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。弘治九年進士，籍贯高陽。（中国历代人物传记资料库 CBDB 269333） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 269333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269333&o=json)
