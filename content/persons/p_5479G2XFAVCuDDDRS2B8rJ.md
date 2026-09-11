---
schema: wang-person/v1
id: p_5479G2XFAVCuDDDRS2B8rJ
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CLfR4pFoBQp1T2K1czbo3Z
        subject_person_id: p_5479G2XFAVCuDDDRS2B8rJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xp4vu1U1kwR1hFWVsUmXAt
          claim_id: c_CLfR4pFoBQp1T2K1czbo3Z
          source_id: s_NqC1cFY5XWRBnZVGxVxQcG
          stance: supports
          locator: CBDB:327526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327526）
          source: &a1
            id: s_NqC1cFY5XWRBnZVGxVxQcG
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 327526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327526&o=json
            external_identifier: CBDB:327526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xw17XnsjSJen9KbgLLWDy4
        subject_person_id: p_5479G2XFAVCuDDDRS2B8rJ
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
        - id: cs_DGaD9AFLFDvjKRqdPUAeMy
          claim_id: c_xw17XnsjSJen9KbgLLWDy4
          source_id: s_NqC1cFY5XWRBnZVGxVxQcG
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
        id: c_rLSR3v_aNrJXu4aEDPoRx2
        subject_person_id: p_5479G2XFAVCuDDDRS2B8rJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dzhlov0SafcbThupPEj1cT
          claim_id: c_rLSR3v_aNrJXu4aEDPoRx2
          source_id: s_NqC1cFY5XWRBnZVGxVxQcG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 327526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327526&o=json)
