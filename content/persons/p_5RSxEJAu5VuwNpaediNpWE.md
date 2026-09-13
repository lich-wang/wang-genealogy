---
schema: wang-person/v1
id: p_5RSxEJAu5VuwNpaediNpWE
status: active
merged_into: null
display_name: 王孫武
cbdb_id: 513489
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkxdzTqFpXnJqj2bV8QXYS
        subject_person_id: p_5RSxEJAu5VuwNpaediNpWE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫武，史料所见人物。本项目依据《中国历代人物传记资料库：王孫武（CBDB 513489）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZGZ8QqhsHlHpJc7Orj9xDG
          claim_id: c_FkxdzTqFpXnJqj2bV8QXYS
          source_id: s_3xYt1wVKdxFuAu1LA6jDij
          stance: supports
          locator: CBDB:513489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3xYt1wVKdxFuAu1LA6jDij
            source_type: api_record
            title: 中国历代人物传记资料库：王孫武（CBDB 513489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513489&o=json
            external_identifier: CBDB:513489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vnR4ekjxQDsYee351KsDP
        subject_person_id: p_5RSxEJAu5VuwNpaediNpWE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kNGdY4pb53v1rPrKbEoyU1
          claim_id: c_5vnR4ekjxQDsYee351KsDP
          source_id: s_3xYt1wVKdxFuAu1LA6jDij
          stance: supports
          locator: CBDB:513489
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Uo8BiWtvLjo4eO6x1-rk_2
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5RSxEJAu5VuwNpaediNpWE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oFElidvXT_JT0wkrVjfGIF
          claim_id: c_Uo8BiWtvLjo4eO6x1-rk_2
          source_id: s_6nS14JEXQgMJ3Jm3bXa72Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），45：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6nS14JEXQgMJ3Jm3bXa72Q
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 56851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json
            external_identifier: CBDB:56851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SG9NgmPR3Yaeb99AmJbh38
        status: active
        display_name: 王師
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孫武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孫武，史料所见人物。本项目依据《中国历代人物传记资料库：王孫武（CBDB 513489）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王孫武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SG9NgmPR3Yaeb99AmJbh38 | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師（CBDB 56851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json)
- [中国历代人物传记资料库：王孫武（CBDB 513489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513489&o=json)
