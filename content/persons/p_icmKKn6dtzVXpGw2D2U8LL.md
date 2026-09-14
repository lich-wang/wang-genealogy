---
schema: wang-person/v1
id: p_icmKKn6dtzVXpGw2D2U8LL
status: active
merged_into: null
display_name: 王鐸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHFhv2s34rr75SpAiTnJLi
        subject_person_id: p_icmKKn6dtzVXpGw2D2U8LL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y1F77PFfCJv1XgCmYzgJed
          claim_id: c_RHFhv2s34rr75SpAiTnJLi
          source_id: s_Np7wB6tKHKrkUxrd4LFfKj
          stance: supports
          locator: CBDB:270516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270516）
          source: &a1
            id: s_Np7wB6tKHKrkUxrd4LFfKj
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 270516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json
            external_identifier: CBDB:270516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Npse2uBopEsAhc6zn5Uaza
        subject_person_id: p_icmKKn6dtzVXpGw2D2U8LL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cw-9DnsaXqTan26UVN4M5a
          claim_id: c_Npse2uBopEsAhc6zn5Uaza
          source_id: s_Np7wB6tKHKrkUxrd4LFfKj
          stance: supports
          locator: CBDB:270516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s48grGlexz3sQ-_wnCqRMZ
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_icmKKn6dtzVXpGw2D2U8LL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaKg_ScPXO5W2UXy6xxx5x
          claim_id: c_s48grGlexz3sQ-_wnCqRMZ
          source_id: s_ua3Yj4SyknaRJvkgeXKvpO
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐸 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王鐸 之父／母。
          source:
            id: s_ua3Yj4SyknaRJvkgeXKvpO
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 270516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json
            external_identifier: CBDB:270516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hgxi33jEZJCNUrJvtuJpZh
        status: active
        display_name: 王庭哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XxW9a3BOhTlNOnclBqS9IF
        subject_person_id: p_icmKKn6dtzVXpGw2D2U8LL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k-45WV92GPtASe1yccwSb5
          claim_id: c_XxW9a3BOhTlNOnclBqS9IF
          source_id: s_ua3Yj4SyknaRJvkgeXKvpO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198425 王欽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ua3Yj4SyknaRJvkgeXKvpO
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 270516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json
            external_identifier: CBDB:270516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nr8RYEFav3WB5L5BxkUtUu
        status: active
        display_name: 王欽
        merged_into_person_id: null
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hgxi33jEZJCNUrJvtuJpZh | 王庭哲 | accepted |
| other | p_nr8RYEFav3WB5L5BxkUtUu | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 270516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270516&o=json)
