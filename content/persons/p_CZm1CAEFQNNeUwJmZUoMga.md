---
schema: wang-person/v1
id: p_CZm1CAEFQNNeUwJmZUoMga
status: active
merged_into: null
display_name: 王洓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U4WmFHFk9aheJ5KsSTPgSP
        subject_person_id: p_CZm1CAEFQNNeUwJmZUoMga
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvcxw4TnMBAhFud8YXEQGA
          claim_id: c_U4WmFHFk9aheJ5KsSTPgSP
          source_id: s_6WyE4rkpJhnKxXPfFSnHdP
          stance: supports
          locator: CBDB:639083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639083）
          source: &a1
            id: s_6WyE4rkpJhnKxXPfFSnHdP
            source_type: api_record
            title: 中国历代人物传记资料库：王洓（CBDB 639083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639083&o=json
            external_identifier: CBDB:639083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UKpQsGzLAgfPEkkzAmibE8
        subject_person_id: p_CZm1CAEFQNNeUwJmZUoMga
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洓，清人物。籍贯歸安，入仕附貢生，曾任知州。（中国历代人物传记资料库 CBDB 639083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jzmAwKoCkS9INul0rd6d09
          claim_id: c_UKpQsGzLAgfPEkkzAmibE8
          source_id: s_6WyE4rkpJhnKxXPfFSnHdP
          stance: supports
          locator: CBDB:639083
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

# 王洓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洓 | accepted |
| bio.summary | 王洓，清人物。籍贯歸安，入仕附貢生，曾任知州。（中国历代人物传记资料库 CBDB 639083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洓（CBDB 639083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639083&o=json)
