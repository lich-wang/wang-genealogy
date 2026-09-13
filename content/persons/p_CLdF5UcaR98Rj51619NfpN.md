---
schema: wang-person/v1
id: p_CLdF5UcaR98Rj51619NfpN
status: active
merged_into: null
display_name: 王一之
cbdb_id: 207376
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SbXWxcgCE3Bnx5yN6nX4rB
        subject_person_id: p_CLdF5UcaR98Rj51619NfpN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一之（生于1565年），史料所见人物。本项目依据《中国历代人物传记资料库：王一之（CBDB 207376）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_bXJT3vUb53wBcnNZP2Iqur
          claim_id: c_SbXWxcgCE3Bnx5yN6nX4rB
          source_id: s_iVJJ5vgE5L6JTt59JA2qj2
          stance: supports
          locator: CBDB:207376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iVJJ5vgE5L6JTt59JA2qj2
            source_type: api_record
            title: 中国历代人物传记资料库：王一之（CBDB 207376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207376&o=json
            external_identifier: CBDB:207376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mtg28JUmdArNWr781MKYv1
        subject_person_id: p_CLdF5UcaR98Rj51619NfpN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1565年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1565-01-01
            latest: 1565-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jyPm3p52pVFQDzzJewoxx2
          claim_id: c_mtg28JUmdArNWr781MKYv1
          source_id: s_iVJJ5vgE5L6JTt59JA2qj2
          stance: supports
          locator: CBDB:207376
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source:
            id: s_iVJJ5vgE5L6JTt59JA2qj2
            source_type: api_record
            title: 中国历代人物传记资料库：王一之（CBDB 207376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207376&o=json
            external_identifier: CBDB:207376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7vxvvKy5QAd24EZhJExF7
        subject_person_id: p_CLdF5UcaR98Rj51619NfpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dAXTgGGPHipWq95NKWRKtd
          claim_id: c_Z7vxvvKy5QAd24EZhJExF7
          source_id: s_iVJJ5vgE5L6JTt59JA2qj2
          stance: supports
          locator: CBDB:207376
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1565
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HXZ7dolQPmoa9YFsqHzitX
        subject_person_id: p_PW4TLfRz16NyX9w26Xsuko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLdF5UcaR98Rj51619NfpN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jl3_BnFsV_7be34mtz6mIe
          claim_id: c_HXZ7dolQPmoa9YFsqHzitX
          source_id: s_tPi6mJceVE6bdFiVmF35J4
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tPi6mJceVE6bdFiVmF35J4
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 231806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231806&o=json
            external_identifier: CBDB:231806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PW4TLfRz16NyX9w26Xsuko
        status: active
        display_name: 王道明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iFD7eo344iemRLQl3TUs6k
        subject_person_id: p_4XX99SLMtRTPLVocw8Sf51
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLdF5UcaR98Rj51619NfpN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IdRATzdY7VjDpL53VdAK8u
          claim_id: c_iFD7eo344iemRLQl3TUs6k
          source_id: s_m9o1JNqRxDZAu4E276BJjL
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m9o1JNqRxDZAu4E276BJjL
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 231805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231805&o=json
            external_identifier: CBDB:231805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4XX99SLMtRTPLVocw8Sf51
        status: active
        display_name: 王紘
        merged_into_person_id: null
    - claim:
        id: c_0EGa_L90gDMTCdlR3KvU0M
        subject_person_id: p_y5B9Ng3eWHxj1G8wHCwemM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLdF5UcaR98Rj51619NfpN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBd_5777GMWidu6u363kip
          claim_id: c_0EGa_L90gDMTCdlR3KvU0M
          source_id: s_VDQBC4AYkKA59UH9aCYfq6
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VDQBC4AYkKA59UH9aCYfq6
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 231804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231804&o=json
            external_identifier: CBDB:231804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_y5B9Ng3eWHxj1G8wHCwemM
        status: active
        display_name: 王雄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一之（生于1565年），史料所见人物。本项目依据《中国历代人物传记资料库：王一之（CBDB 207376）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1565年 | accepted |
| name.primary | 王一之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PW4TLfRz16NyX9w26Xsuko | 王道明 | accepted |
| ancestors | p_4XX99SLMtRTPLVocw8Sf51 | 王紘 | accepted |
| ancestors | p_y5B9Ng3eWHxj1G8wHCwemM | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道明（CBDB 231806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231806&o=json)
- [中国历代人物传记资料库：王紘（CBDB 231805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231805&o=json)
- [中国历代人物传记资料库：王雄（CBDB 231804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231804&o=json)
- [中国历代人物传记资料库：王一之（CBDB 207376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207376&o=json)
