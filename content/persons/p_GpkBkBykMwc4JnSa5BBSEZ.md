---
schema: wang-person/v1
id: p_GpkBkBykMwc4JnSa5BBSEZ
status: active
merged_into: null
display_name: 王畿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P9j3YSQWK2z6o1Yn44Xhxc
        subject_person_id: p_GpkBkBykMwc4JnSa5BBSEZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bTtMQAdg3WSFoLBJY2jBBe
          claim_id: c_P9j3YSQWK2z6o1Yn44Xhxc
          source_id: s_U1szgBfGvm9LsLS7yPdASE
          stance: supports
          locator: CBDB:480566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480566）
          source: &a1
            id: s_U1szgBfGvm9LsLS7yPdASE
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 480566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480566&o=json
            external_identifier: CBDB:480566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Uc1yfe5r1inHNCfLC1oLD
        subject_person_id: p_GpkBkBykMwc4JnSa5BBSEZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 480566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ZzrL_YS5Nj5X8BQzTTW0q
          claim_id: c_8Uc1yfe5r1inHNCfLC1oLD
          source_id: s_U1szgBfGvm9LsLS7yPdASE
          stance: supports
          locator: CBDB:480566
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

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| bio.summary | 王畿，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 480566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 480566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480566&o=json)
