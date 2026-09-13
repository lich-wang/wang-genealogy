---
schema: wang-person/v1
id: p_6JXRL3F79bgFhmG1swGLay
status: active
merged_into: null
display_name: 王维
cbdb_id: 175377
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVHpJmC3uzN8GHq6ycnAMy
        subject_person_id: p_6JXRL3F79bgFhmG1swGLay
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王维（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_oRayK2Eyq17RPKP6woWV2Y
          claim_id: c_QVHpJmC3uzN8GHq6ycnAMy
          source_id: s_PR1TF8XVKnVcrCYd4YHG8K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PR1TF8XVKnVcrCYd4YHG8K
            source_type: api_record
            title: 维基数据：王维（Q45656189）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656189
            external_identifier: Q45656189
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
        - id: cs_Gmmumcz9DbQ_cs5FDeyrJh
          claim_id: c_QVHpJmC3uzN8GHq6ycnAMy
          source_id: s_hLvFdNPyxjzX2i4UY3MT4J
          stance: supports
          locator: CBDB:175377
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hLvFdNPyxjzX2i4UY3MT4J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王維（175377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175377&o=json
            external_identifier: CBDB:175377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.455Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eKr1BXo2j18a1yS7dcsHhp
        subject_person_id: p_6JXRL3F79bgFhmG1swGLay
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
        - id: cs_F95xD4Q6u9nM3CDUogF3NE
          claim_id: c_eKr1BXo2j18a1yS7dcsHhp
          source_id: s_PR1TF8XVKnVcrCYd4YHG8K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PR1TF8XVKnVcrCYd4YHG8K
            source_type: api_record
            title: 维基数据：王维（Q45656189）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656189
            external_identifier: Q45656189
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsUxpu8umzomDd1z1QLgV7
        subject_person_id: p_6JXRL3F79bgFhmG1swGLay
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王维
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Jgx5dPGDGGKR8AFMhT3REK
          claim_id: c_gsUxpu8umzomDd1z1QLgV7
          source_id: s_hLvFdNPyxjzX2i4UY3MT4J
          stance: supports
          locator: Q45656189
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_VWuxeCiLLG1y7QHNFovMLf
          claim_id: c_gsUxpu8umzomDd1z1QLgV7
          source_id: s_PR1TF8XVKnVcrCYd4YHG8K
          stance: supports
          locator: Q45656189
          quotation: null
          interpretation_note: null
          source:
            id: s_PR1TF8XVKnVcrCYd4YHG8K
            source_type: api_record
            title: 维基数据：王维（Q45656189）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656189
            external_identifier: Q45656189
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W5bJLskK7uoGLf4gsVX9CJ
        subject_person_id: p_8Gs2T4C5jw8oPYS3DAfCUG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6JXRL3F79bgFhmG1swGLay
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3cFT8H8ry9TGd1hZyscPCG
          claim_id: c_W5bJLskK7uoGLf4gsVX9CJ
          source_id: s_mUjqkukQ9LG2Zn69Qye22Z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mUjqkukQ9LG2Zn69Qye22Z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昱（175376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json
            external_identifier: CBDB:175376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.828Z
            metadata_json: null
        - id: cs_A25mR2PtGc5u8v877UQsPR
          claim_id: c_W5bJLskK7uoGLf4gsVX9CJ
          source_id: s_a52jCCKNJxjWcq4UawS6B5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_a52jCCKNJxjWcq4UawS6B5
            source_type: api_record
            title: 维基数据：王昱（Q45656128）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656128
            external_identifier: Q45656128
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.652Z
            metadata_json: null
        - id: cs_FgQqWzpcjNK6JKYyhf8y3F
          claim_id: c_W5bJLskK7uoGLf4gsVX9CJ
          source_id: s_PR1TF8XVKnVcrCYd4YHG8K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PR1TF8XVKnVcrCYd4YHG8K
            source_type: api_record
            title: 维基数据：王维（Q45656189）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656189
            external_identifier: Q45656189
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:50.307Z
            metadata_json: null
        - id: cs_9xHZyh5RbBNXcGozAhUjzP
          claim_id: c_W5bJLskK7uoGLf4gsVX9CJ
          source_id: s_hLvFdNPyxjzX2i4UY3MT4J
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hLvFdNPyxjzX2i4UY3MT4J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王維（175377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175377&o=json
            external_identifier: CBDB:175377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:50.455Z
            metadata_json: null
      object_person:
        id: p_8Gs2T4C5jw8oPYS3DAfCUG
        status: active
        display_name: 王昱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王维

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王维（卒于770年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175377） | accepted |
| death.date | 770年 | accepted |
| name.primary | 王维 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8Gs2T4C5jw8oPYS3DAfCUG | 王昱 | accepted |

## 外部来源

- [维基数据：王维（Q45656189）](https://www.wikidata.org/wiki/Q45656189)
- [维基数据：王昱（Q45656128）](https://www.wikidata.org/wiki/Q45656128)
- [CBDB 中国历代人物传记资料库：王維（175377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175377&o=json)
- [CBDB 中国历代人物传记资料库：王昱（175376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175376&o=json)
