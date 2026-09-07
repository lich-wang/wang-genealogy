---
schema: wang-person/v1
id: p_x2YE6srB2gXpaEuTinNRLE
status: active
merged_into: null
display_name: 王贞风
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dMnT3sYy3JwDzd96627TAz
        subject_person_id: p_x2YE6srB2gXpaEuTinNRLE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞风（436年—479年），史料所见人物。本项目依据《王贞风》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1v45YplK64Al4XEDYn2bow
          claim_id: c_dMnT3sYy3JwDzd96627TAz
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: Q855789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uEJkT3Aigh9HF7apgfMuJz
        subject_person_id: p_x2YE6srB2gXpaEuTinNRLE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 436年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0436-01-01
            latest: 0436-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aBt3FmvSLNWFrxTDgrBAEp
          claim_id: c_uEJkT3Aigh9HF7apgfMuJz
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LCgteFrqV8Kx3xmodkHq7Z
        subject_person_id: p_x2YE6srB2gXpaEuTinNRLE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 479年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0479-01-01
            latest: 0479-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZSFKFct827Q53zBMDni5fM
          claim_id: c_LCgteFrqV8Kx3xmodkHq7Z
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oSgGLGwuSTnh98MALvABK3
        subject_person_id: p_x2YE6srB2gXpaEuTinNRLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贞风
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BbgrrrxNHWBmPKBDefJtyy
          claim_id: c_oSgGLGwuSTnh98MALvABK3
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: Q855789
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_Mimu7dhG8c6rJMSXNVr1AX
        status: active
        display_name: 王僧朗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MvjRHS7RsweCfEiV6oL35L
        subject_person_id: p_fGZLZddpCqxVuUdQzBCgQX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x2YE6srB2gXpaEuTinNRLE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_dtchGvFd1BJZWZA7yV57hf
          claim_id: c_MvjRHS7RsweCfEiV6oL35L
          source_id: s_RG1jATbcHEDjCbB66JdiFa
          stance: supports
          locator: P26（配偶）
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
        - id: cs_Gr2yeWzU4ftWVn7dJM5MLV
          claim_id: c_MvjRHS7RsweCfEiV6oL35L
          source_id: s_aog34YV3TSb7fmSqBUNA53
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_aog34YV3TSb7fmSqBUNA53
            source_type: api_record
            title: 维基数据：刘彧（Q718195）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718195
            external_identifier: Q718195
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.790Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AE%8B%E6%98%8E%E5%B8%9D
      object_person:
        id: p_fGZLZddpCqxVuUdQzBCgQX
        status: active
        display_name: 刘彧
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_SDiBgggUABKvWgmmK4mWtr
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x2YE6srB2gXpaEuTinNRLE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CapXMbCNKBNjw3vDgXScxL
          claim_id: c_SDiBgggUABKvWgmmK4mWtr
          source_id: s_PcozkpMwT3dEGfg3DvLGg8
          stance: supports
          locator: 条文：条文识读（玄祖）（4世）
          quotation: 王导的玄孙女
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
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王贞风

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贞风（436年—479年），史料所见人物。本项目依据《王贞风》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 436年 | accepted |
| death.date | 479年 | accepted |
| name.primary | 王贞风 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mimu7dhG8c6rJMSXNVr1AX | 王僧朗 | accepted |
| spouses | p_fGZLZddpCqxVuUdQzBCgQX | 刘彧 | accepted |
| ancestors | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |

## 外部来源

- [维基数据：刘彧（Q718195）](https://www.wikidata.org/wiki/Q718195)
- [维基数据：王僧朗（Q22814767）](https://www.wikidata.org/wiki/Q22814767)
- [维基数据：王贞风（Q855789）](https://www.wikidata.org/wiki/Q855789)
- [中文维基百科：王貞風](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%9E%E9%A2%A8)
