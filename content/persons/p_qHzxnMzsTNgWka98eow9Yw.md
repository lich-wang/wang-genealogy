---
schema: wang-person/v1
id: p_qHzxnMzsTNgWka98eow9Yw
status: active
merged_into: null
display_name: 王紹修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujzmupYa6ump3TmdbnF2Hd
        subject_person_id: p_qHzxnMzsTNgWka98eow9Yw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AD4UyQXgJx6J1bcX3nVccN
          claim_id: c_ujzmupYa6ump3TmdbnF2Hd
          source_id: s_aLpg53fweiDU34649wUK4E
          stance: supports
          locator: CBDB:639750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639750）
          source: &a1
            id: s_aLpg53fweiDU34649wUK4E
            source_type: api_record
            title: 中国历代人物传记资料库：王紹修（CBDB 639750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639750&o=json
            external_identifier: CBDB:639750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xQeSc3rM213GR7YXBGSshu
        subject_person_id: p_qHzxnMzsTNgWka98eow9Yw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQyV27yFAjtYS8HpvA99ex
          claim_id: c_xQeSc3rM213GR7YXBGSshu
          source_id: s_aLpg53fweiDU34649wUK4E
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

# 王紹修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹修 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹修（CBDB 639750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639750&o=json)
