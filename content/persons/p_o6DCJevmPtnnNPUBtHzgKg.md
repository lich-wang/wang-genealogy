---
schema: wang-person/v1
id: p_o6DCJevmPtnnNPUBtHzgKg
status: active
merged_into: null
display_name: 王釋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_joudxRxRu2J4wnxErR2zVz
        subject_person_id: p_o6DCJevmPtnnNPUBtHzgKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MNH68UudSaF5SaHW2nK1G
          claim_id: c_joudxRxRu2J4wnxErR2zVz
          source_id: s_G1fuP1ZwLzxB747PqAKgEM
          stance: supports
          locator: CBDB:573537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573537）
          source: &a1
            id: s_G1fuP1ZwLzxB747PqAKgEM
            source_type: api_record
            title: 中国历代人物传记资料库：王釋（CBDB 573537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573537&o=json
            external_identifier: CBDB:573537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEK4vdAL12QLyAf1AcAVad
        subject_person_id: p_o6DCJevmPtnnNPUBtHzgKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釋，史料所见人物。本项目依据《中国历代人物传记资料库：王釋（CBDB 573537）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bHx8gSC5kTIz70KS4r-ref
          claim_id: c_QEK4vdAL12QLyAf1AcAVad
          source_id: s_G1fuP1ZwLzxB747PqAKgEM
          stance: supports
          locator: CBDB:573537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JrjglYtb97mYARYEWcYDoH
        subject_person_id: p_rKni6xGGxvJTkKnLmCXuvY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o6DCJevmPtnnNPUBtHzgKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5yZvK6d4-glBrZFkx9UCxv
          claim_id: c_JrjglYtb97mYARYEWcYDoH
          source_id: s_G1fuP1ZwLzxB747PqAKgEM
          stance: supports
          locator: 元人傳記資料索引，1107：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rKni6xGGxvJTkKnLmCXuvY
        status: active
        display_name: 王則之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釋 | accepted |
| bio.summary | 王釋，史料所见人物。本项目依据《中国历代人物传记资料库：王釋（CBDB 573537）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rKni6xGGxvJTkKnLmCXuvY | 王則之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釋（CBDB 573537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573537&o=json)
