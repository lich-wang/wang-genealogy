---
schema: wang-person/v1
id: p_kVmiyFfGGmYR5XQCJN1gT3
status: active
merged_into: null
display_name: 王睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yoLedmkG3e2r79G5musATJ
        subject_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsPNrs26fLVfgMXhwG4DK8
          claim_id: c_yoLedmkG3e2r79G5musATJ
          source_id: s_KmMve2AJz5teMXxKJ66QJy
          stance: supports
          locator: CBDB:320073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320073）
          source: &a1
            id: s_KmMve2AJz5teMXxKJ66QJy
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 320073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json
            external_identifier: CBDB:320073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oaGEEC2S4FWvhp1KuEYrQ
        subject_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
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
        - id: cs_a2S6XPpcn2rAGHhiisAr5u
          claim_id: c_3oaGEEC2S4FWvhp1KuEYrQ
          source_id: s_KmMve2AJz5teMXxKJ66QJy
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
  descendants: []
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王睿（CBDB 320073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json)
