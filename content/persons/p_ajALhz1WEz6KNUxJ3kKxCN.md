---
schema: wang-person/v1
id: p_ajALhz1WEz6KNUxJ3kKxCN
status: active
merged_into: null
display_name: 王墿
cbdb_id: 154914
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_51Nx25BPqfs6hRbwKeDsZA
        subject_person_id: p_ajALhz1WEz6KNUxJ3kKxCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墿，唐人物。中国历代人物传记资料库（CBDB）以人物编号 154914 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_C117oAB_zy4uFR-4_2KmO1
          claim_id: c_51Nx25BPqfs6hRbwKeDsZA
          source_id: s_Ze84aqJciFhJRArNw6NFwa
          stance: supports
          locator: CBDB:154914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ze84aqJciFhJRArNw6NFwa
            source_type: api_record
            title: 中国历代人物传记资料库：王墿（CBDB 154914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154914&o=json
            external_identifier: CBDB:154914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HsQt17JUSNpW24gy2X7xH4
        subject_person_id: p_ajALhz1WEz6KNUxJ3kKxCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MJQKUJbmA7ac3RvDaRU3g5
          claim_id: c_HsQt17JUSNpW24gy2X7xH4
          source_id: s_Ze84aqJciFhJRArNw6NFwa
          stance: supports
          locator: CBDB:154914
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Ze84aqJciFhJRArNw6NFwa
            source_type: api_record
            title: 中国历代人物传记资料库：王墿（CBDB 154914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154914&o=json
            external_identifier: CBDB:154914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b7V2xULt9mWlQOQJ5P7RDz
        subject_person_id: p_hBA95seF4jfn429UmR76Q6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ajALhz1WEz6KNUxJ3kKxCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VShmjXLPG0niQ_L2U2D3Vl
          claim_id: c_b7V2xULt9mWlQOQJ5P7RDz
          source_id: s_Ze84aqJciFhJRArNw6NFwa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 30：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hBA95seF4jfn429UmR76Q6
        status: active
        display_name: 王守質
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王墿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王墿，唐人物。中国历代人物传记资料库（CBDB）以人物编号 154914 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王墿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hBA95seF4jfn429UmR76Q6 | 王守質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王墿（CBDB 154914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154914&o=json)
