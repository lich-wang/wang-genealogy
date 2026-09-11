---
schema: wang-person/v1
id: p_bkMbqmq6U23rFXaG17Pxzk
status: active
merged_into: null
display_name: 王師心
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uz6XfYta6XYtwNnQFMWzVR
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7nH5YUnfxS3bRyA18NF12E
          claim_id: c_Uz6XfYta6XYtwNnQFMWzVR
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: CBDB:1872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1872）
          source: &a1
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4ASe4KwQ9xgDeznkrD7SVK
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1097年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGFubmemKHFaeP7kXrV7jn
          claim_id: c_4ASe4KwQ9xgDeznkrD7SVK
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Np11iM68oTmDM7tybfBJo2
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKmDB53r5g3Tn4yi7tvgbx
          claim_id: c_Np11iM68oTmDM7tybfBJo2
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJZJBWg9gWv5VnfmQLnEWn
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
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
        - id: cs_yXTjBKmRsYo2C8xEdMBJRK
          claim_id: c_uJZJBWg9gWv5VnfmQLnEWn
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
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
        id: c_hsAMI5UK8G8AV7yRW-qSdn
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_64abNVCX3tB4hhRcKEd7HQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMSm3RrfaVaweVYjkLxCCJ
          claim_id: c_hsAMI5UK8G8AV7yRW-qSdn
          source_id: s_Lvp4AYfFSArAaajLLf871i
          stance: supports
          locator: 全宋文，卷 4781：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lvp4AYfFSArAaajLLf871i
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 385783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385783&o=json
            external_identifier: CBDB:385783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_64abNVCX3tB4hhRcKEd7HQ
        status: active
        display_name: 王樸
        merged_into_person_id: null
  other: []
---

# 王師心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師心 | accepted |
| birth.date | 1097年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_64abNVCX3tB4hhRcKEd7HQ | 王樸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 385783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385783&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
