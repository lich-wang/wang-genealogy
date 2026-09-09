---
schema: wang-person/v1
id: p_Tp6u4NeRZK2nHQRWxdHQEK
status: active
merged_into: null
display_name: 王僧朗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KRMfW91xBf99XDrAQMHxoP
        subject_person_id: p_Tp6u4NeRZK2nHQRWxdHQEK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QyANFSCcvBtMquSpYbpwkX
          claim_id: c_KRMfW91xBf99XDrAQMHxoP
          source_id: s_YU3bCCd6H6KGJWBbn2SjKi
          stance: supports
          locator: CBDB:468166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468166）
          source: &a1
            id: s_YU3bCCd6H6KGJWBbn2SjKi
            source_type: api_record
            title: 中国历代人物传记资料库：王僧朗（CBDB 468166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468166&o=json
            external_identifier: CBDB:468166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2UV1ryWxa93YGj8ioXfwvi
        subject_person_id: p_Tp6u4NeRZK2nHQRWxdHQEK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋(劉)人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLSqxbKVL8AEkxxo56KMpJ
          claim_id: c_2UV1ryWxa93YGj8ioXfwvi
          source_id: s_YU3bCCd6H6KGJWBbn2SjKi
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

# 王僧朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僧朗 | accepted |
| bio.summary | CBDB 记载为宋(劉)人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僧朗（CBDB 468166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468166&o=json)
