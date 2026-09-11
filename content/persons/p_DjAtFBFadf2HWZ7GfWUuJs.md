---
schema: wang-person/v1
id: p_DjAtFBFadf2HWZ7GfWUuJs
status: active
merged_into: null
display_name: 王繼洛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egmtqbyvbN1VLKiHGNfcci
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FfDTfZU2MLYsYuHzXi1ak5
          claim_id: c_egmtqbyvbN1VLKiHGNfcci
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: CBDB:203382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203382）
          source: &a1
            id: s_g3jYSKyZuQxGcb6EfTExYw
            source_type: api_record
            title: 中国历代人物传记资料库：王繼洛（CBDB 203382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json
            external_identifier: CBDB:203382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C7Pu4U8czf2779cY62Mkrk
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ph5nmeziB9FSYSxyjpuPYC
          claim_id: c_C7Pu4U8czf2779cY62Mkrk
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
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
        id: c_ikkKsW2TfDP2HA3uxdDp4z
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼洛（生于1507年），明人物。嘉靖二十年進士，籍贯鄭州，入仕進士。（中国历代人物传记资料库 CBDB 203382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zNlkbBTyCndWF-1LK_9WhT
          claim_id: c_ikkKsW2TfDP2HA3uxdDp4z
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: CBDB:203382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_erpytgxKG-YvCrQTrSWgd9
        subject_person_id: p_xd5BBtiqvSSseTbzS782qq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVjBA405bZziuHbY87T3ub
          claim_id: c_erpytgxKG-YvCrQTrSWgd9
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xd5BBtiqvSSseTbzS782qq
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nKuRUYp_AcRXjsu2lThMLN
        subject_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fKs2UBcSn6LEAhLEXCyBzU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ai_myBM1kxb7RhrYI7MvrE
          claim_id: c_nKuRUYp_AcRXjsu2lThMLN
          source_id: s_Gpth3r1_Xm_ISVtTCS2BSr
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gpth3r1_Xm_ISVtTCS2BSr
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王繼洛妻)（CBDB 303916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303916&o=json
            external_identifier: CBDB:303916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fKs2UBcSn6LEAhLEXCyBzU
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ITbBwyEEIjia_mNviAsGcS
        subject_person_id: p_LwYD5M9izykPmKFWgA2jrL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVPHLzsq-28jLj8sSz554B
          claim_id: c_ITbBwyEEIjia_mNviAsGcS
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LwYD5M9izykPmKFWgA2jrL
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_QQmSX1yebIX9_cS7vlf_gy
        subject_person_id: p_kVHSgSesG6qJ2H5MWAmCGo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dU6vFEV_ci0-kQCAElf2G
          claim_id: c_QQmSX1yebIX9_cS7vlf_gy
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kVHSgSesG6qJ2H5MWAmCGo
        status: active
        display_name: 王治
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼洛 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | 王繼洛（生于1507年），明人物。嘉靖二十年進士，籍贯鄭州，入仕進士。（中国历代人物传记资料库 CBDB 203382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xd5BBtiqvSSseTbzS782qq | 王鍊 | accepted |
| spouses | p_fKs2UBcSn6LEAhLEXCyBzU | 趙氏 | accepted |
| ancestors | p_LwYD5M9izykPmKFWgA2jrL | 王琮 | accepted |
| ancestors | p_kVHSgSesG6qJ2H5MWAmCGo | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼洛（CBDB 203382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json)
- [中国历代人物传记资料库：趙氏(王繼洛妻)（CBDB 303916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303916&o=json)
