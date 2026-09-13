---
schema: wang-person/v1
id: p_SgThifkjTUbYEBc8gUKfZc
status: active
merged_into: null
display_name: 章氏
cbdb_id: 325416
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lad7UttfxHce4npVbcVEh_
        subject_person_id: p_SgThifkjTUbYEBc8gUKfZc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 章氏，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 325416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_l6ZoyC4zFOoZxTUYDqJTxX
          claim_id: c_Lad7UttfxHce4npVbcVEh_
          source_id: s_tdWQqB2uL459RPJUrKruXc
          stance: supports
          locator: CBDB:325416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tdWQqB2uL459RPJUrKruXc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：章氏（325416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325416&o=json
            external_identifier: CBDB:325416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:16.606Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zp8teEFDDzWM2LgsJh7mAT
        subject_person_id: p_SgThifkjTUbYEBc8gUKfZc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 章氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2sR4guApmSuWgvTu4zyk6B
          claim_id: c_Zp8teEFDDzWM2LgsJh7mAT
          source_id: s_kyMju8JqkZLc4YGrX94SnS
          stance: supports
          locator: Q65851988
          quotation: null
          interpretation_note: null
          source:
            id: s_kyMju8JqkZLc4YGrX94SnS
            source_type: api_record
            title: 维基数据：章氏（Q65851988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65851988
            external_identifier: Q65851988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:16.451Z
            metadata_json: null
        - id: cs_JZf5EaETo36X6SUtzBmEye
          claim_id: c_Zp8teEFDDzWM2LgsJh7mAT
          source_id: s_tdWQqB2uL459RPJUrKruXc
          stance: supports
          locator: Q65851988
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UhSfmZ6y2KS1Q2nmjv5aSR
        subject_person_id: p_38CvMQkfBCMzR3DNrBhBQJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SgThifkjTUbYEBc8gUKfZc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ptk9AytnDjDfQGwTeYuqB2
          claim_id: c_UhSfmZ6y2KS1Q2nmjv5aSR
          source_id: s_5imTSkJydYpo2DeA4oi3Sq
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5imTSkJydYpo2DeA4oi3Sq
            source_type: api_record
            title: 维基数据：王世懋（Q16260750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260750
            external_identifier: Q16260750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:53.740Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B
        - id: cs_haMevXV6xBJR5KwGpJGWUb
          claim_id: c_UhSfmZ6y2KS1Q2nmjv5aSR
          source_id: s_iAg6G2jfpHXsfxxTQq8PBT
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖三十八年進士登科錄:一卷
          source:
            id: s_iAg6G2jfpHXsfxxTQq8PBT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世懋（34719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34719&o=json
            external_identifier: CBDB:34719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:53.874Z
            metadata_json: null
        - id: cs_2Y71sLDZZKLstP6LGHviyq
          claim_id: c_UhSfmZ6y2KS1Q2nmjv5aSR
          source_id: s_kyMju8JqkZLc4YGrX94SnS
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kyMju8JqkZLc4YGrX94SnS
            source_type: api_record
            title: 维基数据：章氏（Q65851988）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65851988
            external_identifier: Q65851988
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:16.451Z
            metadata_json: null
        - id: cs_qRwHSX1ajeAFaBryHUxdRh
          claim_id: c_UhSfmZ6y2KS1Q2nmjv5aSR
          source_id: s_tdWQqB2uL459RPJUrKruXc
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖三十八年進士登科錄:一卷
          source:
            id: s_tdWQqB2uL459RPJUrKruXc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：章氏（325416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325416&o=json
            external_identifier: CBDB:325416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:16.606Z
            metadata_json: null
        - id: cs_zDYwX6NqD7VkdHiro5z4r3
          claim_id: c_UhSfmZ6y2KS1Q2nmjv5aSR
          source_id: s_KSnQUJhtzzoh7dcPEKdVU4
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶章氏。
          interpretation_note: null
          source:
            id: s_KSnQUJhtzzoh7dcPEKdVU4
            source_type: website
            title: 中文维基百科：王世懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:57:05.025Z
            metadata_json: null
      object_person:
        id: p_38CvMQkfBCMzR3DNrBhBQJ
        status: active
        display_name: 王世懋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 章氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 章氏，明人物。嘉靖三十八年進士。（中国历代人物传记资料库 CBDB 325416） | accepted |
| name.primary | 章氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_38CvMQkfBCMzR3DNrBhBQJ | 王世懋 | accepted |

## 外部来源

- [维基数据：王世懋（Q16260750）](https://www.wikidata.org/wiki/Q16260750)
- [维基数据：章氏（Q65851988）](https://www.wikidata.org/wiki/Q65851988)
- [中文维基百科：王世懋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B)
- [CBDB 中国历代人物传记资料库：王世懋（34719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34719&o=json)
- [CBDB 中国历代人物传记资料库：章氏（325416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325416&o=json)
