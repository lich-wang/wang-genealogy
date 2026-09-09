---
schema: wang-person/v1
id: p_UHLHoNZF85JBmCiXBajrMJ
status: active
merged_into: null
display_name: 王國光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8q7DW1uBC52UHvNuTQ4ear
        subject_person_id: p_UHLHoNZF85JBmCiXBajrMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Utm66FNw9CgDGXWEoNa1HC
          claim_id: c_8q7DW1uBC52UHvNuTQ4ear
          source_id: s_DFmsf6VCcGu2LTHc1oJXgW
          stance: supports
          locator: CBDB:539246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539246）
          source: &a1
            id: s_DFmsf6VCcGu2LTHc1oJXgW
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 539246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539246&o=json
            external_identifier: CBDB:539246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lr2A5s22mFEHTw9QY5tbMv
        subject_person_id: p_UHLHoNZF85JBmCiXBajrMJ
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
        - id: cs_5sPhKEDCH5AV37gQMH8fSd
          claim_id: c_Lr2A5s22mFEHTw9QY5tbMv
          source_id: s_DFmsf6VCcGu2LTHc1oJXgW
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

# 王國光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國光 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國光（CBDB 539246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539246&o=json)
