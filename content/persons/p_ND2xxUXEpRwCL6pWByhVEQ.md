---
schema: wang-person/v1
id: p_ND2xxUXEpRwCL6pWByhVEQ
status: active
merged_into: null
display_name: 王琅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgcdwNA3refCSACjBPZbBm
        subject_person_id: p_ND2xxUXEpRwCL6pWByhVEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_75LASRd5Tvtb9T2aXj3gib
          claim_id: c_wgcdwNA3refCSACjBPZbBm
          source_id: s_M7zDMxMRw6B6nh4jnfoW2o
          stance: supports
          locator: CBDB:639404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639404）
          source: &a1
            id: s_M7zDMxMRw6B6nh4jnfoW2o
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 639404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639404&o=json
            external_identifier: CBDB:639404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6YQ8EHGtD68kwRC4X7L8n
        subject_person_id: p_ND2xxUXEpRwCL6pWByhVEQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琅，清人物。籍贯海康，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 639404）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_suF4soRp_BO_CylEbNzXkX
          claim_id: c_Z6YQ8EHGtD68kwRC4X7L8n
          source_id: s_M7zDMxMRw6B6nh4jnfoW2o
          stance: supports
          locator: CBDB:639404
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

# 王琅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琅 | accepted |
| bio.summary | 王琅，清人物。籍贯海康，曾任經歷、知縣。（中国历代人物传记资料库 CBDB 639404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琅（CBDB 639404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639404&o=json)
