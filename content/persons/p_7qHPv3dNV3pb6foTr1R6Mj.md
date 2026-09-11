---
schema: wang-person/v1
id: p_7qHPv3dNV3pb6foTr1R6Mj
status: active
merged_into: null
display_name: 任氏
revision: 1
cbdb_id: 320260
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TPcSuEr0nKmiqE8F9uvZm-
        subject_person_id: p_7qHPv3dNV3pb6foTr1R6Mj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPUhjbWz4xk4Xi5bh3md2r
          claim_id: c_TPcSuEr0nKmiqE8F9uvZm-
          source_id: s_QkoyttXMgGStu0CRNt48PH
          stance: supports
          locator: CBDB:320260
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QkoyttXMgGStu0CRNt48PH
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王三聘妻)（CBDB 320260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320260&o=json
            external_identifier: CBDB:320260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8e0XFU6LbQllhTf5GARJK
        subject_person_id: p_7qHPv3dNV3pb6foTr1R6Mj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YXRpulbUiBk0DpQswGyW1i
          claim_id: c_g8e0XFU6LbQllhTf5GARJK
          source_id: s_QkoyttXMgGStu0CRNt48PH
          stance: supports
          locator: CBDB:320260
          quotation: null
          interpretation_note: CBDB 明确记录的王三聘配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sNYBM6V3Wemm82t67ouTds
        subject_person_id: p_ACc1xBws7mA2Ao333iSn1t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7qHPv3dNV3pb6foTr1R6Mj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjcW1j7DNu0AaBwVJls6ME
          claim_id: c_sNYBM6V3Wemm82t67ouTds
          source_id: s_QkoyttXMgGStu0CRNt48PH
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第二十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ACc1xBws7mA2Ao333iSn1t
        status: active
        display_name: 王三聘
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 任氏，明人物。嘉靖三十五年進士。（中国历代人物传记资料库 CBDB 320260） | accepted |
| name.primary | 任氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ACc1xBws7mA2Ao333iSn1t | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王三聘妻)（CBDB 320260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320260&o=json)
