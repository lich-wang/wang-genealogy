---
schema: wang-person/v1
id: p_bkMbqmq6U23rFXaG17Pxzk
status: active
merged_into: null
display_name: 王師心
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uz6XfYta6XYtwNnQFMWzVR
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7nH5YUnfxS3bRyA18NF12E
          claim_id: c_Uz6XfYta6XYtwNnQFMWzVR
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB:1872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1872）
          source: &a1
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4ASe4KwQ9xgDeznkrD7SVK
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1097年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGFubmemKHFaeP7kXrV7jn
          claim_id: c_4ASe4KwQ9xgDeznkrD7SVK
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Np11iM68oTmDM7tybfBJo2
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKmDB53r5g3Tn4yi7tvgbx
          claim_id: c_Np11iM68oTmDM7tybfBJo2
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJZJBWg9gWv5VnfmQLnEWn
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yXTjBKmRsYo2C8xEdMBJRK
          claim_id: c_uJZJBWg9gWv5VnfmQLnEWn
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jCXPisN44saIypWYncWipB
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rh4bQNDzIHzHfoafmANNw0
          claim_id: c_jCXPisN44saIypWYncWipB
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1845;1846：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  children:
    - claim:
        id: c_sQUiULSj_8tbu3-cWrM_U9
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QiMXSEFT7jvgqUvHpGQMA4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CN_BCimla7TAZQBTIsVRv2
          claim_id: c_sQUiULSj_8tbu3-cWrM_U9
          source_id: s_AnDGfYaeCDc4TwS528G1fz
          stance: supports
          locator: 全宋文，卷 4781：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AnDGfYaeCDc4TwS528G1fz
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 385777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385777&o=json
            external_identifier: CBDB:385777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QiMXSEFT7jvgqUvHpGQMA4
        status: active
        display_name: 王淑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_v9dsnmSBcscCs_t8s_mz7u
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uCC1DMixuQpxcRtk8o9HAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O1zpfJqYwDjINQOLPfl9ul
          claim_id: c_v9dsnmSBcscCs_t8s_mz7u
          source_id: s_GcHjL2yt-y82NmEAhfQuzq
          stance: supports
          locator: 全宋文，卷 4781：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GcHjL2yt-y82NmEAhfQuzq
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王師心妻)（CBDB 385776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385776&o=json
            external_identifier: CBDB:385776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uCC1DMixuQpxcRtk8o9HAJ
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_hsAMI5UK8G8AV7yRW-qSdn
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_64abNVCX3tB4hhRcKEd7HQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMSm3RrfaVaweVYjkLxCCJ
          claim_id: c_hsAMI5UK8G8AV7yRW-qSdn
          source_id: s_Lvp4AYfFSArAaajLLf871i
          stance: supports
          locator: 全宋文，卷 4781：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lvp4AYfFSArAaajLLf871i
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 385783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385783&o=json
            external_identifier: CBDB:385783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_64abNVCX3tB4hhRcKEd7HQ
        status: active
        display_name: 王樸
        merged_into_person_id: null
    - claim:
        id: c_9YOB2lmvRKhec0Hztrt7I-
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y2T6JoxNT8QKokD985uNxg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r95SjV4knuEzoey3l3UC_T
          claim_id: c_9YOB2lmvRKhec0Hztrt7I-
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y2T6JoxNT8QKokD985uNxg
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_UCFDffBUiXEnul735QTs0l
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_k6avUyaFcBkTE2cKwzPVLW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0GRumxHm1HVWNLzCXF_3Q
          claim_id: c_UCFDffBUiXEnul735QTs0l
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k6avUyaFcBkTE2cKwzPVLW
        status: active
        display_name: 王柄
        merged_into_person_id: null
    - claim:
        id: c_SoNH5aZj8mdBxA4VVnVrCs
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_spdmttLRdHiw1A4HpwUBoG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ab_G4IHuIS_WaRzLq8eehC
          claim_id: c_SoNH5aZj8mdBxA4VVnVrCs
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_spdmttLRdHiw1A4HpwUBoG
        status: active
        display_name: 王杞
        merged_into_person_id: null
    - claim:
        id: c_hv5VWwg_MiIJfsYAVb-zeW
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCuhVLofQnHMJrQT8m1Ddc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgtziWNLTPyO2MoaJJ7EF-
          claim_id: c_hv5VWwg_MiIJfsYAVb-zeW
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RCuhVLofQnHMJrQT8m1Ddc
        status: active
        display_name: 王柟
        merged_into_person_id: null
    - claim:
        id: c_kTy4Rl6xzAjCYbh_cPS9YO
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yrezMPsjHWPWTR86PGRJhv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fl0cNcxOfQ_FLd-VZmWISH
          claim_id: c_kTy4Rl6xzAjCYbh_cPS9YO
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yrezMPsjHWPWTR86PGRJhv
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_8PoUcJ_vcwOsje3u6tcO0e
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_u6cA2KSg6U1riqHFDTtFHW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdctqiIcpD04VGI-rUgLFU
          claim_id: c_8PoUcJ_vcwOsje3u6tcO0e
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_u6cA2KSg6U1riqHFDTtFHW
        status: active
        display_name: 王樾
        merged_into_person_id: null
    - claim:
        id: c_Vu3Zk2rWkMohHO4LZsKDom
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZzyIjbJlWqVdxJjK0NK8w
          claim_id: c_Vu3Zk2rWkMohHO4LZsKDom
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（孫 王僑 ⇄ 祖父 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TA3EM7RAXDxn6hGbgBVmnw
        status: active
        display_name: 王僑
        merged_into_person_id: null
    - claim:
        id: c_oH4k-jqBIqap9t9-6QgDVW
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WU918HK6TTpAXfqW367rRb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSgFdcFl21mRfjCVb7--Ln
          claim_id: c_oH4k-jqBIqap9t9-6QgDVW
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王侊 ⇄ 曾祖 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WU918HK6TTpAXfqW367rRb
        status: active
        display_name: 王侊
        merged_into_person_id: null
    - claim:
        id: c_ANLYtFbQBOG423Qt27UaAd
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dlfoW0WXyvBPqrPzJkN6Ku
          claim_id: c_ANLYtFbQBOG423Qt27UaAd
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王珹 ⇄ 高祖;四世祖 王師心）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sEGDXi7ck4pKNAhddgmbiq
        status: active
        display_name: 王珹
        merged_into_person_id: null
  other: []
---

# 王師心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師心 | accepted |
| birth.date | 1097年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |
| children | p_QiMXSEFT7jvgqUvHpGQMA4 | 王淑 | accepted |
| spouses | p_uCC1DMixuQpxcRtk8o9HAJ | 曹氏 | accepted |
| descendants | p_64abNVCX3tB4hhRcKEd7HQ | 王樸 | accepted |
| descendants | p_Y2T6JoxNT8QKokD985uNxg | 王楷 | accepted |
| descendants | p_k6avUyaFcBkTE2cKwzPVLW | 王柄 | accepted |
| descendants | p_spdmttLRdHiw1A4HpwUBoG | 王杞 | accepted |
| descendants | p_RCuhVLofQnHMJrQT8m1Ddc | 王柟 | accepted |
| descendants | p_yrezMPsjHWPWTR86PGRJhv | 王梓 | accepted |
| descendants | p_u6cA2KSg6U1riqHFDTtFHW | 王樾 | accepted |
| descendants | p_TA3EM7RAXDxn6hGbgBVmnw | 王僑 | accepted |
| descendants | p_WU918HK6TTpAXfqW367rRb | 王侊 | accepted |
| descendants | p_sEGDXi7ck4pKNAhddgmbiq | 王珹 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王師心妻)（CBDB 385776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385776&o=json)
- [中国历代人物传记资料库：王樸（CBDB 385783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385783&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
- [中国历代人物传记资料库：王淑（CBDB 385777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385777&o=json)
