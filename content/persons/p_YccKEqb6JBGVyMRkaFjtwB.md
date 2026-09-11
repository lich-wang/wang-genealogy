---
schema: wang-person/v1
id: p_YccKEqb6JBGVyMRkaFjtwB
status: active
merged_into: null
display_name: 王承林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2jqCcfi6BycSSG7dh77gt
        subject_person_id: p_YccKEqb6JBGVyMRkaFjtwB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ySEiddiEVCVh6BL6K1ket2
          claim_id: c_B2jqCcfi6BycSSG7dh77gt
          source_id: s_nQFhBWweZ1xShqRPrwR7sM
          stance: supports
          locator: CBDB:380912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380912）
          source: &a1
            id: s_nQFhBWweZ1xShqRPrwR7sM
            source_type: api_record
            title: 中国历代人物传记资料库：王承林（CBDB 380912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380912&o=json
            external_identifier: CBDB:380912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JitXgvXr8CrrWBFJKKNKQS
        subject_person_id: p_YccKEqb6JBGVyMRkaFjtwB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承林，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380912）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AcID1HCEEKNLArW35ZqYTG
          claim_id: c_JitXgvXr8CrrWBFJKKNKQS
          source_id: s_nQFhBWweZ1xShqRPrwR7sM
          stance: supports
          locator: CBDB:380912
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王承林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承林 | accepted |
| bio.summary | 王承林，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380912） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承林（CBDB 380912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380912&o=json)
