---
schema: wang-person/v1
id: p_rZ6EDAjfKDPbH5rToDiLTH
status: active
merged_into: null
display_name: 王游道
cbdb_id: 148890
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c89ZqZ3juo8dBbLsHe6crX
        subject_person_id: p_rZ6EDAjfKDPbH5rToDiLTH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游道，史料所见人物。本项目依据《中国历代人物传记资料库：王游道（CBDB 148890）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PdmixQsrIaVmKpxn8LdHcT
          claim_id: c_c89ZqZ3juo8dBbLsHe6crX
          source_id: s_BCtDrGuAPPJMEpCQpEfmDX
          stance: supports
          locator: CBDB:148890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BCtDrGuAPPJMEpCQpEfmDX
            source_type: api_record
            title: 中国历代人物传记资料库：王游道（CBDB 148890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148890&o=json
            external_identifier: CBDB:148890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xf3VJhwMCRoFTYLFTh26eN
        subject_person_id: p_rZ6EDAjfKDPbH5rToDiLTH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王游道
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C6MKVyz84RdADFdCkyXfPj
          claim_id: c_xf3VJhwMCRoFTYLFTh26eN
          source_id: s_BCtDrGuAPPJMEpCQpEfmDX
          stance: supports
          locator: CBDB:148890
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tr1WR7lNVtT40Hk_jQbtot
        subject_person_id: p_aS4oPbQ6onmxdLtHcM6aRy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rZ6EDAjfKDPbH5rToDiLTH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kibBQpR5UVKAePY18eeAjC
          claim_id: c_Tr1WR7lNVtT40Hk_jQbtot
          source_id: s_fkYoMRpWBFANnFxw9yoZcv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 3：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fkYoMRpWBFANnFxw9yoZcv
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 139734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json
            external_identifier: CBDB:139734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aS4oPbQ6onmxdLtHcM6aRy
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王游道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王游道，史料所见人物。本项目依据《中国历代人物传记资料库：王游道（CBDB 148890）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王游道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aS4oPbQ6onmxdLtHcM6aRy | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 139734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139734&o=json)
- [中国历代人物传记资料库：王游道（CBDB 148890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148890&o=json)
