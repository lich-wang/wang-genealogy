---
schema: wang-person/v1
id: p_U26ovq52qrynked8W9csNM
status: active
merged_into: null
display_name: 王道弘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wn9NF8KjfeMrz2uAmTrJcA
        subject_person_id: p_U26ovq52qrynked8W9csNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道弘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oiqhtQTSEa78jQTyDnNdbE
          claim_id: c_Wn9NF8KjfeMrz2uAmTrJcA
          source_id: s_8UBgpHUueSqTpXpV1L8TvP
          stance: supports
          locator: CBDB:230470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230470）
          source: &a1
            id: s_8UBgpHUueSqTpXpV1L8TvP
            source_type: api_record
            title: 中国历代人物传记资料库：王道弘（CBDB 230470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json
            external_identifier: CBDB:230470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R8wbJDREDFChcfT3Txg7MQ
        subject_person_id: p_U26ovq52qrynked8W9csNM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道弘，明人物。萬曆丙戌科進士進士，籍贯霑化。（中国历代人物传记资料库 CBDB 230470）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5veOY41ojJ3kFfnLS4UjtP
          claim_id: c_R8wbJDREDFChcfT3Txg7MQ
          source_id: s_8UBgpHUueSqTpXpV1L8TvP
          stance: supports
          locator: CBDB:230470
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ieGQCC7onUY9Ewsc1wLHgR
        subject_person_id: p_oi69GxTCLN4PZnkGTuscEx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U26ovq52qrynked8W9csNM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3mrxnS0zFOWAQEP5HK25r
          claim_id: c_ieGQCC7onUY9Ewsc1wLHgR
          source_id: s_askL24cBKrt9V-TPuSMCX3
          stance: supports
          locator: CBDB：兄弟 王道正（207263）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王道弘 与 王道正 为同胞（CBDB 记「兄」），王道正 之父／母即 王道弘 之父／母。
          source:
            id: s_askL24cBKrt9V-TPuSMCX3
            source_type: api_record
            title: 中国历代人物传记资料库：王道弘（CBDB 230470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json
            external_identifier: CBDB:230470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oi69GxTCLN4PZnkGTuscEx
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iasUsINd-zUyrz88jN0agk
        subject_person_id: p_U26ovq52qrynked8W9csNM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W5zx3veyZyjG5gBNh4mu99
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VCx6gA8gfNuiPy44ytF4Im
          claim_id: c_iasUsINd-zUyrz88jN0agk
          source_id: s_askL24cBKrt9V-TPuSMCX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207263 王道正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_askL24cBKrt9V-TPuSMCX3
            source_type: api_record
            title: 中国历代人物传记资料库：王道弘（CBDB 230470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json
            external_identifier: CBDB:230470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5zx3veyZyjG5gBNh4mu99
        status: active
        display_name: 王道正
        merged_into_person_id: null
---

# 王道弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道弘 | accepted |
| bio.summary | 王道弘，明人物。萬曆丙戌科進士進士，籍贯霑化。（中国历代人物传记资料库 CBDB 230470） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oi69GxTCLN4PZnkGTuscEx | 王經 | accepted |
| other | p_W5zx3veyZyjG5gBNh4mu99 | 王道正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道弘（CBDB 230470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230470&o=json)
