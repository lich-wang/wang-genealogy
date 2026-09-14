---
schema: wang-person/v1
id: p_8r5zcHcdRUFJXRuzwFCDPp
status: active
merged_into: null
display_name: 王瑩之
cbdb_id: 308699
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F6wHGa8h5K8ByZewyXhgFT
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩之，明人物。嘉靖二十六年進士，籍贯長泰，入仕鄉貢舉人，曾任通判、知州。（中国历代人物传记资料库 CBDB 308699）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xnOftCSIfcSayFkQVp39d_
          claim_id: c_F6wHGa8h5K8ByZewyXhgFT
          source_id: s_N9P6JPNVouCZm66ku6vXfJ
          stance: supports
          locator: CBDB:308699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N9P6JPNVouCZm66ku6vXfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩之（CBDB 308699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json
            external_identifier: CBDB:308699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuoyG2mP8CHK7M9AB4FKRQ
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bEHJCQX5kijtrsX6bftgEH
          claim_id: c_iuoyG2mP8CHK7M9AB4FKRQ
          source_id: s_N9P6JPNVouCZm66ku6vXfJ
          stance: supports
          locator: CBDB:308699
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dOrLV_pG9mXO3DAKXFybo8
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fmPtn4opHsTmd_dLQYS930
          claim_id: c_dOrLV_pG9mXO3DAKXFybo8
          source_id: s_N9P6JPNVouCZm66ku6vXfJ
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N9P6JPNVouCZm66ku6vXfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩之（CBDB 308699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json
            external_identifier: CBDB:308699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xXSR8uBFHqUzBi2gqK2tw2
        status: active
        display_name: 王惟恕
        merged_into_person_id: null
    - claim:
        id: c_OCwfJx4-HR-qoPHlaRJnSp
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HDCYSdtJbYwV1MTMryabN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yccIQK8p3rmZ8kpr9lFL1-
          claim_id: c_OCwfJx4-HR-qoPHlaRJnSp
          source_id: s_XEx1RPQOaue0Sq_xL1c5a0
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟惠 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟惠 之父／母。
          source:
            id: s_XEx1RPQOaue0Sq_xL1c5a0
            source_type: api_record
            title: 中国历代人物传记资料库：王惟惠（CBDB 308702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308702&o=json
            external_identifier: CBDB:308702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HDCYSdtJbYwV1MTMryabN6
        status: active
        display_name: 王惟惠
        merged_into_person_id: null
    - claim:
        id: c_0FnFGBXBS9qC7vZhT2FiY9
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LoPnz34XhBVwFF38rXs3DF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4utXHgq_gPU3ojI9fKUx3X
          claim_id: c_0FnFGBXBS9qC7vZhT2FiY9
          source_id: s_IrRkIszc21pBzoujCwrk9H
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟懋 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟懋 之父／母。
          source:
            id: s_IrRkIszc21pBzoujCwrk9H
            source_type: api_record
            title: 中国历代人物传记资料库：王惟懋（CBDB 308704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308704&o=json
            external_identifier: CBDB:308704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LoPnz34XhBVwFF38rXs3DF
        status: active
        display_name: 王惟懋
        merged_into_person_id: null
    - claim:
        id: c_dzwewNNauVm0NjXwL5hGr1
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJrzq5FjZpeLO1LWLYh9oR
          claim_id: c_dzwewNNauVm0NjXwL5hGr1
          source_id: s_JphRc9bwop-MsnP8Vzhg4F
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟應 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟應 之父／母。
          source:
            id: s_JphRc9bwop-MsnP8Vzhg4F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟應（CBDB 308705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json
            external_identifier: CBDB:308705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WBFv7tKTFZKmC5GW8afgRZ
        status: active
        display_name: 王惟應
        merged_into_person_id: null
    - claim:
        id: c_PujJq4X5YgwfG9L_ZMINIg
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pKkLW1uBtTf3sCihfyksSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1usXS8jtxGQgl8wblgzHRY
          claim_id: c_PujJq4X5YgwfG9L_ZMINIg
          source_id: s_zuC4TuU2ir5_6Dx2T7wrlV
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟憑 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟憑 之父／母。
          source:
            id: s_zuC4TuU2ir5_6Dx2T7wrlV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟憑（CBDB 308703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json
            external_identifier: CBDB:308703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pKkLW1uBtTf3sCihfyksSx
        status: active
        display_name: 王惟憑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑩之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑩之，明人物。嘉靖二十六年進士，籍贯長泰，入仕鄉貢舉人，曾任通判、知州。（中国历代人物传记资料库 CBDB 308699） | accepted |
| name.primary | 王瑩之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xXSR8uBFHqUzBi2gqK2tw2 | 王惟恕 | accepted |
| children | p_HDCYSdtJbYwV1MTMryabN6 | 王惟惠 | accepted |
| children | p_LoPnz34XhBVwFF38rXs3DF | 王惟懋 | accepted |
| children | p_WBFv7tKTFZKmC5GW8afgRZ | 王惟應 | accepted |
| children | p_pKkLW1uBtTf3sCihfyksSx | 王惟憑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟惠（CBDB 308702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308702&o=json)
- [中国历代人物传记资料库：王惟懋（CBDB 308704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308704&o=json)
- [中国历代人物传记资料库：王惟憑（CBDB 308703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json)
- [中国历代人物传记资料库：王惟應（CBDB 308705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json)
- [中国历代人物传记资料库：王瑩之（CBDB 308699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308699&o=json)
