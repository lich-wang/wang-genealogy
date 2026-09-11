---
schema: wang-person/v1
id: p_PfgA5W1G2Fv9NYWMemcshd
status: active
merged_into: null
display_name: 王夢龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPtELc4F5miGLZeNiwP5Pf
        subject_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r1Bm3t6UPJU969tWdDUBh4
          claim_id: c_bPtELc4F5miGLZeNiwP5Pf
          source_id: s_QxsvqMGN1tK1yhTCAMTnWZ
          stance: supports
          locator: CBDB:19425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19425）
          source: &a1
            id: s_QxsvqMGN1tK1yhTCAMTnWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王夢龍（CBDB 19425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19425&o=json
            external_identifier: CBDB:19425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m6YS5PQACrCyRZAFn43JM3
        subject_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N98NKPmCKK9EGeb3C59GZT
          claim_id: c_m6YS5PQACrCyRZAFn43JM3
          source_id: s_QxsvqMGN1tK1yhTCAMTnWZ
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
  ancestors:
    - claim:
        id: c_SV94VkRRNkOpMbgUS7Rcen
        subject_person_id: p_JR5BeKFHjyY5p6yqfVc1XZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phgBxmrK_DFrjhvBXcctsD
          claim_id: c_SV94VkRRNkOpMbgUS7Rcen
          source_id: s_QxsvqMGN1tK1yhTCAMTnWZ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2014：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JR5BeKFHjyY5p6yqfVc1XZ
        status: active
        display_name: 王衜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王夢龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢龍 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢龍（CBDB 19425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19425&o=json)
