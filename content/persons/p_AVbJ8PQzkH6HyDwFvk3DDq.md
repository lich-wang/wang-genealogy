---
schema: wang-person/v1
id: p_AVbJ8PQzkH6HyDwFvk3DDq
status: active
merged_into: null
display_name: 王度
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nP2VWqWEwQLWDzKjoxFkLX
        subject_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_61dDVpzrMKCFHZHsdesz7Y
          claim_id: c_nP2VWqWEwQLWDzKjoxFkLX
          source_id: s_RT3YnR43QP4wp8cNS83TG6
          stance: supports
          locator: CBDB:25489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25489）
          source: &a1
            id: s_RT3YnR43QP4wp8cNS83TG6
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 25489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25489&o=json
            external_identifier: CBDB:25489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HyBFHYpYaBfMtSScff9CAn
        subject_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1157年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZDV7XnWavPQJA4AUCeND3C
          claim_id: c_HyBFHYpYaBfMtSScff9CAn
          source_id: s_RT3YnR43QP4wp8cNS83TG6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ro7vfFk3TmtxjjEEZvE1E4
        subject_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8YVJty7CtgW6G6V5TXK1N
          claim_id: c_Ro7vfFk3TmtxjjEEZvE1E4
          source_id: s_RT3YnR43QP4wp8cNS83TG6
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
        id: c_FGM9ryA5EEJbB4AMMFRJi1
        subject_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t81Z5ZrnCbNBu2U53NWQ5R
          claim_id: c_FGM9ryA5EEJbB4AMMFRJi1
          source_id: s_RT3YnR43QP4wp8cNS83TG6
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
        id: c_1RKqkaQwXBF-gfW3apLfnS
        subject_person_id: p_mw1C15aFtzQ5L6FdHoKc5w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AVbJ8PQzkH6HyDwFvk3DDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4VOZum02JoBWlGh2tf-O0
          claim_id: c_1RKqkaQwXBF-gfW3apLfnS
          source_id: s_RT3YnR43QP4wp8cNS83TG6
          stance: supports
          locator: CBDB 双向互证（父 王俊民 ⇄ 子 王度）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mw1C15aFtzQ5L6FdHoKc5w
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| birth.date | 1157年 | accepted |
| death.date | 1213年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mw1C15aFtzQ5L6FdHoKc5w | 王俊民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 25489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25489&o=json)
