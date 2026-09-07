---
schema: wang-person/v1
id: p_DgGDrDAArgrEURaMevB7Aa
status: active
merged_into: null
display_name: 王孟姜
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2gNREJqzrbzyD74EWktAe
        subject_person_id: p_DgGDrDAArgrEURaMevB7Aa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿的独女，王玄之、王凝之、王涣之、王肃之、王徽之、王操之、王献之的同母姐妹。 王孟姜嫁给了南阳刘畅，生子刘瑾，王孟姜的女儿嫁给了谢玄的独子谢瑍，生下谢灵运。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rGNBdhpio8ypMe7BFmWNws
          claim_id: c_i2gNREJqzrbzyD74EWktAe
          source_id: s_AFb1FHSuYVfBKL5AZw46X3
          stance: supports
          locator: Q16905978
          quotation: null
          interpretation_note: null
          source:
            id: s_AFb1FHSuYVfBKL5AZw46X3
            source_type: api_record
            title: 維基數據：王孟姜（Q16905978）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905978
            external_identifier: Q16905978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:16.383Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
        - id: cs_jTd2wOI3W1UMrjG3VykqKJ
          claim_id: c_i2gNREJqzrbzyD74EWktAe
          source_id: s_F2nF4DgXwvva6HWM92XD2z
          stance: supports
          locator: 导言
          quotation: 王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿的独女
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_F2nF4DgXwvva6HWM92XD2z
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: Q16905978
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FHE9DqZuyb6fqKdW3hf822
        subject_person_id: p_DgGDrDAArgrEURaMevB7Aa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟姜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oFYx1DyBJj7E81bDCjE8Ke
          claim_id: c_FHE9DqZuyb6fqKdW3hf822
          source_id: s_AFb1FHSuYVfBKL5AZw46X3
          stance: supports
          locator: Q16905978
          quotation: null
          interpretation_note: null
          source:
            id: s_AFb1FHSuYVfBKL5AZw46X3
            source_type: api_record
            title: 維基數據：王孟姜（Q16905978）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905978
            external_identifier: Q16905978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:16.383Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kG6umm78AqYrQH34fAWVcK
        subject_person_id: p_CDzewbvc57C3MHsFxzq2nG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DgGDrDAArgrEURaMevB7Aa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LcUzpb2xzacVv2BruJvXdK
          claim_id: c_kG6umm78AqYrQH34fAWVcK
          source_id: s_U3ygJC89TMNzm9Wt2sMRb4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_U3ygJC89TMNzm9Wt2sMRb4
            source_type: website
            title: 中文维基百科：王羲之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王羲之
            external_identifier: Q378564
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_K66WQYwQhxGG2GoLhht42E
          claim_id: c_kG6umm78AqYrQH34fAWVcK
          source_id: s_drh2iw4DqLNxZsshh35unL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_drh2iw4DqLNxZsshh35unL
            source_type: api_record
            title: 維基數據：王羲之（Q378564）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q378564
            external_identifier: Q378564
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:36.856Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BE%B2%E4%B9%8B
        - id: cs_9rSaUowSj4kqmoSFBFWWLW
          claim_id: c_kG6umm78AqYrQH34fAWVcK
          source_id: s_AFb1FHSuYVfBKL5AZw46X3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AFb1FHSuYVfBKL5AZw46X3
            source_type: api_record
            title: 維基數據：王孟姜（Q16905978）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905978
            external_identifier: Q16905978
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:16.383Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
        - id: cs_KwpHZJMR4RyAJNeBazd6kB
          claim_id: c_kG6umm78AqYrQH34fAWVcK
          source_id: s_Fr4L5WsE8VDkLidLwtgLDG
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王羲之與郗璿的獨女
          interpretation_note: null
          source:
            id: s_Fr4L5WsE8VDkLidLwtgLDG
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:59.152Z
            metadata_json: null
        - id: cs_UQbmSp1u19SsZy9qDLcBQJ
          claim_id: c_kG6umm78AqYrQH34fAWVcK
          source_id: s_obU3sWETpVMu1YP1TPQiEC
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王羲之与郗璿的独女
          interpretation_note: null
          source:
            id: s_obU3sWETpVMu1YP1TPQiEC
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_CDzewbvc57C3MHsFxzq2nG
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BsDnfJ5r1JJbjxAs2T9oQb
        subject_person_id: p_DgGDrDAArgrEURaMevB7Aa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UG1sB82x2rTcKgH95t28xD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_73YmcSYkKigUuiJ9YgSFj6
          claim_id: c_BsDnfJ5r1JJbjxAs2T9oQb
          source_id: s_obU3sWETpVMu1YP1TPQiEC
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 王孟姜嫁给了南阳刘畅
          interpretation_note: null
          source:
            id: s_obU3sWETpVMu1YP1TPQiEC
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_UG1sB82x2rTcKgH95t28xD
        status: active
        display_name: 刘畅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王孟姜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿的独女，王玄之、王凝之、王涣之、王肃之、王徽之、王操之、王献之的同母姐妹。 王孟姜嫁给了南阳刘畅，生子刘瑾，王孟姜的女儿嫁给了谢玄的独子谢瑍，生下谢灵运。 | accepted |
| name.primary | 王孟姜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CDzewbvc57C3MHsFxzq2nG | 王羲之 | accepted |
| spouses | p_UG1sB82x2rTcKgH95t28xD | 刘畅 | accepted |

## 外部来源

- [維基數據：王孟姜（Q16905978）](https://www.wikidata.org/wiki/Q16905978)
- [維基數據：王羲之（Q378564）](https://www.wikidata.org/wiki/Q378564)
- [中文维基百科：王孟姜](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C)
- [中文维基百科：王羲之](https://zh.wikipedia.org/wiki/王羲之)
