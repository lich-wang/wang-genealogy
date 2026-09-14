---
schema: wang-person/v1
id: p_R3KjiJ6AtFp3cp2mBnFBEY
status: active
merged_into: null
display_name: 王庭詩
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MW1yVcUFZ3i39oVzBQMEv
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4vX5y26nocv5YxxPRkvxgZ
          claim_id: c_2MW1yVcUFZ3i39oVzBQMEv
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
          stance: supports
          locator: CBDB:205441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205441）
          source: &a1
            id: s_MGYxG86C7Zt1SGzDcLgkDc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 205441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205441&o=json
            external_identifier: CBDB:205441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aBAufwBBnndhHk9PfieXJw
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkR8fy7EsDHHa8sUkeHTLS
          claim_id: c_aBAufwBBnndhHk9PfieXJw
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_doECGXJQXjHdKxUfD4sZvE
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭詩（生于1546年），明人物。明清進士進士，籍贯華州，入仕進士。（中国历代人物传记资料库 CBDB 205441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1tb5YH_W5Zt3my3I2Y4muA
          claim_id: c_doECGXJQXjHdKxUfD4sZvE
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
          stance: supports
          locator: CBDB:205441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_XvLvgZx3E1ajPvY553eFr9
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zwKuGkxSbdNAkwSWnTpoLv
        subject_person_id: p_Bvc7iqxRbBLKig5CA9rzQr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_goUqjfdR8NMAvwN1x4rIFu
          claim_id: c_zwKuGkxSbdNAkwSWnTpoLv
          source_id: s_uer8yMZHJHTsbJ895LeYfa
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uer8yMZHJHTsbJ895LeYfa
            source_type: api_record
            title: 中国历代人物传记资料库：王善述（CBDB 333201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333201&o=json
            external_identifier: CBDB:333201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bvc7iqxRbBLKig5CA9rzQr
        status: active
        display_name: 王善述
        merged_into_person_id: null
    - claim:
        id: c_L59CFuLEEvzlqQRaxC3oAH
        subject_person_id: p_L5GNQWRCoqrZnvRnDJLKba
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8kASVEkVlsevFACecXuSHl
          claim_id: c_L59CFuLEEvzlqQRaxC3oAH
          source_id: s_EjSM1wYYaYM5ZnEq99wUpB
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EjSM1wYYaYM5ZnEq99wUpB
            source_type: api_record
            title: 中国历代人物传记资料库：王朝臣（CBDB 333200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333200&o=json
            external_identifier: CBDB:333200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L5GNQWRCoqrZnvRnDJLKba
        status: active
        display_name: 王朝臣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7kcIeGZdWrjdqN-CYDNxXI
        subject_person_id: p_FYPXxKmUoBGXJ2ArmCq8cc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWI5u5dQKjRm06FXBblOvm
          claim_id: c_7kcIeGZdWrjdqN-CYDNxXI
          source_id: s_ew4ZW_80cvgBnQy9UDJZek
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205441 王庭詩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Lvg6FPu4tL3eiHwUKdlgbE
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fxmhVGu9RtKGvsjb8zFq2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xgu-Yhqon24p14MooyLfl8
          claim_id: c_Lvg6FPu4tL3eiHwUKdlgbE
          source_id: s_XjhUQz0xq6R4G0wgtefwGx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205441 王庭詩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_OFs2OOPT1_nr-mWDwBi8mx
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUPaWNvtFG1Gd4JKD8JkQ2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWxNFFvKB6oz_RDIM-Uhq4
          claim_id: c_OFs2OOPT1_nr-mWDwBi8mx
          source_id: s_2Mk758RNkVnHU0OIM2Crs2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205441 王庭詩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王庭詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭詩 | accepted |
| birth.date | 1546年 | accepted |
| bio.summary | 王庭詩（生于1546年），明人物。明清進士進士，籍贯華州，入仕進士。（中国历代人物传记资料库 CBDB 205441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XvLvgZx3E1ajPvY553eFr9 | 王吉兆 | accepted |
| ancestors | p_Bvc7iqxRbBLKig5CA9rzQr | 王善述 | accepted |
| ancestors | p_L5GNQWRCoqrZnvRnDJLKba | 王朝臣 | accepted |
| other | p_FYPXxKmUoBGXJ2ArmCq8cc | 王誦詩 | accepted |
| other | p_fxmhVGu9RtKGvsjb8zFq2V | 王興詩 | accepted |
| other | p_kUPaWNvtFG1Gd4JKD8JkQ2 | 王知詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝臣（CBDB 333200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333200&o=json)
- [中国历代人物传记资料库：王吉兆（CBDB 333202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333202&o=json)
- [中国历代人物传记资料库：王善述（CBDB 333201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333201&o=json)
- [中国历代人物传记资料库：王誦詩（CBDB 333206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333206&o=json)
- [中国历代人物传记资料库：王庭詩（CBDB 205441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205441&o=json)
- [中国历代人物传记资料库：王興詩（CBDB 333205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333205&o=json)
- [中国历代人物传记资料库：王知詩（CBDB 333207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333207&o=json)
