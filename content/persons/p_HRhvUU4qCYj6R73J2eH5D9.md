---
schema: wang-person/v1
id: p_HRhvUU4qCYj6R73J2eH5D9
status: active
merged_into: null
display_name: 王崇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SvYwB1W3HKVXpjaxyFtUnh
        subject_person_id: p_HRhvUU4qCYj6R73J2eH5D9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UVDH8uvKZEP3dUrXNA2nbo
          claim_id: c_SvYwB1W3HKVXpjaxyFtUnh
          source_id: s_s3LEw7bHRPLzvWUT6gLhc3
          stance: supports
          locator: CBDB:306730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306730）
          source: &a1
            id: s_s3LEw7bHRPLzvWUT6gLhc3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 306730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306730&o=json
            external_identifier: CBDB:306730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QXLwD87cre8hE5UEDjpLzJ
        subject_person_id: p_HRhvUU4qCYj6R73J2eH5D9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇，明人物。嘉靖二十三年進士，籍贯文登。（中国历代人物传记资料库 CBDB 306730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0pEGjE8daq16pkibAUUXEf
          claim_id: c_QXLwD87cre8hE5UEDjpLzJ
          source_id: s_s3LEw7bHRPLzvWUT6gLhc3
          stance: supports
          locator: CBDB:306730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_E_mQiX5_OzTcDKUojeD1In
        subject_person_id: p_HRhvUU4qCYj6R73J2eH5D9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GlYhU-iNI4Yxic0RgRQthu
          claim_id: c_E_mQiX5_OzTcDKUojeD1In
          source_id: s_s3LEw7bHRPLzvWUT6gLhc3
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zAh17pTJy9yoR9V9ArCvL7
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_fdveHh8WyKlOXAjZmG1Bs8
        subject_person_id: p_HRhvUU4qCYj6R73J2eH5D9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CHRyp7op73QmWwQx6deKgx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv632zm9K864_-31qJoXne
          claim_id: c_fdveHh8WyKlOXAjZmG1Bs8
          source_id: s_B9IW_JK5mnBnCOsm4tn2gm
          stance: supports
          locator: CBDB：兄弟 王楠（203575）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王松 与 王楠 为同胞（CBDB 记「弟」），王楠 之父／母即 王松 之父／母。
          source:
            id: s_B9IW_JK5mnBnCOsm4tn2gm
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 306733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306733&o=json
            external_identifier: CBDB:306733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CHRyp7op73QmWwQx6deKgx
        status: active
        display_name: 王松
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | 王崇，明人物。嘉靖二十三年進士，籍贯文登。（中国历代人物传记资料库 CBDB 306730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zAh17pTJy9yoR9V9ArCvL7 | 王楠 | accepted |
| children | p_CHRyp7op73QmWwQx6deKgx | 王松 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 306730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306730&o=json)
- [中国历代人物传记资料库：王松（CBDB 306733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306733&o=json)
