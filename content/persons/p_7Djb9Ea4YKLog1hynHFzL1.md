---
schema: wang-person/v1
id: p_7Djb9Ea4YKLog1hynHFzL1
status: active
merged_into: null
display_name: 王賽玉
cbdb_id: 123323
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FdZQyzaX3RfyFvJuyCdZLa
        subject_person_id: p_7Djb9Ea4YKLog1hynHFzL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賽玉，明人物。中国历代人物传记资料库（CBDB）以人物编号 123323 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_WW5jP-qLrMDRiCBPbF7uKq
          claim_id: c_FdZQyzaX3RfyFvJuyCdZLa
          source_id: s_4vrCyAREaQPdradUk6QhJK
          stance: supports
          locator: CBDB:123323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4vrCyAREaQPdradUk6QhJK
            source_type: api_record
            title: 中国历代人物传记资料库：王賽玉（CBDB 123323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123323&o=json
            external_identifier: CBDB:123323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_imJpWGJzwc15BtNospMMUe
        subject_person_id: p_7Djb9Ea4YKLog1hynHFzL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賽玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aJwXuCHLGRgvX2AjUgfeaT
          claim_id: c_imJpWGJzwc15BtNospMMUe
          source_id: s_4vrCyAREaQPdradUk6QhJK
          stance: supports
          locator: CBDB:123323
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_4vrCyAREaQPdradUk6QhJK
            source_type: api_record
            title: 中国历代人物传记资料库：王賽玉（CBDB 123323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123323&o=json
            external_identifier: CBDB:123323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2PrVebG0RPKi40pqqRbo5-
        subject_person_id: p_7Djb9Ea4YKLog1hynHFzL1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ktP1NEjsTMj2xBDuKMukAQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_naMdvLLYtDy0aYC0KOm0yq
          claim_id: c_2PrVebG0RPKi40pqqRbo5-
          source_id: s_dAyLLdgO7eevWjhTktAONA
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5345：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dAyLLdgO7eevWjhTktAONA
            source_type: api_record
            title: 中国历代人物传记资料库：蔣芝生（CBDB 123326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123326&o=json
            external_identifier: CBDB:123326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ktP1NEjsTMj2xBDuKMukAQ
        status: active
        display_name: 蔣芝生
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王賽玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賽玉，明人物。中国历代人物传记资料库（CBDB）以人物编号 123323 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王賽玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ktP1NEjsTMj2xBDuKMukAQ | 蔣芝生 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣芝生（CBDB 123326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123326&o=json)
- [中国历代人物传记资料库：王賽玉（CBDB 123323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123323&o=json)
