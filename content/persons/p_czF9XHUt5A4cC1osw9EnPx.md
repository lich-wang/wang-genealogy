---
schema: wang-person/v1
id: p_czF9XHUt5A4cC1osw9EnPx
status: active
merged_into: null
display_name: 王弘楚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qjrU5TzW74TrV1BJVKzkBM
        subject_person_id: p_czF9XHUt5A4cC1osw9EnPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CrKNEoaApBAGTiMm3eV9x
          claim_id: c_qjrU5TzW74TrV1BJVKzkBM
          source_id: s_N7WUJ4Myug2RT9M1fnk29V
          stance: supports
          locator: CBDB:191745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191745）
          source: &a1
            id: s_N7WUJ4Myug2RT9M1fnk29V
            source_type: api_record
            title: 中国历代人物传记资料库：王弘楚（CBDB 191745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191745&o=json
            external_identifier: CBDB:191745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Eqoo3EQjgejRinK7xDP5Sr
        subject_person_id: p_czF9XHUt5A4cC1osw9EnPx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 920年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sRCK5SjHsV7KMLgnUu8zQv
          claim_id: c_Eqoo3EQjgejRinK7xDP5Sr
          source_id: s_N7WUJ4Myug2RT9M1fnk29V
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
        id: c_ZpQVYTuqx3S5EVUeKvDjVb
        subject_person_id: p_czF9XHUt5A4cC1osw9EnPx
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
        - id: cs_M86FNHtUnKtUUtBVyyMaA2
          claim_id: c_ZpQVYTuqx3S5EVUeKvDjVb
          source_id: s_N7WUJ4Myug2RT9M1fnk29V
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

# 王弘楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘楚 | accepted |
| death.date | 920年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘楚（CBDB 191745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191745&o=json)
