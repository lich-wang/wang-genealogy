---
schema: wang-person/v1
id: p_wzKvWDo53UBRUkzm5yDksN
status: active
merged_into: null
display_name: 王氏
cbdb_id: 5026
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_87M1kevPqwpQWd8gi1mT5u
        subject_person_id: p_wzKvWDo53UBRUkzm5yDksN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，周彥先妻。维基数据以独立条目 Q45363781 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-2EXsk0pY2Jo-hu6AwSMGF
          claim_id: c_87M1kevPqwpQWd8gi1mT5u
          source_id: s_jeDdSAyJ7vfh56zT6wNp69
          stance: supports
          locator: Q45363781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_jeDdSAyJ7vfh56zT6wNp69
            source_type: api_record
            title: 维基数据：王氏（Q45363781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363781
            external_identifier: Q45363781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s1teMPvg9iEfnwbCGM9rzm
        subject_person_id: p_wzKvWDo53UBRUkzm5yDksN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DhLHGJRsYjDfKqkdCjsGs5
          claim_id: c_s1teMPvg9iEfnwbCGM9rzm
          source_id: s_jeDdSAyJ7vfh56zT6wNp69
          stance: supports
          locator: Q45363781
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FAcvBhHmK24KhXCXwQ4B5y
          claim_id: c_s1teMPvg9iEfnwbCGM9rzm
          source_id: s_56gWHoLHokafQRXA3gGi64
          stance: supports
          locator: Q45363781
          quotation: null
          interpretation_note: null
          source:
            id: s_56gWHoLHokafQRXA3gGi64
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json
            external_identifier: CBDB:5026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:12.880Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j1NquGbjgLhhGDQ6rx3zo2
        subject_person_id: p_o255NHVLtnzoPr2i5G4ntm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wzKvWDo53UBRUkzm5yDksN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YvRLWDCToqEgZ7NPxgkHLN
          claim_id: c_j1NquGbjgLhhGDQ6rx3zo2
          source_id: s_un7dCG7hRi14hUeg4EsewE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_un7dCG7hRi14hUeg4EsewE
            source_type: api_record
            title: 维基数据：王贯之（Q45362986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362986
            external_identifier: Q45362986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:43.280Z
            metadata_json: null
        - id: cs_jvF7mP81T9YKKBDxdEWSDx
          claim_id: c_j1NquGbjgLhhGDQ6rx3zo2
          source_id: s_3Y9DQdDPm6vSqf3LqpD5ei
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_3Y9DQdDPm6vSqf3LqpD5ei
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貫之（3965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json
            external_identifier: CBDB:3965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:43.471Z
            metadata_json: null
        - id: cs_EBBVr3gYTqFnJj5xH76cnk
          claim_id: c_j1NquGbjgLhhGDQ6rx3zo2
          source_id: s_jeDdSAyJ7vfh56zT6wNp69
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jeDdSAyJ7vfh56zT6wNp69
            source_type: api_record
            title: 维基数据：王氏（Q45363781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363781
            external_identifier: Q45363781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json: null
        - id: cs_PFdyZGcXSbMExUtDr2aXR6
          claim_id: c_j1NquGbjgLhhGDQ6rx3zo2
          source_id: s_56gWHoLHokafQRXA3gGi64
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_56gWHoLHokafQRXA3gGi64
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json
            external_identifier: CBDB:5026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:12.880Z
            metadata_json: null
      object_person:
        id: p_o255NHVLtnzoPr2i5G4ntm
        status: active
        display_name: 王贯之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PofQmLMj89YpZKsQHh5MqM
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wzKvWDo53UBRUkzm5yDksN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BabMgJj1UXELv6DoLLwTKg
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_56gWHoLHokafQRXA3gGi64
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_56gWHoLHokafQRXA3gGi64
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json
            external_identifier: CBDB:5026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:12.880Z
            metadata_json: null
        - id: cs_YEct9xbGhBTNaid7ep6G5G
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_jeDdSAyJ7vfh56zT6wNp69
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jeDdSAyJ7vfh56zT6wNp69
            source_type: api_record
            title: 维基数据：王氏（Q45363781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363781
            external_identifier: Q45363781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json: null
        - id: cs_cMz6H6nxnD9H52qExzM8Fq
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_5MXhqNyCLSN4gjKq13DjA3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5MXhqNyCLSN4gjKq13DjA3
            source_type: api_record
            title: 维基数据：周彦先（Q45361029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45361029
            external_identifier: Q45361029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json: null
        - id: cs_UyMMwn5sZxKebudJHqx3b2
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_3QT4ZnP4quJ68t1VBMjF9F
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_3QT4ZnP4quJ68t1VBMjF9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周彥先（3250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3250&o=json
            external_identifier: CBDB:3250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:35.839Z
            metadata_json: null
      object_person:
        id: p_89CVzmbJkovfM1uzWHbhb4
        status: active
        display_name: 周彦先
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，周彥先妻。维基数据以独立条目 Q45363781 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o255NHVLtnzoPr2i5G4ntm | 王贯之 | accepted |
| spouses | p_89CVzmbJkovfM1uzWHbhb4 | 周彦先 | accepted |

## 外部来源

- [维基数据：王贯之（Q45362986）](https://www.wikidata.org/wiki/Q45362986)
- [维基数据：王氏（Q45363781）](https://www.wikidata.org/wiki/Q45363781)
- [维基数据：周彦先（Q45361029）](https://www.wikidata.org/wiki/Q45361029)
- [CBDB 中国历代人物传记资料库：王貫之（3965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3965&o=json)
- [CBDB 中国历代人物传记资料库：王氏（5026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json)
- [CBDB 中国历代人物传记资料库：周彥先（3250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3250&o=json)
