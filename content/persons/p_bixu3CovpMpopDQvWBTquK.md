---
schema: wang-person/v1
id: p_bixu3CovpMpopDQvWBTquK
status: active
merged_into: null
display_name: 王世芳
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1yAKVk9NDJU9QLcbEjzf6v
        subject_person_id: p_bixu3CovpMpopDQvWBTquK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jiWfXZWLzYDivb7E5pU8ct
          claim_id: c_1yAKVk9NDJU9QLcbEjzf6v
          source_id: s_LjhSmXpHAoUVyb4YdKhvcA
          stance: supports
          locator: CBDB:309378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309378）
          source: &a1
            id: s_LjhSmXpHAoUVyb4YdKhvcA
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 309378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json
            external_identifier: CBDB:309378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hnNRD5QUFUP83Ub99ddVgi
        subject_person_id: p_bixu3CovpMpopDQvWBTquK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳，明人物。嘉靖三十八年進士，籍贯崑山，曾任提學副使。（中国历代人物传记资料库 CBDB 309378）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ed8j4AWeGO8y3IVYq7Im1w
          claim_id: c_hnNRD5QUFUP83Ub99ddVgi
          source_id: s_LjhSmXpHAoUVyb4YdKhvcA
          stance: supports
          locator: CBDB:309378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lqpDc9wCsunApn11SyWBPx
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bixu3CovpMpopDQvWBTquK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d9HikZ_SKyXglwOyKRQxyd
          claim_id: c_lqpDc9wCsunApn11SyWBPx
          source_id: s_Gxxn9ZyWFRhw25qJ0KUNgX
          stance: supports
          locator: CBDB：兄弟 王士骐（34717）之父／母 王世贞
          quotation: null
          interpretation_note: 由兄弟关系推断：王世芳 与 王士骐 为同胞（CBDB 记「弟」），王士骐 之父／母即 王世芳 之父／母。
          source:
            id: s_Gxxn9ZyWFRhw25qJ0KUNgX
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 309378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json
            external_identifier: CBDB:309378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
    - claim:
        id: c_ejkhjrObmjFAr55vtdu53d
        subject_person_id: p_rhWqaakmtKs2T99dEuZoHh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bixu3CovpMpopDQvWBTquK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IuPPkoowzmr_bu7ikR4c1i
          claim_id: c_ejkhjrObmjFAr55vtdu53d
          source_id: s_Gxxn9ZyWFRhw25qJ0KUNgX
          stance: supports
          locator: CBDB：兄弟 王世懋（34719）之父／母 王忬
          quotation: null
          interpretation_note: 由兄弟关系推断：王世芳 与 王世懋 为同胞（CBDB 记「弟」），王世懋 之父／母即 王世芳 之父／母。
          source:
            id: s_Gxxn9ZyWFRhw25qJ0KUNgX
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 309378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json
            external_identifier: CBDB:309378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhWqaakmtKs2T99dEuZoHh
        status: active
        display_name: 王忬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fhByVCGtFQwNcd8uBsk9iK
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bixu3CovpMpopDQvWBTquK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSDlBXHFdWfqde3oh5FiHy
          claim_id: c_fhByVCGtFQwNcd8uBsk9iK
          source_id: s_Gxxn9ZyWFRhw25qJ0KUNgX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34717 王世貞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gxxn9ZyWFRhw25qJ0KUNgX
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 309378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json
            external_identifier: CBDB:309378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dh9CnuPaa166GMCnTFvEL4
        status: active
        display_name: 王士骐
        merged_into_person_id: null
    - claim:
        id: c_Ml-ygfp_5ZE7-D21D3SJJX
        subject_person_id: p_38CvMQkfBCMzR3DNrBhBQJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bixu3CovpMpopDQvWBTquK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xUYooOAy9K3aaDaO_BGYs
          claim_id: c_Ml-ygfp_5ZE7-D21D3SJJX
          source_id: s_Gxxn9ZyWFRhw25qJ0KUNgX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34719 王世懋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gxxn9ZyWFRhw25qJ0KUNgX
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 309378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json
            external_identifier: CBDB:309378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38CvMQkfBCMzR3DNrBhBQJ
        status: active
        display_name: 王世懋
        merged_into_person_id: null
---

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| bio.summary | 王世芳，明人物。嘉靖三十八年進士，籍贯崑山，曾任提學副使。（中国历代人物传记资料库 CBDB 309378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| parents | p_rhWqaakmtKs2T99dEuZoHh | 王忬 | accepted |
| other | p_Dh9CnuPaa166GMCnTFvEL4 | 王士骐 | accepted |
| other | p_38CvMQkfBCMzR3DNrBhBQJ | 王世懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 309378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309378&o=json)
