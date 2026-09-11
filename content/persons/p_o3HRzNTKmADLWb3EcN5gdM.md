---
schema: wang-person/v1
id: p_o3HRzNTKmADLWb3EcN5gdM
status: active
merged_into: null
display_name: 王廣寒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92zBYLWwfQDBWqmD7w3QkD
        subject_person_id: p_o3HRzNTKmADLWb3EcN5gdM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣寒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHEcAzRSJ1WrGEP3n246Gn
          claim_id: c_92zBYLWwfQDBWqmD7w3QkD
          source_id: s_Rs9rJ1oEbt7dTCAMCtVpD7
          stance: supports
          locator: CBDB:71347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71347）
          source: &a1
            id: s_Rs9rJ1oEbt7dTCAMCtVpD7
            source_type: api_record
            title: 中国历代人物传记资料库：王廣寒（CBDB 71347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71347&o=json
            external_identifier: CBDB:71347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eQYs7HEmLiEVSrjxD1bC2L
        subject_person_id: p_o3HRzNTKmADLWb3EcN5gdM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDc8NMe1q8j7iVULKGN3Pj
          claim_id: c_eQYs7HEmLiEVSrjxD1bC2L
          source_id: s_Rs9rJ1oEbt7dTCAMCtVpD7
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
        id: c_vDyKjrFeMtTDXH1C9hZwUD
        subject_person_id: p_o3HRzNTKmADLWb3EcN5gdM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣寒（生于1840年），清人物。籍贯壽張。（中国历代人物传记资料库 CBDB 71347）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OCwgmLI4nRgY4jm7gTtVJX
          claim_id: c_vDyKjrFeMtTDXH1C9hZwUD
          source_id: s_Rs9rJ1oEbt7dTCAMCtVpD7
          stance: supports
          locator: CBDB:71347
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

# 王廣寒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣寒 | accepted |
| birth.date | 1840年 | accepted |
| bio.summary | 王廣寒（生于1840年），清人物。籍贯壽張。（中国历代人物传记资料库 CBDB 71347） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣寒（CBDB 71347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71347&o=json)
