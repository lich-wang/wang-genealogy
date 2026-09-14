---
schema: wang-person/v1
id: p_N6Q4KJ9UoBcXetiEDsny9t
status: active
merged_into: null
display_name: 王迵
cbdb_id: 229830
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PSLSZCNLw6CRCBFkVts9G5
        subject_person_id: p_N6Q4KJ9UoBcXetiEDsny9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迵，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jgUiDz2-eGvhskO4bqIFPo
          claim_id: c_PSLSZCNLw6CRCBFkVts9G5
          source_id: s_LK2xX5aTpnxV9aFUqh3vQj
          stance: supports
          locator: CBDB:229830
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LK2xX5aTpnxV9aFUqh3vQj
            source_type: api_record
            title: 中国历代人物传记资料库：王迵（CBDB 229830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json
            external_identifier: CBDB:229830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tQWmfmNG6gG3xDFVJLgYZW
        subject_person_id: p_N6Q4KJ9UoBcXetiEDsny9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VBK2pVxP4zZWozC3Noq5xu
          claim_id: c_tQWmfmNG6gG3xDFVJLgYZW
          source_id: s_LK2xX5aTpnxV9aFUqh3vQj
          stance: supports
          locator: CBDB:229830
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OzrT1tpPzG43CHfMBEKU-H
        subject_person_id: p_vfbmRAWaqgxS37HEFGGXnJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6Q4KJ9UoBcXetiEDsny9t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7eRl8MokSQ_wOclG8Pq-V
          claim_id: c_OzrT1tpPzG43CHfMBEKU-H
          source_id: s_UiIryhjNKskS22qSc9WfNy
          stance: supports
          locator: CBDB：兄弟 王進（199096）之父／母 王燾
          quotation: null
          interpretation_note: 由兄弟关系推断：王迵 与 王進 为同胞（CBDB 记「弟」），王進 之父／母即 王迵 之父／母。
          source:
            id: s_UiIryhjNKskS22qSc9WfNy
            source_type: api_record
            title: 中国历代人物传记资料库：王迵（CBDB 229830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json
            external_identifier: CBDB:229830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfbmRAWaqgxS37HEFGGXnJ
        status: active
        display_name: 王燾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_q3kQfHaNK5p0fbPRGuqQaB
        subject_person_id: p_APgCbU3BBu68y3JhFPX3Tu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N6Q4KJ9UoBcXetiEDsny9t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2rFRtL7KtBrI-vZTiaJoSs
          claim_id: c_q3kQfHaNK5p0fbPRGuqQaB
          source_id: s_UiIryhjNKskS22qSc9WfNy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199096 王進）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UiIryhjNKskS22qSc9WfNy
            source_type: api_record
            title: 中国历代人物传记资料库：王迵（CBDB 229830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json
            external_identifier: CBDB:229830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_APgCbU3BBu68y3JhFPX3Tu
        status: active
        display_name: 王進
        merged_into_person_id: null
---

# 王迵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迵，明人物。成化二年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 229830） | accepted |
| name.primary | 王迵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfbmRAWaqgxS37HEFGGXnJ | 王燾 | accepted |
| other | p_APgCbU3BBu68y3JhFPX3Tu | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迵（CBDB 229830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229830&o=json)
