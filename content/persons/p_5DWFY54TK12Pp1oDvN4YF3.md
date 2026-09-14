---
schema: wang-person/v1
id: p_5DWFY54TK12Pp1oDvN4YF3
status: active
merged_into: null
display_name: 王惇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VKuBYaeJheGQ6sFc97UMac
        subject_person_id: p_5DWFY54TK12Pp1oDvN4YF3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZEpzQEP2bMguMMiVwgrd5n
          claim_id: c_VKuBYaeJheGQ6sFc97UMac
          source_id: s_h2oLvJrhERU3jq666DWM21
          stance: supports
          locator: CBDB:254566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254566）
          source: &a1
            id: s_h2oLvJrhERU3jq666DWM21
            source_type: api_record
            title: 中国历代人物传记资料库：王惇（CBDB 254566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254566&o=json
            external_identifier: CBDB:254566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F7H6UBS1GD211ybJAZDofn
        subject_person_id: p_5DWFY54TK12Pp1oDvN4YF3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惇，明人物。建文二年殿試進士，籍贯蘄州。（中国历代人物传记资料库 CBDB 254566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VanQTQgB83_F3pmvVD71QZ
          claim_id: c_F7H6UBS1GD211ybJAZDofn
          source_id: s_h2oLvJrhERU3jq666DWM21
          stance: supports
          locator: CBDB:254566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zAmKOdfShOGPjCQsSN-xIm
        subject_person_id: p_TE83LvMQ2327xyiTcM2LFF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5DWFY54TK12Pp1oDvN4YF3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYQLV4ZBMEKcf_2MXbAgwW
          claim_id: c_zAmKOdfShOGPjCQsSN-xIm
          source_id: s_xy7rEXscGDiym59JdMcLXp
          stance: supports
          locator: CBDB：兄弟 王政（200180）之父／母 王勝
          quotation: null
          interpretation_note: 由兄弟关系推断：王惇 与 王政 为同胞（CBDB 记「弟」），王政 之父／母即 王惇 之父／母。
          source:
            id: s_xy7rEXscGDiym59JdMcLXp
            source_type: api_record
            title: 中国历代人物传记资料库：王惇（CBDB 254566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254566&o=json
            external_identifier: CBDB:254566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TE83LvMQ2327xyiTcM2LFF
        status: active
        display_name: 王勝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y5eD1TC7VqsjpSGii_-WpL
        subject_person_id: p_5DWFY54TK12Pp1oDvN4YF3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6Gg8iGSgGr3S6qEitAvCqZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-XVDZuMA0uJ4elOp-JcjT
          claim_id: c_y5eD1TC7VqsjpSGii_-WpL
          source_id: s_xy7rEXscGDiym59JdMcLXp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200180 王政）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xy7rEXscGDiym59JdMcLXp
            source_type: api_record
            title: 中国历代人物传记资料库：王惇（CBDB 254566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254566&o=json
            external_identifier: CBDB:254566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Gg8iGSgGr3S6qEitAvCqZ
        status: active
        display_name: 王政
        merged_into_person_id: null
---

# 王惇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惇 | accepted |
| bio.summary | 王惇，明人物。建文二年殿試進士，籍贯蘄州。（中国历代人物传记资料库 CBDB 254566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TE83LvMQ2327xyiTcM2LFF | 王勝 | accepted |
| other | p_6Gg8iGSgGr3S6qEitAvCqZ | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惇（CBDB 254566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254566&o=json)
