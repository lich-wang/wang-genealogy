---
schema: wang-person/v1
id: p_sgA76MaSaZNc6H2p7RgTa7
status: active
merged_into: null
display_name: 王榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zCDpPtzidkErhTEHQAE44s
        subject_person_id: p_sgA76MaSaZNc6H2p7RgTa7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqBdNNxFSm1RkwU5nNXxBQ
          claim_id: c_zCDpPtzidkErhTEHQAE44s
          source_id: s_v1SPiDFttL1x1WGNJ4QJso
          stance: supports
          locator: CBDB:277332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277332）
          source: &a1
            id: s_v1SPiDFttL1x1WGNJ4QJso
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 277332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277332&o=json
            external_identifier: CBDB:277332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sp68zgFPTK1kzYWex4hF5U
        subject_person_id: p_sgA76MaSaZNc6H2p7RgTa7
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
        - id: cs_1Csi7E317dYFcguBZZeSLx
          claim_id: c_sp68zgFPTK1kzYWex4hF5U
          source_id: s_v1SPiDFttL1x1WGNJ4QJso
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
        id: c_4Cnl7wo7Uvpjy2rBd5CU6U
        subject_person_id: p_sgA76MaSaZNc6H2p7RgTa7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jApABJHQqEgd77SBohjrMK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Y1y529bQSO2kHU262r4JG
          claim_id: c_4Cnl7wo7Uvpjy2rBd5CU6U
          source_id: s_v1SPiDFttL1x1WGNJ4QJso
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jApABJHQqEgd77SBohjrMK
        status: active
        display_name: 王溱
        merged_into_person_id: null
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jApABJHQqEgd77SBohjrMK | 王溱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 277332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277332&o=json)
