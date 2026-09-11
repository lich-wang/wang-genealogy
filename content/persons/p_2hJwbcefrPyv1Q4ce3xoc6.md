---
schema: wang-person/v1
id: p_2hJwbcefrPyv1Q4ce3xoc6
status: active
merged_into: null
display_name: 王恂
revision: 3
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
  other: []
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

## 外部来源

- [中国历代人物传记资料库：唐氏(王恂妻)（CBDB 264631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264631&o=json)
- [中国历代人物传记资料库：王恂（CBDB 200921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200921&o=json)
