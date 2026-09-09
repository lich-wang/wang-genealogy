---
schema: wang-person/v1
id: p_KLvtmZwf9mNRpSU4Vu83Lw
status: active
merged_into: null
display_name: 王廷老
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJSfnkhE2xE4Zi6Pq8XYD2
        subject_person_id: p_KLvtmZwf9mNRpSU4Vu83Lw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6wqG1eE2omMYxMjgifggh5
          claim_id: c_DJSfnkhE2xE4Zi6Pq8XYD2
          source_id: s_uV31hQKMBDko9oNomm48TW
          stance: supports
          locator: CBDB:97879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97879）
          source: &a1
            id: s_uV31hQKMBDko9oNomm48TW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷老（CBDB 97879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97879&o=json
            external_identifier: CBDB:97879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gZ2EpPd9vBBfwnouRAtuNs
        subject_person_id: p_KLvtmZwf9mNRpSU4Vu83Lw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EuiXCuYCP7QAsWPvR47SSH
          claim_id: c_gZ2EpPd9vBBfwnouRAtuNs
          source_id: s_uV31hQKMBDko9oNomm48TW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王廷老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷老 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷老（CBDB 97879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97879&o=json)
