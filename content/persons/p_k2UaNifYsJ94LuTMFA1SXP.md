---
schema: wang-person/v1
id: p_k2UaNifYsJ94LuTMFA1SXP
status: active
merged_into: null
display_name: 王明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_niyYQtRKJFMgaSxGSeE4Lw
        subject_person_id: p_k2UaNifYsJ94LuTMFA1SXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A1bYQBmZ4yqHYnBCEHwbiF
          claim_id: c_niyYQtRKJFMgaSxGSeE4Lw
          source_id: s_cVGG7UtLGr7HeVhZrabLby
          stance: supports
          locator: CBDB:489165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489165）
          source: &a1
            id: s_cVGG7UtLGr7HeVhZrabLby
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 489165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489165&o=json
            external_identifier: CBDB:489165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GaqvLjoTbARRHyfTrBTt1V
        subject_person_id: p_k2UaNifYsJ94LuTMFA1SXP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。曾任判官。（中国历代人物传记资料库 CBDB 489165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hi7OtQakT7t0x7YIlOByfA
          claim_id: c_GaqvLjoTbARRHyfTrBTt1V
          source_id: s_cVGG7UtLGr7HeVhZrabLby
          stance: supports
          locator: CBDB:489165
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

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。曾任判官。（中国历代人物传记资料库 CBDB 489165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 489165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489165&o=json)
