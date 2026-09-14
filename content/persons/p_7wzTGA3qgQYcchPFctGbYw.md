---
schema: wang-person/v1
id: p_7wzTGA3qgQYcchPFctGbYw
status: active
merged_into: null
display_name: 王應期
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29cXSXBR8zS9BhU1zzqh4r
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_63HEcwrf62i6SnBwQ7dYx4
          claim_id: c_29cXSXBR8zS9BhU1zzqh4r
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: CBDB:202976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202976）
          source: &a1
            id: s_4xxvavE1fm4FZqLMfztadX
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 202976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json
            external_identifier: CBDB:202976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oJDZCthRmy6MNJrwdXVBoP
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DnLATsAxfxkp8JdD91DC5L
          claim_id: c_oJDZCthRmy6MNJrwdXVBoP
          source_id: s_4xxvavE1fm4FZqLMfztadX
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
        id: c_pw8KZxzimuBm5bU6a2jUS2
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應期（生于1502年），明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 202976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RQT_xeWkRMoL40ccwBWJae
          claim_id: c_pw8KZxzimuBm5bU6a2jUS2
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: CBDB:202976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l2_myq40W23BDRbkSv3lLf
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NsQYKD7n_yVi_iZtntoyN
          claim_id: c_l2_myq40W23BDRbkSv3lLf
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BePMtcQN2evcZUVaYKvcA9
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8OVSENg60ASJwU-BAkE1k2
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_R2XZRW69PnAKHNF4NbsCLz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Yfo5yLIRks7DD2aizLd1J
          claim_id: c_8OVSENg60ASJwU-BAkE1k2
          source_id: s_hjz-jtc2QOMj1xabiHJeXy
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hjz-jtc2QOMj1xabiHJeXy
            source_type: api_record
            title: 中国历代人物传记资料库：田氏(王應期妻)（CBDB 297733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297733&o=json
            external_identifier: CBDB:297733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R2XZRW69PnAKHNF4NbsCLz
        status: active
        display_name: 田氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_EGOyq4FU3NvTDxiR2AEAz4
        subject_person_id: p_sEb2rsho5qoP9A8sQbv7e4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tSQW2DO_vEP8v8IVqR6wDJ
          claim_id: c_EGOyq4FU3NvTDxiR2AEAz4
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sEb2rsho5qoP9A8sQbv7e4
        status: active
        display_name: 王鈺
        merged_into_person_id: null
    - claim:
        id: c_RghN1lBqa-9s3WeqcxxciK
        subject_person_id: p_8cCQbEMY8ZpE4BQETGuGc3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7wzTGA3qgQYcchPFctGbYw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mBiN3cQOCF3vzCoKJemfp
          claim_id: c_RghN1lBqa-9s3WeqcxxciK
          source_id: s_4xxvavE1fm4FZqLMfztadX
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8cCQbEMY8ZpE4BQETGuGc3
        status: active
        display_name: 王源
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ob2AGIEyL6AX8BbbLfyUHO
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HB9WE5fDPZG8PptT6L6pNS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dMhnQ4tRXTYqoMZgYKGB3y
          claim_id: c_ob2AGIEyL6AX8BbbLfyUHO
          source_id: s_lHvG4EBZcGafxysVNd-wQi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lHvG4EBZcGafxysVNd-wQi
            source_type: api_record
            title: 中国历代人物传记资料库：王應先（CBDB 297736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json
            external_identifier: CBDB:297736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HB9WE5fDPZG8PptT6L6pNS
        status: active
        display_name: 王應先
        merged_into_person_id: null
    - claim:
        id: c_cS3kYr3KCZZ8PGBQQiSN-2
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yekb3EkRDsZrFnJ2hcB6GQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPgc6IBFKO63a6dyYZBjxi
          claim_id: c_cS3kYr3KCZZ8PGBQQiSN-2
          source_id: s_N035SFgXp86G4Y_XETzHtJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N035SFgXp86G4Y_XETzHtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王應聘（CBDB 297738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297738&o=json
            external_identifier: CBDB:297738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yekb3EkRDsZrFnJ2hcB6GQ
        status: active
        display_name: 王應聘
        merged_into_person_id: null
    - claim:
        id: c_3mSr_WQWFJJ6bY_B09ropV
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrwXKcR7G9RuUmMmstEbbG
          claim_id: c_3mSr_WQWFJJ6bY_B09ropV
          source_id: s_3-wf0XcXedPrByssMjWQaP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3-wf0XcXedPrByssMjWQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王應試（CBDB 297739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json
            external_identifier: CBDB:297739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mXd698gZ6rP2YtZXHSdPjn
        status: active
        display_name: 王應試
        merged_into_person_id: null
    - claim:
        id: c_kml2wheNjxIwLuLon-0tFO
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mvCVBxme2Gtfam9hCphnwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDykMRBYzH6-uNeZXl6UIQ
          claim_id: c_kml2wheNjxIwLuLon-0tFO
          source_id: s_QDNNzsY32xtqFEYISgJSQE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QDNNzsY32xtqFEYISgJSQE
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 297737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json
            external_identifier: CBDB:297737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mvCVBxme2Gtfam9hCphnwy
        status: active
        display_name: 王應詔
        merged_into_person_id: null
---

# 王應期

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應期 | accepted |
| birth.date | 1502年 | accepted |
| bio.summary | 王應期（生于1502年），明人物。明清進士進士，籍贯蒲州，入仕進士。（中国历代人物传记资料库 CBDB 202976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BePMtcQN2evcZUVaYKvcA9 | 王政 | accepted |
| spouses | p_R2XZRW69PnAKHNF4NbsCLz | 田氏 | accepted |
| ancestors | p_sEb2rsho5qoP9A8sQbv7e4 | 王鈺 | accepted |
| ancestors | p_8cCQbEMY8ZpE4BQETGuGc3 | 王源 | accepted |
| other | p_HB9WE5fDPZG8PptT6L6pNS | 王應先 | accepted |
| other | p_Yekb3EkRDsZrFnJ2hcB6GQ | 王應聘 | accepted |
| other | p_mXd698gZ6rP2YtZXHSdPjn | 王應試 | accepted |
| other | p_mvCVBxme2Gtfam9hCphnwy | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：田氏(王應期妻)（CBDB 297733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297733&o=json)
- [中国历代人物传记资料库：王應聘（CBDB 297738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297738&o=json)
- [中国历代人物传记资料库：王應期（CBDB 202976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202976&o=json)
- [中国历代人物传记资料库：王應試（CBDB 297739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json)
- [中国历代人物传记资料库：王應先（CBDB 297736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297736&o=json)
- [中国历代人物传记资料库：王應詔（CBDB 297737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json)
