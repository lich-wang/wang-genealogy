---
schema: wang-person/v1
id: p_T46xUnCqc8zB5LhaGzgjQn
status: active
merged_into: null
display_name: 王岧
cbdb_id: 175875
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MMXwFMGg29914cV53Q5wUA
        subject_person_id: p_T46xUnCqc8zB5LhaGzgjQn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岧（卒于798年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175875 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_JARH5pbXCv6VTuz5Va_-z1
          claim_id: c_MMXwFMGg29914cV53Q5wUA
          source_id: s_MvAeNF4FYQHe16u9Y23rt9
          stance: supports
          locator: CBDB:175875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MvAeNF4FYQHe16u9Y23rt9
            source_type: api_record
            title: 中国历代人物传记资料库：王岧（CBDB 175875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175875&o=json
            external_identifier: CBDB:175875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6aUTcCA8CH724Xs89P3cBc
        subject_person_id: p_T46xUnCqc8zB5LhaGzgjQn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0798-01-01
            latest: 0798-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b2i1rU5F5V7jTX1ioLPMj5
          claim_id: c_6aUTcCA8CH724Xs89P3cBc
          source_id: s_MvAeNF4FYQHe16u9Y23rt9
          stance: supports
          locator: CBDB:175875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 798
          source:
            id: s_MvAeNF4FYQHe16u9Y23rt9
            source_type: api_record
            title: 中国历代人物传记资料库：王岧（CBDB 175875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175875&o=json
            external_identifier: CBDB:175875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2jZQGHxn8rRxExTZG5TG9g
        subject_person_id: p_T46xUnCqc8zB5LhaGzgjQn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5wWSnmxHCVLWLEpR2xTHH6
          claim_id: c_2jZQGHxn8rRxExTZG5TG9g
          source_id: s_MvAeNF4FYQHe16u9Y23rt9
          stance: supports
          locator: CBDB:175875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 798
          source:
            id: s_MvAeNF4FYQHe16u9Y23rt9
            source_type: api_record
            title: 中国历代人物传记资料库：王岧（CBDB 175875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175875&o=json
            external_identifier: CBDB:175875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0povEktW7QJe_fFB2_wqSG
        subject_person_id: p_EoFqrFneyxXNJVFsSfLURF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T46xUnCqc8zB5LhaGzgjQn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7YXIarp-pnQWms9h8RYjJt
          claim_id: c_0povEktW7QJe_fFB2_wqSG
          source_id: s_MvAeNF4FYQHe16u9Y23rt9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoFqrFneyxXNJVFsSfLURF
        status: active
        display_name: 王仁忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王岧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王岧（卒于798年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175875 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 798年 | accepted |
| name.primary | 王岧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoFqrFneyxXNJVFsSfLURF | 王仁忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岧（CBDB 175875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175875&o=json)
