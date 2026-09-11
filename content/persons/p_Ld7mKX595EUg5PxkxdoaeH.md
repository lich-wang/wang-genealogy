---
schema: wang-person/v1
id: p_Ld7mKX595EUg5PxkxdoaeH
status: active
merged_into: null
display_name: 王國昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oN6i9uhNQumibvPhPod54y
        subject_person_id: p_Ld7mKX595EUg5PxkxdoaeH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uon7qqJB83KbYrpKLqe4Si
          claim_id: c_oN6i9uhNQumibvPhPod54y
          source_id: s_DkNVj5v7jNweP1FxRaw7XE
          stance: supports
          locator: CBDB:703666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703666）
          source: &a1
            id: s_DkNVj5v7jNweP1FxRaw7XE
            source_type: api_record
            title: 中国历代人物传记资料库：王國昇（CBDB 703666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703666&o=json
            external_identifier: CBDB:703666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgYnPpPeMjHLohRfLKgHAJ
        subject_person_id: p_Ld7mKX595EUg5PxkxdoaeH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國昇，清人物。籍贯婺源。（中国历代人物传记资料库 CBDB 703666）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u1OyS12ACl1aRF5pGY9uJr
          claim_id: c_EgYnPpPeMjHLohRfLKgHAJ
          source_id: s_DkNVj5v7jNweP1FxRaw7XE
          stance: supports
          locator: CBDB:703666
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

# 王國昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國昇 | accepted |
| bio.summary | 王國昇，清人物。籍贯婺源。（中国历代人物传记资料库 CBDB 703666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國昇（CBDB 703666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703666&o=json)
