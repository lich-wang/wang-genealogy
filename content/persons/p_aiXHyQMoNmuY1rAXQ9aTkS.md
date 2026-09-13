---
schema: wang-person/v1
id: p_aiXHyQMoNmuY1rAXQ9aTkS
status: active
merged_into: null
display_name: 王祚恆
cbdb_id: 233976
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9B9cYp3mZn2VG8mVZDEKdD
        subject_person_id: p_aiXHyQMoNmuY1rAXQ9aTkS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚恆，史料所见人物。本项目依据《中国历代人物传记资料库：王祚恆（CBDB 233976）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ToYCRekQm7EHBpWB_hnVV0
          claim_id: c_9B9cYp3mZn2VG8mVZDEKdD
          source_id: s_2NFtF2XD5EBv3oUzxu9zLm
          stance: supports
          locator: CBDB:233976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2NFtF2XD5EBv3oUzxu9zLm
            source_type: api_record
            title: 中国历代人物传记资料库：王祚恆（CBDB 233976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233976&o=json
            external_identifier: CBDB:233976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K89KUKP36Kg2xohK1F699g
        subject_person_id: p_aiXHyQMoNmuY1rAXQ9aTkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sw5o5XDdBmR7nydGJtsad8
          claim_id: c_K89KUKP36Kg2xohK1F699g
          source_id: s_2NFtF2XD5EBv3oUzxu9zLm
          stance: supports
          locator: CBDB:233976
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C3cnMnp96pEHAXnrz_ykLn
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aiXHyQMoNmuY1rAXQ9aTkS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Lm2nAyZo-Lr_N098Oq4mK
          claim_id: c_C3cnMnp96pEHAXnrz_ykLn
          source_id: s_2NFtF2XD5EBv3oUzxu9zLm
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2NFtF2XD5EBv3oUzxu9zLm
            source_type: api_record
            title: 中国历代人物传记资料库：王祚恆（CBDB 233976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233976&o=json
            external_identifier: CBDB:233976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祚恆，史料所见人物。本项目依据《中国历代人物传记资料库：王祚恆（CBDB 233976）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祚恆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚恆（CBDB 233976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233976&o=json)
