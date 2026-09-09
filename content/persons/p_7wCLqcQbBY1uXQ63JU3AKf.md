---
schema: wang-person/v1
id: p_7wCLqcQbBY1uXQ63JU3AKf
status: active
merged_into: null
display_name: 王訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yFQubronUek5iFWvT7dxEp
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pGtqFJWRMRDZ85DdYPpDxL
          claim_id: c_yFQubronUek5iFWvT7dxEp
          source_id: s_opASS8N2VcwCXB51vGEx7L
          stance: supports
          locator: CBDB:141157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141157）
          source: &a1
            id: s_opASS8N2VcwCXB51vGEx7L
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 141157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json
            external_identifier: CBDB:141157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Jc9Zqu8Dofmg9FKP1ExmJT
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDShHjjjyXoFix8cUr8irc
          claim_id: c_Jc9Zqu8Dofmg9FKP1ExmJT
          source_id: s_opASS8N2VcwCXB51vGEx7L
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
        id: c_KuN3XJsiDP379mX9h63SN6
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 767年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EiG8RdNx42Dp1YgpNUj13E
          claim_id: c_KuN3XJsiDP379mX9h63SN6
          source_id: s_opASS8N2VcwCXB51vGEx7L
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
        id: c_izeU2G7hzFGC9TsoyNJ2Kj
        subject_person_id: p_7wCLqcQbBY1uXQ63JU3AKf
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
        - id: cs_eGAzwXjrnbtruVagUsdDvU
          claim_id: c_izeU2G7hzFGC9TsoyNJ2Kj
          source_id: s_opASS8N2VcwCXB51vGEx7L
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

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| birth.date | 727年 | accepted |
| death.date | 767年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訓（CBDB 141157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141157&o=json)
