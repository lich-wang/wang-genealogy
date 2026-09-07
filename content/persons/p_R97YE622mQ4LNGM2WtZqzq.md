---
schema: wang-person/v1
id: p_R97YE622mQ4LNGM2WtZqzq
status: active
merged_into: null
display_name: 王斿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9DaqEJjDow1s5RtnUF3RtV
        subject_person_id: p_R97YE622mQ4LNGM2WtZqzq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斿，宋人物。CBDB 记录其籍贯记录为臨川，曾任承奉郎、路提點刑獄公事。中国历代人物传记资料库（CBDB）以人物编号 22207 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cLatkLgouKJ5mDSV3PbR27
          claim_id: c_9DaqEJjDow1s5RtnUF3RtV
          source_id: s_8MAeL2rN3zgxDf72MgX8L7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8MAeL2rN3zgxDf72MgX8L7
            source_type: api_record
            title: 维基数据：王斿（Q45402037）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402037
            external_identifier: Q45402037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.503Z
            metadata_json: null
        - id: cs_2ljEevleL2v9tNHQ5dFnpl
          claim_id: c_9DaqEJjDow1s5RtnUF3RtV
          source_id: s_d92e7t26wfVupQhv17ndTo
          stance: supports
          locator: CBDB:22207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_d92e7t26wfVupQhv17ndTo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王斿（22207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22207&o=json
            external_identifier: CBDB:22207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.681Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AoUgEC73xL3FSxQia9pwQ4
        subject_person_id: p_R97YE622mQ4LNGM2WtZqzq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g9seBhKxS6GtVBGkkptu22
          claim_id: c_AoUgEC73xL3FSxQia9pwQ4
          source_id: s_8MAeL2rN3zgxDf72MgX8L7
          stance: supports
          locator: Q45402037
          quotation: null
          interpretation_note: null
          source:
            id: s_8MAeL2rN3zgxDf72MgX8L7
            source_type: api_record
            title: 维基数据：王斿（Q45402037）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402037
            external_identifier: Q45402037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.503Z
            metadata_json: null
        - id: cs_w2GxcZiSbUqp2ty59BAxTC
          claim_id: c_AoUgEC73xL3FSxQia9pwQ4
          source_id: s_d92e7t26wfVupQhv17ndTo
          stance: supports
          locator: Q45402037
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WZGDj7P8Bs9kzaSZJQbVoY
        subject_person_id: p_3junVkFJoVRzxzPkHGwJp6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R97YE622mQ4LNGM2WtZqzq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uk8HYhRdqv7ToZ6xCBCQSp
          claim_id: c_WZGDj7P8Bs9kzaSZJQbVoY
          source_id: s_eLUhkWfYU2avW7ALtX5HuY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eLUhkWfYU2avW7ALtX5HuY
            source_type: api_record
            title: 维基数据：王安国（Q16077282）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077282
            external_identifier: Q16077282
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:57.213Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E5%9C%8B_(%E5%8C%97%E5%AE%8B)
        - id: cs_wXfdfbp1bLVDPXCytNs6g5
          claim_id: c_WZGDj7P8Bs9kzaSZJQbVoY
          source_id: s_iMR7HP2uaY3SbJBUifgDL8
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_iMR7HP2uaY3SbJBUifgDL8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安國（7076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json
            external_identifier: CBDB:7076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:57.350Z
            metadata_json: null
        - id: cs_PxFU9wxi3BKMgDzaeNgQ1r
          claim_id: c_WZGDj7P8Bs9kzaSZJQbVoY
          source_id: s_8MAeL2rN3zgxDf72MgX8L7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8MAeL2rN3zgxDf72MgX8L7
            source_type: api_record
            title: 维基数据：王斿（Q45402037）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402037
            external_identifier: Q45402037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.503Z
            metadata_json: null
        - id: cs_8Dgz3pW2V3YhGQFGAn7r7V
          claim_id: c_WZGDj7P8Bs9kzaSZJQbVoY
          source_id: s_d92e7t26wfVupQhv17ndTo
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_d92e7t26wfVupQhv17ndTo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王斿（22207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22207&o=json
            external_identifier: CBDB:22207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.681Z
            metadata_json: null
      object_person:
        id: p_3junVkFJoVRzxzPkHGwJp6
        status: active
        display_name: 王安国
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王斿，宋人物。CBDB 记录其籍贯记录为臨川，曾任承奉郎、路提點刑獄公事。中国历代人物传记资料库（CBDB）以人物编号 22207 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王斿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3junVkFJoVRzxzPkHGwJp6 | 王安国 | accepted |

## 外部来源

- [维基数据：王安国（Q16077282）](https://www.wikidata.org/wiki/Q16077282)
- [维基数据：王斿（Q45402037）](https://www.wikidata.org/wiki/Q45402037)
- [CBDB 中国历代人物传记资料库：王安國（7076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json)
- [CBDB 中国历代人物传记资料库：王斿（22207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22207&o=json)
