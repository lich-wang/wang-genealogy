---
schema: wang-person/v1
id: p_XwKHLH17io2m6CKt414qzT
status: active
merged_into: null
display_name: 王伍
cbdb_id: 217730
revision: 3
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
          source: &a2
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
  parents:
    - claim:
        id: c_ZZpPi8bmZHB2wwRG5dKmC8
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XwKHLH17io2m6CKt414qzT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GK1QETbiiBYdDt73Y8xUS9
          claim_id: c_ZZpPi8bmZHB2wwRG5dKmC8
          source_id: s_LrzG6DKCN156m5wAdTojaB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LrzG6DKCN156m5wAdTojaB
            source_type: api_record
            title: 维基数据：王贵（Q16075276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075276
            external_identifier: Q16075276
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%B4_(%E6%98%8E%E6%9C%9D)
        - id: cs_6s6FcAiyMd2TBuPvfPqrUD
          claim_id: c_ZZpPi8bmZHB2wwRG5dKmC8
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_VTPD5ERN4nKpvDScS6wxja
        status: active
        display_name: 王贵
        merged_into_person_id: null
  children:
    - claim:
        id: c_D39qRDRw1F2kLMDLbM7at4
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nywd4GBn5gqwJ8VHyUtjw8
          claim_id: c_D39qRDRw1F2kLMDLbM7at4
          source_id: s_WQuJfewNt1rKQX9Pq57QHd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WQuJfewNt1rKQX9Pq57QHd
            source_type: api_record
            title: 维基数据：王麟（Q45450873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450873
            external_identifier: Q45450873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_6JaqJygAi633QQJiNUC7uF
          claim_id: c_D39qRDRw1F2kLMDLbM7at4
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ZkypYFnypEdHtWl3T8Kx4M
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__VzyUUqs4u7XTig1OWIjVr
          claim_id: c_ZkypYFnypEdHtWl3T8Kx4M
          source_id: s_FJ1HG7BynJqSbkFRirS4id
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
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
| parents | p_VTPD5ERN4nKpvDScS6wxja | 王贵 | accepted |
| children | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| descendants | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |

## 外部来源

- [维基数据：王贵（Q16075276）](https://www.wikidata.org/wiki/Q16075276)
- [维基数据：王麟（Q45450873）](https://www.wikidata.org/wiki/Q45450873)
- [维基数据：王伍（Q45601163）](https://www.wikidata.org/wiki/Q45601163)
- [CBDB 中国历代人物传记资料库：王伍（217730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json)
