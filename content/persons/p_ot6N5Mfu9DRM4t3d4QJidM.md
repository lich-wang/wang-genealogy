---
schema: wang-person/v1
id: p_ot6N5Mfu9DRM4t3d4QJidM
status: active
merged_into: null
display_name: 王師曰
cbdb_id: 414421
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WQRaCzKptfiB5ch8n48RK
        subject_person_id: p_ot6N5Mfu9DRM4t3d4QJidM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師曰，史料所见人物。本项目依据《中国历代人物传记资料库：王師曰（CBDB 414421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_o8fFQR8WYGN_nqbT9BWRJt
          claim_id: c_8WQRaCzKptfiB5ch8n48RK
          source_id: s_c5ZNz8E5bDa64LRpKQk9sk
          stance: supports
          locator: CBDB:414421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c5ZNz8E5bDa64LRpKQk9sk
            source_type: api_record
            title: 中国历代人物传记资料库：王師曰（CBDB 414421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414421&o=json
            external_identifier: CBDB:414421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:32.727Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uvZWKHMEE2vYJnLK1uDJBe
        subject_person_id: p_ot6N5Mfu9DRM4t3d4QJidM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師曰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WtwhRgHrQqNHzZrg6hiUFz
          claim_id: c_uvZWKHMEE2vYJnLK1uDJBe
          source_id: s_c5ZNz8E5bDa64LRpKQk9sk
          stance: supports
          locator: CBDB:414421
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5401-5500）｜历史性依据：CBDB 朝代 = 清
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
  descendants: []
  other: []
---

# 王師曰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師曰，史料所见人物。本项目依据《中国历代人物传记资料库：王師曰（CBDB 414421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王師曰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師曰（CBDB 414421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414421&o=json)
