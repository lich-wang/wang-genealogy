---
schema: wang-person/v1
id: p_thPKstWT5YUsKmwehAYcfL
status: active
merged_into: null
display_name: 王喜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sFMZKPv5m6NcrBSMbCg58Q
        subject_person_id: p_thPKstWT5YUsKmwehAYcfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jKSYt1Nqcpz8X92PQ8foTg
          claim_id: c_sFMZKPv5m6NcrBSMbCg58Q
          source_id: s_qDxCjCxebcFszv3mi9b1D9
          stance: supports
          locator: CBDB:211332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211332）
          source: &a1
            id: s_qDxCjCxebcFszv3mi9b1D9
            source_type: api_record
            title: 中国历代人物传记资料库：王喜（CBDB 211332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211332&o=json
            external_identifier: CBDB:211332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HmrqyT296xQpGimUiMysHi
        subject_person_id: p_thPKstWT5YUsKmwehAYcfL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211332）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jSR5RSEC_fw-LpLlGW6fkz
          claim_id: c_HmrqyT296xQpGimUiMysHi
          source_id: s_qDxCjCxebcFszv3mi9b1D9
          stance: supports
          locator: CBDB:211332
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_L2qDsHjjT4qZAV16DhYVwM
        subject_person_id: p_thPKstWT5YUsKmwehAYcfL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o8MQvtP2i0D3bkx5XkBYfT
          claim_id: c_L2qDsHjjT4qZAV16DhYVwM
          source_id: s_qDxCjCxebcFszv3mi9b1D9
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6HcTFXM8o7jGP9HyscW8Hm
        status: active
        display_name: 王胤祥
        merged_into_person_id: null
  other: []
---

# 王喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜 | accepted |
| bio.summary | 王喜，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6HcTFXM8o7jGP9HyscW8Hm | 王胤祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王喜（CBDB 211332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211332&o=json)
