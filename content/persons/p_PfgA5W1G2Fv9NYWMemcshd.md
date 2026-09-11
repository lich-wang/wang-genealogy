---
schema: wang-person/v1
id: p_PfgA5W1G2Fv9NYWMemcshd
status: active
merged_into: null
display_name: 王夢龍
revision: 4
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
  parents:
    - claim:
        id: c_oYnGH6N8ZUi7031Gy7A6NR
        subject_person_id: p_P7Pxo6A4165TeMjYaAs1jT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXJ7miwAuO8GyOUhLau8eX
          claim_id: c_oYnGH6N8ZUi7031Gy7A6NR
          source_id: s_QxsvqMGN1tK1yhTCAMTnWZ
          stance: supports
          locator: CBDB 双向互证（父 王似之 ⇄ 子 王夢龍）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_P7Pxo6A4165TeMjYaAs1jT
        status: active
        display_name: 王似之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_SI-lPhJhNjdJ2IKhcDXBt5
        subject_person_id: p_PfgA5W1G2Fv9NYWMemcshd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MAsaWyPpM4Dbsmm2VM2mJ8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Xng9euZZLG1V97jrRhegk
          claim_id: c_SI-lPhJhNjdJ2IKhcDXBt5
          source_id: s_8tXUe_giyEECga336NGDOq
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2014;2015：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8tXUe_giyEECga336NGDOq
            source_type: api_record
            title: 中国历代人物传记资料库：趙汝議（CBDB 5324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5324&o=json
            external_identifier: CBDB:5324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MAsaWyPpM4Dbsmm2VM2mJ8
        status: active
        display_name: 趙汝議
        merged_into_person_id: null
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
| parents | p_P7Pxo6A4165TeMjYaAs1jT | 王似之 | accepted |
| spouses | p_MAsaWyPpM4Dbsmm2VM2mJ8 | 趙汝議 | accepted |
| ancestors | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢龍（CBDB 19425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19425&o=json)
- [中国历代人物传记资料库：趙汝議（CBDB 5324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5324&o=json)
