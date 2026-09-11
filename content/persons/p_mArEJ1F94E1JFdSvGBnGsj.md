---
schema: wang-person/v1
id: p_mArEJ1F94E1JFdSvGBnGsj
status: active
merged_into: null
display_name: 王禹甸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E9G3FqF8vCHp4os7G89Xek
        subject_person_id: p_mArEJ1F94E1JFdSvGBnGsj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹甸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oyrQNYHKZAZhwmE5ZMF3aN
          claim_id: c_E9G3FqF8vCHp4os7G89Xek
          source_id: s_pDHZYkxZccLzNxZ1BS9kXC
          stance: supports
          locator: CBDB:639630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639630）
          source: &a1
            id: s_pDHZYkxZccLzNxZ1BS9kXC
            source_type: api_record
            title: 中国历代人物传记资料库：王禹甸（CBDB 639630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639630&o=json
            external_identifier: CBDB:639630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iY3BnB4HN6sF8rY4kmehMo
        subject_person_id: p_mArEJ1F94E1JFdSvGBnGsj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹甸，清人物。籍贯山陰，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 639630）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dkRZ1cyI2_Us1xbOx4FDEQ
          claim_id: c_iY3BnB4HN6sF8rY4kmehMo
          source_id: s_pDHZYkxZccLzNxZ1BS9kXC
          stance: supports
          locator: CBDB:639630
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

# 王禹甸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹甸 | accepted |
| bio.summary | 王禹甸，清人物。籍贯山陰，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 639630） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹甸（CBDB 639630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639630&o=json)
