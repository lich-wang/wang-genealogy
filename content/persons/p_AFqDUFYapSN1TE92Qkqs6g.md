---
schema: wang-person/v1
id: p_AFqDUFYapSN1TE92Qkqs6g
status: active
merged_into: null
display_name: 王舊康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_suJYN6MxMwUu3qJzjn56Yg
        subject_person_id: p_AFqDUFYapSN1TE92Qkqs6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舊康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gw8FpMTYi9WyoyR7M8CNkj
          claim_id: c_suJYN6MxMwUu3qJzjn56Yg
          source_id: s_Pvxb3d3HzhBGyq8pN33WWY
          stance: supports
          locator: CBDB:640045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640045）
          source: &a1
            id: s_Pvxb3d3HzhBGyq8pN33WWY
            source_type: api_record
            title: 中国历代人物传记资料库：王舊康（CBDB 640045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640045&o=json
            external_identifier: CBDB:640045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4AJfb5hUPo5ENKDPLEJu2B
        subject_person_id: p_AFqDUFYapSN1TE92Qkqs6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舊康，清人物。籍贯天津，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 640045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7oDyFuip1zAsOV7l61f3cG
          claim_id: c_4AJfb5hUPo5ENKDPLEJu2B
          source_id: s_Pvxb3d3HzhBGyq8pN33WWY
          stance: supports
          locator: CBDB:640045
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

# 王舊康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舊康 | accepted |
| bio.summary | 王舊康，清人物。籍贯天津，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 640045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舊康（CBDB 640045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640045&o=json)
