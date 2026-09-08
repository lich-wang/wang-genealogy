---
schema: wang-person/v1
id: p_6P1fo1PnFdXvCWVqBBsEtM
status: active
merged_into: null
display_name: 王铨
cbdb_id: 31160
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZPeFHsQzJGx7k6w2jdRWX
        subject_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铨，陳人物。CBDB 记录其籍贯记录为江都。中国历代人物传记资料库（CBDB）以人物编号 31160 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ESokYE9yWbEZzdQPdGQ5Y2
          claim_id: c_iZPeFHsQzJGx7k6w2jdRWX
          source_id: s_PRRXHEuPGqKASeKGJ19KWL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PRRXHEuPGqKASeKGJ19KWL
            source_type: api_record
            title: 维基数据：王铨（Q38975748）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975748
            external_identifier: Q38975748
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
        - id: cs_FjfUYYgBrHSU9TUQEoDHma
          claim_id: c_iZPeFHsQzJGx7k6w2jdRWX
          source_id: s_MfSv1119UsAMQ4JVGzLWbT
          stance: supports
          locator: CBDB:31160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MfSv1119UsAMQ4JVGzLWbT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（31160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31160&o=json
            external_identifier: CBDB:31160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:31:07.301Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pB9zx9GijLTCTgjPhBcivQ
        subject_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SZC6g3VAc2RvK2g5vTvQSw
          claim_id: c_pB9zx9GijLTCTgjPhBcivQ
          source_id: s_PRRXHEuPGqKASeKGJ19KWL
          stance: supports
          locator: Q38975748
          quotation: null
          interpretation_note: null
          source:
            id: s_PRRXHEuPGqKASeKGJ19KWL
            source_type: api_record
            title: 维基数据：王铨（Q38975748）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975748
            external_identifier: Q38975748
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
        - id: cs_u492poULqNvFsrT4V2hN1y
          claim_id: c_pB9zx9GijLTCTgjPhBcivQ
          source_id: s_MfSv1119UsAMQ4JVGzLWbT
          stance: supports
          locator: Q38975748
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MCz7avmPdqjG8opHULRh2N
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XyYTtNL1SZFchkSK3fsgmT
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_KxDEdqQFFd8VktVQVuGfH2
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_PRRXHEuPGqKASeKGJ19KWL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PRRXHEuPGqKASeKGJ19KWL
            source_type: api_record
            title: 维基数据：王铨（Q38975748）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975748
            external_identifier: Q38975748
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
        - id: cs_Cjo9gG6dySxHttVLQeg7xh
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: 条文：之子/之女
          quotation: 王銓，字公衡，琅邪郡临沂县（今山东省临沂西北）人，中国南北朝时南朝梁政治人物，王份之孙，王琳长子
          interpretation_note: null
          source:
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_J834gYrU1F2b3b6hCDtUW2
        status: active
        display_name: 王琳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aTrm1EFBUv3vJgzgGQEFSx
        subject_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iyEfgfMduiPMH61WeiBkbD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8zeCKaMhwmh9DZBnBwK4Re
          claim_id: c_aTrm1EFBUv3vJgzgGQEFSx
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶梁武帝之女永嘉公主为妻
          interpretation_note: null
          source:
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_iyEfgfMduiPMH61WeiBkbD
        status: active
        display_name: 永嘉公主
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ozDzgQGhtK54U5KgHvg68o
        subject_person_id: p_J1Ags3R9DpGyBdsdxESQDz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n3uxi9Us4TN4NssG6y4kAo
          claim_id: c_ozDzgQGhtK54U5KgHvg68o
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王份之孙，王琳长子
          interpretation_note: null
          source:
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_J1Ags3R9DpGyBdsdxESQDz
        status: active
        display_name: 王份
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王铨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铨，陳人物。CBDB 记录其籍贯记录为江都。中国历代人物传记资料库（CBDB）以人物编号 31160 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王铨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J834gYrU1F2b3b6hCDtUW2 | 王琳 | accepted |
| spouses | p_iyEfgfMduiPMH61WeiBkbD | 永嘉公主 | accepted |
| ancestors | p_J1Ags3R9DpGyBdsdxESQDz | 王份 | accepted |

## 外部来源

- [维基数据：王琳（Q22814773）](https://www.wikidata.org/wiki/Q22814773)
- [维基数据：王铨（Q38975748）](https://www.wikidata.org/wiki/Q38975748)
- [中文维基百科：王銓 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81))
- [CBDB 中国历代人物传记资料库：王銓（31160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31160&o=json)
