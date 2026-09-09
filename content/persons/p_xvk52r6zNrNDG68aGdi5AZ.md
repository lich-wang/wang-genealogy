---
schema: wang-person/v1
id: p_xvk52r6zNrNDG68aGdi5AZ
status: active
merged_into: null
display_name: 王兆麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pM1y8EsaA9XdphxZBxstA
        subject_person_id: p_xvk52r6zNrNDG68aGdi5AZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gA7hrxzzTsz2T42eFTB4S6
          claim_id: c_2pM1y8EsaA9XdphxZBxstA
          source_id: s_Bf1Q1GLVp6Ps8zD8YUh6Zg
          stance: supports
          locator: CBDB:338295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338295）
          source: &a1
            id: s_Bf1Q1GLVp6Ps8zD8YUh6Zg
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麟（CBDB 338295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338295&o=json
            external_identifier: CBDB:338295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q8r82iKvye2Mxnh3i1GKfW
        subject_person_id: p_xvk52r6zNrNDG68aGdi5AZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1834年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6b7xNCM77w6PMaaiLadW4H
          claim_id: c_Q8r82iKvye2Mxnh3i1GKfW
          source_id: s_Bf1Q1GLVp6Ps8zD8YUh6Zg
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
        id: c_D4MmZ7261P68DZnaRzLB4e
        subject_person_id: p_xvk52r6zNrNDG68aGdi5AZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kh5znV1T4RtoWKPr47g1jC
          claim_id: c_D4MmZ7261P68DZnaRzLB4e
          source_id: s_Bf1Q1GLVp6Ps8zD8YUh6Zg
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
        id: c_9QRSBZvgQFGAxNykcJw9hs
        subject_person_id: p_xvk52r6zNrNDG68aGdi5AZ
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
        - id: cs_VA1icaPJixuPzPZAsNnwYP
          claim_id: c_9QRSBZvgQFGAxNykcJw9hs
          source_id: s_Bf1Q1GLVp6Ps8zD8YUh6Zg
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

# 王兆麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆麟 | accepted |
| birth.date | 1834年 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆麟（CBDB 338295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338295&o=json)
