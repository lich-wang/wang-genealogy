---
schema: wang-person/v1
id: p_b7vaCncSABpqZYD3ATNjPR
status: active
merged_into: null
display_name: 王金堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yU9JyZkxc5KwgDpbqmEDbn
        subject_person_id: p_b7vaCncSABpqZYD3ATNjPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6QdPTP9vKd3a64zfNQqYz
          claim_id: c_yU9JyZkxc5KwgDpbqmEDbn
          source_id: s_X4UBfPJKMvqugHz4sNbv2z
          stance: supports
          locator: CBDB:640511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640511）
          source: &a1
            id: s_X4UBfPJKMvqugHz4sNbv2z
            source_type: api_record
            title: 中国历代人物传记资料库：王金堂（CBDB 640511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640511&o=json
            external_identifier: CBDB:640511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ne2971hdNC4SKnpboZAsVM
        subject_person_id: p_b7vaCncSABpqZYD3ATNjPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金堂，清人物。籍贯高陽，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L1VRCTu9ZcQQ0Jf_rV_V5B
          claim_id: c_ne2971hdNC4SKnpboZAsVM
          source_id: s_X4UBfPJKMvqugHz4sNbv2z
          stance: supports
          locator: CBDB:640511
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

# 王金堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金堂 | accepted |
| bio.summary | 王金堂，清人物。籍贯高陽，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金堂（CBDB 640511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640511&o=json)
