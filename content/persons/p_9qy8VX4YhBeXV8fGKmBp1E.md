---
schema: wang-person/v1
id: p_9qy8VX4YhBeXV8fGKmBp1E
status: active
merged_into: null
display_name: 王經
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4eDvxLn6PKWa7j77ioZcK
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4RSxLiSxY5qjpAh7jdZy6
          claim_id: c_b4eDvxLn6PKWa7j77ioZcK
          source_id: s_iamg2Nd5WazmGhDzWzew3L
          stance: supports
          locator: CBDB:199619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199619）
          source: &a1
            id: s_iamg2Nd5WazmGhDzWzew3L
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 199619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199619&o=json
            external_identifier: CBDB:199619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vy6X7KUmrg38SRFxNkE1wz
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83co73JJVDdfK9f2pZhit9
          claim_id: c_Vy6X7KUmrg38SRFxNkE1wz
          source_id: s_iamg2Nd5WazmGhDzWzew3L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5UYDR8QjVoJCXxMCN2RkU
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經（生于1439年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 199619）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2CBiFx1vAWR3Px9b81jyR
          claim_id: c_q5UYDR8QjVoJCXxMCN2RkU
          source_id: s_iamg2Nd5WazmGhDzWzew3L
          stance: supports
          locator: CBDB:199619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MuNTomHm3uhGfFLeecdArW
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNRwrBJOLlRoDFRxFNiR5Z
          claim_id: c_MuNTomHm3uhGfFLeecdArW
          source_id: s_MG6q9dH4LZabg1XaZv4s12
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MG6q9dH4LZabg1XaZv4s12
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 247354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json
            external_identifier: CBDB:247354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Y9vSpLkuvgM5TzoTn8thR
        status: active
        display_name: 王讓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gOlPY4S0_pc6eIkMN8kQsY
        subject_person_id: p_2r9u5H4u4Vj7mDLqE83hi9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XFVGEuIZDSNFbnwrnFgw3r
          claim_id: c_gOlPY4S0_pc6eIkMN8kQsY
          source_id: s_3Mh9K11AQQ3dbsA5KgYZ4P
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3Mh9K11AQQ3dbsA5KgYZ4P
            source_type: api_record
            title: 中国历代人物传记资料库：王仲榮（CBDB 247351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247351&o=json
            external_identifier: CBDB:247351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2r9u5H4u4Vj7mDLqE83hi9
        status: active
        display_name: 王仲榮
        merged_into_person_id: null
    - claim:
        id: c_rMGevI2ZReF6n7LH7yhnRk
        subject_person_id: p_adQpnuZXKEbtiSQA8rxZYj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TdoWNwxOeuWPDYZYy15zhv
          claim_id: c_rMGevI2ZReF6n7LH7yhnRk
          source_id: s_BNZga1SKKEqLRu47p5R198
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BNZga1SKKEqLRu47p5R198
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 247352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247352&o=json
            external_identifier: CBDB:247352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_adQpnuZXKEbtiSQA8rxZYj
        status: active
        display_name: 王惟善
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_oxPSPDlWbzwbMVLMzb_6Fw
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DR4C21YnAw4Ege8955RHsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZ_hsWQ9mqXs3fz8DjZfSr
          claim_id: c_oxPSPDlWbzwbMVLMzb_6Fw
          source_id: s_BUYW0Y5fSDptsgQ4jEeRpt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BUYW0Y5fSDptsgQ4jEeRpt
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 247360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json
            external_identifier: CBDB:247360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DR4C21YnAw4Ege8955RHsa
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_LFQingq5S1CbDCW1A504_o
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gFHFwH0T5n4HRLonjfxGRp
          claim_id: c_LFQingq5S1CbDCW1A504_o
          source_id: s_k__VQA42zE8cxiOmqLIWgn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k__VQA42zE8cxiOmqLIWgn
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 247358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json
            external_identifier: CBDB:247358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h5CjHuT4H6rxp5Z2L9KQdh
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_L_ONOyBJH3DVH7N8nMbBI5
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QW22gexOr_Shze08Vdy2dI
          claim_id: c_L_ONOyBJH3DVH7N8nMbBI5
          source_id: s_V_m2hPMZJcushaiGnYDcvb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V_m2hPMZJcushaiGnYDcvb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 247359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json
            external_identifier: CBDB:247359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hbW5gmdqcq7HA51pN5Jsnr
        status: active
        display_name: 王縉
        merged_into_person_id: null
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| birth.date | 1439年 | accepted |
| bio.summary | 王經（生于1439年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 199619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Y9vSpLkuvgM5TzoTn8thR | 王讓 | accepted |
| ancestors | p_2r9u5H4u4Vj7mDLqE83hi9 | 王仲榮 | accepted |
| ancestors | p_adQpnuZXKEbtiSQA8rxZYj | 王惟善 | accepted |
| other | p_DR4C21YnAw4Ege8955RHsa | 王紳 | accepted |
| other | p_h5CjHuT4H6rxp5Z2L9KQdh | 王綸 | accepted |
| other | p_hbW5gmdqcq7HA51pN5Jsnr | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 247359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json)
- [中国历代人物传记资料库：王經（CBDB 199619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199619&o=json)
- [中国历代人物传记资料库：王綸（CBDB 247358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json)
- [中国历代人物传记资料库：王讓（CBDB 247354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json)
- [中国历代人物传记资料库：王紳（CBDB 247360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json)
- [中国历代人物传记资料库：王惟善（CBDB 247352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247352&o=json)
- [中国历代人物传记资料库：王仲榮（CBDB 247351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247351&o=json)
