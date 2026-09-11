---
schema: wang-person/v1
id: p_MF2GxdYHLyw3qSgLPNcCmu
status: active
merged_into: null
display_name: 王君德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nCtTp8xu5MuhfMYj2hDubZ
        subject_person_id: p_MF2GxdYHLyw3qSgLPNcCmu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BWDXDfeReYU2F932LVq2tJ
          claim_id: c_nCtTp8xu5MuhfMYj2hDubZ
          source_id: s_ies6pYcn5DxoHZyCwoKxST
          stance: supports
          locator: CBDB:146693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146693）
          source: &a1
            id: s_ies6pYcn5DxoHZyCwoKxST
            source_type: api_record
            title: 中国历代人物传记资料库：王君德（CBDB 146693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146693&o=json
            external_identifier: CBDB:146693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jA4DN3hFDFhJU1v7ML5n8
        subject_person_id: p_MF2GxdYHLyw3qSgLPNcCmu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君德，史料所见人物。本项目依据《中国历代人物传记资料库：王君德（CBDB 146693）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xfyn8luF4sglmtoTAf5hHS
          claim_id: c_5jA4DN3hFDFhJU1v7ML5n8
          source_id: s_ies6pYcn5DxoHZyCwoKxST
          stance: supports
          locator: CBDB:146693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SSPiLeKZl9cpvTo-1pwNzQ
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MF2GxdYHLyw3qSgLPNcCmu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_67gykjK3k8ue0ZICB2Rrhx
          claim_id: c_SSPiLeKZl9cpvTo-1pwNzQ
          source_id: s_ies6pYcn5DxoHZyCwoKxST
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 103：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wuzUhSPfe87KKSdKFYjFUQ
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君德 | accepted |
| bio.summary | 王君德，史料所见人物。本项目依据《中国历代人物传记资料库：王君德（CBDB 146693）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wuzUhSPfe87KKSdKFYjFUQ | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君德（CBDB 146693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146693&o=json)
