---
schema: wang-person/v1
id: p_N5iAhWP4KE2AcDLMVJFVJe
status: active
merged_into: null
display_name: 王宗周
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_roHX8bQ79u2XEpjKYV2hU6
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6GZ5No9CF1TmFj5PnbicCW
          claim_id: c_roHX8bQ79u2XEpjKYV2hU6
          source_id: s_n2GonCJoTcA9fgYzXuzMG2
          stance: supports
          locator: CBDB:317545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317545）
          source: &a1
            id: s_n2GonCJoTcA9fgYzXuzMG2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗周（CBDB 317545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317545&o=json
            external_identifier: CBDB:317545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_955FUEa1CpcctgWK86N2NT
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗周，明人物。嘉靖三十二年進士，籍贯商丘，曾任知縣。（中国历代人物传记资料库 CBDB 317545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n9vxjdqZOCvFZDLDib5BJZ
          claim_id: c_955FUEa1CpcctgWK86N2NT
          source_id: s_n2GonCJoTcA9fgYzXuzMG2
          stance: supports
          locator: CBDB:317545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f-qx_VcE4u768SpOQhQcMA
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwmEQL0wzOZCRIOV0vbOxr
          claim_id: c_f-qx_VcE4u768SpOQhQcMA
          source_id: s_n2GonCJoTcA9fgYzXuzMG2
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗周 | accepted |
| bio.summary | 王宗周，明人物。嘉靖三十二年進士，籍贯商丘，曾任知縣。（中国历代人物传记资料库 CBDB 317545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗周（CBDB 317545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317545&o=json)
