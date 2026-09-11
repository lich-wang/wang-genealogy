---
schema: wang-person/v1
id: p_VZ6oEPm3xy7bonsAK7NdT8
status: active
merged_into: null
display_name: 王子孝
cbdb_id: 292312
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qxEdTrkg3985wG2AnCqzEc
        subject_person_id: p_VZ6oEPm3xy7bonsAK7NdT8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子孝，明人物。中国历代人物传记资料库（CBDB）以人物编号 292312 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CIJHeolNoIUDwkEZ7y6hdV
          claim_id: c_qxEdTrkg3985wG2AnCqzEc
          source_id: s_PBs6mPLAH8K1hJtTDe7KfA
          stance: supports
          locator: CBDB:292312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PBs6mPLAH8K1hJtTDe7KfA
            source_type: api_record
            title: 中国历代人物传记资料库：王子孝（CBDB 292312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292312&o=json
            external_identifier: CBDB:292312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eh36K6geeK9WyfbjPQ9NN6
        subject_person_id: p_VZ6oEPm3xy7bonsAK7NdT8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HvUmFed1BYvJxBZZuCKVcQ
          claim_id: c_Eh36K6geeK9WyfbjPQ9NN6
          source_id: s_PBs6mPLAH8K1hJtTDe7KfA
          stance: supports
          locator: CBDB:292312
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_PBs6mPLAH8K1hJtTDe7KfA
            source_type: api_record
            title: 中国历代人物传记资料库：王子孝（CBDB 292312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292312&o=json
            external_identifier: CBDB:292312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GGmWmKkZ3Kzg0aXjST9KyQ
        subject_person_id: p_XKApWYJnmMgLZmZqtzznxJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VZ6oEPm3xy7bonsAK7NdT8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Q00GVBNL8s-f9mX6uH5LV
          claim_id: c_GGmWmKkZ3Kzg0aXjST9KyQ
          source_id: s_PBs6mPLAH8K1hJtTDe7KfA
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XKApWYJnmMgLZmZqtzznxJ
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子孝，明人物。中国历代人物传记资料库（CBDB）以人物编号 292312 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子孝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XKApWYJnmMgLZmZqtzznxJ | 王教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子孝（CBDB 292312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292312&o=json)
