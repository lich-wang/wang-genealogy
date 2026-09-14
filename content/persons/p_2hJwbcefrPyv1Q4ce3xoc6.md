---
schema: wang-person/v1
id: p_2hJwbcefrPyv1Q4ce3xoc6
status: active
merged_into: null
display_name: 王恂
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V9jTEAdp8hQ1oXFfh5zhY1
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3KEUEoPKqQq2gjbV36bHn
          claim_id: c_V9jTEAdp8hQ1oXFfh5zhY1
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: CBDB:200921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200921）
          source: &a1
            id: s_mVwkG4e4H3d4chjvn3BAU2
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 200921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json
            external_identifier: CBDB:200921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qJyni3Ew1nKQPCgEyW6J3D
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gK1bsctUJVT25PQocapPwd
          claim_id: c_qJyni3Ew1nKQPCgEyW6J3D
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
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
        id: c_R4CV8kWWWtH8btrgJmT2em
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂（生于1452年），明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 200921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_seTIiiWR6g1Hn3HzDkRv_H
          claim_id: c_R4CV8kWWWtH8btrgJmT2em
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: CBDB:200921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3e2V5N3-jz-0gwNzeMQmaR
        subject_person_id: p_UM99Zm3Rh6Z6EusvSaftqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTZkNfzwFVzWVUFyA-1Tao
          claim_id: c_3e2V5N3-jz-0gwNzeMQmaR
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UM99Zm3Rh6Z6EusvSaftqm
        status: active
        display_name: 王晟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QaNl1RVBxg-pnVI4GHR25z
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xNccExJufAWvBaZgLNPZQJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-SbFwdXJ32vKj716XL9Iu
          claim_id: c_QaNl1RVBxg-pnVI4GHR25z
          source_id: s_wfgkA3Mu6MHi9axlOQVYZG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wfgkA3Mu6MHi9axlOQVYZG
            source_type: api_record
            title: 中国历代人物传记资料库：唐氏(王恂妻)（CBDB 264631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264631&o=json
            external_identifier: CBDB:264631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xNccExJufAWvBaZgLNPZQJ
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_weQwHWxLKflFlQlJK6sGpV
        subject_person_id: p_RWBrjGVJfwPTdZnav1jS3T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7cz0MEoYACT5ja9P0LmU0M
          claim_id: c_weQwHWxLKflFlQlJK6sGpV
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RWBrjGVJfwPTdZnav1jS3T
        status: active
        display_name: 王德華
        merged_into_person_id: null
    - claim:
        id: c_sCu90n1ovKd4Z-F0Mau1Il
        subject_person_id: p_rRaCq5nUvTQ7NdSaoLR4Ju
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRlqxsMjk8BhtZDTOVEXCi
          claim_id: c_sCu90n1ovKd4Z-F0Mau1Il
          source_id: s_mVwkG4e4H3d4chjvn3BAU2
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第八十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rRaCq5nUvTQ7NdSaoLR4Ju
        status: active
        display_name: 王忠吉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_URcyadl3TjYlvlWIo-mJ9h
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ErcVZDeQmCkd4KVAXNE9Mp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7u-Nv2Su5rlfME-K6h5mPo
          claim_id: c_URcyadl3TjYlvlWIo-mJ9h
          source_id: s_KPa2r36U3tZZXQu4xQNtO0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KPa2r36U3tZZXQu4xQNtO0
            source_type: api_record
            title: 中国历代人物传记资料库：王愉（CBDB 264633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json
            external_identifier: CBDB:264633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ErcVZDeQmCkd4KVAXNE9Mp
        status: active
        display_name: 王愉
        merged_into_person_id: null
    - claim:
        id: c_YzM4VFCYUudHzLWhAn87h5
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QV7jVCSRPUHXTyJLtG8Nt3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xWvJtyOnmZMVdycYJX2ij8
          claim_id: c_YzM4VFCYUudHzLWhAn87h5
          source_id: s_FHCL2UDbVEPe8wCcbaCXq5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FHCL2UDbVEPe8wCcbaCXq5
            source_type: api_record
            title: 中国历代人物传记资料库：王悌（CBDB 264635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json
            external_identifier: CBDB:264635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QV7jVCSRPUHXTyJLtG8Nt3
        status: active
        display_name: 王悌
        merged_into_person_id: null
    - claim:
        id: c_zjH_r1Sj2JL162QXgfsw8q
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cGCWifwUvYu628MPq75vC4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NcWaic4fuP8AYiCPdbbvdi
          claim_id: c_zjH_r1Sj2JL162QXgfsw8q
          source_id: s_FLRA5vTHUb07mTEmuPpcXd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FLRA5vTHUb07mTEmuPpcXd
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 264638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json
            external_identifier: CBDB:264638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cGCWifwUvYu628MPq75vC4
        status: active
        display_name: 王怡
        merged_into_person_id: null
    - claim:
        id: c_bu2jshBLCtO6banL8UjBbx
        subject_person_id: p_2hJwbcefrPyv1Q4ce3xoc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qL5vdYVVtWA2vrFPPcuKVr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1E3pja5ei3fykZrFC0nI_
          claim_id: c_bu2jshBLCtO6banL8UjBbx
          source_id: s_S55sqvAOImYyAAyT7JUiqj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200921 王恂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S55sqvAOImYyAAyT7JUiqj
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 264634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264634&o=json
            external_identifier: CBDB:264634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qL5vdYVVtWA2vrFPPcuKVr
        status: active
        display_name: 王愷
        merged_into_person_id: null
---

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| birth.date | 1452年 | accepted |
| bio.summary | 王恂（生于1452年），明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 200921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UM99Zm3Rh6Z6EusvSaftqm | 王晟 | accepted |
| spouses | p_xNccExJufAWvBaZgLNPZQJ | 唐氏 | accepted |
| ancestors | p_RWBrjGVJfwPTdZnav1jS3T | 王德華 | accepted |
| ancestors | p_rRaCq5nUvTQ7NdSaoLR4Ju | 王忠吉 | accepted |
| other | p_ErcVZDeQmCkd4KVAXNE9Mp | 王愉 | accepted |
| other | p_QV7jVCSRPUHXTyJLtG8Nt3 | 王悌 | accepted |
| other | p_cGCWifwUvYu628MPq75vC4 | 王怡 | accepted |
| other | p_qL5vdYVVtWA2vrFPPcuKVr | 王愷 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐氏(王恂妻)（CBDB 264631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264631&o=json)
- [中国历代人物传记资料库：王愷（CBDB 264634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264634&o=json)
- [中国历代人物传记资料库：王悌（CBDB 264635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264635&o=json)
- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
- [中国历代人物传记资料库：王怡（CBDB 264638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264638&o=json)
- [中国历代人物传记资料库：王愉（CBDB 264633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264633&o=json)
