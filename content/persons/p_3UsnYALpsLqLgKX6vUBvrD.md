---
schema: wang-person/v1
id: p_3UsnYALpsLqLgKX6vUBvrD
status: active
merged_into: null
display_name: 王淇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vyX6LgyH8nxw59RF8xer6p
        subject_person_id: p_3UsnYALpsLqLgKX6vUBvrD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTUN48nB1AWgEspNy7rM6u
          claim_id: c_vyX6LgyH8nxw59RF8xer6p
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
          stance: supports
          locator: CBDB:165256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165256）
          source: &a1
            id: s_dRTXLFNFKDpJZN66tKKwpB
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 165256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json
            external_identifier: CBDB:165256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QrAM3r4293N3Au9DS8tQS
        subject_person_id: p_3UsnYALpsLqLgKX6vUBvrD
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
        - id: cs_Tij8Md3dudZXmHJ1S7AnBF
          claim_id: c_1QrAM3r4293N3Au9DS8tQS
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
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

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 165256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json)
