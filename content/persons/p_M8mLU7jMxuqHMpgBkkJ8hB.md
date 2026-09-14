---
schema: wang-person/v1
id: p_M8mLU7jMxuqHMpgBkkJ8hB
status: active
merged_into: null
display_name: 王弼
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66DDq73cujENi5Dq5Xoszz
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gWALLXgWQm6cHBVS9NgPF5
          claim_id: c_66DDq73cujENi5Dq5Xoszz
          source_id: s_GC7KhHLDBYxt1GDpJmnL8q
          stance: supports
          locator: CBDB:282871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282871）
          source: &a1
            id: s_GC7KhHLDBYxt1GDpJmnL8q
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 282871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282871&o=json
            external_identifier: CBDB:282871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LhmgKWe1QowEkB88EE5vNF
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼，明人物。正德十二年進士，籍贯華陽，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 282871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s3_b0K6YDzfU__iM5hpx9Y
          claim_id: c_LhmgKWe1QowEkB88EE5vNF
          source_id: s_GC7KhHLDBYxt1GDpJmnL8q
          stance: supports
          locator: CBDB:282871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MqnFHMWOb__UIJmm2zzi36
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x6tYqQFJHDF8Lt8wgXM9MU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pZN9-OVe5cHfSSL1YxR9q5
          claim_id: c_MqnFHMWOb__UIJmm2zzi36
          source_id: s_GC7KhHLDBYxt1GDpJmnL8q
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x6tYqQFJHDF8Lt8wgXM9MU
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
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
        id: p_KR3Eo7CoFtiQp8zakLvrt5
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
    - claim:
        id: c_q_eG5sXnO_d9aNSJQC9E7K
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YABu7YCQPvJiPqDitjAkDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J2-mXpWIuoe2UAT-x1uJVj
          claim_id: c_q_eG5sXnO_d9aNSJQC9E7K
          source_id: s__QzDMBTTu6Obv1y018jGFe
          stance: supports
          locator: CBDB：兄弟 王汝梅（68445）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝鹽 与 王汝梅 为同胞（CBDB 记「弟」），王汝梅 之父／母即 王汝鹽 之父／母。
          source:
            id: s__QzDMBTTu6Obv1y018jGFe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝鹽（CBDB 282879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json
            external_identifier: CBDB:282879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YABu7YCQPvJiPqDitjAkDp
        status: active
        display_name: 王汝鹽
        merged_into_person_id: null
    - claim:
        id: c_fY9no7WYA_yjq55CFC7KUk
        subject_person_id: p_M8mLU7jMxuqHMpgBkkJ8hB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bq2zPCky8J63pNtwo3GzPU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5q7Tok6oq6CnffUrB5E89
          claim_id: c_fY9no7WYA_yjq55CFC7KUk
          source_id: s_IF94Z7yqjFha9DfrNpn2aR
          stance: supports
          locator: CBDB：兄弟 王汝梅（68445）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝舟 与 王汝梅 为同胞（CBDB 记「弟」），王汝梅 之父／母即 王汝舟 之父／母。
          source:
            id: s_IF94Z7yqjFha9DfrNpn2aR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 282877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json
            external_identifier: CBDB:282877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bq2zPCky8J63pNtwo3GzPU
        status: active
        display_name: 王汝舟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | 王弼，明人物。正德十二年進士，籍贯華陽，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 282871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x6tYqQFJHDF8Lt8wgXM9MU | 王汝梅 | accepted |
| children | p_KR3Eo7CoFtiQp8zakLvrt5 | 王汝楫 | accepted |
| children | p_YABu7YCQPvJiPqDitjAkDp | 王汝鹽 | accepted |
| children | p_bq2zPCky8J63pNtwo3GzPU | 王汝舟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 282871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282871&o=json)
- [中国历代人物传记资料库：王汝楫（CBDB 282878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json)
- [中国历代人物传记资料库：王汝鹽（CBDB 282879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282879&o=json)
- [中国历代人物传记资料库：王汝舟（CBDB 282877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282877&o=json)
