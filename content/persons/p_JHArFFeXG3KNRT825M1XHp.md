---
schema: wang-person/v1
id: p_JHArFFeXG3KNRT825M1XHp
status: active
merged_into: null
display_name: 王之懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ETprmoaWFL7xjjihRfUk3M
        subject_person_id: p_JHArFFeXG3KNRT825M1XHp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZwnAN5L4nmMVCdzQ18iRaW
          claim_id: c_ETprmoaWFL7xjjihRfUk3M
          source_id: s_74JyjEbzP6hD19S4CJ1ox4
          stance: supports
          locator: CBDB:635786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635786）
          source: &a1
            id: s_74JyjEbzP6hD19S4CJ1ox4
            source_type: api_record
            title: 中国历代人物传记资料库：王之懋（CBDB 635786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635786&o=json
            external_identifier: CBDB:635786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rv6iXoDEKX5C1MNMc5yiBj
        subject_person_id: p_JHArFFeXG3KNRT825M1XHp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之懋，清人物。籍贯灌陽，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635786）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ssf2GUWgrAhLs9Qz1adjot
          claim_id: c_Rv6iXoDEKX5C1MNMc5yiBj
          source_id: s_74JyjEbzP6hD19S4CJ1ox4
          stance: supports
          locator: CBDB:635786
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

# 王之懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之懋 | accepted |
| bio.summary | 王之懋，清人物。籍贯灌陽，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之懋（CBDB 635786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635786&o=json)
