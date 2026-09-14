---
schema: wang-person/v1
id: p_wdSw4BbibnXyZCRXBicDsZ
status: active
merged_into: null
display_name: 王茹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JXGb6CaxX3H4g8BgKMB3hR
        subject_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwNLzqNkDsAA18oaeMPt22
          claim_id: c_JXGb6CaxX3H4g8BgKMB3hR
          source_id: s_uCTZY2spTMqpX72mWiCbN9
          stance: supports
          locator: CBDB:222181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222181）
          source: &a1
            id: s_uCTZY2spTMqpX72mWiCbN9
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 222181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json
            external_identifier: CBDB:222181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2GVaff8YJuY9vC9SnoR5c8
        subject_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茹，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222181）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cpkp6xwAojN5S_gtkAewjP
          claim_id: c_2GVaff8YJuY9vC9SnoR5c8
          source_id: s_uCTZY2spTMqpX72mWiCbN9
          stance: supports
          locator: CBDB:222181
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UoCXJ-MMUx8PtvnNr5GqE3
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O4FdnnLxnpdxfQOFfFwPBk
          claim_id: c_UoCXJ-MMUx8PtvnNr5GqE3
          source_id: s_eu4t_55vTUWRnMfegZuk5t
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王茹 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王茹 之父／母。
          source:
            id: s_eu4t_55vTUWRnMfegZuk5t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 222181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json
            external_identifier: CBDB:222181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YtvwRVrsfzcrVkEx0PbWDi
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GP9TsEuC4uqEUDtq0pBcCR
          claim_id: c_YtvwRVrsfzcrVkEx0PbWDi
          source_id: s_eu4t_55vTUWRnMfegZuk5t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eu4t_55vTUWRnMfegZuk5t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 222181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json
            external_identifier: CBDB:222181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王茹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茹 | accepted |
| bio.summary | 王茹，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茹（CBDB 222181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json)
