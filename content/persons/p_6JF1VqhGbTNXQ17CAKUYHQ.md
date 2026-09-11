---
schema: wang-person/v1
id: p_6JF1VqhGbTNXQ17CAKUYHQ
status: active
merged_into: null
display_name: 王燕曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DfnEK68GFvxVWpPJdRhPYo
        subject_person_id: p_6JF1VqhGbTNXQ17CAKUYHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZyGVw4o5ib2cuDXvxTwNK
          claim_id: c_DfnEK68GFvxVWpPJdRhPYo
          source_id: s_4A5BQpt2A7LLyY97NAETtA
          stance: supports
          locator: CBDB:639341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639341）
          source: &a1
            id: s_4A5BQpt2A7LLyY97NAETtA
            source_type: api_record
            title: 中国历代人物传记资料库：王燕曾（CBDB 639341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639341&o=json
            external_identifier: CBDB:639341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XZXo76nBMUuxv6nFVz5aBr
        subject_person_id: p_6JF1VqhGbTNXQ17CAKUYHQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕曾，清人物。籍贯彰德府，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 639341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rqCu74Moz1gb-4RsMRG5IH
          claim_id: c_XZXo76nBMUuxv6nFVz5aBr
          source_id: s_4A5BQpt2A7LLyY97NAETtA
          stance: supports
          locator: CBDB:639341
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

# 王燕曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燕曾 | accepted |
| bio.summary | 王燕曾，清人物。籍贯彰德府，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 639341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燕曾（CBDB 639341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639341&o=json)
