---
schema: wang-person/v1
id: p_k6avUyaFcBkTE2cKwzPVLW
status: active
merged_into: null
display_name: 王柄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YC4YuZAuJETnMAzFShxXGr
        subject_person_id: p_k6avUyaFcBkTE2cKwzPVLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvBKoZeCJ3DWd8nJ813aYa
          claim_id: c_YC4YuZAuJETnMAzFShxXGr
          source_id: s_5kbDsaDfmUL1CU58aegWhA
          stance: supports
          locator: CBDB:385778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385778）
          source: &a1
            id: s_5kbDsaDfmUL1CU58aegWhA
            source_type: api_record
            title: 中国历代人物传记资料库：王柄（CBDB 385778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385778&o=json
            external_identifier: CBDB:385778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vQNfQi9KJVZhEGcwbQCL5e
        subject_person_id: p_k6avUyaFcBkTE2cKwzPVLW
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
        - id: cs_MJcmrGFsibq2UKbdeo9YZZ
          claim_id: c_vQNfQi9KJVZhEGcwbQCL5e
          source_id: s_5kbDsaDfmUL1CU58aegWhA
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
        id: c_UCFDffBUiXEnul735QTs0l
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_k6avUyaFcBkTE2cKwzPVLW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0GRumxHm1HVWNLzCXF_3Q
          claim_id: c_UCFDffBUiXEnul735QTs0l
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

# 王柄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柄 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柄（CBDB 385778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385778&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
