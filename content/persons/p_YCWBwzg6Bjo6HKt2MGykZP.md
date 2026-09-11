---
schema: wang-person/v1
id: p_YCWBwzg6Bjo6HKt2MGykZP
status: active
merged_into: null
display_name: 許氏
revision: 1
cbdb_id: 386540
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PH-wULm8Rg8kT7nBLdmn5d
        subject_person_id: p_YCWBwzg6Bjo6HKt2MGykZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 許氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPPVEg0N_wbn2FOHJmZTXm
          claim_id: c_PH-wULm8Rg8kT7nBLdmn5d
          source_id: s_3zlf6QZJKFUmYVva2BdjA-
          stance: supports
          locator: CBDB:386540
          quotation: null
          interpretation_note: CBDB 明确记录的王濟川配偶
          source: &a1
            id: s_3zlf6QZJKFUmYVva2BdjA-
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(許熹女)（CBDB 386540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386540&o=json
            external_identifier: CBDB:386540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-dM5hSrPYoFNpMt2H8Nti6
        subject_person_id: p_21rZDAGTGss3MroSPcs6J4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YCWBwzg6Bjo6HKt2MGykZP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ab9C2FSfjUUzJgQWBMyYsC
          claim_id: c_-dM5hSrPYoFNpMt2H8Nti6
          source_id: s_3zlf6QZJKFUmYVva2BdjA-
          stance: supports
          locator: CBDB 双向互证（妻子 許氏(許熹女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_21rZDAGTGss3MroSPcs6J4
        status: active
        display_name: 王濟川
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 許氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 許氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_21rZDAGTGss3MroSPcs6J4 | 王濟川 | accepted |

## 外部来源

- [中国历代人物传记资料库：許氏(許熹女)（CBDB 386540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386540&o=json)
