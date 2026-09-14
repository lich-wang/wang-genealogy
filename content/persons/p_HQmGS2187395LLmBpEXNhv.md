---
schema: wang-person/v1
id: p_HQmGS2187395LLmBpEXNhv
status: active
merged_into: null
display_name: 王思聰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B29EVvq5PuLRRmMQfDQV6o
        subject_person_id: p_HQmGS2187395LLmBpEXNhv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mA2p3y4H5Sj8GfjUWksV7M
          claim_id: c_B29EVvq5PuLRRmMQfDQV6o
          source_id: s_FDAnsG8hSHBFPqEGKtd1z2
          stance: supports
          locator: CBDB:237444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237444）
          source: &a1
            id: s_FDAnsG8hSHBFPqEGKtd1z2
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 237444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json
            external_identifier: CBDB:237444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mFHha6raXFRP5NDFSdZpnK
        subject_person_id: p_HQmGS2187395LLmBpEXNhv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kdIOL0kzVjj1tvxAnRz6Vx
          claim_id: c_mFHha6raXFRP5NDFSdZpnK
          source_id: s_FDAnsG8hSHBFPqEGKtd1z2
          stance: supports
          locator: CBDB:237444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d4FMtaboEH7gTEURtWwnSj
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HQmGS2187395LLmBpEXNhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KVKe-VbNP0ocZ-D8YkHOjY
          claim_id: c_d4FMtaboEH7gTEURtWwnSj
          source_id: s_XNuCYuZipnPpA28jhPZXHr
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王思聰 与 王信 为同胞（CBDB 记「弟」），王信 之父／母即 王思聰 之父／母。
          source:
            id: s_XNuCYuZipnPpA28jhPZXHr
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 237444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json
            external_identifier: CBDB:237444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WxESaqfXoRne3LVPqRgpV4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__UOVPmj0yp7g0mShe39l9-
        subject_person_id: p_HQmGS2187395LLmBpEXNhv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9apapUHPOO1QlwDnYy3hpV
          claim_id: c__UOVPmj0yp7g0mShe39l9-
          source_id: s_XNuCYuZipnPpA28jhPZXHr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67212 王信）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XNuCYuZipnPpA28jhPZXHr
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 237444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json
            external_identifier: CBDB:237444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
---

# 王思聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思聰 | accepted |
| bio.summary | 王思聰，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WxESaqfXoRne3LVPqRgpV4 | 王珪 | accepted |
| other | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思聰（CBDB 237444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json)
