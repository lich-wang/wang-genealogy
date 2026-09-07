---
schema: wang-person/v1
id: p_JcvnUMHyH7VB1FB3Nnqkw8
status: active
merged_into: null
display_name: 王法慧
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VWutQFY1iIoYMAsDHorYjt
        subject_person_id: p_JcvnUMHyH7VB1FB3Nnqkw8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法慧（360年—380年10月24日），太原郡晋阳县（今山西省太原市）人，晋陵郡太守王蕴之女，哀靖皇后王穆之的侄女，晋孝武帝司马曜皇后。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Rr5BVhtsDfaFOdtrwc7hFs
          claim_id: c_VWutQFY1iIoYMAsDHorYjt
          source_id: s_czGMdSxWMMypTBvxBDwmR3
          stance: supports
          locator: 导言
          quotation: 王法慧（360年—380年10月24日），太原郡晋阳县（今山西省
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_czGMdSxWMMypTBvxBDwmR3
            source_type: website
            title: 中文维基百科：王法慧
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%95%E6%85%A7
            external_identifier: Q2193701
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RGtot97NwKYfs7jAomxETn
        subject_person_id: p_JcvnUMHyH7VB1FB3Nnqkw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法慧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tZzPT4EUGjA9F7CtqgnN4d
          claim_id: c_RGtot97NwKYfs7jAomxETn
          source_id: s_8oV4c5Sb9aHsvbqA95tAgV
          stance: supports
          locator: Q2193701
          quotation: null
          interpretation_note: null
          source:
            id: s_8oV4c5Sb9aHsvbqA95tAgV
            source_type: api_record
            title: 维基数据：王法慧（Q2193701）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193701
            external_identifier: Q2193701
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:31.950Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%95%E6%85%A7
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q2T6PsWXViMfDyHbYLAVMJ
        subject_person_id: p_qJsVZWZ5yFRfpnVBWG3GAo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JcvnUMHyH7VB1FB3Nnqkw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Vw1TKveqeC9vVb24sMeLzx
          claim_id: c_q2T6PsWXViMfDyHbYLAVMJ
          source_id: s_8oV4c5Sb9aHsvbqA95tAgV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8oV4c5Sb9aHsvbqA95tAgV
            source_type: api_record
            title: 维基数据：王法慧（Q2193701）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193701
            external_identifier: Q2193701
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:31.950Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%95%E6%85%A7
        - id: cs_5pYBxK8hKGtjUW2dCMrH14
          claim_id: c_q2T6PsWXViMfDyHbYLAVMJ
          source_id: s_usGAPGrKwFpg2u9oDvVEtL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_usGAPGrKwFpg2u9oDvVEtL
            source_type: api_record
            title: 维基数据：王蘊 (晉朝)（Q15919655）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15919655
            external_identifier: Q15919655
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:10.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%98%8A_(%E6%9D%B1%E6%99%89)
      object_person:
        id: p_qJsVZWZ5yFRfpnVBWG3GAo
        status: active
        display_name: 王蘊 (晉朝)
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_rQz5ZLHU9t9cGmQKi1byYx
        subject_person_id: p_JcvnUMHyH7VB1FB3Nnqkw8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oH4Yn6DX46rXVxc6mRSMbJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Zm2Roi3MkeK7tTu3ndmu5z
          claim_id: c_rQz5ZLHU9t9cGmQKi1byYx
          source_id: s_zv17AvQzbB9QZu1UPnFo5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zv17AvQzbB9QZu1UPnFo5P
            source_type: api_record
            title: 维基数据：晋孝武帝（Q7402）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7402
            external_identifier: Q7402
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:07.981Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%99%8B%E5%AD%9D%E6%AD%A6%E5%B8%9D
        - id: cs_fJWcCpmJiMjrh5rdn6v5Ze
          claim_id: c_rQz5ZLHU9t9cGmQKi1byYx
          source_id: s_8oV4c5Sb9aHsvbqA95tAgV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8oV4c5Sb9aHsvbqA95tAgV
            source_type: api_record
            title: 维基数据：王法慧（Q2193701）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2193701
            external_identifier: Q2193701
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:31.950Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%95%E6%85%A7
      object_person:
        id: p_oH4Yn6DX46rXVxc6mRSMbJ
        status: active
        display_name: 司马曜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王法慧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王法慧（360年—380年10月24日），太原郡晋阳县（今山西省太原市）人，晋陵郡太守王蕴之女，哀靖皇后王穆之的侄女，晋孝武帝司马曜皇后。 | accepted |
| name.primary | 王法慧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qJsVZWZ5yFRfpnVBWG3GAo | 王蘊 (晉朝) | accepted |
| spouses | p_oH4Yn6DX46rXVxc6mRSMbJ | 司马曜 | accepted |

## 外部来源

- [维基数据：晋孝武帝（Q7402）](https://www.wikidata.org/wiki/Q7402)
- [维基数据：王法慧（Q2193701）](https://www.wikidata.org/wiki/Q2193701)
- [维基数据：王蘊 (晉朝)（Q15919655）](https://www.wikidata.org/wiki/Q15919655)
- [中文维基百科：王法慧](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%95%E6%85%A7)
