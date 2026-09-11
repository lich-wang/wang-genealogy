---
schema: wang-person/v1
id: p_QqmW4LbV4TtYFNgQc248uD
status: active
merged_into: null
display_name: 王建斗
cbdb_id: 522132
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ixzJAEc6SAqt4n5MqGS7LU
        subject_person_id: p_QqmW4LbV4TtYFNgQc248uD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建斗，明人物。中国历代人物传记资料库（CBDB）以人物编号 522132 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ERLVWJP-pgBOsomqnvCW9Z
          claim_id: c_ixzJAEc6SAqt4n5MqGS7LU
          source_id: s_CUKXvrLAmBUZrueL4vnzfG
          stance: supports
          locator: CBDB:522132
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_CUKXvrLAmBUZrueL4vnzfG
            source_type: api_record
            title: 中国历代人物传记资料库：王建斗（CBDB 522132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522132&o=json
            external_identifier: CBDB:522132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QwojuC5YnugKbC9MzoqxB7
        subject_person_id: p_QqmW4LbV4TtYFNgQc248uD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建斗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Wmf4wKGBhEhZHMzRyZ7XF
          claim_id: c_QwojuC5YnugKbC9MzoqxB7
          source_id: s_CUKXvrLAmBUZrueL4vnzfG
          stance: supports
          locator: CBDB:522132
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_CUKXvrLAmBUZrueL4vnzfG
            source_type: api_record
            title: 中国历代人物传记资料库：王建斗（CBDB 522132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522132&o=json
            external_identifier: CBDB:522132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xJGYkLrkvU2qRbtMm0aV6U
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqmW4LbV4TtYFNgQc248uD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pMvBfbWJQe3Qj-xSCpEvxL
          claim_id: c_xJGYkLrkvU2qRbtMm0aV6U
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9155：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MusunsTMcJ8i4AepqBvGHy
            source_type: api_record
            title: 中国历代人物传记资料库：王之寀（CBDB 65713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json
            external_identifier: CBDB:65713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i1C3uJJYfYMw3861gcKMoP
        status: active
        display_name: 王之寀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建斗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建斗，明人物。中国历代人物传记资料库（CBDB）以人物编号 522132 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王建斗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i1C3uJJYfYMw3861gcKMoP | 王之寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建斗（CBDB 522132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522132&o=json)
- [中国历代人物传记资料库：王之寀（CBDB 65713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json)
