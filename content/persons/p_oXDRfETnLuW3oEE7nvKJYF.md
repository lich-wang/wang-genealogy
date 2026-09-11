---
schema: wang-person/v1
id: p_oXDRfETnLuW3oEE7nvKJYF
status: active
merged_into: null
display_name: 王國賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zJgAYGRmng2MpaKDBGU38
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MBvQTyuhKmk7kH6JMPGC1Y
          claim_id: c_1zJgAYGRmng2MpaKDBGU38
          source_id: s_8zi5seb7f3H7ouRKuv684n
          stance: supports
          locator: CBDB:206149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206149）
          source: &a1
            id: s_8zi5seb7f3H7ouRKuv684n
            source_type: api_record
            title: 中国历代人物传记资料库：王國賓（CBDB 206149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206149&o=json
            external_identifier: CBDB:206149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8cEfFZSFBDizoiAdc2XcwR
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uKv3bLAn2k1ZntngmoUpEb
          claim_id: c_8cEfFZSFBDizoiAdc2XcwR
          source_id: s_8zi5seb7f3H7ouRKuv684n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nwSjqhsDgWEHLGjiJTTZPR
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
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
        - id: cs_HpvBeSDzBd6yV3DduWMZgw
          claim_id: c_nwSjqhsDgWEHLGjiJTTZPR
          source_id: s_8zi5seb7f3H7ouRKuv684n
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
        id: c_qmSAUrVYuRzwYVw4tJRDCy
        subject_person_id: p_GyHrAoxhpZ634C9AC4RXkc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jyUHIZULuEDBXApBDBzNr
          claim_id: c_qmSAUrVYuRzwYVw4tJRDCy
          source_id: s_LTotmTDPQrSLyEZBMD13Um
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LTotmTDPQrSLyEZBMD13Um
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 213994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json
            external_identifier: CBDB:213994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyHrAoxhpZ634C9AC4RXkc
        status: active
        display_name: 王達
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國賓 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_GyHrAoxhpZ634C9AC4RXkc | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 213994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json)
- [中国历代人物传记资料库：王國賓（CBDB 206149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206149&o=json)
