---
schema: wang-person/v1
id: p_79wXK6gbHuZ7cHE3oXv6U8
status: active
merged_into: null
display_name: 王翊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mxzZs4z4MDMmYN3xCGmtkj
        subject_person_id: p_79wXK6gbHuZ7cHE3oXv6U8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jowPLFCK57d4PfbLX5zFLH
          claim_id: c_mxzZs4z4MDMmYN3xCGmtkj
          source_id: s_MdiD9dtdgWUnGHDS2R2BrM
          stance: supports
          locator: CBDB:341687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341687）
          source: &a1
            id: s_MdiD9dtdgWUnGHDS2R2BrM
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 341687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341687&o=json
            external_identifier: CBDB:341687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E1q5fMcy2KhXJBdAp55xJQ
        subject_person_id: p_79wXK6gbHuZ7cHE3oXv6U8
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
        - id: cs_ru1SXQJZftTRUYCyE4sqNz
          claim_id: c_E1q5fMcy2KhXJBdAp55xJQ
          source_id: s_MdiD9dtdgWUnGHDS2R2BrM
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

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 341687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341687&o=json)
