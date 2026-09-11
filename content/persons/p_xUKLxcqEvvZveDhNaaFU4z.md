---
schema: wang-person/v1
id: p_xUKLxcqEvvZveDhNaaFU4z
status: active
merged_into: null
display_name: 牛氏
revision: 1
cbdb_id: 239295
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CbvS339o5PamK6McqYZbWH
        subject_person_id: p_xUKLxcqEvvZveDhNaaFU4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 牛氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4B7WQ2VCn4KEDE4ELZSBZ
          claim_id: c_CbvS339o5PamK6McqYZbWH
          source_id: s_XA-I_udPL0Mrdq1_YDfOAu
          stance: supports
          locator: CBDB:239295
          quotation: null
          interpretation_note: CBDB 明确记录的王福配偶
          source: &a1
            id: s_XA-I_udPL0Mrdq1_YDfOAu
            source_type: api_record
            title: 中国历代人物传记资料库：牛氏(王福妻)（CBDB 239295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239295&o=json
            external_identifier: CBDB:239295
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
        id: c_YmRsc-7uzVuL3OIDcb6NUi
        subject_person_id: p_H841UufcMkWpzbemaqposM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xUKLxcqEvvZveDhNaaFU4z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTe4z_OwkhiIcitikkIS74
          claim_id: c_YmRsc-7uzVuL3OIDcb6NUi
          source_id: s_XA-I_udPL0Mrdq1_YDfOAu
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 牛氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 牛氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H841UufcMkWpzbemaqposM | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：牛氏(王福妻)（CBDB 239295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239295&o=json)
