---
schema: wang-person/v1
id: p_NApTu6REA667pGQrpbiBio
status: active
merged_into: null
display_name: 王照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Me35s3eheYsoGNyQuLns5h
        subject_person_id: p_NApTu6REA667pGQrpbiBio
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RCAA1Ebwdu6AeA141GhZ1T
          claim_id: c_Me35s3eheYsoGNyQuLns5h
          source_id: s_P2oRB167RNANbbetT2qUW8
          stance: supports
          locator: CBDB:71249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71249）
          source: &a1
            id: s_P2oRB167RNANbbetT2qUW8
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 71249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71249&o=json
            external_identifier: CBDB:71249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HkGUH6eD14sW72diMf633g
        subject_person_id: p_NApTu6REA667pGQrpbiBio
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stfJrC8WupAAZfZA5M71x1
          claim_id: c_HkGUH6eD14sW72diMf633g
          source_id: s_P2oRB167RNANbbetT2qUW8
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
        id: c_Vie3WpJNQ6x19uc38aWgCs
        subject_person_id: p_NApTu6REA667pGQrpbiBio
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1933年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3u81vAx4vWyaWQ7uqbhoa
          claim_id: c_Vie3WpJNQ6x19uc38aWgCs
          source_id: s_P2oRB167RNANbbetT2qUW8
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
        id: c_jWMfhPsQEeN2uce8M4N9PS
        subject_person_id: p_NApTu6REA667pGQrpbiBio
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MdBjh9wK78ret51gx6Nsvh
          claim_id: c_jWMfhPsQEeN2uce8M4N9PS
          source_id: s_P2oRB167RNANbbetT2qUW8
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

# 王照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王照 | accepted |
| birth.date | 1859年 | accepted |
| death.date | 1933年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王照（CBDB 71249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71249&o=json)
