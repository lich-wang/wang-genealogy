---
schema: wang-person/v1
id: p_XjzxeCwh2jc3G7T2sJ2fKN
status: active
merged_into: null
display_name: 王淙
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JxH34g5QR88Rrx4CohsXT4
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qtzJzBDwnKAygAgK6qW2wn
          claim_id: c_JxH34g5QR88Rrx4CohsXT4
          source_id: s_mMKdKCFsVVNNxMVZGAGpSB
          stance: supports
          locator: CBDB:284032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284032）
          source: &a1
            id: s_mMKdKCFsVVNNxMVZGAGpSB
            source_type: api_record
            title: 中国历代人物传记资料库：王淙（CBDB 284032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284032&o=json
            external_identifier: CBDB:284032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XwBEFG6dz9zfwjNE1U1v36
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淙，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VbNw_1hyO7SG37EIYyg5MC
          claim_id: c_XwBEFG6dz9zfwjNE1U1v36
          source_id: s_mMKdKCFsVVNNxMVZGAGpSB
          stance: supports
          locator: CBDB:284032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GVN9QBkfNncJ2fwzVHAFdT
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6qZv86jCoBwmThHEXBGAvS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AaCcaUk3V7SkrOjMw0b_B3
          claim_id: c_GVN9QBkfNncJ2fwzVHAFdT
          source_id: s_MPoPF84g8Kc91cXSaB5ix9
          stance: supports
          locator: 天順元年進士登科錄:一卷，第二甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MPoPF84g8Kc91cXSaB5ix9
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 198525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198525&o=json
            external_identifier: CBDB:198525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6qZv86jCoBwmThHEXBGAvS
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_i7gMCs7VBkKofDnSvW0znQ
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stPZF9UpMntD9fENXA4WbK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gT0GE4tI63xSHsTKetdalk
          claim_id: c_i7gMCs7VBkKofDnSvW0znQ
          source_id: s_85qWxGgSKAtxLICs15QtQX
          stance: supports
          locator: CBDB：兄弟 王瑤（198525）之父／母 王淙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王瑤 为同胞（CBDB 记「弟」），王瑤 之父／母即 王瓊 之父／母。
          source:
            id: s_85qWxGgSKAtxLICs15QtQX
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 284065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json
            external_identifier: CBDB:284065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stPZF9UpMntD9fENXA4WbK
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_w-q_nCPl80x7-_FG8MHNkd
        subject_person_id: p_XjzxeCwh2jc3G7T2sJ2fKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_stZnTJKFoTboTRqubX6iZs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PpEAIUoxZ4K5jBfVPGNKB
          claim_id: c_w-q_nCPl80x7-_FG8MHNkd
          source_id: s_n-QGD3KDcCW4jRrYNw96Bc
          stance: supports
          locator: CBDB：兄弟 王瑤（198525）之父／母 王淙
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王瑤 为同胞（CBDB 记「兄」），王瑤 之父／母即 王瓚 之父／母。
          source:
            id: s_n-QGD3KDcCW4jRrYNw96Bc
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 284076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json
            external_identifier: CBDB:284076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stZnTJKFoTboTRqubX6iZs
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淙 | accepted |
| bio.summary | 王淙，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6qZv86jCoBwmThHEXBGAvS | 王瑤 | accepted |
| children | p_stPZF9UpMntD9fENXA4WbK | 王瓊 | accepted |
| children | p_stZnTJKFoTboTRqubX6iZs | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淙（CBDB 284032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284032&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 284065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 198525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198525&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 284076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284076&o=json)
