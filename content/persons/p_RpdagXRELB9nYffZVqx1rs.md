---
schema: wang-person/v1
id: p_RpdagXRELB9nYffZVqx1rs
status: active
merged_into: null
display_name: 王燦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DF7XLtCpjMcky66AXLtDmn
        subject_person_id: p_RpdagXRELB9nYffZVqx1rs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bUVBsvgX4PeZ9Dmf3d95DE
          claim_id: c_DF7XLtCpjMcky66AXLtDmn
          source_id: s_4ydD1fLbN1N7eZoMosPFys
          stance: supports
          locator: CBDB:71086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71086）
          source: &a1
            id: s_4ydD1fLbN1N7eZoMosPFys
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 71086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71086&o=json
            external_identifier: CBDB:71086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PN79DXdFbhSvEMDq4R2Zbh
        subject_person_id: p_RpdagXRELB9nYffZVqx1rs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1631年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GAPxUU4JemG4BwTiLJRLVD
          claim_id: c_PN79DXdFbhSvEMDq4R2Zbh
          source_id: s_4ydD1fLbN1N7eZoMosPFys
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1sGVHAENdCDBuEBXxthKJ
        subject_person_id: p_RpdagXRELB9nYffZVqx1rs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燦（生于1631年），清人物。籍贯薊州。（中国历代人物传记资料库 CBDB 71086）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_thcuPoaKetuMNs9-E2pHMR
          claim_id: c_z1sGVHAENdCDBuEBXxthKJ
          source_id: s_4ydD1fLbN1N7eZoMosPFys
          stance: supports
          locator: CBDB:71086
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

# 王燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燦 | accepted |
| birth.date | 1631年 | accepted |
| bio.summary | 王燦（生于1631年），清人物。籍贯薊州。（中国历代人物传记资料库 CBDB 71086） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燦（CBDB 71086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71086&o=json)
