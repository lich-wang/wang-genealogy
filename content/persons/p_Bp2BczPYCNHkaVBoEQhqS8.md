---
schema: wang-person/v1
id: p_Bp2BczPYCNHkaVBoEQhqS8
status: active
merged_into: null
display_name: 王金
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s7TEiBf6F8XhJ4sDet22q7
        subject_person_id: p_Bp2BczPYCNHkaVBoEQhqS8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1yS6cAV6doz96kEBWDJ3Tg
          claim_id: c_s7TEiBf6F8XhJ4sDet22q7
          source_id: s_ApiuTjP99F9FQoX7qJwzTH
          stance: supports
          locator: CBDB:329595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329595）
          source: &a1
            id: s_ApiuTjP99F9FQoX7qJwzTH
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 329595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json
            external_identifier: CBDB:329595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mH5kNuHdQWd1ur83jkhh8P
        subject_person_id: p_Bp2BczPYCNHkaVBoEQhqS8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金，明人物。嘉靖四十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 329595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qkxTX0pq6hFDXptJ4KwvhZ
          claim_id: c_mH5kNuHdQWd1ur83jkhh8P
          source_id: s_ApiuTjP99F9FQoX7qJwzTH
          stance: supports
          locator: CBDB:329595
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gHGA1-FKjNu1bj5Gia7qst
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bp2BczPYCNHkaVBoEQhqS8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hV33UbGg5uu2GG76-Ns0TU
          claim_id: c_gHGA1-FKjNu1bj5Gia7qst
          source_id: s_FjKknn3bRRLxDMs7yCbjNY
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王金 与 王鑑 为同胞（CBDB 记「弟」），王鑑 之父／母即 王金 之父／母。
          source:
            id: s_FjKknn3bRRLxDMs7yCbjNY
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 329595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json
            external_identifier: CBDB:329595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1bMIFh8VS-lW_yTTUhVRgg
        subject_person_id: p_Bp2BczPYCNHkaVBoEQhqS8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udbTDguGiO-7783IvavC2O
          claim_id: c_1bMIFh8VS-lW_yTTUhVRgg
          source_id: s_FjKknn3bRRLxDMs7yCbjNY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126886 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FjKknn3bRRLxDMs7yCbjNY
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 329595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json
            external_identifier: CBDB:329595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| bio.summary | 王金，明人物。嘉靖四十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 329595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |
| other | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 329595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329595&o=json)
