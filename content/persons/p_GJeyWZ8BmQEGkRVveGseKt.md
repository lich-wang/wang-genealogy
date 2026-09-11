---
schema: wang-person/v1
id: p_GJeyWZ8BmQEGkRVveGseKt
status: active
merged_into: null
display_name: 王方徹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZ6MduCZK7BK3mrcujmWNt
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8BAnerTq6RdLaARah2RmKP
          claim_id: c_FZ6MduCZK7BK3mrcujmWNt
          source_id: s_EX3U4a4j8KHM9p8usA792N
          stance: supports
          locator: CBDB:141793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141793）
          source: &a1
            id: s_EX3U4a4j8KHM9p8usA792N
            source_type: api_record
            title: 中国历代人物传记资料库：王方徹（CBDB 141793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141793&o=json
            external_identifier: CBDB:141793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fP4RC9DM4a3rfLdoVr9zEw
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 772年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfpCiQvQhyXTfFKbrxYLJp
          claim_id: c_fP4RC9DM4a3rfLdoVr9zEw
          source_id: s_EX3U4a4j8KHM9p8usA792N
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
        id: c_E5d3m9axfDq8exhtUKvvae
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFmX8yo8xVte6DvUt5zbRh
          claim_id: c_E5d3m9axfDq8exhtUKvvae
          source_id: s_EX3U4a4j8KHM9p8usA792N
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
        id: c_PLdMjHjjmPXo5vg6iJYTwF
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
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
        - id: cs_4vysyxAgBaLEJEkZRdw29n
          claim_id: c_PLdMjHjjmPXo5vg6iJYTwF
          source_id: s_EX3U4a4j8KHM9p8usA792N
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LzmiiDd1pGLHc-HDqWPY48
        subject_person_id: p_GJeyWZ8BmQEGkRVveGseKt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_55kRYvfKuc5skQp3jaRLSP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uoTv1s_rDlcxxMkyWGjt3i
          claim_id: c_LzmiiDd1pGLHc-HDqWPY48
          source_id: s_v9mrUd9LJrnuL4AekdUihW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 7：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v9mrUd9LJrnuL4AekdUihW
            source_type: api_record
            title: 中国历代人物传记资料库：王元亮（CBDB 158557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158557&o=json
            external_identifier: CBDB:158557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_55kRYvfKuc5skQp3jaRLSP
        status: active
        display_name: 王元亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方徹 | accepted |
| birth.date | 772年 | accepted |
| death.date | 840年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_55kRYvfKuc5skQp3jaRLSP | 王元亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方徹（CBDB 141793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141793&o=json)
- [中国历代人物传记资料库：王元亮（CBDB 158557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158557&o=json)
