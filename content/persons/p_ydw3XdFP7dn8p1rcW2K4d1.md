---
schema: wang-person/v1
id: p_ydw3XdFP7dn8p1rcW2K4d1
status: active
merged_into: null
display_name: 焦氏
revision: 1
cbdb_id: 244357
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7V9vTDGewyF6uPFYx75SDA
        subject_person_id: p_ydw3XdFP7dn8p1rcW2K4d1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 焦氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Ump78IRz6CUlEgaAeVsIM
          claim_id: c_7V9vTDGewyF6uPFYx75SDA
          source_id: s_ykLVXnaXKYihya5LnBpm16
          stance: supports
          locator: CBDB:244357
          quotation: null
          interpretation_note: CBDB 明确记录的王錦配偶
          source: &a1
            id: s_ykLVXnaXKYihya5LnBpm16
            source_type: api_record
            title: 中国历代人物传记资料库：焦氏(王錦妻)（CBDB 244357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244357&o=json
            external_identifier: CBDB:244357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nb8HuNhlL9R6C52uIeojSS
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ydw3XdFP7dn8p1rcW2K4d1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Ncj6PkmYdiljyw4sIDKB8
          claim_id: c_Nb8HuNhlL9R6C52uIeojSS
          source_id: s_ykLVXnaXKYihya5LnBpm16
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_epxa1325d3t8zGBhqaGATe
        status: active
        display_name: 王錦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 焦氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 焦氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_epxa1325d3t8zGBhqaGATe | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：焦氏(王錦妻)（CBDB 244357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244357&o=json)
