---
schema: wang-person/v1
id: p_bkiJd7fMDoFB71EF4g2i5Z
status: active
merged_into: null
display_name: 王約
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLUEybK93HKWofULpoCMGD
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjHLXt71Tg82nzfP8riveM
          claim_id: c_HLUEybK93HKWofULpoCMGD
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: CBDB:126619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126619）
          source: &a1
            id: s_9tEBUreHpbdKWNi5b9umHP
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 126619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json
            external_identifier: CBDB:126619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPAL89DaYVEB1acGiU6iNa
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，明人物。明清進士進士，籍贯臨川，入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 126619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rgIEd-PCXLA3VioWCC2hhx
          claim_id: c_FPAL89DaYVEB1acGiU6iNa
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: CBDB:126619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PlZzcDWQcUpSLE-2IsgBGY
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eTBc_UtH6mG-vlR9PdFoAB
          claim_id: c_PlZzcDWQcUpSLE-2IsgBGY
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NAgrt5V-kcmd16pm67JW5s
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4BLRQ9LHjoFaJpu5GxQtwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fUou7OAEFKGh-rhMpfsW9e
          claim_id: c_NAgrt5V-kcmd16pm67JW5s
          source_id: s_1Qe8ZC998bo8HZBoY9CdTx
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1Qe8ZC998bo8HZBoY9CdTx
            source_type: api_record
            title: 中国历代人物传记资料库：牛氏(王約妻)（CBDB 260400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260400&o=json
            external_identifier: CBDB:260400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4BLRQ9LHjoFaJpu5GxQtwy
        status: active
        display_name: 牛氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7de8uBDudAHOJvRVPQfwfP
        subject_person_id: p_ygv1KiyZJv28kaqA4sHG53
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w-GHATj1ELRluB7tQ7qzBr
          claim_id: c_7de8uBDudAHOJvRVPQfwfP
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ygv1KiyZJv28kaqA4sHG53
        status: active
        display_name: 王榮壽
        merged_into_person_id: null
    - claim:
        id: c_pSm4m_AYrZs1suQZCyTAHT
        subject_person_id: p_t7ZwKSF3BtuwRK4ev8TkAP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgHcfnfWD8olqMLDiNs5NO
          claim_id: c_pSm4m_AYrZs1suQZCyTAHT
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t7ZwKSF3BtuwRK4ev8TkAP
        status: active
        display_name: 王學敏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，明人物。明清進士進士，籍贯臨川，入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 126619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| spouses | p_4BLRQ9LHjoFaJpu5GxQtwy | 牛氏 | accepted |
| ancestors | p_ygv1KiyZJv28kaqA4sHG53 | 王榮壽 | accepted |
| ancestors | p_t7ZwKSF3BtuwRK4ev8TkAP | 王學敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：牛氏(王約妻)（CBDB 260400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260400&o=json)
- [中国历代人物传记资料库：王約（CBDB 126619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json)
