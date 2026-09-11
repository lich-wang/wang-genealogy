---
schema: wang-person/v1
id: p_DfVnCT5JrJqfh4V7ERUD15
status: active
merged_into: null
display_name: 王葆初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1QKN1gRLKdHwZ4AHt6J1A
        subject_person_id: p_DfVnCT5JrJqfh4V7ERUD15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7SaMDAw7vtD5XTad8MxKCY
          claim_id: c_j1QKN1gRLKdHwZ4AHt6J1A
          source_id: s_UPNuGFCqT6jeVtUh6JXUuY
          stance: supports
          locator: CBDB:640131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640131）
          source: &a1
            id: s_UPNuGFCqT6jeVtUh6JXUuY
            source_type: api_record
            title: 中国历代人物传记资料库：王葆初（CBDB 640131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640131&o=json
            external_identifier: CBDB:640131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vc9woj5RC6wqEKZ9r65yoy
        subject_person_id: p_DfVnCT5JrJqfh4V7ERUD15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葆初，清人物。籍贯台州府，入仕附貢生，曾任教諭。（中国历代人物传记资料库 CBDB 640131）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4L29jOjS8YMuUqu3AIUq6g
          claim_id: c_vc9woj5RC6wqEKZ9r65yoy
          source_id: s_UPNuGFCqT6jeVtUh6JXUuY
          stance: supports
          locator: CBDB:640131
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

# 王葆初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葆初 | accepted |
| bio.summary | 王葆初，清人物。籍贯台州府，入仕附貢生，曾任教諭。（中国历代人物传记资料库 CBDB 640131） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葆初（CBDB 640131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640131&o=json)
