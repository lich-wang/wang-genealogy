---
schema: wang-person/v1
id: p_dN6eueepMpg3UCam3AKX6d
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rs79GqB3LN5BrKhEUuAt9r
        subject_person_id: p_dN6eueepMpg3UCam3AKX6d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f7FA1Lzypbzxk3jvcFZjLQ
          claim_id: c_rs79GqB3LN5BrKhEUuAt9r
          source_id: s_62AKWYBwwCofNeJMGGJf6f
          stance: supports
          locator: CBDB:380844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380844）
          source: &a1
            id: s_62AKWYBwwCofNeJMGGJf6f
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 380844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380844&o=json
            external_identifier: CBDB:380844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UJAoAuQD7NV2nb94WEpPfu
        subject_person_id: p_dN6eueepMpg3UCam3AKX6d
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
        - id: cs_N5snhEswbw3G6SrdHYoa5Y
          claim_id: c_UJAoAuQD7NV2nb94WEpPfu
          source_id: s_62AKWYBwwCofNeJMGGJf6f
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 380844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380844&o=json)
