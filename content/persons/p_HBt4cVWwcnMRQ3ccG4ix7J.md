---
schema: wang-person/v1
id: p_HBt4cVWwcnMRQ3ccG4ix7J
status: active
merged_into: null
display_name: 王承泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qi66EFnPTMupp7VVYKNiC6
        subject_person_id: p_HBt4cVWwcnMRQ3ccG4ix7J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HsXFeEW5ReUq2jZJV2DBnH
          claim_id: c_qi66EFnPTMupp7VVYKNiC6
          source_id: s_Nt5DyHtPmKpzXAPeADKjnu
          stance: supports
          locator: CBDB:453010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453010）
          source: &a1
            id: s_Nt5DyHtPmKpzXAPeADKjnu
            source_type: api_record
            title: 中国历代人物传记资料库：王承泰（CBDB 453010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453010&o=json
            external_identifier: CBDB:453010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4NUkZHQiNBCaB73r2rT49s
        subject_person_id: p_HBt4cVWwcnMRQ3ccG4ix7J
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
        - id: cs_pSaT5h382wPAFQYRnAVA4p
          claim_id: c_4NUkZHQiNBCaB73r2rT49s
          source_id: s_Nt5DyHtPmKpzXAPeADKjnu
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

# 王承泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承泰（CBDB 453010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453010&o=json)
