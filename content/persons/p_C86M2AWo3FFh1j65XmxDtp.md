---
schema: wang-person/v1
id: p_C86M2AWo3FFh1j65XmxDtp
status: active
merged_into: null
display_name: 王潺
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dA2gEjFnKoJ3JAC2Mew99L
        subject_person_id: p_C86M2AWo3FFh1j65XmxDtp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_btG6ZepcgjJBRF6ChQnt5S
          claim_id: c_dA2gEjFnKoJ3JAC2Mew99L
          source_id: s_1E3QVAzkV53k9iBggB6iY6
          stance: supports
          locator: CBDB:204037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204037）
          source: &a1
            id: s_1E3QVAzkV53k9iBggB6iY6
            source_type: api_record
            title: 中国历代人物传记资料库：王潺（CBDB 204037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204037&o=json
            external_identifier: CBDB:204037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G5CPMaAcqRLth1iHrpsotH
        subject_person_id: p_C86M2AWo3FFh1j65XmxDtp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HT15dwqybaqReQHFga4uja
          claim_id: c_G5CPMaAcqRLth1iHrpsotH
          source_id: s_1E3QVAzkV53k9iBggB6iY6
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
        id: c_bmyfejFRyGrbdHBHu71a5D
        subject_person_id: p_C86M2AWo3FFh1j65XmxDtp
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
        - id: cs_3AiCaJSCp9Rs87p66oKAHn
          claim_id: c_bmyfejFRyGrbdHBHu71a5D
          source_id: s_1E3QVAzkV53k9iBggB6iY6
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
        id: c_UHTHcjMBHImtTGrsKZv9Zd
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C86M2AWo3FFh1j65XmxDtp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGyONeRVTFMvcisXf_buDM
          claim_id: c_UHTHcjMBHImtTGrsKZv9Zd
          source_id: s_vD4iK7oraKBeogyki3o93S
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vD4iK7oraKBeogyki3o93S
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 313572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313572&o=json
            external_identifier: CBDB:313572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GLsUFUhPwGamaG8mG7dLop
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Wy4TREGXyIl_weLABVNzJM
        subject_person_id: p_AqGz374Jy9khcjLrsbgz74
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C86M2AWo3FFh1j65XmxDtp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQoF4cRCQjk2XAjyTl_CZQ
          claim_id: c_Wy4TREGXyIl_weLABVNzJM
          source_id: s_83qPsLDHH67zp9DkjHLLwq
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_83qPsLDHH67zp9DkjHLLwq
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 313571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313571&o=json
            external_identifier: CBDB:313571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AqGz374Jy9khcjLrsbgz74
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_RIoLvgHW8CFFvhjhdbH1sr
        subject_person_id: p_pU1UZiQDdXL4TbZ3t1wyFS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C86M2AWo3FFh1j65XmxDtp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_60BWcY4t6cydAbLB99jXEw
          claim_id: c_RIoLvgHW8CFFvhjhdbH1sr
          source_id: s_dWJgFDGq45dmUHf1X4MDBn
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dWJgFDGq45dmUHf1X4MDBn
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 313570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313570&o=json
            external_identifier: CBDB:313570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pU1UZiQDdXL4TbZ3t1wyFS
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王潺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潺 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GLsUFUhPwGamaG8mG7dLop | 王鉞 | accepted |
| ancestors | p_AqGz374Jy9khcjLrsbgz74 | 王宇 | accepted |
| ancestors | p_pU1UZiQDdXL4TbZ3t1wyFS | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 313570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313570&o=json)
- [中国历代人物传记资料库：王潺（CBDB 204037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204037&o=json)
- [中国历代人物传记资料库：王宇（CBDB 313571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313571&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 313572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313572&o=json)
