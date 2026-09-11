---
schema: wang-person/v1
id: p_wPPdwAmBzRv6YhCoU8U8kn
status: active
merged_into: null
display_name: 王悅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QjSwss6yHZKYuB6BCfRPaV
        subject_person_id: p_wPPdwAmBzRv6YhCoU8U8kn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f9Fy7y3kNMFD1H9ZDzAABi
          claim_id: c_QjSwss6yHZKYuB6BCfRPaV
          source_id: s_wBL3fzq1DArkukGz1zmCsP
          stance: supports
          locator: CBDB:154882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154882）
          source: &a1
            id: s_wBL3fzq1DArkukGz1zmCsP
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 154882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154882&o=json
            external_identifier: CBDB:154882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hi6jgPvAbhiWURWnPP9JAM
        subject_person_id: p_wPPdwAmBzRv6YhCoU8U8kn
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
        - id: cs_Rk8hd43za1N5x4sVoKVvuL
          claim_id: c_hi6jgPvAbhiWURWnPP9JAM
          source_id: s_wBL3fzq1DArkukGz1zmCsP
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
        id: c_2wkWxjaSi1wWg5KiydfK-i
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPPdwAmBzRv6YhCoU8U8kn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7QiCglr2rpE7TEB8q69tM
          claim_id: c_2wkWxjaSi1wWg5KiydfK-i
          source_id: s_wBL3fzq1DArkukGz1zmCsP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hKFRGLXq8WXe249MjHQ238
        status: active
        display_name: 王晉俗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悅 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hKFRGLXq8WXe249MjHQ238 | 王晉俗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悅（CBDB 154882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154882&o=json)
