---
schema: wang-person/v1
id: p_1YwF5L1ETyQWmVhMfdTYHk
status: active
merged_into: null
display_name: 王尚文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6iz2TsZmHCRAMrdJNmXNuC
        subject_person_id: p_1YwF5L1ETyQWmVhMfdTYHk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qm9hUFZG7ibCUj4GzMUK8p
          claim_id: c_6iz2TsZmHCRAMrdJNmXNuC
          source_id: s_MyJAMxpTkx7qsUCBAQ6fkB
          stance: supports
          locator: CBDB:240077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240077）
          source: &a1
            id: s_MyJAMxpTkx7qsUCBAQ6fkB
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 240077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240077&o=json
            external_identifier: CBDB:240077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WfFzrgZd8M48gDM3nvmaNh
        subject_person_id: p_1YwF5L1ETyQWmVhMfdTYHk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚文，明人物。正统十年進士，曾任右參議。（中国历代人物传记资料库 CBDB 240077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rYOtRUlq4MQ-hgI3KD_-5d
          claim_id: c_WfFzrgZd8M48gDM3nvmaNh
          source_id: s_MyJAMxpTkx7qsUCBAQ6fkB
          stance: supports
          locator: CBDB:240077
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
  descendants:
    - claim:
        id: c_0hTht4F8WWu-8zMbfowOan
        subject_person_id: p_1YwF5L1ETyQWmVhMfdTYHk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oSd16pOU3YBML076NuNf_f
          claim_id: c_0hTht4F8WWu-8zMbfowOan
          source_id: s_MyJAMxpTkx7qsUCBAQ6fkB
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GGoCNoVNHxmsGgT4y3whCN
        status: active
        display_name: 王瓖
        merged_into_person_id: null
  other: []
---

# 王尚文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚文 | accepted |
| bio.summary | 王尚文，明人物。正统十年進士，曾任右參議。（中国历代人物传记资料库 CBDB 240077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GGoCNoVNHxmsGgT4y3whCN | 王瓖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚文（CBDB 240077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240077&o=json)
