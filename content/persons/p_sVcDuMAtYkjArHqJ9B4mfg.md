---
schema: wang-person/v1
id: p_sVcDuMAtYkjArHqJ9B4mfg
status: active
merged_into: null
display_name: 王重章
cbdb_id: 185352
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QL4rHtyDuNagXmZfEabwXg
        subject_person_id: p_sVcDuMAtYkjArHqJ9B4mfg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重章（卒于891年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185352 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rgnEqNypRkzsQxHiFP_UHd
          claim_id: c_QL4rHtyDuNagXmZfEabwXg
          source_id: s_prnuUjbXuitp4JQCL85qX9
          stance: supports
          locator: CBDB:185352
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_prnuUjbXuitp4JQCL85qX9
            source_type: api_record
            title: 中国历代人物传记资料库：王重章（CBDB 185352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185352&o=json
            external_identifier: CBDB:185352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9qtZEdeS8n6qJeF7eRUCun
        subject_person_id: p_sVcDuMAtYkjArHqJ9B4mfg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0891-01-01
            latest: 0891-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SWY5fT1Rq1JJeAuXDiFmpQ
          claim_id: c_9qtZEdeS8n6qJeF7eRUCun
          source_id: s_prnuUjbXuitp4JQCL85qX9
          stance: supports
          locator: CBDB:185352
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 891
          source:
            id: s_prnuUjbXuitp4JQCL85qX9
            source_type: api_record
            title: 中国历代人物传记资料库：王重章（CBDB 185352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185352&o=json
            external_identifier: CBDB:185352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5RK8hV4bg1S6F5mV5sogGu
        subject_person_id: p_sVcDuMAtYkjArHqJ9B4mfg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ne4GR1ud94eqUVy9tVY1EX
          claim_id: c_5RK8hV4bg1S6F5mV5sogGu
          source_id: s_prnuUjbXuitp4JQCL85qX9
          stance: supports
          locator: CBDB:185352
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 891
          source:
            id: s_prnuUjbXuitp4JQCL85qX9
            source_type: api_record
            title: 中国历代人物传记资料库：王重章（CBDB 185352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185352&o=json
            external_identifier: CBDB:185352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jV_47cXerzMNHgbhVH7nqf
        subject_person_id: p_Z8DtSBjAEoUzy8cxQNFS2x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVcDuMAtYkjArHqJ9B4mfg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSXmGpX1IDqLVz7ykCdVsV
          claim_id: c_jV_47cXerzMNHgbhVH7nqf
          source_id: s_69Gh848koGViSF4f8SDaQj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_69Gh848koGViSF4f8SDaQj
            source_type: api_record
            title: 中国历代人物传记资料库：王縱（CBDB 144879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json
            external_identifier: CBDB:144879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z8DtSBjAEoUzy8cxQNFS2x
        status: active
        display_name: 王縱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王重章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王重章（卒于891年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185352 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 891年 | accepted |
| name.primary | 王重章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z8DtSBjAEoUzy8cxQNFS2x | 王縱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重章（CBDB 185352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185352&o=json)
- [中国历代人物传记资料库：王縱（CBDB 144879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144879&o=json)
