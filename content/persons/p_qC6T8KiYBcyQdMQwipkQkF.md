---
schema: wang-person/v1
id: p_qC6T8KiYBcyQdMQwipkQkF
status: active
merged_into: null
display_name: 王懋官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fH9XqkkeR5MyPxSFQFEVDj
        subject_person_id: p_qC6T8KiYBcyQdMQwipkQkF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ip2T7hSVex5p1WKZSy1FPf
          claim_id: c_fH9XqkkeR5MyPxSFQFEVDj
          source_id: s_gHDkYdWb8CZQquBnnjL9CW
          stance: supports
          locator: CBDB:72214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72214）
          source: &a1
            id: s_gHDkYdWb8CZQquBnnjL9CW
            source_type: api_record
            title: 中国历代人物传记资料库：王懋官（CBDB 72214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72214&o=json
            external_identifier: CBDB:72214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_z3YPPTr6HRbpkA3qzg2J7k
        subject_person_id: p_qC6T8KiYBcyQdMQwipkQkF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UYwNxoPaHWJwHAiAXdnb7r
          claim_id: c_z3YPPTr6HRbpkA3qzg2J7k
          source_id: s_gHDkYdWb8CZQquBnnjL9CW
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
        id: c_6sJMDC2xbdzKZCKWrhSQ1t
        subject_person_id: p_qC6T8KiYBcyQdMQwipkQkF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋官（生于1620年），清人物。籍贯絳州直隸州。（中国历代人物传记资料库 CBDB 72214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IEtHbC_4kPWgT5BHIrpCKz
          claim_id: c_6sJMDC2xbdzKZCKWrhSQ1t
          source_id: s_gHDkYdWb8CZQquBnnjL9CW
          stance: supports
          locator: CBDB:72214
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

# 王懋官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋官 | accepted |
| birth.date | 1620年 | accepted |
| bio.summary | 王懋官（生于1620年），清人物。籍贯絳州直隸州。（中国历代人物传记资料库 CBDB 72214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋官（CBDB 72214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72214&o=json)
