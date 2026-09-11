---
schema: wang-person/v1
id: p_AiG6QrCQGQD3MPcSgAchU7
status: active
merged_into: null
display_name: 王宸
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPYPBwxeoKA4mb8vCwdx8D
        subject_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UEAu59VDG6YBCvFuDxhLJA
          claim_id: c_TPYPBwxeoKA4mb8vCwdx8D
          source_id: s_489dyY41ue25PHCbu14cLr
          stance: supports
          locator: CBDB:126630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126630）
          source: &a1
            id: s_489dyY41ue25PHCbu14cLr
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 126630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126630&o=json
            external_identifier: CBDB:126630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fds26mEduBduGMKs15mYN2
        subject_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1m64w6uD1H16VCwgbzVeJ1
          claim_id: c_Fds26mEduBduGMKs15mYN2
          source_id: s_489dyY41ue25PHCbu14cLr
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
        id: c_rQRzZw9um05XLlzsiT9T8j
        subject_person_id: p_jCK8R3MaCsiE6Le8VKcP4N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFkFM7a9gRCypm49J1_PTx
          claim_id: c_rQRzZw9um05XLlzsiT9T8j
          source_id: s_3dGuJiVSs29A7N84d5o85M
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3dGuJiVSs29A7N84d5o85M
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 261739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261739&o=json
            external_identifier: CBDB:261739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jCK8R3MaCsiE6Le8VKcP4N
        status: active
        display_name: 王霖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oma8rf2zhrtUnXfZVYxEC-
        subject_person_id: p_5wuv4yjMrao5f2DNDqdSNF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcRlmznjeimhJqHizz8szG
          claim_id: c_oma8rf2zhrtUnXfZVYxEC-
          source_id: s_2nXcGbsErr41mUy3PU3kJG
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2nXcGbsErr41mUy3PU3kJG
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 261738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261738&o=json
            external_identifier: CBDB:261738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5wuv4yjMrao5f2DNDqdSNF
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c__ivNuHRe2YyWbpnoOwLUPN
        subject_person_id: p_NUGZxG8CRGQAZaz13iyc8P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AiG6QrCQGQD3MPcSgAchU7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_djQp_FPl3Zj8HcAZ9xg4RG
          claim_id: c__ivNuHRe2YyWbpnoOwLUPN
          source_id: s_AGVE87G1b97toMJ5X5g1Tm
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AGVE87G1b97toMJ5X5g1Tm
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 261737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261737&o=json
            external_identifier: CBDB:261737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NUGZxG8CRGQAZaz13iyc8P
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCK8R3MaCsiE6Le8VKcP4N | 王霖 | accepted |
| ancestors | p_5wuv4yjMrao5f2DNDqdSNF | 王能 | accepted |
| ancestors | p_NUGZxG8CRGQAZaz13iyc8P | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 126630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126630&o=json)
- [中国历代人物传记资料库：王成（CBDB 261737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261737&o=json)
- [中国历代人物传记资料库：王霖（CBDB 261739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261739&o=json)
- [中国历代人物传记资料库：王能（CBDB 261738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261738&o=json)
