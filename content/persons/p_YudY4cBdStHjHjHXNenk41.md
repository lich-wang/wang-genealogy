---
schema: wang-person/v1
id: p_YudY4cBdStHjHjHXNenk41
status: active
merged_into: null
display_name: 王茂華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xx1oafAL4dzJ6RfrSP4efD
        subject_person_id: p_YudY4cBdStHjHjHXNenk41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9kMTK7YvBejiEF5Lv1Unz
          claim_id: c_Xx1oafAL4dzJ6RfrSP4efD
          source_id: s_5doWG8DkbBo5wKdQcsoNnz
          stance: supports
          locator: CBDB:640087
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640087）
          source: &a1
            id: s_5doWG8DkbBo5wKdQcsoNnz
            source_type: api_record
            title: 中国历代人物传记资料库：王茂華（CBDB 640087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640087&o=json
            external_identifier: CBDB:640087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21UZAyQTTNEM6aqA99A3HG
        subject_person_id: p_YudY4cBdStHjHjHXNenk41
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂華，清人物。籍贯鳳凰直隸廳，曾任復設訓導。（中国历代人物传记资料库 CBDB 640087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3PNPHiERWPK_RosX6UM0pZ
          claim_id: c_21UZAyQTTNEM6aqA99A3HG
          source_id: s_5doWG8DkbBo5wKdQcsoNnz
          stance: supports
          locator: CBDB:640087
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

# 王茂華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂華 | accepted |
| bio.summary | 王茂華，清人物。籍贯鳳凰直隸廳，曾任復設訓導。（中国历代人物传记资料库 CBDB 640087） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂華（CBDB 640087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640087&o=json)
