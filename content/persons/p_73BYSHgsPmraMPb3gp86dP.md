---
schema: wang-person/v1
id: p_73BYSHgsPmraMPb3gp86dP
status: active
merged_into: null
display_name: 王贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5BoYtgq72u1uE5PPM7Fctv
        subject_person_id: p_73BYSHgsPmraMPb3gp86dP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fdipQCCowcN6FHaqTpZMTS
          claim_id: c_5BoYtgq72u1uE5PPM7Fctv
          source_id: s_Ee1dvfyP9ckvZ6mKdX1QBc
          stance: supports
          locator: CBDB:139547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139547）
          source: &a1
            id: s_Ee1dvfyP9ckvZ6mKdX1QBc
            source_type: api_record
            title: 中国历代人物传记资料库：王贊（CBDB 139547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139547&o=json
            external_identifier: CBDB:139547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_P2c6NuKiAn27dwD6SjRWW3
        subject_person_id: p_73BYSHgsPmraMPb3gp86dP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 652年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QbFYsv8HrM4qFSynzHTDD
          claim_id: c_P2c6NuKiAn27dwD6SjRWW3
          source_id: s_Ee1dvfyP9ckvZ6mKdX1QBc
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
        id: c_xaYi6J5uCbdyQDT5SXMBhD
        subject_person_id: p_73BYSHgsPmraMPb3gp86dP
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
        - id: cs_1nyF4FCYPEJvvjFseivCLw
          claim_id: c_xaYi6J5uCbdyQDT5SXMBhD
          source_id: s_Ee1dvfyP9ckvZ6mKdX1QBc
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

# 王贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊 | accepted |
| death.date | 652年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊（CBDB 139547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139547&o=json)
