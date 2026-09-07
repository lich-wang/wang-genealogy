---
schema: wang-person/v1
id: p_3V7J6Cw5ZiEox5if48naUe
status: active
merged_into: null
display_name: 陆氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nU9OmHavw03u9XNDCBT8b5
        subject_person_id: p_3V7J6Cw5ZiEox5if48naUe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陆氏，王僑妻。维基数据以独立条目 Q65854461 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_-jEEbSNQTARghnx4bDQDdp
          claim_id: c_nU9OmHavw03u9XNDCBT8b5
          source_id: s_FQeY6Qr6MJ1qdBEGWEzwQr
          stance: supports
          locator: Q65854461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_FQeY6Qr6MJ1qdBEGWEzwQr
            source_type: api_record
            title: 维基数据：陆氏（Q65854461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65854461
            external_identifier: Q65854461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:15.720Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rJLQD876fKJB8s65BMpCur
        subject_person_id: p_3V7J6Cw5ZiEox5if48naUe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陆氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H4jRvtmLucET5KgqmB5a3k
          claim_id: c_rJLQD876fKJB8s65BMpCur
          source_id: s_FQeY6Qr6MJ1qdBEGWEzwQr
          stance: supports
          locator: Q65854461
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tuAr3v8N3TH9zSdFQBj89N
          claim_id: c_rJLQD876fKJB8s65BMpCur
          source_id: s_iqBQydHWpyFyGCFQii14sH
          stance: supports
          locator: Q65854461
          quotation: null
          interpretation_note: null
          source:
            id: s_iqBQydHWpyFyGCFQii14sH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陸氏（250189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250189&o=json
            external_identifier: CBDB:250189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:15.865Z
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
        id: c_AFNzqYjMZjACy6VLVZTDZt
        subject_person_id: p_3V7J6Cw5ZiEox5if48naUe
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_U2Fggori7BCBLtrGmDkhHG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_QXb2jLuCcHQYVF2Eb22SJ5
          claim_id: c_AFNzqYjMZjACy6VLVZTDZt
          source_id: s_jayXTadzSBPRNkB7T2cgNb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jayXTadzSBPRNkB7T2cgNb
            source_type: api_record
            title: 维基数据：王侨（Q19856054）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19856054
            external_identifier: Q19856054
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:33.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
        - id: cs_RtfoHBaY5PKDAKp2XAbL8z
          claim_id: c_AFNzqYjMZjACy6VLVZTDZt
          source_id: s_dMF2frrYaWy1v7bz1SUT5J
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十一年進士登科錄:一卷
          source:
            id: s_dMF2frrYaWy1v7bz1SUT5J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王僑（199828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199828&o=json
            external_identifier: CBDB:199828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:34.004Z
            metadata_json: null
        - id: cs_m3vEyEVMn4AQiwKbP4BcVH
          claim_id: c_AFNzqYjMZjACy6VLVZTDZt
          source_id: s_FQeY6Qr6MJ1qdBEGWEzwQr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FQeY6Qr6MJ1qdBEGWEzwQr
            source_type: api_record
            title: 维基数据：陆氏（Q65854461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65854461
            external_identifier: Q65854461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:15.720Z
            metadata_json: null
        - id: cs_k3hAwyYQ4ZoWZnV6D37Bp2
          claim_id: c_AFNzqYjMZjACy6VLVZTDZt
          source_id: s_iqBQydHWpyFyGCFQii14sH
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十一年進士登科錄:一卷
          source:
            id: s_iqBQydHWpyFyGCFQii14sH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陸氏（250189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250189&o=json
            external_identifier: CBDB:250189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:15.865Z
            metadata_json: null
        - id: cs_8bkicux9ceZ5RHERaGoJ7Q
          claim_id: c_AFNzqYjMZjACy6VLVZTDZt
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶陸氏
          interpretation_note: null
          source:
            id: s_43NcmX3fqpgyecqBk9Mp3P
            source_type: website
            title: 中文维基百科：王僑 (成化進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_U2Fggori7BCBLtrGmDkhHG
        status: active
        display_name: 王侨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陆氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陆氏，王僑妻。维基数据以独立条目 Q65854461 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陆氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_U2Fggori7BCBLtrGmDkhHG | 王侨 | accepted |

## 外部来源

- [维基数据：陆氏（Q65854461）](https://www.wikidata.org/wiki/Q65854461)
- [维基数据：王侨（Q19856054）](https://www.wikidata.org/wiki/Q19856054)
- [中文维基百科：王僑 (成化進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB))
- [CBDB 中国历代人物传记资料库：陸氏（250189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250189&o=json)
- [CBDB 中国历代人物传记资料库：王僑（199828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199828&o=json)
