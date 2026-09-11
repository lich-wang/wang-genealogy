---
schema: wang-person/v1
id: p_ES9yto8o9thJHmpD6cev3a
status: active
merged_into: null
display_name: 王穉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cXDbJCSGMLzy8DemaF4wPv
        subject_person_id: p_ES9yto8o9thJHmpD6cev3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_idegqywtsbhk92Joif2Cxz
          claim_id: c_cXDbJCSGMLzy8DemaF4wPv
          source_id: s_JNqJ9JwLe3PQjVMCcRAs3q
          stance: supports
          locator: CBDB:437559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437559）
          source: &a1
            id: s_JNqJ9JwLe3PQjVMCcRAs3q
            source_type: api_record
            title: 中国历代人物传记资料库：王穉（CBDB 437559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437559&o=json
            external_identifier: CBDB:437559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9VvKMAZfS1HHKWK5Qo5CNB
        subject_person_id: p_ES9yto8o9thJHmpD6cev3a
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
        - id: cs_N44t9XyYVhggyYZ62zC9tF
          claim_id: c_9VvKMAZfS1HHKWK5Qo5CNB
          source_id: s_JNqJ9JwLe3PQjVMCcRAs3q
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
        id: c_O9MjLTq2V4vI924gmHw87n
        subject_person_id: p_ePUgH55QWsG6Hauqd4raHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ES9yto8o9thJHmpD6cev3a
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vW0Vd5jKbxLZAukGaoZYQ
          claim_id: c_O9MjLTq2V4vI924gmHw87n
          source_id: s_g4VKr2D6htM499vC6zENon
          stance: supports
          locator: CBDB 双向互证（孫 王穉 ⇄ 祖父 王文彪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_g4VKr2D6htM499vC6zENon
            source_type: api_record
            title: 中国历代人物传记资料库：王文彪（CBDB 101100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json
            external_identifier: CBDB:101100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ePUgH55QWsG6Hauqd4raHD
        status: active
        display_name: 王文彪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ePUgH55QWsG6Hauqd4raHD | 王文彪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文彪（CBDB 101100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101100&o=json)
- [中国历代人物传记资料库：王穉（CBDB 437559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437559&o=json)
