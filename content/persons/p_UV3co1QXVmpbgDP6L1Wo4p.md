---
schema: wang-person/v1
id: p_UV3co1QXVmpbgDP6L1Wo4p
status: active
merged_into: null
display_name: 王師
revision: 3
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
  parents:
    - claim:
        id: c_Q0cgYQ8beIvdBG9qkYCi3-
        subject_person_id: p_kaFXcKYWcJzFn9BzKN5G5P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RdLMFlcEua3MMAxcPZ_g-Z
          claim_id: c_Q0cgYQ8beIvdBG9qkYCi3-
          source_id: s_kEgQzQXGiMVanGsGCriCxG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 55：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEgQzQXGiMVanGsGCriCxG
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 139058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json
            external_identifier: CBDB:139058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kaFXcKYWcJzFn9BzKN5G5P
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children:
    - claim:
        id: c_pCW0M8HQcu-0QycN_00ThX
        subject_person_id: p_UV3co1QXVmpbgDP6L1Wo4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dN_2faMH4JV6odZbcA9MfR
          claim_id: c_pCW0M8HQcu-0QycN_00ThX
          source_id: s_n8Vax9v2qoXTj5XWxFak2K
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 55：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n8Vax9v2qoXTj5XWxFak2K
            source_type: api_record
            title: 中国历代人物传记资料库：王府兒（CBDB 148283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148283&o=json
            external_identifier: CBDB:148283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_G2XFpBRY8Ki5ZsVdfBfVZZ
        status: active
        display_name: 王府兒
        merged_into_person_id: null
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
| parents | p_kaFXcKYWcJzFn9BzKN5G5P | 王禮 | accepted |
| children | p_G2XFpBRY8Ki5ZsVdfBfVZZ | 王府兒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王府兒（CBDB 148283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148283&o=json)
- [中国历代人物传记资料库：王禮（CBDB 139058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139058&o=json)
- [中国历代人物传记资料库：王師（CBDB 139534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139534&o=json)
