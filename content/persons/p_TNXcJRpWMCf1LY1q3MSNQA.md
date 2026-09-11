---
schema: wang-person/v1
id: p_TNXcJRpWMCf1LY1q3MSNQA
status: active
merged_into: null
display_name: 王韞秀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cVRZ7C4jtWdtyih1dbhPdq
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sUFPXwweTv5b2NN9Mak7c1
          claim_id: c_cVRZ7C4jtWdtyih1dbhPdq
          source_id: s_m8KJAW6KMq7ByhmjuQY7Ga
          stance: supports
          locator: CBDB:92099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92099）
          source: &a1
            id: s_m8KJAW6KMq7ByhmjuQY7Ga
            source_type: api_record
            title: 中国历代人物传记资料库：王韞秀（CBDB 92099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92099&o=json
            external_identifier: CBDB:92099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_F2D2bK9YGU8wYPSMPJTACy
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zf2mFZSGJv6a825RhTCvD8
          claim_id: c_F2D2bK9YGU8wYPSMPJTACy
          source_id: s_m8KJAW6KMq7ByhmjuQY7Ga
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NVvHLoerH5xHq73U2hfJK1
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 777年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cihrozbGm8uLFhZFAu2dqw
          claim_id: c_NVvHLoerH5xHq73U2hfJK1
          source_id: s_m8KJAW6KMq7ByhmjuQY7Ga
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eztwqGEWrsCBqzwPNnDMjf
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4BqjdD4kN3VmBcu3FXXh4U
          claim_id: c_eztwqGEWrsCBqzwPNnDMjf
          source_id: s_m8KJAW6KMq7ByhmjuQY7Ga
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
        id: c_cQSb4I3ei7zmFMoTDmDKhg
        subject_person_id: p_QqduQ4bBt2W7EX3AgTxcR6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X53Ws5atYKRM_jwKYL9vxh
          claim_id: c_cQSb4I3ei7zmFMoTDmDKhg
          source_id: s_m8KJAW6KMq7ByhmjuQY7Ga
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2799, HuWenKai #19：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QqduQ4bBt2W7EX3AgTxcR6
        status: active
        display_name: 王忠嗣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HCvM3RBShwNIa2Nw-JDwQU
        subject_person_id: p_TNXcJRpWMCf1LY1q3MSNQA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_h6RaXaJes9kbPUSdZGFtsS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nGKM1jy2Nia2d2_TYY1CL
          claim_id: c_HCvM3RBShwNIa2Nw-JDwQU
          source_id: s_1ubvgbR7tr_0853w4keVls
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00233：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1ubvgbR7tr_0853w4keVls
            source_type: api_record
            title: 中国历代人物传记资料库：元載（CBDB 32672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32672&o=json
            external_identifier: CBDB:32672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h6RaXaJes9kbPUSdZGFtsS
        status: active
        display_name: 元載
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王韞秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韞秀 | accepted |
| birth.date | 724年 | accepted |
| death.date | 777年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QqduQ4bBt2W7EX3AgTxcR6 | 王忠嗣 | accepted |
| spouses | p_h6RaXaJes9kbPUSdZGFtsS | 元載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韞秀（CBDB 92099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92099&o=json)
- [中国历代人物传记资料库：元載（CBDB 32672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32672&o=json)
