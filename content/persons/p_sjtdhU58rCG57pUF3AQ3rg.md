---
schema: wang-person/v1
id: p_sjtdhU58rCG57pUF3AQ3rg
status: active
merged_into: null
display_name: 王仲烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jMmb5J7i5hyDn4Ke1kM7X9
        subject_person_id: p_sjtdhU58rCG57pUF3AQ3rg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9KRPUKkN2hRPkKc3MieJze
          claim_id: c_jMmb5J7i5hyDn4Ke1kM7X9
          source_id: s_U85C94QgR6C9SHqY2Xj4Mm
          stance: supports
          locator: CBDB:635954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635954）
          source: &a1
            id: s_U85C94QgR6C9SHqY2Xj4Mm
            source_type: api_record
            title: 中国历代人物传记资料库：王仲烈（CBDB 635954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635954&o=json
            external_identifier: CBDB:635954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YLzAjH5agQtNpktk7Kfinp
        subject_person_id: p_sjtdhU58rCG57pUF3AQ3rg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲烈，清人物。籍贯濟南府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CQf4BwjF2qxpLX-CBhLEIJ
          claim_id: c_YLzAjH5agQtNpktk7Kfinp
          source_id: s_U85C94QgR6C9SHqY2Xj4Mm
          stance: supports
          locator: CBDB:635954
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

# 王仲烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲烈 | accepted |
| bio.summary | 王仲烈，清人物。籍贯濟南府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲烈（CBDB 635954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635954&o=json)
