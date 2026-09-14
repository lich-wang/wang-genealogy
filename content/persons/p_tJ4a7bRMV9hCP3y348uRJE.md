---
schema: wang-person/v1
id: p_tJ4a7bRMV9hCP3y348uRJE
status: active
merged_into: null
display_name: 王學顏
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6u97SPJinRMbs2CULQF2r
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUuJzv8qHJqb2y6tLwGGa4
          claim_id: c_N6u97SPJinRMbs2CULQF2r
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
          stance: supports
          locator: CBDB:126840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126840）
          source: &a1
            id: s_R8v6toK4Sj5dQWeQrFWtQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王學顏（CBDB 126840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126840&o=json
            external_identifier: CBDB:126840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HmgXs5VCBSU8umq3Dfc7u3
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1520年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQwwrVrLwX2BL6qgMA4Y9Q
          claim_id: c_HmgXs5VCBSU8umq3Dfc7u3
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
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
        id: c_bfwnUjrETnjB3aGTKwH3db
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1562年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGNUYWcm3L2Y6W2myfpq4E
          claim_id: c_bfwnUjrETnjB3aGTKwH3db
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
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
        id: c_bPmjNwisNjN5uoiwitPF23
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學顏（1520年—1562年），明人物。明清進士進士，籍贯湘潭，入仕進士。（中国历代人物传记资料库 CBDB 126840）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ShrgcCnLpcW_UvcdbOzNyZ
          claim_id: c_bPmjNwisNjN5uoiwitPF23
          source_id: s_R8v6toK4Sj5dQWeQrFWtQ7
          stance: supports
          locator: CBDB:126840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AjAbuzPbXOgiv6tkhLQtG5
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZSq2jSy5D0VStuzk3KJgSx
          claim_id: c_AjAbuzPbXOgiv6tkhLQtG5
          source_id: s_DywXQHriPtFqgpRz6xT2A1
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DywXQHriPtFqgpRz6xT2A1
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 315443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315443&o=json
            external_identifier: CBDB:315443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6U2hKWNf3zvZ6acQ4hYSRb
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xfC52MvVXjk3kk0khAe5bR
        subject_person_id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYkt4TBGiHWBkeo2PiaHYd
          claim_id: c_xfC52MvVXjk3kk0khAe5bR
          source_id: s_bL6RCjyZJ1aEjHd9x7BAQP
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bL6RCjyZJ1aEjHd9x7BAQP
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 315442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315442&o=json
            external_identifier: CBDB:315442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_kDx9HnVUuZnNF19oLl7-E2
        subject_person_id: p_pwgiCHEfC9Yf5hjCwnt6yK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jt2-zLVk9PvYKVDCecu8Ga
          claim_id: c_kDx9HnVUuZnNF19oLl7-E2
          source_id: s_JEDsCCfXzvg8zERK8HumXH
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JEDsCCfXzvg8zERK8HumXH
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 315441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315441&o=json
            external_identifier: CBDB:315441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pwgiCHEfC9Yf5hjCwnt6yK
        status: active
        display_name: 王汝霖
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_jdL9gn8GzoIjNTWsq8esGh
        subject_person_id: p_N79j3qJ7kSXo4mPw794Y9Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYhLgZdoGrWgJuFRGNjyW4
          claim_id: c_jdL9gn8GzoIjNTWsq8esGh
          source_id: s_snmPmV0nHSizYPDETQ3tOM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_snmPmV0nHSizYPDETQ3tOM
            source_type: api_record
            title: 中国历代人物传记资料库：王學朱（CBDB 315450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json
            external_identifier: CBDB:315450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N79j3qJ7kSXo4mPw794Y9Y
        status: active
        display_name: 王學朱
        merged_into_person_id: null
    - claim:
        id: c_3A6EJV9N2nMEJ28uiULcgE
        subject_person_id: p_TuFF97w586gB9dLGs2aawd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9TTMMoJdmRbXoK8mpMzcP
          claim_id: c_3A6EJV9N2nMEJ28uiULcgE
          source_id: s_vqCWmfMlFc3A3OsbfAl-PN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vqCWmfMlFc3A3OsbfAl-PN
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 315449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json
            external_identifier: CBDB:315449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TuFF97w586gB9dLGs2aawd
        status: active
        display_name: 王學周
        merged_into_person_id: null
    - claim:
        id: c_Zwjm35BDtBvQRRZso9ZrB3
        subject_person_id: p_YW3a63CCDAWxKBQcS5S44K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEnnvGrodNNR6Bqfp8MMeC
          claim_id: c_Zwjm35BDtBvQRRZso9ZrB3
          source_id: s_Yi-oY26a5dyBS2omEtlpDg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yi-oY26a5dyBS2omEtlpDg
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 315447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json
            external_identifier: CBDB:315447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YW3a63CCDAWxKBQcS5S44K
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_np5YhFM7Q-ptVU_4M0LYjC
        subject_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u3nGyTYXwikKsvfMw72gDu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hgcp1vKp9kYLhdwmboQYOd
          claim_id: c_np5YhFM7Q-ptVU_4M0LYjC
          source_id: s_KvXX5UOhav5y9Ja6Z7LBle
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KvXX5UOhav5y9Ja6Z7LBle
            source_type: api_record
            title: 中国历代人物传记资料库：王學孟（CBDB 315448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315448&o=json
            external_identifier: CBDB:315448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u3nGyTYXwikKsvfMw72gDu
        status: active
        display_name: 王學孟
        merged_into_person_id: null
---

# 王學顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學顏 | accepted |
| birth.date | 1520年 | accepted |
| death.date | 1562年 | accepted |
| bio.summary | 王學顏（1520年—1562年），明人物。明清進士進士，籍贯湘潭，入仕進士。（中国历代人物传记资料库 CBDB 126840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6U2hKWNf3zvZ6acQ4hYSRb | 王相 | accepted |
| ancestors | p_GQt4Zp1x7qHbgJ6UWwdZ1E | 王琦 | accepted |
| ancestors | p_pwgiCHEfC9Yf5hjCwnt6yK | 王汝霖 | accepted |
| other | p_N79j3qJ7kSXo4mPw794Y9Y | 王學朱 | accepted |
| other | p_TuFF97w586gB9dLGs2aawd | 王學周 | accepted |
| other | p_YW3a63CCDAWxKBQcS5S44K | 王學曾 | accepted |
| other | p_u3nGyTYXwikKsvfMw72gDu | 王學孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 315442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315442&o=json)
- [中国历代人物传记资料库：王汝霖（CBDB 315441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315441&o=json)
- [中国历代人物传记资料库：王相（CBDB 315443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315443&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 315447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315447&o=json)
- [中国历代人物传记资料库：王學孟（CBDB 315448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315448&o=json)
- [中国历代人物传记资料库：王學顏（CBDB 126840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126840&o=json)
- [中国历代人物传记资料库：王學周（CBDB 315449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json)
- [中国历代人物传记资料库：王學朱（CBDB 315450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315450&o=json)
