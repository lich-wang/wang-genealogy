---
schema: wang-person/v1
id: p_yjoMBM16z87Ac7boUs7w1H
status: active
merged_into: null
display_name: 王安節
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EtCrUJDKwCwHxecbZ858xB
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCiz9pD2LBquyqVv9DtpQX
          claim_id: c_EtCrUJDKwCwHxecbZ858xB
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
          stance: supports
          locator: CBDB:37952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37952）
          source: &a1
            id: s_ysMvrF41DX1qmnFM5ZxcYh
            source_type: api_record
            title: 中国历代人物传记资料库：王安節（CBDB 37952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37952&o=json
            external_identifier: CBDB:37952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4n6VZ91t13GBCMjHbeHNLu
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYWm8y7Kuoqittzpy6btLL
          claim_id: c_4n6VZ91t13GBCMjHbeHNLu
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
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
        id: c_YYXoQmrLCft2CWD2DawKkA
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安節（卒于1275年），宋人物。籍贯江陵，曾任副將、御前諸軍都統制、都統。（中国历代人物传记资料库 CBDB 37952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dwziOgBdxxSknx_9_XJdiF
          claim_id: c_YYXoQmrLCft2CWD2DawKkA
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
          stance: supports
          locator: CBDB:37952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_snKQeSyzkyZKMQgmDyCnYr
        status: active
        display_name: 王堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wXLXffU4X4MlniokoWVuk8
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nzm6sJLnRG8hy26DFyF5eQ
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ij_y-6OUz9A1JX1d10pvg_
          claim_id: c_wXLXffU4X4MlniokoWVuk8
          source_id: s_2uUbCtSjXE6YvnQ84cCGcm
          stance: supports
          locator: 武進陽湖縣志，lgid=152533：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2uUbCtSjXE6YvnQ84cCGcm
            source_type: api_record
            title: 中国历代人物传记资料库：王伯㒜（CBDB 699963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699963&o=json
            external_identifier: CBDB:699963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nzm6sJLnRG8hy26DFyF5eQ
        status: active
        display_name: 王伯㒜
        merged_into_person_id: null
  other: []
---

# 王安節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安節 | accepted |
| death.date | 1275年 | accepted |
| bio.summary | 王安節（卒于1275年），宋人物。籍贯江陵，曾任副將、御前諸軍都統制、都統。（中国历代人物传记资料库 CBDB 37952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_snKQeSyzkyZKMQgmDyCnYr | 王堅 | accepted |
| descendants | p_nzm6sJLnRG8hy26DFyF5eQ | 王伯㒜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安節（CBDB 37952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37952&o=json)
- [中国历代人物传记资料库：王伯㒜（CBDB 699963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699963&o=json)
- [中国历代人物传记资料库：王堅（CBDB 37951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37951&o=json)
