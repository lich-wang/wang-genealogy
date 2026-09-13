---
schema: wang-person/v1
id: p_zzJ4ZDoiD31Veqi7XMMf5a
status: active
merged_into: null
display_name: 王少愷
cbdb_id: 22934
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N6eB7cvoLNKeeF9ksUQt8V
        subject_person_id: p_zzJ4ZDoiD31Veqi7XMMf5a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少愷，史料所见人物。本项目依据《中国历代人物传记资料库：王少愷（CBDB 22934）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_iKYCHIvZRCh1hLSCH_uMde
          claim_id: c_N6eB7cvoLNKeeF9ksUQt8V
          source_id: s_9AaaXEU8ygJy7m3ESb5eoc
          stance: supports
          locator: CBDB:22934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9AaaXEU8ygJy7m3ESb5eoc
            source_type: api_record
            title: 中国历代人物传记资料库：王少愷（CBDB 22934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22934&o=json
            external_identifier: CBDB:22934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UReXL24gfoXcZi6dSzgEew
        subject_person_id: p_zzJ4ZDoiD31Veqi7XMMf5a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HCGjy1Gk7KQ8NP5zf28CEN
          claim_id: c_UReXL24gfoXcZi6dSzgEew
          source_id: s_9AaaXEU8ygJy7m3ESb5eoc
          stance: supports
          locator: CBDB:22934
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t5LKXsj9AJ8s8YR_eCErFj
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzJ4ZDoiD31Veqi7XMMf5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bN-bWSR2KLpgwjIM8QEf5W
          claim_id: c_t5LKXsj9AJ8s8YR_eCErFj
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB 双向互证（子 王少愷 ⇄ 父 王詠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NBhoY1PJp3T71pqSaTD1Hv
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 22930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json
            external_identifier: CBDB:22930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TQyk4QWwhcUUZQXxe66jDH
        status: active
        display_name: 王詠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王少愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王少愷，史料所见人物。本项目依据《中国历代人物传记资料库：王少愷（CBDB 22934）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王少愷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TQyk4QWwhcUUZQXxe66jDH | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王少愷（CBDB 22934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22934&o=json)
- [中国历代人物传记资料库：王詠（CBDB 22930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json)
