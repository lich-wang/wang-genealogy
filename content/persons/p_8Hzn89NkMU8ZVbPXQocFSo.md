---
schema: wang-person/v1
id: p_8Hzn89NkMU8ZVbPXQocFSo
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZ739gNWhRGuwnZq1B6Lms
        subject_person_id: p_8Hzn89NkMU8ZVbPXQocFSo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXBNAcXaz3NHEseRRtcuqy
          claim_id: c_aZ739gNWhRGuwnZq1B6Lms
          source_id: s_FHMC84Vpf2dcRdxCskHT6j
          stance: supports
          locator: CBDB:92101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92101）
          source: &a1
            id: s_FHMC84Vpf2dcRdxCskHT6j
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 92101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92101&o=json
            external_identifier: CBDB:92101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ceK5b7Fb8cKR22Zuu8zD1y
        subject_person_id: p_8Hzn89NkMU8ZVbPXQocFSo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aTl3yHJ5qqN7SwH4C-dVs5
          claim_id: c_ceK5b7Fb8cKR22Zuu8zD1y
          source_id: s_FHMC84Vpf2dcRdxCskHT6j
          stance: supports
          locator: CBDB:92101
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 92101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 92101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92101&o=json)
