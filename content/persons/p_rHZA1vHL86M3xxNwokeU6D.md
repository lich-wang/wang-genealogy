---
schema: wang-person/v1
id: p_rHZA1vHL86M3xxNwokeU6D
status: active
merged_into: null
display_name: 王時濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yfzxQVYN976hf6Tz9DZomh
        subject_person_id: p_rHZA1vHL86M3xxNwokeU6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H2tYEYLwGBUr3mMaMNGQiL
          claim_id: c_yfzxQVYN976hf6Tz9DZomh
          source_id: s_M4uYE5rXgJqUp7k2FHecrU
          stance: supports
          locator: CBDB:126655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126655）
          source: &a1
            id: s_M4uYE5rXgJqUp7k2FHecrU
            source_type: api_record
            title: 中国历代人物传记资料库：王時濟（CBDB 126655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126655&o=json
            external_identifier: CBDB:126655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aNXT3zQNMuWLkqnKmpCECb
        subject_person_id: p_rHZA1vHL86M3xxNwokeU6D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3GX2iwefenHLkbsdjzMraB
          claim_id: c_aNXT3zQNMuWLkqnKmpCECb
          source_id: s_M4uYE5rXgJqUp7k2FHecrU
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
        id: c_6Ek6Euxy99YLyCWEZ1BwLt
        subject_person_id: p_rHZA1vHL86M3xxNwokeU6D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QukctJtEcFTgb3uuT4NMsi
          claim_id: c_6Ek6Euxy99YLyCWEZ1BwLt
          source_id: s_M4uYE5rXgJqUp7k2FHecrU
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
        id: c_VuHNPAZQYwGQrFdUvphHPq
        subject_person_id: p_rHZA1vHL86M3xxNwokeU6D
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
        - id: cs_K7XquVtDQ1G1VXLa3NPH4W
          claim_id: c_VuHNPAZQYwGQrFdUvphHPq
          source_id: s_M4uYE5rXgJqUp7k2FHecrU
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

# 王時濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時濟 | accepted |
| birth.date | 1532年 | accepted |
| death.date | 1594年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時濟（CBDB 126655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126655&o=json)
