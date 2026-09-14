---
schema: wang-person/v1
id: p_1yQeJ51YMb653pHE2P62RS
status: active
merged_into: null
display_name: 王承恂
cbdb_id: 238216
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_my9YV68Mnw19EyzE4hF8Fc
        subject_person_id: p_1yQeJ51YMb653pHE2P62RS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恂，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JNPBjogpgkxTHUBQZyz97h
          claim_id: c_my9YV68Mnw19EyzE4hF8Fc
          source_id: s_fBsrPeJdZytLAYrK9H3ML3
          stance: supports
          locator: CBDB:238216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fBsrPeJdZytLAYrK9H3ML3
            source_type: api_record
            title: 中国历代人物传记资料库：王承恂（CBDB 238216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json
            external_identifier: CBDB:238216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GiD8zxyd9so1aHVDgHYffB
        subject_person_id: p_1yQeJ51YMb653pHE2P62RS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CmsRKmroiNEdDnHcbVQvzG
          claim_id: c_GiD8zxyd9so1aHVDgHYffB
          source_id: s_fBsrPeJdZytLAYrK9H3ML3
          stance: supports
          locator: CBDB:238216
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PqvevCFn4VorEWv8wWYJyS
        subject_person_id: p_nZvn7tH7hwLzHZ4aSkjukU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1yQeJ51YMb653pHE2P62RS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vFzYU2t_O8XSlEOtvAH4YN
          claim_id: c_PqvevCFn4VorEWv8wWYJyS
          source_id: s_j1V1m0XgunuMeWRLzQ_wYX
          stance: supports
          locator: CBDB：兄弟 王理（126681）之父／母 王充榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王承恂 与 王理 为同胞（CBDB 记「弟」），王理 之父／母即 王承恂 之父／母。
          source:
            id: s_j1V1m0XgunuMeWRLzQ_wYX
            source_type: api_record
            title: 中国历代人物传记资料库：王承恂（CBDB 238216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json
            external_identifier: CBDB:238216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZvn7tH7hwLzHZ4aSkjukU
        status: active
        display_name: 王充榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SsrienT1OyjV9iLJ928Qh4
        subject_person_id: p_1yQeJ51YMb653pHE2P62RS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tRFMy9-QJabFDCLn-fgxft
          claim_id: c_SsrienT1OyjV9iLJ928Qh4
          source_id: s_j1V1m0XgunuMeWRLzQ_wYX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126681 王理）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j1V1m0XgunuMeWRLzQ_wYX
            source_type: api_record
            title: 中国历代人物传记资料库：王承恂（CBDB 238216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json
            external_identifier: CBDB:238216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
---

# 王承恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承恂，明人物。正统七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 238216） | accepted |
| name.primary | 王承恂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nZvn7tH7hwLzHZ4aSkjukU | 王充榮 | accepted |
| other | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承恂（CBDB 238216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238216&o=json)
