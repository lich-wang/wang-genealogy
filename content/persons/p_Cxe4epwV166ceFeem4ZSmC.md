---
schema: wang-person/v1
id: p_Cxe4epwV166ceFeem4ZSmC
status: active
merged_into: null
display_name: 王師警
cbdb_id: 185228
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2muxvtVcxhjTfL5zudABa1
        subject_person_id: p_Cxe4epwV166ceFeem4ZSmC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師警（卒于860年），唐人物。籍贯長沙。（中国历代人物传记资料库 CBDB 185228）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_m6hlIxqjFVOr1uEC5UGIaf
          claim_id: c_2muxvtVcxhjTfL5zudABa1
          source_id: s_16CCM9frP22NthYMWuHhPV
          stance: supports
          locator: CBDB:185228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_16CCM9frP22NthYMWuHhPV
            source_type: api_record
            title: 中国历代人物传记资料库：王師警（CBDB 185228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185228&o=json
            external_identifier: CBDB:185228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Yj5PG4WEvU7eNJpn7cv511
        subject_person_id: p_Cxe4epwV166ceFeem4ZSmC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0860-01-01
            latest: 0860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7wFGHUpJiQLqoL69m5k9SQ
          claim_id: c_Yj5PG4WEvU7eNJpn7cv511
          source_id: s_16CCM9frP22NthYMWuHhPV
          stance: supports
          locator: CBDB:185228
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source:
            id: s_16CCM9frP22NthYMWuHhPV
            source_type: api_record
            title: 中国历代人物传记资料库：王師警（CBDB 185228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185228&o=json
            external_identifier: CBDB:185228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xyQwbmD8hTbuKErJDitC75
        subject_person_id: p_Cxe4epwV166ceFeem4ZSmC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師警
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_95wgAD6ixaxeVTQZNBpKYC
          claim_id: c_xyQwbmD8hTbuKErJDitC75
          source_id: s_16CCM9frP22NthYMWuHhPV
          stance: supports
          locator: CBDB:185228
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 860
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4522tGYVFW-zvBIkQWkONf
        subject_person_id: p_tWWc2id3awt5aEbJgL5cQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cxe4epwV166ceFeem4ZSmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oQcCzwdAJXsI2dQephd-0
          claim_id: c_4522tGYVFW-zvBIkQWkONf
          source_id: s_zYViESyVpLrCKNm51Gzdyz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zYViESyVpLrCKNm51Gzdyz
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 146321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json
            external_identifier: CBDB:146321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tWWc2id3awt5aEbJgL5cQv
        status: active
        display_name: 王清
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師警

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師警（卒于860年），唐人物。籍贯長沙。（中国历代人物传记资料库 CBDB 185228） | accepted |
| death.date | 860年 | accepted |
| name.primary | 王師警 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tWWc2id3awt5aEbJgL5cQv | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 146321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146321&o=json)
- [中国历代人物传记资料库：王師警（CBDB 185228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185228&o=json)
