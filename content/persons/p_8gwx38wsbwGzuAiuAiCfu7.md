---
schema: wang-person/v1
id: p_8gwx38wsbwGzuAiuAiCfu7
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5XQhdtvKr25oNqW7eMvmv
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XnPpbisf77x8EtTPEzwhPB
          claim_id: c_Q5XQhdtvKr25oNqW7eMvmv
          source_id: s_aX4eHUFwx9TqTVBJW6VV9W
          stance: supports
          locator: CBDB:244693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244693）
          source: &a1
            id: s_aX4eHUFwx9TqTVBJW6VV9W
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 244693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244693&o=json
            external_identifier: CBDB:244693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MpPGD7gbjJce2wJRCXQi9y
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVRs6icbGQg8zusGkRL0pk
          claim_id: c_MpPGD7gbjJce2wJRCXQi9y
          source_id: s_aX4eHUFwx9TqTVBJW6VV9W
          stance: supports
          locator: CBDB:244693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_mpklKYXezfPFNLgojVyGGD
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3oKFdGHi8BKifcXxMMERFS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gjd_GEmreFGZa4mrD-Rkw
          claim_id: c_mpklKYXezfPFNLgojVyGGD
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xwLUvCYcBcqNBGD8AW62Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 126600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json
            external_identifier: CBDB:126600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | 王能，明人物。成化五年進士。（中国历代人物传记资料库 CBDB 244693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 244693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244693&o=json)
- [中国历代人物传记资料库：王玹（CBDB 126600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json)
