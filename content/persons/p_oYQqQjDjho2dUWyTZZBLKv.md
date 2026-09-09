---
schema: wang-person/v1
id: p_oYQqQjDjho2dUWyTZZBLKv
status: active
merged_into: null
display_name: 王啓元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CoC662zjZbNf2ZDNzNBqMM
        subject_person_id: p_oYQqQjDjho2dUWyTZZBLKv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啓元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FXumRb6dTPXqrG6YgBGSu5
          claim_id: c_CoC662zjZbNf2ZDNzNBqMM
          source_id: s_s6gPntU8W5sdHT2PvrTKdm
          stance: supports
          locator: CBDB:456351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456351）
          source: &a1
            id: s_s6gPntU8W5sdHT2PvrTKdm
            source_type: api_record
            title: 中国历代人物传记资料库：王啓元（CBDB 456351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456351&o=json
            external_identifier: CBDB:456351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58bkMzMRg2pS3YVfbTrKpH
        subject_person_id: p_oYQqQjDjho2dUWyTZZBLKv
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
        - id: cs_4WJDgfDbdMGM9tFrqpjSU1
          claim_id: c_58bkMzMRg2pS3YVfbTrKpH
          source_id: s_s6gPntU8W5sdHT2PvrTKdm
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

# 王啓元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啓元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啓元（CBDB 456351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456351&o=json)
