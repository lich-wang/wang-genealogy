---
schema: wang-person/v1
id: p_cGxjGC96W1m7oTzFPZX3UA
status: active
merged_into: null
display_name: 王弘藝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xiNjsq9mqmE2z85PaaAbDj
        subject_person_id: p_cGxjGC96W1m7oTzFPZX3UA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q5H1PfZs8gR2PHQo6NAmRF
          claim_id: c_xiNjsq9mqmE2z85PaaAbDj
          source_id: s_E4GkT6Rcg7GLLKNk7eHRuA
          stance: supports
          locator: CBDB:175660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175660）
          source: &a1
            id: s_E4GkT6Rcg7GLLKNk7eHRuA
            source_type: api_record
            title: 中国历代人物传记资料库：王弘藝（CBDB 175660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175660&o=json
            external_identifier: CBDB:175660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6fGucVAZb94dJR2NBE7AdC
        subject_person_id: p_cGxjGC96W1m7oTzFPZX3UA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_796LLWNJe7Ex81EDnTL8ZN
          claim_id: c_6fGucVAZb94dJR2NBE7AdC
          source_id: s_E4GkT6Rcg7GLLKNk7eHRuA
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
        id: c_E3K2mCqsqMbGBjVk9W8NR4
        subject_person_id: p_cGxjGC96W1m7oTzFPZX3UA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘藝（卒于595年），南北朝人物。曾任膳部郎中。（中国历代人物传记资料库 CBDB 175660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4BUJLDJ2B9c_KyG4-w9ayL
          claim_id: c_E3K2mCqsqMbGBjVk9W8NR4
          source_id: s_E4GkT6Rcg7GLLKNk7eHRuA
          stance: supports
          locator: CBDB:175660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ShCG4QcStiAAoUXyuIThFy
        subject_person_id: p_cGxjGC96W1m7oTzFPZX3UA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tUK1gJX6m28jCzEG2Jxt5K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d0jQXMy3ZONWEuNWbCqHqz
          claim_id: c_ShCG4QcStiAAoUXyuIThFy
          source_id: s_E4GkT6Rcg7GLLKNk7eHRuA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tUK1gJX6m28jCzEG2Jxt5K
        status: active
        display_name: 王方壽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘藝 | accepted |
| death.date | 595年 | accepted |
| bio.summary | 王弘藝（卒于595年），南北朝人物。曾任膳部郎中。（中国历代人物传记资料库 CBDB 175660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tUK1gJX6m28jCzEG2Jxt5K | 王方壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘藝（CBDB 175660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175660&o=json)
