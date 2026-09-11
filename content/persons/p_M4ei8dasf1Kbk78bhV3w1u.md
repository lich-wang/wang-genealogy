---
schema: wang-person/v1
id: p_M4ei8dasf1Kbk78bhV3w1u
status: active
merged_into: null
display_name: 王春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kfoe4ixZnkxNfftQJR2sQ9
        subject_person_id: p_M4ei8dasf1Kbk78bhV3w1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5zvYKewVy3YP5G1MJAZbzn
          claim_id: c_kfoe4ixZnkxNfftQJR2sQ9
          source_id: s_Cegz9FCea9RDPWYKSKk824
          stance: supports
          locator: CBDB:460510
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460510）
          source: &a1
            id: s_Cegz9FCea9RDPWYKSKk824
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 460510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460510&o=json
            external_identifier: CBDB:460510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Cnfy397oRpwSvx1AZiq7M
        subject_person_id: p_M4ei8dasf1Kbk78bhV3w1u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春，清人物。曾任千總。（中国历代人物传记资料库 CBDB 460510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jhngzBLh2RcTUX_XDHAkVP
          claim_id: c_4Cnfy397oRpwSvx1AZiq7M
          source_id: s_Cegz9FCea9RDPWYKSKk824
          stance: supports
          locator: CBDB:460510
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

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| bio.summary | 王春，清人物。曾任千總。（中国历代人物传记资料库 CBDB 460510） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 460510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460510&o=json)
