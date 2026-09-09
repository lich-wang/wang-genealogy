---
schema: wang-person/v1
id: p_aVBRUV8GcfpaRKGo24ameE
status: active
merged_into: null
display_name: 王行旨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7pdA6HyzSX5N846iVY8nnJ
        subject_person_id: p_aVBRUV8GcfpaRKGo24ameE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行旨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bg8hY2S4ZWcabUJKQA9p3
          claim_id: c_7pdA6HyzSX5N846iVY8nnJ
          source_id: s_dNyMTBNAadYhLKDbvj4qh9
          stance: supports
          locator: CBDB:186056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186056）
          source: &a1
            id: s_dNyMTBNAadYhLKDbvj4qh9
            source_type: api_record
            title: 中国历代人物传记资料库：王行旨（CBDB 186056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186056&o=json
            external_identifier: CBDB:186056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NkgxHsrgDWbfGtcE7TLECv
        subject_person_id: p_aVBRUV8GcfpaRKGo24ameE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7bLKNvPb5WMMZhWT3QqLh
          claim_id: c_NkgxHsrgDWbfGtcE7TLECv
          source_id: s_dNyMTBNAadYhLKDbvj4qh9
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
        id: c_yZEQxqiJ1Gx43scstJrW6i
        subject_person_id: p_aVBRUV8GcfpaRKGo24ameE
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
        - id: cs_3tseAkWYEr6wE9vbskQUrT
          claim_id: c_yZEQxqiJ1Gx43scstJrW6i
          source_id: s_dNyMTBNAadYhLKDbvj4qh9
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

# 王行旨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行旨 | accepted |
| death.date | 857年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行旨（CBDB 186056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186056&o=json)
