---
schema: wang-person/v1
id: p_GYXTdGzZ8zRdfAxpgeUm9N
status: active
merged_into: null
display_name: 王缜
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XMKu81mS1MbHZx8VApf4sB
        subject_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缜（1463年—1523年），明朝官员。维基数据以独立条目 Q15933343 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Jv1J0v1yLBg6FHL3wl6d78
          claim_id: c_XMKu81mS1MbHZx8VApf4sB
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: Q15933343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FUR8ANiSGyQvFB321LfRhQ
        subject_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1463-01-01
            latest: 1463-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4SEmeRb9spnBRpdLxPTix8
          claim_id: c_FUR8ANiSGyQvFB321LfRhQ
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pHatQo2tEHDNKMNQpXPkU6
        subject_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1523-01-01
            latest: 1523-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RcRGFMQMGnWn51X8Q5YwyK
          claim_id: c_pHatQo2tEHDNKMNQpXPkU6
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_byTWcTFcGbcd4YV3BWrayH
        subject_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ApbtDHWTs6DXnu2GvPkqNB
          claim_id: c_byTWcTFcGbcd4YV3BWrayH
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: Q15933343
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GxzicMFF1GSFrFjdWRGBR3
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZNX5a9Ue7bnqTkDjELFB7L
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_ZU7SPBGP5FxJMm8uhWHBbx
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person:
        id: p_zQAyFcVTh8uEFRKFQtkku9
        status: active
        display_name: 王恪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1Qj2BNYmry47bFWBf47Zv2
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2h91qn6KAZS7hcZaF4jz3J
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_DGqX2z7eUrTc3YJYNBHfba
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_2fjb2fbXnpDjQAFJ1d75s2
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治六年進士登科錄:一卷
          source:
            id: s_2fjb2fbXnpDjQAFJ1d75s2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縝（68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:56.682Z
            metadata_json: null
        - id: cs_wRaoJg3EGP4AhiJwLWdqZN
          claim_id: c_1Qj2BNYmry47bFWBf47Zv2
          source_id: s_t9kLVnFzko1iwLCXTWsMKo
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_t9kLVnFzko1iwLCXTWsMKo
            source_type: api_record
            title: 维基数据：周氏（Q65871784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65871784
            external_identifier: Q65871784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
      object_person:
        id: p_EVLq7xAUTLGpaeFfQpgjH5
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王缜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缜（1463年—1523年），明朝官员。维基数据以独立条目 Q15933343 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1463年 | accepted |
| death.date | 1523年 | accepted |
| name.primary | 王缜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQAyFcVTh8uEFRKFQtkku9 | 王恪 | accepted |
| spouses | p_EVLq7xAUTLGpaeFfQpgjH5 | 周氏 | accepted |

## 外部来源

- [维基数据：王恪（Q45583500）](https://www.wikidata.org/wiki/Q45583500)
- [维基数据：王缜（Q15933343）](https://www.wikidata.org/wiki/Q15933343)
- [维基数据：周氏（Q65871784）](https://www.wikidata.org/wiki/Q65871784)
- [CBDB 中国历代人物传记资料库：王縝（68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
