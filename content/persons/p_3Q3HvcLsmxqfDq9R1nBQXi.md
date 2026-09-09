---
schema: wang-person/v1
id: p_3Q3HvcLsmxqfDq9R1nBQXi
status: active
merged_into: null
display_name: 王振
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RSAjwJYBoAQW4qT7gbZanm
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xtBE23LxP7HKerJA1V9cPE
          claim_id: c_RSAjwJYBoAQW4qT7gbZanm
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
          stance: supports
          locator: CBDB:141655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141655）
          source: &a1
            id: s_Bi4MKHXFWwTnY4wZFRhfrS
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 141655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json
            external_identifier: CBDB:141655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QWbey5LEC5igXyoGXJGTU9
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SAtDLzL8hrMEJ6hFmYLhsn
          claim_id: c_QWbey5LEC5igXyoGXJGTU9
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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
        id: c_DyWHBh57eQX6rPQNXY9maS
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qAmyd8dT6pz2uLTWuJLMNx
          claim_id: c_DyWHBh57eQX6rPQNXY9maS
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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
        id: c_W7hDsEDYQ8mEzUDZYEoR8g
        subject_person_id: p_3Q3HvcLsmxqfDq9R1nBQXi
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
        - id: cs_TYBtMs2RTBLSemNKMie8Wp
          claim_id: c_W7hDsEDYQ8mEzUDZYEoR8g
          source_id: s_Bi4MKHXFWwTnY4wZFRhfrS
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

# 王振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振 | accepted |
| birth.date | 768年 | accepted |
| death.date | 833年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振（CBDB 141655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141655&o=json)
