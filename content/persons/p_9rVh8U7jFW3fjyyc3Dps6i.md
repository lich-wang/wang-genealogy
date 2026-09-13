---
schema: wang-person/v1
id: p_9rVh8U7jFW3fjyyc3Dps6i
status: active
merged_into: null
display_name: 王用密
cbdb_id: 415129
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_twU6W9cd8rma4xE5VKdZ9S
        subject_person_id: p_9rVh8U7jFW3fjyyc3Dps6i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用密，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 415129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F03R8O-GLVmm4I4mozWrBf
          claim_id: c_twU6W9cd8rma4xE5VKdZ9S
          source_id: s_Qim4RrkTqnr7njyafSGsw8
          stance: supports
          locator: CBDB:415129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qim4RrkTqnr7njyafSGsw8
            source_type: api_record
            title: 中国历代人物传记资料库：王用密（CBDB 415129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415129&o=json
            external_identifier: CBDB:415129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:51.632Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EmXvZ7sABxkJNLQJfbhbku
        subject_person_id: p_9rVh8U7jFW3fjyyc3Dps6i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kehEoKSmQ6vezZdSs2AB3t
          claim_id: c_EmXvZ7sABxkJNLQJfbhbku
          source_id: s_Qim4RrkTqnr7njyafSGsw8
          stance: supports
          locator: CBDB:415129
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6001-6100）｜历史性依据：CBDB 朝代 = 清
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

# 王用密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用密，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 415129） | accepted |
| name.primary | 王用密 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用密（CBDB 415129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415129&o=json)
