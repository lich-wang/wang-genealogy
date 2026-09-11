---
schema: wang-person/v1
id: p_B5APb16Pb2PCiM2gf7DUjg
status: active
merged_into: null
display_name: 王頤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UbbA5sJaHrZ1tSB19FFhsa
        subject_person_id: p_B5APb16Pb2PCiM2gf7DUjg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSQRjLhfqAwDoUKXgQhxjH
          claim_id: c_UbbA5sJaHrZ1tSB19FFhsa
          source_id: s_Q4n3mj4g5N6EpG828sYk4L
          stance: supports
          locator: CBDB:126808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126808）
          source: &a1
            id: s_Q4n3mj4g5N6EpG828sYk4L
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 126808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126808&o=json
            external_identifier: CBDB:126808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NsaoBep7CivQGiJ974CpLx
        subject_person_id: p_B5APb16Pb2PCiM2gf7DUjg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1342年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GK3RcEKPiaMAiVkoR7HC22
          claim_id: c_NsaoBep7CivQGiJ974CpLx
          source_id: s_Q4n3mj4g5N6EpG828sYk4L
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
        id: c_RyTkNhB153KTbHi8wYZCF4
        subject_person_id: p_B5APb16Pb2PCiM2gf7DUjg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wKL58jjMYE3QtHw97A1UCa
          claim_id: c_RyTkNhB153KTbHi8wYZCF4
          source_id: s_Q4n3mj4g5N6EpG828sYk4L
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
        id: c_PRVhBQFuUt4M9gHGhXa2Jy
        subject_person_id: p_B5APb16Pb2PCiM2gf7DUjg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤（1342年—1430年），明人物。籍贯溧陽，身份为良吏;循吏，曾任知縣、主簿。（中国历代人物传记资料库 CBDB 126808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mr7CRc2aYV4nuBab33t9AO
          claim_id: c_PRVhBQFuUt4M9gHGhXa2Jy
          source_id: s_Q4n3mj4g5N6EpG828sYk4L
          stance: supports
          locator: CBDB:126808
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

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| birth.date | 1342年 | accepted |
| death.date | 1430年 | accepted |
| bio.summary | 王頤（1342年—1430年），明人物。籍贯溧陽，身份为良吏;循吏，曾任知縣、主簿。（中国历代人物传记资料库 CBDB 126808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頤（CBDB 126808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126808&o=json)
