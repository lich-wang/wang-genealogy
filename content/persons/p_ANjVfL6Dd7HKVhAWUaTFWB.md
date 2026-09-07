---
schema: wang-person/v1
id: p_ANjVfL6Dd7HKVhAWUaTFWB
status: active
merged_into: null
display_name: 王琼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_scuowJXcGHvk0NbK6LPdnv
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琼，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zpzg7iTCUWdqduP1511CWw
          claim_id: c_scuowJXcGHvk0NbK6LPdnv
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
        id: c_eFaEatnK7FbKRNNf33KFsL
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琼
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K9fCLiWDAUK8ZqAhJDTa7q
          claim_id: c_eFaEatnK7FbKRNNf33KFsL
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kLHZfAPW9MyKfFH5vvCih2
        subject_person_id: p_hYY48CpTcE9XGPS8SVM5re
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_daJnPdF4tCdaSeoHc5bAeK
          claim_id: c_kLHZfAPW9MyKfFH5vvCih2
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: 条文：条文识读（独子）
          quotation: 王琼（？－？），字世珍，太原郡晋阳县（今山西省太原市）人，龙骧将军、长社侯王宝兴的独子
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
        - id: cs_8R3av1Nn8Ht9C6eD3AHpGU
          claim_id: c_kLHZfAPW9MyKfFH5vvCih2
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：条文识读（独子）
          quotation: 王琼（？－？），字世珍，太原郡晋阳县（今山西省太原市）人，龙骧将军、长社侯王宝兴的独子
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
        - id: cs_BQqWQcN7cDA3zykCZ9ADVU
          claim_id: c_kLHZfAPW9MyKfFH5vvCih2
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（独子）
          quotation: 王琼（？－？），字世珍，太原郡晋阳县（今山西省太原市）人，龙骧将军、长社侯王宝兴的独子
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
        - id: cs_9k1ESXQgaFG6Y1rvgJ1NjT
          claim_id: c_kLHZfAPW9MyKfFH5vvCih2
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 寶興，龍驤將軍。生瓊，字世珍，鎮東將軍。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_hYY48CpTcE9XGPS8SVM5re
        status: active
        display_name: 王宝兴
        merged_into_person_id: null
  children:
    - claim:
        id: c_CiH5iR65tALoVV12PDcCnz
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_28odeuchjFgPF5qvJVQBRz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v6w6Dv8AESPiAhuD8TtpuU
          claim_id: c_CiH5iR65tALoVV12PDcCnz
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（四子）
          quotation: 四子：遵業、廣業、延業、季和，號「四房王氏」
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_28odeuchjFgPF5qvJVQBRz
        status: active
        display_name: 王廣業
        merged_into_person_id: null
    - claim:
        id: c_b6oZYf897E1JQwj3QA6XmM
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ZEUqRShixxhV838T7zkdNM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rAjF1kbZRzPvoDpf2e9Jm6
          claim_id: c_b6oZYf897E1JQwj3QA6XmM
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（四子）
          quotation: 四子：遵業、廣業、延業、季和，號「四房王氏」
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_ZEUqRShixxhV838T7zkdNM
        status: active
        display_name: 王延業
        merged_into_person_id: null
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
        id: p_ogGf8RMRHR3epSHJWTMviQ
        status: active
        display_name: 王遵业
        merged_into_person_id: null
    - claim:
        id: c_81i5KAarKHTQCpzDmcazoC
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GoAWbsZ29A371oyH9ZFDFD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3611ygKbM2ZZnopEcR8DDJ
          claim_id: c_81i5KAarKHTQCpzDmcazoC
          source_id: s_hhLcNzPQjDh7pM9akAz3jT
          stance: supports
          locator: 王琼传
          quotation: 至瓊始有四子……延業弟季和。
          interpretation_note: 本传依次列王琼四子遵业、广业、延业、季和。
          source:
            id: s_hhLcNzPQjDh7pM9akAz3jT
            source_type: book
            title: 中文维基文库：北史/卷035
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8C%97%E5%8F%B2/%E5%8D%B7035
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.899Z
            metadata_json: null
      object_person:
        id: p_GoAWbsZ29A371oyH9ZFDFD
        status: active
        display_name: 王季和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琼，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王琼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hYY48CpTcE9XGPS8SVM5re | 王宝兴 | accepted |
| children | p_28odeuchjFgPF5qvJVQBRz | 王廣業 | accepted |
| children | p_ZEUqRShixxhV838T7zkdNM | 王延業 | accepted |
| children | p_ogGf8RMRHR3epSHJWTMviQ | 王遵业 | accepted |
| children | p_GoAWbsZ29A371oyH9ZFDFD | 王季和 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：北史/卷035](https://zh.wikisource.org/wiki/%E5%8C%97%E5%8F%B2/%E5%8D%B7035)
- [中文维基文库：魏書/卷38](https://zh.wikisource.org/wiki/%E9%AD%8F%E6%9B%B8/%E5%8D%B738)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
