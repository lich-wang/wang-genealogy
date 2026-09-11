---
schema: wang-person/v1
id: p_jdv9tSfUGc9LYkx6qchNqp
status: active
merged_into: null
display_name: 王寶瑔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbwBDUdiAQeX75gJCy9siY
        subject_person_id: p_jdv9tSfUGc9LYkx6qchNqp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶瑔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X6QaD2CpsnRXCJTrAeRaFb
          claim_id: c_cbwBDUdiAQeX75gJCy9siY
          source_id: s_53U7sGPniV9X2XRnAR3r66
          stance: supports
          locator: CBDB:695075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695075）
          source: &a1
            id: s_53U7sGPniV9X2XRnAR3r66
            source_type: api_record
            title: 中国历代人物传记资料库：王寶瑔（CBDB 695075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695075&o=json
            external_identifier: CBDB:695075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vtvRhdjptGJJK47kQmeXFX
        subject_person_id: p_jdv9tSfUGc9LYkx6qchNqp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶瑔，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695075）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BWTDbdyJX77N-gpfKNIxZA
          claim_id: c_vtvRhdjptGJJK47kQmeXFX
          source_id: s_53U7sGPniV9X2XRnAR3r66
          stance: supports
          locator: CBDB:695075
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

# 王寶瑔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶瑔 | accepted |
| bio.summary | 王寶瑔，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶瑔（CBDB 695075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695075&o=json)
