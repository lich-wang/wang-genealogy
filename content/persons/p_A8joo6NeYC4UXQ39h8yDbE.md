---
schema: wang-person/v1
id: p_A8joo6NeYC4UXQ39h8yDbE
status: active
merged_into: null
display_name: 王萬全
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1sgzPgDcFRHCw4spuMTXyV
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LxUWmQ7f318wt2dFqW4GgF
          claim_id: c_1sgzPgDcFRHCw4spuMTXyV
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
          stance: supports
          locator: CBDB:12048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12048）
          source: &a1
            id: s_BpRUdpD2Nob1Bc4oRdRgCc
            source_type: api_record
            title: 中国历代人物传记资料库：王萬全（CBDB 12048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12048&o=json
            external_identifier: CBDB:12048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wnZp5qKToBpQcXHkXd2eLh
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1133年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBKgtVqDP18QhGzYaApZDt
          claim_id: c_wnZp5qKToBpQcXHkXd2eLh
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
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
        id: c_M6Y8GmuMfBUvSbDvJPBKq1
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1213年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_whT2Wpq6GakPWJkNRDAY5i
          claim_id: c_M6Y8GmuMfBUvSbDvJPBKq1
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
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
        id: c_QU82NgWBRVNM9HowF976VT
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
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
        - id: cs_VBdoMqg4bLMganBUrncbcK
          claim_id: c_QU82NgWBRVNM9HowF976VT
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
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
        id: c_fxBXusykWRc3zFkXMOVq4K
        subject_person_id: p_A8joo6NeYC4UXQ39h8yDbE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZsjbF1Mqq3C8MjG69TLp1v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Ho1wUcUgekGhGZU3jxk6D
          claim_id: c_fxBXusykWRc3zFkXMOVq4K
          source_id: s_BpRUdpD2Nob1Bc4oRdRgCc
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1064：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZsjbF1Mqq3C8MjG69TLp1v
        status: active
        display_name: 王遇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬全 | accepted |
| birth.date | 1133年 | accepted |
| death.date | 1213年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZsjbF1Mqq3C8MjG69TLp1v | 王遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬全（CBDB 12048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12048&o=json)
