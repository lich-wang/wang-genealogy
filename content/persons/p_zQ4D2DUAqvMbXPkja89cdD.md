---
schema: wang-person/v1
id: p_zQ4D2DUAqvMbXPkja89cdD
status: active
merged_into: null
display_name: 王元逵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2fD39eFGLrkmxZiczbx1v
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXhoevQfLvnusUqMqXcF9n
          claim_id: c_U2fD39eFGLrkmxZiczbx1v
          source_id: s_8Lr8PNfBFd8reGJYgTkFk5
          stance: supports
          locator: CBDB:141936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141936）
          source: &a1
            id: s_8Lr8PNfBFd8reGJYgTkFk5
            source_type: api_record
            title: 中国历代人物传记资料库：王元逵（CBDB 141936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141936&o=json
            external_identifier: CBDB:141936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gWXDtMd7QddhvnZVuvB5sK
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 812年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hq9pxvSFMPUmQR7x3SHfDf
          claim_id: c_gWXDtMd7QddhvnZVuvB5sK
          source_id: s_8Lr8PNfBFd8reGJYgTkFk5
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
        id: c_4wyM4VYHpQKzFBt73QDmN1
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1enLcvCERYK3T2Ay2Jcnmv
          claim_id: c_4wyM4VYHpQKzFBt73QDmN1
          source_id: s_8Lr8PNfBFd8reGJYgTkFk5
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
        id: c_N4L4aHSZ5YpmxeJrf9LEVA
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
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
        - id: cs_khXbA9fo1cti3QBTszyjXz
          claim_id: c_N4L4aHSZ5YpmxeJrf9LEVA
          source_id: s_8Lr8PNfBFd8reGJYgTkFk5
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
        id: c_VFwtnaUDqHdPbx5sP0dsjP
        subject_person_id: p_36VqJ7FLLuHKS3quQPFxPU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8RsnF5spYhj8mw4b2uoWcT
          claim_id: c_VFwtnaUDqHdPbx5sP0dsjP
          source_id: s_8czPL1D4SsjsPPbhF8fzjf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 96：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8czPL1D4SsjsPPbhF8fzjf
            source_type: api_record
            title: 中国历代人物传记资料库：王庭湊（CBDB 159537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159537&o=json
            external_identifier: CBDB:159537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_36VqJ7FLLuHKS3quQPFxPU
        status: active
        display_name: 王庭湊
        merged_into_person_id: null
  children:
    - claim:
        id: c_7a-Hjc1UKLYf7IamujExyj
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_43NmJrgNPyJwDEy9AneDsx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5A2RgZqFFbPxi7liAKHXGA
          claim_id: c_7a-Hjc1UKLYf7IamujExyj
          source_id: s_EZGGV4JuQ6zwB941EsGdGo
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 96：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EZGGV4JuQ6zwB941EsGdGo
            source_type: api_record
            title: 中国历代人物传记资料库：王紹烈（CBDB 159539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159539&o=json
            external_identifier: CBDB:159539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_43NmJrgNPyJwDEy9AneDsx
        status: active
        display_name: 王紹烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元逵 | accepted |
| birth.date | 812年 | accepted |
| death.date | 854年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_36VqJ7FLLuHKS3quQPFxPU | 王庭湊 | accepted |
| children | p_43NmJrgNPyJwDEy9AneDsx | 王紹烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹烈（CBDB 159539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159539&o=json)
- [中国历代人物传记资料库：王庭湊（CBDB 159537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159537&o=json)
- [中国历代人物传记资料库：王元逵（CBDB 141936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141936&o=json)
