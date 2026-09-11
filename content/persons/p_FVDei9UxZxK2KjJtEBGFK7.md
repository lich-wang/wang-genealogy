---
schema: wang-person/v1
id: p_FVDei9UxZxK2KjJtEBGFK7
status: active
merged_into: null
display_name: 王德蓀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWEKJdF71MtRBcN5i7ckpG
        subject_person_id: p_FVDei9UxZxK2KjJtEBGFK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德蓀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k14J7JtRSX5b1W9yi66T8Q
          claim_id: c_BWEKJdF71MtRBcN5i7ckpG
          source_id: s_xMdgH3JDBLUugK3WHJ9czZ
          stance: supports
          locator: CBDB:693254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693254）
          source: &a1
            id: s_xMdgH3JDBLUugK3WHJ9czZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德蓀（CBDB 693254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693254&o=json
            external_identifier: CBDB:693254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y1EniPdHj5sAjJmSy1e1DY
        subject_person_id: p_FVDei9UxZxK2KjJtEBGFK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德蓀，清人物。籍贯黟縣，曾任知縣。（中国历代人物传记资料库 CBDB 693254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SaRHvdtfxQ1BVJ2E65ND73
          claim_id: c_Y1EniPdHj5sAjJmSy1e1DY
          source_id: s_xMdgH3JDBLUugK3WHJ9czZ
          stance: supports
          locator: CBDB:693254
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

# 王德蓀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德蓀 | accepted |
| bio.summary | 王德蓀，清人物。籍贯黟縣，曾任知縣。（中国历代人物传记资料库 CBDB 693254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德蓀（CBDB 693254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693254&o=json)
