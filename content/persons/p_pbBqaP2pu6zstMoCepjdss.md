---
schema: wang-person/v1
id: p_pbBqaP2pu6zstMoCepjdss
status: active
merged_into: null
display_name: 王夢良
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_76oePHH2B7428NEgifF2JQ
        subject_person_id: p_pbBqaP2pu6zstMoCepjdss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_196AxdGeseJdwCyMhxYDb9
          claim_id: c_76oePHH2B7428NEgifF2JQ
          source_id: s_S6hQnNhz2t27PgA2dYW8Eg
          stance: supports
          locator: CBDB:221665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221665）
          source: &a1
            id: s_S6hQnNhz2t27PgA2dYW8Eg
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 221665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json
            external_identifier: CBDB:221665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SqmSNZJff8NoPnNtPH1w5u
        subject_person_id: p_pbBqaP2pu6zstMoCepjdss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢良，明人物。萬曆八年進士，籍贯上饒，曾任主簿。（中国历代人物传记资料库 CBDB 221665）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OLm0EjrLPZEFkDMFdvoZA9
          claim_id: c_SqmSNZJff8NoPnNtPH1w5u
          source_id: s_S6hQnNhz2t27PgA2dYW8Eg
          stance: supports
          locator: CBDB:221665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ow56bLFjjtSgUExI1MzlyN
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pbBqaP2pu6zstMoCepjdss
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zz8zFo7a5jTwtV6YZneDf_
          claim_id: c_Ow56bLFjjtSgUExI1MzlyN
          source_id: s_2awq05dCOOvWhj9peA4pmV
          stance: supports
          locator: CBDB：兄弟 王夢暘（206693）之父／母 王綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢良 与 王夢暘 为同胞（CBDB 记「弟」），王夢暘 之父／母即 王夢良 之父／母。
          source:
            id: s_2awq05dCOOvWhj9peA4pmV
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 221665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json
            external_identifier: CBDB:221665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GEvSYKNyDCnRLesR9j7DmA
        status: active
        display_name: 王綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m_My8AKBxrIXq_uSuDUHR9
        subject_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pbBqaP2pu6zstMoCepjdss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbtPZb_m-5huxeB6gdA3wQ
          claim_id: c_m_My8AKBxrIXq_uSuDUHR9
          source_id: s_2awq05dCOOvWhj9peA4pmV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206693 王夢暘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2awq05dCOOvWhj9peA4pmV
            source_type: api_record
            title: 中国历代人物传记资料库：王夢良（CBDB 221665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json
            external_identifier: CBDB:221665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DtN8Z5QdtH34dfH2KX2i1q
        status: active
        display_name: 王夢暘
        merged_into_person_id: null
---

# 王夢良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢良 | accepted |
| bio.summary | 王夢良，明人物。萬曆八年進士，籍贯上饒，曾任主簿。（中国历代人物传记资料库 CBDB 221665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GEvSYKNyDCnRLesR9j7DmA | 王綸 | accepted |
| other | p_DtN8Z5QdtH34dfH2KX2i1q | 王夢暘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢良（CBDB 221665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221665&o=json)
