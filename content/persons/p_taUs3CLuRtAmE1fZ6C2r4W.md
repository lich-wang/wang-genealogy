---
schema: wang-person/v1
id: p_taUs3CLuRtAmE1fZ6C2r4W
status: active
merged_into: null
display_name: 王達才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28d9W1TzxaU5WBXKfRyf36
        subject_person_id: p_taUs3CLuRtAmE1fZ6C2r4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZALm2KpbJzJFtNFWUbtT9
          claim_id: c_28d9W1TzxaU5WBXKfRyf36
          source_id: s_QAmjfeW2ss9nvRHQui3KSB
          stance: supports
          locator: CBDB:640468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640468）
          source: &a1
            id: s_QAmjfeW2ss9nvRHQui3KSB
            source_type: api_record
            title: 中国历代人物传记资料库：王達才（CBDB 640468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640468&o=json
            external_identifier: CBDB:640468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCjV5n9SqDqDy8JSbBRCF2
        subject_person_id: p_taUs3CLuRtAmE1fZ6C2r4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達才，清人物。籍贯鄱陽，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 640468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YgDuwo1H-cpkRQ4m5x2DHQ
          claim_id: c_SCjV5n9SqDqDy8JSbBRCF2
          source_id: s_QAmjfeW2ss9nvRHQui3KSB
          stance: supports
          locator: CBDB:640468
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

# 王達才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達才 | accepted |
| bio.summary | 王達才，清人物。籍贯鄱陽，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 640468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達才（CBDB 640468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640468&o=json)
