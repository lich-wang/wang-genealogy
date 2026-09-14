---
schema: wang-person/v1
id: p_Mfr14WZdLtDDLf9Fy4GsT7
status: active
merged_into: null
display_name: 王文英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14HTxJZqgAWqk152KAHRXM
        subject_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fF4gTYzRmhUQK37c1frq5A
          claim_id: c_14HTxJZqgAWqk152KAHRXM
          source_id: s_Jw1JeZGz8aCSeG8MXhYPLr
          stance: supports
          locator: CBDB:210433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210433）
          source: &a1
            id: s_Jw1JeZGz8aCSeG8MXhYPLr
            source_type: api_record
            title: 中国历代人物传记资料库：王文英（CBDB 210433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json
            external_identifier: CBDB:210433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X2sb2tghysJqqmV47uoybA
        subject_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文英，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMpr5BK_yX16we6KpJBZYP
          claim_id: c_X2sb2tghysJqqmV47uoybA
          source_id: s_Jw1JeZGz8aCSeG8MXhYPLr
          stance: supports
          locator: CBDB:210433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__Uk0O5U9IkBsoUkQ0wvKiq
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSIykLuMHYg3Yx_HK4Oz_4
          claim_id: c__Uk0O5U9IkBsoUkQ0wvKiq
          source_id: s_Psw9qeQSVTv6ubsGXjN6sP
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文英 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文英 之父／母。
          source:
            id: s_Psw9qeQSVTv6ubsGXjN6sP
            source_type: api_record
            title: 中国历代人物传记资料库：王文英（CBDB 210433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json
            external_identifier: CBDB:210433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cJPjdNwsR6729BhxkY9bu9
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
        id: c_VahjfflfIf4avsYalYHsFN
        subject_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bi5wDo87oLP7GrMDiWRypG
          claim_id: c_VahjfflfIf4avsYalYHsFN
          source_id: s_Psw9qeQSVTv6ubsGXjN6sP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Psw9qeQSVTv6ubsGXjN6sP
            source_type: api_record
            title: 中国历代人物传记资料库：王文英（CBDB 210433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json
            external_identifier: CBDB:210433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
---

# 王文英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文英 | accepted |
| bio.summary | 王文英，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |
| other | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文英（CBDB 210433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json)
