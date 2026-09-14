---
schema: wang-person/v1
id: p_i5579JHLY2cRuS7YHKZJ5T
status: active
merged_into: null
display_name: 王萬樞
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Joh2xrirTk1heHgwsejC3n
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9aH1unBDDFWjMZrh7eiaL
          claim_id: c_Joh2xrirTk1heHgwsejC3n
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: CBDB:12051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12051）
          source: &a1
            id: s_JiBcFyQDVHFNQoKUexCzy3
            source_type: api_record
            title: 中国历代人物传记资料库：王萬樞（CBDB 12051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json
            external_identifier: CBDB:12051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m82URwm53HFcJhSNkExUgc
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gEujSekDnPPPb1jsmjGtL1
          claim_id: c_m82URwm53HFcJhSNkExUgc
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4wBLMwsCyJerSRx3HfaaBh
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1205年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xBgoYPWeENUNzNMtSb5G9h
          claim_id: c_4wBLMwsCyJerSRx3HfaaBh
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r1ZxZrq3DcuMPnF6V4tfF8
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬樞（1143年—1205年），宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任縣丞、縣尉。（中国历代人物传记资料库 CBDB 12051）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zN3UVx5eyxOXiqe5JBI1Gf
          claim_id: c_r1ZxZrq3DcuMPnF6V4tfF8
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: CBDB:12051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wEIcelXuVsZ84zzDpGvqjY
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6a1z74nd3gQb3yC3wEhqiv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGYUlwdobFLfRqFgyYyPoA
          claim_id: c_wEIcelXuVsZ84zzDpGvqjY
          source_id: s_8Dbh9mhSWPyXNqdiymCPBJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8Dbh9mhSWPyXNqdiymCPBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 36185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36185&o=json
            external_identifier: CBDB:36185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6a1z74nd3gQb3yC3wEhqiv
        status: active
        display_name: 王適
        merged_into_person_id: null
    - claim:
        id: c__1ZzBTB0D2OyRlDWiE5-CY
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J5wseGMtAZqnhKQq6invyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W0oqMJuCslNY3Gp4GxwhnW
          claim_id: c__1ZzBTB0D2OyRlDWiE5-CY
          source_id: s_qIa5QI5fRPR3vdVWindatk
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_qIa5QI5fRPR3vdVWindatk
            source_type: api_record
            title: 中国历代人物传记资料库：王近（CBDB 36186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36186&o=json
            external_identifier: CBDB:36186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J5wseGMtAZqnhKQq6invyP
        status: active
        display_name: 王近
        merged_into_person_id: null
    - claim:
        id: c_XsDpphMIq5YlYXZxNpw3T2
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJDteFRnQExBHBJA693Wh3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iH1ljKe7cgygTDJmQtQxPD
          claim_id: c_XsDpphMIq5YlYXZxNpw3T2
          source_id: s_tUFnz-YC3zOeey1UksTUPE
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_tUFnz-YC3zOeey1UksTUPE
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 12054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12054&o=json
            external_identifier: CBDB:12054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJDteFRnQExBHBJA693Wh3
        status: active
        display_name: 王遜
        merged_into_person_id: null
    - claim:
        id: c_52GZu4d_JA_f8TdXXjrF12
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKjtYBENSFZX3Vh6H2rZba
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DUmp7oBS-jdTiitIeHeX5z
          claim_id: c_52GZu4d_JA_f8TdXXjrF12
          source_id: s_XOHQilizmaYZGo24vQMGSG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_XOHQilizmaYZGo24vQMGSG
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 12052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12052&o=json
            external_identifier: CBDB:12052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKjtYBENSFZX3Vh6H2rZba
        status: active
        display_name: 王逢
        merged_into_person_id: null
    - claim:
        id: c_WgJeZTOqla6VtzxLaoYGo7
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ik2xLF8xu36Bj6AhBMnYty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AoTZMCWVlU1cmJ4Vuizgpn
          claim_id: c_WgJeZTOqla6VtzxLaoYGo7
          source_id: s_hwidjsOxrcsbKglxeMQW43
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12051）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_hwidjsOxrcsbKglxeMQW43
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 12055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json
            external_identifier: CBDB:12055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ik2xLF8xu36Bj6AhBMnYty
        status: active
        display_name: 王選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gQs2rSgXMnMIJF4BtcRIFT
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jj-YVsjUzEaUdz__op241l
          claim_id: c_gQs2rSgXMnMIJF4BtcRIFT
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_ch4WSZwoeM4ioMVup6I8-X
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_of-NyooUxO8xkavIccgT6r
          claim_id: c_ch4WSZwoeM4ioMVup6I8-X
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LmvwBv9Vm8BVkEPgL1A7GT
        status: active
        display_name: 王寀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王萬樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬樞 | accepted |
| birth.date | 1143年 | accepted |
| death.date | 1205年 | accepted |
| bio.summary | 王萬樞（1143年—1205年），宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任縣丞、縣尉。（中国历代人物传记资料库 CBDB 12051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6a1z74nd3gQb3yC3wEhqiv | 王適 | accepted |
| children | p_J5wseGMtAZqnhKQq6invyP | 王近 | accepted |
| children | p_hJDteFRnQExBHBJA693Wh3 | 王遜 | accepted |
| children | p_iKjtYBENSFZX3Vh6H2rZba | 王逢 | accepted |
| children | p_ik2xLF8xu36Bj6AhBMnYty | 王選 | accepted |
| ancestors | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |
| ancestors | p_LmvwBv9Vm8BVkEPgL1A7GT | 王寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 12052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12052&o=json)
- [中国历代人物传记资料库：王近（CBDB 36186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36186&o=json)
- [中国历代人物传记资料库：王適（CBDB 36185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36185&o=json)
- [中国历代人物传记资料库：王萬樞（CBDB 12051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json)
- [中国历代人物传记资料库：王選（CBDB 12055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12055&o=json)
- [中国历代人物传记资料库：王遜（CBDB 12054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12054&o=json)
