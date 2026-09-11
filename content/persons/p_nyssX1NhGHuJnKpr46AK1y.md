---
schema: wang-person/v1
id: p_nyssX1NhGHuJnKpr46AK1y
status: active
merged_into: null
display_name: 王檝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8WajWqb6Y7Q8bNiywKE6y
        subject_person_id: p_nyssX1NhGHuJnKpr46AK1y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QC2saC2oFcDEJ8Q4U6kuuE
          claim_id: c_a8WajWqb6Y7Q8bNiywKE6y
          source_id: s_VnjxCyWGxU8vwHem64FPDh
          stance: supports
          locator: CBDB:35577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35577）
          source: &a1
            id: s_VnjxCyWGxU8vwHem64FPDh
            source_type: api_record
            title: 中国历代人物传记资料库：王檝（CBDB 35577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35577&o=json
            external_identifier: CBDB:35577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hGKtKZWBhPsniE6pGAVdA2
        subject_person_id: p_nyssX1NhGHuJnKpr46AK1y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檝，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 35577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QMLMh5xsLw5fQL-FwfCVH_
          claim_id: c_hGKtKZWBhPsniE6pGAVdA2
          source_id: s_VnjxCyWGxU8vwHem64FPDh
          stance: supports
          locator: CBDB:35577
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

# 王檝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檝 | accepted |
| bio.summary | 王檝，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 35577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檝（CBDB 35577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35577&o=json)
