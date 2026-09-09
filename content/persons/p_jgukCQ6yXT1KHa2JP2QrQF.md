---
schema: wang-person/v1
id: p_jgukCQ6yXT1KHa2JP2QrQF
status: active
merged_into: null
display_name: 王勝宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_twbLV5FxgBucZa8rnU3r2P
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n9yYdsBHYXo1JDiKe4Zfs3
          claim_id: c_twbLV5FxgBucZa8rnU3r2P
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: CBDB:236827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236827）
          source: &a1
            id: s_3QYpbUb1KA1PLDW4B4gFnk
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 236827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json
            external_identifier: CBDB:236827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84Hh2n1JFBNH5ZLtvCoRLD
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
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
        - id: cs_x7PYskkT1MBTEfMEaBC6CB
          claim_id: c_84Hh2n1JFBNH5ZLtvCoRLD
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
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

# 王勝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勝宗（CBDB 236827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json)
