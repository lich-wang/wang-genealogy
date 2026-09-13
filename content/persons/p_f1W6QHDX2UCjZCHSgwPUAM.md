---
schema: wang-person/v1
id: p_f1W6QHDX2UCjZCHSgwPUAM
status: active
merged_into: null
display_name: 张氏
cbdb_id: 308153
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnzKyjXe1OWYo5R4nERQk4
        subject_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 308153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_NoxAISHCJiGvb55kxJvHrK
          claim_id: c_GnzKyjXe1OWYo5R4nERQk4
          source_id: s_eHg7tHUDweN1C9jj2CK2AF
          stance: supports
          locator: CBDB:308153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eHg7tHUDweN1C9jj2CK2AF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（308153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308153&o=json
            external_identifier: CBDB:308153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.576Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_22uTc2miFaCNy9JXFqb7ES
        subject_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3mWNkHeRBSJioL59JTuXKB
          claim_id: c_22uTc2miFaCNy9JXFqb7ES
          source_id: s_eHg7tHUDweN1C9jj2CK2AF
          stance: supports
          locator: Q65832548
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_nNQaQ18Bb5RMmXvQ2q1PDK
          claim_id: c_22uTc2miFaCNy9JXFqb7ES
          source_id: s_82PnCHB2WdDp2rZC6q5XsJ
          stance: supports
          locator: Q65832548
          quotation: null
          interpretation_note: null
          source:
            id: s_82PnCHB2WdDp2rZC6q5XsJ
            source_type: api_record
            title: 维基数据：张氏（Q65832548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65832548
            external_identifier: Q65832548
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.411Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FPc9MMCNnJxuY7mgPAKD7L
        subject_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fpg1YKR3GH9Cg5FPGdQZW7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7k2KtGvvAP2vwtgsHwebaS
          claim_id: c_FPc9MMCNnJxuY7mgPAKD7L
          source_id: s_UJUdEwqgcTVsuVaEYxsCE4
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十三年登科錄:一卷
          source:
            id: s_UJUdEwqgcTVsuVaEYxsCE4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王國光（125310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json
            external_identifier: CBDB:125310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:14.580Z
            metadata_json: null
        - id: cs_RJrvGWZw87VaHpfKxEtZD4
          claim_id: c_FPc9MMCNnJxuY7mgPAKD7L
          source_id: s_ZiSWdCePqhdbf1rEzq3pZR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZiSWdCePqhdbf1rEzq3pZR
            source_type: api_record
            title: 维基数据：王国光（Q15907167）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907167
            external_identifier: Q15907167
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
        - id: cs_YzmLyVaQgjeYwb9ywqLqCr
          claim_id: c_FPc9MMCNnJxuY7mgPAKD7L
          source_id: s_82PnCHB2WdDp2rZC6q5XsJ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_82PnCHB2WdDp2rZC6q5XsJ
            source_type: api_record
            title: 维基数据：张氏（Q65832548）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65832548
            external_identifier: Q65832548
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:36.411Z
            metadata_json: null
      object_person:
        id: p_fpg1YKR3GH9Cg5FPGdQZW7
        status: active
        display_name: 王国光
        merged_into_person_id: null
    - claim:
        id: c_hdEbDYI7T8T-wPP9f1la9H
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iK4VXYne4jWVGUqW1CQ5c6
          claim_id: c_hdEbDYI7T8T-wPP9f1la9H
          source_id: s_Vt2QnjwfvAN63GjXwa6CEm
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vt2QnjwfvAN63GjXwa6CEm
            source_type: api_record
            title: 中国历代人物传记资料库：王國光（CBDB 125310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json
            external_identifier: CBDB:125310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
    - claim:
        id: c_HeNG28pSzgwj2Bh3tsg7DM
        subject_person_id: p_f1W6QHDX2UCjZCHSgwPUAM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fAeAj1ECenpg29AWYPB25D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSH53ZSffAyKrYURaVkOyj
          claim_id: c_HeNG28pSzgwj2Bh3tsg7DM
          source_id: s_eHg7tHUDweN1C9jj2CK2AF
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百八十九名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 308153） | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fpg1YKR3GH9Cg5FPGdQZW7 | 王国光 | accepted |
| spouses | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |
| spouses | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |

## 外部来源

- [维基数据：王国光（Q15907167）](https://www.wikidata.org/wiki/Q15907167)
- [维基数据：张氏（Q65832548）](https://www.wikidata.org/wiki/Q65832548)
- [中国历代人物传记资料库：王國光（CBDB 125310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125310&o=json)
- [CBDB 中国历代人物传记资料库：張氏（308153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308153&o=json)
