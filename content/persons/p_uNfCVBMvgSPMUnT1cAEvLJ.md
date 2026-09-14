---
schema: wang-person/v1
id: p_uNfCVBMvgSPMUnT1cAEvLJ
status: active
merged_into: null
display_name: 王嘉善
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wrVWXWox1LGVU3vMhqyPww
        subject_person_id: p_uNfCVBMvgSPMUnT1cAEvLJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PWxsHusyTt4HHKq8jkXhe
          claim_id: c_wrVWXWox1LGVU3vMhqyPww
          source_id: s_EWYDzdkVKcyErDbZG4D3xB
          stance: supports
          locator: CBDB:227991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227991）
          source: &a1
            id: s_EWYDzdkVKcyErDbZG4D3xB
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 227991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json
            external_identifier: CBDB:227991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1oohApSwyPHhK4SaK1YTF
        subject_person_id: p_uNfCVBMvgSPMUnT1cAEvLJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉善，明人物。萬曆丙戌科進士進士，籍贯來安。（中国历代人物传记资料库 CBDB 227991）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UkuR_1wUn2b2D_ChXydgY3
          claim_id: c_R1oohApSwyPHhK4SaK1YTF
          source_id: s_EWYDzdkVKcyErDbZG4D3xB
          stance: supports
          locator: CBDB:227991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-HG8bfKU53r0GTWiftheQS
        subject_person_id: p_QEHQVSVhwwmdKZM4tKcH7N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uNfCVBMvgSPMUnT1cAEvLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM2K3bZH4GUz9IXGsL-s9R
          claim_id: c_-HG8bfKU53r0GTWiftheQS
          source_id: s_KV2pbt5AA9kjiFpXoi6Kyg
          stance: supports
          locator: CBDB：兄弟 王嘉賓（207120）之父／母 王可久
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉善 与 王嘉賓 为同胞（CBDB 记「兄」），王嘉賓 之父／母即 王嘉善 之父／母。
          source:
            id: s_KV2pbt5AA9kjiFpXoi6Kyg
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 227991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json
            external_identifier: CBDB:227991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEHQVSVhwwmdKZM4tKcH7N
        status: active
        display_name: 王可久
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_t3aDE_qCblaan8LVgq-9ga
        subject_person_id: p_uNfCVBMvgSPMUnT1cAEvLJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bgk_68z4TRkSHmKqlb8Ek-
          claim_id: c_t3aDE_qCblaan8LVgq-9ga
          source_id: s_KV2pbt5AA9kjiFpXoi6Kyg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207120 王嘉賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KV2pbt5AA9kjiFpXoi6Kyg
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉善（CBDB 227991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json
            external_identifier: CBDB:227991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yt96UUYNj3ASszrYuN2kTm
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
---

# 王嘉善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉善 | accepted |
| bio.summary | 王嘉善，明人物。萬曆丙戌科進士進士，籍贯來安。（中国历代人物传记资料库 CBDB 227991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEHQVSVhwwmdKZM4tKcH7N | 王可久 | accepted |
| other | p_yt96UUYNj3ASszrYuN2kTm | 王嘉賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉善（CBDB 227991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227991&o=json)
