---
schema: wang-person/v1
id: p_CbNek4JAS5hDtg3Feu9pPB
status: active
merged_into: null
display_name: 王溫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AWExsKCD5jGJqpUQgj7wRj
        subject_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KvE9D4RXj4vwrKrSSXRpHV
          claim_id: c_AWExsKCD5jGJqpUQgj7wRj
          source_id: s_3itLLULtgBSCa7TEVBMxNa
          stance: supports
          locator: CBDB:200081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200081）
          source: &a1
            id: s_3itLLULtgBSCa7TEVBMxNa
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 200081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200081&o=json
            external_identifier: CBDB:200081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1CsGabcX3MmgPtcNRG2r8e
        subject_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UQHf4e7SZo4n9w8ecN2YAU
          claim_id: c_1CsGabcX3MmgPtcNRG2r8e
          source_id: s_3itLLULtgBSCa7TEVBMxNa
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
        id: c_3MFv1HJtvSyDaWaRAMTczT
        subject_person_id: p_CbNek4JAS5hDtg3Feu9pPB
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
        - id: cs_cqNWHeERPzwBzHurUQ6CjU
          claim_id: c_3MFv1HJtvSyDaWaRAMTczT
          source_id: s_3itLLULtgBSCa7TEVBMxNa
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
        id: c_qEWD_2B_ged0zrd7ouIqYw
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PyoKTHLhPGygC4g4RQYYWn
          claim_id: c_qEWD_2B_ged0zrd7ouIqYw
          source_id: s_3itLLULtgBSCa7TEVBMxNa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uZ1ZApthT6Psuog58jJmMP
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pykvwDNkb7ne7cG1IUHBWM
        subject_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2hZntAFEQjbQjN2yxjBT42
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGenMRqZH2M4jF9p8LHtDI
          claim_id: c_pykvwDNkb7ne7cG1IUHBWM
          source_id: s_3LhXdjldqLiZ4DqYvPnI-H
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3LhXdjldqLiZ4DqYvPnI-H
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王溫妻)（CBDB 253503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253503&o=json
            external_identifier: CBDB:253503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hZntAFEQjbQjN2yxjBT42
        status: active
        display_name: 鄭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4_TI40mqZyNpdL6AUP9fkn
        subject_person_id: p_L77KXiVtpEaycpnAungx1H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wH0_B1Y9UjCbFPJ3PlA9R8
          claim_id: c_4_TI40mqZyNpdL6AUP9fkn
          source_id: s_3itLLULtgBSCa7TEVBMxNa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L77KXiVtpEaycpnAungx1H
        status: active
        display_name: 王子新
        merged_into_person_id: null
    - claim:
        id: c_2IilJlfWX-Iw6u4bYkC2VD
        subject_person_id: p_dM7S1RgNEjd531jD42UGXa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rNAXHS2wWBhxBe5_2_RIom
          claim_id: c_2IilJlfWX-Iw6u4bYkC2VD
          source_id: s_3itLLULtgBSCa7TEVBMxNa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dM7S1RgNEjd531jD42UGXa
        status: active
        display_name: 王整
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溫 | accepted |
| birth.date | 1438年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uZ1ZApthT6Psuog58jJmMP | 王傑 | accepted |
| spouses | p_2hZntAFEQjbQjN2yxjBT42 | 鄭氏 | accepted |
| ancestors | p_L77KXiVtpEaycpnAungx1H | 王子新 | accepted |
| ancestors | p_dM7S1RgNEjd531jD42UGXa | 王整 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溫（CBDB 200081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200081&o=json)
- [中国历代人物传记资料库：鄭氏(王溫妻)（CBDB 253503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253503&o=json)
