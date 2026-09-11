---
schema: wang-person/v1
id: p_Rd1HVTJaDR5nTuR82vpbGT
status: active
merged_into: null
display_name: 王涓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vNEoLgrSaEZF6Fah8LmDEr
        subject_person_id: p_Rd1HVTJaDR5nTuR82vpbGT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vm42yWohSQJuXbPjWoRyoZ
          claim_id: c_vNEoLgrSaEZF6Fah8LmDEr
          source_id: s_G2KnHdoc6MsB9E3fcdCuEf
          stance: supports
          locator: CBDB:134195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134195）
          source: &a1
            id: s_G2KnHdoc6MsB9E3fcdCuEf
            source_type: api_record
            title: 中国历代人物传记资料库：王涓（CBDB 134195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134195&o=json
            external_identifier: CBDB:134195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TGCsFFBBoNHieqHwMgC4ue
        subject_person_id: p_Rd1HVTJaDR5nTuR82vpbGT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涓，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8gKPlldmhtk3ItDipeKb-q
          claim_id: c_TGCsFFBBoNHieqHwMgC4ue
          source_id: s_G2KnHdoc6MsB9E3fcdCuEf
          stance: supports
          locator: CBDB:134195
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
  ancestors:
    - claim:
        id: c_lS8Cy3l1rAL1co4cdVW4pt
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rd1HVTJaDR5nTuR82vpbGT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRjYMejI9Pvp5kMvWg0Vrg
          claim_id: c_lS8Cy3l1rAL1co4cdVW4pt
          source_id: s_G2KnHdoc6MsB9E3fcdCuEf
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王涓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涓 | accepted |
| bio.summary | 王涓，明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 134195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王涓（CBDB 134195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134195&o=json)
