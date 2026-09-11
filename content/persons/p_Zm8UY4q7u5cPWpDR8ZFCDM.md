---
schema: wang-person/v1
id: p_Zm8UY4q7u5cPWpDR8ZFCDM
status: active
merged_into: null
display_name: 汪氏
revision: 1
cbdb_id: 578400
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGlNVyjTVX9g_SRfGRoaS-
        subject_person_id: p_Zm8UY4q7u5cPWpDR8ZFCDM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKmuMv67pMdroqANsIHY8h
          claim_id: c_vGlNVyjTVX9g_SRfGRoaS-
          source_id: s_W2ryuD-wEDywhd3_T7adP4
          stance: supports
          locator: CBDB:578400
          quotation: null
          interpretation_note: CBDB 明确记录的王邦重配偶
          source: &a1
            id: s_W2ryuD-wEDywhd3_T7adP4
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王百齡母)（CBDB 578400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578400&o=json
            external_identifier: CBDB:578400
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
        id: c_nMOyBq69EfGeS8ixPXy3Er
        subject_person_id: p_isJKPWAA25Kf4S2gX7yDnp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Zm8UY4q7u5cPWpDR8ZFCDM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l1qN3_xtJTIt0aP9_2XUys
          claim_id: c_nMOyBq69EfGeS8ixPXy3Er
          source_id: s_W2ryuD-wEDywhd3_T7adP4
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163785：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_isJKPWAA25Kf4S2gX7yDnp
        status: active
        display_name: 王邦重
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 汪氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_isJKPWAA25Kf4S2gX7yDnp | 王邦重 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王百齡母)（CBDB 578400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578400&o=json)
