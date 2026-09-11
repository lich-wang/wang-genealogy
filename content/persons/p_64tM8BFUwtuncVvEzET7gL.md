---
schema: wang-person/v1
id: p_64tM8BFUwtuncVvEzET7gL
status: active
merged_into: null
display_name: 王鼐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jv38FZhK3RooNzScWtQj8h
        subject_person_id: p_64tM8BFUwtuncVvEzET7gL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDcVLeNxD9EPTRPPbeS4mY
          claim_id: c_Jv38FZhK3RooNzScWtQj8h
          source_id: s_fUTWQ1rXxoV3oH2dCAkqpi
          stance: supports
          locator: CBDB:175726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175726）
          source: &a1
            id: s_fUTWQ1rXxoV3oH2dCAkqpi
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 175726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175726&o=json
            external_identifier: CBDB:175726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B1LHvNBYnZXg67894zBGtp
        subject_person_id: p_64tM8BFUwtuncVvEzET7gL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sk9oVaCXYALzStntidhiT6
          claim_id: c_B1LHvNBYnZXg67894zBGtp
          source_id: s_fUTWQ1rXxoV3oH2dCAkqpi
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
        id: c_9bSgNj1hKmgU2jjJwoPCxW
        subject_person_id: p_64tM8BFUwtuncVvEzET7gL
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
        - id: cs_792Q1bdLEDbyX3CuAiSs5J
          claim_id: c_9bSgNj1hKmgU2jjJwoPCxW
          source_id: s_fUTWQ1rXxoV3oH2dCAkqpi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZYF4PAf6l4tMs33yEl8bR0
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_64tM8BFUwtuncVvEzET7gL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zaCj1e6edj1HHRFKP1iOqn
          claim_id: c_ZYF4PAf6l4tMs33yEl8bR0
          source_id: s_fUTWQ1rXxoV3oH2dCAkqpi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pzNEWP653ER35cKhpMWTv7
        status: active
        display_name: 王翃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| death.date | 827年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pzNEWP653ER35cKhpMWTv7 | 王翃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 175726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175726&o=json)
