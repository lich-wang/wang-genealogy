---
schema: wang-person/v1
id: p_nMTfTHCiK68GBCA9Zmyxva
status: active
merged_into: null
display_name: 王光祖
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jNdPHrzagHg8BXi6KKArXP
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYTgjWLvEU7RjigiqfR2Gf
          claim_id: c_jNdPHrzagHg8BXi6KKArXP
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
          stance: supports
          locator: CBDB:126518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126518）
          source: &a1
            id: s_HPFcBEdijZkX6XL8n8mNGk
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 126518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126518&o=json
            external_identifier: CBDB:126518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8Fsx9Pccq9AyDETc2h594X
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LBzuEws6QLryJQpH1kstX4
          claim_id: c_8Fsx9Pccq9AyDETc2h594X
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_okzAg8f21XhVqEN6h7QN5Y
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g7CxBKKGDF7riaCpWdh7Fu
          claim_id: c_okzAg8f21XhVqEN6h7QN5Y
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bt25vKEZCrPVVH9359ZxBT
        subject_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖（1518年—1581年），明人物。明清進士進士，籍贯黎城，入仕進士，曾任知縣、知府。（中国历代人物传记资料库 CBDB 126518）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qHIRP_4B4KZtzVEojtJ6mN
          claim_id: c_bt25vKEZCrPVVH9359ZxBT
          source_id: s_HPFcBEdijZkX6XL8n8mNGk
          stance: supports
          locator: CBDB:126518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Eiy04wvHWmxUoBU2BjnMpB
        subject_person_id: p_aJ5J2cPFB2J5wBLDS27uNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rPIF3nYphp0RSct3YnC6Dj
          claim_id: c_Eiy04wvHWmxUoBU2BjnMpB
          source_id: s_9prG6V1jQnKi6tZsnfkkNr
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9prG6V1jQnKi6tZsnfkkNr
            source_type: api_record
            title: 中国历代人物传记资料库：王煩（CBDB 306647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306647&o=json
            external_identifier: CBDB:306647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aJ5J2cPFB2J5wBLDS27uNZ
        status: active
        display_name: 王煩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AcBuEpCB17CKw_g_WkTtap
        subject_person_id: p_j2Qr14aEdifzKDjQ5pCzA6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR9EAPUHiCxBNbf-jw9Oqo
          claim_id: c_AcBuEpCB17CKw_g_WkTtap
          source_id: s_Rma8ozTsMazQKeq5mbM1x3
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rma8ozTsMazQKeq5mbM1x3
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 306646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306646&o=json
            external_identifier: CBDB:306646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j2Qr14aEdifzKDjQ5pCzA6
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_bxH8ukUTo7inWf-WG0BeYm
        subject_person_id: p_PADhC3kPizKDbh6s6tqmfH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIGR9OVuX2BfzTfJlMyCBi
          claim_id: c_bxH8ukUTo7inWf-WG0BeYm
          source_id: s_brMtNfQPBQBrG9k3XkY9v7
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_brMtNfQPBQBrG9k3XkY9v7
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 306645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306645&o=json
            external_identifier: CBDB:306645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PADhC3kPizKDbh6s6tqmfH
        status: active
        display_name: 王玘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_3BHoDVWuXu1a1QvjVdvAon
        subject_person_id: p_RvwBFNFYPjXE486YSxqqGH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yM4j0sKGFwysy_dA1Z2DBm
          claim_id: c_3BHoDVWuXu1a1QvjVdvAon
          source_id: s_CUSWIjssuTrxhifx4b_CR2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126518 王光祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CUSWIjssuTrxhifx4b_CR2
            source_type: api_record
            title: 中国历代人物传记资料库：王光考（CBDB 306651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json
            external_identifier: CBDB:306651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RvwBFNFYPjXE486YSxqqGH
        status: active
        display_name: 王光考
        merged_into_person_id: null
---

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| birth.date | 1518年 | accepted |
| death.date | 1581年 | accepted |
| bio.summary | 王光祖（1518年—1581年），明人物。明清進士進士，籍贯黎城，入仕進士，曾任知縣、知府。（中国历代人物传记资料库 CBDB 126518） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJ5J2cPFB2J5wBLDS27uNZ | 王煩 | accepted |
| ancestors | p_j2Qr14aEdifzKDjQ5pCzA6 | 王文 | accepted |
| ancestors | p_PADhC3kPizKDbh6s6tqmfH | 王玘 | accepted |
| other | p_RvwBFNFYPjXE486YSxqqGH | 王光考 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煩（CBDB 306647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306647&o=json)
- [中国历代人物传记资料库：王光考（CBDB 306651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306651&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 126518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126518&o=json)
- [中国历代人物传记资料库：王玘（CBDB 306645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306645&o=json)
- [中国历代人物传记资料库：王文（CBDB 306646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306646&o=json)
