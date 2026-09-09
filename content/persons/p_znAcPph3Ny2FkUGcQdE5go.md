---
schema: wang-person/v1
id: p_znAcPph3Ny2FkUGcQdE5go
status: active
merged_into: null
display_name: 王珩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bKb4VToGCFT8kwHWYYHbF7
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N8bYBf25k4JzD7GDvU7pmd
          claim_id: c_bKb4VToGCFT8kwHWYYHbF7
          source_id: s_3pMW92dsryxvSXX1Zst7o1
          stance: supports
          locator: CBDB:202648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202648）
          source: &a1
            id: s_3pMW92dsryxvSXX1Zst7o1
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 202648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202648&o=json
            external_identifier: CBDB:202648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EESE87ZxciH3F2YgUQGMCX
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Re7AaBCTqtFiygTGv7Zvm4
          claim_id: c_EESE87ZxciH3F2YgUQGMCX
          source_id: s_3pMW92dsryxvSXX1Zst7o1
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
        id: c_Vrw8au2HZX7RsVgyhJbcss
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
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
        - id: cs_PZj41WysBaK8hqMeGuWebi
          claim_id: c_Vrw8au2HZX7RsVgyhJbcss
          source_id: s_3pMW92dsryxvSXX1Zst7o1
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

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| birth.date | 1502年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 202648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202648&o=json)
