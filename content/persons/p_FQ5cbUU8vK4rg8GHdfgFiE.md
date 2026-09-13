---
schema: wang-person/v1
id: p_FQ5cbUU8vK4rg8GHdfgFiE
status: active
merged_into: null
display_name: 王威仁
cbdb_id: 147630
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xc7CJA5WPb1SQJ7qciNCVj
        subject_person_id: p_FQ5cbUU8vK4rg8GHdfgFiE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威仁，史料所见人物。本项目依据《中国历代人物传记资料库：王威仁（CBDB 147630）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DH02BHryBeFN3BmBB7Rh-l
          claim_id: c_xc7CJA5WPb1SQJ7qciNCVj
          source_id: s_SCGYqYdrtBmt1rWzyaf8S5
          stance: supports
          locator: CBDB:147630
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SCGYqYdrtBmt1rWzyaf8S5
            source_type: api_record
            title: 中国历代人物传记资料库：王威仁（CBDB 147630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147630&o=json
            external_identifier: CBDB:147630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gugLA6dDZdi9txHoH1vdQK
        subject_person_id: p_FQ5cbUU8vK4rg8GHdfgFiE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ggjdwaDoNqvLZty17cahGM
          claim_id: c_gugLA6dDZdi9txHoH1vdQK
          source_id: s_SCGYqYdrtBmt1rWzyaf8S5
          stance: supports
          locator: CBDB:147630
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
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
        id: c_aUa7Uq5bsJ2rW54B_63Rp4
        subject_person_id: p_FQ5cbUU8vK4rg8GHdfgFiE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kVfUaNJ2itY2WED2neurFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lzqq61FXmkUKbnFTcqM9hI
          claim_id: c_aUa7Uq5bsJ2rW54B_63Rp4
          source_id: s_zk0YE55smcygdFBc5n7LM-
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 139：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zk0YE55smcygdFBc5n7LM-
            source_type: api_record
            title: 中国历代人物传记资料库：張泉（CBDB 139206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139206&o=json
            external_identifier: CBDB:139206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kVfUaNJ2itY2WED2neurFM
        status: active
        display_name: 張泉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王威仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王威仁，史料所见人物。本项目依据《中国历代人物传记资料库：王威仁（CBDB 147630）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王威仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kVfUaNJ2itY2WED2neurFM | 張泉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王威仁（CBDB 147630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147630&o=json)
- [中国历代人物传记资料库：張泉（CBDB 139206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139206&o=json)
