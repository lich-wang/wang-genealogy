---
schema: wang-person/v1
id: p_bBpSfr4LaCNhBodZQ1Wk9d
status: active
merged_into: null
display_name: 王大綱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g2d89MtBxi2G5SFgLdgvgk
        subject_person_id: p_bBpSfr4LaCNhBodZQ1Wk9d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6w5cd9yJPC7JqXn2GLTNq
          claim_id: c_g2d89MtBxi2G5SFgLdgvgk
          source_id: s_sF3LBLxdGp4d8UamNK1zZg
          stance: supports
          locator: CBDB:240373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240373）
          source: &a1
            id: s_sF3LBLxdGp4d8UamNK1zZg
            source_type: api_record
            title: 中国历代人物传记资料库：王大綱（CBDB 240373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240373&o=json
            external_identifier: CBDB:240373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HAXvQRjRntEPAccBY6u5Ba
        subject_person_id: p_bBpSfr4LaCNhBodZQ1Wk9d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大綱，明人物。正統十三年進士，籍贯臨川，曾任典史。（中国历代人物传记资料库 CBDB 240373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DIWfZRLu5ZDTF3xekU_Y5U
          claim_id: c_HAXvQRjRntEPAccBY6u5Ba
          source_id: s_sF3LBLxdGp4d8UamNK1zZg
          stance: supports
          locator: CBDB:240373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_50saYNWYPcMRI1Kvbz8YhM
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bBpSfr4LaCNhBodZQ1Wk9d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_it6jShnIjjH8jeMCiSz9yH
          claim_id: c_50saYNWYPcMRI1Kvbz8YhM
          source_id: s_3XiZ-qUFtYuGNzOfGhX3V6
          stance: supports
          locator: CBDB：兄弟 王常（208095）之父／母 王汝為
          quotation: null
          interpretation_note: 由兄弟关系推断：王大綱 与 王常 为同胞（CBDB 记「兄」），王常 之父／母即 王大綱 之父／母。
          source:
            id: s_3XiZ-qUFtYuGNzOfGhX3V6
            source_type: api_record
            title: 中国历代人物传记资料库：王大綱（CBDB 240373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240373&o=json
            external_identifier: CBDB:240373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5Fmj2W6LjNNLVnMBPi6k6
        status: active
        display_name: 王汝為
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1vVDEHVOTEWjui7LFoyB_S
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bBpSfr4LaCNhBodZQ1Wk9d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YyBZ3tmtNESfGcU1BxnIGT
          claim_id: c_1vVDEHVOTEWjui7LFoyB_S
          source_id: s_3XiZ-qUFtYuGNzOfGhX3V6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208095 王常）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3XiZ-qUFtYuGNzOfGhX3V6
            source_type: api_record
            title: 中国历代人物传记资料库：王大綱（CBDB 240373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240373&o=json
            external_identifier: CBDB:240373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YPLFCFq4wshZxcCaGTvWhA
        status: active
        display_name: 王常
        merged_into_person_id: null
---

# 王大綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大綱 | accepted |
| bio.summary | 王大綱，明人物。正統十三年進士，籍贯臨川，曾任典史。（中国历代人物传记资料库 CBDB 240373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5Fmj2W6LjNNLVnMBPi6k6 | 王汝為 | accepted |
| other | p_YPLFCFq4wshZxcCaGTvWhA | 王常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大綱（CBDB 240373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240373&o=json)
