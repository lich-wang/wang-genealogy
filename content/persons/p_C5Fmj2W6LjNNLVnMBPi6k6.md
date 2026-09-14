---
schema: wang-person/v1
id: p_C5Fmj2W6LjNNLVnMBPi6k6
status: active
merged_into: null
display_name: 王汝為
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E5fWjwe2N7Ag2UweG74stD
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ik3xeKguhMzJ3YBscznKno
          claim_id: c_E5fWjwe2N7Ag2UweG74stD
          source_id: s_17F2jSsG6d1WTdyvgfd3u8
          stance: supports
          locator: CBDB:240369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240369）
          source: &a1
            id: s_17F2jSsG6d1WTdyvgfd3u8
            source_type: api_record
            title: 中国历代人物传记资料库：王汝為（CBDB 240369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240369&o=json
            external_identifier: CBDB:240369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7bbYsEhPbygFQDyNv9iQFB
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝為，明人物。正統十三年進士，籍贯臨川，曾任府學教授。（中国历代人物传记资料库 CBDB 240369）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RS6IxUhJJFdqzuEnJmnrRJ
          claim_id: c_7bbYsEhPbygFQDyNv9iQFB
          source_id: s_17F2jSsG6d1WTdyvgfd3u8
          stance: supports
          locator: CBDB:240369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fUrv1n9inRtO9eRNklqcAG
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Hlb3BLQ_lHIqBohrm46gj
          claim_id: c_fUrv1n9inRtO9eRNklqcAG
          source_id: s_17F2jSsG6d1WTdyvgfd3u8
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YPLFCFq4wshZxcCaGTvWhA
        status: active
        display_name: 王常
        merged_into_person_id: null
    - claim:
        id: c_aTrdxkmCieUGDbIqOU5pDf
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1saj8PKzKgTyEqQUoF93cW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5xmPdIVvDcNeTnvCPY-90
          claim_id: c_aTrdxkmCieUGDbIqOU5pDf
          source_id: s_YzlJBCtr7LgIs_HQM1DSUi
          stance: supports
          locator: CBDB：兄弟 王常（208095）之父／母 王汝為
          quotation: null
          interpretation_note: 由兄弟关系推断：王大紀 与 王常 为同胞（CBDB 记「兄」），王常 之父／母即 王大紀 之父／母。
          source:
            id: s_YzlJBCtr7LgIs_HQM1DSUi
            source_type: api_record
            title: 中国历代人物传记资料库：王大紀（CBDB 240374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240374&o=json
            external_identifier: CBDB:240374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1saj8PKzKgTyEqQUoF93cW
        status: active
        display_name: 王大紀
        merged_into_person_id: null
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
        id: p_bBpSfr4LaCNhBodZQ1Wk9d
        status: active
        display_name: 王大綱
        merged_into_person_id: null
    - claim:
        id: c_OJlkdgCoSa6IidHMDhu0LZ
        subject_person_id: p_C5Fmj2W6LjNNLVnMBPi6k6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyMAGguYseEqauvPXY6QCm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTjG1N0HXJy_mBAkpphG_w
          claim_id: c_OJlkdgCoSa6IidHMDhu0LZ
          source_id: s_gSKZrwDAiSvpRbLQ1oR35v
          stance: supports
          locator: CBDB：兄弟 王常（208095）之父／母 王汝為
          quotation: null
          interpretation_note: 由兄弟关系推断：王大綸 与 王常 为同胞（CBDB 记「兄」），王常 之父／母即 王大綸 之父／母。
          source:
            id: s_gSKZrwDAiSvpRbLQ1oR35v
            source_type: api_record
            title: 中国历代人物传记资料库：王大綸（CBDB 240372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240372&o=json
            external_identifier: CBDB:240372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dyMAGguYseEqauvPXY6QCm
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝為 | accepted |
| bio.summary | 王汝為，明人物。正統十三年進士，籍贯臨川，曾任府學教授。（中国历代人物传记资料库 CBDB 240369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YPLFCFq4wshZxcCaGTvWhA | 王常 | accepted |
| children | p_1saj8PKzKgTyEqQUoF93cW | 王大紀 | accepted |
| children | p_bBpSfr4LaCNhBodZQ1Wk9d | 王大綱 | accepted |
| children | p_dyMAGguYseEqauvPXY6QCm | 王大綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大綱（CBDB 240373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240373&o=json)
- [中国历代人物传记资料库：王大紀（CBDB 240374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240374&o=json)
- [中国历代人物传记资料库：王大綸（CBDB 240372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240372&o=json)
- [中国历代人物传记资料库：王汝為（CBDB 240369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240369&o=json)
