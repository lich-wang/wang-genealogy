---
schema: wang-person/v1
id: p_kgb1sTL7LdqQgEftcjsnu4
status: active
merged_into: null
display_name: 王至和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQwYCJ45C3eSmZVHDKA1fL
        subject_person_id: p_kgb1sTL7LdqQgEftcjsnu4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKZ1qte11ksFMmeAKaJAJs
          claim_id: c_HQwYCJ45C3eSmZVHDKA1fL
          source_id: s_3LRNAabEbfVdUEPW373vnV
          stance: supports
          locator: CBDB:134060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134060）
          source: &a1
            id: s_3LRNAabEbfVdUEPW373vnV
            source_type: api_record
            title: 中国历代人物传记资料库：王至和（CBDB 134060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134060&o=json
            external_identifier: CBDB:134060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2R1VWkQ739GqhKY3q2igzY
        subject_person_id: p_kgb1sTL7LdqQgEftcjsnu4
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
        - id: cs_RnCZBTGaHwm9kpMm56XYTU
          claim_id: c_2R1VWkQ739GqhKY3q2igzY
          source_id: s_3LRNAabEbfVdUEPW373vnV
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
  ancestors:
    - claim:
        id: c_LR6Y-qcf45N0YcbP4l3leo
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kgb1sTL7LdqQgEftcjsnu4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvenqhjGDEyHP_GeNJbSS2
          claim_id: c_LR6Y-qcf45N0YcbP4l3leo
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oBoM5ZPjLx797LqUayBpbH
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 100852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json
            external_identifier: CBDB:100852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王至和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王至和 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 100852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json)
- [中国历代人物传记资料库：王至和（CBDB 134060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134060&o=json)
