---
schema: wang-person/v1
id: p_MqmYrQwS5PiaGbgqSqmqwy
status: active
merged_into: null
display_name: 薛氏
revision: 1
cbdb_id: 37628
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eici2_K6YW5MnqAhV4qKq_
        subject_person_id: p_MqmYrQwS5PiaGbgqSqmqwy
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
        - id: cs_ekxawK4nRkuVuTvDeeftoC
          claim_id: c_Eici2_K6YW5MnqAhV4qKq_
          source_id: s_5ZrLfDQ45Rusuy_eEdz802
          stance: supports
          locator: CBDB:37628
          quotation: null
          interpretation_note: CBDB 明确记录的王拱辰配偶
          source: &a1
            id: s_5ZrLfDQ45Rusuy_eEdz802
            source_type: api_record
            title: 中国历代人物传记资料库：薛氏(王拱辰妻)（CBDB 37628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37628&o=json
            external_identifier: CBDB:37628
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
        id: c_xRwOjO3vwyx_UAaZS8oKoL
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MqmYrQwS5PiaGbgqSqmqwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kiodmMEvKM1ntzZzytNgxp
          claim_id: c_xRwOjO3vwyx_UAaZS8oKoL
          source_id: s_5ZrLfDQ45Rusuy_eEdz802
          stance: supports
          locator: CBDB 双向互证（妻子 薛氏(王拱辰妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WU89T3dCoRMDk6eTHgawKb
        status: active
        display_name: 王拱辰
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
| spouses | p_WU89T3dCoRMDk6eTHgawKb | 王拱辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：薛氏(王拱辰妻)（CBDB 37628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37628&o=json)
