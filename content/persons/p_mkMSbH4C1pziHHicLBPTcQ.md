---
schema: wang-person/v1
id: p_mkMSbH4C1pziHHicLBPTcQ
status: active
merged_into: null
display_name: 王宗瑀
cbdb_id: 30557
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gFkz49beMhPSiwRdaR5TGX
        subject_person_id: p_mkMSbH4C1pziHHicLBPTcQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑀，宋人物。籍贯洛陽，身份为未婚而卒。（中国历代人物传记资料库 CBDB 30557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0Yq065dmWD2TAQN8Py-YuX
          claim_id: c_gFkz49beMhPSiwRdaR5TGX
          source_id: s_mid8GhszuWtkTMeapRARF6
          stance: supports
          locator: CBDB:30557
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mid8GhszuWtkTMeapRARF6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑀（CBDB 30557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30557&o=json
            external_identifier: CBDB:30557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wXn1hhhbF1DeePxWrzhurD
        subject_person_id: p_mkMSbH4C1pziHHicLBPTcQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PPbqff15uPC4V44bDM1YFD
          claim_id: c_wXn1hhhbF1DeePxWrzhurD
          source_id: s_mid8GhszuWtkTMeapRARF6
          stance: supports
          locator: CBDB:30557
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rhAmmOzfxrZ0ylXkSp8FIi
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mkMSbH4C1pziHHicLBPTcQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XM33cD67o5a4kLei1gdkUi
          claim_id: c_rhAmmOzfxrZ0ylXkSp8FIi
          source_id: s_Kd1xh01w04p5vGLBYzTpsC
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Kd1xh01w04p5vGLBYzTpsC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瑀（CBDB 30557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30557&o=json
            external_identifier: CBDB:30557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j7iPUKCmtFNavh7UEFUMUs
        status: active
        display_name: 王正中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗瑀，宋人物。籍贯洛陽，身份为未婚而卒。（中国历代人物传记资料库 CBDB 30557） | accepted |
| name.primary | 王宗瑀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j7iPUKCmtFNavh7UEFUMUs | 王正中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗瑀（CBDB 30557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30557&o=json)
