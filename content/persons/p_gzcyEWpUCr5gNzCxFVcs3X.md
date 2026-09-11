---
schema: wang-person/v1
id: p_gzcyEWpUCr5gNzCxFVcs3X
status: active
merged_into: null
display_name: 王冕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U1jHPWLopAkRPMQ8MamgVi
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2g2Mvnhvn31Ny6qH6B2RF
          claim_id: c_U1jHPWLopAkRPMQ8MamgVi
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
          stance: supports
          locator: CBDB:67901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67901）
          source: &a1
            id: s_P8EVzQGCVvtfnWbVMBRKGN
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 67901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67901&o=json
            external_identifier: CBDB:67901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6kNVqZu94LGBSYxPWdHTCU
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWQkarGBCVgu9Jx6hyR4KL
          claim_id: c_6kNVqZu94LGBSYxPWdHTCU
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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
        id: c_778SN6JAgyQNM4EN6LzxNb
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9v816U5j6P8QoTvP7QByZ
          claim_id: c_778SN6JAgyQNM4EN6LzxNb
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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
        id: c_F8771QHiDBkGZqY4QmGuKt
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
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
        - id: cs_ARnetpcrGNzY1N79rQazHw
          claim_id: c_F8771QHiDBkGZqY4QmGuKt
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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
  ancestors:
    - claim:
        id: c_CLmKZj3yR3AtBRGFoFA4iN
        subject_person_id: p_67qMPLTYasCb3s1pUyvhCX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAurUdnifLSPHlXwCwZE8H
          claim_id: c_CLmKZj3yR3AtBRGFoFA4iN
          source_id: s_MKaRW9zgQpUTx4EoCJCiUV
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MKaRW9zgQpUTx4EoCJCiUV
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 281722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281722&o=json
            external_identifier: CBDB:281722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_67qMPLTYasCb3s1pUyvhCX
        status: active
        display_name: 王珉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| birth.date | 1475年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_67qMPLTYasCb3s1pUyvhCX | 王珉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 67901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67901&o=json)
- [中国历代人物传记资料库：王珉（CBDB 281722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281722&o=json)
