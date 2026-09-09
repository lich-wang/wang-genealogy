---
schema: wang-person/v1
id: p_kXhN1ZZdd8m99X37QRa5g5
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4s5CX2SecMbc7ALzR39tb2
        subject_person_id: p_kXhN1ZZdd8m99X37QRa5g5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3MfCptfM6PeQV8JwK4k24
          claim_id: c_4s5CX2SecMbc7ALzR39tb2
          source_id: s_HjWzfB2aKDtMEeKvqPq4DS
          stance: supports
          locator: CBDB:28728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28728）
          source: &a1
            id: s_HjWzfB2aKDtMEeKvqPq4DS
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 28728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28728&o=json
            external_identifier: CBDB:28728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RvdU2Ab2C51LRQBJbN1ZfP
        subject_person_id: p_kXhN1ZZdd8m99X37QRa5g5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F68aUZCPs42UU9F21LGnpE
          claim_id: c_RvdU2Ab2C51LRQBJbN1ZfP
          source_id: s_HjWzfB2aKDtMEeKvqPq4DS
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 28728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28728&o=json)
