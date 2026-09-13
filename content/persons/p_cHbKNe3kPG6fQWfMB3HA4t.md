---
schema: wang-person/v1
id: p_cHbKNe3kPG6fQWfMB3HA4t
status: active
merged_into: null
display_name: 王景讓
cbdb_id: 38080
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6E7oH9vFhsYYh7ZQZwPczV
        subject_person_id: p_cHbKNe3kPG6fQWfMB3HA4t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景讓，史料所见人物。本项目依据《中国历代人物传记资料库：王景讓（CBDB 38080）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_I98yROECt_avg2A4E1MCW5
          claim_id: c_6E7oH9vFhsYYh7ZQZwPczV
          source_id: s_n3bDgcKjfxwZMUY6qdEd5g
          stance: supports
          locator: CBDB:38080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n3bDgcKjfxwZMUY6qdEd5g
            source_type: api_record
            title: 中国历代人物传记资料库：王景讓（CBDB 38080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38080&o=json
            external_identifier: CBDB:38080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zc2WGWAF8J5M2nGegn8NeP
        subject_person_id: p_cHbKNe3kPG6fQWfMB3HA4t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n5jAKoQRmZtNFSecwsGR92
          claim_id: c_Zc2WGWAF8J5M2nGegn8NeP
          source_id: s_n3bDgcKjfxwZMUY6qdEd5g
          stance: supports
          locator: CBDB:38080
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5L9Nh36Gi02Cot53nFIVS9
        subject_person_id: p_qmz4NNXH4HsWQ8MERWfsxY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHbKNe3kPG6fQWfMB3HA4t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxV3L2a9bQshsw7q-xjVUn
          claim_id: c_5L9Nh36Gi02Cot53nFIVS9
          source_id: s_n3bDgcKjfxwZMUY6qdEd5g
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n3bDgcKjfxwZMUY6qdEd5g
            source_type: api_record
            title: 中国历代人物传记资料库：王景讓（CBDB 38080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38080&o=json
            external_identifier: CBDB:38080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qmz4NNXH4HsWQ8MERWfsxY
        status: active
        display_name: 王易簡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景讓，史料所见人物。本项目依据《中国历代人物传记资料库：王景讓（CBDB 38080）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王景讓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qmz4NNXH4HsWQ8MERWfsxY | 王易簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景讓（CBDB 38080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38080&o=json)
