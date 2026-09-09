---
schema: wang-person/v1
id: p_ZAb8x7mH8t7CvuLp9ZL8vw
status: active
merged_into: null
display_name: 王仁浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ALANtezgBzURv9LDmSTffY
        subject_person_id: p_ZAb8x7mH8t7CvuLp9ZL8vw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GUB3227KRghx45vzwTdiya
          claim_id: c_ALANtezgBzURv9LDmSTffY
          source_id: s_FnCJksNgjgFpnwKoZ81pJp
          stance: supports
          locator: CBDB:572439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572439）
          source: &a1
            id: s_FnCJksNgjgFpnwKoZ81pJp
            source_type: api_record
            title: 中国历代人物传记资料库：王仁浩（CBDB 572439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572439&o=json
            external_identifier: CBDB:572439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fMDJGSnoxF1HSRPorAHFjk
        subject_person_id: p_ZAb8x7mH8t7CvuLp9ZL8vw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saG762Lw26f29Mfw1kdAYh
          claim_id: c_fMDJGSnoxF1HSRPorAHFjk
          source_id: s_FnCJksNgjgFpnwKoZ81pJp
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
        id: c_prkmV47DGxiM8YhKEcPBgw
        subject_person_id: p_ZAb8x7mH8t7CvuLp9ZL8vw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D7yrUcWjRCjxwBxywzLD6V
          claim_id: c_prkmV47DGxiM8YhKEcPBgw
          source_id: s_FnCJksNgjgFpnwKoZ81pJp
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
        id: c_sK2f2xEQQzoGm7QKJcHRY1
        subject_person_id: p_ZAb8x7mH8t7CvuLp9ZL8vw
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
        - id: cs_x2EBPJPqRtyue9GohD1E9x
          claim_id: c_sK2f2xEQQzoGm7QKJcHRY1
          source_id: s_FnCJksNgjgFpnwKoZ81pJp
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

# 王仁浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁浩 | accepted |
| birth.date | 1843年 | accepted |
| death.date | 1896年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁浩（CBDB 572439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572439&o=json)
