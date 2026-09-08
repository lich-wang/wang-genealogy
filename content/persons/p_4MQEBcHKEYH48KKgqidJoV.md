---
schema: wang-person/v1
id: p_4MQEBcHKEYH48KKgqidJoV
status: active
merged_into: null
display_name: 王延望
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UeYMIAMOPP2HfOFKaMrolz
        subject_person_id: p_4MQEBcHKEYH48KKgqidJoV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延望（？—939年），五代十国時期光州固始（今河南固始）人，閩國太祖王審知之子。 永和元年（935年）被哥哥惠宗王延钧为户部尚书，后被侄子康宗王继鹏猜忌（王延钧的儿子）。通文四年（939年），巫师林兴和他关系不好，伪托鬼神之言诬称王延武、王延望兄弟有异心，于是王延望和儿子一起被康宗王继鹏杀死。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CjBOO_eP70dO6PrxborK43
          claim_id: c_UeYMIAMOPP2HfOFKaMrolz
          source_id: s_M6wIXsdBhMVP6keJpGTigA
          stance: supports
          locator: 导言
          quotation: 王延望（？—939年），五代十国時期光州固始（今河南固始）人，閩
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_M6wIXsdBhMVP6keJpGTigA
            source_type: website
            title: 中文维基百科：王延望
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E6%9C%9B
            external_identifier: Q16077334
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rW3RXHZxAzmtswLFQYGDxw
        subject_person_id: p_4MQEBcHKEYH48KKgqidJoV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延望
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8dmTnkmnweN2LP6fKDCg15
          claim_id: c_rW3RXHZxAzmtswLFQYGDxw
          source_id: s_yEkpBMg8u8QeqUWhoh1MFZ
          stance: supports
          locator: Q16077334
          quotation: null
          interpretation_note: null
          source:
            id: s_yEkpBMg8u8QeqUWhoh1MFZ
            source_type: api_record
            title: 维基数据：王延望（Q16077334）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077334
            external_identifier: Q16077334
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:05.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E6%9C%9B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oqrFtrFLAuzffYUzSevGb5
        subject_person_id: p_8YMP7N65fqbbLv9pMGphFA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4MQEBcHKEYH48KKgqidJoV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7d6jYZf2BRWbPQdEszgwh9
          claim_id: c_oqrFtrFLAuzffYUzSevGb5
          source_id: s_M6wIXsdBhMVP6keJpGTigA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_As6tWLcohcVRAZRigjVSfh
          claim_id: c_oqrFtrFLAuzffYUzSevGb5
          source_id: s_BYvayLpGj9Y1h85cB71ggG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BYvayLpGj9Y1h85cB71ggG
            source_type: api_record
            title: 维基数据：王审知（Q708354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q708354
            external_identifier: Q708354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.403Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A9%E7%9F%A5
      object_person:
        id: p_8YMP7N65fqbbLv9pMGphFA
        status: active
        display_name: 王审知
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延望（？—939年），五代十国時期光州固始（今河南固始）人，閩國太祖王審知之子。 永和元年（935年）被哥哥惠宗王延钧为户部尚书，后被侄子康宗王继鹏猜忌（王延钧的儿子）。通文四年（939年），巫师林兴和他关系不好，伪托鬼神之言诬称王延武、王延望兄弟有异心，于是王延望和儿子一起被康宗王继鹏杀死。 | accepted |
| name.primary | 王延望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8YMP7N65fqbbLv9pMGphFA | 王审知 | accepted |

## 外部来源

- [维基数据：王审知（Q708354）](https://www.wikidata.org/wiki/Q708354)
- [维基数据：王延望（Q16077334）](https://www.wikidata.org/wiki/Q16077334)
- [中文维基百科：王延望](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E6%9C%9B)
