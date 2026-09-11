---
schema: wang-person/v1
id: p_3nZezcqr6FTQBjU3rPZoDs
status: active
merged_into: null
display_name: 王錫馴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oGK12BtsvUChEL6VeQY8NV
        subject_person_id: p_3nZezcqr6FTQBjU3rPZoDs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫馴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAZXJgkpLXjhE45w8EXvES
          claim_id: c_oGK12BtsvUChEL6VeQY8NV
          source_id: s_3TDy2SKg2heykAsED9LQKs
          stance: supports
          locator: CBDB:640656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640656）
          source: &a1
            id: s_3TDy2SKg2heykAsED9LQKs
            source_type: api_record
            title: 中国历代人物传记资料库：王錫馴（CBDB 640656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640656&o=json
            external_identifier: CBDB:640656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1o1GnhQC4VrCvVdustc3Nx
        subject_person_id: p_3nZezcqr6FTQBjU3rPZoDs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫馴，清人物。籍贯浙江省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 640656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TTmTKMf08NYZI1dZBWFg8C
          claim_id: c_1o1GnhQC4VrCvVdustc3Nx
          source_id: s_3TDy2SKg2heykAsED9LQKs
          stance: supports
          locator: CBDB:640656
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

# 王錫馴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫馴 | accepted |
| bio.summary | 王錫馴，清人物。籍贯浙江省，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 640656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫馴（CBDB 640656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640656&o=json)
