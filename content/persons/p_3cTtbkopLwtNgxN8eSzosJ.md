---
schema: wang-person/v1
id: p_3cTtbkopLwtNgxN8eSzosJ
status: active
merged_into: null
display_name: 王子顏
cbdb_id: 190671
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKZtpGVeDuqYX4zn9y5Svg
        subject_person_id: p_3cTtbkopLwtNgxN8eSzosJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子顏（卒于800年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 190671 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_UrGmshYJlZ271yGON7YrbQ
          claim_id: c_EKZtpGVeDuqYX4zn9y5Svg
          source_id: s_8zHNv1sHm5SK5T4BwpZJ1P
          stance: supports
          locator: CBDB:190671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8zHNv1sHm5SK5T4BwpZJ1P
            source_type: api_record
            title: 中国历代人物传记资料库：王子顏（CBDB 190671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190671&o=json
            external_identifier: CBDB:190671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BGcDkuk8qLMzLEu1PwkJ97
        subject_person_id: p_3cTtbkopLwtNgxN8eSzosJ
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
        - id: cs_6g1nhi77jRXH29fFym9PAq
          claim_id: c_BGcDkuk8qLMzLEu1PwkJ97
          source_id: s_8zHNv1sHm5SK5T4BwpZJ1P
          stance: supports
          locator: CBDB:190671
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 800
          source:
            id: s_8zHNv1sHm5SK5T4BwpZJ1P
            source_type: api_record
            title: 中国历代人物传记资料库：王子顏（CBDB 190671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190671&o=json
            external_identifier: CBDB:190671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDxCBWNZQg5vujwMAy4Vdf
        subject_person_id: p_3cTtbkopLwtNgxN8eSzosJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dtkEzFjBJCFsVDQU9WxRek
          claim_id: c_SDxCBWNZQg5vujwMAy4Vdf
          source_id: s_8zHNv1sHm5SK5T4BwpZJ1P
          stance: supports
          locator: CBDB:190671
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 800
          source:
            id: s_8zHNv1sHm5SK5T4BwpZJ1P
            source_type: api_record
            title: 中国历代人物传记资料库：王子顏（CBDB 190671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190671&o=json
            external_identifier: CBDB:190671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RDCWdXxcNdsLSjBYQ8WRE_
        subject_person_id: p_KUL8xKz6PcvKPz11ae96H5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3cTtbkopLwtNgxN8eSzosJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bq1N1J-Sii4DyZW74AsfZH
          claim_id: c_RDCWdXxcNdsLSjBYQ8WRE_
          source_id: s_8zHNv1sHm5SK5T4BwpZJ1P
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KUL8xKz6PcvKPz11ae96H5
        status: active
        display_name: 王難得
        merged_into_person_id: null
  children:
    - claim:
        id: c_s03Gb9DzWwo7OuitccsOYZ
        subject_person_id: p_3cTtbkopLwtNgxN8eSzosJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDFMREoAKsPR8PPP7pBSx3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rqSuDy3y_k9dx7WurRkF8
          claim_id: c_s03Gb9DzWwo7OuitccsOYZ
          source_id: s_41kqBR2WDkg74A9agBsVJw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_41kqBR2WDkg74A9agBsVJw
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 145498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145498&o=json
            external_identifier: CBDB:145498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hDFMREoAKsPR8PPP7pBSx3
        status: active
        display_name: 王用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子顏（卒于800年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 190671 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 800年 | accepted |
| name.primary | 王子顏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KUL8xKz6PcvKPz11ae96H5 | 王難得 | accepted |
| children | p_hDFMREoAKsPR8PPP7pBSx3 | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 145498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145498&o=json)
- [中国历代人物传记资料库：王子顏（CBDB 190671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190671&o=json)
