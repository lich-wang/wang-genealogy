---
schema: wang-person/v1
id: p_HuCPb2BQe3yJw3CN3sLRqE
status: active
merged_into: null
display_name: 王舜韶
cbdb_id: 209577
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9nhuFkBhcKqh23MNKj6Cr9
        subject_person_id: p_HuCPb2BQe3yJw3CN3sLRqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜韶，史料所见人物。本项目依据《中国历代人物传记资料库：王舜韶（CBDB 209577）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_SM8ueBXpbaVukhzf9eKWlc
          claim_id: c_9nhuFkBhcKqh23MNKj6Cr9
          source_id: s_C2tbMBspLAh92QD3hnUiiz
          stance: supports
          locator: CBDB:209577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_C2tbMBspLAh92QD3hnUiiz
            source_type: api_record
            title: 中国历代人物传记资料库：王舜韶（CBDB 209577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209577&o=json
            external_identifier: CBDB:209577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5CAJaoT22wfb8kfkGCKqu
        subject_person_id: p_HuCPb2BQe3yJw3CN3sLRqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PFaPcaM9tb2sorF1kVga3B
          claim_id: c_Y5CAJaoT22wfb8kfkGCKqu
          source_id: s_C2tbMBspLAh92QD3hnUiiz
          stance: supports
          locator: CBDB:209577
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_-u8A6vw3mgHW4d4gFxATN9
        subject_person_id: p_HuCPb2BQe3yJw3CN3sLRqE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHD1IxD5H1AGVDQEl8H6ht
          claim_id: c_-u8A6vw3mgHW4d4gFxATN9
          source_id: s_E4zKM9ogFspN587Znn1wuq
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第六十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E4zKM9ogFspN587Znn1wuq
            source_type: api_record
            title: 中国历代人物传记资料库：王許之（CBDB 205842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json
            external_identifier: CBDB:205842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fR2N3ddMBUUG3UGxzAGX1L
        status: active
        display_name: 王許之
        merged_into_person_id: null
  other: []
---

# 王舜韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜韶，史料所见人物。本项目依据《中国历代人物传记资料库：王舜韶（CBDB 209577）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王舜韶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fR2N3ddMBUUG3UGxzAGX1L | 王許之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜韶（CBDB 209577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209577&o=json)
- [中国历代人物传记资料库：王許之（CBDB 205842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205842&o=json)
