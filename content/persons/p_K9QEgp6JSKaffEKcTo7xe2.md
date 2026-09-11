---
schema: wang-person/v1
id: p_K9QEgp6JSKaffEKcTo7xe2
status: active
merged_into: null
display_name: 王賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jvqPG6e52GvW5RNZ35WWzA
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MYkzRtmJNPhBnDjjEjbUSD
          claim_id: c_jvqPG6e52GvW5RNZ35WWzA
          source_id: s_9kzsHgRKwkNrd268ZDTF6o
          stance: supports
          locator: CBDB:563485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563485）
          source: &a1
            id: s_9kzsHgRKwkNrd268ZDTF6o
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 563485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563485&o=json
            external_identifier: CBDB:563485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7BmgVoxbbM4mYK2TGzC1xF
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mt8moaTqektQ4KNFHPTVh7
          claim_id: c_7BmgVoxbbM4mYK2TGzC1xF
          source_id: s_9kzsHgRKwkNrd268ZDTF6o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LJjDlO5tjVH5UHHrAr-yZ4
        subject_person_id: p_XM9QNMLmGKfYJ3GSaLi11d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J421tEiacM3G6A5e4QmGBE
          claim_id: c_LJjDlO5tjVH5UHHrAr-yZ4
          source_id: s_9kzsHgRKwkNrd268ZDTF6o
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XM9QNMLmGKfYJ3GSaLi11d
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  children:
    - claim:
        id: c_CnhUCDVLAn452EQE4nhjbJ
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLoryMbMAG9Vho3wHxjS8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p-R_sGpTCPIbxSOCZ5h2Hf
          claim_id: c_CnhUCDVLAn452EQE4nhjbJ
          source_id: s_9kzsHgRKwkNrd268ZDTF6o
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qLoryMbMAG9Vho3wHxjS8E
        status: active
        display_name: 王杞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_CMJa0kf3Nytt1JUnbFY6dW
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_67QPdbGBEAuDLU32GCV69J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZyEsGdB4-PkcKkJnMhrzM
          claim_id: c_CMJa0kf3Nytt1JUnbFY6dW
          source_id: s_izjCM7Xjq7AiXpp61KmMyD
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_izjCM7Xjq7AiXpp61KmMyD
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 563487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563487&o=json
            external_identifier: CBDB:563487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_67QPdbGBEAuDLU32GCV69J
        status: active
        display_name: 王正
        merged_into_person_id: null
    - claim:
        id: c_Xt8z03dY3okm-36YC8A__L
        subject_person_id: p_K9QEgp6JSKaffEKcTo7xe2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ETdwCm54JGjgAZiDmfGBaU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AoxFsz5vQpexaI53aBELNm
          claim_id: c_Xt8z03dY3okm-36YC8A__L
          source_id: s_9kzsHgRKwkNrd268ZDTF6o
          stance: supports
          locator: 紹興府志:八十卷，lgid=316700：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ETdwCm54JGjgAZiDmfGBaU
        status: active
        display_name: 王偉
        merged_into_person_id: null
  other: []
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XM9QNMLmGKfYJ3GSaLi11d | 王蘊 | accepted |
| children | p_qLoryMbMAG9Vho3wHxjS8E | 王杞 | accepted |
| descendants | p_67QPdbGBEAuDLU32GCV69J | 王正 | accepted |
| descendants | p_ETdwCm54JGjgAZiDmfGBaU | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 563485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563485&o=json)
- [中国历代人物传记资料库：王正（CBDB 563487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563487&o=json)
