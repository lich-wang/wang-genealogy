---
schema: wang-person/v1
id: p_2XFPyABTNE4mi3FT6JP2At
status: active
merged_into: null
display_name: 王傳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xbA669Ca6MxQLdo7FC7dVh
        subject_person_id: p_2XFPyABTNE4mi3FT6JP2At
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r1WTqsJ6x21Teev26o5F5N
          claim_id: c_xbA669Ca6MxQLdo7FC7dVh
          source_id: s_56xdgbvwdHvcGrr9EiGaGx
          stance: supports
          locator: CBDB:91997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91997）
          source: &a1
            id: s_56xdgbvwdHvcGrr9EiGaGx
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 91997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91997&o=json
            external_identifier: CBDB:91997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vYKrfBZJJo1RjFzLNCfcrC
        subject_person_id: p_2XFPyABTNE4mi3FT6JP2At
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳，唐人物。身份为詩人，入仕進士，曾任觀察判官、監察御史銜。（中国历代人物传记资料库 CBDB 91997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fOVbLvq4AS5zUebRX61ozI
          claim_id: c_vYKrfBZJJo1RjFzLNCfcrC
          source_id: s_56xdgbvwdHvcGrr9EiGaGx
          stance: supports
          locator: CBDB:91997
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

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| bio.summary | 王傳，唐人物。身份为詩人，入仕進士，曾任觀察判官、監察御史銜。（中国历代人物传记资料库 CBDB 91997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 91997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91997&o=json)
