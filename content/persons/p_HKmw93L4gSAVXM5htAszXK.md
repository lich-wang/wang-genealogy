---
schema: wang-person/v1
id: p_HKmw93L4gSAVXM5htAszXK
status: active
merged_into: null
display_name: 王仁東
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eYooZz8W23RHqG22TJ7H17
        subject_person_id: p_HKmw93L4gSAVXM5htAszXK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁東
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CmBWmD5Xkxuv6CXrYGuw5p
          claim_id: c_eYooZz8W23RHqG22TJ7H17
          source_id: s_FzrG2PjP4EcX6Q21zjrn66
          stance: supports
          locator: CBDB:635886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635886）
          source: &a1
            id: s_FzrG2PjP4EcX6Q21zjrn66
            source_type: api_record
            title: 中国历代人物传记资料库：王仁東（CBDB 635886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635886&o=json
            external_identifier: CBDB:635886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EuuosaJA1i3QB6b9K5RZyo
        subject_person_id: p_HKmw93L4gSAVXM5htAszXK
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
        - id: cs_AZS3rz5A41tfJ624iAYpib
          claim_id: c_EuuosaJA1i3QB6b9K5RZyo
          source_id: s_FzrG2PjP4EcX6Q21zjrn66
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

# 王仁東

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁東 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁東（CBDB 635886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635886&o=json)
