---
schema: wang-person/v1
id: p_53ADyQPeHfyWpAQcTUrMfN
status: active
merged_into: null
display_name: 王順德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T1grucuaQR2T7cgvjpFTKQ
        subject_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3613qLAjUJWGNKb7xyEvg4
          claim_id: c_T1grucuaQR2T7cgvjpFTKQ
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: CBDB:203599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203599）
          source: &a1
            id: s_5eKwFEmCQjg83YXVcQXfxy
            source_type: api_record
            title: 中国历代人物传记资料库：王順德（CBDB 203599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json
            external_identifier: CBDB:203599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Si3xNTqtJF7PzEu4wZaeL7
        subject_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEJd2DRUNP6dE9YmEfKEyC
          claim_id: c_Si3xNTqtJF7PzEu4wZaeL7
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d9gPVkbGLKDTyWCqnQqYbe
        subject_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順德（生于1501年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 203599）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M2OD8ur4x0h5EvFMn_oHco
          claim_id: c_d9gPVkbGLKDTyWCqnQqYbe
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: CBDB:203599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RX9mtgYrTox8l43RKPyMJS
        subject_person_id: p_f8PetQxctoF7VjZ8k12xc4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uFvic6UWuSCgYbCRug2QVP
          claim_id: c_RX9mtgYrTox8l43RKPyMJS
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f8PetQxctoF7VjZ8k12xc4
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LFjVHQRt_HEmahvwK-TUhO
        subject_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_auz8TP4X9PjXhKtkqbbEmm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_otd8uWShtdzhc_mUkGjiJD
          claim_id: c_LFjVHQRt_HEmahvwK-TUhO
          source_id: s_pvGRDVszNu7kzzSL8zrvtv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pvGRDVszNu7kzzSL8zrvtv
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王順德妻)（CBDB 307135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307135&o=json
            external_identifier: CBDB:307135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_auz8TP4X9PjXhKtkqbbEmm
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_eE3dxpSwm6x-WY5jhcwnGS
        subject_person_id: p_6CiZHKK2Zq8ArK3UYSB5qL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UD8Vo7ZjgnitSN4mRTc5gq
          claim_id: c_eE3dxpSwm6x-WY5jhcwnGS
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6CiZHKK2Zq8ArK3UYSB5qL
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_QtAPhQflfThMCNCIgth-wK
        subject_person_id: p_MWM8783wp2tp4uBKaxsFDw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZpkDuG5DxoVXnccUFMPFU
          claim_id: c_QtAPhQflfThMCNCIgth-wK
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWM8783wp2tp4uBKaxsFDw
        status: active
        display_name: 王臣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王順德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順德 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | 王順德（生于1501年），明人物。明清進士進士，籍贯瀘州，入仕進士。（中国历代人物传记资料库 CBDB 203599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f8PetQxctoF7VjZ8k12xc4 | 王大才 | accepted |
| spouses | p_auz8TP4X9PjXhKtkqbbEmm | 楊氏 | accepted |
| ancestors | p_6CiZHKK2Zq8ArK3UYSB5qL | 王瑄 | accepted |
| ancestors | p_MWM8783wp2tp4uBKaxsFDw | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順德（CBDB 203599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json)
- [中国历代人物传记资料库：楊氏(王順德妻)（CBDB 307135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307135&o=json)
