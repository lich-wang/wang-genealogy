---
schema: wang-person/v1
id: p_UoDuFWRFgfGtUzy5hZREHx
status: active
merged_into: null
display_name: 王元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ASxv8bxv6sMaBiJn9GT8rB
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aM2eHmY7NfYQm1XDxpivKT
          claim_id: c_ASxv8bxv6sMaBiJn9GT8rB
          source_id: s_b9Ap6ntTbNBcctP6BU1frR
          stance: supports
          locator: CBDB:140364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140364）
          source: &a1
            id: s_b9Ap6ntTbNBcctP6BU1frR
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 140364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140364&o=json
            external_identifier: CBDB:140364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q1R1a5KeSbH1faGLxFTZeQ
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 649年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMuUqqtKFnf5njQcmgV9XH
          claim_id: c_q1R1a5KeSbH1faGLxFTZeQ
          source_id: s_b9Ap6ntTbNBcctP6BU1frR
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
        id: c_HmiZj9YTojm6gN6Kd2PqJR
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 719年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4oQnv1wN93DxyW2TYMbhFf
          claim_id: c_HmiZj9YTojm6gN6Kd2PqJR
          source_id: s_b9Ap6ntTbNBcctP6BU1frR
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
        id: c_vYRXHFpPnNQwCbLjHXHYyQ
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
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
        - id: cs_uxGGS3eq1BNiHKJ8W4HiDm
          claim_id: c_vYRXHFpPnNQwCbLjHXHYyQ
          source_id: s_b9Ap6ntTbNBcctP6BU1frR
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
        id: c_BU_ghi8NJQJe03Cv5mQsY9
        subject_person_id: p_ain7hDXbbjgDRvUKBowfTr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AyiZfN9lz7FFewKAJzerW5
          claim_id: c_BU_ghi8NJQJe03Cv5mQsY9
          source_id: s_uRQVNZ5ctLt9u7ByMd79cQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 90：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uRQVNZ5ctLt9u7ByMd79cQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 151424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151424&o=json
            external_identifier: CBDB:151424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ain7hDXbbjgDRvUKBowfTr
        status: active
        display_name: 王師
        merged_into_person_id: null
  children:
    - claim:
        id: c_xvG8k-nuMp3H3KAYJkif_R
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dNCKSLDkfJXP4qCC6kdJrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i9myUaQEzh-sRHPiLr5ls6
          claim_id: c_xvG8k-nuMp3H3KAYJkif_R
          source_id: s_N9YQouA53mB82bYussXD9q
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 90：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N9YQouA53mB82bYussXD9q
            source_type: api_record
            title: 中国历代人物传记资料库：王懷古（CBDB 151426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151426&o=json
            external_identifier: CBDB:151426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dNCKSLDkfJXP4qCC6kdJrK
        status: active
        display_name: 王懷古
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| birth.date | 649年 | accepted |
| death.date | 719年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ain7hDXbbjgDRvUKBowfTr | 王師 | accepted |
| children | p_dNCKSLDkfJXP4qCC6kdJrK | 王懷古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷古（CBDB 151426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151426&o=json)
- [中国历代人物传记资料库：王師（CBDB 151424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151424&o=json)
- [中国历代人物传记资料库：王元（CBDB 140364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140364&o=json)
