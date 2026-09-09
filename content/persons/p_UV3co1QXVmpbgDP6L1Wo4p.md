---
schema: wang-person/v1
id: p_UV3co1QXVmpbgDP6L1Wo4p
status: active
merged_into: null
display_name: 王師
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NmWGtj8B7SZEevCSUQYWSq
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D7KzxBbYqqMqGxFpds5HPC
          claim_id: c_NmWGtj8B7SZEevCSUQYWSq
          source_id: s_zXrMSjZ8QJzFXbBKbCTfUi
          stance: supports
          locator: CBDB:139534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139534）
          source: &a1
            id: s_zXrMSjZ8QJzFXbBKbCTfUi
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 139534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139534&o=json
            external_identifier: CBDB:139534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xLqJfQs8rkPUdRKJfUApk4
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 630年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBFArfp2PqKNH72zfznBDj
          claim_id: c_xLqJfQs8rkPUdRKJfUApk4
          source_id: s_zXrMSjZ8QJzFXbBKbCTfUi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ixNQAP2LkJiCaGxJC8Wkpy
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LhYMzt7vJEMb9oQb1S3tRp
          claim_id: c_ixNQAP2LkJiCaGxJC8Wkpy
          source_id: s_zXrMSjZ8QJzFXbBKbCTfUi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pjJNNPs51JJABPim1Kp1Pi
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHXiEdbShZ3s8ERMr9N7LG
          claim_id: c_pjJNNPs51JJABPim1Kp1Pi
          source_id: s_zXrMSjZ8QJzFXbBKbCTfUi
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

# 王師

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師 | accepted |
| birth.date | 630年 | accepted |
| death.date | 667年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 139534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139534&o=json)
