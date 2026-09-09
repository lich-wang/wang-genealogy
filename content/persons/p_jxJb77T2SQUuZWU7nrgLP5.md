---
schema: wang-person/v1
id: p_jxJb77T2SQUuZWU7nrgLP5
status: active
merged_into: null
display_name: 王同倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iKEfeh5bNYL2z9XD3xWyfz
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PesU3gy6AozXGoCXTWNvP9
          claim_id: c_iKEfeh5bNYL2z9XD3xWyfz
          source_id: s_2wGjdALaD45tx6N97DN7RH
          stance: supports
          locator: CBDB:204603
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204603）
          source: &a1
            id: s_2wGjdALaD45tx6N97DN7RH
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 204603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json
            external_identifier: CBDB:204603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BqLWd2WB2NMtUDrRH1FxjM
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5kXncwjPfWk6YoNrD1KPr5
          claim_id: c_BqLWd2WB2NMtUDrRH1FxjM
          source_id: s_2wGjdALaD45tx6N97DN7RH
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
        id: c_FjP9xm9PYER53tEprZCkTX
        subject_person_id: p_jxJb77T2SQUuZWU7nrgLP5
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
        - id: cs_eKcQnEJNhE8AHBgun46DCt
          claim_id: c_FjP9xm9PYER53tEprZCkTX
          source_id: s_2wGjdALaD45tx6N97DN7RH
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

# 王同倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同倫 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同倫（CBDB 204603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204603&o=json)
