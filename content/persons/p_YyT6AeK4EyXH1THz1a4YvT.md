---
schema: wang-person/v1
id: p_YyT6AeK4EyXH1THz1a4YvT
status: active
merged_into: null
display_name: 王茂春
cbdb_id: 248127
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1LtvgP8v1b5jrVywNrykzG
        subject_person_id: p_YyT6AeK4EyXH1THz1a4YvT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂春，史料所见人物。本项目依据《中国历代人物传记资料库：王茂春（CBDB 248127）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_E1Qr5-ZzuWgpcVRUD4Ds93
          claim_id: c_1LtvgP8v1b5jrVywNrykzG
          source_id: s_LJQG42X4qEz6rMfTBSbQH4
          stance: supports
          locator: CBDB:248127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LJQG42X4qEz6rMfTBSbQH4
            source_type: api_record
            title: 中国历代人物传记资料库：王茂春（CBDB 248127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248127&o=json
            external_identifier: CBDB:248127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7pNpuEAhQNDs4nYD4BKRs
        subject_person_id: p_YyT6AeK4EyXH1THz1a4YvT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WRDCM794WZzLF9i1k1cbN4
          claim_id: c_P7pNpuEAhQNDs4nYD4BKRs
          source_id: s_LJQG42X4qEz6rMfTBSbQH4
          stance: supports
          locator: CBDB:248127
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_if5Azo019u7X9bwJbfDv2J
        subject_person_id: p_YyT6AeK4EyXH1THz1a4YvT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoizptRK-SuglyPJdJiwPb
          claim_id: c_if5Azo019u7X9bwJbfDv2J
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dnGcX27WSqLJQi9Wfz8Gdu
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 199663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json
            external_identifier: CBDB:199663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
  other: []
---

# 王茂春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王茂春，史料所见人物。本项目依据《中国历代人物传记资料库：王茂春（CBDB 248127）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王茂春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂春（CBDB 248127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248127&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 199663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json)
