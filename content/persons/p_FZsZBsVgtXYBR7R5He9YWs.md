---
schema: wang-person/v1
id: p_FZsZBsVgtXYBR7R5He9YWs
status: active
merged_into: null
display_name: 王嘉言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wiHKA64UX2exGiFJcc9GE9
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NTdbZL4nhKmV8zBqQRgVa4
          claim_id: c_wiHKA64UX2exGiFJcc9GE9
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
          stance: supports
          locator: CBDB:204590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204590）
          source: &a1
            id: s_GqRYTmjNU7r5RD5CwX5fQE
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 204590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204590&o=json
            external_identifier: CBDB:204590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ce2jJuDMCsvLRNonZGE8qr
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mf6o5ucQQiDF6oCxTg4Q7B
          claim_id: c_Ce2jJuDMCsvLRNonZGE8qr
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
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
        id: c_uUv8XmvCbK7NK1vL3UbAgq
        subject_person_id: p_FZsZBsVgtXYBR7R5He9YWs
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
        - id: cs_tBc7BdN8KZSNtibE9KrQNF
          claim_id: c_uUv8XmvCbK7NK1vL3UbAgq
          source_id: s_GqRYTmjNU7r5RD5CwX5fQE
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

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 204590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204590&o=json)
