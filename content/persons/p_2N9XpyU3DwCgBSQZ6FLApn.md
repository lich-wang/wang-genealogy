---
schema: wang-person/v1
id: p_2N9XpyU3DwCgBSQZ6FLApn
status: active
merged_into: null
display_name: 王明哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhrxEDU8YfaQ4cxXZtDiwJ
        subject_person_id: p_2N9XpyU3DwCgBSQZ6FLApn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zbA7Jg8YVKeAcBa88uEf18
          claim_id: c_zhrxEDU8YfaQ4cxXZtDiwJ
          source_id: s_CHrT7AkTzxzPUCzWtaHNBx
          stance: supports
          locator: CBDB:166619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166619）
          source: &a1
            id: s_CHrT7AkTzxzPUCzWtaHNBx
            source_type: api_record
            title: 中国历代人物传记资料库：王明哲（CBDB 166619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166619&o=json
            external_identifier: CBDB:166619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JGnrP8Ny5QT8TunzXBYNXM
        subject_person_id: p_2N9XpyU3DwCgBSQZ6FLApn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明哲，唐人物。曾任內謁者監。（中国历代人物传记资料库 CBDB 166619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5yfw0o1Ul-kwi7G21Ntfop
          claim_id: c_JGnrP8Ny5QT8TunzXBYNXM
          source_id: s_CHrT7AkTzxzPUCzWtaHNBx
          stance: supports
          locator: CBDB:166619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u5fvmpN5bxpOitUE4KF2Gg
        subject_person_id: p_fMZyWS3dvGJ6dk4fbtE9VD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2N9XpyU3DwCgBSQZ6FLApn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kypdncsx89X0JS-r48_TcK
          claim_id: c_u5fvmpN5bxpOitUE4KF2Gg
          source_id: s_CHrT7AkTzxzPUCzWtaHNBx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fMZyWS3dvGJ6dk4fbtE9VD
        status: active
        display_name: 王游仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明哲 | accepted |
| bio.summary | 王明哲，唐人物。曾任內謁者監。（中国历代人物传记资料库 CBDB 166619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fMZyWS3dvGJ6dk4fbtE9VD | 王游仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明哲（CBDB 166619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166619&o=json)
