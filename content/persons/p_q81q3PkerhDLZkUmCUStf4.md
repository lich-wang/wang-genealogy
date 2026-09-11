---
schema: wang-person/v1
id: p_q81q3PkerhDLZkUmCUStf4
status: active
merged_into: null
display_name: 刘氏
cbdb_id: 35275
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQkGHNVSU9JlAQfX-YC-dO
        subject_person_id: p_q81q3PkerhDLZkUmCUStf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏，王希淮妻。维基数据以独立条目 Q45426174 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Lx4ZL17EPhnTMrVDyO8D9V
          claim_id: c_MQkGHNVSU9JlAQfX-YC-dO
          source_id: s_ep36P9gCF7924Pn4ot1Fzb
          stance: supports
          locator: Q45426174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_ep36P9gCF7924Pn4ot1Fzb
            source_type: api_record
            title: 维基数据：刘氏（Q45426174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426174
            external_identifier: Q45426174
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JuNr2MFpDcE6eXYu7gXJDg
        subject_person_id: p_q81q3PkerhDLZkUmCUStf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NFAw35hpHPB1cWgNmsm3RD
          claim_id: c_JuNr2MFpDcE6eXYu7gXJDg
          source_id: s_k3j135431HV2A9TKwHw3v8
          stance: supports
          locator: Q45426174
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_k3j135431HV2A9TKwHw3v8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉氏（35275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35275&o=json
            external_identifier: CBDB:35275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:15.825Z
            metadata_json: null
        - id: cs_qNRz2mPZid86JtAnkxqo28
          claim_id: c_JuNr2MFpDcE6eXYu7gXJDg
          source_id: s_ep36P9gCF7924Pn4ot1Fzb
          stance: supports
          locator: Q45426174
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XcMRDc8sAB31RDZ-Iq6K1z
        subject_person_id: p_q81q3PkerhDLZkUmCUStf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15eeBkVsaekxgLBnZp3VuC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdtobUIzI68t08nbmpCq1Y
          claim_id: c_XcMRDc8sAB31RDZ-Iq6K1z
          source_id: s_DAHNRvZ4JWoGtAPgXnN5BQ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1673;1674：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DAHNRvZ4JWoGtAPgXnN5BQ
            source_type: api_record
            title: 中国历代人物传记资料库：王炎午（CBDB 35269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35269&o=json
            external_identifier: CBDB:35269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_15eeBkVsaekxgLBnZp3VuC
        status: active
        display_name: 王炎午
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R1rfuLqiBrmfSxXbRhRFLQ
        subject_person_id: p_Nz48pSWAW4LPxqPoD9gVkb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q81q3PkerhDLZkUmCUStf4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNkpwVqZTXw4EP9ooKQopg
          claim_id: c_R1rfuLqiBrmfSxXbRhRFLQ
          source_id: s_gn85ptgouvAdUmyZY5r85u
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_gn85ptgouvAdUmyZY5r85u
            source_type: api_record
            title: 维基数据：王希淮（Q45425959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425959
            external_identifier: Q45425959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_BN5Cka1baSVWHeA8sh5ZtZ
          claim_id: c_R1rfuLqiBrmfSxXbRhRFLQ
          source_id: s_ep36P9gCF7924Pn4ot1Fzb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_TgApbZd9M5zU1j9wVDTdgh
          claim_id: c_R1rfuLqiBrmfSxXbRhRFLQ
          source_id: s_6HuB69fFUFh7QQ1s2c3Ajy
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_6HuB69fFUFh7QQ1s2c3Ajy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希淮（35270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35270&o=json
            external_identifier: CBDB:35270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:00.839Z
            metadata_json: null
      object_person:
        id: p_Nz48pSWAW4LPxqPoD9gVkb
        status: active
        display_name: 王希淮
        merged_into_person_id: null
    - claim:
        id: c_TmANA09Fbby09KYaJmKK-j
        subject_person_id: p_q81q3PkerhDLZkUmCUStf4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Nz48pSWAW4LPxqPoD9gVkb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PPBd-rz76hgsV8A4pikZGa
          claim_id: c_TmANA09Fbby09KYaJmKK-j
          source_id: s_k3j135431HV2A9TKwHw3v8
          stance: supports
          locator: CBDB 双向互证（丈夫 王希淮 ⇄ 妻子 劉氏(王希淮妻)）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a2
      object_person:
        id: p_Nz48pSWAW4LPxqPoD9gVkb
        status: active
        display_name: 王希淮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘氏，王希淮妻。维基数据以独立条目 Q45426174 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 刘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_15eeBkVsaekxgLBnZp3VuC | 王炎午 | accepted |
| spouses | p_Nz48pSWAW4LPxqPoD9gVkb | 王希淮 | accepted |
| spouses | p_Nz48pSWAW4LPxqPoD9gVkb | 王希淮 | accepted |

## 外部来源

- [维基数据：刘氏（Q45426174）](https://www.wikidata.org/wiki/Q45426174)
- [维基数据：王希淮（Q45425959）](https://www.wikidata.org/wiki/Q45425959)
- [中国历代人物传记资料库：王炎午（CBDB 35269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35269&o=json)
- [CBDB 中国历代人物传记资料库：劉氏（35275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35275&o=json)
- [CBDB 中国历代人物传记资料库：王希淮（35270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35270&o=json)
