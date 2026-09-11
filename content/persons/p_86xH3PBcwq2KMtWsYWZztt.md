---
schema: wang-person/v1
id: p_86xH3PBcwq2KMtWsYWZztt
status: active
merged_into: null
display_name: 王仲蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4MAJqTaTvkfBDgrb588ffJ
        subject_person_id: p_86xH3PBcwq2KMtWsYWZztt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47WUPgSQZPN66K7JYgjod9
          claim_id: c_4MAJqTaTvkfBDgrb588ffJ
          source_id: s_6Ngsg3fuG2ZmG9j7GnZD2T
          stance: supports
          locator: CBDB:456145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456145）
          source: &a1
            id: s_6Ngsg3fuG2ZmG9j7GnZD2T
            source_type: api_record
            title: 中国历代人物传记资料库：王仲蘭（CBDB 456145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456145&o=json
            external_identifier: CBDB:456145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wiR163ziKFMrXGsqpCCcpD
        subject_person_id: p_86xH3PBcwq2KMtWsYWZztt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲蘭，清人物。曾任管河道。（中国历代人物传记资料库 CBDB 456145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JGfJDcR0zogGjet7IUi9qr
          claim_id: c_wiR163ziKFMrXGsqpCCcpD
          source_id: s_6Ngsg3fuG2ZmG9j7GnZD2T
          stance: supports
          locator: CBDB:456145
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

# 王仲蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲蘭 | accepted |
| bio.summary | 王仲蘭，清人物。曾任管河道。（中国历代人物传记资料库 CBDB 456145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲蘭（CBDB 456145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456145&o=json)
