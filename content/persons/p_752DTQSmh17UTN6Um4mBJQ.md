---
schema: wang-person/v1
id: p_752DTQSmh17UTN6Um4mBJQ
status: active
merged_into: null
display_name: 王守基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HxDLGpeCJiuUqvF3soLHC8
        subject_person_id: p_752DTQSmh17UTN6Um4mBJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mec52FnNX1TdwMcrNPDi7J
          claim_id: c_HxDLGpeCJiuUqvF3soLHC8
          source_id: s_iPsWnBxMEu5MAsHv1NzzcB
          stance: supports
          locator: CBDB:71632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71632）
          source: &a1
            id: s_iPsWnBxMEu5MAsHv1NzzcB
            source_type: api_record
            title: 中国历代人物传记资料库：王守基（CBDB 71632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71632&o=json
            external_identifier: CBDB:71632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UXte4DwJ5z3SLrqS5zvmZe
        subject_person_id: p_752DTQSmh17UTN6Um4mBJQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdxqrTZPvmW5HEL3ae35fB
          claim_id: c_UXte4DwJ5z3SLrqS5zvmZe
          source_id: s_iPsWnBxMEu5MAsHv1NzzcB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WR95xumVmXwsA4zCuCb2Z3
        subject_person_id: p_752DTQSmh17UTN6Um4mBJQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守基（卒于1873年），清人物。籍贯密縣。（中国历代人物传记资料库 CBDB 71632）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zsRUbxKC2Fcunw16aTAMvp
          claim_id: c_WR95xumVmXwsA4zCuCb2Z3
          source_id: s_iPsWnBxMEu5MAsHv1NzzcB
          stance: supports
          locator: CBDB:71632
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

# 王守基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守基 | accepted |
| death.date | 1873年 | accepted |
| bio.summary | 王守基（卒于1873年），清人物。籍贯密縣。（中国历代人物传记资料库 CBDB 71632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守基（CBDB 71632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71632&o=json)
