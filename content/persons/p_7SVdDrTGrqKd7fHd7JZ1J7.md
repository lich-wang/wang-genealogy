---
schema: wang-person/v1
id: p_7SVdDrTGrqKd7fHd7JZ1J7
status: active
merged_into: null
display_name: 王璟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ayNpni9BYbg4WnRTDDAc6A
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PCME93dTFMxrDY85C1usbq
          claim_id: c_ayNpni9BYbg4WnRTDDAc6A
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: CBDB:67991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67991）
          source: &a1
            id: s_kN8iEAqCCxG1zVN98HVyBr
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 67991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json
            external_identifier: CBDB:67991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7btMvo57tBRsNDJf53rs1f
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
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
        - id: cs_4unSxBipQ1wKvBKf2MKZXG
          claim_id: c_7btMvo57tBRsNDJf53rs1f
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
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
        id: c_tpqJuEvA7cMoI8c08O-pIF
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCICaIweCvPwU2akGMr_U4
          claim_id: c_tpqJuEvA7cMoI8c08O-pIF
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Pmst9sDnARAD4KrAUMx2Lv
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8yvVhCaS30zwFgIveccIXN
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nJ8vwCAg1frWi1RJEuY3k3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNi8cfMQHBXc9nDj2Jegdu
          claim_id: c_8yvVhCaS30zwFgIveccIXN
          source_id: s_lTlOdCm8qGhfQpbB93aYCM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lTlOdCm8qGhfQpbB93aYCM
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王璟妻)（CBDB 262531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262531&o=json
            external_identifier: CBDB:262531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nJ8vwCAg1frWi1RJEuY3k3
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_b0BmxU4-fqVibQDSMf82SR
        subject_person_id: p_ynWdfZUbfQVgjARghmAXHi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCgdp42VYsf7ybcZj9-1xR
          claim_id: c_b0BmxU4-fqVibQDSMf82SR
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ynWdfZUbfQVgjARghmAXHi
        status: active
        display_name: 王山集
        merged_into_person_id: null
    - claim:
        id: c_14AsN33yLvBglQGDtD9Aqt
        subject_person_id: p_g2dCFSh3L1jfkgQ2AnHkcm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cyGiMCXOI0m5JHxvwOS2d
          claim_id: c_14AsN33yLvBglQGDtD9Aqt
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g2dCFSh3L1jfkgQ2AnHkcm
        status: active
        display_name: 王政
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pmst9sDnARAD4KrAUMx2Lv | 王英 | accepted |
| spouses | p_nJ8vwCAg1frWi1RJEuY3k3 | 朱氏 | accepted |
| ancestors | p_ynWdfZUbfQVgjARghmAXHi | 王山集 | accepted |
| ancestors | p_g2dCFSh3L1jfkgQ2AnHkcm | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 67991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json)
- [中国历代人物传记资料库：朱氏(王璟妻)（CBDB 262531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262531&o=json)
