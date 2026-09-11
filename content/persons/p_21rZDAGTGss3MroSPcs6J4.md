---
schema: wang-person/v1
id: p_21rZDAGTGss3MroSPcs6J4
status: active
merged_into: null
display_name: 王濟川
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R4yzQENuSbSn6hqbFNgsGw
        subject_person_id: p_21rZDAGTGss3MroSPcs6J4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟川
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TfwAARAPib6Pz5Wr735Dju
          claim_id: c_R4yzQENuSbSn6hqbFNgsGw
          source_id: s_CsUxCJiTpdoggFNGvZLffu
          stance: supports
          locator: CBDB:386541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386541）
          source: &a1
            id: s_CsUxCJiTpdoggFNGvZLffu
            source_type: api_record
            title: 中国历代人物传记资料库：王濟川（CBDB 386541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386541&o=json
            external_identifier: CBDB:386541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZPVCWby1uf5wM44Bnbb5N
        subject_person_id: p_21rZDAGTGss3MroSPcs6J4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_58mpu59gzS91HoDet5sFsZ
          claim_id: c_8ZPVCWby1uf5wM44Bnbb5N
          source_id: s_CsUxCJiTpdoggFNGvZLffu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
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
          source:
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
      object_person:
        id: p_YCWBwzg6Bjo6HKt2MGykZP
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王濟川

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟川 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YCWBwzg6Bjo6HKt2MGykZP | 許氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟川（CBDB 386541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386541&o=json)
- [中国历代人物传记资料库：許氏(許熹女)（CBDB 386540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386540&o=json)
