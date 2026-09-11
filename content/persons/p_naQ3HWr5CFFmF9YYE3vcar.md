---
schema: wang-person/v1
id: p_naQ3HWr5CFFmF9YYE3vcar
status: active
merged_into: null
display_name: 胡氏
revision: 1
cbdb_id: 325316
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4ZUF4WvaiW_ezX__1ehFh
        subject_person_id: p_naQ3HWr5CFFmF9YYE3vcar
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Qx93wqJSKWwQ0OAzXtyLV
          claim_id: c_Z4ZUF4WvaiW_ezX__1ehFh
          source_id: s_UareVeL1ssNisw6tHN2-ov
          stance: supports
          locator: CBDB:325316
          quotation: null
          interpretation_note: CBDB 明确记录的王愛配偶
          source: &a1
            id: s_UareVeL1ssNisw6tHN2-ov
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(楊起元妻)（CBDB 325316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325316&o=json
            external_identifier: CBDB:325316
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
        id: c_05bLG1v3lNlfbgZxXfRzqt
        subject_person_id: p_BcuhtjD5d59vQDR3NcyyPZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_naQ3HWr5CFFmF9YYE3vcar
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMFp-lMGb60_Q9XXiNomej
          claim_id: c_05bLG1v3lNlfbgZxXfRzqt
          source_id: s_UareVeL1ssNisw6tHN2-ov
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BcuhtjD5d59vQDR3NcyyPZ
        status: active
        display_name: 王愛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 胡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BcuhtjD5d59vQDR3NcyyPZ | 王愛 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(楊起元妻)（CBDB 325316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325316&o=json)
