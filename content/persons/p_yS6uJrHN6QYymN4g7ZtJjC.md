---
schema: wang-person/v1
id: p_yS6uJrHN6QYymN4g7ZtJjC
status: active
merged_into: null
display_name: 王元居
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X5X8PFYp77Uh3cQ8YXvPfN
        subject_person_id: p_yS6uJrHN6QYymN4g7ZtJjC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元居
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cELBTDKSHUfJSv23Lb4E8c
          claim_id: c_X5X8PFYp77Uh3cQ8YXvPfN
          source_id: s_AGPvYiZbaBwhCdeALFeU6k
          stance: supports
          locator: CBDB:120923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120923）
          source: &a1
            id: s_AGPvYiZbaBwhCdeALFeU6k
            source_type: api_record
            title: 中国历代人物传记资料库：王元居（CBDB 120923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120923&o=json
            external_identifier: CBDB:120923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KdoRCDJcHBoQEHkhwf3oK3
        subject_person_id: p_yS6uJrHN6QYymN4g7ZtJjC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元居，史料所见人物。本项目依据《中国历代人物传记资料库：王元居（CBDB 120923）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SKFeJaYbJhrR9Mk3m2n-6Q
          claim_id: c_KdoRCDJcHBoQEHkhwf3oK3
          source_id: s_AGPvYiZbaBwhCdeALFeU6k
          stance: supports
          locator: CBDB:120923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NqSkkWvsKcq7fKIcaGpOXK
        subject_person_id: p_yS6uJrHN6QYymN4g7ZtJjC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9JBBCMcF7oiGmUoJ7riCiN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DkcQPvthsw1yJhCbngxwSy
          claim_id: c_NqSkkWvsKcq7fKIcaGpOXK
          source_id: s_PIHBdjbKn-5V_vsCeceyji
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3920, HuWenKai #783：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PIHBdjbKn-5V_vsCeceyji
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王元居妻)（CBDB 120922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120922&o=json
            external_identifier: CBDB:120922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9JBBCMcF7oiGmUoJ7riCiN
        status: active
        display_name: 戴氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王元居

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元居 | accepted |
| bio.summary | 王元居，史料所见人物。本项目依据《中国历代人物传记资料库：王元居（CBDB 120923）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9JBBCMcF7oiGmUoJ7riCiN | 戴氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王元居妻)（CBDB 120922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120922&o=json)
- [中国历代人物传记资料库：王元居（CBDB 120923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120923&o=json)
