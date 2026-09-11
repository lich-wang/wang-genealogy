---
schema: wang-person/v1
id: p_NcM9vRrcGNJLSCVWWG31nG
status: active
merged_into: null
display_name: 王敏修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2Fd3F2UJYG228GRg5tKjy
        subject_person_id: p_NcM9vRrcGNJLSCVWWG31nG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d51PQnhhHm4M8fPTW77zHg
          claim_id: c_E2Fd3F2UJYG228GRg5tKjy
          source_id: s_Jr2mDLWM2tyRiiFEH39CEt
          stance: supports
          locator: CBDB:35036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35036）
          source: &a1
            id: s_Jr2mDLWM2tyRiiFEH39CEt
            source_type: api_record
            title: 中国历代人物传记资料库：王敏修（CBDB 35036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35036&o=json
            external_identifier: CBDB:35036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2AQM4z2avDtGynx3jjuFxG
        subject_person_id: p_NcM9vRrcGNJLSCVWWG31nG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏修，元人物。籍贯安喜。（中国历代人物传记资料库 CBDB 35036）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BrmArAlBXWE6nYwPH17Pl3
          claim_id: c_2AQM4z2avDtGynx3jjuFxG
          source_id: s_Jr2mDLWM2tyRiiFEH39CEt
          stance: supports
          locator: CBDB:35036
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

# 王敏修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏修 | accepted |
| bio.summary | 王敏修，元人物。籍贯安喜。（中国历代人物传记资料库 CBDB 35036） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏修（CBDB 35036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35036&o=json)
