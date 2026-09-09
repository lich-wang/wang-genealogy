---
schema: wang-person/v1
id: p_fkPrTjdJbFkoRT3sbryChT
status: active
merged_into: null
display_name: 王星榆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NSaoYxEbdEEQtHy96Kb7N8
        subject_person_id: p_fkPrTjdJbFkoRT3sbryChT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星榆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vXdk69S4C1MdqehKAUaf3d
          claim_id: c_NSaoYxEbdEEQtHy96Kb7N8
          source_id: s_XnQYdJpQvvPt8ELh8yvyDi
          stance: supports
          locator: CBDB:71871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71871）
          source: &a1
            id: s_XnQYdJpQvvPt8ELh8yvyDi
            source_type: api_record
            title: 中国历代人物传记资料库：王星榆（CBDB 71871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71871&o=json
            external_identifier: CBDB:71871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_euzLnF7J18oigVGkqzWu8g
        subject_person_id: p_fkPrTjdJbFkoRT3sbryChT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1771年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C64fW37eSnSHLKE9kY5CK5
          claim_id: c_euzLnF7J18oigVGkqzWu8g
          source_id: s_XnQYdJpQvvPt8ELh8yvyDi
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
        id: c_EU4FWXcLJkp9GiXR4Tje4E
        subject_person_id: p_fkPrTjdJbFkoRT3sbryChT
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
        - id: cs_AaEsLR5YmBZsTR2RWNE683
          claim_id: c_EU4FWXcLJkp9GiXR4Tje4E
          source_id: s_XnQYdJpQvvPt8ELh8yvyDi
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

# 王星榆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星榆 | accepted |
| birth.date | 1771年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王星榆（CBDB 71871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71871&o=json)
