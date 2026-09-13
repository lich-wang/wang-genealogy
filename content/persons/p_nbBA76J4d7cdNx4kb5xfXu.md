---
schema: wang-person/v1
id: p_nbBA76J4d7cdNx4kb5xfXu
status: active
merged_into: null
display_name: 王君萬
cbdb_id: 22001
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6JBwBi23W2nBRu6pJGWvBx
        subject_person_id: p_nbBA76J4d7cdNx4kb5xfXu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君萬，史料所见人物。本项目依据《中国历代人物传记资料库：王君萬（CBDB 22001）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yltlxN1X7FIxblwPuMTYPQ
          claim_id: c_6JBwBi23W2nBRu6pJGWvBx
          source_id: s_esV8QgKP2QXZgaEsoYjAC6
          stance: supports
          locator: CBDB:22001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_esV8QgKP2QXZgaEsoYjAC6
            source_type: api_record
            title: 中国历代人物传记资料库：王君萬（CBDB 22001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22001&o=json
            external_identifier: CBDB:22001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeKX8aGXshLBYUZo4Y4wGT
        subject_person_id: p_nbBA76J4d7cdNx4kb5xfXu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m1pVBYXPAYSxjsqQUmd4J1
          claim_id: c_NeKX8aGXshLBYUZo4Y4wGT
          source_id: s_esV8QgKP2QXZgaEsoYjAC6
          stance: supports
          locator: CBDB:22001
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TQpFSmMd5IBEWXHZSNB9B2
        subject_person_id: p_nbBA76J4d7cdNx4kb5xfXu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRVmEZ68zjbicBeGc6ycW6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeGY-jBgLRDL_FlnwJwVXA
          claim_id: c_TQpFSmMd5IBEWXHZSNB9B2
          source_id: s_bd5jPBZDBSUCC7dHz23x6K
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1299：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bd5jPBZDBSUCC7dHz23x6K
            source_type: api_record
            title: 中国历代人物传记资料库：王贍（CBDB 45833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json
            external_identifier: CBDB:45833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dRVmEZ68zjbicBeGc6ycW6
        status: active
        display_name: 王贍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君萬，史料所见人物。本项目依据《中国历代人物传记资料库：王君萬（CBDB 22001）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王君萬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dRVmEZ68zjbicBeGc6ycW6 | 王贍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君萬（CBDB 22001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22001&o=json)
- [中国历代人物传记资料库：王贍（CBDB 45833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45833&o=json)
