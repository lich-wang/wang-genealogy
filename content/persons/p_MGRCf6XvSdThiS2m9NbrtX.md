---
schema: wang-person/v1
id: p_MGRCf6XvSdThiS2m9NbrtX
status: active
merged_into: null
display_name: 王彥誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xkbCiZNQFrjCtkQW1oji2o
        subject_person_id: p_MGRCf6XvSdThiS2m9NbrtX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9UAE1yN5bsszaWX5hmYSji
          claim_id: c_xkbCiZNQFrjCtkQW1oji2o
          source_id: s_nBcBfZN49zoqQuEb5RpKNp
          stance: supports
          locator: CBDB:414521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414521）
          source: &a1
            id: s_nBcBfZN49zoqQuEb5RpKNp
            source_type: api_record
            title: 中国历代人物传记资料库：王彥誠（CBDB 414521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414521&o=json
            external_identifier: CBDB:414521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2FbSDEfJiE7Vp8UybTsne8
        subject_person_id: p_MGRCf6XvSdThiS2m9NbrtX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥誠，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xzGooYgBzlyPUXEwhoJNRN
          claim_id: c_2FbSDEfJiE7Vp8UybTsne8
          source_id: s_nBcBfZN49zoqQuEb5RpKNp
          stance: supports
          locator: CBDB:414521
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

# 王彥誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥誠 | accepted |
| bio.summary | 王彥誠，明人物。曾任通判。（中国历代人物传记资料库 CBDB 414521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥誠（CBDB 414521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414521&o=json)
