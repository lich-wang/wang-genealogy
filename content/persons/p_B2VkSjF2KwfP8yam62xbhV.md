---
schema: wang-person/v1
id: p_B2VkSjF2KwfP8yam62xbhV
status: active
merged_into: null
display_name: 王新民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDX7T8awWQVvAJdLRutxAV
        subject_person_id: p_B2VkSjF2KwfP8yam62xbhV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ofTdkzCsdLgnW2pfa16SRf
          claim_id: c_xDX7T8awWQVvAJdLRutxAV
          source_id: s_FP2vrRE5EXF95Ny2CxJXqv
          stance: supports
          locator: CBDB:302955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302955）
          source: &a1
            id: s_FP2vrRE5EXF95Ny2CxJXqv
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 302955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json
            external_identifier: CBDB:302955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NCjtTWCDAqpzScX3xKKFEp
        subject_person_id: p_B2VkSjF2KwfP8yam62xbhV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新民，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9xnGU2elgfTbIKPC1D0yJP
          claim_id: c_NCjtTWCDAqpzScX3xKKFEp
          source_id: s_FP2vrRE5EXF95Ny2CxJXqv
          stance: supports
          locator: CBDB:302955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4Dc0Q_uT1cYFrxiCRTAw-y
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2VkSjF2KwfP8yam62xbhV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfpjAF3xdR3S6I5wOTjv8J
          claim_id: c_4Dc0Q_uT1cYFrxiCRTAw-y
          source_id: s_xcP_xqUfwhtpIYkpkiePaS
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王新民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王新民 之父／母。
          source:
            id: s_xcP_xqUfwhtpIYkpkiePaS
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 302955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json
            external_identifier: CBDB:302955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_icxXq3mTNniLra2C3qpkmV
        status: active
        display_name: 王佑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iJieqhSh2zQ6MDLloeQfhm
        subject_person_id: p_B2VkSjF2KwfP8yam62xbhV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vO0xZEfPaGo2OGUwd20BJ6
          claim_id: c_iJieqhSh2zQ6MDLloeQfhm
          source_id: s_xcP_xqUfwhtpIYkpkiePaS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203316 王撫民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xcP_xqUfwhtpIYkpkiePaS
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 302955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json
            external_identifier: CBDB:302955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
---

# 王新民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新民 | accepted |
| bio.summary | 王新民，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_icxXq3mTNniLra2C3qpkmV | 王佑 | accepted |
| other | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王新民（CBDB 302955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json)
