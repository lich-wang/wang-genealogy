---
schema: wang-person/v1
id: p_u89tPzkDusF6SdK6p8sZk8
status: active
merged_into: null
display_name: 王至淑
cbdb_id: 134058
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_41cSEGJiedCG988sL2eCHQ
        subject_person_id: p_u89tPzkDusF6SdK6p8sZk8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至淑，史料所见人物。本项目依据《中国历代人物传记资料库：王至淑（CBDB 134058）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_OP7gJfa5uSYOb-rwopSnFG
          claim_id: c_41cSEGJiedCG988sL2eCHQ
          source_id: s_BrYDhRD2q1u52eAMgAMMHd
          stance: supports
          locator: CBDB:134058
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BrYDhRD2q1u52eAMgAMMHd
            source_type: api_record
            title: 中国历代人物传记资料库：王至淑（CBDB 134058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134058&o=json
            external_identifier: CBDB:134058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9t9fCrSKi8Br931DW4ciNs
        subject_person_id: p_u89tPzkDusF6SdK6p8sZk8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AAxusmYKENdhdbKkF1weqR
          claim_id: c_9t9fCrSKi8Br931DW4ciNs
          source_id: s_BrYDhRD2q1u52eAMgAMMHd
          stance: supports
          locator: CBDB:134058
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oJFZBobPbCIig2-2Wm7SHm
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_u89tPzkDusF6SdK6p8sZk8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ha_Pnl3bvOz9-QufNiNgFd
          claim_id: c_oJFZBobPbCIig2-2Wm7SHm
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oBoM5ZPjLx797LqUayBpbH
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 100852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json
            external_identifier: CBDB:100852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王至淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至淑，史料所见人物。本项目依据《中国历代人物传记资料库：王至淑（CBDB 134058）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王至淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 100852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json)
- [中国历代人物传记资料库：王至淑（CBDB 134058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134058&o=json)
