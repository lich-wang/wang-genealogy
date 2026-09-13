---
schema: wang-person/v1
id: p_ofV2sVdAkYm29sUt171KNG
status: active
merged_into: null
display_name: 王景喬
cbdb_id: 494015
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PnFgE3Eptxy1if2cwyKENd
        subject_person_id: p_ofV2sVdAkYm29sUt171KNG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景喬，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KJrUMZ_SP_7whbgAirNL4C
          claim_id: c_PnFgE3Eptxy1if2cwyKENd
          source_id: s_D4Tsr4t7UMd5BCQriaiAMf
          stance: supports
          locator: CBDB:494015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D4Tsr4t7UMd5BCQriaiAMf
            source_type: api_record
            title: 中国历代人物传记资料库：王景喬（CBDB 494015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494015&o=json
            external_identifier: CBDB:494015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7AdRq5Y14LhYeDaK6sWEN
        subject_person_id: p_ofV2sVdAkYm29sUt171KNG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景喬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7iVvi22Jq9BJ6y47uF4AJV
          claim_id: c_d7AdRq5Y14LhYeDaK6sWEN
          source_id: s_D4Tsr4t7UMd5BCQriaiAMf
          stance: supports
          locator: CBDB:494015
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 清
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

# 王景喬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景喬，清人物。曾任典史。（中国历代人物传记资料库 CBDB 494015） | accepted |
| name.primary | 王景喬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景喬（CBDB 494015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494015&o=json)
