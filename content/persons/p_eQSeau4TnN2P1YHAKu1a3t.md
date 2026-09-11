---
schema: wang-person/v1
id: p_eQSeau4TnN2P1YHAKu1a3t
status: active
merged_into: null
display_name: 王道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yRp83CP1R2hwQ4br6NhhTb
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_So7s6QAydC4urKKqtpvfxT
          claim_id: c_yRp83CP1R2hwQ4br6NhhTb
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
          stance: supports
          locator: CBDB:126743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126743）
          source: &a1
            id: s_SDTWLwe8yfNNX1QNrMi7Pn
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 126743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126743&o=json
            external_identifier: CBDB:126743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CFkPXK8PGMKtGKgdxQAJ72
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TNrd58r8dwKxyLGnjeLJ4C
          claim_id: c_CFkPXK8PGMKtGKgdxQAJ72
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
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
        id: c_bS7vtGN47wFPcPtRSJ74Pz
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wG4r4hRYHaNg4fm6LcMPxu
          claim_id: c_bS7vtGN47wFPcPtRSJ74Pz
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
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
        id: c_KdCYeDGuBdGeKLCuXf2SHo
        subject_person_id: p_eQSeau4TnN2P1YHAKu1a3t
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
        - id: cs_3SnRN7bxhNYqabpKgfaDEp
          claim_id: c_KdCYeDGuBdGeKLCuXf2SHo
          source_id: s_SDTWLwe8yfNNX1QNrMi7Pn
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
        id: c_auFESy6ttH1cvrseo4KPKH
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eny2nQ8kjY0ScXe9UJu8bS
          claim_id: c_auFESy6ttH1cvrseo4KPKH
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xBqdQS3J8npNXQbvVRSH9d
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 276414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json
            external_identifier: CBDB:276414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1487年 | accepted |
| death.date | 1547年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 276414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json)
- [中国历代人物传记资料库：王道（CBDB 126743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126743&o=json)
