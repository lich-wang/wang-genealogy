---
schema: wang-person/v1
id: p_vK3QABJxLZ3CGaf98onw4k
status: active
merged_into: null
display_name: 王廷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qs98uwHD2NQ3ZK681GNLR7
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bcq7k3uobSvVwQpRd9Dd6T
          claim_id: c_Qs98uwHD2NQ3ZK681GNLR7
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: CBDB:326819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326819）
          source: &a1
            id: s_FLYjb1DFHNr84N9a3wBTWi
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 326819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json
            external_identifier: CBDB:326819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RXto3EnMMfx9DYUMQAp2GG
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷，明人物。嘉靖四十一年進士，籍贯南充，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 326819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38SCzRsOrXxkiYzXFJEMNp
          claim_id: c_RXto3EnMMfx9DYUMQAp2GG
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: CBDB:326819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YbXpkaIhpg5T4PTu4vWizl
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZkUivbljmu_kADppLhA0K7
          claim_id: c_YbXpkaIhpg5T4PTu4vWizl
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LNAKBPYt9PQCz44835GtLD
        status: active
        display_name: 王續之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | 王廷，明人物。嘉靖四十一年進士，籍贯南充，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 326819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LNAKBPYt9PQCz44835GtLD | 王續之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 326819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json)
