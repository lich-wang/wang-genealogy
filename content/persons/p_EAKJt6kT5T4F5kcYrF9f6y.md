---
schema: wang-person/v1
id: p_EAKJt6kT5T4F5kcYrF9f6y
status: active
merged_into: null
display_name: 王玠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4vm1DqRe5LQNRG9R4YWk3
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4yJU7oL4qgYHrY26QDW5ai
          claim_id: c_K4vm1DqRe5LQNRG9R4YWk3
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
          stance: supports
          locator: CBDB:207286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207286）
          source: &a1
            id: s_E7fmERZ3ZZxhpPFgkGCR6q
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 207286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207286&o=json
            external_identifier: CBDB:207286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RDBvjwWRZ8wLW215NLejQ1
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbK5Kc23aE3mgcs9EwNXUu
          claim_id: c_RDBvjwWRZ8wLW215NLejQ1
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
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
        id: c_kMWH2jSMTN71UaAxDEMSFL
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
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
        - id: cs_HoYdGNESMKHwUVZ9h1PHcA
          claim_id: c_kMWH2jSMTN71UaAxDEMSFL
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
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
  ancestors:
    - claim:
        id: c_V1BDeFlFMX5KnmvxIiq78q
        subject_person_id: p_1BUERPSE2qTiZp6JCwdvN5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cR1Ib8dkcFxX8p4quM4lIq
          claim_id: c_V1BDeFlFMX5KnmvxIiq78q
          source_id: s_i387Vtc8AvgYW6GnRdVjnc
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i387Vtc8AvgYW6GnRdVjnc
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 230872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230872&o=json
            external_identifier: CBDB:230872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1BUERPSE2qTiZp6JCwdvN5
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_1BUERPSE2qTiZp6JCwdvN5 | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玠（CBDB 207286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207286&o=json)
- [中国历代人物传记资料库：王忠（CBDB 230872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230872&o=json)
