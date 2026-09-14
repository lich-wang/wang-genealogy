---
schema: wang-person/v1
id: p_9EQ7RpHJJENgpoTNeutQ15
status: active
merged_into: null
display_name: 王珦
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZVMi636AqezeCMqbNjc5cZ
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wBbEbfKWE465TxzQKcePEt
          claim_id: c_ZVMi636AqezeCMqbNjc5cZ
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: CBDB:126637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126637）
          source: &a1
            id: s_7V4YP3YNCGruTEhfMNKbCt
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 126637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json
            external_identifier: CBDB:126637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D2k7BWw2z2FHcPEhCB8jjk
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珦，明人物。明清進士進士，籍贯祁門，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126637）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qbJrqVltKcD25TofbWPrMx
          claim_id: c_D2k7BWw2z2FHcPEhCB8jjk
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: CBDB:126637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_64B9Q2L1_4aXvu6jnUJ_kS
        subject_person_id: p_SVG1ddZNL58D1StuN9eK9h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6MtoUkC-DwHD6kCkTPWJL
          claim_id: c_64B9Q2L1_4aXvu6jnUJ_kS
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SVG1ddZNL58D1StuN9eK9h
        status: active
        display_name: 王懷德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jb8pW5Ge80wL2rXVRk1oCB
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JQk5zLr1DU2c5A7JcPo4cg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_obbNPTLx8hdm6nmhKmNeGG
          claim_id: c_jb8pW5Ge80wL2rXVRk1oCB
          source_id: s_CxVfYecQkbcHaU7E6rGptj
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CxVfYecQkbcHaU7E6rGptj
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王珦妻)（CBDB 251146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251146&o=json
            external_identifier: CBDB:251146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JQk5zLr1DU2c5A7JcPo4cg
        status: active
        display_name: 謝氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_2tgIhGyi--jVquUat6bOfr
        subject_person_id: p_WniQ5aD1dTCDBDynYPgLdF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BDqnc4viUcNvZB11sPGkG
          claim_id: c_2tgIhGyi--jVquUat6bOfr
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WniQ5aD1dTCDBDynYPgLdF
        status: active
        display_name: 王舍英
        merged_into_person_id: null
    - claim:
        id: c_yb5E0kWV7oTdz5RonLmdm6
        subject_person_id: p_GjaW1yRuQmTJJRQN3c2uKv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qjdO70w8_uxLneE8FQNWwE
          claim_id: c_yb5E0kWV7oTdz5RonLmdm6
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GjaW1yRuQmTJJRQN3c2uKv
        status: active
        display_name: 王彥良
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GWVkEOln0WKR9HMoGTZNuM
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EY6jMJ53DkQ5PNn2HgkTKP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0f-djSzNuA-xJ3UVO_RdRk
          claim_id: c_GWVkEOln0WKR9HMoGTZNuM
          source_id: s_NB9DY5_2p7L2uG0SZduDT7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126637 王珦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NB9DY5_2p7L2uG0SZduDT7
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 251148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251148&o=json
            external_identifier: CBDB:251148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EY6jMJ53DkQ5PNn2HgkTKP
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_jx5wTLosxGdXpUjvBCZlJq
        subject_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hyvLPzUpSi2217aRPGwhgW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eNLkWddXbRQw04lKeMRUh
          claim_id: c_jx5wTLosxGdXpUjvBCZlJq
          source_id: s_WeiF1WypS31laROO1jZDMP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126637 王珦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WeiF1WypS31laROO1jZDMP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 251147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251147&o=json
            external_identifier: CBDB:251147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hyvLPzUpSi2217aRPGwhgW
        status: active
        display_name: 王瑛
        merged_into_person_id: null
---

# 王珦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珦 | accepted |
| bio.summary | 王珦，明人物。明清進士進士，籍贯祁門，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SVG1ddZNL58D1StuN9eK9h | 王懷德 | accepted |
| spouses | p_JQk5zLr1DU2c5A7JcPo4cg | 謝氏 | accepted |
| ancestors | p_WniQ5aD1dTCDBDynYPgLdF | 王舍英 | accepted |
| ancestors | p_GjaW1yRuQmTJJRQN3c2uKv | 王彥良 | accepted |
| other | p_EY6jMJ53DkQ5PNn2HgkTKP | 王璿 | accepted |
| other | p_hyvLPzUpSi2217aRPGwhgW | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珦（CBDB 126637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json)
- [中国历代人物传记资料库：王璿（CBDB 251148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251148&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 251147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251147&o=json)
- [中国历代人物传记资料库：謝氏(王珦妻)（CBDB 251146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251146&o=json)
