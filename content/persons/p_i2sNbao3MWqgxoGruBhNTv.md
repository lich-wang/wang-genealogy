---
schema: wang-person/v1
id: p_i2sNbao3MWqgxoGruBhNTv
status: active
merged_into: null
display_name: 王禹鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oLvXXBCXomGtpTkFpfT579
        subject_person_id: p_i2sNbao3MWqgxoGruBhNTv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_288yjjo1VWLJ8GsekkBeRC
          claim_id: c_oLvXXBCXomGtpTkFpfT579
          source_id: s_HPocq2JaFr9WueX8jRvKXD
          stance: supports
          locator: CBDB:538106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538106）
          source: &a1
            id: s_HPocq2JaFr9WueX8jRvKXD
            source_type: api_record
            title: 中国历代人物传记资料库：王禹鈞（CBDB 538106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538106&o=json
            external_identifier: CBDB:538106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sJzUM6A1io4rHFtLzkAYKr
        subject_person_id: p_i2sNbao3MWqgxoGruBhNTv
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
        - id: cs_uUbTrBCPgkePLYCHkavsSY
          claim_id: c_sJzUM6A1io4rHFtLzkAYKr
          source_id: s_HPocq2JaFr9WueX8jRvKXD
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

# 王禹鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹鈞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹鈞（CBDB 538106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538106&o=json)
