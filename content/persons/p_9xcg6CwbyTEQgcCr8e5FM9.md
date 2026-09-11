---
schema: wang-person/v1
id: p_9xcg6CwbyTEQgcCr8e5FM9
status: active
merged_into: null
display_name: 王侁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQmYxfc9iR14SqYULd3NCv
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kk1qKzBmXYsk8NnQqamG9o
          claim_id: c_iQmYxfc9iR14SqYULd3NCv
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: CBDB:140136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140136）
          source: &a1
            id: s_MHQj8p6JKDeBHpAZKz9dix
            source_type: api_record
            title: 中国历代人物传记资料库：王侁（CBDB 140136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140136&o=json
            external_identifier: CBDB:140136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1bTTiuGztCz6D8NQFMAA4s
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 652年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73Xbi2rJftJcHuX4Y5wmjY
          claim_id: c_1bTTiuGztCz6D8NQFMAA4s
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
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
        id: c_cmNc1Jh9AwoVoEUxbYCFQw
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 702年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERn71owNDrDNYCP6m78U7v
          claim_id: c_cmNc1Jh9AwoVoEUxbYCFQw
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
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
        id: c_g4PWid5qeamdBto5PTxXzX
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZUXoqji7k3BgwaS86TmP5t
          claim_id: c_g4PWid5qeamdBto5PTxXzX
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
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
        id: c_dVpVya96JIu_X3Yjy6mEbc
        subject_person_id: p_guYr4ZdNuqkgdxQE2cH7Dh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6CFaKRYBIC2gASqxJcdCh
          claim_id: c_dVpVya96JIu_X3Yjy6mEbc
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_guYr4ZdNuqkgdxQE2cH7Dh
        status: active
        display_name: 王感
        merged_into_person_id: null
  children:
    - claim:
        id: c_mb48isdvAa-cmOL7r4ite6
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MoXDbNQNaeNKc9hN1zvHox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Yo3a4XYFE77XazbQ1ssPb
          claim_id: c_mb48isdvAa-cmOL7r4ite6
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoXDbNQNaeNKc9hN1zvHox
        status: active
        display_name: 王仙敬
        merged_into_person_id: null
    - claim:
        id: c_q9M6vdbfWP8nLKo_Hn-xzJ
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4bw3hL8tv3Hh7uNoH8iyNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGsSD3JJEwIMYfWEZjQPE2
          claim_id: c_q9M6vdbfWP8nLKo_Hn-xzJ
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4bw3hL8tv3Hh7uNoH8iyNz
        status: active
        display_name: 王仙童
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_onoHROruPXydC3eoBejlCH
        subject_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_p8vCQF9D6ZH2rjfFnPyq9Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Bzx7RUxF4nCycsx_YZQ7-
          claim_id: c_onoHROruPXydC3eoBejlCH
          source_id: s_ZChT-vNXy2vl2tqaORhRUR
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZChT-vNXy2vl2tqaORhRUR
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王侁妻)（CBDB 150412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150412&o=json
            external_identifier: CBDB:150412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p8vCQF9D6ZH2rjfFnPyq9Y
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_90cZhO5LIUdysebEfQiXao
        subject_person_id: p_fWQug9xQCTzMH5DTZi3S5g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9xcg6CwbyTEQgcCr8e5FM9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ULeQflznM3tyYQEVmIwqrV
          claim_id: c_90cZhO5LIUdysebEfQiXao
          source_id: s_MHQj8p6JKDeBHpAZKz9dix
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 31：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fWQug9xQCTzMH5DTZi3S5g
        status: active
        display_name: 王僧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王侁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侁 | accepted |
| birth.date | 652年 | accepted |
| death.date | 702年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_guYr4ZdNuqkgdxQE2cH7Dh | 王感 | accepted |
| children | p_MoXDbNQNaeNKc9hN1zvHox | 王仙敬 | accepted |
| children | p_4bw3hL8tv3Hh7uNoH8iyNz | 王仙童 | accepted |
| spouses | p_p8vCQF9D6ZH2rjfFnPyq9Y | 李氏 | accepted |
| ancestors | p_fWQug9xQCTzMH5DTZi3S5g | 王僧 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王侁妻)（CBDB 150412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150412&o=json)
- [中国历代人物传记资料库：王侁（CBDB 140136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140136&o=json)
