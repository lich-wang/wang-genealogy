---
schema: wang-person/v1
id: p_ogGf8RMRHR3epSHJWTMviQ
status: active
merged_into: null
display_name: 王遵业
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bu7_gaRoVC6rMJ4E6dxrg4
        subject_person_id: p_ogGf8RMRHR3epSHJWTMviQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵业，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_OrCTqMhquxRF1jzptGQ5LN
          claim_id: c_Bu7_gaRoVC6rMJ4E6dxrg4
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KXMJDr5buP9MhAfkU1eDbF
        subject_person_id: p_ogGf8RMRHR3epSHJWTMviQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵业
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FCP3NHSFv8KeRuS7bkxzGk
          claim_id: c_KXMJDr5buP9MhAfkU1eDbF
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q17239387
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FAHG39JeMKFi1H73pC7pjq
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ogGf8RMRHR3epSHJWTMviQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cUPNEghD2tSh3APzBFznGE
          claim_id: c_FAHG39JeMKFi1H73pC7pjq
          source_id: s_SaMr791NPMb6y4iFj2yrxQ
          stance: supports
          locator: 卷三十八·王慧龙传附王瓊
          quotation: 時瓊子遵業為黃門郎……至瓊始有四子。長子遵業。
          interpretation_note: null
          source:
            id: s_SaMr791NPMb6y4iFj2yrxQ
            source_type: book
            title: 中文维基文库：魏書/卷38
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8/%E5%8D%B738
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:54.931Z
            metadata_json: null
      object_person:
        id: p_ANjVfL6Dd7HKVhAWUaTFWB
        status: active
        display_name: 王琼
        merged_into_person_id: null
  children:
    - claim:
        id: c_oMw3vRW63NAZri6CdhumiM
        subject_person_id: p_ogGf8RMRHR3epSHJWTMviQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Sne6C5MyZwDe7MZss7kard
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1GqQra8498GRYhsapv1Rt6
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
        - id: cs_WFLP2L44YqbRTmrecvoQib
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_JhD7vPo5vXGiRknBGxUfHD
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:01.555Z
            metadata_json: null
        - id: cs_F7bCguqxHPpBmaTAyCEF7w
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
        - id: cs_ELRY2eZ7PYwiEkGXEnmaYQ
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
      object_person:
        id: p_Sne6C5MyZwDe7MZss7kard
        status: active
        display_name: 王松年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遵业

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵业，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王遵业 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ANjVfL6Dd7HKVhAWUaTFWB | 王琼 | accepted |
| children | p_Sne6C5MyZwDe7MZss7kard | 王松年 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：魏書/卷38](https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8/%E5%8D%B738)
