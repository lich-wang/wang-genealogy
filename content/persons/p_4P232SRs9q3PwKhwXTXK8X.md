---
schema: wang-person/v1
id: p_4P232SRs9q3PwKhwXTXK8X
status: active
merged_into: null
display_name: 王理
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GTSRhQzRX4VuK9ce5rFri6
        subject_person_id: p_4P232SRs9q3PwKhwXTXK8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n5mSiLe3p1K6QbAwFunNJC
          claim_id: c_GTSRhQzRX4VuK9ce5rFri6
          source_id: s_ocPZqKbfRNLEB3waqRGVLL
          stance: supports
          locator: CBDB:308776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308776）
          source: &a1
            id: s_ocPZqKbfRNLEB3waqRGVLL
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 308776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308776&o=json
            external_identifier: CBDB:308776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xw3iqume15LMyMcCQJV6PA
        subject_person_id: p_4P232SRs9q3PwKhwXTXK8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。嘉靖二十六年進士，曾任布政使司左參議。（中国历代人物传记资料库 CBDB 308776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mPlXhq5EDs1VW_8u57xxW5
          claim_id: c_xw3iqume15LMyMcCQJV6PA
          source_id: s_ocPZqKbfRNLEB3waqRGVLL
          stance: supports
          locator: CBDB:308776
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
        id: c_6sP7WwL8Rc918im4MmuJxL
        subject_person_id: p_4P232SRs9q3PwKhwXTXK8X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C0XdsZ4f9qc3hhMqzsFy9k
          claim_id: c_6sP7WwL8Rc918im4MmuJxL
          source_id: s_ocPZqKbfRNLEB3waqRGVLL
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FDfwTTY5mqzGJCTTHJFcH8
        status: active
        display_name: 王一夔
        merged_into_person_id: null
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| bio.summary | 王理，明人物。嘉靖二十六年進士，曾任布政使司左參議。（中国历代人物传记资料库 CBDB 308776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FDfwTTY5mqzGJCTTHJFcH8 | 王一夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 308776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308776&o=json)
