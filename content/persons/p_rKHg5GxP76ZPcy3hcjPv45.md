---
schema: wang-person/v1
id: p_rKHg5GxP76ZPcy3hcjPv45
status: active
merged_into: null
display_name: 楊世雄
revision: 1
cbdb_id: 56267
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-rpj8cKc654DkD-u5VamUl
        subject_person_id: p_rKHg5GxP76ZPcy3hcjPv45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊世雄，史料所见人物。本项目依据《中国历代人物传记资料库：楊世雄（CBDB 56267）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oX6y2v8kzeRz0mUdbgN5BT
          claim_id: c_-rpj8cKc654DkD-u5VamUl
          source_id: s_U2Y5VVKaTZ1k5mQzIY5foe
          stance: supports
          locator: CBDB:56267
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_U2Y5VVKaTZ1k5mQzIY5foe
            source_type: api_record
            title: 中国历代人物传记资料库：楊世雄（CBDB 56267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56267&o=json
            external_identifier: CBDB:56267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-37FYHllucM0ZxqZJoLLp3
        subject_person_id: p_rKHg5GxP76ZPcy3hcjPv45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊世雄
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PmVObCMoqEXf_py0JtMYGz
          claim_id: c_-37FYHllucM0ZxqZJoLLp3
          source_id: s_U2Y5VVKaTZ1k5mQzIY5foe
          stance: supports
          locator: CBDB:56267
          quotation: null
          interpretation_note: CBDB 明确记录的王淑貞配偶
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
        id: c_mo8xsJ9t4LVjsuTfHVLyNd
        subject_person_id: p_NfiKtJ63EXyhFhpmT7Qc9E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rKHg5GxP76ZPcy3hcjPv45
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i564Td9fNWai1MgslpMc5j
          claim_id: c_mo8xsJ9t4LVjsuTfHVLyNd
          source_id: s_U2Y5VVKaTZ1k5mQzIY5foe
          stance: supports
          locator: CBDB 双向互证（丈夫 楊世雄）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NfiKtJ63EXyhFhpmT7Qc9E
        status: active
        display_name: 王淑貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊世雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 楊世雄，史料所见人物。本项目依据《中国历代人物传记资料库：楊世雄（CBDB 56267）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 楊世雄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NfiKtJ63EXyhFhpmT7Qc9E | 王淑貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊世雄（CBDB 56267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56267&o=json)
