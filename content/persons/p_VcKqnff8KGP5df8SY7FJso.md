---
schema: wang-person/v1
id: p_VcKqnff8KGP5df8SY7FJso
status: active
merged_into: null
display_name: 王德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X2rDRZexXLhaEaFaCk1CrE
        subject_person_id: p_VcKqnff8KGP5df8SY7FJso
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhPKJ3aQpvccyM9ghxgMmX
          claim_id: c_X2rDRZexXLhaEaFaCk1CrE
          source_id: s_E4pqGE5tav9FC6BX5pUVQF
          stance: supports
          locator: CBDB:140306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140306）
          source: &a1
            id: s_E4pqGE5tav9FC6BX5pUVQF
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 140306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140306&o=json
            external_identifier: CBDB:140306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFiaGPdco3Sq3ayrVnKhRD
        subject_person_id: p_VcKqnff8KGP5df8SY7FJso
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-GyoeKR7rTySb2L3Wo3bZI
          claim_id: c_EFiaGPdco3Sq3ayrVnKhRD
          source_id: s_E4pqGE5tav9FC6BX5pUVQF
          stance: supports
          locator: CBDB:140306
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
  spouses:
    - claim:
        id: c_bADWp1Wm8lriOvA4STGWEV
        subject_person_id: p_VcKqnff8KGP5df8SY7FJso
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jSQoxKR3z78APeENPtC9EZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IcMCwkCgHywDBRs_rmrjTg
          claim_id: c_bADWp1Wm8lriOvA4STGWEV
          source_id: s_JRTXB_nte9QFTHrt9d60IB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 31：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JRTXB_nte9QFTHrt9d60IB
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王德妻)（CBDB 151178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151178&o=json
            external_identifier: CBDB:151178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jSQoxKR3z78APeENPtC9EZ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | 王德，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jSQoxKR3z78APeENPtC9EZ | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 140306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140306&o=json)
- [中国历代人物传记资料库：張氏(王德妻)（CBDB 151178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151178&o=json)
