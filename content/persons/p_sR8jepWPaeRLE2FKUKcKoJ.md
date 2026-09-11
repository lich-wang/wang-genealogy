---
schema: wang-person/v1
id: p_sR8jepWPaeRLE2FKUKcKoJ
status: active
merged_into: null
display_name: 王博文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o6UmJwNExfm7RMx1NtrVPz
        subject_person_id: p_sR8jepWPaeRLE2FKUKcKoJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王博文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TZKmgPKePq7LacZJiVK5oN
          claim_id: c_o6UmJwNExfm7RMx1NtrVPz
          source_id: s_JSLtTcXxMSfo7JJjuFp1Rx
          stance: supports
          locator: CBDB:101353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101353）
          source: &a1
            id: s_JSLtTcXxMSfo7JJjuFp1Rx
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 101353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101353&o=json
            external_identifier: CBDB:101353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yPmnXpbiN8UtjAaV8fQNRM
        subject_person_id: p_sR8jepWPaeRLE2FKUKcKoJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王博文，元人物。籍贯涇陽，曾任州判官。（中国历代人物传记资料库 CBDB 101353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AtQvZTwcX1t3N4DvxxQhHB
          claim_id: c_yPmnXpbiN8UtjAaV8fQNRM
          source_id: s_JSLtTcXxMSfo7JJjuFp1Rx
          stance: supports
          locator: CBDB:101353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王博文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王博文 | accepted |
| bio.summary | 王博文，元人物。籍贯涇陽，曾任州判官。（中国历代人物传记资料库 CBDB 101353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 101353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101353&o=json)
