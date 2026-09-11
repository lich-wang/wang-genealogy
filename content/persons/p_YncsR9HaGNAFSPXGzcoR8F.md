---
schema: wang-person/v1
id: p_YncsR9HaGNAFSPXGzcoR8F
status: active
merged_into: null
display_name: 王詢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4mHkrdcv4RidNFZt23JKN
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FBBYahM3eU4F8PGgVJkJcy
          claim_id: c_p4mHkrdcv4RidNFZt23JKN
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
          stance: supports
          locator: CBDB:140161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140161）
          source: &a1
            id: s_jSyyCsHQdGGrTTWwGHzmPh
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 140161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140161&o=json
            external_identifier: CBDB:140161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KFuDcaGdbSTdgWdXZqEg6P
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 605年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DAm9oA9M4gy5NSJLjF5cP6
          claim_id: c_KFuDcaGdbSTdgWdXZqEg6P
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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
        id: c_nwSkV6MtSXPM7DMrDj5MUK
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9P5Uyn5JBRUyTCNutiW5J9
          claim_id: c_nwSkV6MtSXPM7DMrDj5MUK
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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
        id: c_M6m81jK5AkieSFMF6JRtAR
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
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
        - id: cs_n9Db5qAtEY4Q1JQoNeo7SX
          claim_id: c_M6m81jK5AkieSFMF6JRtAR
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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
        id: c_HwtQQ_27LXtKwQZooqXAAk
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7UtRMxAfbFv3b7QhMfYg8M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LU3mQQjo9CDgJm7rtFBA_D
          claim_id: c_HwtQQ_27LXtKwQZooqXAAk
          source_id: s_yfSPwWUQKSm2KfxSMWGVBD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yfSPwWUQKSm2KfxSMWGVBD
            source_type: api_record
            title: 中国历代人物传记资料库：王安定（CBDB 150497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150497&o=json
            external_identifier: CBDB:150497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7UtRMxAfbFv3b7QhMfYg8M
        status: active
        display_name: 王安定
        merged_into_person_id: null
    - claim:
        id: c_xWbf7M78t9UbgkzRsuc7OQ
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bEJ6zpyrnLKEfRt5W2BBn8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nv0-zrg8J3_x0J7xsENO5l
          claim_id: c_xWbf7M78t9UbgkzRsuc7OQ
          source_id: s_8zGcRhvW69VwTi7Cc3csTG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shenlong 6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8zGcRhvW69VwTi7Cc3csTG
            source_type: api_record
            title: 中国历代人物传记资料库：王及德（CBDB 140183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json
            external_identifier: CBDB:140183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bEJ6zpyrnLKEfRt5W2BBn8
        status: active
        display_name: 王及德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| birth.date | 605年 | accepted |
| death.date | 676年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7UtRMxAfbFv3b7QhMfYg8M | 王安定 | accepted |
| children | p_bEJ6zpyrnLKEfRt5W2BBn8 | 王及德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安定（CBDB 150497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150497&o=json)
- [中国历代人物传记资料库：王及德（CBDB 140183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140183&o=json)
- [中国历代人物传记资料库：王詢（CBDB 140161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140161&o=json)
