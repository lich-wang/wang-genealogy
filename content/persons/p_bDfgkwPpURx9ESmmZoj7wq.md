---
schema: wang-person/v1
id: p_bDfgkwPpURx9ESmmZoj7wq
status: active
merged_into: null
display_name: 王祁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8nU9tQiWskxcmC1UzwhcX
        subject_person_id: p_bDfgkwPpURx9ESmmZoj7wq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W4j3NHQNBrstDYePWQJBnF
          claim_id: c_q8nU9tQiWskxcmC1UzwhcX
          source_id: s_L4n1RH42FHsGganh5svEhD
          stance: supports
          locator: CBDB:514367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（514367）
          source: &a1
            id: s_L4n1RH42FHsGganh5svEhD
            source_type: api_record
            title: 中国历代人物传记资料库：王祁（CBDB 514367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514367&o=json
            external_identifier: CBDB:514367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qekx2koUgw9jJq3eS8QFKX
        subject_person_id: p_bDfgkwPpURx9ESmmZoj7wq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁，史料所见人物。本项目依据《中国历代人物传记资料库：王祁（CBDB 514367）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6F5h9IMpUF_31tmNlwUzLk
          claim_id: c_qekx2koUgw9jJq3eS8QFKX
          source_id: s_L4n1RH42FHsGganh5svEhD
          stance: supports
          locator: CBDB:514367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p0zHIsaSpRV7DGZ3vsnNjX
        subject_person_id: p_2o1RA9tETR9HME6KSLrCqa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDfgkwPpURx9ESmmZoj7wq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F6pVBZvZAdRSgSXW_GQ9p8
          claim_id: c_p0zHIsaSpRV7DGZ3vsnNjX
          source_id: s_tb3LiTyQG9PyLhcGmspSmg
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），376：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tb3LiTyQG9PyLhcGmspSmg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉韜（CBDB 57157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57157&o=json
            external_identifier: CBDB:57157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2o1RA9tETR9HME6KSLrCqa
        status: active
        display_name: 王秉韜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁 | accepted |
| bio.summary | 王祁，史料所见人物。本项目依据《中国历代人物传记资料库：王祁（CBDB 514367）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2o1RA9tETR9HME6KSLrCqa | 王秉韜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉韜（CBDB 57157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57157&o=json)
- [中国历代人物传记资料库：王祁（CBDB 514367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514367&o=json)
