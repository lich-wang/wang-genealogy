---
schema: wang-person/v1
id: p_KR3Eo7CoFtiQp8zakLvrt5
status: active
merged_into: null
display_name: 王汝楫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gn9b4jFGKLV8XhMtjuN7Fx
        subject_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SeZDjN1TPP2EfBrSQmq4TG
          claim_id: c_Gn9b4jFGKLV8XhMtjuN7Fx
          source_id: s_gLwFYU5Pc9zJstFwSt9ezD
          stance: supports
          locator: CBDB:282878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282878）
          source: &a1
            id: s_gLwFYU5Pc9zJstFwSt9ezD
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 282878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json
            external_identifier: CBDB:282878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HY3rE5r8s41f8zF88N9aki
        subject_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫，明人物。正德十二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 282878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r9R97SXF9ynVTNbwV0pg4s
          claim_id: c_HY3rE5r8s41f8zF88N9aki
          source_id: s_gLwFYU5Pc9zJstFwSt9ezD
          stance: supports
          locator: CBDB:282878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hB7YPxDV58lTAFr-dzT4LO
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Du9WzL4m9M4Fp8KwHZxDw
          claim_id: c_hB7YPxDV58lTAFr-dzT4LO
          source_id: s_Nfi2DVmwrEYCXpMWT2GFKs
          stance: supports
          locator: CBDB：兄弟 王汝梅（68445）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝楫 与 王汝梅 为同胞（CBDB 记「弟」），王汝梅 之父／母即 王汝楫 之父／母。
          source:
            id: s_Nfi2DVmwrEYCXpMWT2GFKs
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 282878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json
            external_identifier: CBDB:282878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M8mLU7jMxuqHMpgBkkJ8hB
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wMCXPAy4ZmVCP2bibg7aAX
        subject_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDWAxMB8BXrkM-kVm83_nj
          claim_id: c_wMCXPAy4ZmVCP2bibg7aAX
          source_id: s_Nfi2DVmwrEYCXpMWT2GFKs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68445 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nfi2DVmwrEYCXpMWT2GFKs
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 282878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json
            external_identifier: CBDB:282878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x6tYqQFJHDF8Lt8wgXM9MU
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| bio.summary | 王汝楫，明人物。正德十二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 282878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M8mLU7jMxuqHMpgBkkJ8hB | 王弼 | accepted |
| other | p_x6tYqQFJHDF8Lt8wgXM9MU | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝楫（CBDB 282878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json)
