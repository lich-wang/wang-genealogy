---
schema: wang-person/v1
id: p_9f4FXEus92MxR1KgNAKHGn
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3zxMhxJ1gZgQXHCUKQJ9Sy
        subject_person_id: p_9f4FXEus92MxR1KgNAKHGn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L9DWcT6XwD7w5GyCSHc4PL
          claim_id: c_3zxMhxJ1gZgQXHCUKQJ9Sy
          source_id: s_ive7iRvKY9AtzAofgt3gdW
          stance: supports
          locator: CBDB:227346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227346）
          source: &a1
            id: s_ive7iRvKY9AtzAofgt3gdW
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 227346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227346&o=json
            external_identifier: CBDB:227346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e27MQsCtL36qd83DbtZSiK
        subject_person_id: p_9f4FXEus92MxR1KgNAKHGn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 227346）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AEjpVHSaKcRxhaFDASGgIs
          claim_id: c_e27MQsCtL36qd83DbtZSiK
          source_id: s_ive7iRvKY9AtzAofgt3gdW
          stance: supports
          locator: CBDB:227346
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
        id: c_Ht8_eQsWhJaL0AWDn2OL3Y
        subject_person_id: p_9f4FXEus92MxR1KgNAKHGn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Myx-Kv1MtnerGoEnTZPMJN
          claim_id: c_Ht8_eQsWhJaL0AWDn2OL3Y
          source_id: s_ive7iRvKY9AtzAofgt3gdW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uu4yjus8EVVwp6m8E5Qav5
        status: active
        display_name: 王建中
        merged_into_person_id: null
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 227346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uu4yjus8EVVwp6m8E5Qav5 | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 227346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227346&o=json)
