---
schema: wang-person/v1
id: p_9F5Ud63XiMgFeULKLbATwC
status: active
merged_into: null
display_name: 王慕貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbWjMNUgYTNdEe7ZGXYggT
        subject_person_id: p_9F5Ud63XiMgFeULKLbATwC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1QKtcXpQwHPqJWEQJYX4bd
          claim_id: c_wbWjMNUgYTNdEe7ZGXYggT
          source_id: s_EFffYB7qpm3LH7yn9Z1QBs
          stance: supports
          locator: CBDB:568796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568796）
          source: &a1
            id: s_EFffYB7qpm3LH7yn9Z1QBs
            source_type: api_record
            title: 中国历代人物传记资料库：王慕貞（CBDB 568796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568796&o=json
            external_identifier: CBDB:568796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFkMxAcEA7zpQ4reGD8EHM
        subject_person_id: p_9F5Ud63XiMgFeULKLbATwC
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
        - id: cs_4Du6JiqGJR9ofmDC63oBUi
          claim_id: c_KFkMxAcEA7zpQ4reGD8EHM
          source_id: s_EFffYB7qpm3LH7yn9Z1QBs
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

# 王慕貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慕貞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慕貞（CBDB 568796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568796&o=json)
