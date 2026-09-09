---
schema: wang-person/v1
id: p_wgpyxePiLLDG1wnoBqDFCB
status: active
merged_into: null
display_name: 王倓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mhq8JAv5Hc4ddChmQkDCh5
        subject_person_id: p_wgpyxePiLLDG1wnoBqDFCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98XWRTMMZM5ti294e8Dq2B
          claim_id: c_mhq8JAv5Hc4ddChmQkDCh5
          source_id: s_vY4QVF9G9VzUvSzLCDFYoP
          stance: supports
          locator: CBDB:342471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342471）
          source: &a1
            id: s_vY4QVF9G9VzUvSzLCDFYoP
            source_type: api_record
            title: 中国历代人物传记资料库：王倓（CBDB 342471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342471&o=json
            external_identifier: CBDB:342471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SbmReHP4KKCF2tyRi3z3Yu
        subject_person_id: p_wgpyxePiLLDG1wnoBqDFCB
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
        - id: cs_w7ouMmWiZSsPmkdT73pjkc
          claim_id: c_SbmReHP4KKCF2tyRi3z3Yu
          source_id: s_vY4QVF9G9VzUvSzLCDFYoP
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

# 王倓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倓（CBDB 342471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342471&o=json)
