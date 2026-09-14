---
schema: wang-person/v1
id: p_fHK3CiQCVAuSCPFGRi3c2V
status: active
merged_into: null
display_name: 王尚賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJhXZc984wKSVwCackMqib
        subject_person_id: p_fHK3CiQCVAuSCPFGRi3c2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gqDdTWMBgMJUvbSTir4kZ3
          claim_id: c_JJhXZc984wKSVwCackMqib
          source_id: s_3i9ACtVHhYDuNy63nvakcL
          stance: supports
          locator: CBDB:226924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226924）
          source: &a1
            id: s_3i9ACtVHhYDuNy63nvakcL
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 226924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json
            external_identifier: CBDB:226924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HbWMCxJkf2EUaU4sNRivtA
        subject_person_id: p_fHK3CiQCVAuSCPFGRi3c2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226924）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5WwWT3-dtlDcc_zmpybSYG
          claim_id: c_HbWMCxJkf2EUaU4sNRivtA
          source_id: s_3i9ACtVHhYDuNy63nvakcL
          stance: supports
          locator: CBDB:226924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n3styXeG48CiLxuXD73vUz
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fHK3CiQCVAuSCPFGRi3c2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKM5Cwq773PxB9MsIiT1CC
          claim_id: c_n3styXeG48CiLxuXD73vUz
          source_id: s_pTPq_qQGIuvg8L2jptBg3-
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賢 与 王立賢 为同胞（CBDB 记「弟」），王立賢 之父／母即 王尚賢 之父／母。
          source:
            id: s_pTPq_qQGIuvg8L2jptBg3-
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 226924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json
            external_identifier: CBDB:226924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MZb3xwrJh2KS7jR6a3sirM
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PA2SekEuGIGmZKnXGCJygh
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fHK3CiQCVAuSCPFGRi3c2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JyLMjdpgX4Z7fK5DvkaM98
          claim_id: c_PA2SekEuGIGmZKnXGCJygh
          source_id: s_pTPq_qQGIuvg8L2jptBg3-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207055 王立賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pTPq_qQGIuvg8L2jptBg3-
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 226924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json
            external_identifier: CBDB:226924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
---

# 王尚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賢 | accepted |
| bio.summary | 王尚賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZb3xwrJh2KS7jR6a3sirM | 王佐 | accepted |
| other | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚賢（CBDB 226924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226924&o=json)
