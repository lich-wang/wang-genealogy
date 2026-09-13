---
schema: wang-person/v1
id: p_gzSAA7pnJGSp9duTKAiL6T
status: active
merged_into: null
display_name: 王端嚴
cbdb_id: 154995
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_67Ritc5j2AYh27UEQHsiLH
        subject_person_id: p_gzSAA7pnJGSp9duTKAiL6T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端嚴，史料所见人物。本项目依据《中国历代人物传记资料库：王端嚴（CBDB 154995）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_L6SZTMOH1dt8AOE8Qk6nEh
          claim_id: c_67Ritc5j2AYh27UEQHsiLH
          source_id: s_m3FfxNQTsFyQJAo3g3HGy3
          stance: supports
          locator: CBDB:154995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_m3FfxNQTsFyQJAo3g3HGy3
            source_type: api_record
            title: 中国历代人物传记资料库：王端嚴（CBDB 154995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154995&o=json
            external_identifier: CBDB:154995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9P5SFJHexQfbWP4DXEAMKy
        subject_person_id: p_gzSAA7pnJGSp9duTKAiL6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5hFKRXAqfBLETXBYX1KVPC
          claim_id: c_9P5SFJHexQfbWP4DXEAMKy
          source_id: s_m3FfxNQTsFyQJAo3g3HGy3
          stance: supports
          locator: CBDB:154995
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uolHmlp8nDojTC4EOQ7qg8
        subject_person_id: p_Ns13EDRf3NQqio4T1cuSE8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gzSAA7pnJGSp9duTKAiL6T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iclvjZP4drXA_avq7u-GL0
          claim_id: c_uolHmlp8nDojTC4EOQ7qg8
          source_id: s_m3FfxNQTsFyQJAo3g3HGy3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m3FfxNQTsFyQJAo3g3HGy3
            source_type: api_record
            title: 中国历代人物传记资料库：王端嚴（CBDB 154995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154995&o=json
            external_identifier: CBDB:154995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Ns13EDRf3NQqio4T1cuSE8
        status: active
        display_name: 王景秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王端嚴，史料所见人物。本项目依据《中国历代人物传记资料库：王端嚴（CBDB 154995）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王端嚴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ns13EDRf3NQqio4T1cuSE8 | 王景秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端嚴（CBDB 154995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154995&o=json)
