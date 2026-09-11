---
schema: wang-person/v1
id: p_8cCQbEMY8ZpE4BQETGuGc3
status: active
merged_into: null
display_name: 王源
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_urKLBqC4Eg97vDFaqzuNkp
        subject_person_id: p_8cCQbEMY8ZpE4BQETGuGc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1q2MPV7EGL1UxCN5AxqbtH
          claim_id: c_urKLBqC4Eg97vDFaqzuNkp
          source_id: s_WQMfgpfeUdM3y4E86xyFsa
          stance: supports
          locator: CBDB:297730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297730）
          source: &a1
            id: s_WQMfgpfeUdM3y4E86xyFsa
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 297730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297730&o=json
            external_identifier: CBDB:297730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CPAfB1Sp6KXcBHQhFTM5s2
        subject_person_id: p_8cCQbEMY8ZpE4BQETGuGc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qi17WjrowJbXLhNAeRQLbT
          claim_id: c_CPAfB1Sp6KXcBHQhFTM5s2
          source_id: s_WQMfgpfeUdM3y4E86xyFsa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_RghN1lBqa-9s3WeqcxxciK
        subject_person_id: p_8cCQbEMY8ZpE4BQETGuGc3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mBiN3cQOCF3vzCoKJemfp
          claim_id: c_RghN1lBqa-9s3WeqcxxciK
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4xxvavE1fm4FZqLMfztadX
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 202976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json
            external_identifier: CBDB:202976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
  other: []
---

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應期（CBDB 202976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json)
- [中国历代人物传记资料库：王源（CBDB 297730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297730&o=json)
