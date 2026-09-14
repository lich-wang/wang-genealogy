---
schema: wang-person/v1
id: p_NpUjCMnr3vateBNa88RNFa
status: active
merged_into: null
display_name: 王一寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GwszXoEk84LDG9rEr9NkA4
        subject_person_id: p_NpUjCMnr3vateBNa88RNFa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Ym8obDJuitcJCLGv7wBd7
          claim_id: c_GwszXoEk84LDG9rEr9NkA4
          source_id: s_6iNbdYPWcdHtPRC2dSXVf4
          stance: supports
          locator: CBDB:230481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230481）
          source: &a1
            id: s_6iNbdYPWcdHtPRC2dSXVf4
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 230481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json
            external_identifier: CBDB:230481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8N3bJeZCG6vRVNF9MLw6gV
        subject_person_id: p_NpUjCMnr3vateBNa88RNFa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一寧，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230481）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TtZqHqK8V0ddMdISHAkpFm
          claim_id: c_8N3bJeZCG6vRVNF9MLw6gV
          source_id: s_6iNbdYPWcdHtPRC2dSXVf4
          stance: supports
          locator: CBDB:230481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9lYXMcWH9MosKMY7q16LHM
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NpUjCMnr3vateBNa88RNFa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlWuwba3trMPUG_f2rA0XS
          claim_id: c_9lYXMcWH9MosKMY7q16LHM
          source_id: s_JeOnMNb5PQGzLiByVkecNT
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一寧 与 王一鳴 为同胞（CBDB 记「兄」），王一鳴 之父／母即 王一寧 之父／母。
          source:
            id: s_JeOnMNb5PQGzLiByVkecNT
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 230481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json
            external_identifier: CBDB:230481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1NFpKAdMuHUnaxbGrqKLeD
        status: active
        display_name: 王追美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Zdqn2A7O7DXQQgbN8swIdr
        subject_person_id: p_NpUjCMnr3vateBNa88RNFa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FN1W9byuQc1UR_HUNBhLkb
          claim_id: c_Zdqn2A7O7DXQQgbN8swIdr
          source_id: s_JeOnMNb5PQGzLiByVkecNT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JeOnMNb5PQGzLiByVkecNT
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 230481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json
            external_identifier: CBDB:230481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
---

# 王一寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一寧 | accepted |
| bio.summary | 王一寧，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1NFpKAdMuHUnaxbGrqKLeD | 王追美 | accepted |
| other | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一寧（CBDB 230481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json)
