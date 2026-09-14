---
schema: wang-person/v1
id: p_7orRPC4dAUdKkVVhgcBrpS
status: active
merged_into: null
display_name: 王繼昭
cbdb_id: 215086
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZ9FKHpHSsBxoruE4Fu61a
        subject_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昭，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215086）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gyI7qc4-sl2_hl25rTI6fh
          claim_id: c_iZ9FKHpHSsBxoruE4Fu61a
          source_id: s_V3LMmBTaZxLucpCynxBgne
          stance: supports
          locator: CBDB:215086
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V3LMmBTaZxLucpCynxBgne
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昭（CBDB 215086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json
            external_identifier: CBDB:215086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDvjedKggdP779uuGJW4WS
        subject_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vnCpKqyXCA7DzkZDN1UYfR
          claim_id: c_JDvjedKggdP779uuGJW4WS
          source_id: s_V3LMmBTaZxLucpCynxBgne
          stance: supports
          locator: CBDB:215086
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ESpEJZBUudql9TzCXIJnn-
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A0ImtQ7-TFShYvpWuc93CR
          claim_id: c_ESpEJZBUudql9TzCXIJnn-
          source_id: s_TY9zkZ70goHZWGt84kNGv8
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼昭 与 王繼明 为同胞（CBDB 记「兄」），王繼明 之父／母即 王繼昭 之父／母。
          source:
            id: s_TY9zkZ70goHZWGt84kNGv8
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昭（CBDB 215086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json
            external_identifier: CBDB:215086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5G1-nB_z8FwrYDSRugH4Ro
        subject_person_id: p_7orRPC4dAUdKkVVhgcBrpS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9bbJT9Rx3RNQb75J7v2d5
          claim_id: c_5G1-nB_z8FwrYDSRugH4Ro
          source_id: s_TY9zkZ70goHZWGt84kNGv8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TY9zkZ70goHZWGt84kNGv8
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昭（CBDB 215086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json
            external_identifier: CBDB:215086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
---

# 王繼昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼昭，明人物。萬曆二年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 215086） | accepted |
| name.primary | 王繼昭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| other | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼昭（CBDB 215086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215086&o=json)
