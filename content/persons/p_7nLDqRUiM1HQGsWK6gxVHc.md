---
schema: wang-person/v1
id: p_7nLDqRUiM1HQGsWK6gxVHc
status: active
merged_into: null
display_name: 王瑞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PpgzxMGuyQWjwxHKcUeZo7
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UHzeAnHA4yxPNHY2URoW69
          claim_id: c_PpgzxMGuyQWjwxHKcUeZo7
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: CBDB:67734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67734）
          source: &a1
            id: s_gLTowmCEC7vGFGymkruUKP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 67734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json
            external_identifier: CBDB:67734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TVkjFBScbRKrutqrtx717U
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞，明人物。明清進士進士，籍贯望江，入仕進士，曾任參議、吏科都給事中、吏科給事中。（中国历代人物传记资料库 CBDB 67734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MIwAW_05IqhW6-TwQy8uv8
          claim_id: c_TVkjFBScbRKrutqrtx717U
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: CBDB:67734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U0Giy7KSApj3fylG9herOo
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7ZVQ89WfPAjwWj75-y5p8
          claim_id: c_U0Giy7KSApj3fylG9herOo
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ofjHAwCTN5GSDtjc-zlKcB
        subject_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WNALSz5VTnZfNEGwjyuoa9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvqoNG-d8L2po2VcNztL2s
          claim_id: c_ofjHAwCTN5GSDtjc-zlKcB
          source_id: s_MWI2QG2H06LkCVnQVhRUBy
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MWI2QG2H06LkCVnQVhRUBy
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王瑞妻)（CBDB 242766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242766&o=json
            external_identifier: CBDB:242766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WNALSz5VTnZfNEGwjyuoa9
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_0cQBpfe8170N0AcClH9RL4
        subject_person_id: p_8hh6AFzwKDsJFPwN8t9CVF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AskLU-G30oZk6ONQVyatxR
          claim_id: c_0cQBpfe8170N0AcClH9RL4
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8hh6AFzwKDsJFPwN8t9CVF
        status: active
        display_name: 王華卿
        merged_into_person_id: null
    - claim:
        id: c_EGeg2z6DWBSxPnQYwwVDKk
        subject_person_id: p_bwmZjjY7o3MxQTBoZTELxQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6K_YR0xC1HKJI_-x8Eupd
          claim_id: c_EGeg2z6DWBSxPnQYwwVDKk
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bwmZjjY7o3MxQTBoZTELxQ
        status: active
        display_name: 王偉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | 王瑞，明人物。明清進士進士，籍贯望江，入仕進士，曾任參議、吏科都給事中、吏科給事中。（中国历代人物传记资料库 CBDB 67734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| spouses | p_WNALSz5VTnZfNEGwjyuoa9 | 吳氏 | accepted |
| ancestors | p_8hh6AFzwKDsJFPwN8t9CVF | 王華卿 | accepted |
| ancestors | p_bwmZjjY7o3MxQTBoZTELxQ | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 67734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json)
- [中国历代人物传记资料库：吳氏(王瑞妻)（CBDB 242766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242766&o=json)
