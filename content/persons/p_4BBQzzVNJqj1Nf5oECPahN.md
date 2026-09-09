---
schema: wang-person/v1
id: p_4BBQzzVNJqj1Nf5oECPahN
status: active
merged_into: null
display_name: 王鍔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yR5GeE4pijqFu3QK7yRuoW
        subject_person_id: p_4BBQzzVNJqj1Nf5oECPahN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JeHFWc1puS3A6B3XCXVPDE
          claim_id: c_yR5GeE4pijqFu3QK7yRuoW
          source_id: s_snT685Q9rjzSHo8C5f6pNq
          stance: supports
          locator: CBDB:192581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192581）
          source: &a1
            id: s_snT685Q9rjzSHo8C5f6pNq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 192581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192581&o=json
            external_identifier: CBDB:192581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JHmbNESUL4Z3ceoB5hEHf8
        subject_person_id: p_4BBQzzVNJqj1Nf5oECPahN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 757年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ffA38jkgV56aHJ9Lveue8
          claim_id: c_JHmbNESUL4Z3ceoB5hEHf8
          source_id: s_snT685Q9rjzSHo8C5f6pNq
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
        id: c_anm6oC6E6MqyaCm6yxZM6e
        subject_person_id: p_4BBQzzVNJqj1Nf5oECPahN
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
        - id: cs_KGo3iGNaDqLy7obbPUNAZq
          claim_id: c_anm6oC6E6MqyaCm6yxZM6e
          source_id: s_snT685Q9rjzSHo8C5f6pNq
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

# 王鍔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍔 | accepted |
| death.date | 757年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 192581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192581&o=json)
