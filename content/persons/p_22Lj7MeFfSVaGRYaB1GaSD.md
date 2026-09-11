---
schema: wang-person/v1
id: p_22Lj7MeFfSVaGRYaB1GaSD
status: active
merged_into: null
display_name: 王湾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vvmXEguRzNndNXaPLsf1Ac
        subject_person_id: p_22Lj7MeFfSVaGRYaB1GaSD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibnwP62D4cGMKV5su8FE1j
          claim_id: c_vvmXEguRzNndNXaPLsf1Ac
          source_id: s_LQEfhffiR87dLviguS7R7i
          stance: supports
          locator: CBDB:92096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92096）
          source: &a1
            id: s_LQEfhffiR87dLviguS7R7i
            source_type: api_record
            title: 中国历代人物传记资料库：王湾（CBDB 92096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92096&o=json
            external_identifier: CBDB:92096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkMHDGfMtX4grBQhfZxVtr
        subject_person_id: p_22Lj7MeFfSVaGRYaB1GaSD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湾，唐人物。籍贯洛陽，身份为工於文，入仕進士，曾任場官、縣尉、縣主簿。（中国历代人物传记资料库 CBDB 92096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K34HGOLcPKlSR1hqbQ24P6
          claim_id: c_EkMHDGfMtX4grBQhfZxVtr
          source_id: s_LQEfhffiR87dLviguS7R7i
          stance: supports
          locator: CBDB:92096
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

# 王湾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湾 | accepted |
| bio.summary | 王湾，唐人物。籍贯洛陽，身份为工於文，入仕進士，曾任場官、縣尉、縣主簿。（中国历代人物传记资料库 CBDB 92096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湾（CBDB 92096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92096&o=json)
