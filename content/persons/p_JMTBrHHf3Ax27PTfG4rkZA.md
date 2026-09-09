---
schema: wang-person/v1
id: p_JMTBrHHf3Ax27PTfG4rkZA
status: active
merged_into: null
display_name: 王仲仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9ZxSazbrv4Lao4j5u1sx3
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8obPXGDkHQJWJru8qctTm5
          claim_id: c_J9ZxSazbrv4Lao4j5u1sx3
          source_id: s_FkT5yeqEdLrLAqA2ug1qJb
          stance: supports
          locator: CBDB:318406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318406）
          source: &a1
            id: s_FkT5yeqEdLrLAqA2ug1qJb
            source_type: api_record
            title: 中国历代人物传记资料库：王仲仁（CBDB 318406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318406&o=json
            external_identifier: CBDB:318406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pqckQLD3cbWbbCi3HS19PP
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
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
        - id: cs_n79W6JwZnPf99pdu9sMAAz
          claim_id: c_pqckQLD3cbWbbCi3HS19PP
          source_id: s_FkT5yeqEdLrLAqA2ug1qJb
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
  descendants: []
  other: []
---

# 王仲仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲仁（CBDB 318406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318406&o=json)
