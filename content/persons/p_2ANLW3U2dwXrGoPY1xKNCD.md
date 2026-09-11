---
schema: wang-person/v1
id: p_2ANLW3U2dwXrGoPY1xKNCD
status: active
merged_into: null
display_name: 王玄應
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h7mfJmt8LS2Ccox2SSdj2q
        subject_person_id: p_2ANLW3U2dwXrGoPY1xKNCD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WGbqakv5jrTxtvqdM4E1PK
          claim_id: c_h7mfJmt8LS2Ccox2SSdj2q
          source_id: s_eb3N71z7xLxKvF71rrpT39
          stance: supports
          locator: CBDB:149683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149683）
          source: &a1
            id: s_eb3N71z7xLxKvF71rrpT39
            source_type: api_record
            title: 中国历代人物传记资料库：王玄應（CBDB 149683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149683&o=json
            external_identifier: CBDB:149683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E5nVMUq5njLTmh2o7kRUZn
        subject_person_id: p_2ANLW3U2dwXrGoPY1xKNCD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄應，唐人物。籍贯平樂。（中国历代人物传记资料库 CBDB 149683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qsfC0TlqTSYja-c4BGzeHr
          claim_id: c_E5nVMUq5njLTmh2o7kRUZn
          source_id: s_eb3N71z7xLxKvF71rrpT39
          stance: supports
          locator: CBDB:149683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vb1yfuumjWzamjJqSunLL6
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ANLW3U2dwXrGoPY1xKNCD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlPApBdyYRkji6Q7ubVFC5
          claim_id: c_vb1yfuumjWzamjJqSunLL6
          source_id: s_eb3N71z7xLxKvF71rrpT39
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changshou 20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ewVR3hFtZjvum2Uhn4Nxtd
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄應 | accepted |
| bio.summary | 王玄應，唐人物。籍贯平樂。（中国历代人物传记资料库 CBDB 149683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ewVR3hFtZjvum2Uhn4Nxtd | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄應（CBDB 149683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149683&o=json)
