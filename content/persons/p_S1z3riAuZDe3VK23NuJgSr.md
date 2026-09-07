---
schema: wang-person/v1
id: p_S1z3riAuZDe3VK23NuJgSr
status: active
merged_into: null
display_name: 王励
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_O_AVcNfztPz1V6x9GTvXBr
        subject_person_id: p_S1z3riAuZDe3VK23NuJgSr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王励（512年—537年），史料所见人物。本项目依据《王励》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0RAajlf0eJxwSJgA3mwlFy
          claim_id: c_O_AVcNfztPz1V6x9GTvXBr
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: Q11572924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_txnuDdiLbtppuukpzDdpKU
            source_type: api_record
            title: 维基数据：王励（Q11572924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572924
            external_identifier: Q11572924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:06.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o9r7Zfp31NnSKcm9qaLDrn
        subject_person_id: p_S1z3riAuZDe3VK23NuJgSr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 512年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0512-01-01
            latest: 0512-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q9PXVay2r541pwavsPa6BD
          claim_id: c_o9r7Zfp31NnSKcm9qaLDrn
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_txnuDdiLbtppuukpzDdpKU
            source_type: api_record
            title: 维基数据：王励（Q11572924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572924
            external_identifier: Q11572924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:06.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iATMb4cb7uc28TmxNxdYR1
        subject_person_id: p_S1z3riAuZDe3VK23NuJgSr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 537年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0537-01-01
            latest: 0537-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dPDT5cXhcF23hXQHKhCjoY
          claim_id: c_iATMb4cb7uc28TmxNxdYR1
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_txnuDdiLbtppuukpzDdpKU
            source_type: api_record
            title: 维基数据：王励（Q11572924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572924
            external_identifier: Q11572924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:06.974Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Da4vW6eVgPWZNdAFZwLdE9
        subject_person_id: p_S1z3riAuZDe3VK23NuJgSr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王励
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_um7wxnfZ7pC8qAb15SQr1x
          claim_id: c_Da4vW6eVgPWZNdAFZwLdE9
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: Q11572924
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jZUQ9qDAVLF4hHpsExCz9A
        subject_person_id: p_n2jDzx5sS6j3vpbbSVhqB9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_S1z3riAuZDe3VK23NuJgSr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5BtS1M2a9ecKRBizkZfyG9
          claim_id: c_jZUQ9qDAVLF4hHpsExCz9A
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_txnuDdiLbtppuukpzDdpKU
            source_type: api_record
            title: 维基数据：王励（Q11572924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572924
            external_identifier: Q11572924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:06.974Z
            metadata_json: null
        - id: cs_y32Ue2Q4omWFvYcD3dkZ6s
          claim_id: c_jZUQ9qDAVLF4hHpsExCz9A
          source_id: s_8Vt11deCmUk8nxFgsES8ez
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8Vt11deCmUk8nxFgsES8ez
            source_type: api_record
            title: 维基数据：王盟（Q11573180）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573180
            external_identifier: Q11573180
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:54.945Z
            metadata_json: null
      object_person:
        id: p_n2jDzx5sS6j3vpbbSVhqB9
        status: active
        display_name: 王盟
        merged_into_person_id: null
  children:
    - claim:
        id: c_vEn1X7PMbSNbCMtJFMAY6j
        subject_person_id: p_S1z3riAuZDe3VK23NuJgSr
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qxusD5k4ScMfqp11jFwNpy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nyNT7r2dZbN3vaSXoLmJLJ
          claim_id: c_vEn1X7PMbSNbCMtJFMAY6j
          source_id: s_AZQexegvGc4MBcmGSUcMF4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AZQexegvGc4MBcmGSUcMF4
            source_type: api_record
            title: 维基数据：王弼（Q48889956）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48889956
            external_identifier: Q48889956
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.702Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%BC_(%E5%8C%97%E6%9C%9D)
        - id: cs_yU9ZwFYd1LyGFMNRJd21ki
          claim_id: c_vEn1X7PMbSNbCMtJFMAY6j
          source_id: s_txnuDdiLbtppuukpzDdpKU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_txnuDdiLbtppuukpzDdpKU
            source_type: api_record
            title: 维基数据：王励（Q11572924）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572924
            external_identifier: Q11572924
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:06.974Z
            metadata_json: null
      object_person:
        id: p_qxusD5k4ScMfqp11jFwNpy
        status: active
        display_name: 王弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王励

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王励（512年—537年），史料所见人物。本项目依据《王励》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 512年 | accepted |
| death.date | 537年 | accepted |
| name.primary | 王励 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n2jDzx5sS6j3vpbbSVhqB9 | 王盟 | accepted |
| children | p_qxusD5k4ScMfqp11jFwNpy | 王弼 | accepted |

## 外部来源

- [维基数据：王弼（Q48889956）](https://www.wikidata.org/wiki/Q48889956)
- [维基数据：王励（Q11572924）](https://www.wikidata.org/wiki/Q11572924)
- [维基数据：王盟（Q11573180）](https://www.wikidata.org/wiki/Q11573180)
