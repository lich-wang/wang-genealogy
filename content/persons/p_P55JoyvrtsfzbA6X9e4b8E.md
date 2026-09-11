---
schema: wang-person/v1
id: p_P55JoyvrtsfzbA6X9e4b8E
status: active
merged_into: null
display_name: 王志高
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZgPxA6vin3yGCc7eGqbhvs
        subject_person_id: p_P55JoyvrtsfzbA6X9e4b8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6demBpJJQPu7MoCP6EnJ7U
          claim_id: c_ZgPxA6vin3yGCc7eGqbhvs
          source_id: s_tBE58XWdNxueHh6PsSZDzU
          stance: supports
          locator: CBDB:280587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280587）
          source: &a1
            id: s_tBE58XWdNxueHh6PsSZDzU
            source_type: api_record
            title: 中国历代人物传记资料库：王志高（CBDB 280587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280587&o=json
            external_identifier: CBDB:280587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SnXDVhxciQA8TxQzkY4R58
        subject_person_id: p_P55JoyvrtsfzbA6X9e4b8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4mcG84kCnBgmRWgAWrMrdT
          claim_id: c_SnXDVhxciQA8TxQzkY4R58
          source_id: s_tBE58XWdNxueHh6PsSZDzU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_CCulRIF_lRkN9ARd6wUU04
        subject_person_id: p_P55JoyvrtsfzbA6X9e4b8E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X3C7CnnV3BPEcEq3UF2gUs
          claim_id: c_CCulRIF_lRkN9ARd6wUU04
          source_id: s_tBE58XWdNxueHh6PsSZDzU
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kCdr4Vt3ng3vFN4WR6C2uB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
  other: []
---

# 王志高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志高 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kCdr4Vt3ng3vFN4WR6C2uB | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志高（CBDB 280587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280587&o=json)
