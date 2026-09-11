---
schema: wang-person/v1
id: p_JjqEAXUtt8TixNojE9G2rS
status: active
merged_into: null
display_name: 王秱
cbdb_id: 525129
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ECUqUXwxucrGpUd3hiLFQi
        subject_person_id: p_JjqEAXUtt8TixNojE9G2rS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秱，明人物。中国历代人物传记资料库（CBDB）以人物编号 525129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X_ITAHgo7Yj1F3-CSeoatG
          claim_id: c_ECUqUXwxucrGpUd3hiLFQi
          source_id: s_7vGtyL2LB5XBj8TCteMuC3
          stance: supports
          locator: CBDB:525129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7vGtyL2LB5XBj8TCteMuC3
            source_type: api_record
            title: 中国历代人物传记资料库：王秱（CBDB 525129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525129&o=json
            external_identifier: CBDB:525129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9f2a4e2Ti5jMZ4KXqoZHQ
        subject_person_id: p_JjqEAXUtt8TixNojE9G2rS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wkfJZSrhpJQK8TcLHi8F7t
          claim_id: c_F9f2a4e2Ti5jMZ4KXqoZHQ
          source_id: s_7vGtyL2LB5XBj8TCteMuC3
          stance: supports
          locator: CBDB:525129
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_7vGtyL2LB5XBj8TCteMuC3
            source_type: api_record
            title: 中国历代人物传记资料库：王秱（CBDB 525129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525129&o=json
            external_identifier: CBDB:525129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vRoUJFWUUaloxGd92UxLgS
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JjqEAXUtt8TixNojE9G2rS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QTwUF1fbnmvOFNtnhhqz4T
          claim_id: c_vRoUJFWUUaloxGd92UxLgS
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11172：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PgGP8n81XBb5kcs7D54q73
        status: active
        display_name: 王直
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秱，明人物。中国历代人物传记资料库（CBDB）以人物编号 525129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王秱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PgGP8n81XBb5kcs7D54q73 | 王直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秱（CBDB 525129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525129&o=json)
- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
