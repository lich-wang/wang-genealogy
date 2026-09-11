---
schema: wang-person/v1
id: p_j9BHN5bLCRAdnEfQP7Yp6q
status: active
merged_into: null
display_name: 王民順
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81L6Vo8JNJcEecPMnCN3vQ
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ruKYKL1q4zL22uUaTZfB6
          claim_id: c_81L6Vo8JNJcEecPMnCN3vQ
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: CBDB:205877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205877）
          source: &a1
            id: s_4ni9ypkhqH9bL97APqjeXx
            source_type: api_record
            title: 中国历代人物传记资料库：王民順（CBDB 205877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json
            external_identifier: CBDB:205877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UMsVF4eRnFCahhZaMBLwvx
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GTHweYnRXmVLs9yrFX8mTe
          claim_id: c_UMsVF4eRnFCahhZaMBLwvx
          source_id: s_4ni9ypkhqH9bL97APqjeXx
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
        id: c_Z71HXz57oSZF9Jm79uS9x5
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民順（生于1539年），明人物。隆慶五年進士，籍贯金谿，入仕進士，曾任御史、知縣、左布政使。（中国历代人物传记资料库 CBDB 205877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hUqD5WYrFdmBGYfHny92Zl
          claim_id: c_Z71HXz57oSZF9Jm79uS9x5
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: CBDB:205877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pfb24NHlWqS7YAmmSp3AtV
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8Pjk8ZhPs_CHhupNsfPeI
          claim_id: c_Pfb24NHlWqS7YAmmSp3AtV
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-8o6l6pOUwar-2kSLzBVyi
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2GV378NyKPJVrNj6GrUdt7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NhIbdcuNrkyzMz08LJ7Cq
          claim_id: c_-8o6l6pOUwar-2kSLzBVyi
          source_id: s_DtoY72s2oA-vxHoJivOGuF
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DtoY72s2oA-vxHoJivOGuF
            source_type: api_record
            title: 中国历代人物传记资料库：鄒氏(王民順妻)（CBDB 210117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210117&o=json
            external_identifier: CBDB:210117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2GV378NyKPJVrNj6GrUdt7
        status: active
        display_name: 鄒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KoneCsjjPoA-GN7LNhWjX6
        subject_person_id: p_yv8SGEh1yCP849cH7azrtA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7SdWDzReBAAZ54EET2oaS
          claim_id: c_KoneCsjjPoA-GN7LNhWjX6
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yv8SGEh1yCP849cH7azrtA
        status: active
        display_name: 王斯立
        merged_into_person_id: null
    - claim:
        id: c_eHQZYbxEyeNYoVIbCcC5bQ
        subject_person_id: p_sLfupwUzfgDqZ8YZvZZpx9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ty8QAStNHh_jWxK3vk7d1l
          claim_id: c_eHQZYbxEyeNYoVIbCcC5bQ
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLfupwUzfgDqZ8YZvZZpx9
        status: active
        display_name: 王克完
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王民順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民順 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王民順（生于1539年），明人物。隆慶五年進士，籍贯金谿，入仕進士，曾任御史、知縣、左布政使。（中国历代人物传记资料库 CBDB 205877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| spouses | p_2GV378NyKPJVrNj6GrUdt7 | 鄒氏 | accepted |
| ancestors | p_yv8SGEh1yCP849cH7azrtA | 王斯立 | accepted |
| ancestors | p_sLfupwUzfgDqZ8YZvZZpx9 | 王克完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民順（CBDB 205877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json)
- [中国历代人物传记资料库：鄒氏(王民順妻)（CBDB 210117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210117&o=json)
