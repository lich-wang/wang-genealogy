---
schema: wang-person/v1
id: p_DotisGBWuSy9QiJBhRBUkB
status: active
merged_into: null
display_name: 王幼膚
cbdb_id: 192089
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TJBuH4vXLVpPYK75eXn9Cj
        subject_person_id: p_DotisGBWuSy9QiJBhRBUkB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼膚（卒于890年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 192089 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_4E6SeBN_7FVgX8GGD6m-By
          claim_id: c_TJBuH4vXLVpPYK75eXn9Cj
          source_id: s_i7j4Kbhkg9NJRd5zJPR89r
          stance: supports
          locator: CBDB:192089
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_i7j4Kbhkg9NJRd5zJPR89r
            source_type: api_record
            title: 中国历代人物传记资料库：王幼膚（CBDB 192089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192089&o=json
            external_identifier: CBDB:192089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BH34wEoGySCk575ADiriZ5
        subject_person_id: p_DotisGBWuSy9QiJBhRBUkB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 890年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0890-01-01
            latest: 0890-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8pRoBEHzj2JUVjE7XXfRQM
          claim_id: c_BH34wEoGySCk575ADiriZ5
          source_id: s_i7j4Kbhkg9NJRd5zJPR89r
          stance: supports
          locator: CBDB:192089
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 890
          source:
            id: s_i7j4Kbhkg9NJRd5zJPR89r
            source_type: api_record
            title: 中国历代人物传记资料库：王幼膚（CBDB 192089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192089&o=json
            external_identifier: CBDB:192089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1U8nGgk9bqYbfPKibH7Ae
        subject_person_id: p_DotisGBWuSy9QiJBhRBUkB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼膚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x2AAe2S8tB4giZYpVt6B9t
          claim_id: c_c1U8nGgk9bqYbfPKibH7Ae
          source_id: s_i7j4Kbhkg9NJRd5zJPR89r
          stance: supports
          locator: CBDB:192089
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 890
          source:
            id: s_i7j4Kbhkg9NJRd5zJPR89r
            source_type: api_record
            title: 中国历代人物传记资料库：王幼膚（CBDB 192089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192089&o=json
            external_identifier: CBDB:192089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4m-KH3DFO7Rz6ZMIOhtwq3
        subject_person_id: p_2By3HyEqWFSrUPCpwFaSLa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DotisGBWuSy9QiJBhRBUkB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxgTWUVUKmdznhw7YXzPjy
          claim_id: c_4m-KH3DFO7Rz6ZMIOhtwq3
          source_id: s_WwkwnxKYTK9cFafz9RG2Wm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WwkwnxKYTK9cFafz9RG2Wm
            source_type: api_record
            title: 中国历代人物传记资料库：王仲甫（CBDB 168571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json
            external_identifier: CBDB:168571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2By3HyEqWFSrUPCpwFaSLa
        status: active
        display_name: 王仲甫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王幼膚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王幼膚（卒于890年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 192089 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 890年 | accepted |
| name.primary | 王幼膚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2By3HyEqWFSrUPCpwFaSLa | 王仲甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幼膚（CBDB 192089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192089&o=json)
- [中国历代人物传记资料库：王仲甫（CBDB 168571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168571&o=json)
