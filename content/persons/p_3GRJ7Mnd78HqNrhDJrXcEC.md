---
schema: wang-person/v1
id: p_3GRJ7Mnd78HqNrhDJrXcEC
status: active
merged_into: null
display_name: 王伯益
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bsaY7E8dkwkubdsCqxs4jA
        subject_person_id: p_3GRJ7Mnd78HqNrhDJrXcEC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jhqv4w8P1Ya85Yvx3rdG1o
          claim_id: c_bsaY7E8dkwkubdsCqxs4jA
          source_id: s_rCcSPYSXPHG6DSvrXYmYFU
          stance: supports
          locator: CBDB:71683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71683）
          source: &a1
            id: s_rCcSPYSXPHG6DSvrXYmYFU
            source_type: api_record
            title: 中国历代人物传记资料库：王伯益（CBDB 71683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71683&o=json
            external_identifier: CBDB:71683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gD6UciKRVQkZHoX3ND71FE
        subject_person_id: p_3GRJ7Mnd78HqNrhDJrXcEC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1744年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UdKE199fgJC3bfr3Bx9aFC
          claim_id: c_gD6UciKRVQkZHoX3ND71FE
          source_id: s_rCcSPYSXPHG6DSvrXYmYFU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UsM4vaoagtJt7HzWTBjvgj
        subject_person_id: p_3GRJ7Mnd78HqNrhDJrXcEC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y65X9FRsT8CvHPCB5S7542
          claim_id: c_UsM4vaoagtJt7HzWTBjvgj
          source_id: s_rCcSPYSXPHG6DSvrXYmYFU
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
        id: c_QnPJM8ham1BKzPJHgKFPVE
        subject_person_id: p_3GRJ7Mnd78HqNrhDJrXcEC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯益（1744年—1798年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_58fIlZ3GK025mdIR_TkH5s
          claim_id: c_QnPJM8ham1BKzPJHgKFPVE
          source_id: s_rCcSPYSXPHG6DSvrXYmYFU
          stance: supports
          locator: CBDB:71683
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

# 王伯益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯益 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | 王伯益（1744年—1798年），清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 71683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯益（CBDB 71683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71683&o=json)
