---
schema: wang-person/v1
id: p_DgX7FNniEsVX1Bk7YAzJBg
status: active
merged_into: null
display_name: 王蔚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjHjD6Y2PavYFnAucGCz9k
        subject_person_id: p_DgX7FNniEsVX1Bk7YAzJBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MwbSgstpQbDu6EDehAKz5M
          claim_id: c_NjHjD6Y2PavYFnAucGCz9k
          source_id: s_j5R6WbJancNjqYNKjhQfQn
          stance: supports
          locator: CBDB:336683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336683）
          source: &a1
            id: s_j5R6WbJancNjqYNKjhQfQn
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 336683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json
            external_identifier: CBDB:336683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sDZ5aK8cJrcRPGf7qdAMQC
        subject_person_id: p_DgX7FNniEsVX1Bk7YAzJBg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔚，明人物。隆慶二年進士，籍贯清源。（中国历代人物传记资料库 CBDB 336683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FhLJqBNspdg6jHsRntjh0M
          claim_id: c_sDZ5aK8cJrcRPGf7qdAMQC
          source_id: s_j5R6WbJancNjqYNKjhQfQn
          stance: supports
          locator: CBDB:336683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yhM7dnbZnp9-aWApjOSf5Q
        subject_person_id: p_VE28NqLkKGnLAhg7LWjfCA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DgX7FNniEsVX1Bk7YAzJBg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_264Gf_3dvUrwkCNBHoFXZX
          claim_id: c_yhM7dnbZnp9-aWApjOSf5Q
          source_id: s_dGNzDCtQ0od2Q_Q3xN2wO-
          stance: supports
          locator: CBDB：兄弟 王藻（205665）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王蔚 与 王藻 为同胞（CBDB 记「弟」），王藻 之父／母即 王蔚 之父／母。
          source:
            id: s_dGNzDCtQ0od2Q_Q3xN2wO-
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 336683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json
            external_identifier: CBDB:336683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VE28NqLkKGnLAhg7LWjfCA
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ueZ3HvRg7CM7xM931rtAUb
        subject_person_id: p_DgX7FNniEsVX1Bk7YAzJBg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WfLtQwVEGpoYGNPH8XRY6N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7Uau-lDRvxrMCg8sYRich
          claim_id: c_ueZ3HvRg7CM7xM931rtAUb
          source_id: s_dGNzDCtQ0od2Q_Q3xN2wO-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205665 王藻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dGNzDCtQ0od2Q_Q3xN2wO-
            source_type: api_record
            title: 中国历代人物传记资料库：王蔚（CBDB 336683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json
            external_identifier: CBDB:336683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WfLtQwVEGpoYGNPH8XRY6N
        status: active
        display_name: 王藻
        merged_into_person_id: null
---

# 王蔚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔚 | accepted |
| bio.summary | 王蔚，明人物。隆慶二年進士，籍贯清源。（中国历代人物传记资料库 CBDB 336683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VE28NqLkKGnLAhg7LWjfCA | 王撫民 | accepted |
| other | p_WfLtQwVEGpoYGNPH8XRY6N | 王藻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蔚（CBDB 336683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336683&o=json)
