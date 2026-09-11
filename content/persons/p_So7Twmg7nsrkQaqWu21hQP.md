---
schema: wang-person/v1
id: p_So7Twmg7nsrkQaqWu21hQP
status: active
merged_into: null
display_name: 王乾福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PF2e4P6dvVCL52ngtEAPEG
        subject_person_id: p_So7Twmg7nsrkQaqWu21hQP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hbaDrr8ZqVtG9M9Ny89jLK
          claim_id: c_PF2e4P6dvVCL52ngtEAPEG
          source_id: s_v8Gq51PNJbpHDj3L9dqSvd
          stance: supports
          locator: CBDB:169732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169732）
          source: &a1
            id: s_v8Gq51PNJbpHDj3L9dqSvd
            source_type: api_record
            title: 中国历代人物传记资料库：王乾福（CBDB 169732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169732&o=json
            external_identifier: CBDB:169732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DUpp2Ecf5bCTcSFN6xT2j2
        subject_person_id: p_So7Twmg7nsrkQaqWu21hQP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GE9e3daiE8ioSjxDMmtL2c
          claim_id: c_DUpp2Ecf5bCTcSFN6xT2j2
          source_id: s_v8Gq51PNJbpHDj3L9dqSvd
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
        id: c_85oxsFg7b5uYC4Wxii1tvD
        subject_person_id: p_So7Twmg7nsrkQaqWu21hQP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MBPLaTriLpLp8Cf4S9pWvK
          claim_id: c_85oxsFg7b5uYC4Wxii1tvD
          source_id: s_v8Gq51PNJbpHDj3L9dqSvd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Cv3QKvYG5sBVHeER1JRjfE
        subject_person_id: p_So7Twmg7nsrkQaqWu21hQP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B46EZ-UwjbLhUUHa0ZlU4w
          claim_id: c_Cv3QKvYG5sBVHeER1JRjfE
          source_id: s_v8Gq51PNJbpHDj3L9dqSvd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t8fyJgt4QUozQe9AmvHMd8
        status: active
        display_name: 王景之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乾福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾福 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_t8fyJgt4QUozQe9AmvHMd8 | 王景之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾福（CBDB 169732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169732&o=json)
