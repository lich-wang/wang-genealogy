---
schema: wang-person/v1
id: p_zaPQyV7HEdQvPbJ2R6tuiA
status: active
merged_into: null
display_name: 王育
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ygwGDymn71SN3nZH3LNaZh
        subject_person_id: p_zaPQyV7HEdQvPbJ2R6tuiA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HPvU5EFd6aMsHPnz1FmeJy
          claim_id: c_ygwGDymn71SN3nZH3LNaZh
          source_id: s_9dQPYBjqC1hD3FtZx6YaAi
          stance: supports
          locator: CBDB:71110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71110）
          source: &a1
            id: s_9dQPYBjqC1hD3FtZx6YaAi
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 71110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71110&o=json
            external_identifier: CBDB:71110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GyHH1GAgBfWaaLuKcrXJpA
        subject_person_id: p_zaPQyV7HEdQvPbJ2R6tuiA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H14mgaK1hcmcGzDqtQuP2A
          claim_id: c_GyHH1GAgBfWaaLuKcrXJpA
          source_id: s_9dQPYBjqC1hD3FtZx6YaAi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WTECKRQhTmSMDJKSpAWqVm
        subject_person_id: p_zaPQyV7HEdQvPbJ2R6tuiA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJAQ4YwLFrzkKKPPmLcCbH
          claim_id: c_WTECKRQhTmSMDJKSpAWqVm
          source_id: s_9dQPYBjqC1hD3FtZx6YaAi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AM9XCK87xWnqCUQSCyBV4G
        subject_person_id: p_zaPQyV7HEdQvPbJ2R6tuiA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育（1593年—1680年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71110）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yAioNUEjmJ1E5NlUV6dmD7
          claim_id: c_AM9XCK87xWnqCUQSCyBV4G
          source_id: s_9dQPYBjqC1hD3FtZx6YaAi
          stance: supports
          locator: CBDB:71110
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

# 王育

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育 | accepted |
| birth.date | 1593年 | accepted |
| death.date | 1680年 | accepted |
| bio.summary | 王育（1593年—1680年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71110） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育（CBDB 71110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71110&o=json)
