---
schema: wang-person/v1
id: p_7qmh6ExHEGb6N6NWE8gC5i
status: active
merged_into: null
display_name: 王昭
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7bnB552gsCLqKqvJ9Gvua
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o2LCmAQfq7pCk1S84euJzr
          claim_id: c_F7bnB552gsCLqKqvJ9Gvua
          source_id: s_LaGtXL8bZHaMgGiByUGfsR
          stance: supports
          locator: CBDB:245152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245152）
          source: &a1
            id: s_LaGtXL8bZHaMgGiByUGfsR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 245152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json
            external_identifier: CBDB:245152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_biQ9jsTWQyojzn7iqCUE8T
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MBhZJQFh3lI5pFfbDlFqnc
          claim_id: c_biQ9jsTWQyojzn7iqCUE8T
          source_id: s_LaGtXL8bZHaMgGiByUGfsR
          stance: supports
          locator: CBDB:245152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_U7HJ1P-1e8R5oslTLmk_qL
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjxP37B86LLld-lJIY8FrT
          claim_id: c_U7HJ1P-1e8R5oslTLmk_qL
          source_id: s_LaGtXL8bZHaMgGiByUGfsR
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YA1G7T5veW43cswnoFX8Ym
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_Exm_O7B8sgvCe4uSalvLKU
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_54N819RTs5pjwtb5S3HRmk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecejpo-tQL-ySBIccjS2Xq
          claim_id: c_Exm_O7B8sgvCe4uSalvLKU
          source_id: s_7A9LZRXbcAmtqZju-DkMGb
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王禮 之父／母。
          source:
            id: s_7A9LZRXbcAmtqZju-DkMGb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json
            external_identifier: CBDB:245230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_54N819RTs5pjwtb5S3HRmk
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_D0qKWhCo1KJDTGPAPYdGLM
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8gEjy7pHcwdTK9VLWt6GWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UvjndRjRmt5o-jCydQfc6Q
          claim_id: c_D0qKWhCo1KJDTGPAPYdGLM
          source_id: s_pwNj5mVeegB9libgBwra-X
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王俊 之父／母。
          source:
            id: s_pwNj5mVeegB9libgBwra-X
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 245197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245197&o=json
            external_identifier: CBDB:245197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8gEjy7pHcwdTK9VLWt6GWo
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_bBjlq_NQqWY4voaXZdU7Um
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FWvZ6sTqvZcVxp6raPoXbp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3tZiOYNL3wLWAGTz6iGeF
          claim_id: c_bBjlq_NQqWY4voaXZdU7Um
          source_id: s_p34_hP5vWcb0GwQC5Z5rq6
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王仁 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王仁 之父／母。
          source:
            id: s_p34_hP5vWcb0GwQC5Z5rq6
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 245208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json
            external_identifier: CBDB:245208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FWvZ6sTqvZcVxp6raPoXbp
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_t9Ve7-omi8eQAFPSzdc5D5
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JMVqvEBj5oj2jaX7P1PA3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5YgQF2RLNqB4QJ2kB8W5C
          claim_id: c_t9Ve7-omi8eQAFPSzdc5D5
          source_id: s_67L5gY9iPDl7iHOUQfCJoX
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王義 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王義 之父／母。
          source:
            id: s_67L5gY9iPDl7iHOUQfCJoX
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 245219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json
            external_identifier: CBDB:245219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JMVqvEBj5oj2jaX7P1PA3S
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_TJ4qurRu3WdVWyufVGpkB-
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_efNHrGiotg4wybSbC9erZa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QvGMpridx_eUqR90BxwTLK
          claim_id: c_TJ4qurRu3WdVWyufVGpkB-
          source_id: s_69iNVaaNVoDM0ypC1Y-unk
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭 与 王智 为同胞（CBDB 记「兄」），王智 之父／母即 王恭 之父／母。
          source:
            id: s_69iNVaaNVoDM0ypC1Y-unk
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 245252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245252&o=json
            external_identifier: CBDB:245252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_efNHrGiotg4wybSbC9erZa
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_Y7zEgrAJe7MnXngYK2Rm5N
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gbG7ApcEri2g2HbS3ANnzm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXH2goAASqhOe5D3g7T9Ee
          claim_id: c_Y7zEgrAJe7MnXngYK2Rm5N
          source_id: s_zCRWTX-8wt1jh5h7jsmjzh
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王智 为同胞（CBDB 记「兄」），王智 之父／母即 王聰 之父／母。
          source:
            id: s_zCRWTX-8wt1jh5h7jsmjzh
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 245241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json
            external_identifier: CBDB:245241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gbG7ApcEri2g2HbS3ANnzm
        status: active
        display_name: 王聰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭 | accepted |
| bio.summary | 王昭，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YA1G7T5veW43cswnoFX8Ym | 王智 | accepted |
| children | p_54N819RTs5pjwtb5S3HRmk | 王禮 | accepted |
| children | p_8gEjy7pHcwdTK9VLWt6GWo | 王俊 | accepted |
| children | p_FWvZ6sTqvZcVxp6raPoXbp | 王仁 | accepted |
| children | p_JMVqvEBj5oj2jaX7P1PA3S | 王義 | accepted |
| children | p_efNHrGiotg4wybSbC9erZa | 王恭 | accepted |
| children | p_gbG7ApcEri2g2HbS3ANnzm | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 245241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245241&o=json)
- [中国历代人物传记资料库：王恭（CBDB 245252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245252&o=json)
- [中国历代人物传记资料库：王俊（CBDB 245197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245197&o=json)
- [中国历代人物传记资料库：王禮（CBDB 245230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json)
- [中国历代人物传记资料库：王仁（CBDB 245208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json)
- [中国历代人物传记资料库：王義（CBDB 245219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245219&o=json)
- [中国历代人物传记资料库：王昭（CBDB 245152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245152&o=json)
