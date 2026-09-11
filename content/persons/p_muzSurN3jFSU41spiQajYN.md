---
schema: wang-person/v1
id: p_muzSurN3jFSU41spiQajYN
status: active
merged_into: null
display_name: 王青
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNUFrWa1HdnWkfVri3T2Vr
        subject_person_id: p_muzSurN3jFSU41spiQajYN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王青
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fXKrGcUMkAVerQ2n4g7qVZ
          claim_id: c_JNUFrWa1HdnWkfVri3T2Vr
          source_id: s_pBk538th3gJ4P2ZVHY6ThC
          stance: supports
          locator: CBDB:259537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259537）
          source: &a1
            id: s_pBk538th3gJ4P2ZVHY6ThC
            source_type: api_record
            title: 中国历代人物传记资料库：王青（CBDB 259537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259537&o=json
            external_identifier: CBDB:259537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iHg1pFLEjkN46BdhHEqMHg
        subject_person_id: p_muzSurN3jFSU41spiQajYN
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
        - id: cs_R7v7Qa2qJ4gwxLyqSAMahU
          claim_id: c_iHg1pFLEjkN46BdhHEqMHg
          source_id: s_pBk538th3gJ4P2ZVHY6ThC
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
        id: c_3G7EX3lKf8oAFDE-DvRd1v
        subject_person_id: p_muzSurN3jFSU41spiQajYN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_juvH53hdPLOFN_Yo45OP9-
          claim_id: c_3G7EX3lKf8oAFDE-DvRd1v
          source_id: s_pBk538th3gJ4P2ZVHY6ThC
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
  other: []
---

# 王青

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王青 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王青（CBDB 259537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259537&o=json)
