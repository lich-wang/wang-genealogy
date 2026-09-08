---
schema: wang-person/v1
id: p_dcEdt9464ApJeN1AoJavzC
status: active
merged_into: null
display_name: 王繼曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGLs2jdpJxB6h77r5QNh97
        subject_person_id: p_dcEdt9464ApJeN1AoJavzC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v266nCs9fLmPBKDjdFnanF
          claim_id: c_yGLs2jdpJxB6h77r5QNh97
          source_id: s_ApJSTvCf96wLQMz3FDtUMm
          stance: supports
          locator: Q131781482
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_ApJSTvCf96wLQMz3FDtUMm
            source_type: api_record
            title: 维基数据：王繼曾（Q131781482）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q131781482
            external_identifier: Q131781482
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HfZ75bNnL8v2d7SEJ3aEY7
        subject_person_id: p_dcEdt9464ApJeN1AoJavzC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1881年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dCw3DVKs5BSbh5JVTFqLpM
          claim_id: c_HfZ75bNnL8v2d7SEJ3aEY7
          source_id: s_ApJSTvCf96wLQMz3FDtUMm
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ri5rp4AEXyRaJvVVRzz6aj
        subject_person_id: p_dcEdt9464ApJeN1AoJavzC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1955年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfXoCKHo7DUAdqzpEcp94K
          claim_id: c_Ri5rp4AEXyRaJvVVRzz6aj
          source_id: s_ApJSTvCf96wLQMz3FDtUMm
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mB3cM2J3FV2oisQ2WSmj7J
        subject_person_id: p_AfuUVSUoLTbNao9TD9JhZG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dcEdt9464ApJeN1AoJavzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dy3nsU3R4F2Zdn49XYWd63
          claim_id: c_mB3cM2J3FV2oisQ2WSmj7J
          source_id: s_K9bDqFgFM8njU3FAyCHMGz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_K9bDqFgFM8njU3FAyCHMGz
            source_type: api_record
            title: 维基数据：王仁东（Q16260607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260607
            external_identifier: Q16260607
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81%E6%9D%B1
        - id: cs_J8qTGxFpfh8MutY6SBoBCJ
          claim_id: c_mB3cM2J3FV2oisQ2WSmj7J
          source_id: s_ApJSTvCf96wLQMz3FDtUMm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_AfuUVSUoLTbNao9TD9JhZG
        status: active
        display_name: 王仁东
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼曾 | accepted |
| birth.date | 1881年 | accepted |
| death.date | 1955年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AfuUVSUoLTbNao9TD9JhZG | 王仁东 | accepted |

## 外部来源

- [维基数据：王繼曾（Q131781482）](https://www.wikidata.org/wiki/Q131781482)
- [维基数据：王仁东（Q16260607）](https://www.wikidata.org/wiki/Q16260607)
