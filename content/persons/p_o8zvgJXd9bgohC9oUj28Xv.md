---
schema: wang-person/v1
id: p_o8zvgJXd9bgohC9oUj28Xv
status: active
merged_into: null
display_name: 王敏
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MSW974bCWi6apKwNgUeWGQ
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kT3paroYG7y3V6XeNR1t31
          claim_id: c_MSW974bCWi6apKwNgUeWGQ
          source_id: s_mJewe5Eq6z5cYs7W63UDLK
          stance: supports
          locator: CBDB:259206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259206）
          source: &a1
            id: s_mJewe5Eq6z5cYs7W63UDLK
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 259206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259206&o=json
            external_identifier: CBDB:259206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AjvRJsW3vntnQmufM3L7Uv
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qjNL2OC5hPSvsl3RBiLNtR
          claim_id: c_AjvRJsW3vntnQmufM3L7Uv
          source_id: s_mJewe5Eq6z5cYs7W63UDLK
          stance: supports
          locator: CBDB:259206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rchdbHQ9KbvBye89WAOg_R
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6Xybh93MzzAVSCSF8JHxX
          claim_id: c_rchdbHQ9KbvBye89WAOg_R
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rinjSKxkPZ6GXhj8MmBj5D
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json
            external_identifier: CBDB:200520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_oL2aLYLJvwQPJdKfHr-scU
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5YjEERsh7utx747aGfmRrp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-SZ-EhbVOmwspWkM0gf2h
          claim_id: c_oL2aLYLJvwQPJdKfHr-scU
          source_id: s_h-uqWDKlUda85K2nqBAAte
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王綺 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王綺 之父／母。
          source:
            id: s_h-uqWDKlUda85K2nqBAAte
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 259212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json
            external_identifier: CBDB:259212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5YjEERsh7utx747aGfmRrp
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_L6cffzsTMuvGPpg50tqrJj
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_871R56bHgEcfhFwd2Rmtqb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGiBtE-VMAqlbxi406PRCK
          claim_id: c_L6cffzsTMuvGPpg50tqrJj
          source_id: s_dIknCPMkSeTnR9Kmz86J3j
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王恩 为同胞（CBDB 记「兄」），王恩 之父／母即 王統 之父／母。
          source:
            id: s_dIknCPMkSeTnR9Kmz86J3j
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 259215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259215&o=json
            external_identifier: CBDB:259215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_871R56bHgEcfhFwd2Rmtqb
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_lxuprRp3ypK0QEla2j577Q
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aNYYLf4AMVAXh7vdBQNd7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7LyoRd-uKJU0i__unj8UD
          claim_id: c_lxuprRp3ypK0QEla2j577Q
          source_id: s_QTy-lHZ-JAZK6sR8_RIhid
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王紞 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王紞 之父／母。
          source:
            id: s_QTy-lHZ-JAZK6sR8_RIhid
            source_type: api_record
            title: 中国历代人物传记资料库：王紞（CBDB 259210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json
            external_identifier: CBDB:259210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aNYYLf4AMVAXh7vdBQNd7w
        status: active
        display_name: 王紞
        merged_into_person_id: null
    - claim:
        id: c_WBi4bEOF3gP6o3lIGsFDcP
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJpSBsp4YbiCQbFDsDv75G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P11uOGEzku5B7gtUN_Dw-A
          claim_id: c_WBi4bEOF3gP6o3lIGsFDcP
          source_id: s_fymQ6DewAXqIHt7Rx0qF41
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王繹 之父／母。
          source:
            id: s_fymQ6DewAXqIHt7Rx0qF41
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json
            external_identifier: CBDB:259214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJpSBsp4YbiCQbFDsDv75G
        status: active
        display_name: 王繹
        merged_into_person_id: null
    - claim:
        id: c_srFOQz7eja3nw-YJ58P1P2
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x6mSJVfYmA6MT11XwJbPWF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KdrZbl_s1IGBF2PeO9V5A
          claim_id: c_srFOQz7eja3nw-YJ58P1P2
          source_id: s_yR3Z4H8lSg0YJwqH8XHEsP
          stance: supports
          locator: CBDB：兄弟 王恩（200520）之父／母 王敏
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王恩 为同胞（CBDB 记「弟」），王恩 之父／母即 王紳 之父／母。
          source:
            id: s_yR3Z4H8lSg0YJwqH8XHEsP
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 259211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json
            external_identifier: CBDB:259211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x6mSJVfYmA6MT11XwJbPWF
        status: active
        display_name: 王紳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。成化二十三年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 259206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |
| children | p_5YjEERsh7utx747aGfmRrp | 王綺 | accepted |
| children | p_871R56bHgEcfhFwd2Rmtqb | 王統 | accepted |
| children | p_aNYYLf4AMVAXh7vdBQNd7w | 王紞 | accepted |
| children | p_fJpSBsp4YbiCQbFDsDv75G | 王繹 | accepted |
| children | p_x6mSJVfYmA6MT11XwJbPWF | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紞（CBDB 259210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259210&o=json)
- [中国历代人物传记资料库：王恩（CBDB 200520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json)
- [中国历代人物传记资料库：王敏（CBDB 259206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259206&o=json)
- [中国历代人物传记资料库：王綺（CBDB 259212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259212&o=json)
- [中国历代人物传记资料库：王紳（CBDB 259211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259211&o=json)
- [中国历代人物传记资料库：王統（CBDB 259215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259215&o=json)
- [中国历代人物传记资料库：王繹（CBDB 259214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259214&o=json)
