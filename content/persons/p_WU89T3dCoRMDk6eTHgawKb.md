---
schema: wang-person/v1
id: p_WU89T3dCoRMDk6eTHgawKb
status: active
merged_into: null
display_name: 王拱辰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w4vPa8iiADRSiDnWw5hHph
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GV8gUYCvAnZPbd9HUZwAFw
          claim_id: c_w4vPa8iiADRSiDnWw5hHph
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: CBDB:1847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1847）
          source: &a1
            id: s_K58g1dFPD1BQpDPDwmjsyE
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QeiPWV9rRH6PwuVy7KJVaB
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1012年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SNKZm9aZqnggLBu8i5adr
          claim_id: c_QeiPWV9rRH6PwuVy7KJVaB
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
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
        id: c_msYPbADTbYWBLAb6z7fQVb
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nELw4ahMnS4u5xGus69ZMP
          claim_id: c_msYPbADTbYWBLAb6z7fQVb
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
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
        id: c_2w85ZK37DtGrWJU5RadXMp
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ErcxRBHQC6wGaNjC6N39pa
          claim_id: c_2w85ZK37DtGrWJU5RadXMp
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
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
        id: c_U96dfAZ_m17I3PyyZQ9pf3
        subject_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WU89T3dCoRMDk6eTHgawKb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBdPMA_OcM8taWEz-fW6BA
          claim_id: c_U96dfAZ_m17I3PyyZQ9pf3
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1779;1780：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H3E5VxBaQfqgvzveq3gJSK
        status: active
        display_name: 王代恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Icsk86jYQ931rRDAmU4ugu
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f323eQKL5YoD7qUUbCDtT7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvbc3B68MoGhedzJ81kUw1
          claim_id: c_Icsk86jYQ931rRDAmU4ugu
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1779;1782：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f323eQKL5YoD7qUUbCDtT7
        status: active
        display_name: 薛氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_alj7tdqgSkQ4fKgAv-gmFc
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34eFT1mxj2vOUP1fQlHAyW
          claim_id: c_alj7tdqgSkQ4fKgAv-gmFc
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，939：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3Ai1qkYjUBdtWJB4qPpmzV
        status: active
        display_name: 王湘
        merged_into_person_id: null
  other: []
---

# 王拱辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱辰 | accepted |
| birth.date | 1012年 | accepted |
| death.date | 1085年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H3E5VxBaQfqgvzveq3gJSK | 王代恕 | accepted |
| spouses | p_f323eQKL5YoD7qUUbCDtT7 | 薛氏 | accepted |
| descendants | p_3Ai1qkYjUBdtWJB4qPpmzV | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱辰（CBDB 1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
