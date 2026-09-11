---
schema: wang-person/v1
id: p_wofndLk6KRkFNdDgRMdtHw
status: active
merged_into: null
display_name: 王岳崧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cFnCzHhTxK4mqJtnwrMquR
        subject_person_id: p_wofndLk6KRkFNdDgRMdtHw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳崧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pc3JGw4RHjs97rCnBqvP1W
          claim_id: c_cFnCzHhTxK4mqJtnwrMquR
          source_id: s_qEi2WjHoEe5wpdC6F3WQTM
          stance: supports
          locator: CBDB:71778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71778）
          source: &a1
            id: s_qEi2WjHoEe5wpdC6F3WQTM
            source_type: api_record
            title: 中国历代人物传记资料库：王岳崧（CBDB 71778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71778&o=json
            external_identifier: CBDB:71778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8B4SP28fkNLKZJyquZSm4W
        subject_person_id: p_wofndLk6KRkFNdDgRMdtHw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XunbmBSuYtNDF2TzDYzgvM
          claim_id: c_8B4SP28fkNLKZJyquZSm4W
          source_id: s_qEi2WjHoEe5wpdC6F3WQTM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A3TaXTEyLC4aZ5A4YG4dAd
        subject_person_id: p_wofndLk6KRkFNdDgRMdtHw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳崧（生于1849年），清人物。籍贯瑞安。（中国历代人物传记资料库 CBDB 71778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SbqCsWQp3lvcItXmcGftmH
          claim_id: c_A3TaXTEyLC4aZ5A4YG4dAd
          source_id: s_qEi2WjHoEe5wpdC6F3WQTM
          stance: supports
          locator: CBDB:71778
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

# 王岳崧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岳崧 | accepted |
| birth.date | 1849年 | accepted |
| bio.summary | 王岳崧（生于1849年），清人物。籍贯瑞安。（中国历代人物传记资料库 CBDB 71778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王岳崧（CBDB 71778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71778&o=json)
