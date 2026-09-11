---
schema: wang-person/v1
id: p_gCeXnQJfBcmcUVqZ7mTfbK
status: active
merged_into: null
display_name: 夏菊初
revision: 1
cbdb_id: 121124
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wn60SDVvdZHf2ji0czzGZf
        subject_person_id: p_gCeXnQJfBcmcUVqZ7mTfbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏菊初
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EK2r0EZoHUYvOOIZ5mFLYk
          claim_id: c_wn60SDVvdZHf2ji0czzGZf
          source_id: s_beQVfA97TfFA3ooIkLomku
          stance: supports
          locator: CBDB:121124
          quotation: null
          interpretation_note: CBDB 明确记录的王蓉生配偶
          source: &a1
            id: s_beQVfA97TfFA3ooIkLomku
            source_type: api_record
            title: 中国历代人物传记资料库：夏菊初（CBDB 121124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121124&o=json
            external_identifier: CBDB:121124
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
        id: c_JvZDZg1oes_M9MfnlnEwfi
        subject_person_id: p_HNiPAseobRFP6uck6J2uC7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gCeXnQJfBcmcUVqZ7mTfbK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tA7kPH4N1tgF2MWZZX8fVw
          claim_id: c_JvZDZg1oes_M9MfnlnEwfi
          source_id: s_beQVfA97TfFA3ooIkLomku
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4006, HuWenKai #458：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HNiPAseobRFP6uck6J2uC7
        status: active
        display_name: 王蓉生
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 夏菊初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 夏菊初 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HNiPAseobRFP6uck6J2uC7 | 王蓉生 | accepted |

## 外部来源

- [中国历代人物传记资料库：夏菊初（CBDB 121124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121124&o=json)
