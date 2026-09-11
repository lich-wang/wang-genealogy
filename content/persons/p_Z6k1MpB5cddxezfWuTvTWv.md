---
schema: wang-person/v1
id: p_Z6k1MpB5cddxezfWuTvTWv
status: active
merged_into: null
display_name: 王嵩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LaQkVNSkmQnewuryk9NxYS
        subject_person_id: p_Z6k1MpB5cddxezfWuTvTWv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_46daA5TskHHvx76U7HBvFZ
          claim_id: c_LaQkVNSkmQnewuryk9NxYS
          source_id: s_dWHaaWA3G31dqZWJ8MQGF1
          stance: supports
          locator: CBDB:148912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148912）
          source: &a1
            id: s_dWHaaWA3G31dqZWJ8MQGF1
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 148912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148912&o=json
            external_identifier: CBDB:148912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KkG11RUpbNGa9EJUPjsCRD
        subject_person_id: p_Z6k1MpB5cddxezfWuTvTWv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩，唐人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 148912）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1dsImpLXVvhvzFn4dsr1vg
          claim_id: c_KkG11RUpbNGa9EJUPjsCRD
          source_id: s_dWHaaWA3G31dqZWJ8MQGF1
          stance: supports
          locator: CBDB:148912
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wUc1pZ60WBecRQkWPjc5qt
        subject_person_id: p_Z6k1MpB5cddxezfWuTvTWv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kDUZpt4UUEtEL7PhpMVLHL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhpzHKjp0Dp0OK5JFFZRtR
          claim_id: c_wUc1pZ60WBecRQkWPjc5qt
          source_id: s_vBvEmFfPhQ2StLAGJ2h6aH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiaolu 12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vBvEmFfPhQ2StLAGJ2h6aH
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 139743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139743&o=json
            external_identifier: CBDB:139743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kDUZpt4UUEtEL7PhpMVLHL
        status: active
        display_name: 王深
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | 王嵩，唐人物。籍贯太原，曾任縣令。（中国历代人物传记资料库 CBDB 148912） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kDUZpt4UUEtEL7PhpMVLHL | 王深 | accepted |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 139743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139743&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 148912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148912&o=json)
