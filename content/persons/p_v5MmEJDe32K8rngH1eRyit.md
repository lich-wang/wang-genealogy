---
schema: wang-person/v1
id: p_v5MmEJDe32K8rngH1eRyit
status: active
merged_into: null
display_name: 王琰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V5gCB4zQmwG68EhYwKirm8
        subject_person_id: p_v5MmEJDe32K8rngH1eRyit
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bE2Wqq3yyQ817dFaS6RC4J
          claim_id: c_V5gCB4zQmwG68EhYwKirm8
          source_id: s_eRjPPHRRLEmcobb1rB25Sn
          stance: supports
          locator: CBDB:152434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152434）
          source: &a1
            id: s_eRjPPHRRLEmcobb1rB25Sn
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 152434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152434&o=json
            external_identifier: CBDB:152434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rUo86fqUUv62wKoYJSZ319
        subject_person_id: p_v5MmEJDe32K8rngH1eRyit
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
        - id: cs_zMrgChBdoBUPdwUAE2PnP5
          claim_id: c_rUo86fqUUv62wKoYJSZ319
          source_id: s_eRjPPHRRLEmcobb1rB25Sn
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Qy3rd9lDv27XFoSDhVVF2u
        subject_person_id: p_v5MmEJDe32K8rngH1eRyit
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8P03GnPI2tdlWAGrYTcXFz
          claim_id: c_Qy3rd9lDv27XFoSDhVVF2u
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 350：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3avEwiiC8ybCtwy5vRfFf
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 140524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json
            external_identifier: CBDB:140524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3Nub68EqFpWgDf9Bo4NNh
        status: active
        display_name: 王怡
        merged_into_person_id: null
  other: []
---

# 王琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A3Nub68EqFpWgDf9Bo4NNh | 王怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琰（CBDB 152434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152434&o=json)
- [中国历代人物传记资料库：王怡（CBDB 140524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json)
