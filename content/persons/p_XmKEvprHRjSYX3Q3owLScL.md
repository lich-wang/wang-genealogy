---
schema: wang-person/v1
id: p_XmKEvprHRjSYX3Q3owLScL
status: active
merged_into: null
display_name: 王有大
cbdb_id: 35585
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wwv5vA9YB72q39WB2oobeM
        subject_person_id: p_XmKEvprHRjSYX3Q3owLScL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有大（卒于1181年），宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 35585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BhJLYQ67yKDF1rDTswppGL
          claim_id: c_Wwv5vA9YB72q39WB2oobeM
          source_id: s_aKX7JRffcwyPMExZSgjVL2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_aKX7JRffcwyPMExZSgjVL2
            source_type: api_record
            title: 维基数据：王有大（Q45426566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426566
            external_identifier: Q45426566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
        - id: cs_HExYG3aIxUtmbUxCFIcuDQ
          claim_id: c_Wwv5vA9YB72q39WB2oobeM
          source_id: s_DjhVNrEJLUXZFs32D5yDL1
          stance: supports
          locator: CBDB:35585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DjhVNrEJLUXZFs32D5yDL1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王有大（35585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35585&o=json
            external_identifier: CBDB:35585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:15.820Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_URNGQjGW5MnQ3eAgvCHBVS
        subject_person_id: p_XmKEvprHRjSYX3Q3owLScL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1181-01-01
            latest: 1181-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBtqEszkLRiT5vmAKQMJyd
          claim_id: c_URNGQjGW5MnQ3eAgvCHBVS
          source_id: s_aKX7JRffcwyPMExZSgjVL2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_aKX7JRffcwyPMExZSgjVL2
            source_type: api_record
            title: 维基数据：王有大（Q45426566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426566
            external_identifier: Q45426566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qz4DKhrfe1kyXkAQbXimLD
        subject_person_id: p_XmKEvprHRjSYX3Q3owLScL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有大
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D63TD6hK38sauEG1YajrAw
          claim_id: c_Qz4DKhrfe1kyXkAQbXimLD
          source_id: s_DjhVNrEJLUXZFs32D5yDL1
          stance: supports
          locator: Q45426566
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pJuvE1kVAWW253a8ope2DT
          claim_id: c_Qz4DKhrfe1kyXkAQbXimLD
          source_id: s_aKX7JRffcwyPMExZSgjVL2
          stance: supports
          locator: Q45426566
          quotation: null
          interpretation_note: null
          source:
            id: s_aKX7JRffcwyPMExZSgjVL2
            source_type: api_record
            title: 维基数据：王有大（Q45426566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426566
            external_identifier: Q45426566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:15.653Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sfDDZoeMBUedc1772xg4DX
        subject_person_id: p_iwBVuUwJmW9x68bfe9dwKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XmKEvprHRjSYX3Q3owLScL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bh3SKnqtAgKiw5Wozn9mV9
          claim_id: c_sfDDZoeMBUedc1772xg4DX
          source_id: s_aKX7JRffcwyPMExZSgjVL2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_w6Q6FuQLAVtkQHjCPTkvmY
          claim_id: c_sfDDZoeMBUedc1772xg4DX
          source_id: s_519ciMBC9V6CMSxr6uQyWp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_519ciMBC9V6CMSxr6uQyWp
            source_type: api_record
            title: 维基数据：王伯庠（Q18110186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18110186
            external_identifier: Q18110186
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%AF%E5%BA%A0
        - id: cs_WpX4hrUrYeunei3MvkdxKX
          claim_id: c_sfDDZoeMBUedc1772xg4DX
          source_id: s_o6fwhY8EBNrs3ZN82gocSx
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_o6fwhY8EBNrs3ZN82gocSx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯庠（17444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json
            external_identifier: CBDB:17444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.897Z
            metadata_json: null
      object_person:
        id: p_iwBVuUwJmW9x68bfe9dwKN
        status: active
        display_name: 王伯庠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有大（卒于1181年），宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 35585） | accepted |
| death.date | 1181年 | accepted |
| name.primary | 王有大 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iwBVuUwJmW9x68bfe9dwKN | 王伯庠 | accepted |

## 外部来源

- [维基数据：王伯庠（Q18110186）](https://www.wikidata.org/wiki/Q18110186)
- [维基数据：王有大（Q45426566）](https://www.wikidata.org/wiki/Q45426566)
- [CBDB 中国历代人物传记资料库：王伯庠（17444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17444&o=json)
- [CBDB 中国历代人物传记资料库：王有大（35585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35585&o=json)
