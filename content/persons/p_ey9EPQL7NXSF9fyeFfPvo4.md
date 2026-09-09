---
schema: wang-person/v1
id: p_ey9EPQL7NXSF9fyeFfPvo4
status: active
merged_into: null
display_name: 王桂馨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TWTFhstr1jCZooVVERbwF9
        subject_person_id: p_ey9EPQL7NXSF9fyeFfPvo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂馨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9oAah6MW2vNPm6DHG9KELK
          claim_id: c_TWTFhstr1jCZooVVERbwF9
          source_id: s_omimAkU5E7zisy3fJwML3k
          stance: supports
          locator: CBDB:638715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638715）
          source: &a1
            id: s_omimAkU5E7zisy3fJwML3k
            source_type: api_record
            title: 中国历代人物传记资料库：王桂馨（CBDB 638715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638715&o=json
            external_identifier: CBDB:638715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D8zgjqTeqoHB7AUDHsfUx8
        subject_person_id: p_ey9EPQL7NXSF9fyeFfPvo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73dBmo719AhiCoNV5s9vxi
          claim_id: c_D8zgjqTeqoHB7AUDHsfUx8
          source_id: s_omimAkU5E7zisy3fJwML3k
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

# 王桂馨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂馨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂馨（CBDB 638715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638715&o=json)
