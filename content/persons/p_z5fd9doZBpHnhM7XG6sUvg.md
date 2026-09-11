---
schema: wang-person/v1
id: p_z5fd9doZBpHnhM7XG6sUvg
status: active
merged_into: null
display_name: 王佺
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3gRou7NVoQEMKBDxrGizCc
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BsDpv2aR6rzZLKRmCMXsFz
          claim_id: c_3gRou7NVoQEMKBDxrGizCc
          source_id: s_cg9GmtLW8jT9LjmZhduYer
          stance: supports
          locator: CBDB:141115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141115）
          source: &a1
            id: s_cg9GmtLW8jT9LjmZhduYer
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 141115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141115&o=json
            external_identifier: CBDB:141115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZAc44D9TBuVQuLWBcqN5Wa
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVg7LHUnXmrXUhHZP4s56Y
          claim_id: c_ZAc44D9TBuVQuLWBcqN5Wa
          source_id: s_cg9GmtLW8jT9LjmZhduYer
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
        id: c_8psD4C1tBwXUaPXwK4iXGH
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HH4udUpwsXPeCfqGGdtXdX
          claim_id: c_8psD4C1tBwXUaPXwK4iXGH
          source_id: s_cg9GmtLW8jT9LjmZhduYer
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
        id: c_BykdASBiJ5yFBjF5SvGP89
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺（743年—819年），唐人物。籍贯益都。（中国历代人物传记资料库 CBDB 141115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g-K1uA1VbKTs4ywzGhL5s8
          claim_id: c_BykdASBiJ5yFBjF5SvGP89
          source_id: s_cg9GmtLW8jT9LjmZhduYer
          stance: supports
          locator: CBDB:141115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-jhyI3NEcTf1cVs22LU7wV
        subject_person_id: p_LZDyxwkDn7hMScsFxGBinn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AYwLvwktQvkDwIKV8qK6oO
          claim_id: c_-jhyI3NEcTf1cVs22LU7wV
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KQEbMKSZa9BLKNscTj9VYb
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 157222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json
            external_identifier: CBDB:157222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LZDyxwkDn7hMScsFxGBinn
        status: active
        display_name: 王金
        merged_into_person_id: null
  children:
    - claim:
        id: c_9q6raju8qnBPbnoNrJT-el
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wYatJZEPhxC13F1U63sYX7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlOvHACFGlP0rjUYVx0hsv
          claim_id: c_9q6raju8qnBPbnoNrJT-el
          source_id: s_v16pidP29KRspuAfHA9EJx
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v16pidP29KRspuAfHA9EJx
            source_type: api_record
            title: 中国历代人物传记资料库：王中和（CBDB 157225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157225&o=json
            external_identifier: CBDB:157225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wYatJZEPhxC13F1U63sYX7
        status: active
        display_name: 王中和
        merged_into_person_id: null
    - claim:
        id: c_UC_klhGAR3VdmIhcVQqQpH
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JXS7WxyCeaBXvxcHq83ALZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggm6NxNBVqfRMuV3CSWsOv
          claim_id: c_UC_klhGAR3VdmIhcVQqQpH
          source_id: s_ZhGL5Xcvwrw85zDhBGXQ5R
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZhGL5Xcvwrw85zDhBGXQ5R
            source_type: api_record
            title: 中国历代人物传记资料库：王十一娘子（CBDB 157223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157223&o=json
            external_identifier: CBDB:157223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JXS7WxyCeaBXvxcHq83ALZ
        status: active
        display_name: 王十一娘子
        merged_into_person_id: null
    - claim:
        id: c_tvho6qH7EAHB-8SLkJC7nV
        subject_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kj7xLVAdnL38cq8xDTKsqF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yk3KfFGOscMbdaLMOPpHEr
          claim_id: c_tvho6qH7EAHB-8SLkJC7nV
          source_id: s_MCYxkZEfp8k1XxDvQs3Mu8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MCYxkZEfp8k1XxDvQs3Mu8
            source_type: api_record
            title: 中国历代人物传记资料库：王叔遇（CBDB 157224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157224&o=json
            external_identifier: CBDB:157224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kj7xLVAdnL38cq8xDTKsqF
        status: active
        display_name: 王叔遇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_OAvQPBxktJGA0O-Q_ckLdg
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TLse3kW0V9e6_nTV_N3dZb
          claim_id: c_OAvQPBxktJGA0O-Q_ckLdg
          source_id: s_s2qoiFBFxGRHuppuK458Xb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s2qoiFBFxGRHuppuK458Xb
            source_type: api_record
            title: 中国历代人物传记资料库：王甑（CBDB 157221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157221&o=json
            external_identifier: CBDB:157221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_P33RYgqY1FK4DDnEQWNQTK
        status: active
        display_name: 王甑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佺 | accepted |
| birth.date | 743年 | accepted |
| death.date | 819年 | accepted |
| bio.summary | 王佺（743年—819年），唐人物。籍贯益都。（中国历代人物传记资料库 CBDB 141115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LZDyxwkDn7hMScsFxGBinn | 王金 | accepted |
| children | p_wYatJZEPhxC13F1U63sYX7 | 王中和 | accepted |
| children | p_JXS7WxyCeaBXvxcHq83ALZ | 王十一娘子 | accepted |
| children | p_kj7xLVAdnL38cq8xDTKsqF | 王叔遇 | accepted |
| ancestors | p_P33RYgqY1FK4DDnEQWNQTK | 王甑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 157222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json)
- [中国历代人物传记资料库：王佺（CBDB 141115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141115&o=json)
- [中国历代人物传记资料库：王十一娘子（CBDB 157223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157223&o=json)
- [中国历代人物传记资料库：王叔遇（CBDB 157224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157224&o=json)
- [中国历代人物传记资料库：王甑（CBDB 157221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157221&o=json)
- [中国历代人物传记资料库：王中和（CBDB 157225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157225&o=json)
