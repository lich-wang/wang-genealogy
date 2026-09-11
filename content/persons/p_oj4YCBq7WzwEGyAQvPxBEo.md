---
schema: wang-person/v1
id: p_oj4YCBq7WzwEGyAQvPxBEo
status: active
merged_into: null
display_name: 王履貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x57QLXjE5u3AGU9MS3tgk9
        subject_person_id: p_oj4YCBq7WzwEGyAQvPxBEo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bzRTrgcd9P1ZjQgNLKFPcr
          claim_id: c_x57QLXjE5u3AGU9MS3tgk9
          source_id: s_wq41zj6rPYR8v1jsp9gRHt
          stance: supports
          locator: CBDB:152414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152414）
          source: &a1
            id: s_wq41zj6rPYR8v1jsp9gRHt
            source_type: api_record
            title: 中国历代人物传记资料库：王履貞（CBDB 152414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152414&o=json
            external_identifier: CBDB:152414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TTpNRQLmNvG1V9hJ6bE9jL
        subject_person_id: p_oj4YCBq7WzwEGyAQvPxBEo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履貞，唐人物。籍贯晉陽，身份为詩人。（中国历代人物传记资料库 CBDB 152414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pyIIIkRmRP4OM1AH0ByBC_
          claim_id: c_TTpNRQLmNvG1V9hJ6bE9jL
          source_id: s_wq41zj6rPYR8v1jsp9gRHt
          stance: supports
          locator: CBDB:152414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_szhVYFX2rm1zqmQ2FrRHvF
        subject_person_id: p_oj4YCBq7WzwEGyAQvPxBEo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cxu8PpwuwTTop3iMgwS0Nt
          claim_id: c_szhVYFX2rm1zqmQ2FrRHvF
          source_id: s_r7gxJVGiWM2hWjQZmg4VuE
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r7gxJVGiWM2hWjQZmg4VuE
            source_type: api_record
            title: 中国历代人物传记资料库：王希俊（CBDB 140519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140519&o=json
            external_identifier: CBDB:140519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MPKDCVoTw3ezXKDrH5XZgB
        status: active
        display_name: 王希俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履貞 | accepted |
| bio.summary | 王履貞，唐人物。籍贯晉陽，身份为詩人。（中国历代人物传记资料库 CBDB 152414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MPKDCVoTw3ezXKDrH5XZgB | 王希俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履貞（CBDB 152414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152414&o=json)
- [中国历代人物传记资料库：王希俊（CBDB 140519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140519&o=json)
