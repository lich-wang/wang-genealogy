---
schema: wang-person/v1
id: p_XvLvgZx3E1ajPvY553eFr9
status: active
merged_into: null
display_name: 王吉兆
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QEqqQAZ8vPwj6tpwvCoyoB
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mrzQsG7UPH33kdq4k6U8t3
          claim_id: c_QEqqQAZ8vPwj6tpwvCoyoB
          source_id: s_9t2cKjQX1ERWWHgHUMK95a
          stance: supports
          locator: CBDB:333202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333202）
          source: &a1
            id: s_9t2cKjQX1ERWWHgHUMK95a
            source_type: api_record
            title: 中国历代人物传记资料库：王吉兆（CBDB 333202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333202&o=json
            external_identifier: CBDB:333202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NWk1WmWtHVfyiNKY9xJgrB
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王吉兆，明人物。嘉靖四十四年進士，籍贯華州，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 333202）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hdn20hrTYFLO72A3_r9Ykr
          claim_id: c_NWk1WmWtHVfyiNKY9xJgrB
          source_id: s_9t2cKjQX1ERWWHgHUMK95a
          stance: supports
          locator: CBDB:333202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WMdSD46G1JLgmeSSMMasq9
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HehGgnUg6J89B48JrSeD8o
          claim_id: c_WMdSD46G1JLgmeSSMMasq9
          source_id: s_9t2cKjQX1ERWWHgHUMK95a
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R3KjiJ6AtFp3cp2mBnFBEY
        status: active
        display_name: 王庭詩
        merged_into_person_id: null
    - claim:
        id: c_5fNfevoIgrB5i8rf98gX5-
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itPShsRnyoinpP4Qj_jtjK
          claim_id: c_5fNfevoIgrB5i8rf98gX5-
          source_id: s_ew4ZW_80cvgBnQy9UDJZek
          stance: supports
          locator: CBDB：兄弟 王庭詩（205441）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王誦詩 与 王庭詩 为同胞（CBDB 记「兄」），王庭詩 之父／母即 王誦詩 之父／母。
          source:
            id: s_ew4ZW_80cvgBnQy9UDJZek
            source_type: api_record
            title: 中国历代人物传记资料库：王誦詩（CBDB 333206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json
            external_identifier: CBDB:333206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FYPXxKmUoBGXJ2ArmCq8cc
        status: active
        display_name: 王誦詩
        merged_into_person_id: null
    - claim:
        id: c_TKgLfmXeKpJHWnnXMdEHus
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I29NsqV6YPTsE5gDBfscHA
          claim_id: c_TKgLfmXeKpJHWnnXMdEHus
          source_id: s_XjhUQz0xq6R4G0wgtefwGx
          stance: supports
          locator: CBDB：兄弟 王庭詩（205441）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王興詩 与 王庭詩 为同胞（CBDB 记「兄」），王庭詩 之父／母即 王興詩 之父／母。
          source:
            id: s_XjhUQz0xq6R4G0wgtefwGx
            source_type: api_record
            title: 中国历代人物传记资料库：王興詩（CBDB 333205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json
            external_identifier: CBDB:333205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fxmhVGu9RtKGvsjb8zFq2V
        status: active
        display_name: 王興詩
        merged_into_person_id: null
    - claim:
        id: c_JVcWX0rtQk12YEBDxS9pvx
        subject_person_id: p_XvLvgZx3E1ajPvY553eFr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kUPaWNvtFG1Gd4JKD8JkQ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FIcSWkUFQOrawq-7HE1ggv
          claim_id: c_JVcWX0rtQk12YEBDxS9pvx
          source_id: s_2Mk758RNkVnHU0OIM2Crs2
          stance: supports
          locator: CBDB：兄弟 王庭詩（205441）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王知詩 与 王庭詩 为同胞（CBDB 记「兄」），王庭詩 之父／母即 王知詩 之父／母。
          source:
            id: s_2Mk758RNkVnHU0OIM2Crs2
            source_type: api_record
            title: 中国历代人物传记资料库：王知詩（CBDB 333207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333207&o=json
            external_identifier: CBDB:333207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUPaWNvtFG1Gd4JKD8JkQ2
        status: active
        display_name: 王知詩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉兆 | accepted |
| bio.summary | 王吉兆，明人物。嘉靖四十四年進士，籍贯華州，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 333202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R3KjiJ6AtFp3cp2mBnFBEY | 王庭詩 | accepted |
| children | p_FYPXxKmUoBGXJ2ArmCq8cc | 王誦詩 | accepted |
| children | p_fxmhVGu9RtKGvsjb8zFq2V | 王興詩 | accepted |
| children | p_kUPaWNvtFG1Gd4JKD8JkQ2 | 王知詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉兆（CBDB 333202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333202&o=json)
- [中国历代人物传记资料库：王誦詩（CBDB 333206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json)
- [中国历代人物传记资料库：王興詩（CBDB 333205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json)
- [中国历代人物传记资料库：王知詩（CBDB 333207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333207&o=json)
