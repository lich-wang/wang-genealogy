---
schema: wang-person/v1
id: p_8px7JbTSWpr92GDPRnZyK3
status: active
merged_into: null
display_name: 王峩
cbdb_id: 209009
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_52DH5uf3rGC9JkgZTBak4h
        subject_person_id: p_8px7JbTSWpr92GDPRnZyK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峩，明人物。中国历代人物传记资料库（CBDB）以人物编号 209009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NzMmTa-CCDgFYLtzwEP3w-
          claim_id: c_52DH5uf3rGC9JkgZTBak4h
          source_id: s_8d9Di6P2QAq2N3USyHwDD7
          stance: supports
          locator: CBDB:209009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8d9Di6P2QAq2N3USyHwDD7
            source_type: api_record
            title: 中国历代人物传记资料库：王峩（CBDB 209009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209009&o=json
            external_identifier: CBDB:209009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E9EtmU2qaiDLtaDJEpUW9e
        subject_person_id: p_8px7JbTSWpr92GDPRnZyK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tpyd3jzFS1ZGTWCc2SQbYS
          claim_id: c_E9EtmU2qaiDLtaDJEpUW9e
          source_id: s_8d9Di6P2QAq2N3USyHwDD7
          stance: supports
          locator: CBDB:209009
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8d9Di6P2QAq2N3USyHwDD7
            source_type: api_record
            title: 中国历代人物传记资料库：王峩（CBDB 209009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209009&o=json
            external_identifier: CBDB:209009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xdKAyJh5q05vtsF8tWwgAV
        subject_person_id: p_8px7JbTSWpr92GDPRnZyK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WpmK1LLF92wQ4nu3TJsJw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyNAc7dKf-MgqdGoMMdTpo
          claim_id: c_xdKAyJh5q05vtsF8tWwgAV
          source_id: s_8d9Di6P2QAq2N3USyHwDD7
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WpmK1LLF92wQ4nu3TJsJw7
        status: active
        display_name: 王庭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王峩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王峩，明人物。中国历代人物传记资料库（CBDB）以人物编号 209009 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王峩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WpmK1LLF92wQ4nu3TJsJw7 | 王庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峩（CBDB 209009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209009&o=json)
