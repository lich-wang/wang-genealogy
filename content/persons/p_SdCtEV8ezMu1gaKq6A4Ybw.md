---
schema: wang-person/v1
id: p_SdCtEV8ezMu1gaKq6A4Ybw
status: active
merged_into: null
display_name: 王頊齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKiXWFC5GGGKXQXJB4d9rf
        subject_person_id: p_SdCtEV8ezMu1gaKq6A4Ybw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CisFiS3mKjhjqPkdiNVZf8
          claim_id: c_gKiXWFC5GGGKXQXJB4d9rf
          source_id: s_pNd65ApkyKxwgsbu2CQ5Vg
          stance: supports
          locator: CBDB:57204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57204）
          source: &a1
            id: s_pNd65ApkyKxwgsbu2CQ5Vg
            source_type: api_record
            title: 中国历代人物传记资料库：王頊齡（CBDB 57204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57204&o=json
            external_identifier: CBDB:57204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XGgfkD1xDFJR5nZhL3A789
        subject_person_id: p_SdCtEV8ezMu1gaKq6A4Ybw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kpdKXirTvp1Q4yrWUho37
          claim_id: c_XGgfkD1xDFJR5nZhL3A789
          source_id: s_pNd65ApkyKxwgsbu2CQ5Vg
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
        id: c_h93nU7Cd2abmGRqffUsiyE
        subject_person_id: p_SdCtEV8ezMu1gaKq6A4Ybw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1725年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AquVW2D1BT3Dt39ctjRdmN
          claim_id: c_h93nU7Cd2abmGRqffUsiyE
          source_id: s_pNd65ApkyKxwgsbu2CQ5Vg
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
        id: c_5p2zCrLYhNRc6nU2rVG2nf
        subject_person_id: p_SdCtEV8ezMu1gaKq6A4Ybw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊齡（1642年—1725年），清人物。明清進士進士，籍贯華亭，入仕進士，曾任編修、充經筵講官、充日講起居注官。（中国历代人物传记资料库 CBDB 57204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5gzAVyXL9L49bx0zJFcwEc
          claim_id: c_5p2zCrLYhNRc6nU2rVG2nf
          source_id: s_pNd65ApkyKxwgsbu2CQ5Vg
          stance: supports
          locator: CBDB:57204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yZX-U_i8nSStgStM6E__lz
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SdCtEV8ezMu1gaKq6A4Ybw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ce3AMIlvEWwapUUQQsmhO_
          claim_id: c_yZX-U_i8nSStgStM6E__lz
          source_id: s_pNd65ApkyKxwgsbu2CQ5Vg
          stance: supports
          locator: 江南通志，lgid=65760：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T3HfvKJwe8oNYNwYQCppo7
        status: active
        display_name: 王广心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頊齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊齡 | accepted |
| birth.date | 1642年 | accepted |
| death.date | 1725年 | accepted |
| bio.summary | 王頊齡（1642年—1725年），清人物。明清進士進士，籍贯華亭，入仕進士，曾任編修、充經筵講官、充日講起居注官。（中国历代人物传记资料库 CBDB 57204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T3HfvKJwe8oNYNwYQCppo7 | 王广心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頊齡（CBDB 57204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57204&o=json)
