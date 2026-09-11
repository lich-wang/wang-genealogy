---
schema: wang-person/v1
id: p_Zzko18DbW1Y2BiBJXRGzZW
status: active
merged_into: null
display_name: 王斌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ifT7jdUYMPXa7Cn112YhMK
        subject_person_id: p_Zzko18DbW1Y2BiBJXRGzZW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qMWDAoLHmAm6dGWEheVxor
          claim_id: c_ifT7jdUYMPXa7Cn112YhMK
          source_id: s_ZnCgx4BwUhDsFNeYrTxpHU
          stance: supports
          locator: CBDB:577154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577154）
          source: &a1
            id: s_ZnCgx4BwUhDsFNeYrTxpHU
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 577154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577154&o=json
            external_identifier: CBDB:577154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NQ4qm1w6ZDDLm4aMVTZBHv
        subject_person_id: p_Zzko18DbW1Y2BiBJXRGzZW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，清人物。籍贯登州府，入仕進士，曾任前營遊擊。（中国历代人物传记资料库 CBDB 577154）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_csCcJHR8QPOriXACy0NNrB
          claim_id: c_NQ4qm1w6ZDDLm4aMVTZBHv
          source_id: s_ZnCgx4BwUhDsFNeYrTxpHU
          stance: supports
          locator: CBDB:577154
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

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，清人物。籍贯登州府，入仕進士，曾任前營遊擊。（中国历代人物传记资料库 CBDB 577154） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 577154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577154&o=json)
