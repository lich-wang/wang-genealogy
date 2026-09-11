---
schema: wang-person/v1
id: p_6r5VwfkrP2qbqzP6hHoNQi
status: active
merged_into: null
display_name: 王弁
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3XuFDXP5Y2aBmnBnCjJnHH
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qyC9u1BCGA9o3ayiZWEonv
          claim_id: c_3XuFDXP5Y2aBmnBnCjJnHH
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: CBDB:699373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699373）
          source: &a1
            id: s_ebyTGK7ELo3HAFB92wqGA3
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 699373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json
            external_identifier: CBDB:699373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NX3SKkGobqttNNRjRJEYEQ
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E68uTa4u6GVVzPjC5NdEmV
          claim_id: c_NX3SKkGobqttNNRjRJEYEQ
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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
        id: c_SK9HJRmGRiXJe36ApcUt4t
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1062年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpjttDo7kFSN9PXCuEt9YV
          claim_id: c_SK9HJRmGRiXJe36ApcUt4t
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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
        id: c_Y3gQPwMGNRMqvp9FUjQzF1
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VvCCGPm58PJF9uXXedRBJL
          claim_id: c_Y3gQPwMGNRMqvp9FUjQzF1
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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
        id: c_1OHAXHpjFV22VT0CWrooUc
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJKyaqOXtmGrQwZhN5yl6F
          claim_id: c_1OHAXHpjFV22VT0CWrooUc
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  children:
    - claim:
        id: c_1qsg9YVdP30Mv6aBY1nVGi
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83rVhbPky8ueHuLvNkatxw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T_Ci592og3O9VOpSUcU0j3
          claim_id: c_1qsg9YVdP30Mv6aBY1nVGi
          source_id: s_GJTKd6mk1Pyc52M5cLSuJo
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GJTKd6mk1Pyc52M5cLSuJo
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 699404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699404&o=json
            external_identifier: CBDB:699404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_83rVhbPky8ueHuLvNkatxw
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_pH96ni7oP4976Fjz8vlKzK
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MaarZ214ZBKrhG7uraC6BF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlV-p1vpI6lWY54OEdX2nP
          claim_id: c_pH96ni7oP4976Fjz8vlKzK
          source_id: s_PW9RXYGZT6YKW8q6zCEnjJ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PW9RXYGZT6YKW8q6zCEnjJ
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 699409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699409&o=json
            external_identifier: CBDB:699409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MaarZ214ZBKrhG7uraC6BF
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_U1bhY76PLPOoqjJQGMAq96
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ps7BFpb6ajaHh5BpoYjPd8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uu2z4eGE4bEh0uo-xRKOD1
          claim_id: c_U1bhY76PLPOoqjJQGMAq96
          source_id: s_m66udyE9G913zfiPP8Ya2C
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m66udyE9G913zfiPP8Ya2C
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 699412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699412&o=json
            external_identifier: CBDB:699412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ps7BFpb6ajaHh5BpoYjPd8
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_YY5ESALB744lunxe8mUsiq
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5JKRo5JKyD3NiBVQf4W2yC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q-6AECJldfqvAaCSuzJJFi
          claim_id: c_YY5ESALB744lunxe8mUsiq
          source_id: s_GQo86c3An7v5VQRTF7ttgL
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GQo86c3An7v5VQRTF7ttgL
            source_type: api_record
            title: 中国历代人物传记资料库：王息哥（CBDB 699422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699422&o=json
            external_identifier: CBDB:699422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5JKRo5JKyD3NiBVQf4W2yC
        status: active
        display_name: 王息哥
        merged_into_person_id: null
    - claim:
        id: c_4bes_dAwnGjL668jgi9nH-
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zmKmGw5eGTqLZuiR7yMU8M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lenBn35G69blenUXGfIprV
          claim_id: c_4bes_dAwnGjL668jgi9nH-
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zmKmGw5eGTqLZuiR7yMU8M
        status: active
        display_name: 王助哥
        merged_into_person_id: null
    - claim:
        id: c_JgLoYSpeTgV-rFDPC5UUnb
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9bkZAush33tNhmRnx5M2Df
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2QEy-Xc0QBqmLmbz6aj00
          claim_id: c_JgLoYSpeTgV-rFDPC5UUnb
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9bkZAush33tNhmRnx5M2Df
        status: active
        display_name: 王張住
        merged_into_person_id: null
    - claim:
        id: c_pTVph8FIvQgo4iAcHg-ZZG
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qUV1Lh3kQf6nGxjSa7CTzK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPQ95Ti1fL0sLX_WOgfmi-
          claim_id: c_pTVph8FIvQgo4iAcHg-ZZG
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qUV1Lh3kQf6nGxjSa7CTzK
        status: active
        display_name: 王勃兒
        merged_into_person_id: null
    - claim:
        id: c_uMFK0I2Ggaz8c3gxqgltJ3
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vd8kpM5xBWhGP9F2B4Ngun
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sg4MkeXphb3C7SHwgr3m-x
          claim_id: c_uMFK0I2Ggaz8c3gxqgltJ3
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vd8kpM5xBWhGP9F2B4Ngun
        status: active
        display_name: 王楊姐
        merged_into_person_id: null
    - claim:
        id: c_DqU0OptDtQYE7zEWBoAI3f
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BX84MnygPGnzNAEC8vVqh2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DglvRUeMZBxPyeAn_4ZGj3
          claim_id: c_DqU0OptDtQYE7zEWBoAI3f
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BX84MnygPGnzNAEC8vVqh2
        status: active
        display_name: 王忝喜
        merged_into_person_id: null
    - claim:
        id: c_UTDXhjELwkSE89tV6X8w6l
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v4cVQTy66xpHpnivKPuhYH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_hENWbGXJwsJ2LvLVXQ3n
          claim_id: c_UTDXhjELwkSE89tV6X8w6l
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v4cVQTy66xpHpnivKPuhYH
        status: active
        display_name: 王慶喜
        merged_into_person_id: null
    - claim:
        id: c_zKh3eQNCHkfmChgtlPq9sA
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ug8tVLHjYBKyJHh1LR369W
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRsFuNDkAGwVTrqjvz7JOn
          claim_id: c_zKh3eQNCHkfmChgtlPq9sA
          source_id: s_JSig7bP4LUEWwqbH6VExwt
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JSig7bP4LUEWwqbH6VExwt
            source_type: api_record
            title: 中国历代人物传记资料库：王敬息（CBDB 699429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699429&o=json
            external_identifier: CBDB:699429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ug8tVLHjYBKyJHh1LR369W
        status: active
        display_name: 王敬息
        merged_into_person_id: null
  other: []
---

# 王弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弁 | accepted |
| birth.date | 999年 | accepted |
| death.date | 1062年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |
| children | p_83rVhbPky8ueHuLvNkatxw | 王恕 | accepted |
| children | p_MaarZ214ZBKrhG7uraC6BF | 王政 | accepted |
| children | p_Ps7BFpb6ajaHh5BpoYjPd8 | 王嵩 | accepted |
| descendants | p_5JKRo5JKyD3NiBVQf4W2yC | 王息哥 | accepted |
| descendants | p_zmKmGw5eGTqLZuiR7yMU8M | 王助哥 | accepted |
| descendants | p_9bkZAush33tNhmRnx5M2Df | 王張住 | accepted |
| descendants | p_qUV1Lh3kQf6nGxjSa7CTzK | 王勃兒 | accepted |
| descendants | p_vd8kpM5xBWhGP9F2B4Ngun | 王楊姐 | accepted |
| descendants | p_BX84MnygPGnzNAEC8vVqh2 | 王忝喜 | accepted |
| descendants | p_v4cVQTy66xpHpnivKPuhYH | 王慶喜 | accepted |
| descendants | p_Ug8tVLHjYBKyJHh1LR369W | 王敬息 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 699373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json)
- [中国历代人物传记资料库：王敬息（CBDB 699429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699429&o=json)
- [中国历代人物传记资料库：王恕（CBDB 699404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699404&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 699412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699412&o=json)
- [中国历代人物传记资料库：王息哥（CBDB 699422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699422&o=json)
- [中国历代人物传记资料库：王政（CBDB 699409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699409&o=json)
