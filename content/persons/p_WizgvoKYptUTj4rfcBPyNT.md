---
schema: wang-person/v1
id: p_WizgvoKYptUTj4rfcBPyNT
status: active
merged_into: null
display_name: 王继恩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MziXsory6vSr83EiMWQYgM
        subject_person_id: p_WizgvoKYptUTj4rfcBPyNT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继恩（卒于999年），中國北宋時代宦官。维基数据以独立条目 Q10416428 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_PoOR1hmIVemc_RSwpriYwp
          claim_id: c_MziXsory6vSr83EiMWQYgM
          source_id: s_kBrEWAG5DnGJuvP8YMAroD
          stance: supports
          locator: Q10416428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source:
            id: s_kBrEWAG5DnGJuvP8YMAroD
            source_type: api_record
            title: 维基数据：王继恩（Q10416428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416428
            external_identifier: Q10416428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_X1eoJQtsc9HvMqNH3Y5Fcs
        subject_person_id: p_WizgvoKYptUTj4rfcBPyNT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0999-01-01
            latest: 0999-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_chE9XxJpNspfDiCSH1G9E5
          claim_id: c_X1eoJQtsc9HvMqNH3Y5Fcs
          source_id: s_kBrEWAG5DnGJuvP8YMAroD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kBrEWAG5DnGJuvP8YMAroD
            source_type: api_record
            title: 维基数据：王继恩（Q10416428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416428
            external_identifier: Q10416428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFMFyBB5MSF4VWScQhzHGy
        subject_person_id: p_WizgvoKYptUTj4rfcBPyNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继恩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LVtc1NQx9wDY79vJdKdzig
          claim_id: c_oFMFyBB5MSF4VWScQhzHGy
          source_id: s_kBrEWAG5DnGJuvP8YMAroD
          stance: supports
          locator: Q10416428
          quotation: null
          interpretation_note: null
          source:
            id: s_kBrEWAG5DnGJuvP8YMAroD
            source_type: api_record
            title: 维基数据：王继恩（Q10416428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416428
            external_identifier: Q10416428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3PLpfNeaxxB3TqsPMfiM8G
        subject_person_id: p_WizgvoKYptUTj4rfcBPyNT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_geUgqF5ocbmwwJfYLHzGXJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Eu2VgwdRsvc5giPbiSvvNT
          claim_id: c_3PLpfNeaxxB3TqsPMfiM8G
          source_id: s_kBrEWAG5DnGJuvP8YMAroD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kBrEWAG5DnGJuvP8YMAroD
            source_type: api_record
            title: 维基数据：王继恩（Q10416428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416428
            external_identifier: Q10416428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
        - id: cs_KE5d56rwbANKq4eogS361r
          claim_id: c_3PLpfNeaxxB3TqsPMfiM8G
          source_id: s_KkXrShVbzpUJ5sqAn6yLdu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KkXrShVbzpUJ5sqAn6yLdu
            source_type: api_record
            title: 维基数据：王怀珪（Q45492841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45492841
            external_identifier: Q45492841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
      object_person:
        id: p_geUgqF5ocbmwwJfYLHzGXJ
        status: active
        display_name: 王怀珪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王继恩（卒于999年），中國北宋時代宦官。维基数据以独立条目 Q10416428 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| death.date | 999年 | accepted |
| name.primary | 王继恩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_geUgqF5ocbmwwJfYLHzGXJ | 王怀珪 | accepted |

## 外部来源

- [维基数据：王怀珪（Q45492841）](https://www.wikidata.org/wiki/Q45492841)
- [维基数据：王继恩（Q10416428）](https://www.wikidata.org/wiki/Q10416428)
