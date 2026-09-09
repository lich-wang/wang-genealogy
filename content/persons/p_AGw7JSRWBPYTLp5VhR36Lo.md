---
schema: wang-person/v1
id: p_AGw7JSRWBPYTLp5VhR36Lo
status: active
merged_into: null
display_name: 王大宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKy3JJJ5tv6YoCDtxeLtHN
        subject_person_id: p_AGw7JSRWBPYTLp5VhR36Lo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p2QKYu4A6XDtPD5pg5AKpa
          claim_id: c_PKy3JJJ5tv6YoCDtxeLtHN
          source_id: s_DHaW2tCSCrbpAy6iyCxeYS
          stance: supports
          locator: CBDB:220575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220575）
          source: &a1
            id: s_DHaW2tCSCrbpAy6iyCxeYS
            source_type: api_record
            title: 中国历代人物传记资料库：王大宗（CBDB 220575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220575&o=json
            external_identifier: CBDB:220575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sUSZzxA6NPb9oULoJA1WLF
        subject_person_id: p_AGw7JSRWBPYTLp5VhR36Lo
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
        - id: cs_W32BPonsUPPJ6vSaiZCg4q
          claim_id: c_sUSZzxA6NPb9oULoJA1WLF
          source_id: s_DHaW2tCSCrbpAy6iyCxeYS
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

# 王大宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大宗（CBDB 220575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220575&o=json)
