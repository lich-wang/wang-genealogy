---
schema: wang-person/v1
id: p_vK1VAAQTR1NE6Qa4vMqYFs
status: active
merged_into: null
display_name: 王遵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nodEfzVwE9J9m1vYrtXfnj
        subject_person_id: p_vK1VAAQTR1NE6Qa4vMqYFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1WihTGUw18xq1NmS85uum
          claim_id: c_nodEfzVwE9J9m1vYrtXfnj
          source_id: s_MDXSJP514uzA5KmAhUm9dS
          stance: supports
          locator: CBDB:100966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100966）
          source: &a1
            id: s_MDXSJP514uzA5KmAhUm9dS
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 100966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100966&o=json
            external_identifier: CBDB:100966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FrDR1ruv312CbQk28QCJNM
        subject_person_id: p_vK1VAAQTR1NE6Qa4vMqYFs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1225年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gs7XvY6BxHmo1f82wUzAci
          claim_id: c_FrDR1ruv312CbQk28QCJNM
          source_id: s_MDXSJP514uzA5KmAhUm9dS
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
        id: c_nwKqiu4owEJBLKwPpBDvH6
        subject_person_id: p_vK1VAAQTR1NE6Qa4vMqYFs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1288年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CWP7tn1HkAJYvMh2hQgfKz
          claim_id: c_nwKqiu4owEJBLKwPpBDvH6
          source_id: s_MDXSJP514uzA5KmAhUm9dS
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
        id: c_4gEfsDoCHi5uUviNx6s5Az
        subject_person_id: p_vK1VAAQTR1NE6Qa4vMqYFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RJsAi1YaZi6BMhACvDZ88J
          claim_id: c_4gEfsDoCHi5uUviNx6s5Az
          source_id: s_MDXSJP514uzA5KmAhUm9dS
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

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1225年 | accepted |
| death.date | 1288年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 100966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100966&o=json)
