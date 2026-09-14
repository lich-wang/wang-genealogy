---
schema: wang-person/v1
id: p_N8KkzPBYZP1o7g6fiUXXY5
status: active
merged_into: null
display_name: 王鎬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s6d2btvgZHVDisHE6bN1Su
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BBBp8RUTrwN5qjjLTh5t3n
          claim_id: c_s6d2btvgZHVDisHE6bN1Su
          source_id: s_bu3TayYnW4B95gGyu3jBkW
          stance: supports
          locator: CBDB:282378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282378）
          source: &a1
            id: s_bu3TayYnW4B95gGyu3jBkW
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 282378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json
            external_identifier: CBDB:282378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGZ9iV5md4U5jwnDbEd38V
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。正德十二年進士，籍贯西安府，曾任通判。（中国历代人物传记资料库 CBDB 282378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7S1SJlaEFCYYTEZc3VwVfp
          claim_id: c_LGZ9iV5md4U5jwnDbEd38V
          source_id: s_bu3TayYnW4B95gGyu3jBkW
          stance: supports
          locator: CBDB:282378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nUIP5ZYoVEDsUFo4Wz3izg
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUN0-onWGYaprk8aNl9FJT
          claim_id: c_nUIP5ZYoVEDsUFo4Wz3izg
          source_id: s_bu3TayYnW4B95gGyu3jBkW
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xjFrEJTtUqGXh8SmiFrc9m
        status: active
        display_name: 王光濟
        merged_into_person_id: null
    - claim:
        id: c_mjXyu3ue_BhWKB2IHR0E3M
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4s3ZpaUEZnwkHi8NgfSik5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-LYwJO2zXz62BlNOnNW6i
          claim_id: c_mjXyu3ue_BhWKB2IHR0E3M
          source_id: s_xXwhnUqmEkIYEh9J652KaX
          stance: supports
          locator: CBDB：兄弟 王光濟（202037）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王恭濟 与 王光濟 为同胞（CBDB 记「弟」），王光濟 之父／母即 王恭濟 之父／母。
          source:
            id: s_xXwhnUqmEkIYEh9J652KaX
            source_type: api_record
            title: 中国历代人物传记资料库：王恭濟（CBDB 282382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282382&o=json
            external_identifier: CBDB:282382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4s3ZpaUEZnwkHi8NgfSik5
        status: active
        display_name: 王恭濟
        merged_into_person_id: null
    - claim:
        id: c_VcIKhGJdIeOIL5uMay-Yq-
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APBHWXmdcgA8u6TNkgqZ3s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KtrhBmOJBr21G8u3gLhlUl
          claim_id: c_VcIKhGJdIeOIL5uMay-Yq-
          source_id: s_GH52LIPfgFcqpsA9-YFZXY
          stance: supports
          locator: CBDB：兄弟 王光濟（202037）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王惠濟 与 王光濟 为同胞（CBDB 记「弟」），王光濟 之父／母即 王惠濟 之父／母。
          source:
            id: s_GH52LIPfgFcqpsA9-YFZXY
            source_type: api_record
            title: 中国历代人物传记资料库：王惠濟（CBDB 282381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282381&o=json
            external_identifier: CBDB:282381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_APBHWXmdcgA8u6TNkgqZ3s
        status: active
        display_name: 王惠濟
        merged_into_person_id: null
    - claim:
        id: c_bmq5TIe9lBUdCk66CPOyJq
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sM3TGmmZiDwSdJPqv629wp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ApAo1WNePCJSiJTbfHLDe
          claim_id: c_bmq5TIe9lBUdCk66CPOyJq
          source_id: s_M5GenNjgWAEEDLKG58qRbh
          stance: supports
          locator: CBDB：兄弟 王光濟（202037）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶濟 与 王光濟 为同胞（CBDB 记「兄」），王光濟 之父／母即 王慶濟 之父／母。
          source:
            id: s_M5GenNjgWAEEDLKG58qRbh
            source_type: api_record
            title: 中国历代人物传记资料库：王慶濟（CBDB 282383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json
            external_identifier: CBDB:282383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sM3TGmmZiDwSdJPqv629wp
        status: active
        display_name: 王慶濟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。正德十二年進士，籍贯西安府，曾任通判。（中国历代人物传记资料库 CBDB 282378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xjFrEJTtUqGXh8SmiFrc9m | 王光濟 | accepted |
| children | p_4s3ZpaUEZnwkHi8NgfSik5 | 王恭濟 | accepted |
| children | p_APBHWXmdcgA8u6TNkgqZ3s | 王惠濟 | accepted |
| children | p_sM3TGmmZiDwSdJPqv629wp | 王慶濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭濟（CBDB 282382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282382&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 282378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json)
- [中国历代人物传记资料库：王惠濟（CBDB 282381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282381&o=json)
- [中国历代人物传记资料库：王慶濟（CBDB 282383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json)
