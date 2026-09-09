---
schema: wang-person/v1
id: p_qvK4U2tuq4G2w8MnMS8qmH
status: active
merged_into: null
display_name: 王大猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TtwG6wQxrs4yq8fvF2Se3c
        subject_person_id: p_qvK4U2tuq4G2w8MnMS8qmH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BtbQRoVHkB3J8PRwbg5iQV
          claim_id: c_TtwG6wQxrs4yq8fvF2Se3c
          source_id: s_QLRB4msakCTGNWvCLNjsET
          stance: supports
          locator: CBDB:509807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509807）
          source: &a1
            id: s_QLRB4msakCTGNWvCLNjsET
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 509807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509807&o=json
            external_identifier: CBDB:509807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZfJJKSB5GwLcXPUH8gDSpu
        subject_person_id: p_qvK4U2tuq4G2w8MnMS8qmH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TsaAaRkzPCvVLXydaoHPDj
          claim_id: c_ZfJJKSB5GwLcXPUH8gDSpu
          source_id: s_QLRB4msakCTGNWvCLNjsET
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

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大猷（CBDB 509807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509807&o=json)
