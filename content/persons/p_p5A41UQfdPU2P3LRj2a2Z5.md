---
schema: wang-person/v1
id: p_p5A41UQfdPU2P3LRj2a2Z5
status: active
merged_into: null
display_name: 王师心
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Iqm--WUcnx64Br9sLuG-TC
        subject_person_id: p_p5A41UQfdPU2P3LRj2a2Z5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师心（1097年—1169年），史料所见人物。本项目依据《王师心》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FhH6xmLuu_tOg-Afm-51IG
          claim_id: c_Iqm--WUcnx64Br9sLuG-TC
          source_id: s_Ce963YZsGV1XBjLjM2iTzL
          stance: supports
          locator: Q45359648
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Ce963YZsGV1XBjLjM2iTzL
            source_type: api_record
            title: 维基数据：王师心（Q45359648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359648
            external_identifier: Q45359648
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:54.134Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jsA8DhQBFgMfnrjg1VHQHn
        subject_person_id: p_p5A41UQfdPU2P3LRj2a2Z5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1097年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1097-01-01
            latest: 1097-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nYHUzJQH1KZ3vGEKFaa3Ks
          claim_id: c_jsA8DhQBFgMfnrjg1VHQHn
          source_id: s_Ce963YZsGV1XBjLjM2iTzL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AYbwbCxh7Vdzh4tNTXuK2Z
        subject_person_id: p_p5A41UQfdPU2P3LRj2a2Z5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1169-01-01
            latest: 1169-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eod3pLAwRz83LA4WSiR96U
          claim_id: c_AYbwbCxh7Vdzh4tNTXuK2Z
          source_id: s_Ce963YZsGV1XBjLjM2iTzL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ce963YZsGV1XBjLjM2iTzL
            source_type: api_record
            title: 维基数据：王师心（Q45359648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359648
            external_identifier: Q45359648
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:54.134Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JaSw8CKijfRPVLNiHgppqn
        subject_person_id: p_p5A41UQfdPU2P3LRj2a2Z5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师心
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CE1iDRAGqAwhWsgk8r5DqA
          claim_id: c_JaSw8CKijfRPVLNiHgppqn
          source_id: s_Ce963YZsGV1XBjLjM2iTzL
          stance: supports
          locator: Q45359648
          quotation: null
          interpretation_note: null
          source:
            id: s_Ce963YZsGV1XBjLjM2iTzL
            source_type: api_record
            title: 维基数据：王师心（Q45359648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359648
            external_identifier: Q45359648
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:54.134Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iv7bt42TdDpkBCAE4pjJRZ
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p5A41UQfdPU2P3LRj2a2Z5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gxe6PoN4vqhHsQpH98ViMm
          claim_id: c_iv7bt42TdDpkBCAE4pjJRZ
          source_id: s_Ce963YZsGV1XBjLjM2iTzL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_17DMCDK4tvJite3ttPG52W
          claim_id: c_iv7bt42TdDpkBCAE4pjJRZ
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
      object_person:
        id: p_mLtGjU7JUkYcfBzdb7BH9M
        status: active
        display_name: 王登
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师心（1097年—1169年），史料所见人物。本项目依据《王师心》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1097年 | accepted |
| death.date | 1169年 | accepted |
| name.primary | 王师心 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mLtGjU7JUkYcfBzdb7BH9M | 王登 | accepted |

## 外部来源

- [维基数据：王登（Q45369083）](https://www.wikidata.org/wiki/Q45369083)
- [维基数据：王师心（Q45359648）](https://www.wikidata.org/wiki/Q45359648)
