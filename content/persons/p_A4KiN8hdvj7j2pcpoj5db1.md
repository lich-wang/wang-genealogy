---
schema: wang-person/v1
id: p_A4KiN8hdvj7j2pcpoj5db1
status: active
merged_into: null
display_name: 王仲謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFvqbVHQ3FKcKgg4q7wSc5
        subject_person_id: p_A4KiN8hdvj7j2pcpoj5db1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HEtYhdhYZ3SipLWRLC8Ne9
          claim_id: c_zFvqbVHQ3FKcKgg4q7wSc5
          source_id: s_TwpNremnM7kPijyan3TNuC
          stance: supports
          locator: CBDB:101148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101148）
          source: &a1
            id: s_TwpNremnM7kPijyan3TNuC
            source_type: api_record
            title: 中国历代人物传记资料库：王仲謙（CBDB 101148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101148&o=json
            external_identifier: CBDB:101148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4nBEVGvz7t92wvzA5YPi2V
        subject_person_id: p_A4KiN8hdvj7j2pcpoj5db1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲謙，元人物。曾任路經歷。（中国历代人物传记资料库 CBDB 101148）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vLkQMSRlnfSrZD1WMaYqp-
          claim_id: c_4nBEVGvz7t92wvzA5YPi2V
          source_id: s_TwpNremnM7kPijyan3TNuC
          stance: supports
          locator: CBDB:101148
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

# 王仲謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲謙 | accepted |
| bio.summary | 王仲謙，元人物。曾任路經歷。（中国历代人物传记资料库 CBDB 101148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲謙（CBDB 101148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101148&o=json)
