---
schema: wang-person/v1
id: p_9Ma1LkKxTCC6c9bCKpmah8
status: active
merged_into: null
display_name: 王樹棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6tk8DCdnRTJ7PfCoipsnZS
        subject_person_id: p_9Ma1LkKxTCC6c9bCKpmah8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1q9PHhXvwKBPpyNcZiJFaM
          claim_id: c_6tk8DCdnRTJ7PfCoipsnZS
          source_id: s_5PiQUcnKPLyMYtVYYdxLC7
          stance: supports
          locator: CBDB:494483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494483）
          source: &a1
            id: s_5PiQUcnKPLyMYtVYYdxLC7
            source_type: api_record
            title: 中国历代人物传记资料库：王樹棠（CBDB 494483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494483&o=json
            external_identifier: CBDB:494483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xdWkD7DgXFUNf19gD6L59a
        subject_person_id: p_9Ma1LkKxTCC6c9bCKpmah8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹棠，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 494483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o3U2G5phEghUVgl0B8Weq9
          claim_id: c_xdWkD7DgXFUNf19gD6L59a
          source_id: s_5PiQUcnKPLyMYtVYYdxLC7
          stance: supports
          locator: CBDB:494483
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

# 王樹棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹棠 | accepted |
| bio.summary | 王樹棠，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 494483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹棠（CBDB 494483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494483&o=json)
