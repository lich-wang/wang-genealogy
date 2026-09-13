---
schema: wang-person/v1
id: p_Y9xi5GPdWUoNBPYmwpa5vm
status: active
merged_into: null
display_name: 王庚官
cbdb_id: 514425
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pzP9qaJ9qJQGCfQDv8xHV
        subject_person_id: p_Y9xi5GPdWUoNBPYmwpa5vm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚官，史料所见人物。本项目依据《中国历代人物传记资料库：王庚官（CBDB 514425）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-w8fbiz47cYMTFq9wm4k9l
          claim_id: c_8pzP9qaJ9qJQGCfQDv8xHV
          source_id: s_xdJQeTcKRXQLu4j3FieePL
          stance: supports
          locator: CBDB:514425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xdJQeTcKRXQLu4j3FieePL
            source_type: api_record
            title: 中国历代人物传记资料库：王庚官（CBDB 514425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514425&o=json
            external_identifier: CBDB:514425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_T5vonBxhjQc77nJtyG3iwX
        subject_person_id: p_Y9xi5GPdWUoNBPYmwpa5vm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cd2mLeYkXVPNSM9AHdZJN9
          claim_id: c_T5vonBxhjQc77nJtyG3iwX
          source_id: s_xdJQeTcKRXQLu4j3FieePL
          stance: supports
          locator: CBDB:514425
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBG-oOEptmcSzKRhHeCtZ-
        subject_person_id: p_mAQBjdU1yf5FwgKZ3j5HfL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y9xi5GPdWUoNBPYmwpa5vm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7xvmK4192gULhQRhkwYBF
          claim_id: c_mBG-oOEptmcSzKRhHeCtZ-
          source_id: s_7am2G77rUNPvcNGCf48HPm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），428：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7am2G77rUNPvcNGCf48HPm
            source_type: api_record
            title: 中国历代人物传记资料库：王亶望（CBDB 57209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57209&o=json
            external_identifier: CBDB:57209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mAQBjdU1yf5FwgKZ3j5HfL
        status: active
        display_name: 王亶望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庚官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庚官，史料所见人物。本项目依据《中国历代人物传记资料库：王庚官（CBDB 514425）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庚官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mAQBjdU1yf5FwgKZ3j5HfL | 王亶望 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶望（CBDB 57209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57209&o=json)
- [中国历代人物传记资料库：王庚官（CBDB 514425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514425&o=json)
