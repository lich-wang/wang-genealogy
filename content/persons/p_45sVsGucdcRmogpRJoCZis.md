---
schema: wang-person/v1
id: p_45sVsGucdcRmogpRJoCZis
status: active
merged_into: null
display_name: 王敬仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2eMe5YW6uRkf5yL3Agtwf
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s1cXuRG7FJry4y2LRZjUS4
          claim_id: c_d2eMe5YW6uRkf5yL3Agtwf
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: CBDB:141578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141578）
          source: &a1
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8SC2F3rEh9JndrLL7eYAWL
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBTCp3mb7yQLfZLLxZwX6M
          claim_id: c_8SC2F3rEh9JndrLL7eYAWL
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
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
        id: c_WNvvCBgLvwhKE1QJEi5aP6
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wACNdMbWcctMst8Q2XfpEe
          claim_id: c_WNvvCBgLvwhKE1QJEi5aP6
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
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
        id: c_Dsap8BG9oNxEUCVPxkjM9V
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
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
        - id: cs_iRGNGvE5ayrRwSgMLmxpLF
          claim_id: c_Dsap8BG9oNxEUCVPxkjM9V
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
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

# 王敬仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬仲 | accepted |
| birth.date | 759年 | accepted |
| death.date | 826年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
