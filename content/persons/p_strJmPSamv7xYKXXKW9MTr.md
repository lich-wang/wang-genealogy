---
schema: wang-person/v1
id: p_strJmPSamv7xYKXXKW9MTr
status: active
merged_into: null
display_name: 王迁
cbdb_id: 21991
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gDFrQsefpo2we9nxwnzjSc
        subject_person_id: p_strJmPSamv7xYKXXKW9MTr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2jMH6eQSQz118M4tNzYPY7
          claim_id: c_gDFrQsefpo2we9nxwnzjSc
          source_id: s_h9RCV9DAxDCQUpChypQZfg
          stance: supports
          locator: Q45401644
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_h9RCV9DAxDCQUpChypQZfg
            source_type: api_record
            title: 维基数据：王迁（Q45401644）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401644
            external_identifier: Q45401644
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_H5BpnWvLNG8gfW1pA58U8Z
          claim_id: c_gDFrQsefpo2we9nxwnzjSc
          source_id: s_NEM2LHUbviBQ29Lmt9Jggh
          stance: supports
          locator: CBDB:21991
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_NEM2LHUbviBQ29Lmt9Jggh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遷（21991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21991&o=json
            external_identifier: CBDB:21991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GhAYQSZ1VJXK9uK5xK5iTT
        subject_person_id: p_strJmPSamv7xYKXXKW9MTr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 21991
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYyEHqy1QwfyXjoQyu5Guw
          claim_id: c_GhAYQSZ1VJXK9uK5xK5iTT
          source_id: s_h9RCV9DAxDCQUpChypQZfg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PU6ebLcXKmi9EYytxk36xi
        subject_person_id: p_strJmPSamv7xYKXXKW9MTr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UaNg1wksvazhfK4rTdvraK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BJi3PQMdBZUc9zwFAvx9w
          claim_id: c_PU6ebLcXKmi9EYytxk36xi
          source_id: s_h9RCV9DAxDCQUpChypQZfg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_q9CvjHU6RQ2hL5s1ts2qwa
          claim_id: c_PU6ebLcXKmi9EYytxk36xi
          source_id: s_o2Ns99Rj2oBxz39K8qiTbJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_o2Ns99Rj2oBxz39K8qiTbJ
            source_type: api_record
            title: 维基数据：王文（Q45401645）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401645
            external_identifier: Q45401645
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
      object_person:
        id: p_UaNg1wksvazhfK4rTdvraK
        status: active
        display_name: 王文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迁 | accepted |
| bio.summary | Song dynasty person CBDB = 21991 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UaNg1wksvazhfK4rTdvraK | 王文 | accepted |

## 外部来源

- [维基数据：王迁（Q45401644）](https://www.wikidata.org/wiki/Q45401644)
- [维基数据：王文（Q45401645）](https://www.wikidata.org/wiki/Q45401645)
- [CBDB 中国历代人物传记资料库：王遷（21991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21991&o=json)
