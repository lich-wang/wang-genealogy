---
schema: wang-person/v1
id: p_aULDL9FHh7UyyVDwfCgNFk
status: active
merged_into: null
display_name: 王祥三
cbdb_id: 237753
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vDRrQ2PhPg4cTmzdt4u6dB
        subject_person_id: p_aULDL9FHh7UyyVDwfCgNFk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥三，史料所见人物。本项目依据《中国历代人物传记资料库：王祥三（CBDB 237753）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_hxPyWSYC9R27hOszq3Abhv
          claim_id: c_vDRrQ2PhPg4cTmzdt4u6dB
          source_id: s_MbZPRJD6NTqL8v9312rw2n
          stance: supports
          locator: CBDB:237753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MbZPRJD6NTqL8v9312rw2n
            source_type: api_record
            title: 中国历代人物传记资料库：王祥三（CBDB 237753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237753&o=json
            external_identifier: CBDB:237753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q7f6Hn7C1cGEZzPgctaCTd
        subject_person_id: p_aULDL9FHh7UyyVDwfCgNFk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rsrDJEevbinc6hUfpjFZH6
          claim_id: c_q7f6Hn7C1cGEZzPgctaCTd
          source_id: s_MbZPRJD6NTqL8v9312rw2n
          stance: supports
          locator: CBDB:237753
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_QVyHgWPx0Hj7JKwqH6Ykgj
        subject_person_id: p_aULDL9FHh7UyyVDwfCgNFk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJDS9SV65UTfNSD74CsdDj
          claim_id: c_QVyHgWPx0Hj7JKwqH6Ykgj
          source_id: s_MbZPRJD6NTqL8v9312rw2n
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MbZPRJD6NTqL8v9312rw2n
            source_type: api_record
            title: 中国历代人物传记资料库：王祥三（CBDB 237753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237753&o=json
            external_identifier: CBDB:237753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rEM4FmnErK6MdZnXyWnxsa
        status: active
        display_name: 王浩
        merged_into_person_id: null
  other: []
---

# 王祥三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祥三，史料所见人物。本项目依据《中国历代人物传记资料库：王祥三（CBDB 237753）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祥三 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rEM4FmnErK6MdZnXyWnxsa | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祥三（CBDB 237753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237753&o=json)
