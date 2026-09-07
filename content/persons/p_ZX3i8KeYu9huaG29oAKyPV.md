---
schema: wang-person/v1
id: p_ZX3i8KeYu9huaG29oAKyPV
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ONARZi3tdFGmEfHb_ZxUBl
        subject_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓（1432年—1504年），字用之，号静菴，浙江嚴州府淳安縣人，明朝政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TQprSLPTeFCIZb-ciERJMd
          claim_id: c_ONARZi3tdFGmEfHb_ZxUBl
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 导言
          quotation: 王賓（1432年—1504年），字用之，号静菴，浙江嚴州府淳安縣
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_51R6U3vv6BiaHCGRrVJKNa
        subject_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ri2h4tmjX5m7VMcutQzFcS
          claim_id: c_51R6U3vv6BiaHCGRrVJKNa
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: Q18235151
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ivaku7eY8TT8pjYq2TLQ58
        subject_person_id: p_fg3A6ozwkCnoa7hQgnb5JN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1nJvH4EkiC15h85bvN9ZyX
          claim_id: c_ivaku7eY8TT8pjYq2TLQ58
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王志善，字克复，别号松坡，
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_fg3A6ozwkCnoa7hQgnb5JN
        status: active
        display_name: 王志善
        merged_into_person_id: null
  children:
    - claim:
        id: c_7StSocKWZGg7banmLx8aq6
        subject_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GkufvsZkGcAKuMeD9n4BUJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XnEdMgVwwCBtxxW8enCSUx
          claim_id: c_7StSocKWZGg7banmLx8aq6
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：信息框 親屬（子）
          quotation: （子）王子言
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_GkufvsZkGcAKuMeD9n4BUJ
        status: active
        display_name: 王子言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HCSXSPQTZEeY4AzZMWKijp
        subject_person_id: p_a1xH2WHo42vuuwF8VvDR16
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_11JMYC858BsGbAVMZETEgy
          claim_id: c_HCSXSPQTZEeY4AzZMWKijp
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖王本宗，
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_a1xH2WHo42vuuwF8VvDR16
        status: active
        display_name: 王本宗
        merged_into_person_id: null
    - claim:
        id: c_d6aqxr4ma49im717MD9WSF
        subject_person_id: p_QgYFhbrxdQAimCDCpKJLAd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZX3i8KeYu9huaG29oAKyPV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UfEomMyD72wKpvuoEz4ujX
          claim_id: c_d6aqxr4ma49im717MD9WSF
          source_id: s_2F98dM1oBn675do3vNM5Du
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王榮，祖王本宗，
          interpretation_note: null
          source:
            id: s_2F98dM1oBn675do3vNM5Du
            source_type: website
            title: 中文维基百科：王賓 (成化丙戌進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_QgYFhbrxdQAimCDCpKJLAd
        status: active
        display_name: 王榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賓（1432年—1504年），字用之，号静菴，浙江嚴州府淳安縣人，明朝政治人物。 | accepted |
| name.primary | 王賓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fg3A6ozwkCnoa7hQgnb5JN | 王志善 | accepted |
| children | p_GkufvsZkGcAKuMeD9n4BUJ | 王子言 | accepted |
| ancestors | p_a1xH2WHo42vuuwF8VvDR16 | 王本宗 | accepted |
| ancestors | p_QgYFhbrxdQAimCDCpKJLAd | 王榮 | accepted |

## 外部来源

- [中文维基百科：王賓 (成化丙戌進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%93_(%E6%88%90%E5%8C%96%E4%B8%99%E6%88%8C%E9%80%B2%E5%A3%AB))
