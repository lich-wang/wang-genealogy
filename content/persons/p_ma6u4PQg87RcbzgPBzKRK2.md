---
schema: wang-person/v1
id: p_ma6u4PQg87RcbzgPBzKRK2
status: active
merged_into: null
display_name: 王逢源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AomPmdKk2QNv29D5SXssKF
        subject_person_id: p_ma6u4PQg87RcbzgPBzKRK2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pTKEsZW8LjHLzneXTAPxWj
          claim_id: c_AomPmdKk2QNv29D5SXssKF
          source_id: s_huK1iMpPxQuNdtFL7JyC94
          stance: supports
          locator: CBDB:640412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640412）
          source: &a1
            id: s_huK1iMpPxQuNdtFL7JyC94
            source_type: api_record
            title: 中国历代人物传记资料库：王逢源（CBDB 640412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640412&o=json
            external_identifier: CBDB:640412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8FXQpXv9M9Vqbt9mDqd5xK
        subject_person_id: p_ma6u4PQg87RcbzgPBzKRK2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王逢源，清人物。籍贯新淦，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640412）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2iQ6j7ft5FoKxkh7Ow81aq
          claim_id: c_8FXQpXv9M9Vqbt9mDqd5xK
          source_id: s_huK1iMpPxQuNdtFL7JyC94
          stance: supports
          locator: CBDB:640412
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

# 王逢源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢源 | accepted |
| bio.summary | 王逢源，清人物。籍贯新淦，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢源（CBDB 640412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640412&o=json)
