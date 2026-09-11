---
schema: wang-person/v1
id: p_5phQJvDkL71GzR4qfsP5bQ
status: active
merged_into: null
display_name: 王禹同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MewM3P2C3hs9gAXRaZXvc9
        subject_person_id: p_5phQJvDkL71GzR4qfsP5bQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1S11YXUsQ7sc3DQA9r3vHB
          claim_id: c_MewM3P2C3hs9gAXRaZXvc9
          source_id: s_4DBmhqDCgQmEMeaurEAEHV
          stance: supports
          locator: CBDB:540873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540873）
          source: &a1
            id: s_4DBmhqDCgQmEMeaurEAEHV
            source_type: api_record
            title: 中国历代人物传记资料库：王禹同（CBDB 540873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540873&o=json
            external_identifier: CBDB:540873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84nwqMM28H58gUBgFKfaRX
        subject_person_id: p_5phQJvDkL71GzR4qfsP5bQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹同，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 540873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1qS8TPM2M3F5NNV-fGpnP4
          claim_id: c_84nwqMM28H58gUBgFKfaRX
          source_id: s_4DBmhqDCgQmEMeaurEAEHV
          stance: supports
          locator: CBDB:540873
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

# 王禹同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹同 | accepted |
| bio.summary | 王禹同，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 540873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹同（CBDB 540873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540873&o=json)
