---
schema: wang-person/v1
id: p_ARWLBiAH83mGQZaM2NfyK3
status: active
merged_into: null
display_name: 杜氏
revision: 1
cbdb_id: 305739
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFf00k6mhzGjps3Dl0-ExU
        subject_person_id: p_ARWLBiAH83mGQZaM2NfyK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杜氏，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 305739）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w22bYTT4sMkFH9JO-ST7Xu
          claim_id: c_fFf00k6mhzGjps3Dl0-ExU
          source_id: s_NCj9eiGNLrXYdYa_aHwspq
          stance: supports
          locator: CBDB:305739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NCj9eiGNLrXYdYa_aHwspq
            source_type: api_record
            title: 中国历代人物传记资料库：杜氏(王秉彝妻)（CBDB 305739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305739&o=json
            external_identifier: CBDB:305739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_loL9waFO267-tpinakw2cO
        subject_person_id: p_ARWLBiAH83mGQZaM2NfyK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杜氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSkmdhJ4iSl_1Piu0o1eLm
          claim_id: c_loL9waFO267-tpinakw2cO
          source_id: s_NCj9eiGNLrXYdYa_aHwspq
          stance: supports
          locator: CBDB:305739
          quotation: null
          interpretation_note: CBDB 明确记录的王秉彝配偶
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
        id: c_Nala4sU28JG2TyIorgdeSa
        subject_person_id: p_3h5g9NkXDMotNKCta4dEHB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ARWLBiAH83mGQZaM2NfyK3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GILCkDnHeZOoc7HNBEpF9v
          claim_id: c_Nala4sU28JG2TyIorgdeSa
          source_id: s_NCj9eiGNLrXYdYa_aHwspq
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3h5g9NkXDMotNKCta4dEHB
        status: active
        display_name: 王秉彝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 杜氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 杜氏，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 305739） | accepted |
| name.primary | 杜氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3h5g9NkXDMotNKCta4dEHB | 王秉彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：杜氏(王秉彝妻)（CBDB 305739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305739&o=json)
