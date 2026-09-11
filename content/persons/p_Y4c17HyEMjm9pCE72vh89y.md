---
schema: wang-person/v1
id: p_Y4c17HyEMjm9pCE72vh89y
status: active
merged_into: null
display_name: 程氏
revision: 1
cbdb_id: 37634
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TbSk2Ft66pRDkYNSHsjkDb
        subject_person_id: p_Y4c17HyEMjm9pCE72vh89y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程氏（卒於1179），宋人物。籍贯鄱陽。（中国历代人物传记资料库 CBDB 37634）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QIKfI2WcwHs_MQwI8Khsl0
          claim_id: c_TbSk2Ft66pRDkYNSHsjkDb
          source_id: s_0btNhHnNKpIKgXqjtF7lqV
          stance: supports
          locator: CBDB:37634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_0btNhHnNKpIKgXqjtF7lqV
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王彥暉妻)（CBDB 37634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37634&o=json
            external_identifier: CBDB:37634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8uKSnVU0x3b2y-pNfwHHtj
        subject_person_id: p_Y4c17HyEMjm9pCE72vh89y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0EhA4TpAVZPo8KUwE7tbqW
          claim_id: c_8uKSnVU0x3b2y-pNfwHHtj
          source_id: s_0btNhHnNKpIKgXqjtF7lqV
          stance: supports
          locator: CBDB:37634
          quotation: null
          interpretation_note: CBDB 明确记录的王彥暉配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_V6_7p7zxy0optZiS8GLEHV
        subject_person_id: p_wJS1Szb9T4ktRk7N1yKT5T
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Y4c17HyEMjm9pCE72vh89y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ceQJEQoGZSSMgd_1_wnm7k
          claim_id: c_V6_7p7zxy0optZiS8GLEHV
          source_id: s_0btNhHnNKpIKgXqjtF7lqV
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1761;1762：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJS1Szb9T4ktRk7N1yKT5T
        status: active
        display_name: 王彥暉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 程氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 程氏（卒於1179），宋人物。籍贯鄱陽。（中国历代人物传记资料库 CBDB 37634） | accepted |
| name.primary | 程氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wJS1Szb9T4ktRk7N1yKT5T | 王彥暉 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王彥暉妻)（CBDB 37634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37634&o=json)
