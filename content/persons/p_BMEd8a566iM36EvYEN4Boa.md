---
schema: wang-person/v1
id: p_BMEd8a566iM36EvYEN4Boa
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nsW1y9AzxN6TBBE8E3E6jY
        subject_person_id: p_BMEd8a566iM36EvYEN4Boa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hCfHEdGK7BiN4LAsYNrWiM
          claim_id: c_nsW1y9AzxN6TBBE8E3E6jY
          source_id: s_FAd6b6xaQWXXoauLzRxAMR
          stance: supports
          locator: CBDB:215720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215720）
          source: &a1
            id: s_FAd6b6xaQWXXoauLzRxAMR
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 215720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215720&o=json
            external_identifier: CBDB:215720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dqDLhofCKSwg2MYzdsGoQL
        subject_person_id: p_BMEd8a566iM36EvYEN4Boa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 215720）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wtdl4u4bt6Dv5UMt5qmsjq
          claim_id: c_dqDLhofCKSwg2MYzdsGoQL
          source_id: s_FAd6b6xaQWXXoauLzRxAMR
          stance: supports
          locator: CBDB:215720
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
        id: c_suVz3EWl4HfS0CS8Q__4us
        subject_person_id: p_BMEd8a566iM36EvYEN4Boa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7fncKtMQNe53oEFJIWrvw
          claim_id: c_suVz3EWl4HfS0CS8Q__4us
          source_id: s_FAd6b6xaQWXXoauLzRxAMR
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7cZrKpwh44EGMwMKR3XMy
        status: active
        display_name: 王明時
        merged_into_person_id: null
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 215720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_P7cZrKpwh44EGMwMKR3XMy | 王明時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 215720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215720&o=json)
