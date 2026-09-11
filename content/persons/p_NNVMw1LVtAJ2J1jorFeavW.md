---
schema: wang-person/v1
id: p_NNVMw1LVtAJ2J1jorFeavW
status: active
merged_into: null
display_name: 王閏哥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7aDXc9KHR13dZGcHPbmtbo
        subject_person_id: p_NNVMw1LVtAJ2J1jorFeavW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏哥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eoWz3ZEMTd3DSHR9vA21Bh
          claim_id: c_7aDXc9KHR13dZGcHPbmtbo
          source_id: s_V3ippMKDm5Az9Z4ZX1sYvA
          stance: supports
          locator: CBDB:683947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683947）
          source: &a1
            id: s_V3ippMKDm5Az9Z4ZX1sYvA
            source_type: api_record
            title: 中国历代人物传记资料库：王閏哥（CBDB 683947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683947&o=json
            external_identifier: CBDB:683947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Ji1G4U5bnCUQpznECxLzH
        subject_person_id: p_NNVMw1LVtAJ2J1jorFeavW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683947）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k6hP__IiIORIPZiC9paB6r
          claim_id: c_5Ji1G4U5bnCUQpznECxLzH
          source_id: s_V3ippMKDm5Az9Z4ZX1sYvA
          stance: supports
          locator: CBDB:683947
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

# 王閏哥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏哥 | accepted |
| bio.summary | 王閏哥，宋人物。籍贯長子。（中国历代人物传记资料库 CBDB 683947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閏哥（CBDB 683947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683947&o=json)
