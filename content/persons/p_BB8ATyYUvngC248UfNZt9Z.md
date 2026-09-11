---
schema: wang-person/v1
id: p_BB8ATyYUvngC248UfNZt9Z
status: active
merged_into: null
display_name: 王玄中
cbdb_id: 234437
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cfD8QY3ujeQvtfDkgiJkrS
        subject_person_id: p_BB8ATyYUvngC248UfNZt9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄中，明人物。中国历代人物传记资料库（CBDB）以人物编号 234437 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9jFjKiWotQtohAxDDWXcVi
          claim_id: c_cfD8QY3ujeQvtfDkgiJkrS
          source_id: s_HHCZozJKxFF3fjAPbEjFM2
          stance: supports
          locator: CBDB:234437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HHCZozJKxFF3fjAPbEjFM2
            source_type: api_record
            title: 中国历代人物传记资料库：王玄中（CBDB 234437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234437&o=json
            external_identifier: CBDB:234437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yLTo7jH2DPDkNiXGG9DMWL
        subject_person_id: p_BB8ATyYUvngC248UfNZt9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xFx9DPMYJAziC5pP3UxizB
          claim_id: c_yLTo7jH2DPDkNiXGG9DMWL
          source_id: s_HHCZozJKxFF3fjAPbEjFM2
          stance: supports
          locator: CBDB:234437
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_HHCZozJKxFF3fjAPbEjFM2
            source_type: api_record
            title: 中国历代人物传记资料库：王玄中（CBDB 234437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234437&o=json
            external_identifier: CBDB:234437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k8Ky6Oax8bvCvuhlXzK46P
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BB8ATyYUvngC248UfNZt9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHhAxgfjUo1lR5RRyLFTYS
          claim_id: c_k8Ky6Oax8bvCvuhlXzK46P
          source_id: s_HHCZozJKxFF3fjAPbEjFM2
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄中，明人物。中国历代人物传记资料库（CBDB）以人物编号 234437 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玄中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄中（CBDB 234437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234437&o=json)
