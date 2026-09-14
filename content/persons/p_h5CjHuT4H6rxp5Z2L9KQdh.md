---
schema: wang-person/v1
id: p_h5CjHuT4H6rxp5Z2L9KQdh
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8C9X72Y79yHQ1L5hWUDqs
        subject_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iMv3AnhbKXCRhjxYYy2GMU
          claim_id: c_D8C9X72Y79yHQ1L5hWUDqs
          source_id: s_WbLotWCGu2aK7QQeF4fZrg
          stance: supports
          locator: CBDB:247358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247358）
          source: &a1
            id: s_WbLotWCGu2aK7QQeF4fZrg
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 247358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json
            external_identifier: CBDB:247358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rq5qYEa7EdejdtruKMZuj6
        subject_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247358）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G_RHAAARMfAqc4rdsVIsx8
          claim_id: c_Rq5qYEa7EdejdtruKMZuj6
          source_id: s_WbLotWCGu2aK7QQeF4fZrg
          stance: supports
          locator: CBDB:247358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_In_gvtQHVvy5bOvMU765TX
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vhyMc-GYAZxkXURK7VWlUb
          claim_id: c_In_gvtQHVvy5bOvMU765TX
          source_id: s_k__VQA42zE8cxiOmqLIWgn
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王綸 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王綸 之父／母。
          source:
            id: s_k__VQA42zE8cxiOmqLIWgn
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 247358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json
            external_identifier: CBDB:247358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Y9vSpLkuvgM5TzoTn8thR
        status: active
        display_name: 王讓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LFQingq5S1CbDCW1A504_o
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h5CjHuT4H6rxp5Z2L9KQdh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gFHFwH0T5n4HRLonjfxGRp
          claim_id: c_LFQingq5S1CbDCW1A504_o
          source_id: s_k__VQA42zE8cxiOmqLIWgn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k__VQA42zE8cxiOmqLIWgn
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 247358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json
            external_identifier: CBDB:247358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9qy8VX4YhBeXV8fGKmBp1E
        status: active
        display_name: 王經
        merged_into_person_id: null
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247358） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Y9vSpLkuvgM5TzoTn8thR | 王讓 | accepted |
| other | p_9qy8VX4YhBeXV8fGKmBp1E | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 247358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247358&o=json)
