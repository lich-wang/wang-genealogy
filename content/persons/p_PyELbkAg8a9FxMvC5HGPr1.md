---
schema: wang-person/v1
id: p_PyELbkAg8a9FxMvC5HGPr1
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rjrc9EZ3LMjdYP8zHvG7JC
        subject_person_id: p_PyELbkAg8a9FxMvC5HGPr1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫，宋人物。CBDB 记录其籍贯记录为館陶，身份包括經學家—易經，曾任大理寺丞。中国历代人物传记资料库（CBDB）以人物编号 3996 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_U9g7K9WVmauEnAVpHn4whZ
          claim_id: c_rjrc9EZ3LMjdYP8zHvG7JC
          source_id: s_28GqpbAj5GFBBMy3bgLQei
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_28GqpbAj5GFBBMy3bgLQei
            source_type: api_record
            title: 维基数据：王豫（Q45363061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363061
            external_identifier: Q45363061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_jp36B0kdHdnjwTYM084GrP
          claim_id: c_rjrc9EZ3LMjdYP8zHvG7JC
          source_id: s_eohdZxGLxHdDXsAKPZbA4X
          stance: supports
          locator: CBDB:3996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eohdZxGLxHdDXsAKPZbA4X
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王豫（3996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3996&o=json
            external_identifier: CBDB:3996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.994Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQyMn5T9Ri4wAJqQYxaX8n
        subject_person_id: p_PyELbkAg8a9FxMvC5HGPr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jUVmyXZdZVWBTZPF2Pmfsc
          claim_id: c_FQyMn5T9Ri4wAJqQYxaX8n
          source_id: s_28GqpbAj5GFBBMy3bgLQei
          stance: supports
          locator: Q45363061
          quotation: null
          interpretation_note: null
          source:
            id: s_28GqpbAj5GFBBMy3bgLQei
            source_type: api_record
            title: 维基数据：王豫（Q45363061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363061
            external_identifier: Q45363061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_tdTFAwxufa3MVpa29mfURB
          claim_id: c_FQyMn5T9Ri4wAJqQYxaX8n
          source_id: s_eohdZxGLxHdDXsAKPZbA4X
          stance: supports
          locator: Q45363061
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_thjNKh3MdTzkMzPMWV4pic
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PyELbkAg8a9FxMvC5HGPr1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6pWzBhTYxrMhUBdVASJ16Q
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_K8RFUFWNNRBbugHS4bJxi3
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_K8RFUFWNNRBbugHS4bJxi3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沿（1922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json
            external_identifier: CBDB:1922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:30.288Z
            metadata_json: null
        - id: cs_LxtMSiSyTfubRsLEfn1aEi
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_Ss1rbkFM2jN8hnP8W2nvio
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_28GqpbAj5GFBBMy3bgLQei
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_28GqpbAj5GFBBMy3bgLQei
            source_type: api_record
            title: 维基数据：王豫（Q45363061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363061
            external_identifier: Q45363061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
      object_person:
        id: p_YrA9NHKrJ9RAt9EUXTAeHn
        status: active
        display_name: 王沿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王豫，宋人物。CBDB 记录其籍贯记录为館陶，身份包括經學家—易經，曾任大理寺丞。中国历代人物传记资料库（CBDB）以人物编号 3996 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王豫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YrA9NHKrJ9RAt9EUXTAeHn | 王沿 | accepted |

## 外部来源

- [维基数据：王沿（Q10415436）](https://www.wikidata.org/wiki/Q10415436)
- [维基数据：王豫（Q45363061）](https://www.wikidata.org/wiki/Q45363061)
- [CBDB 中国历代人物传记资料库：王沿（1922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json)
- [CBDB 中国历代人物传记资料库：王豫（3996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3996&o=json)
