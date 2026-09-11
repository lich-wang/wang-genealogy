---
schema: wang-person/v1
id: p_hmzwygRwx6cKqdBechpA6s
status: active
merged_into: null
display_name: 王軒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gAGYs9aFdihCNrfNHmBoq6
        subject_person_id: p_hmzwygRwx6cKqdBechpA6s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H911FJ9ebdTij98uQrnz3D
          claim_id: c_gAGYs9aFdihCNrfNHmBoq6
          source_id: s_AeD3myPBXgEMifDvhGhvDi
          stance: supports
          locator: CBDB:303251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303251）
          source: &a1
            id: s_AeD3myPBXgEMifDvhGhvDi
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 303251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json
            external_identifier: CBDB:303251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GpBXTaMFpYtCEtySLGmf7Q
        subject_person_id: p_hmzwygRwx6cKqdBechpA6s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒，明人物。嘉靖二十年進士，籍贯保定。（中国历代人物传记资料库 CBDB 303251）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3OG5Rb1X9Gr4yQ9aahxevY
          claim_id: c_GpBXTaMFpYtCEtySLGmf7Q
          source_id: s_AeD3myPBXgEMifDvhGhvDi
          stance: supports
          locator: CBDB:303251
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

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| bio.summary | 王軒，明人物。嘉靖二十年進士，籍贯保定。（中国历代人物传记资料库 CBDB 303251） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軒（CBDB 303251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json)
