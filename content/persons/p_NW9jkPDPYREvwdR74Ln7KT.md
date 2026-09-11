---
schema: wang-person/v1
id: p_NW9jkPDPYREvwdR74Ln7KT
status: active
merged_into: null
display_name: 王肇衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7Nw5YCE7H2EM9PPNakYv2
        subject_person_id: p_NW9jkPDPYREvwdR74Ln7KT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5guhDNtzE9KV8KVNSnfDei
          claim_id: c_J7Nw5YCE7H2EM9PPNakYv2
          source_id: s_F9fMfuv8DCpQZ3Xj5MRFvT
          stance: supports
          locator: CBDB:639981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639981）
          source: &a1
            id: s_F9fMfuv8DCpQZ3Xj5MRFvT
            source_type: api_record
            title: 中国历代人物传记资料库：王肇衍（CBDB 639981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639981&o=json
            external_identifier: CBDB:639981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2HXjygAmU8yF8QWWmHk8HY
        subject_person_id: p_NW9jkPDPYREvwdR74Ln7KT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇衍，清人物。籍贯平凉，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 639981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GHHWxuKuq22g--wxHG2-iS
          claim_id: c_2HXjygAmU8yF8QWWmHk8HY
          source_id: s_F9fMfuv8DCpQZ3Xj5MRFvT
          stance: supports
          locator: CBDB:639981
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

# 王肇衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇衍 | accepted |
| bio.summary | 王肇衍，清人物。籍贯平凉，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 639981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇衍（CBDB 639981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639981&o=json)
