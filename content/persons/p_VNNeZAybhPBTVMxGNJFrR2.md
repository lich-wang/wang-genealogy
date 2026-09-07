---
schema: wang-person/v1
id: p_VNNeZAybhPBTVMxGNJFrR2
status: active
merged_into: null
display_name: 王甲本
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zqKJraPEGgrUTmhnX2Kcvj
        subject_person_id: p_VNNeZAybhPBTVMxGNJFrR2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甲本（1901年—1944年9月7日），字立基，云南平彝人，中華民國軍人，官至中將。他為中日戰爭期間陣亡的中國軍方高級將領之一。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pRfc4J80cmFKUA3fi7PI2x
          claim_id: c_zqKJraPEGgrUTmhnX2Kcvj
          source_id: s_o0pnNfnd618iFPaweO4zOv
          stance: supports
          locator: 导言
          quotation: 王甲本（1901年—1944年9月7日），字立基，云南平彝人，中
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_o0pnNfnd618iFPaweO4zOv
            source_type: website
            title: 中文维基百科：王甲本
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%94%B2%E6%9C%AC
            external_identifier: Q10415938
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Jj7cixHyjL5LmSV25uV4c4
        subject_person_id: p_VNNeZAybhPBTVMxGNJFrR2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1901年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1901-01-01
            latest: 1901-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V4U85yTyDhZvqcpeUoNAAx
          claim_id: c_Jj7cixHyjL5LmSV25uV4c4
          source_id: s_tRLUQsfZ8JX2XGj4ke67me
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tRLUQsfZ8JX2XGj4ke67me
            source_type: api_record
            title: 维基数据：王甲本（Q10415938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415938
            external_identifier: Q10415938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5FkzQuCP7MoDm6ncJr3ghf
        subject_person_id: p_VNNeZAybhPBTVMxGNJFrR2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1944年9月7日
            calendar_note: 维基数据 P570 结构化日期，精度：日
            earliest: 1944-09-07
            latest: 1944-09-07
            precision: day
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_djNSAWQ11SuxoKBnFgXxXJ
          claim_id: c_5FkzQuCP7MoDm6ncJr3ghf
          source_id: s_tRLUQsfZ8JX2XGj4ke67me
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tRLUQsfZ8JX2XGj4ke67me
            source_type: api_record
            title: 维基数据：王甲本（Q10415938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415938
            external_identifier: Q10415938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6n3VsVDdZj8Q5FdrYtLXS3
        subject_person_id: p_VNNeZAybhPBTVMxGNJFrR2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甲本
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rgCpAwXjBw27ZhTmBu5hHM
          claim_id: c_6n3VsVDdZj8Q5FdrYtLXS3
          source_id: s_tRLUQsfZ8JX2XGj4ke67me
          stance: supports
          locator: Q10415938
          quotation: null
          interpretation_note: null
          source:
            id: s_tRLUQsfZ8JX2XGj4ke67me
            source_type: api_record
            title: 维基数据：王甲本（Q10415938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415938
            external_identifier: Q10415938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
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

# 王甲本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甲本（1901年—1944年9月7日），字立基，云南平彝人，中華民國軍人，官至中將。他為中日戰爭期間陣亡的中國軍方高級將領之一。 | accepted |
| birth.date | 1901年 | accepted |
| death.date | 1944年9月7日 | accepted |
| name.primary | 王甲本 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王甲本（Q10415938）](https://www.wikidata.org/wiki/Q10415938)
- [中文维基百科：王甲本](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%94%B2%E6%9C%AC)
