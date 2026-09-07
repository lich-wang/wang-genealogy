---
schema: wang-person/v1
id: p_XJ584hRRgmwC1emz21vE1F
status: active
merged_into: null
display_name: 王鞏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7_XWd83iCUuvKyZqqJvmqz
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏（1048年—1118年），字定國，號清虛居士，魏州（大名府，鄉貫为今山東莘县）人。北宋詩人、畫家。 宰相王旦之孫，工部尚書王素第四子。庆历八年（1048年）出生。以恩荫补为校书郎。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XhAx0tYJs5UaJ0HU68ANrO
          claim_id: c_7_XWd83iCUuvKyZqqJvmqz
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 导言
          quotation: 王鞏（1048年—1118年），字定國，號清虛居士，魏州（大名府
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rorBxNSs5nHMsYXZRXDxt9
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mhncYuSkx2FEjEJW3RDin1
          claim_id: c_rorBxNSs5nHMsYXZRXDxt9
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: Q45365253
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w795bZHpvgY88gPQhtabp4
        subject_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XJ584hRRgmwC1emz21vE1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJnzb3BQFQzxmjCicx2drH
          claim_id: c_w795bZHpvgY88gPQhtabp4
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（第四子）
          quotation: 宰相王旦之孫，工部尚書王素第四子。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_nA2nodsbTFF9HKjzoMhUNw
        status: active
        display_name: 王素
        merged_into_person_id: null
  children:
    - claim:
        id: c_ep5vEwFc2TMf2k3gGwVCiA
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_obXQJZ7jNDM9WyzWY4SasL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8aXUNGwCtT3FVFdYU6QxV
          claim_id: c_ep5vEwFc2TMf2k3gGwVCiA
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（生子）
          quotation: 歌妓宇文柔奴（別名寓娘）毅然隨行到嶺南，並生子王皋。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_obXQJZ7jNDM9WyzWY4SasL
        status: active
        display_name: 王皋
        merged_into_person_id: null
    - claim:
        id: c_QNEtNiWuxumKBCY9MXQdXV
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_HA71wth9BB25s3Mph3tt6P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FeDMQQ7BRgtv2qxxTyQ3y6
          claim_id: c_QNEtNiWuxumKBCY9MXQdXV
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 巩生四子，即王皋、王由、王时、王奇。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_HA71wth9BB25s3Mph3tt6P
        status: active
        display_name: 王由
        merged_into_person_id: null
    - claim:
        id: c_EP9MmXVeDH2g917pP2GQCi
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mEnh9yUtJdk6JwhzazwXTr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ffWBYSKb4g22zFwwF9yrN
          claim_id: c_EP9MmXVeDH2g917pP2GQCi
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 巩生四子，即王皋、王由、王时、王奇。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_mEnh9yUtJdk6JwhzazwXTr
        status: active
        display_name: 王时
        merged_into_person_id: null
    - claim:
        id: c_7ycAvNETUfBsGnCBPbxY2C
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KFHeesC5Hc2pU5pvGEHQNa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t51yBRYj4SPEQy3XpFZ32B
          claim_id: c_7ycAvNETUfBsGnCBPbxY2C
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 巩生四子，即王皋、王由、王时、王奇。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_KFHeesC5Hc2pU5pvGEHQNa
        status: active
        display_name: 王奇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_v4wvEUZ9gZNQBP7aoeGZ7Y
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yYsiEkGgyLkBXnHQZBj6aL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxGs21YjC2bDBz3DvCF5PR
          claim_id: c_v4wvEUZ9gZNQBP7aoeGZ7Y
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：妻/娶
          quotation: 娶張方平之女為妻
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_yYsiEkGgyLkBXnHQZBj6aL
        status: active
        display_name: 張方平
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_s1BE32AvFXZLbCxhDUzKgB
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJ584hRRgmwC1emz21vE1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDScHXX7kHq9pjfo1myKSn
          claim_id: c_s1BE32AvFXZLbCxhDUzKgB
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（孫）（2世）
          quotation: 宰相王旦之孫，工部尚書王素第四子。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_dzQsozLMz4kdNcHPqJVsZP
        status: active
        display_name: 王旦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鞏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鞏（1048年—1118年），字定國，號清虛居士，魏州（大名府，鄉貫为今山東莘县）人。北宋詩人、畫家。 宰相王旦之孫，工部尚書王素第四子。庆历八年（1048年）出生。以恩荫补为校书郎。 | accepted |
| name.primary | 王鞏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nA2nodsbTFF9HKjzoMhUNw | 王素 | accepted |
| children | p_obXQJZ7jNDM9WyzWY4SasL | 王皋 | accepted |
| children | p_HA71wth9BB25s3Mph3tt6P | 王由 | accepted |
| children | p_mEnh9yUtJdk6JwhzazwXTr | 王时 | accepted |
| children | p_KFHeesC5Hc2pU5pvGEHQNa | 王奇 | accepted |
| spouses | p_yYsiEkGgyLkBXnHQZBj6aL | 張方平 | accepted |
| ancestors | p_dzQsozLMz4kdNcHPqJVsZP | 王旦 | accepted |

## 外部来源

- [中文维基百科：王鞏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F)
