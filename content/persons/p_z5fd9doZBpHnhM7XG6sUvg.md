---
schema: wang-person/v1
id: p_z5fd9doZBpHnhM7XG6sUvg
status: active
merged_into: null
display_name: 王佺
revision: 3
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
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XvT4EbLe5LLMAu9fL4zDAu
          claim_id: c_BykdASBiJ5yFBjF5SvGP89
          source_id: s_cg9GmtLW8jT9LjmZhduYer
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
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
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LZDyxwkDn7hMScsFxGBinn | 王金 | accepted |
| children | p_wYatJZEPhxC13F1U63sYX7 | 王中和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 157222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json)
- [中国历代人物传记资料库：王佺（CBDB 141115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141115&o=json)
- [中国历代人物传记资料库：王中和（CBDB 157225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157225&o=json)
