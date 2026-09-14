---
schema: wang-person/v1
id: p_Gk3kgE8MCobSvJHrxFNS48
status: active
merged_into: null
display_name: 王璋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNoQekbSqX4ByYKdG4kskM
        subject_person_id: p_Gk3kgE8MCobSvJHrxFNS48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bhvLTBxuLT6mobYFTeUC7t
          claim_id: c_MNoQekbSqX4ByYKdG4kskM
          source_id: s_9DZAVqbtJw5WtKGw1txNnu
          stance: supports
          locator: CBDB:246754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246754）
          source: &a1
            id: s_9DZAVqbtJw5WtKGw1txNnu
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 246754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246754&o=json
            external_identifier: CBDB:246754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XARjQCeJPuAzW8bQD9Sg1C
        subject_person_id: p_Gk3kgE8MCobSvJHrxFNS48
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。成化八年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 246754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LSV5lGSEzv11FNIAa3B26b
          claim_id: c_XARjQCeJPuAzW8bQD9Sg1C
          source_id: s_9DZAVqbtJw5WtKGw1txNnu
          stance: supports
          locator: CBDB:246754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qRs75u2U7_HF_hEUR-VVfO
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Gk3kgE8MCobSvJHrxFNS48
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I-NbFWhK4EYcZC4YqIlQCJ
          claim_id: c_qRs75u2U7_HF_hEUR-VVfO
          source_id: s_xfyWi4n98jWvZ69NtUslfq
          stance: supports
          locator: CBDB：兄弟 王璟（67987）之父／母 王纲
          quotation: null
          interpretation_note: 由兄弟关系推断：王璋 与 王璟 为同胞（CBDB 记「弟」），王璟 之父／母即 王璋 之父／母。
          source:
            id: s_xfyWi4n98jWvZ69NtUslfq
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 246754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246754&o=json
            external_identifier: CBDB:246754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sw3d858SSyyvRPzeeoi5f5
        status: active
        display_name: 王纲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MtzambSql50qTg8oecbowI
        subject_person_id: p_7koQzcggkeDLYupbQwieGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Gk3kgE8MCobSvJHrxFNS48
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iv9ZUYWOBmWfC2ii5xgttb
          claim_id: c_MtzambSql50qTg8oecbowI
          source_id: s_xfyWi4n98jWvZ69NtUslfq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67987 王璟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xfyWi4n98jWvZ69NtUslfq
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 246754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246754&o=json
            external_identifier: CBDB:246754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。成化八年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 246754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sw3d858SSyyvRPzeeoi5f5 | 王纲 | accepted |
| other | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 246754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246754&o=json)
