---
schema: wang-person/v1
id: p_zLA5TsSxN97GFVAJwFFzjJ
status: active
merged_into: null
display_name: 王槐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GGHSwVF6ihKLXsjgSqsvnm
        subject_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HikrfbGZhj7vH8C5XcSiAj
          claim_id: c_GGHSwVF6ihKLXsjgSqsvnm
          source_id: s_NhBHpVj1ZRkvwgBCyJrekQ
          stance: supports
          locator: CBDB:294530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294530）
          source: &a1
            id: s_NhBHpVj1ZRkvwgBCyJrekQ
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 294530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json
            external_identifier: CBDB:294530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5SGrFQJPN16Hy9uoZ5kZ39
        subject_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294530）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5eAfKM0uL040O17g4IuR_q
          claim_id: c_5SGrFQJPN16Hy9uoZ5kZ39
          source_id: s_NhBHpVj1ZRkvwgBCyJrekQ
          stance: supports
          locator: CBDB:294530
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ECu04jpvwc8QhvgUxO3xh7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GlFROjcKfyR4SoFh5X60D
          claim_id: c_ECu04jpvwc8QhvgUxO3xh7
          source_id: s_HCauhPkf8MDUzPa8oQWR5e
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王槐 与 王梅 为同胞（CBDB 记「弟」），王梅 之父／母即 王槐 之父／母。
          source:
            id: s_HCauhPkf8MDUzPa8oQWR5e
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 294530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json
            external_identifier: CBDB:294530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5oVCjNf3jZsLG4jhJ57YhB
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IQx-ALEpiahHbUfkEUCTeD
        subject_person_id: p_e7c3DhdEJw2765tvQyZA4M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zLA5TsSxN97GFVAJwFFzjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R5EPe5I0vahjAq2P7TvRuJ
          claim_id: c_IQx-ALEpiahHbUfkEUCTeD
          source_id: s_HCauhPkf8MDUzPa8oQWR5e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HCauhPkf8MDUzPa8oQWR5e
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 294530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json
            external_identifier: CBDB:294530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e7c3DhdEJw2765tvQyZA4M
        status: active
        display_name: 王梅
        merged_into_person_id: null
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294530） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5oVCjNf3jZsLG4jhJ57YhB | 王鸞 | accepted |
| other | p_e7c3DhdEJw2765tvQyZA4M | 王梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 294530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294530&o=json)
