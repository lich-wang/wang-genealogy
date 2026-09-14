---
schema: wang-person/v1
id: p_rA8Xm6td4MjUKdatRd96Gp
status: active
merged_into: null
display_name: 王洙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B4ncHeCuwSrVhK7XP9ranJ
        subject_person_id: p_rA8Xm6td4MjUKdatRd96Gp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FZGWwtzkf4g7ja46Z9iCMq
          claim_id: c_B4ncHeCuwSrVhK7XP9ranJ
          source_id: s_G5puYfZ1sQFMKGDphhGNx5
          stance: supports
          locator: CBDB:19877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19877）
          source: &a1
            id: s_G5puYfZ1sQFMKGDphhGNx5
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 19877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19877&o=json
            external_identifier: CBDB:19877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cH589Lzg1xNbamejWjCarK
        subject_person_id: p_rA8Xm6td4MjUKdatRd96Gp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hUHz7_osRHb0BvG5kTgqQ6
          claim_id: c_cH589Lzg1xNbamejWjCarK
          source_id: s_G5puYfZ1sQFMKGDphhGNx5
          stance: supports
          locator: CBDB:19877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FPwOgCfDvIU2dHlEwBBFsD
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rA8Xm6td4MjUKdatRd96Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WrpyLrrPJFshWpalTz6wiN
          claim_id: c_FPwOgCfDvIU2dHlEwBBFsD
          source_id: s_afTVIigjOitREv0jvvb1mJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19876）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_afTVIigjOitREv0jvvb1mJ
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 19877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19877&o=json
            external_identifier: CBDB:19877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yoJ8xkA6RKn5KTuDeY1X7C
        status: active
        display_name: 王正功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| bio.summary | 王洙，宋人物。籍贯鄞縣，入仕進士。（中国历代人物传记资料库 CBDB 19877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yoJ8xkA6RKn5KTuDeY1X7C | 王正功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洙（CBDB 19877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19877&o=json)
