---
schema: wang-person/v1
id: p_M6bmPyZ1Q1V2tN4jxPLfm7
status: active
merged_into: null
display_name: 王紹武
cbdb_id: 513490
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ainxFU79rXdCaRQDq4kK5g
        subject_person_id: p_M6bmPyZ1Q1V2tN4jxPLfm7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹武，史料所见人物。本项目依据《中国历代人物传记资料库：王紹武（CBDB 513490）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fx0ke5JDVQRqVh2rsAjyz2
          claim_id: c_ainxFU79rXdCaRQDq4kK5g
          source_id: s_R4nf9vHz1SsLHKQvMEmMkH
          stance: supports
          locator: CBDB:513490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_R4nf9vHz1SsLHKQvMEmMkH
            source_type: api_record
            title: 中国历代人物传记资料库：王紹武（CBDB 513490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513490&o=json
            external_identifier: CBDB:513490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tFi9McobiK5b4Bc1qHiEyU
        subject_person_id: p_M6bmPyZ1Q1V2tN4jxPLfm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JszMGsj1AJTeKAFm2CYcBQ
          claim_id: c_tFi9McobiK5b4Bc1qHiEyU
          source_id: s_R4nf9vHz1SsLHKQvMEmMkH
          stance: supports
          locator: CBDB:513490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YD9DJ6p1NdTNtMor_0P5yM
        subject_person_id: p_SG9NgmPR3Yaeb99AmJbh38
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M6bmPyZ1Q1V2tN4jxPLfm7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ips5kzjjwcyz76-hVEr6IV
          claim_id: c_YD9DJ6p1NdTNtMor_0P5yM
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

# 王紹武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹武，史料所见人物。本项目依据《中国历代人物传记资料库：王紹武（CBDB 513490）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王紹武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SG9NgmPR3Yaeb99AmJbh38 | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹武（CBDB 513490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513490&o=json)
- [中国历代人物传记资料库：王師（CBDB 56851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56851&o=json)
