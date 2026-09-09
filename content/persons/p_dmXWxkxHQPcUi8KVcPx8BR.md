---
schema: wang-person/v1
id: p_dmXWxkxHQPcUi8KVcPx8BR
status: active
merged_into: null
display_name: 王冕元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iqMfXCw16e8EmbcgSHEEt7
        subject_person_id: p_dmXWxkxHQPcUi8KVcPx8BR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TisEEYhT1gdqGNrGe415yE
          claim_id: c_iqMfXCw16e8EmbcgSHEEt7
          source_id: s_Rh8P12gVK9PmYidNgMDDhB
          stance: supports
          locator: CBDB:636349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636349）
          source: &a1
            id: s_Rh8P12gVK9PmYidNgMDDhB
            source_type: api_record
            title: 中国历代人物传记资料库：王冕元（CBDB 636349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636349&o=json
            external_identifier: CBDB:636349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6X2b6L1B56HLcct4C6jgNj
        subject_person_id: p_dmXWxkxHQPcUi8KVcPx8BR
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
        - id: cs_Amohot5Cx7ozEoMqmTnn7U
          claim_id: c_6X2b6L1B56HLcct4C6jgNj
          source_id: s_Rh8P12gVK9PmYidNgMDDhB
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

# 王冕元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕元（CBDB 636349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636349&o=json)
