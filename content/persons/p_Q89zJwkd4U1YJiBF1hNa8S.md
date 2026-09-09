---
schema: wang-person/v1
id: p_Q89zJwkd4U1YJiBF1hNa8S
status: active
merged_into: null
display_name: 王介錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4q41S7cqqroPfTS11itgsA
        subject_person_id: p_Q89zJwkd4U1YJiBF1hNa8S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_df5hLaYZqNgg7D3pVEgiEt
          claim_id: c_4q41S7cqqroPfTS11itgsA
          source_id: s_BAbYjvaKUuah7gmWRnMZSg
          stance: supports
          locator: CBDB:71409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71409）
          source: &a1
            id: s_BAbYjvaKUuah7gmWRnMZSg
            source_type: api_record
            title: 中国历代人物传记资料库：王介錫（CBDB 71409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71409&o=json
            external_identifier: CBDB:71409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X2LMWL63ozQ7Zm16dXAjGj
        subject_person_id: p_Q89zJwkd4U1YJiBF1hNa8S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13U9a1zUADq4EUEK7DSGTt
          claim_id: c_X2LMWL63ozQ7Zm16dXAjGj
          source_id: s_BAbYjvaKUuah7gmWRnMZSg
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
        id: c_puxbTcrdLpimMsEQHeH7VL
        subject_person_id: p_Q89zJwkd4U1YJiBF1hNa8S
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
        - id: cs_HM7WAHbkyZ9tVQ5r6298Wk
          claim_id: c_puxbTcrdLpimMsEQHeH7VL
          source_id: s_BAbYjvaKUuah7gmWRnMZSg
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

# 王介錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介錫 | accepted |
| birth.date | 1617年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介錫（CBDB 71409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71409&o=json)
