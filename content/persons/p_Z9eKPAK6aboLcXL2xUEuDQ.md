---
schema: wang-person/v1
id: p_Z9eKPAK6aboLcXL2xUEuDQ
status: active
merged_into: null
display_name: 王行古
cbdb_id: 175945
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKwz5nerbDiUF3ZPz9hHEB
        subject_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行古（卒于800年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175945 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_8vpgk1mvlXGfos0TTVo8H5
          claim_id: c_LKwz5nerbDiUF3ZPz9hHEB
          source_id: s_BBabBH8DimjXP2dffaFwZn
          stance: supports
          locator: CBDB:175945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BBabBH8DimjXP2dffaFwZn
            source_type: api_record
            title: 中国历代人物传记资料库：王行古（CBDB 175945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json
            external_identifier: CBDB:175945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Lx8p5g9vXU4JWTDaYwfW96
        subject_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0800-01-01
            latest: 0800-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uYf4UNkw1xBgEj3gj95qmw
          claim_id: c_Lx8p5g9vXU4JWTDaYwfW96
          source_id: s_BBabBH8DimjXP2dffaFwZn
          stance: supports
          locator: CBDB:175945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 800
          source:
            id: s_BBabBH8DimjXP2dffaFwZn
            source_type: api_record
            title: 中国历代人物传记资料库：王行古（CBDB 175945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json
            external_identifier: CBDB:175945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kj9vRw5CxNaDnGCAPe4UFG
        subject_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dZAEUypoQfFo5FKxcKt8yW
          claim_id: c_Kj9vRw5CxNaDnGCAPe4UFG
          source_id: s_BBabBH8DimjXP2dffaFwZn
          stance: supports
          locator: CBDB:175945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 800
          source:
            id: s_BBabBH8DimjXP2dffaFwZn
            source_type: api_record
            title: 中国历代人物传记资料库：王行古（CBDB 175945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json
            external_identifier: CBDB:175945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_j6c2XPZKAuDuOpeBQjDT6r
        subject_person_id: p_Z9eKPAK6aboLcXL2xUEuDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aak7BTbPT1FPBghTmKpiVW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pcnfpqO4C-FSDqHMt9Llh_
          claim_id: c_j6c2XPZKAuDuOpeBQjDT6r
          source_id: s_oNo9Hfx2vpoGM4Pu6R8WFy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oNo9Hfx2vpoGM4Pu6R8WFy
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 175946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175946&o=json
            external_identifier: CBDB:175946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.213Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aak7BTbPT1FPBghTmKpiVW
        status: active
        display_name: 王收
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王行古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王行古（卒于800年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175945 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 800年 | accepted |
| name.primary | 王行古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aak7BTbPT1FPBghTmKpiVW | 王收 | accepted |

## 外部来源

- [中国历代人物传记资料库：王收（CBDB 175946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175946&o=json)
- [中国历代人物传记资料库：王行古（CBDB 175945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175945&o=json)
