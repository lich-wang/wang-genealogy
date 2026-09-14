---
schema: wang-person/v1
id: p_kKyKSR6858R5mGvRyVf9db
status: active
merged_into: null
display_name: 王綱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hArKmaxgqfJUaVgpjym75a
        subject_person_id: p_kKyKSR6858R5mGvRyVf9db
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x6gwdeLCoTodU1kXAbgqrX
          claim_id: c_hArKmaxgqfJUaVgpjym75a
          source_id: s_1b8g9QQyCJPvG28adgvdDt
          stance: supports
          locator: CBDB:236832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236832）
          source: &a1
            id: s_1b8g9QQyCJPvG28adgvdDt
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 236832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json
            external_identifier: CBDB:236832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eBo5Ti5oC19GCACF4J3EWF
        subject_person_id: p_kKyKSR6858R5mGvRyVf9db
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。正統四年進士，籍贯銅梁，曾任儒學訓導。（中国历代人物传记资料库 CBDB 236832）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LWSQljaB0z51ktt6Z6-EWE
          claim_id: c_eBo5Ti5oC19GCACF4J3EWF
          source_id: s_1b8g9QQyCJPvG28adgvdDt
          stance: supports
          locator: CBDB:236832
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZcZigz9l1BIo1in9oseMG8
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKyKSR6858R5mGvRyVf9db
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7l-lu99RehvuM5DV6fntN
          claim_id: c_ZcZigz9l1BIo1in9oseMG8
          source_id: s_0MzUOYmYANbmPjZFmiWcpk
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王綱 与 王儉 为同胞（CBDB 记「弟」），王儉 之父／母即 王綱 之父／母。
          source:
            id: s_0MzUOYmYANbmPjZFmiWcpk
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 236832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json
            external_identifier: CBDB:236832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_naD7P1UP8ne_kSixbvmZPv
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kKyKSR6858R5mGvRyVf9db
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NJqZO7L9GUEJaV3h2yfaz
          claim_id: c_naD7P1UP8ne_kSixbvmZPv
          source_id: s_0MzUOYmYANbmPjZFmiWcpk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0MzUOYmYANbmPjZFmiWcpk
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 236832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json
            external_identifier: CBDB:236832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。正統四年進士，籍贯銅梁，曾任儒學訓導。（中国历代人物传记资料库 CBDB 236832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 236832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236832&o=json)
