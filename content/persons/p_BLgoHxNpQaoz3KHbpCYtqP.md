---
schema: wang-person/v1
id: p_BLgoHxNpQaoz3KHbpCYtqP
status: active
merged_into: null
display_name: 许氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zZk54YCWjunEcUJXY4QeyA
        subject_person_id: p_BLgoHxNpQaoz3KHbpCYtqP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 许氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrhjbCbj2ALonsYF5DKrJF
          claim_id: c_zZk54YCWjunEcUJXY4QeyA
          source_id: s_DLnV5a3bEc8QDbtdRuuPio
          stance: supports
          locator: Q65837810
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_DLnV5a3bEc8QDbtdRuuPio
            source_type: api_record
            title: 维基数据：许氏（Q65837810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65837810
            external_identifier: Q65837810
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_qnN1RCDy9tEcgFEGTsWsmd
          claim_id: c_zZk54YCWjunEcUJXY4QeyA
          source_id: s_YnHcTNMeJvZcz61ZN3bnWU
          stance: supports
          locator: CBDB:235521
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_YnHcTNMeJvZcz61ZN3bnWU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：許氏（235521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235521&o=json
            external_identifier: CBDB:235521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
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
        id: c_xXB8Rj7gbDRrV8kyRbQ2iB
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BLgoHxNpQaoz3KHbpCYtqP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2KWBZBr13cGSqtiJmrvLo
          claim_id: c_xXB8Rj7gbDRrV8kyRbQ2iB
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
        - id: cs_CBBjXcsxD86DJRDEK8bFCj
          claim_id: c_xXB8Rj7gbDRrV8kyRbQ2iB
          source_id: s_DLnV5a3bEc8QDbtdRuuPio
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_96CayXkmFhx9stH5pUcDPU
          claim_id: c_xXB8Rj7gbDRrV8kyRbQ2iB
          source_id: s_XjxsW4fSFjTSLcgZb1nJFe
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆三十八年庚戌科序齒錄:一卷
          source:
            id: s_XjxsW4fSFjTSLcgZb1nJFe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王象春（126731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json
            external_identifier: CBDB:126731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:52.218Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 许氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 许氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
- [维基数据：许氏（Q65837810）](https://www.wikidata.org/wiki/Q65837810)
- [CBDB 中国历代人物传记资料库：王象春（126731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126731&o=json)
- [CBDB 中国历代人物传记资料库：許氏（235521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235521&o=json)
