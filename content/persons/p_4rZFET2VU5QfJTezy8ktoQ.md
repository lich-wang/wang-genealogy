---
schema: wang-person/v1
id: p_4rZFET2VU5QfJTezy8ktoQ
status: active
merged_into: null
display_name: 王來召
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sGQKYz9L1q3cBJLsE6Bf3Y
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Uko4LC2b6fxLQshnw2YVe
          claim_id: c_sGQKYz9L1q3cBJLsE6Bf3Y
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: CBDB:328246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328246）
          source: &a1
            id: s_WWo3kG2R2Pqv7JiMi5mLqk
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 328246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json
            external_identifier: CBDB:328246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B96EmdxwcFHbPfoR1sMJfj
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
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
        - id: cs_r3hfhsLF6WH8tsW1MPkkWd
          claim_id: c_B96EmdxwcFHbPfoR1sMJfj
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SnhpLj1dfndDldT9yzANsl
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LymFw1VWJbC8JscJ7YZvWZ
          claim_id: c_SnhpLj1dfndDldT9yzANsl
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王來召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來召 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來召（CBDB 328246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json)
