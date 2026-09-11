---
schema: wang-person/v1
id: p_u6cA2KSg6U1riqHFDTtFHW
status: active
merged_into: null
display_name: 王樾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4ZLCDLbJHPDbJAH4KJ4Fd
        subject_person_id: p_u6cA2KSg6U1riqHFDTtFHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YoYUKxDHp9GmFDJyaL3tsM
          claim_id: c_X4ZLCDLbJHPDbJAH4KJ4Fd
          source_id: s_CPBKNaL55rKw9X44FXMyLy
          stance: supports
          locator: CBDB:385782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385782）
          source: &a1
            id: s_CPBKNaL55rKw9X44FXMyLy
            source_type: api_record
            title: 中国历代人物传记资料库：王樾（CBDB 385782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385782&o=json
            external_identifier: CBDB:385782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ujQL41wZvriT5Qo8W4Ka27
        subject_person_id: p_u6cA2KSg6U1riqHFDTtFHW
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
        - id: cs_EfKcoRd9n26AXLwsmDAu48
          claim_id: c_ujQL41wZvriT5Qo8W4Ka27
          source_id: s_CPBKNaL55rKw9X44FXMyLy
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
        id: c_8PoUcJ_vcwOsje3u6tcO0e
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_u6cA2KSg6U1riqHFDTtFHW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdctqiIcpD04VGI-rUgLFU
          claim_id: c_8PoUcJ_vcwOsje3u6tcO0e
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 全宋文，卷 4781：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
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
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王樾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
- [中国历代人物传记资料库：王樾（CBDB 385782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385782&o=json)
