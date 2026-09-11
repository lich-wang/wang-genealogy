---
schema: wang-person/v1
id: p_6zgueKBTLH65ghccEBpJUs
status: active
merged_into: null
display_name: 王軒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yyDhvLePdtfTMDjRV5jxYd
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uvwnbh8KAF7T1TGu8B4rSs
          claim_id: c_yyDhvLePdtfTMDjRV5jxYd
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: CBDB:200441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200441）
          source: &a1
            id: s_4uC29d4Vjc4o2MpghhPq5U
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 200441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json
            external_identifier: CBDB:200441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AAxmich8oju7L6LMGEY5i9
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhpGB5tS1vGBDZ3nCmR8bP
          claim_id: c_AAxmich8oju7L6LMGEY5i9
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
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
        id: c_xGJ9Jee6B4pc1qGgPN8dA7
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
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
        - id: cs_11NdQtJVdncYDutRAKmpzt
          claim_id: c_xGJ9Jee6B4pc1qGgPN8dA7
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
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
        id: c_wJI_xVl-gcRv6vw8OOKiHW
        subject_person_id: p_n6FB4ucTa6BP7qn8DgCqxS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6zgueKBTLH65ghccEBpJUs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9AU-CFGN6lle5lsoPVQjp
          claim_id: c_wJI_xVl-gcRv6vw8OOKiHW
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n6FB4ucTa6BP7qn8DgCqxS
        status: active
        display_name: 王麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vahn_nL42PGyr-TXll0V1U
        subject_person_id: p_6zgueKBTLH65ghccEBpJUs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UEhfyG52RnLHKXW9zimPA5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4EP2dCg5o0sDdMZ3DpOM7
          claim_id: c_vahn_nL42PGyr-TXll0V1U
          source_id: s_NNklhiVhsSXtQD3IJUewSd
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NNklhiVhsSXtQD3IJUewSd
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王軒妻)（CBDB 257864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257864&o=json
            external_identifier: CBDB:257864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UEhfyG52RnLHKXW9zimPA5
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_3f8yYR_KfWEpWiwjomW6wN
        subject_person_id: p_MQfN4TZNdW52oCxM3wCJm7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6zgueKBTLH65ghccEBpJUs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61Sw97VBA-rSgDHe35HzdW
          claim_id: c_3f8yYR_KfWEpWiwjomW6wN
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MQfN4TZNdW52oCxM3wCJm7
        status: active
        display_name: 王仲禮
        merged_into_person_id: null
    - claim:
        id: c_Wdg34zs-mIAy3WfmYC05DO
        subject_person_id: p_XjjMKXMi1LcwhZ2dwyqzpR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6zgueKBTLH65ghccEBpJUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-zXSZ4Us_xmdI9lbDilsC
          claim_id: c_Wdg34zs-mIAy3WfmYC05DO
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XjjMKXMi1LcwhZ2dwyqzpR
        status: active
        display_name: 王曾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n6FB4ucTa6BP7qn8DgCqxS | 王麒 | accepted |
| spouses | p_UEhfyG52RnLHKXW9zimPA5 | 李氏 | accepted |
| ancestors | p_MQfN4TZNdW52oCxM3wCJm7 | 王仲禮 | accepted |
| ancestors | p_XjjMKXMi1LcwhZ2dwyqzpR | 王曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王軒妻)（CBDB 257864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257864&o=json)
- [中国历代人物传记资料库：王軒（CBDB 200441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json)
