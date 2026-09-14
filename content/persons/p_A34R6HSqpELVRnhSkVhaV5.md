---
schema: wang-person/v1
id: p_A34R6HSqpELVRnhSkVhaV5
status: active
merged_into: null
display_name: 王豫
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HoLaiB9ysrYZv6ifEu5n56
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1xMSTB9bGvAdwRF1HXS6jK
          claim_id: c_HoLaiB9ysrYZv6ifEu5n56
          source_id: s_PuzVFzyRPrwAiF5boBQEMS
          stance: supports
          locator: CBDB:258706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258706）
          source: &a1
            id: s_PuzVFzyRPrwAiF5boBQEMS
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 258706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json
            external_identifier: CBDB:258706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBhdSC5SwpU93HbbEumSf2
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫，明人物。成化二十三年進士，籍贯祥符，曾任布政使司參議。（中国历代人物传记资料库 CBDB 258706）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TLpPn8_O7BstvmLXXf1WrN
          claim_id: c_VBhdSC5SwpU93HbbEumSf2
          source_id: s_PuzVFzyRPrwAiF5boBQEMS
          stance: supports
          locator: CBDB:258706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DwAf6mDLcgpvKyDy2XyTm1
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vOh2idUjEzVDlEDdzOhDN1
          claim_id: c_DwAf6mDLcgpvKyDy2XyTm1
          source_id: s_PuzVFzyRPrwAiF5boBQEMS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RtbMaDgB4aPoZ2sWestmc6
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_w60uwSbfTeVvOu1EPrOvMW
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33T6YpPc61tFcacoU2yqF2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TYzEQEKGrZaFOXDXk0baJ
          claim_id: c_w60uwSbfTeVvOu1EPrOvMW
          source_id: s_p7RayLlTWlMSWExCT1bd2y
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綉 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王綉 之父／母。
          source:
            id: s_p7RayLlTWlMSWExCT1bd2y
            source_type: api_record
            title: 中国历代人物传记资料库：王綉（CBDB 258715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258715&o=json
            external_identifier: CBDB:258715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33T6YpPc61tFcacoU2yqF2
        status: active
        display_name: 王綉
        merged_into_person_id: null
    - claim:
        id: c_92ZSGmK_KaLAK-e6Pdc4_d
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_49MyH599Aa41aGHfKtzBKP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tq65_GmDIyaRhQ_Fsv6HYd
          claim_id: c_92ZSGmK_KaLAK-e6Pdc4_d
          source_id: s_aWScdxHhcmRt4C-Qxo8FEB
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王緯 为同胞（CBDB 记「弟」），王緯 之父／母即 王紳 之父／母。
          source:
            id: s_aWScdxHhcmRt4C-Qxo8FEB
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 258710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258710&o=json
            external_identifier: CBDB:258710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_49MyH599Aa41aGHfKtzBKP
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_K0EmRAlHGA3viaST9mHLWz
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6hyLnzmCeQM9LAUbgorHGm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Bwg3iwd826oHhnlso1ZOV
          claim_id: c_K0EmRAlHGA3viaST9mHLWz
          source_id: s_Fw70FQICWD69wX0v5eI_UX
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綺 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王綺 之父／母。
          source:
            id: s_Fw70FQICWD69wX0v5eI_UX
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 258714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258714&o=json
            external_identifier: CBDB:258714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6hyLnzmCeQM9LAUbgorHGm
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_qlKlRBTjPxiUNeuNJKMPvZ
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8gBmg8AVP1As7CrZYfp7eJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BU9GPOCVzcU4qxW77hzxt2
          claim_id: c_qlKlRBTjPxiUNeuNJKMPvZ
          source_id: s_eHxDhQVxxOOItR_BVIjQ4_
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紵 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王紵 之父／母。
          source:
            id: s_eHxDhQVxxOOItR_BVIjQ4_
            source_type: api_record
            title: 中国历代人物传记资料库：王紵（CBDB 258719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258719&o=json
            external_identifier: CBDB:258719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8gBmg8AVP1As7CrZYfp7eJ
        status: active
        display_name: 王紵
        merged_into_person_id: null
    - claim:
        id: c_F55vsm43J9TN8VuWw62prY
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pKViTjExNDs4uameDHUud
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2M1QPfkaSPGQwN12vHX0I4
          claim_id: c_F55vsm43J9TN8VuWw62prY
          source_id: s_mzG4hJnuRG2jfvrNKgjLrV
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬 与 王緯 为同胞（CBDB 记「弟」），王緯 之父／母即 王綬 之父／母。
          source:
            id: s_mzG4hJnuRG2jfvrNKgjLrV
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 258711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258711&o=json
            external_identifier: CBDB:258711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8pKViTjExNDs4uameDHUud
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_bu_nN8kBJwfOBn1kk7tUWV
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9im_k50PKggkgwDKKw5q1f
          claim_id: c_bu_nN8kBJwfOBn1kk7tUWV
          source_id: s_WJlrefy4QWevIaETzEYtpi
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紀 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王紀 之父／母。
          source:
            id: s_WJlrefy4QWevIaETzEYtpi
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 258716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json
            external_identifier: CBDB:258716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D4KBJwKfJ7VCaXB4ym7dw3
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_cvTqbitRvjXIUnJ7CUShem
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZCf31feEsDtoKDbRT065BQ
          claim_id: c_cvTqbitRvjXIUnJ7CUShem
          source_id: s_zk0Dkm-fhSVSrEva58TvSu
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王纁 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王纁 之父／母。
          source:
            id: s_zk0Dkm-fhSVSrEva58TvSu
            source_type: api_record
            title: 中国历代人物传记资料库：王纁（CBDB 258717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json
            external_identifier: CBDB:258717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DoLeBbmsD7oxzdtpw4u7J8
        status: active
        display_name: 王纁
        merged_into_person_id: null
    - claim:
        id: c_af5fUHWsPU7WReI8pURj6T
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G7xLPmBQAwFK6Z31duBMmd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQmz8ZPRnu7Tn4DKzWnW2y
          claim_id: c_af5fUHWsPU7WReI8pURj6T
          source_id: s__UZh9jbP09gdmbxlXtxl7l
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王緯 为同胞（CBDB 记「弟」），王緯 之父／母即 王經 之父／母。
          source:
            id: s__UZh9jbP09gdmbxlXtxl7l
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 258709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258709&o=json
            external_identifier: CBDB:258709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G7xLPmBQAwFK6Z31duBMmd
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_NZ2_Uril4hUccrL0I1n4hi
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QKcVBKZuWLzoUFo8WnitgL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jqn2MGG6e79ilYv8uB3fv-
          claim_id: c_NZ2_Uril4hUccrL0I1n4hi
          source_id: s_-Y73-VgffFpGP_yY0BtkCN
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紘 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王紘 之父／母。
          source:
            id: s_-Y73-VgffFpGP_yY0BtkCN
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 258718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json
            external_identifier: CBDB:258718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKcVBKZuWLzoUFo8WnitgL
        status: active
        display_name: 王紘
        merged_into_person_id: null
    - claim:
        id: c_3lOolkdA0FVy97CRf62NbV
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WxejvxAxttqaMQAoyr4RrF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pfc9RiLlNy7-9oYzrYYr2w
          claim_id: c_3lOolkdA0FVy97CRf62NbV
          source_id: s_aEpqHpGYLFbwY1OXnAmPhy
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹 与 王緯 为同胞（CBDB 记「弟」），王緯 之父／母即 王紹 之父／母。
          source:
            id: s_aEpqHpGYLFbwY1OXnAmPhy
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 258712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json
            external_identifier: CBDB:258712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WxejvxAxttqaMQAoyr4RrF
        status: active
        display_name: 王紹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | 王豫，明人物。成化二十三年進士，籍贯祥符，曾任布政使司參議。（中国历代人物传记资料库 CBDB 258706） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RtbMaDgB4aPoZ2sWestmc6 | 王緯 | accepted |
| children | p_33T6YpPc61tFcacoU2yqF2 | 王綉 | accepted |
| children | p_49MyH599Aa41aGHfKtzBKP | 王紳 | accepted |
| children | p_6hyLnzmCeQM9LAUbgorHGm | 王綺 | accepted |
| children | p_8gBmg8AVP1As7CrZYfp7eJ | 王紵 | accepted |
| children | p_8pKViTjExNDs4uameDHUud | 王綬 | accepted |
| children | p_D4KBJwKfJ7VCaXB4ym7dw3 | 王紀 | accepted |
| children | p_DoLeBbmsD7oxzdtpw4u7J8 | 王纁 | accepted |
| children | p_G7xLPmBQAwFK6Z31duBMmd | 王經 | accepted |
| children | p_QKcVBKZuWLzoUFo8WnitgL | 王紘 | accepted |
| children | p_WxejvxAxttqaMQAoyr4RrF | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 258718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json)
- [中国历代人物传记资料库：王紀（CBDB 258716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json)
- [中国历代人物传记资料库：王經（CBDB 258709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258709&o=json)
- [中国历代人物传记资料库：王綺（CBDB 258714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258714&o=json)
- [中国历代人物传记资料库：王紹（CBDB 258712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json)
- [中国历代人物传记资料库：王紳（CBDB 258710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258710&o=json)
- [中国历代人物传记资料库：王綬（CBDB 258711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258711&o=json)
- [中国历代人物传记资料库：王綉（CBDB 258715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258715&o=json)
- [中国历代人物传记资料库：王纁（CBDB 258717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json)
- [中国历代人物传记资料库：王豫（CBDB 258706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json)
- [中国历代人物传记资料库：王紵（CBDB 258719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258719&o=json)
