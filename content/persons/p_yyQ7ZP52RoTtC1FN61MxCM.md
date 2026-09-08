---
schema: wang-person/v1
id: p_yyQ7ZP52RoTtC1FN61MxCM
status: active
merged_into: null
display_name: 王练
cbdb_id: 175370
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NfffGPCVQF721CHcwB8kAc
        subject_person_id: p_yyQ7ZP52RoTtC1FN61MxCM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王练（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PayQ2e9TdYJL9UmLthi1UB
          claim_id: c_NfffGPCVQF721CHcwB8kAc
          source_id: s_ACcDyTeLyUAmUz489fFseN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ACcDyTeLyUAmUz489fFseN
            source_type: api_record
            title: 维基数据：王练（Q45655768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655768
            external_identifier: Q45655768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_GY_ROSdor4Hb4r-76LOkm5
          claim_id: c_NfffGPCVQF721CHcwB8kAc
          source_id: s_hrKMXW9RBdRKgXM8XWEY4h
          stance: supports
          locator: CBDB:175370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hrKMXW9RBdRKgXM8XWEY4h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王練（175370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175370&o=json
            external_identifier: CBDB:175370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.744Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5aH5KqL3KaJ6KhM56BQrGB
        subject_person_id: p_yyQ7ZP52RoTtC1FN61MxCM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5DC5Jq8ifQ3NdxnW51Hxmh
          claim_id: c_5aH5KqL3KaJ6KhM56BQrGB
          source_id: s_ACcDyTeLyUAmUz489fFseN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ACcDyTeLyUAmUz489fFseN
            source_type: api_record
            title: 维基数据：王练（Q45655768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655768
            external_identifier: Q45655768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XCwaS5LuvUEzw7ceNam32k
        subject_person_id: p_yyQ7ZP52RoTtC1FN61MxCM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王练
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JCnQU48mhwXAEj41RE1UDC
          claim_id: c_XCwaS5LuvUEzw7ceNam32k
          source_id: s_hrKMXW9RBdRKgXM8XWEY4h
          stance: supports
          locator: Q45655768
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Jidd75z3A7X9m29qzBHbkd
          claim_id: c_XCwaS5LuvUEzw7ceNam32k
          source_id: s_ACcDyTeLyUAmUz489fFseN
          stance: supports
          locator: Q45655768
          quotation: null
          interpretation_note: null
          source:
            id: s_ACcDyTeLyUAmUz489fFseN
            source_type: api_record
            title: 维基数据：王练（Q45655768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655768
            external_identifier: Q45655768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aT7dEBfk2mZU2TkP9wP5Ao
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyQ7ZP52RoTtC1FN61MxCM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4LVk7WwWEYSJLr2WUdKmjG
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_MSHgLoph6JGAu9siKnKBaj
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_gnKpgGzDtpUxqtuknv15RJ
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_ACcDyTeLyUAmUz489fFseN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ACcDyTeLyUAmUz489fFseN
            source_type: api_record
            title: 维基数据：王练（Q45655768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655768
            external_identifier: Q45655768
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_S9cNhbeQM8TjzVfPv1mo6Y
          claim_id: c_aT7dEBfk2mZU2TkP9wP5Ao
          source_id: s_hrKMXW9RBdRKgXM8XWEY4h
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hrKMXW9RBdRKgXM8XWEY4h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王練（175370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175370&o=json
            external_identifier: CBDB:175370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.744Z
            metadata_json: null
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王练

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王练（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王练 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |

## 外部来源

- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王练（Q45655768）](https://www.wikidata.org/wiki/Q45655768)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王練（175370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175370&o=json)
