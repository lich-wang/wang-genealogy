---
schema: wang-person/v1
id: p_oEx5JqZovWjAWmN242q9VM
status: active
merged_into: null
display_name: 王敦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k14FnMmgkfgjNJ5xd165dx
        subject_person_id: p_oEx5JqZovWjAWmN242q9VM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yw2w93CdA3LrRHEmTHHey1
          claim_id: c_k14FnMmgkfgjNJ5xd165dx
          source_id: s_gtwML3EUiJjin7o9GBXiuH
          stance: supports
          locator: CBDB:248395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248395）
          source: &a1
            id: s_gtwML3EUiJjin7o9GBXiuH
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 248395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json
            external_identifier: CBDB:248395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KC6cmU8Ma1JX9FMJPa76dL
        subject_person_id: p_oEx5JqZovWjAWmN242q9VM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BD-K_573oULT-FKMqg3cIp
          claim_id: c_KC6cmU8Ma1JX9FMJPa76dL
          source_id: s_gtwML3EUiJjin7o9GBXiuH
          stance: supports
          locator: CBDB:248395
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

# 王敦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦 | accepted |
| bio.summary | 王敦，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦（CBDB 248395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248395&o=json)
