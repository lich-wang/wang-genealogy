---
schema: wang-person/v1
id: p_snKQeSyzkyZKMQgmDyCnYr
status: active
merged_into: null
display_name: 王堅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RjbG4qHVdYPhWgYc8guRc8
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPzfnoFzYBiH41UpWXG9iP
          claim_id: c_RjbG4qHVdYPhWgYc8guRc8
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
          stance: supports
          locator: CBDB:37951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37951）
          source: &a1
            id: s_GBD3bVGqD5fXxuJmgkVHXd
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 37951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37951&o=json
            external_identifier: CBDB:37951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NCTGhEYpbzt2kbTfVshXiy
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1264年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiWa8Ubg1ZHBN2B1qJFtUi
          claim_id: c_NCTGhEYpbzt2kbTfVshXiy
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssxiwyHmCwK1g3NtgWtddD
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅（卒于1264年），宋人物。籍贯江陵，曾任安撫使、武功大夫、左金吾衛上將軍。（中国历代人物传记资料库 CBDB 37951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q_h6RtVE-tKIg9q9iCHpVS
          claim_id: c_ssxiwyHmCwK1g3NtgWtddD
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
          stance: supports
          locator: CBDB:37951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZrDjqwUAfPVMEwke8Tl07N
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yjoMBM16z87Ac7boUs7w1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoYYxYsvn-gqIiDny6jtpq
          claim_id: c_ZrDjqwUAfPVMEwke8Tl07N
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yjoMBM16z87Ac7boUs7w1H
        status: active
        display_name: 王安節
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堅 | accepted |
| death.date | 1264年 | accepted |
| bio.summary | 王堅（卒于1264年），宋人物。籍贯江陵，曾任安撫使、武功大夫、左金吾衛上將軍。（中国历代人物传记资料库 CBDB 37951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yjoMBM16z87Ac7boUs7w1H | 王安節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 37951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37951&o=json)
