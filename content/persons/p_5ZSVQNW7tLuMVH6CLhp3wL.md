---
schema: wang-person/v1
id: p_5ZSVQNW7tLuMVH6CLhp3wL
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 38063
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CUzyLtm-pwYoQ2pT35QrKU
        subject_person_id: p_5ZSVQNW7tLuMVH6CLhp3wL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-mzpo_GoCYsbiHNwHH2-au
          claim_id: c_CUzyLtm-pwYoQ2pT35QrKU
          source_id: s_dtrrkkONML-6kaHIISPJj4
          stance: supports
          locator: CBDB:38063
          quotation: null
          interpretation_note: CBDB 明确记录的王景亮配偶
          source: &a1
            id: s_dtrrkkONML-6kaHIISPJj4
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王景亮妻)（CBDB 38063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38063&o=json
            external_identifier: CBDB:38063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
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
        id: c_0erYPH89D5HYJHX1bS_Gbk
        subject_person_id: p_5ZSVQNW7tLuMVH6CLhp3wL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_161GNVSM8DiRJnB3XBWjtc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1JSJ8quQV7jY2g7SOozlq
          claim_id: c_0erYPH89D5HYJHX1bS_Gbk
          source_id: s_dtrrkkONML-6kaHIISPJj4
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1920：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_161GNVSM8DiRJnB3XBWjtc
        status: active
        display_name: 王景亮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_161GNVSM8DiRJnB3XBWjtc | 王景亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王景亮妻)（CBDB 38063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38063&o=json)
