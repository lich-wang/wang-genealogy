---
schema: wang-person/v1
id: p_icMQsLh5AxUKdKqwb4NPgz
status: active
merged_into: null
display_name: 王芝異
cbdb_id: 517412
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5AcXGZLmW4X8Uqdd3hUrPX
        subject_person_id: p_icMQsLh5AxUKdKqwb4NPgz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝異，史料所见人物。本项目依据《中国历代人物传记资料库：王芝異（CBDB 517412）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_GD-sfHlb8iltpRGVCAuK0D
          claim_id: c_5AcXGZLmW4X8Uqdd3hUrPX
          source_id: s_JE3Ye6RYV9njKUqkSrHZk9
          stance: supports
          locator: CBDB:517412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JE3Ye6RYV9njKUqkSrHZk9
            source_type: api_record
            title: 中国历代人物传记资料库：王芝異（CBDB 517412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517412&o=json
            external_identifier: CBDB:517412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8hUWR5sQBGTFPN8ca1wLD
        subject_person_id: p_icMQsLh5AxUKdKqwb4NPgz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝異
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MQBa8N9CwcMtGuvKxW3G9d
          claim_id: c_M8hUWR5sQBGTFPN8ca1wLD
          source_id: s_JE3Ye6RYV9njKUqkSrHZk9
          stance: supports
          locator: CBDB:517412
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K8VZeQ8UmAsY8lIriv4ZR4
        subject_person_id: p_icMQsLh5AxUKdKqwb4NPgz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJE5Kv5NfmNkUurrk6Rsdr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JT_LW9FsW6zfuNpFZzV5hT
          claim_id: c_K8VZeQ8UmAsY8lIriv4ZR4
          source_id: s_8cEdwG41FG4GcfhZ8FVqHH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1875：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8cEdwG41FG4GcfhZ8FVqHH
            source_type: api_record
            title: 中国历代人物传记资料库：王家璧（CBDB 55667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55667&o=json
            external_identifier: CBDB:55667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJE5Kv5NfmNkUurrk6Rsdr
        status: active
        display_name: 王家璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王芝異

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王芝異，史料所见人物。本项目依据《中国历代人物传记资料库：王芝異（CBDB 517412）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王芝異 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hJE5Kv5NfmNkUurrk6Rsdr | 王家璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家璧（CBDB 55667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55667&o=json)
- [中国历代人物传记资料库：王芝異（CBDB 517412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517412&o=json)
