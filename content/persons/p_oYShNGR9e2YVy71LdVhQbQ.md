---
schema: wang-person/v1
id: p_oYShNGR9e2YVy71LdVhQbQ
status: active
merged_into: null
display_name: 王一鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vknrmGxd378yNs9GmLo2X5
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BGkVTjip4Fz1W8HFpR9TdB
          claim_id: c_vknrmGxd378yNs9GmLo2X5
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: CBDB:207264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207264）
          source: &a1
            id: s_Mrpj37C8DH4qVHGNGQntYM
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 207264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json
            external_identifier: CBDB:207264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dL8HSJiFE7W7GFd8B7u7zx
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNB68Ldr8VUeH7p7yqX2mt
          claim_id: c_dL8HSJiFE7W7GFd8B7u7zx
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xVu5FWybY5cNgNAXGQzBWq
        subject_person_id: p_oYShNGR9e2YVy71LdVhQbQ
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
        - id: cs_h39Fw2AhEGCsijmjAkbtKV
          claim_id: c_xVu5FWybY5cNgNAXGQzBWq
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
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

# 王一鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳴 | accepted |
| birth.date | 1564年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 207264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json)
