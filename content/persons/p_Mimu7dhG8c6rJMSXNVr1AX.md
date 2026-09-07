---
schema: wang-person/v1
id: p_Mimu7dhG8c6rJMSXNVr1AX
status: active
merged_into: null
display_name: 王僧朗
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HttDDoRNzGeWELNWemgpSD
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧朗（4世紀—466年），琅邪臨沂人，出身琅邪王氏，宋明帝時因其女王貞風被立為皇后而獲尊崇。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMzwMc4RGwn8k27Bs74G2G
          claim_id: c_HttDDoRNzGeWELNWemgpSD
          source_id: s_CTvZzbBYLmVjjciN2SHWMi
          stance: supports
          locator: 导言
          quotation: 宋明帝時因其女王貞風為皇后而獲尊崇
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_CTvZzbBYLmVjjciN2SHWMi
            source_type: website
            title: 中文维基百科：王僧朗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:35:26.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CnfrzDGnzq8MGVUrtCvHes
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 4世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0301-01-01
            latest: 0400-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UQTpQWzDGnMzPQ2zAPBCeY
          claim_id: c_CnfrzDGnzq8MGVUrtCvHes
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x8aHJx6BNN3uTswBk71NhS
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧朗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4FPT8P4VsnCzQqyTXtxUwY
          claim_id: c_x8aHJx6BNN3uTswBk71NhS
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: Q22814767
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eHiH2Cr7L4vjD8GcMdvmGx
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_33PMVstMfBaZLwhmQyQo6j
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MhrEW81MhUpnMoCHrMvtpH
            source_type: api_record
            title: 维基数据：王穆（Q16906171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906171
            external_identifier: Q16906171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:59.588Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86
        - id: cs_GVDLv52FeTcX18Q3ZxJBGw
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_R43zXLX6XHKD43zqK6dfue
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王僧朗
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_Rojr1hYzVNbFM8e4KQzAqt
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王僧朗
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_kQZ5bmU8mbAHk7K3zBAi1v
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children:
    - claim:
        id: c_Vo8uYk8n631zqVpucZ4PKc
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x2YE6srB2gXpaEuTinNRLE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4AHsLvybjXR2jngDwzjbsA
          claim_id: c_Vo8uYk8n631zqVpucZ4PKc
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_1C62zeStH9htnMhpADZ4fR
          claim_id: c_Vo8uYk8n631zqVpucZ4PKc
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RG1jATbcHEDjCbB66JdiFa
            source_type: api_record
            title: 维基数据：王贞风（Q855789）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q855789
            external_identifier: Q855789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:22.564Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8
        - id: cs_6JaV8xTnsMF2w2CzFN5JVE
          claim_id: c_Vo8uYk8n631zqVpucZ4PKc
          source_id: s_G4e9T7M9GZyjxCMfARYQr6
          stance: supports
          locator: 条文：父
          quotation: 王貞風（{{bd|436年||479年|11月14日|catIdx=Wang,王}}），琅邪郡临沂县（今山东省临沂市）人，南朝宋明帝劉彧的皇后，王导的玄孙女，父王僧朗
          interpretation_note: null
          source:
            id: s_G4e9T7M9GZyjxCMfARYQr6
            source_type: website
            title: 中文维基百科：王貞風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:50.707Z
            metadata_json: null
        - id: cs_jRNN4QP4A2M21h5CSrxqtT
          claim_id: c_Vo8uYk8n631zqVpucZ4PKc
          source_id: s_PcozkpMwT3dEGfg3DvLGg8
          stance: supports
          locator: 条文：父
          quotation: 王貞風，琅邪郡临沂县（今山东省临沂市）人，南朝宋明帝劉彧的皇后，王导的玄孙女，父王僧朗
          interpretation_note: null
          source:
            id: s_PcozkpMwT3dEGfg3DvLGg8
            source_type: website
            title: 中文维基百科：王貞風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:57.776Z
            metadata_json: null
      object_person:
        id: p_x2YE6srB2gXpaEuTinNRLE
        status: active
        display_name: 王贞风
        merged_into_person_id: null
    - claim:
        id: c_BGoEC6eZKALa5HJm4HPDad
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVJq6ki7XADytLWL91vZ3w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rjPZ5kNasrGxRzSnscCrYK
          claim_id: c_BGoEC6eZKALa5HJm4HPDad
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_44ghu9kJaQAE4tSVLSBjpX
          claim_id: c_BGoEC6eZKALa5HJm4HPDad
          source_id: s_VJtscsmoPHMJFWLdXMikZS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VJtscsmoPHMJFWLdXMikZS
            source_type: api_record
            title: 维基数据：王粹（Q22814769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814769
            external_identifier: Q22814769
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_DVJq6ki7XADytLWL91vZ3w
        status: active
        display_name: 王粹
        merged_into_person_id: null
    - claim:
        id: c_jFdWeqKadrP2Pc2ZESW4tG
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wBpDE4xrtVxV3c6sdG57P5
          claim_id: c_jFdWeqKadrP2Pc2ZESW4tG
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_4TxPwmCf7qDKrxUjUzCsQy
          claim_id: c_jFdWeqKadrP2Pc2ZESW4tG
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nTfNurm19GjeuwxJH5BQkV
            source_type: api_record
            title: 维基数据：王楷（Q66776942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q66776942
            external_identifier: Q66776942
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:26.424Z
            metadata_json: null
      object_person:
        id: p_1Q4woESTMQj8wKj15P4Nwj
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_MGctFe7Qwqc9ZNRWQASZLm
        subject_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e64GBPBpS2DkkgzPQzfX54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fdPvbhhMByByB7MWUJHkBp
          claim_id: c_MGctFe7Qwqc9ZNRWQASZLm
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_mDUXyUQmZJ5StFGMNiVXxw
          claim_id: c_MGctFe7Qwqc9ZNRWQASZLm
          source_id: s_1oQQjgzGe2A2KyjnNQoEvD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1oQQjgzGe2A2KyjnNQoEvD
            source_type: api_record
            title: 维基数据：王彧（Q22814881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814881
            external_identifier: Q22814881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:30.520Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87
        - id: cs_xmZxjhtJ8PmmwHFRFJcpGS
          claim_id: c_MGctFe7Qwqc9ZNRWQASZLm
          source_id: s_L4ASBKhQFtxhHjHQ1KfTaX
          stance: supports
          locator: 条文：父
          quotation: 王景文是東晉丞相王導的玄孫，父親是王僧朗，但過繼了給伯父王智
          interpretation_note: null
          source:
            id: s_L4ASBKhQFtxhHjHQ1KfTaX
            source_type: website
            title: 中文维基百科：王景文
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:55.994Z
            metadata_json: null
      object_person:
        id: p_e64GBPBpS2DkkgzPQzfX54
        status: active
        display_name: 王彧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僧朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王僧朗（4世紀—466年），琅邪臨沂人，出身琅邪王氏，宋明帝時因其女王貞風被立為皇后而獲尊崇。 | accepted |
| birth.date | 4世纪 | accepted |
| name.primary | 王僧朗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kQZ5bmU8mbAHk7K3zBAi1v | 王穆 | accepted |
| children | p_x2YE6srB2gXpaEuTinNRLE | 王贞风 | accepted |
| children | p_DVJq6ki7XADytLWL91vZ3w | 王粹 | accepted |
| children | p_1Q4woESTMQj8wKj15P4Nwj | 王楷 | accepted |
| children | p_e64GBPBpS2DkkgzPQzfX54 | 王彧 | accepted |

## 外部来源

- [维基数据：王粹（Q22814769）](https://www.wikidata.org/wiki/Q22814769)
- [维基数据：王楷（Q66776942）](https://www.wikidata.org/wiki/Q66776942)
- [维基数据：王穆（Q16906171）](https://www.wikidata.org/wiki/Q16906171)
- [维基数据：王僧朗（Q22814767）](https://www.wikidata.org/wiki/Q22814767)
- [维基数据：王彧（Q22814881）](https://www.wikidata.org/wiki/Q22814881)
- [维基数据：王贞风（Q855789）](https://www.wikidata.org/wiki/Q855789)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王景文](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87)
- [中文维基百科：王僧朗](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97)
- [中文维基百科：王貞風](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8)
