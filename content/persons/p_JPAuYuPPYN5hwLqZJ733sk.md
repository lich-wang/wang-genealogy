---
schema: wang-person/v1
id: p_JPAuYuPPYN5hwLqZJ733sk
status: active
merged_into: null
display_name: 王倚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rqSiqr3eScUHeaQMAujz5L
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MFfmrbvs3mMsY8JnkZPvLK
          claim_id: c_rqSiqr3eScUHeaQMAujz5L
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
          stance: supports
          locator: CBDB:38158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38158）
          source: &a1
            id: s_3rzW4xdZ2jccgdKhrohDMB
            source_type: api_record
            title: 中国历代人物传记资料库：王倚（CBDB 38158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38158&o=json
            external_identifier: CBDB:38158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_m9a62dhrQDVxACEMewYjrp
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KDiVPNn2XDfCyEcyR1FRP
          claim_id: c_m9a62dhrQDVxACEMewYjrp
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
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
        id: c_FdaGFzanJaHYM8cEYHC5t2
        subject_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚（卒于1129年），宋人物。籍贯淄川，曾任朝請郎、律學助教、直秘閣。（中国历代人物传记资料库 CBDB 38158）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lVKtyyVZ2VSB9KVDYh2xuY
          claim_id: c_FdaGFzanJaHYM8cEYHC5t2
          source_id: s_3rzW4xdZ2jccgdKhrohDMB
          stance: supports
          locator: CBDB:38158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6X0-g5iJrFThZsbROFVWka
        subject_person_id: p_4DFXvaJGjrMh1AZPiFN3k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGOVZ2oStNny650005H914
          claim_id: c_6X0-g5iJrFThZsbROFVWka
          source_id: s_NU9snLL9YRryUoX5Cw8uxa
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NU9snLL9YRryUoX5Cw8uxa
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 8156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json
            external_identifier: CBDB:8156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DFXvaJGjrMh1AZPiFN3k7
        status: active
        display_name: 王淵
        merged_into_person_id: null
    - claim:
        id: c_x175yBnm7A0YywdiJAjk60
        subject_person_id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPAuYuPPYN5hwLqZJ733sk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6kD_zVrErPRMZqk2o25469
          claim_id: c_x175yBnm7A0YywdiJAjk60
          source_id: s_fKn8zMxfBXwKqqvfYJVsjF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，862：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fKn8zMxfBXwKqqvfYJVsjF
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 38159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json
            external_identifier: CBDB:38159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GKKeJ3Hz6Dm45cTvfc9ptt
        status: active
        display_name: 王復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倚 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | 王倚（卒于1129年），宋人物。籍贯淄川，曾任朝請郎、律學助教、直秘閣。（中国历代人物传记资料库 CBDB 38158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DFXvaJGjrMh1AZPiFN3k7 | 王淵 | accepted |
| parents | p_GKKeJ3Hz6Dm45cTvfc9ptt | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 38159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38159&o=json)
- [中国历代人物传记资料库：王倚（CBDB 38158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38158&o=json)
- [中国历代人物传记资料库：王淵（CBDB 8156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8156&o=json)
