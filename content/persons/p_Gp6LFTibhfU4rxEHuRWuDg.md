---
schema: wang-person/v1
id: p_Gp6LFTibhfU4rxEHuRWuDg
status: active
merged_into: null
display_name: 张氏
cbdb_id: 302972
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RkFX8MYbDu1T9s_5XIaazh
        subject_person_id: p_Gp6LFTibhfU4rxEHuRWuDg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_CmMqWinF3L571_Pe67GNyz
          claim_id: c_RkFX8MYbDu1T9s_5XIaazh
          source_id: s_dLXVrEahMyQM54gQjR16G9
          stance: supports
          locator: CBDB:302972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dLXVrEahMyQM54gQjR16G9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（302972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302972&o=json
            external_identifier: CBDB:302972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:04.733Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GeKkn8BBH1Y8rwF1wSgSGo
        subject_person_id: p_Gp6LFTibhfU4rxEHuRWuDg
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
        - id: cs_qzsjFCXnLQwsKdQMErj48s
          claim_id: c_GeKkn8BBH1Y8rwF1wSgSGo
          source_id: s_dLXVrEahMyQM54gQjR16G9
          stance: supports
          locator: Q65826953
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xobySYZfaoi24XB28aHM15
          claim_id: c_GeKkn8BBH1Y8rwF1wSgSGo
          source_id: s_9QY7mgnLRKBXqFtZcFy3oW
          stance: supports
          locator: Q65826953
          quotation: null
          interpretation_note: null
          source:
            id: s_9QY7mgnLRKBXqFtZcFy3oW
            source_type: api_record
            title: 维基数据：张氏（Q65826953）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65826953
            external_identifier: Q65826953
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
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
        id: c_NvkEo4vtua81RcbfqeAwLD
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Gp6LFTibhfU4rxEHuRWuDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_23qQ25eufjtgTHHyCQi1Gt
          claim_id: c_NvkEo4vtua81RcbfqeAwLD
          source_id: s_cnBJ6N1V5Zx1wh6A4eDH9b
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十年進士登科錄:一卷
          source:
            id: s_cnBJ6N1V5Zx1wh6A4eDH9b
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王崇古（124981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json
            external_identifier: CBDB:124981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:53.846Z
            metadata_json: null
        - id: cs_X5bwe5Z2vC6FLgQPouu3Yv
          claim_id: c_NvkEo4vtua81RcbfqeAwLD
          source_id: s_9QY7mgnLRKBXqFtZcFy3oW
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9QY7mgnLRKBXqFtZcFy3oW
            source_type: api_record
            title: 维基数据：张氏（Q65826953）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65826953
            external_identifier: Q65826953
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
        - id: cs_gG6M9hGJsyaDCM5F9bnUjc
          claim_id: c_NvkEo4vtua81RcbfqeAwLD
          source_id: s_cLEqrKXY73DkEAFGT4PZQv
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cLEqrKXY73DkEAFGT4PZQv
            source_type: api_record
            title: 维基数据：王崇古（Q15934835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934835
            external_identifier: Q15934835
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.009Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
    - claim:
        id: c_AG-cDsyP1fRpMCUDwEoa_Y
        subject_person_id: p_Gp6LFTibhfU4rxEHuRWuDg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4GbPExDFna3bpZBzyQEK5D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_llAic8dTI3IJDj_BA5qqWp
          claim_id: c_AG-cDsyP1fRpMCUDwEoa_Y
          source_id: s_dLXVrEahMyQM54gQjR16G9
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4GbPExDFna3bpZBzyQEK5D
        status: active
        display_name: 王崇古
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
| bio.summary | 张氏，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302972） | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |
| spouses | p_4GbPExDFna3bpZBzyQEK5D | 王崇古 | accepted |

## 外部来源

- [维基数据：王崇古（Q15934835）](https://www.wikidata.org/wiki/Q15934835)
- [维基数据：张氏（Q65826953）](https://www.wikidata.org/wiki/Q65826953)
- [CBDB 中国历代人物传记资料库：王崇古（124981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124981&o=json)
- [CBDB 中国历代人物传记资料库：張氏（302972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302972&o=json)
