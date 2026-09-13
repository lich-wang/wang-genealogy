---
schema: wang-person/v1
id: p_Y45CpRh1nGsdRTnKPEXa99
status: active
merged_into: null
display_name: 虢国公主
cbdb_id: 194203
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qi9TfGihaaEAvq0x3_cyX5
        subject_person_id: p_Y45CpRh1nGsdRTnKPEXa99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 虢国公主，史料所见人物。本项目依据《虢国公主》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViC_b144IG_lm5Ji1QKMAl
          claim_id: c_Qi9TfGihaaEAvq0x3_cyX5
          source_id: s_XM771w9hkBBydpp7tX32VV
          stance: supports
          locator: Q16603617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XM771w9hkBBydpp7tX32VV
            source_type: api_record
            title: 维基数据：虢国公主（Q16603617）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603617
            external_identifier: Q16603617
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%99%A2%E5%9B%BD%E5%85%AC%E4%B8%BB
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EJovGGP3vBTizkdHYaHTJ
        subject_person_id: p_Y45CpRh1nGsdRTnKPEXa99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 虢国公主
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kgbd5oABmXEJ3TugwwtJpC
          claim_id: c_1EJovGGP3vBTizkdHYaHTJ
          source_id: s_XM771w9hkBBydpp7tX32VV
          stance: supports
          locator: Q16603617
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
        - id: cs_s8id1QyQgwubbH5LBYaVpY
          claim_id: c_1EJovGGP3vBTizkdHYaHTJ
          source_id: s_G3Xpdr7JMUhmvkGsTqmqrF
          stance: supports
          locator: CBDB:194203
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_G3Xpdr7JMUhmvkGsTqmqrF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（194203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194203&o=json
            external_identifier: CBDB:194203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FpCCQKBXLYiD4KpRKwd8qs
        subject_person_id: p_ra6MWuWLSDw8szrEbk5MTZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Y45CpRh1nGsdRTnKPEXa99
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z5M92iY5N3mERKGQHVH3KT
          claim_id: c_FpCCQKBXLYiD4KpRKwd8qs
          source_id: s_XM771w9hkBBydpp7tX32VV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gJoimeVV8ez1HZwtzT4AB2
          claim_id: c_FpCCQKBXLYiD4KpRKwd8qs
          source_id: s_skgoALw23VHbn6GXrRg1pa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_skgoALw23VHbn6GXrRg1pa
            source_type: api_record
            title: 维基数据：王承系（Q45518441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45518441
            external_identifier: Q45518441
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E7%B3%BB
        - id: cs_NUTNdaJZu4YoGipMsa3oBP
          claim_id: c_FpCCQKBXLYiD4KpRKwd8qs
          source_id: s_LNGdrCiFxE339TzXEfXcCZ
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LNGdrCiFxE339TzXEfXcCZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承系（194205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194205&o=json
            external_identifier: CBDB:194205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:20.465Z
            metadata_json: null
      object_person:
        id: p_ra6MWuWLSDw8szrEbk5MTZ
        status: active
        display_name: 王承系
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 虢国公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 虢国公主，史料所见人物。本项目依据《虢国公主》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 虢国公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ra6MWuWLSDw8szrEbk5MTZ | 王承系 | accepted |

## 外部来源

- [维基数据：虢国公主（Q16603617）](https://www.wikidata.org/wiki/Q16603617)
- [维基数据：王承系（Q45518441）](https://www.wikidata.org/wiki/Q45518441)
- [CBDB 中国历代人物传记资料库：李氏（194203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194203&o=json)
- [CBDB 中国历代人物传记资料库：王承系（194205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194205&o=json)
