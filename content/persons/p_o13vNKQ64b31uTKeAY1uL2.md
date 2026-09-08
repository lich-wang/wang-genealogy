---
schema: wang-person/v1
id: p_o13vNKQ64b31uTKeAY1uL2
status: active
merged_into: null
display_name: 李收
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tHw4Q3fJQDAFj6g1P26tCU
        subject_person_id: p_o13vNKQ64b31uTKeAY1uL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李收
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wos3fw9xDWhAYe2vt38eKq
          claim_id: c_tHw4Q3fJQDAFj6g1P26tCU
          source_id: s_LQ3jQ7m1BQGXNtg2zYLhxe
          stance: supports
          locator: Q45685708
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_LQ3jQ7m1BQGXNtg2zYLhxe
            source_type: api_record
            title: 维基数据：李收（Q45685708）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685708
            external_identifier: Q45685708
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_TPXtNVASTSRFhuyyAAhCsF
          claim_id: c_tHw4Q3fJQDAFj6g1P26tCU
          source_id: s_q5NEzvsFeQL1cY7onb3pZP
          stance: supports
          locator: CBDB:186699
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_q5NEzvsFeQL1cY7onb3pZP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李收（186699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186699&o=json
            external_identifier: CBDB:186699
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
        id: c_DEDC4DpL5czPZFsXQZ4A6F
        subject_person_id: p_cFrrQD9w9e7DqR4q2v5s6z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_o13vNKQ64b31uTKeAY1uL2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeDJjwo8Sc1dGRaN9vN9DM
          claim_id: c_DEDC4DpL5czPZFsXQZ4A6F
          source_id: s_LQ3jQ7m1BQGXNtg2zYLhxe
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FP6r2Yo1teWi3SsVPXcWeQ
          claim_id: c_DEDC4DpL5czPZFsXQZ4A6F
          source_id: s_ELbYmvnAeXE2jBrVG7SHyn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ELbYmvnAeXE2jBrVG7SHyn
            source_type: api_record
            title: 维基数据：王氏（Q65803842）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803842
            external_identifier: Q65803842
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_rrTkY2zEpXbjDMLQSL3bwS
          claim_id: c_DEDC4DpL5czPZFsXQZ4A6F
          source_id: s_D53zH68YiQ3Dw5JqK6Kdfo
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_D53zH68YiQ3Dw5JqK6Kdfo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（145522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145522&o=json
            external_identifier: CBDB:145522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:04.190Z
            metadata_json: null
      object_person:
        id: p_cFrrQD9w9e7DqR4q2v5s6z
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李收

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李收 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cFrrQD9w9e7DqR4q2v5s6z | 王氏 | accepted |

## 外部来源

- [维基数据：李收（Q45685708）](https://www.wikidata.org/wiki/Q45685708)
- [维基数据：王氏（Q65803842）](https://www.wikidata.org/wiki/Q65803842)
- [CBDB 中国历代人物传记资料库：李收（186699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186699&o=json)
- [CBDB 中国历代人物传记资料库：王氏（145522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145522&o=json)
