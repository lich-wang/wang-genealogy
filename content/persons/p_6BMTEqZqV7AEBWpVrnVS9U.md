---
schema: wang-person/v1
id: p_6BMTEqZqV7AEBWpVrnVS9U
status: active
merged_into: null
display_name: 王侍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8UpMQEouf6LNA5K7isD1P4
        subject_person_id: p_6BMTEqZqV7AEBWpVrnVS9U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yJQADuUKjcsnEKy2qn2NEw
          claim_id: c_8UpMQEouf6LNA5K7isD1P4
          source_id: s_PNSRVtQkP6KuCK7Q57it68
          stance: supports
          locator: CBDB:636032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636032）
          source: &a1
            id: s_PNSRVtQkP6KuCK7Q57it68
            source_type: api_record
            title: 中国历代人物传记资料库：王侍（CBDB 636032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636032&o=json
            external_identifier: CBDB:636032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zWA9YfxsE1HbxdRxUXc6zt
        subject_person_id: p_6BMTEqZqV7AEBWpVrnVS9U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侍，清人物。籍贯西安，曾任復設訓導。（中国历代人物传记资料库 CBDB 636032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BbjcOjWQmWgIOmqzEuG94I
          claim_id: c_zWA9YfxsE1HbxdRxUXc6zt
          source_id: s_PNSRVtQkP6KuCK7Q57it68
          stance: supports
          locator: CBDB:636032
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

# 王侍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侍 | accepted |
| bio.summary | 王侍，清人物。籍贯西安，曾任復設訓導。（中国历代人物传记资料库 CBDB 636032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侍（CBDB 636032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636032&o=json)
