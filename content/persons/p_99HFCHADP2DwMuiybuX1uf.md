---
schema: wang-person/v1
id: p_99HFCHADP2DwMuiybuX1uf
status: active
merged_into: null
display_name: 薛氏
revision: 1
cbdb_id: 37965
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3z0d-mj_LhETPe1IUmxY45
        subject_person_id: p_99HFCHADP2DwMuiybuX1uf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 薛氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O1WXMVTLE6wt_lHNIAqYv1
          claim_id: c_3z0d-mj_LhETPe1IUmxY45
          source_id: s_aerMs_IlV7mAoGbv3JU46h
          stance: supports
          locator: CBDB:37965
          quotation: null
          interpretation_note: CBDB 明确记录的王準配偶
          source: &a1
            id: s_aerMs_IlV7mAoGbv3JU46h
            source_type: api_record
            title: 中国历代人物传记资料库：薛氏(王準妻)（CBDB 37965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37965&o=json
            external_identifier: CBDB:37965
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
        id: c_zy9nwCMdxH5o8WuB3AysK7
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_99HFCHADP2DwMuiybuX1uf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EUrX0VX8GtzOunDHh1R_3x
          claim_id: c_zy9nwCMdxH5o8WuB3AysK7
          source_id: s_aerMs_IlV7mAoGbv3JU46h
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qtbxt55gw7F1hTWtEuCisP
        status: active
        display_name: 王準
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 薛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 薛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qtbxt55gw7F1hTWtEuCisP | 王準 | accepted |

## 外部来源

- [中国历代人物传记资料库：薛氏(王準妻)（CBDB 37965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37965&o=json)
