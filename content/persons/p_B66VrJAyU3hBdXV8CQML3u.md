---
schema: wang-person/v1
id: p_B66VrJAyU3hBdXV8CQML3u
status: active
merged_into: null
display_name: 王渭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEV7Vk4wetCy5jBNHgKiAM
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q3JwDaYFFMtbDVozE3ML1G
          claim_id: c_VEV7Vk4wetCy5jBNHgKiAM
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: CBDB:144925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144925）
          source: &a1
            id: s_qWP13BHjavAoPZxayrpxCb
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 144925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json
            external_identifier: CBDB:144925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LvNKUJGG1tY2B8eC9cgNrx
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 782年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAhj9X8H1NRCrXdJ2tzNz5
          claim_id: c_LvNKUJGG1tY2B8eC9cgNrx
          source_id: s_qWP13BHjavAoPZxayrpxCb
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
        id: c_uddAFfNp2bT6mdZ2RmBLEu
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q95wkao9eSUQNgzQSrSMJg
          claim_id: c_uddAFfNp2bT6mdZ2RmBLEu
          source_id: s_qWP13BHjavAoPZxayrpxCb
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
        id: c_65Z1NZwjQDiJGm5RwffvPW
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
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
        - id: cs_hQdGgkkEiLvqbVP66kiczW
          claim_id: c_65Z1NZwjQDiJGm5RwffvPW
          source_id: s_qWP13BHjavAoPZxayrpxCb
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
        id: c_pWLx7Ma-PT97xupSq4XEwJ
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B66VrJAyU3hBdXV8CQML3u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCYJthTBqSHh0cjBBCIkms
          claim_id: c_pWLx7Ma-PT97xupSq4XEwJ
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hpkb5p14cGd4ZGWstBx7hV
        status: active
        display_name: 王晤
        merged_into_person_id: null
  children:
    - claim:
        id: c_Nw99H-mVdmtA0nxWaWJjA8
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AC8R8KFQMBoroRTwELywt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jsESQ7JtZQgQFKejDWwR84
          claim_id: c_Nw99H-mVdmtA0nxWaWJjA8
          source_id: s_T4xB72U1gceHHKHwb2UHKY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T4xB72U1gceHHKHwb2UHKY
            source_type: api_record
            title: 中国历代人物传记资料库：王舜臣（CBDB 191814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191814&o=json
            external_identifier: CBDB:191814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AC8R8KFQMBoroRTwELywt4
        status: active
        display_name: 王舜臣
        merged_into_person_id: null
    - claim:
        id: c_D_oQCMvfvPtSCFEG3FrlYS
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VVcj7dvvnrXKLMnUjUkCs5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfMHHmBn9ALssLx1V_w0YN
          claim_id: c_D_oQCMvfvPtSCFEG3FrlYS
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VVcj7dvvnrXKLMnUjUkCs5
        status: active
        display_name: 王慱古
        merged_into_person_id: null
    - claim:
        id: c_4CYbyNWWZ6vO4IlXAkLlJb
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVD4ad7FN3HZR5xT4Zf8eG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15lwxVu7iDdV59u9GdNG1q
          claim_id: c_4CYbyNWWZ6vO4IlXAkLlJb
          source_id: s_qWP13BHjavAoPZxayrpxCb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SVD4ad7FN3HZR5xT4Zf8eG
        status: active
        display_name: 王傳古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| birth.date | 782年 | accepted |
| death.date | 837年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hpkb5p14cGd4ZGWstBx7hV | 王晤 | accepted |
| children | p_AC8R8KFQMBoroRTwELywt4 | 王舜臣 | accepted |
| children | p_VVcj7dvvnrXKLMnUjUkCs5 | 王慱古 | accepted |
| children | p_SVD4ad7FN3HZR5xT4Zf8eG | 王傳古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜臣（CBDB 191814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191814&o=json)
- [中国历代人物传记资料库：王渭（CBDB 144925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144925&o=json)
