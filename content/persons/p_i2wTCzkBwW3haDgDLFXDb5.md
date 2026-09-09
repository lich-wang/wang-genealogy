---
schema: wang-person/v1
id: p_i2wTCzkBwW3haDgDLFXDb5
status: active
merged_into: null
display_name: 王錫誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLpGbTGjcJsTn7Wx5YioEo
        subject_person_id: p_i2wTCzkBwW3haDgDLFXDb5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vSNUKifKuEpYGpYniEtvm9
          claim_id: c_NLpGbTGjcJsTn7Wx5YioEo
          source_id: s_Qd22YsyTXpoFGh29amHWEt
          stance: supports
          locator: CBDB:640646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640646）
          source: &a1
            id: s_Qd22YsyTXpoFGh29amHWEt
            source_type: api_record
            title: 中国历代人物传记资料库：王錫誥（CBDB 640646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640646&o=json
            external_identifier: CBDB:640646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZXb5V37PBK1ScLvfrBAUY
        subject_person_id: p_i2wTCzkBwW3haDgDLFXDb5
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
        - id: cs_H6wCAtyeqgwhpEoFGB9bgU
          claim_id: c_EZXb5V37PBK1ScLvfrBAUY
          source_id: s_Qd22YsyTXpoFGh29amHWEt
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

# 王錫誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫誥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫誥（CBDB 640646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640646&o=json)
