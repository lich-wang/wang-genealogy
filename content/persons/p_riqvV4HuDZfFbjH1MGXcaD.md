---
schema: wang-person/v1
id: p_riqvV4HuDZfFbjH1MGXcaD
status: active
merged_into: null
display_name: 趙氏
revision: 2
cbdb_id: 437570
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQAk5q4pXJJAP56mQ31-T5
        subject_person_id: p_riqvV4HuDZfFbjH1MGXcaD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，元人物。籍贯永嘉。（中国历代人物传记资料库 CBDB 437570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TxHhZzmoXo4ni8pg4fUO_o
          claim_id: c_MQAk5q4pXJJAP56mQ31-T5
          source_id: s_ELBgkqSvmmDl51Vv4vvsXo
          stance: supports
          locator: CBDB:437570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ELBgkqSvmmDl51Vv4vvsXo
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王珹妻)（CBDB 437570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437570&o=json
            external_identifier: CBDB:437570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_lC1Ocp0X4lz4y4RmhSAoTH
        subject_person_id: p_riqvV4HuDZfFbjH1MGXcaD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KiiRPSaqaBdfz8ZNEG7dHd
          claim_id: c_lC1Ocp0X4lz4y4RmhSAoTH
          source_id: s_ELBgkqSvmmDl51Vv4vvsXo
          stance: supports
          locator: CBDB:437570
          quotation: null
          interpretation_note: CBDB 明确记录的王珹配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fqebM_Ot6rHhSDlQsCgrYI
        subject_person_id: p_riqvV4HuDZfFbjH1MGXcaD
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_IkW3zMnnAutGeoW8HaCQYa
          claim_id: c_fqebM_Ot6rHhSDlQsCgrYI
          source_id: s_1B_Q2HaOCpm6v7HEb1xpG8
          stance: supports
          locator: CBDB 亲属：母（KinPerson 437570）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1B_Q2HaOCpm6v7HEb1xpG8
            source_type: api_record
            title: 中国历代人物传记资料库：王邵孫（CBDB 437571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json
            external_identifier: CBDB:437571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XL4Ed8SYTKF5xumf4j1w9n
        status: active
        display_name: 王邵孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_m2wh-uSVn0As6pWrt3cRDc
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_riqvV4HuDZfFbjH1MGXcaD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQVNXxe2dutII_TGDEA3eb
          claim_id: c_m2wh-uSVn0As6pWrt3cRDc
          source_id: s_ELBgkqSvmmDl51Vv4vvsXo
          stance: supports
          locator: CBDB 双向互证（妻子 趙氏(王珹妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sEGDXi7ck4pKNAhddgmbiq
        status: active
        display_name: 王珹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，元人物。籍贯永嘉。（中国历代人物传记资料库 CBDB 437570） | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XL4Ed8SYTKF5xumf4j1w9n | 王邵孫 | accepted |
| spouses | p_sEGDXi7ck4pKNAhddgmbiq | 王珹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵孫（CBDB 437571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json)
- [中国历代人物传记资料库：趙氏(王珹妻)（CBDB 437570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437570&o=json)
