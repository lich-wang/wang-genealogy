---
schema: wang-person/v1
id: p_wxg7WvkkiXqMXTCFWJDnd3
status: active
merged_into: null
display_name: 王斑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xRFusm6EUZw95qzx73Lm6n
        subject_person_id: p_wxg7WvkkiXqMXTCFWJDnd3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PXRrqEu5TMkx2ZmTTCJmSN
          claim_id: c_xRFusm6EUZw95qzx73Lm6n
          source_id: s_g2biAa4V5AcN2gEJNhQ3A6
          stance: supports
          locator: CBDB:71205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71205）
          source: &a1
            id: s_g2biAa4V5AcN2gEJNhQ3A6
            source_type: api_record
            title: 中国历代人物传记资料库：王斑（CBDB 71205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71205&o=json
            external_identifier: CBDB:71205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ax6gL147EE4bwDg71rpRx7
        subject_person_id: p_wxg7WvkkiXqMXTCFWJDnd3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1778年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9DozZ9cgQgmeCQB4EQSbsn
          claim_id: c_Ax6gL147EE4bwDg71rpRx7
          source_id: s_g2biAa4V5AcN2gEJNhQ3A6
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
        id: c_ZSUgB26kb4Cv9H6ADNxvHc
        subject_person_id: p_wxg7WvkkiXqMXTCFWJDnd3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTYMxNqG3KZxd4f9EFNoLL
          claim_id: c_ZSUgB26kb4Cv9H6ADNxvHc
          source_id: s_g2biAa4V5AcN2gEJNhQ3A6
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
        id: c_fkhd1oVq7tV3C8Q5nF5BUF
        subject_person_id: p_wxg7WvkkiXqMXTCFWJDnd3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斑（1778年—1835年），清人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FbAa6jkIl43V0InS-KzSWy
          claim_id: c_fkhd1oVq7tV3C8Q5nF5BUF
          source_id: s_g2biAa4V5AcN2gEJNhQ3A6
          stance: supports
          locator: CBDB:71205
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

# 王斑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斑 | accepted |
| birth.date | 1778年 | accepted |
| death.date | 1835年 | accepted |
| bio.summary | 王斑（1778年—1835年），清人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71205） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斑（CBDB 71205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71205&o=json)
