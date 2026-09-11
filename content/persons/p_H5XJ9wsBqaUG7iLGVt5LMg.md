---
schema: wang-person/v1
id: p_H5XJ9wsBqaUG7iLGVt5LMg
status: active
merged_into: null
display_name: 王崇禮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j288g9Hz7MVcKK7AEL6j2o
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rNaWLmzqZi5nSuFxSYVW9f
          claim_id: c_j288g9Hz7MVcKK7AEL6j2o
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: CBDB:140514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140514）
          source: &a1
            id: s_HcviPY7mVXpgS4JqnPVLWr
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禮（CBDB 140514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json
            external_identifier: CBDB:140514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H7rBrNyLutgh87NiT1h91d
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 673年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UX2CSCTt1nWjD1npBbYen1
          claim_id: c_H7rBrNyLutgh87NiT1h91d
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
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
        id: c_FMkCQyy1WmUUTzmJKAJQkK
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7nyZzQLirZN2PGHjWCZQ3
          claim_id: c_FMkCQyy1WmUUTzmJKAJQkK
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
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
        id: c_1MDFdytw4881koPHf3PFUt
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3K2HXw44vRxEmU9EuVekG
          claim_id: c_1MDFdytw4881koPHf3PFUt
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
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
        id: c_WymSWoq3kCYqqTsMrsavCs
        subject_person_id: p_z8V9ZSLdpQZsHteaegkgLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHNSA0is8aAXmCoTdqHW8J
          claim_id: c_WymSWoq3kCYqqTsMrsavCs
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z8V9ZSLdpQZsHteaegkgLo
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children:
    - claim:
        id: c_sg28vf976MYDe2IX_LPp6V
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2p9yiA1B1x4ffXDvMXE5Jp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lxRp2oEBRLzBkHeT7oFGQ1
          claim_id: c_sg28vf976MYDe2IX_LPp6V
          source_id: s_roJ77trDMy2z5rWAdW869m
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_roJ77trDMy2z5rWAdW869m
            source_type: api_record
            title: 中国历代人物传记资料库：王元賓（CBDB 152399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152399&o=json
            external_identifier: CBDB:152399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2p9yiA1B1x4ffXDvMXE5Jp
        status: active
        display_name: 王元賓
        merged_into_person_id: null
    - claim:
        id: c_f9NHIHEk505Ctjq2bmIhut
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qJkLJtx4xgEPAf9CxJTjMA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o0pQxWzgu_yjbHH43aQAA-
          claim_id: c_f9NHIHEk505Ctjq2bmIhut
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qJkLJtx4xgEPAf9CxJTjMA
        status: active
        display_name: 王元俊
        merged_into_person_id: null
    - claim:
        id: c__YwE6JJA1GHTrTdIQc_1wL
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x2Moim4y8PJXGSSXX9H82Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_60Hsy2Yf6SJgXpOqbysYLN
          claim_id: c__YwE6JJA1GHTrTdIQc_1wL
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x2Moim4y8PJXGSSXX9H82Y
        status: active
        display_name: 王元敬
        merged_into_person_id: null
    - claim:
        id: c_BVnTl-tdOjt8Yp-_mNBMEC
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z5zJP5stLYzFPNkM4jetYc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIgiCBasVUzPTEs3va8C8R
          claim_id: c_BVnTl-tdOjt8Yp-_mNBMEC
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z5zJP5stLYzFPNkM4jetYc
        status: active
        display_name: 王元獻
        merged_into_person_id: null
    - claim:
        id: c_Bz1hVtPV5LOciFkbxImn-R
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fspPMgYwiJchRCTQFFm38t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8iFMEgStZ10PxntAyKJRu
          claim_id: c_Bz1hVtPV5LOciFkbxImn-R
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fspPMgYwiJchRCTQFFm38t
        status: active
        display_name: 王元貢
        merged_into_person_id: null
    - claim:
        id: c_44xC5CAUjwBCIAwuJmDynS
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QvFi1p7xLJZTbb1KrvtENM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYrb1HVBfeCW9lbSGJFM9x
          claim_id: c_44xC5CAUjwBCIAwuJmDynS
          source_id: s_HcviPY7mVXpgS4JqnPVLWr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QvFi1p7xLJZTbb1KrvtENM
        status: active
        display_name: 王元玼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_h1Tn-LRv0L0ZNh2e8_dhqe
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FhLp679rPHbEkKCDdUsSbc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uijcux-g6vQKanW5NvscfV
          claim_id: c_h1Tn-LRv0L0ZNh2e8_dhqe
          source_id: s_bu3G_MOQRj7sRrpehnFENf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bu3G_MOQRj7sRrpehnFENf
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王崇禮妻)（CBDB 152391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152391&o=json
            external_identifier: CBDB:152391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FhLp679rPHbEkKCDdUsSbc
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王崇禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇禮 | accepted |
| birth.date | 673年 | accepted |
| death.date | 731年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z8V9ZSLdpQZsHteaegkgLo | 王貴 | accepted |
| children | p_2p9yiA1B1x4ffXDvMXE5Jp | 王元賓 | accepted |
| children | p_qJkLJtx4xgEPAf9CxJTjMA | 王元俊 | accepted |
| children | p_x2Moim4y8PJXGSSXX9H82Y | 王元敬 | accepted |
| children | p_z5zJP5stLYzFPNkM4jetYc | 王元獻 | accepted |
| children | p_fspPMgYwiJchRCTQFFm38t | 王元貢 | accepted |
| children | p_QvFi1p7xLJZTbb1KrvtENM | 王元玼 | accepted |
| spouses | p_FhLp679rPHbEkKCDdUsSbc | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王崇禮妻)（CBDB 152391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152391&o=json)
- [中国历代人物传记资料库：王崇禮（CBDB 140514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140514&o=json)
- [中国历代人物传记资料库：王元賓（CBDB 152399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152399&o=json)
