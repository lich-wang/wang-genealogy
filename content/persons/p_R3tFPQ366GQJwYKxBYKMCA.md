---
schema: wang-person/v1
id: p_R3tFPQ366GQJwYKxBYKMCA
status: active
merged_into: null
display_name: 王甡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P38WQ1wfR9D2TDHFjbGKnt
        subject_person_id: p_R3tFPQ366GQJwYKxBYKMCA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iCbFWv8FzXbEaTA5hJFy5
          claim_id: c_P38WQ1wfR9D2TDHFjbGKnt
          source_id: s_KFRXzqMWGxfb9yJr8J5Ri9
          stance: supports
          locator: CBDB:526983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526983）
          source: &a1
            id: s_KFRXzqMWGxfb9yJr8J5Ri9
            source_type: api_record
            title: 中国历代人物传记资料库：王甡（CBDB 526983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526983&o=json
            external_identifier: CBDB:526983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8c7yAB78phVXRqcUGcs61
        subject_person_id: p_R3tFPQ366GQJwYKxBYKMCA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甡，史料所见人物。本项目依据《中国历代人物传记资料库：王甡（CBDB 526983）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u8SgCymljzETlu5lF1Gl5_
          claim_id: c_N8c7yAB78phVXRqcUGcs61
          source_id: s_KFRXzqMWGxfb9yJr8J5Ri9
          stance: supports
          locator: CBDB:526983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_3iAvQgDqZ-mleCrBi3KpH6
        subject_person_id: p_R3tFPQ366GQJwYKxBYKMCA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYajiCnXmJJh82rPSA7pEA
          claim_id: c_3iAvQgDqZ-mleCrBi3KpH6
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13164：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_95mKyZoEKdmPcKU7kAfRoT
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 69453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json
            external_identifier: CBDB:69453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nwCMi4iZGr3qyJpkQ9CEtf
        status: active
        display_name: 王澍
        merged_into_person_id: null
  other: []
---

# 王甡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王甡 | accepted |
| bio.summary | 王甡，史料所见人物。本项目依据《中国历代人物传记资料库：王甡（CBDB 526983）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nwCMi4iZGr3qyJpkQ9CEtf | 王澍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甡（CBDB 526983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526983&o=json)
- [中国历代人物传记资料库：王澍（CBDB 69453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json)
