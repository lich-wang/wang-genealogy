---
schema: wang-person/v1
id: p_sqxP6E3CPWieDjjQ3Lj2e2
status: active
merged_into: null
display_name: 王察某
cbdb_id: 192496
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MtbSLYLARD2GDRVoE8kHmP
        subject_person_id: p_sqxP6E3CPWieDjjQ3Lj2e2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察某（卒于820年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 192496 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_naq_EsHoWFDp-vtJZjOrmK
          claim_id: c_MtbSLYLARD2GDRVoE8kHmP
          source_id: s_WZ6uQMFUGNQtp32VsUEmBQ
          stance: supports
          locator: CBDB:192496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_WZ6uQMFUGNQtp32VsUEmBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王察某（CBDB 192496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192496&o=json
            external_identifier: CBDB:192496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_31j5t8Na7e6yQjcZF5etpZ
        subject_person_id: p_sqxP6E3CPWieDjjQ3Lj2e2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NznrsWaWBUsYkYQ2B9S1x7
          claim_id: c_31j5t8Na7e6yQjcZF5etpZ
          source_id: s_WZ6uQMFUGNQtp32VsUEmBQ
          stance: supports
          locator: CBDB:192496
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 820
          source:
            id: s_WZ6uQMFUGNQtp32VsUEmBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王察某（CBDB 192496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192496&o=json
            external_identifier: CBDB:192496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MPYCzLbtCmnU3mdTKhD4Md
        subject_person_id: p_sqxP6E3CPWieDjjQ3Lj2e2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wR6aiBZGpRnrX1dWirj1st
          claim_id: c_MPYCzLbtCmnU3mdTKhD4Md
          source_id: s_WZ6uQMFUGNQtp32VsUEmBQ
          stance: supports
          locator: CBDB:192496
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 820
          source:
            id: s_WZ6uQMFUGNQtp32VsUEmBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王察某（CBDB 192496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192496&o=json
            external_identifier: CBDB:192496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nQ1Js2yPGrMBSV26yiWhOt
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sqxP6E3CPWieDjjQ3Lj2e2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OI_BaSRSvOVbMhei_Ta2LN
          claim_id: c_nQ1Js2yPGrMBSV26yiWhOt
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i7VeDGRjr3jLVssGMAx7FC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟誠（CBDB 143228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json
            external_identifier: CBDB:143228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyDFNM8h3KCT9MHvDUXLC2
        status: active
        display_name: 王惟誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王察某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王察某（卒于820年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 192496 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王察某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GyDFNM8h3KCT9MHvDUXLC2 | 王惟誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王察某（CBDB 192496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192496&o=json)
- [中国历代人物传记资料库：王惟誠（CBDB 143228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json)
