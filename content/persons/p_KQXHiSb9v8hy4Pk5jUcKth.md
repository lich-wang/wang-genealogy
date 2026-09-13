---
schema: wang-person/v1
id: p_KQXHiSb9v8hy4Pk5jUcKth
status: active
merged_into: null
display_name: 王庭芳
cbdb_id: 19081
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kd9r2JwV1ULQC1h6WRHxE8
        subject_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芳，史料所见人物。本项目依据《中国历代人物传记资料库：王庭芳（CBDB 19081）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_bMNDPoGh9lcnYqTAD9Y6Z-
          claim_id: c_Kd9r2JwV1ULQC1h6WRHxE8
          source_id: s_jMW7oBnt8MARC9wdK2nCgK
          stance: supports
          locator: CBDB:19081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jMW7oBnt8MARC9wdK2nCgK
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芳（CBDB 19081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19081&o=json
            external_identifier: CBDB:19081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_75DpWycLjv5B5xpHKN8NM1
        subject_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PzzHsXjig2qsKFPZB6t4mD
          claim_id: c_75DpWycLjv5B5xpHKN8NM1
          source_id: s_jMW7oBnt8MARC9wdK2nCgK
          stance: supports
          locator: CBDB:19081
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YU9GUnOpy1plNi3rnrbVHb
        subject_person_id: p_ZPXipNMAbC9PnGPngh5BaZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__E_Uwi2i5I1igLZ0UlyKPp
          claim_id: c_YU9GUnOpy1plNi3rnrbVHb
          source_id: s_Dk5mHCvDrYw26LSCHocyHn
          stance: supports
          locator: CBDB 双向互证（子 王庭芳 ⇄ 父 王發）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Dk5mHCvDrYw26LSCHocyHn
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 19080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19080&o=json
            external_identifier: CBDB:19080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZPXipNMAbC9PnGPngh5BaZ
        status: active
        display_name: 王發
        merged_into_person_id: null
  children:
    - claim:
        id: c_i2LPQwjhrqZSb8GQoRXj0-
        subject_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9iZg7bUcK8wS6LWMEX9vKo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cy7Qid0HHEaBicdcZlx6AS
          claim_id: c_i2LPQwjhrqZSb8GQoRXj0-
          source_id: s_jPSqCm5JgATCVAt7R6KA7j
          stance: supports
          locator: CBDB 双向互证（父 王庭芳 ⇄ 子 王基）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jPSqCm5JgATCVAt7R6KA7j
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 19084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19084&o=json
            external_identifier: CBDB:19084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9iZg7bUcK8wS6LWMEX9vKo
        status: active
        display_name: 王基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭芳，史料所见人物。本项目依据《中国历代人物传记资料库：王庭芳（CBDB 19081）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庭芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPXipNMAbC9PnGPngh5BaZ | 王發 | accepted |
| children | p_9iZg7bUcK8wS6LWMEX9vKo | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發（CBDB 19080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19080&o=json)
- [中国历代人物传记资料库：王基（CBDB 19084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19084&o=json)
- [中国历代人物传记资料库：王庭芳（CBDB 19081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19081&o=json)
