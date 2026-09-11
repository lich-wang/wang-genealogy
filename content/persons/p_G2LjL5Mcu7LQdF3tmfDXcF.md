---
schema: wang-person/v1
id: p_G2LjL5Mcu7LQdF3tmfDXcF
status: active
merged_into: null
display_name: 王善慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SV1cL7PA1MB4gdg54Mu9Xg
        subject_person_id: p_G2LjL5Mcu7LQdF3tmfDXcF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_je7dVAMEZpTXUYAFJ8crKn
          claim_id: c_SV1cL7PA1MB4gdg54Mu9Xg
          source_id: s_dxEp5z37sEXyzefYv8zwqb
          stance: supports
          locator: CBDB:229752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229752）
          source: &a1
            id: s_dxEp5z37sEXyzefYv8zwqb
            source_type: api_record
            title: 中国历代人物传记资料库：王善慶（CBDB 229752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229752&o=json
            external_identifier: CBDB:229752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7vf4qLaHXFLEhoHRR2r3Yo
        subject_person_id: p_G2LjL5Mcu7LQdF3tmfDXcF
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
        - id: cs_5FrF3GVBi3KnAyHwXBbuoq
          claim_id: c_7vf4qLaHXFLEhoHRR2r3Yo
          source_id: s_dxEp5z37sEXyzefYv8zwqb
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
        id: c_HdUBYwChXOK4HXKjMq40U6
        subject_person_id: p_G2LjL5Mcu7LQdF3tmfDXcF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zOAouEtVjCil0C9Y5hUawk
          claim_id: c_HdUBYwChXOK4HXKjMq40U6
          source_id: s_dxEp5z37sEXyzefYv8zwqb
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_APgCbU3BBu68y3JhFPX3Tu
        status: active
        display_name: 王進
        merged_into_person_id: null
  other: []
---

# 王善慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善慶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_APgCbU3BBu68y3JhFPX3Tu | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王善慶（CBDB 229752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229752&o=json)
