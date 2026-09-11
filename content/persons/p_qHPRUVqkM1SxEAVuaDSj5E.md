---
schema: wang-person/v1
id: p_qHPRUVqkM1SxEAVuaDSj5E
status: active
merged_into: null
display_name: 王榛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m18pkCyPhhKijd5NdnZr8H
        subject_person_id: p_qHPRUVqkM1SxEAVuaDSj5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SEEkLn2zd9ouXXxmNNFwQv
          claim_id: c_m18pkCyPhhKijd5NdnZr8H
          source_id: s_vDiPe2zm7YsYFFK6fmh2FK
          stance: supports
          locator: CBDB:212935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212935）
          source: &a1
            id: s_vDiPe2zm7YsYFFK6fmh2FK
            source_type: api_record
            title: 中国历代人物传记资料库：王榛（CBDB 212935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212935&o=json
            external_identifier: CBDB:212935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mseyFLx41PrUPS8nKqChwq
        subject_person_id: p_qHPRUVqkM1SxEAVuaDSj5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榛，明人物。萬曆二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 212935）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JQG47RAQtk2Fomb4yB_VI
          claim_id: c_mseyFLx41PrUPS8nKqChwq
          source_id: s_vDiPe2zm7YsYFFK6fmh2FK
          stance: supports
          locator: CBDB:212935
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

# 王榛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榛 | accepted |
| bio.summary | 王榛，明人物。萬曆二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 212935） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榛（CBDB 212935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212935&o=json)
