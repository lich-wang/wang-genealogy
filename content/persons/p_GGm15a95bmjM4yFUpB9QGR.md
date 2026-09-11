---
schema: wang-person/v1
id: p_GGm15a95bmjM4yFUpB9QGR
status: active
merged_into: null
display_name: 王儼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AD2iEVn2R1GKFDQQCX4r8G
        subject_person_id: p_GGm15a95bmjM4yFUpB9QGR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xdLVM68YUKdcmoEJnoSJK6
          claim_id: c_AD2iEVn2R1GKFDQQCX4r8G
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: CBDB:338703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338703）
          source: &a1
            id: s_ZFRacVdsrHF9g9mvSJ3aS2
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 338703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json
            external_identifier: CBDB:338703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oz939W1X3ZV2qMC4UzPLVz
        subject_person_id: p_GGm15a95bmjM4yFUpB9QGR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1434年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PoSgRjHxd469Pws87FVv2h
          claim_id: c_oz939W1X3ZV2qMC4UzPLVz
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dvQ1pHjwuxQvjt6JisL5q1
        subject_person_id: p_GGm15a95bmjM4yFUpB9QGR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Mgoj2d5C93zcR4cug38rc
          claim_id: c_dvQ1pHjwuxQvjt6JisL5q1
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZBMUbXPkym1TOoP7XCNQU3
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJkhVXSodFTai1Geem5it8
          claim_id: c_ZBMUbXPkym1TOoP7XCNQU3
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P6jrnxynY7Dudu6LBvAAqQ
        status: active
        display_name: 王璟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Qz5gCpC5s71qt-DJKZ1DCJ
        subject_person_id: p_Bp3KS4gPG3CmtexRC9QaU9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ug_5BcJQoXWelSqOBqASsE
          claim_id: c_Qz5gCpC5s71qt-DJKZ1DCJ
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Bp3KS4gPG3CmtexRC9QaU9
        status: active
        display_name: 王華一
        merged_into_person_id: null
    - claim:
        id: c_HM4viCxUP248uvCVFrsk2w
        subject_person_id: p_DTYKLNhucep7enqQCPhSbQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qhQ3nTBXlKg6-6ywltqkhx
          claim_id: c_HM4viCxUP248uvCVFrsk2w
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DTYKLNhucep7enqQCPhSbQ
        status: active
        display_name: 王安武
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| birth.date | 1434年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P6jrnxynY7Dudu6LBvAAqQ | 王璟 | accepted |
| ancestors | p_Bp3KS4gPG3CmtexRC9QaU9 | 王華一 | accepted |
| ancestors | p_DTYKLNhucep7enqQCPhSbQ | 王安武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 338703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json)
