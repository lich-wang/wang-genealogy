---
schema: wang-person/v1
id: p_FegHczEEZR8MjKeV9Bhujv
status: active
merged_into: null
display_name: 王沛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dtQ3bqjzVGem1RPbKPA3Zi
        subject_person_id: p_FegHczEEZR8MjKeV9Bhujv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_85GVL4pPEnMWbsP35Xt7Ns
          claim_id: c_dtQ3bqjzVGem1RPbKPA3Zi
          source_id: s_zqbxXP1Zn3Ng7o6z5SVybN
          stance: supports
          locator: CBDB:639052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639052）
          source: &a1
            id: s_zqbxXP1Zn3Ng7o6z5SVybN
            source_type: api_record
            title: 中国历代人物传记资料库：王沛（CBDB 639052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639052&o=json
            external_identifier: CBDB:639052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1AqPWWHoP6BRjazvvQCkPb
        subject_person_id: p_FegHczEEZR8MjKeV9Bhujv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛，清人物。籍贯深澤，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639052）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8YP1wwFJgDvqEwaOgdrtWp
          claim_id: c_1AqPWWHoP6BRjazvvQCkPb
          source_id: s_zqbxXP1Zn3Ng7o6z5SVybN
          stance: supports
          locator: CBDB:639052
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

# 王沛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛 | accepted |
| bio.summary | 王沛，清人物。籍贯深澤，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沛（CBDB 639052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639052&o=json)
