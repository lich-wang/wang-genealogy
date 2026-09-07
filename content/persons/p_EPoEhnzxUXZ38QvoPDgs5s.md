---
schema: wang-person/v1
id: p_EPoEhnzxUXZ38QvoPDgs5s
status: active
merged_into: null
display_name: 王绶
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oRJoyXa263HDkUU8Xi65HK
        subject_person_id: p_EPoEhnzxUXZ38QvoPDgs5s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绶，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 28111 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_L55pvxJ1SctjmNi3ADh6j3
          claim_id: c_oRJoyXa263HDkUU8Xi65HK
          source_id: s_zyC95qFrNP35eYAec1N57q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zyC95qFrNP35eYAec1N57q
            source_type: api_record
            title: 维基数据：王绶（Q45413315）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413315
            external_identifier: Q45413315
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_qC6uI7ryjhrzhfwW8JM3je
          claim_id: c_oRJoyXa263HDkUU8Xi65HK
          source_id: s_mLQgNsP5yBxMGDFbLcXeJ5
          stance: supports
          locator: CBDB:28111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mLQgNsP5yBxMGDFbLcXeJ5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綬（28111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28111&o=json
            external_identifier: CBDB:28111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.213Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2C6WA4q1ZQB7Cq1SdAHRJo
        subject_person_id: p_EPoEhnzxUXZ38QvoPDgs5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LEFPSBn5FpBcCw3tsg5z4Z
          claim_id: c_2C6WA4q1ZQB7Cq1SdAHRJo
          source_id: s_mLQgNsP5yBxMGDFbLcXeJ5
          stance: supports
          locator: Q45413315
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_c4acrK4sq53AgtXjmfxq2h
          claim_id: c_2C6WA4q1ZQB7Cq1SdAHRJo
          source_id: s_zyC95qFrNP35eYAec1N57q
          stance: supports
          locator: Q45413315
          quotation: null
          interpretation_note: null
          source:
            id: s_zyC95qFrNP35eYAec1N57q
            source_type: api_record
            title: 维基数据：王绶（Q45413315）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413315
            external_identifier: Q45413315
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YawskGmWaNNqJDecVABqDi
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EPoEhnzxUXZ38QvoPDgs5s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GABYfUzG4u1JRKPjTvDJNQ
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_bGXjMVpffDg5aNL8S5Rv3o
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bGXjMVpffDg5aNL8S5Rv3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王褘（10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:57.679Z
            metadata_json: null
        - id: cs_PFBH3RuZ5E3DZJGao65c57
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_zyC95qFrNP35eYAec1N57q
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zyC95qFrNP35eYAec1N57q
            source_type: api_record
            title: 维基数据：王绶（Q45413315）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413315
            external_identifier: Q45413315
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_TtBuqSeKAok5UZRRKHZMeE
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person:
        id: p_DNgcd12SMQT8sYhCTYL1PG
        status: active
        display_name: 王祎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绶，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 28111 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王绶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DNgcd12SMQT8sYhCTYL1PG | 王祎 | accepted |

## 外部来源

- [维基数据：王绶（Q45413315）](https://www.wikidata.org/wiki/Q45413315)
- [维基数据：王祎（Q15934970）](https://www.wikidata.org/wiki/Q15934970)
- [CBDB 中国历代人物传记资料库：王褘（10726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json)
- [CBDB 中国历代人物传记资料库：王綬（28111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28111&o=json)
