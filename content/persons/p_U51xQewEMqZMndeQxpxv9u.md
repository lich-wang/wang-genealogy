---
schema: wang-person/v1
id: p_U51xQewEMqZMndeQxpxv9u
status: active
merged_into: null
display_name: 王念祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2Tnh6w9caPccVQ7qQBcg7
        subject_person_id: p_U51xQewEMqZMndeQxpxv9u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MHoToh4AVeLmFBcHtiSA1G
          claim_id: c_E2Tnh6w9caPccVQ7qQBcg7
          source_id: s_gCqJ5DJD65NBcdp2CFkVTo
          stance: supports
          locator: CBDB:236269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236269）
          source: &a1
            id: s_gCqJ5DJD65NBcdp2CFkVTo
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 236269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236269&o=json
            external_identifier: CBDB:236269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJ9GAfEMCyaiTxosS9BMxe
        subject_person_id: p_U51xQewEMqZMndeQxpxv9u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wLY51Z2TfJZGHQ8yU6N3eW
          claim_id: c_kJ9GAfEMCyaiTxosS9BMxe
          source_id: s_gCqJ5DJD65NBcdp2CFkVTo
          stance: supports
          locator: CBDB:236269
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

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| bio.summary | 王念祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王念祖（CBDB 236269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236269&o=json)
