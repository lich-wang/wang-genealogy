---
schema: wang-person/v1
id: p_y8DBtZG7ASfGegNGeXNqD4
status: active
merged_into: null
display_name: 王诩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wXPMhbP_NFy0hQ81Kohsj7
        subject_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诩（生于3世纪），史料所见人物。本项目依据《王诩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fvWbuLYLZRXt9etAMZUePM
          claim_id: c_wXPMhbP_NFy0hQ81Kohsj7
          source_id: s_pMDQTCsPBMQFb4RqPjtgQk
          stance: supports
          locator: Q16906217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pMDQTCsPBMQFb4RqPjtgQk
            source_type: api_record
            title: 维基数据：王诩（Q16906217）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906217
            external_identifier: Q16906217
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:00.544Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Fiy8QEVTjj94ixHKvLNwc
        subject_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 3世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0201-01-01
            latest: 0300-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AtYK2E4vnzTADspR9zFYKV
          claim_id: c_9Fiy8QEVTjj94ixHKvLNwc
          source_id: s_pMDQTCsPBMQFb4RqPjtgQk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pMDQTCsPBMQFb4RqPjtgQk
            source_type: api_record
            title: 维基数据：王诩（Q16906217）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906217
            external_identifier: Q16906217
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:00.544Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sxvBUEYPogr6rCrBK13SE8
        subject_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nKkhdrAfEcwoy4D49zxwFp
          claim_id: c_sxvBUEYPogr6rCrBK13SE8
          source_id: s_pMDQTCsPBMQFb4RqPjtgQk
          stance: supports
          locator: Q16906217
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RhDfuqcfjFvAGY1mPcirPk
        subject_person_id: p_F2YtkguWYzwWiDeuf3FweW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9aHEJHkSutqkoqVkH5jqz8
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_G4cP9j9Npyjz3dB7Zo3SwF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4cP9j9Npyjz3dB7Zo3SwF
            source_type: api_record
            title: 維基數據：王乂（Q22814893）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814893
            external_identifier: Q22814893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.172Z
            metadata_json: null
        - id: cs_NW3q2R6P76MKzR7S4zDMCk
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_pMDQTCsPBMQFb4RqPjtgQk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pMDQTCsPBMQFb4RqPjtgQk
            source_type: api_record
            title: 维基数据：王诩（Q16906217）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906217
            external_identifier: Q16906217
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:00.544Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
        - id: cs_RN3a9X2Jvw11M9MKYpJY5K
          claim_id: c_RhDfuqcfjFvAGY1mPcirPk
          source_id: s_aVfP77Ejt5xUCmZ7ddwDSH
          stance: supports
          locator: 条文：之子/之女
          quotation: 王诩，字季演，一字季胤，琅邪临沂人，王雄的孙子，王乂的儿子，王衍和王澄的兄弟，在晋朝官至脩武县县令
          interpretation_note: null
          source:
            id: s_aVfP77Ejt5xUCmZ7ddwDSH
            source_type: website
            title: 中文维基百科：王诩 (脩武县县令)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:56.955Z
            metadata_json: null
      object_person:
        id: p_F2YtkguWYzwWiDeuf3FweW
        status: active
        display_name: 王乂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_c89caC2swA7kaRdcKG93PN
        subject_person_id: p_LG8YoDXiRnc6qeaM7WWt1b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y8DBtZG7ASfGegNGeXNqD4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XEyW2BYnXQhSWqDQ4Skshs
          claim_id: c_c89caC2swA7kaRdcKG93PN
          source_id: s_aVfP77Ejt5xUCmZ7ddwDSH
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 王雄的孙子
          interpretation_note: null
          source:
            id: s_aVfP77Ejt5xUCmZ7ddwDSH
            source_type: website
            title: 中文维基百科：王诩 (脩武县县令)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:56.955Z
            metadata_json: null
      object_person:
        id: p_LG8YoDXiRnc6qeaM7WWt1b
        status: active
        display_name: 王雄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王诩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诩（生于3世纪），史料所见人物。本项目依据《王诩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 3世纪 | accepted |
| name.primary | 王诩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F2YtkguWYzwWiDeuf3FweW | 王乂 | accepted |
| ancestors | p_LG8YoDXiRnc6qeaM7WWt1b | 王雄 | accepted |

## 外部来源

- [维基数据：王诩（Q16906217）](https://www.wikidata.org/wiki/Q16906217)
- [維基數據：王乂（Q22814893）](https://www.wikidata.org/wiki/Q22814893)
- [中文维基百科：王诩 (脩武县县令)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AF%A9_(%E8%84%A9%E6%AD%A6%E5%8E%BF%E5%8E%BF%E4%BB%A4))
