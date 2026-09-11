---
schema: wang-person/v1
id: p_m6q9t8sTP9HXMyKDQb6EY6
status: active
merged_into: null
display_name: 王令均
cbdb_id: 156470
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9oVsTJuBZGMPyYVeUYu9b8
        subject_person_id: p_m6q9t8sTP9HXMyKDQb6EY6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令均，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156470 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_jf2uUUWwg6dBlVGbVE7fdu
          claim_id: c_9oVsTJuBZGMPyYVeUYu9b8
          source_id: s_bvZ9FdggNvdrhP8XxKQAhD
          stance: supports
          locator: CBDB:156470
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bvZ9FdggNvdrhP8XxKQAhD
            source_type: api_record
            title: 中国历代人物传记资料库：王令均（CBDB 156470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156470&o=json
            external_identifier: CBDB:156470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UaBSVqDD4E9mt2DD43uyMS
        subject_person_id: p_m6q9t8sTP9HXMyKDQb6EY6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hf29Pio8ARcVHzoSZvmNAJ
          claim_id: c_UaBSVqDD4E9mt2DD43uyMS
          source_id: s_bvZ9FdggNvdrhP8XxKQAhD
          stance: supports
          locator: CBDB:156470
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_bvZ9FdggNvdrhP8XxKQAhD
            source_type: api_record
            title: 中国历代人物传记资料库：王令均（CBDB 156470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156470&o=json
            external_identifier: CBDB:156470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SzATTV8tl5TuFRs5rFAt34
        subject_person_id: p_hwEjFsDcDtXnEaxF75VjrK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m6q9t8sTP9HXMyKDQb6EY6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqyyGvDdSrJbz1Nkm2tX4F
          claim_id: c_SzATTV8tl5TuFRs5rFAt34
          source_id: s_bvZ9FdggNvdrhP8XxKQAhD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hwEjFsDcDtXnEaxF75VjrK
        status: active
        display_name: 王釴
        merged_into_person_id: null
  children:
    - claim:
        id: c_KGsj-98t5sLAHhkukPQ5Fi
        subject_person_id: p_m6q9t8sTP9HXMyKDQb6EY6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2KfZ4qZPoW4uxG2E5viFAA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GtazPwIHz9cfHWaUWSwDd
          claim_id: c_KGsj-98t5sLAHhkukPQ5Fi
          source_id: s_bvZ9FdggNvdrhP8XxKQAhD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 34：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2KfZ4qZPoW4uxG2E5viFAA
        status: active
        display_name: 王大劍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令均，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156470 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王令均 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hwEjFsDcDtXnEaxF75VjrK | 王釴 | accepted |
| children | p_2KfZ4qZPoW4uxG2E5viFAA | 王大劍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王令均（CBDB 156470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156470&o=json)
