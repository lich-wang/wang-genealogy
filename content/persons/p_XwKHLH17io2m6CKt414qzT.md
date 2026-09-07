---
schema: wang-person/v1
id: p_XwKHLH17io2m6CKt414qzT
status: active
merged_into: null
display_name: 王伍
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rmu1MCy1Pn8L56AKef7vwC
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍，明人物。中国历代人物传记资料库（CBDB）以人物编号 217730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_B2rz5RTJm8tqGpDMGMTo4j
          claim_id: c_Rmu1MCy1Pn8L56AKef7vwC
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FJJor8JkBzSB2pWbDy1n7F
            source_type: api_record
            title: 维基数据：王伍（Q45601163）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601163
            external_identifier: Q45601163
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_G5ueHaI9F6hgLVUNICoO1V
          claim_id: c_Rmu1MCy1Pn8L56AKef7vwC
          source_id: s_FJ1HG7BynJqSbkFRirS4id
          stance: supports
          locator: CBDB:217730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FJ1HG7BynJqSbkFRirS4id
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伍（217730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json
            external_identifier: CBDB:217730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNpj9rY5QS9gqMTTTmzV7X
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fCTXbjSokTLgLG85w9PWei
          claim_id: c_CNpj9rY5QS9gqMTTTmzV7X
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: Q45601163
          quotation: null
          interpretation_note: null
          source:
            id: s_FJJor8JkBzSB2pWbDy1n7F
            source_type: api_record
            title: 维基数据：王伍（Q45601163）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601163
            external_identifier: Q45601163
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
        - id: cs_uZZKV5v2WXwDDUoyBQTk82
          claim_id: c_CNpj9rY5QS9gqMTTTmzV7X
          source_id: s_FJ1HG7BynJqSbkFRirS4id
          stance: supports
          locator: Q45601163
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伍，明人物。中国历代人物传记资料库（CBDB）以人物编号 217730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王伍（Q45601163）](https://www.wikidata.org/wiki/Q45601163)
- [CBDB 中国历代人物传记资料库：王伍（217730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json)
