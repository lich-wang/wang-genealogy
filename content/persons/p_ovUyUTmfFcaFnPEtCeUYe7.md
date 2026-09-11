---
schema: wang-person/v1
id: p_ovUyUTmfFcaFnPEtCeUYe7
status: active
merged_into: null
display_name: 王寔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2D3D4JY7CSXp9k4uZHoR5S
        subject_person_id: p_ovUyUTmfFcaFnPEtCeUYe7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V4v1KbAa51g1P1c4KST2TH
          claim_id: c_2D3D4JY7CSXp9k4uZHoR5S
          source_id: s_e716PCkNWEajkKE1Kn53jy
          stance: supports
          locator: CBDB:279061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279061）
          source: &a1
            id: s_e716PCkNWEajkKE1Kn53jy
            source_type: api_record
            title: 中国历代人物传记资料库：王寔（CBDB 279061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279061&o=json
            external_identifier: CBDB:279061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4n5fsic2rv3KzNGZYLFHA
        subject_person_id: p_ovUyUTmfFcaFnPEtCeUYe7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寔，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EagpJrwtHoJRjJK36W2coq
          claim_id: c_L4n5fsic2rv3KzNGZYLFHA
          source_id: s_e716PCkNWEajkKE1Kn53jy
          stance: supports
          locator: CBDB:279061
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

# 王寔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寔 | accepted |
| bio.summary | 王寔，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寔（CBDB 279061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279061&o=json)
