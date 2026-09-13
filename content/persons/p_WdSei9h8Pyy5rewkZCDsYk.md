---
schema: wang-person/v1
id: p_WdSei9h8Pyy5rewkZCDsYk
status: active
merged_into: null
display_name: 吴氏
cbdb_id: 257537
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G-NFzHHzHdXShH5bp_ZVai
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xbzzm7CCEPzsifwWdH4zAT
          claim_id: c_G-NFzHHzHdXShH5bp_ZVai
          source_id: s_fqUNTVGzHys351QW9qwD5C
          stance: supports
          locator: CBDB:257537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fqUNTVGzHys351QW9qwD5C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（257537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257537&o=json
            external_identifier: CBDB:257537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.942Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8UM8NxpHHPaz6vpXSEvexP
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HyFVvu27FE1ZMGC1334uLD
          claim_id: c_8UM8NxpHHPaz6vpXSEvexP
          source_id: s_fqUNTVGzHys351QW9qwD5C
          stance: supports
          locator: Q65863384
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_k5Ko4X5V4bjGT5Koj67ad7
          claim_id: c_8UM8NxpHHPaz6vpXSEvexP
          source_id: s_bjFw9T2cPPGvXnE3wAqLf9
          stance: supports
          locator: Q65863384
          quotation: null
          interpretation_note: null
          source:
            id: s_bjFw9T2cPPGvXnE3wAqLf9
            source_type: api_record
            title: 维基数据：吴氏（Q65863384）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65863384
            external_identifier: Q65863384
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
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
        id: c_iEEcp8x8imYR5sGc3AiADA
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Wdd9WrspYiEE72NGMNp75f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7fiLyivW6dLtRBMmUc52HJ
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_NJ2haMVGZPu81DDDJUf64c
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_bjFw9T2cPPGvXnE3wAqLf9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjFw9T2cPPGvXnE3wAqLf9
            source_type: api_record
            title: 维基数据：吴氏（Q65863384）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65863384
            external_identifier: Q65863384
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_QQot37A422dqeyezSTL7sf
          claim_id: c_iEEcp8x8imYR5sGc3AiADA
          source_id: s_FJA22kz48wYtYnUG6KKP2H
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化二十三年進士登科錄:一卷
          source:
            id: s_FJA22kz48wYtYnUG6KKP2H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻儒（33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:55.540Z
            metadata_json: null
      object_person:
        id: p_Wdd9WrspYiEE72NGMNp75f
        status: active
        display_name: 王鸿儒
        merged_into_person_id: null
    - claim:
        id: c_PdzEMRh3SwZ3hBEKAOaR70
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBCoXkRoXHjxxOXrv7ywrU
          claim_id: c_PdzEMRh3SwZ3hBEKAOaR70
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1Q1PMjTF3hG8x2zM1xYbq
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bwdhzsnM77a9YN3tYyTmwB
        status: active
        display_name: 王鴻儒
        merged_into_person_id: null
    - claim:
        id: c_D6vGQaAuu0Mmp5ch-FI5-D
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmnzP0dhwUAoLu5ZudD2Of
          claim_id: c_D6vGQaAuu0Mmp5ch-FI5-D
          source_id: s_fqUNTVGzHys351QW9qwD5C
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bwdhzsnM77a9YN3tYyTmwB
        status: active
        display_name: 王鴻儒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257537） | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Wdd9WrspYiEE72NGMNp75f | 王鸿儒 | accepted |
| spouses | p_bwdhzsnM77a9YN3tYyTmwB | 王鴻儒 | accepted |
| spouses | p_bwdhzsnM77a9YN3tYyTmwB | 王鴻儒 | accepted |

## 外部来源

- [维基数据：王鸿儒（Q15933067）](https://www.wikidata.org/wiki/Q15933067)
- [维基数据：吴氏（Q65863384）](https://www.wikidata.org/wiki/Q65863384)
- [中国历代人物传记资料库：王鴻儒（CBDB 33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（257537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257537&o=json)
