---
schema: wang-person/v1
id: p_Fs6zLE4AAmspRKWk4Y4Jf4
status: active
merged_into: null
display_name: 王巳
cbdb_id: 37995
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xYb8LCjEGAXX4e2fwb69n
        subject_person_id: p_Fs6zLE4AAmspRKWk4Y4Jf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巳，史料所见人物。本项目依据《中国历代人物传记资料库：王巳（CBDB 37995）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_irJ3HgIXaWmnpmtK01z6Wj
          claim_id: c_4xYb8LCjEGAXX4e2fwb69n
          source_id: s_ugYrpcFcJUCjbzgJWZhswv
          stance: supports
          locator: CBDB:37995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ugYrpcFcJUCjbzgJWZhswv
            source_type: api_record
            title: 中国历代人物传记资料库：王巳（CBDB 37995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37995&o=json
            external_identifier: CBDB:37995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R917BEjJvq6arGmTBktpZU
        subject_person_id: p_Fs6zLE4AAmspRKWk4Y4Jf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nEkCysEMe2eAdqVEnBcbZv
          claim_id: c_R917BEjJvq6arGmTBktpZU
          source_id: s_ugYrpcFcJUCjbzgJWZhswv
          stance: supports
          locator: CBDB:37995
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ba1gYBCHM4U4PTSJ6KE_70
        subject_person_id: p_Fs6zLE4AAmspRKWk4Y4Jf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5NaxBVNyJd8hwYCmEkwm8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xL8i4TGNcsf6YZQ7Ck85fl
          claim_id: c_Ba1gYBCHM4U4PTSJ6KE_70
          source_id: s_ugYrpcFcJUCjbzgJWZhswv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1909：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ugYrpcFcJUCjbzgJWZhswv
            source_type: api_record
            title: 中国历代人物传记资料库：王巳（CBDB 37995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37995&o=json
            external_identifier: CBDB:37995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_G5NaxBVNyJd8hwYCmEkwm8
        status: active
        display_name: 王朝孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王巳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王巳，史料所见人物。本项目依据《中国历代人物传记资料库：王巳（CBDB 37995）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王巳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G5NaxBVNyJd8hwYCmEkwm8 | 王朝孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王巳（CBDB 37995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37995&o=json)
