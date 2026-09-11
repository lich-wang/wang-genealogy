---
schema: wang-person/v1
id: p_2GV378NyKPJVrNj6GrUdt7
status: active
merged_into: null
display_name: 鄒氏
revision: 1
cbdb_id: 210117
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5pgbiI5AydHL-v_dVVlPGm
        subject_person_id: p_2GV378NyKPJVrNj6GrUdt7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄒氏，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210117）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LpmTjgMJswGrfa238Tu9uu
          claim_id: c_5pgbiI5AydHL-v_dVVlPGm
          source_id: s_DtoY72s2oA-vxHoJivOGuF
          stance: supports
          locator: CBDB:210117
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MzifgIR5VPanE-iJwVozl1
        subject_person_id: p_2GV378NyKPJVrNj6GrUdt7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄒氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvvXnELaX1sHwGDCMHuKW-
          claim_id: c_MzifgIR5VPanE-iJwVozl1
          source_id: s_DtoY72s2oA-vxHoJivOGuF
          stance: supports
          locator: CBDB:210117
          quotation: null
          interpretation_note: CBDB 明确记录的王民順配偶
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
          source: *a1
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄒氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄒氏，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210117） | accepted |
| name.primary | 鄒氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄒氏(王民順妻)（CBDB 210117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210117&o=json)
