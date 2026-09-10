---
schema: wang-person/v1
id: p_PHvvhzgyD6dNCPqjCEyc3q
status: active
merged_into: null
display_name: 王求
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DxNATN2jrHkV9n9UL7sp48
        subject_person_id: p_PHvvhzgyD6dNCPqjCEyc3q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王求
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iSCDJ9onBjP7FUBrWifZWa
          claim_id: c_DxNATN2jrHkV9n9UL7sp48
          source_id: s_JkXrM54mViDFMF51UrC1LU
          stance: supports
          locator: CBDB:152077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152077）
          source: &a1
            id: s_JkXrM54mViDFMF51UrC1LU
            source_type: api_record
            title: 中国历代人物传记资料库：王求（CBDB 152077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152077&o=json
            external_identifier: CBDB:152077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxR8pg7LproNDiicRNVvpX
        subject_person_id: p_PHvvhzgyD6dNCPqjCEyc3q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UyTMBUScpNpzym1zVudfBT
          claim_id: c_zxR8pg7LproNDiicRNVvpX
          source_id: s_JkXrM54mViDFMF51UrC1LU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PMzNGocyKvjJ_YUI3EanD7
        subject_person_id: p_PHvvhzgyD6dNCPqjCEyc3q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1nj5Vo66whrteQ2mchLsSE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLSobE9ZoCyIlLE-lf7iFg
          claim_id: c_PMzNGocyKvjJ_YUI3EanD7
          source_id: s_LJuHE17UufbNY26bmdjKS5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 266 YP NewEpitaphID=1838：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJuHE17UufbNY26bmdjKS5
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 140628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json
            external_identifier: CBDB:140628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1nj5Vo66whrteQ2mchLsSE
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王求

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王求 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1nj5Vo66whrteQ2mchLsSE | 王思齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王求（CBDB 152077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152077&o=json)
- [中国历代人物传记资料库：王思齊（CBDB 140628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140628&o=json)
