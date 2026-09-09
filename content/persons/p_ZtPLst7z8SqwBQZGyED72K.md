---
schema: wang-person/v1
id: p_ZtPLst7z8SqwBQZGyED72K
status: active
merged_into: null
display_name: 王漸逵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HkJD11wqoi32B4HRMLExY1
        subject_person_id: p_ZtPLst7z8SqwBQZGyED72K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_maHEAcHYiB8eVD7QxLcgZT
          claim_id: c_HkJD11wqoi32B4HRMLExY1
          source_id: s_BN7xnKk26q4D4Jj4ZHESJA
          stance: supports
          locator: CBDB:327867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327867）
          source: &a1
            id: s_BN7xnKk26q4D4Jj4ZHESJA
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逵（CBDB 327867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327867&o=json
            external_identifier: CBDB:327867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_To1MoHqZdC2e8TKFAn5joY
        subject_person_id: p_ZtPLst7z8SqwBQZGyED72K
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
        - id: cs_Api6DFn6tt8gpVJTZjF9NA
          claim_id: c_To1MoHqZdC2e8TKFAn5joY
          source_id: s_BN7xnKk26q4D4Jj4ZHESJA
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

# 王漸逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸逵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漸逵（CBDB 327867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327867&o=json)
