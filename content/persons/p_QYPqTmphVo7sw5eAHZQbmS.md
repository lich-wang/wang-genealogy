---
schema: wang-person/v1
id: p_QYPqTmphVo7sw5eAHZQbmS
status: active
merged_into: null
display_name: 王進泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_psWQxFQsBeGJB2AZBm1suf
        subject_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nfrqycTWJQ4jcCagc1x6qv
          claim_id: c_psWQxFQsBeGJB2AZBm1suf
          source_id: s_H537rgHvaKyc62Yeugp8qk
          stance: supports
          locator: CBDB:57192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57192）
          source: &a1
            id: s_H537rgHvaKyc62Yeugp8qk
            source_type: api_record
            title: 中国历代人物传记资料库：王進泰（CBDB 57192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57192&o=json
            external_identifier: CBDB:57192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a4a354vQbZCK5ibiyW7mRd
        subject_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1705年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPK1KfKNoA2aCXKazQSi1c
          claim_id: c_a4a354vQbZCK5ibiyW7mRd
          source_id: s_H537rgHvaKyc62Yeugp8qk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WB5L6NFsDMSiARuigdpgJf
        subject_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NsiZaGVpGKrw8jzp4oAN9D
          claim_id: c_WB5L6NFsDMSiARuigdpgJf
          source_id: s_H537rgHvaKyc62Yeugp8qk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AvSyB3Ry6yK1qJe4UNTvjX
        subject_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T8wpLMg3R4VDMAVDR4zRnV
          claim_id: c_AvSyB3Ry6yK1qJe4UNTvjX
          source_id: s_H537rgHvaKyc62Yeugp8qk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GSiDlKv29fyOps3as4t1cJ
        subject_person_id: p_63snvz9zGDD7t6L83B6jts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cY0DI4AiuL6IqQwb78CCO
          claim_id: c_GSiDlKv29fyOps3as4t1cJ
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
          stance: supports
          locator: "(民國)續修陝西通志稿: 二百二十四卷 卷首一卷，lgid=1018936：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cdo2KwLcBLEECDXBmtt1f3
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 700241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json
            external_identifier: CBDB:700241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_63snvz9zGDD7t6L83B6jts
        status: active
        display_name: 王治
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王進泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進泰 | accepted |
| birth.date | 1705年 | accepted |
| death.date | 1787年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_63snvz9zGDD7t6L83B6jts | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進泰（CBDB 57192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57192&o=json)
- [中国历代人物传记资料库：王治（CBDB 700241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json)
