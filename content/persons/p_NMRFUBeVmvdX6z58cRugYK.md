---
schema: wang-person/v1
id: p_NMRFUBeVmvdX6z58cRugYK
status: active
merged_into: null
display_name: 王弘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tcNFx4NivYyP2RnSUHEFM
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hfiZ5f5T9QhapBoMZxBk8G
          claim_id: c_5tcNFx4NivYyP2RnSUHEFM
          source_id: s_5HnXZPERFAcme1VQytRef5
          stance: supports
          locator: CBDB:200979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200979）
          source: &a1
            id: s_5HnXZPERFAcme1VQytRef5
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 200979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200979&o=json
            external_identifier: CBDB:200979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LdVt6HB1GQVwwSiK7QBMeo
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4u71Uy2mzBjPcXNQvu97o
          claim_id: c_LdVt6HB1GQVwwSiK7QBMeo
          source_id: s_5HnXZPERFAcme1VQytRef5
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
        id: c_2w8y6jmQn14ytAPAT8kRuT
        subject_person_id: p_NMRFUBeVmvdX6z58cRugYK
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
        - id: cs_BEm1npqkTA2tcqrqtYqNY9
          claim_id: c_2w8y6jmQn14ytAPAT8kRuT
          source_id: s_5HnXZPERFAcme1VQytRef5
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

# 王弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘（CBDB 200979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200979&o=json)
