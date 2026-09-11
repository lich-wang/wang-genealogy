---
schema: wang-person/v1
id: p_jCntBpbiQAcECqkmtrR5qe
status: active
merged_into: null
display_name: 王汝明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Ey3GJUeXmvhorQ3rittak
        subject_person_id: p_jCntBpbiQAcECqkmtrR5qe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6T4Zt3E4vjiafsyBQYhaz
          claim_id: c_3Ey3GJUeXmvhorQ3rittak
          source_id: s_d6kj3fGfPTysdx8P9xHQoq
          stance: supports
          locator: CBDB:1832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1832）
          source: &a1
            id: s_d6kj3fGfPTysdx8P9xHQoq
            source_type: api_record
            title: 中国历代人物传记资料库：王汝明（CBDB 1832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1832&o=json
            external_identifier: CBDB:1832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nGrMxg2MD295Co36mxLLZH
        subject_person_id: p_jCntBpbiQAcECqkmtrR5qe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝明，宋人物。籍贯太和，入仕鄉貢舉人，曾任朝奉郎、轉運司判官。（中国历代人物传记资料库 CBDB 1832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WGnS990qDwcdVKuMLflkF-
          claim_id: c_nGrMxg2MD295Co36mxLLZH
          source_id: s_d6kj3fGfPTysdx8P9xHQoq
          stance: supports
          locator: CBDB:1832
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

# 王汝明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝明 | accepted |
| bio.summary | 王汝明，宋人物。籍贯太和，入仕鄉貢舉人，曾任朝奉郎、轉運司判官。（中国历代人物传记资料库 CBDB 1832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝明（CBDB 1832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1832&o=json)
