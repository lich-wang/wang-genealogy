---
schema: wang-person/v1
id: p_5Q7ZxuK1sicYmcLypAK1g5
status: active
merged_into: null
display_name: 王荍
cbdb_id: 212039
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oag4g3WJgaDBPZ3amNNgVe
        subject_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荍，明人物。隆慶五年進士，籍贯商城。（中国历代人物传记资料库 CBDB 212039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0bxM33Tl-FMX5ivrvSp82I
          claim_id: c_oag4g3WJgaDBPZ3amNNgVe
          source_id: s_mrVYh22Sm4kiJv4TCdGvxU
          stance: supports
          locator: CBDB:212039
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mrVYh22Sm4kiJv4TCdGvxU
            source_type: api_record
            title: 中国历代人物传记资料库：王荍（CBDB 212039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json
            external_identifier: CBDB:212039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cWj2FcBt8bHGHxA5hoRxt7
        subject_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M9qpoSAoiCQqaML69aLHUN
          claim_id: c_cWj2FcBt8bHGHxA5hoRxt7
          source_id: s_mrVYh22Sm4kiJv4TCdGvxU
          stance: supports
          locator: CBDB:212039
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1TCPQatoF1I_eD89FU6CER
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhQKEfdKvv3vfq_uKvYPzE
          claim_id: c_1TCPQatoF1I_eD89FU6CER
          source_id: s_Hbjl5a2kZ3yObjSLRgKxsj
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王荍 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王荍 之父／母。
          source:
            id: s_Hbjl5a2kZ3yObjSLRgKxsj
            source_type: api_record
            title: 中国历代人物传记资料库：王荍（CBDB 212039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json
            external_identifier: CBDB:212039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FjEtN9HHE5cWHWRD9ddU2X
        status: active
        display_name: 王浙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ArPoW7aCdR0NfmQQEv9P4k
        subject_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w_XGnCSi03Hz4QBv1GafAX
          claim_id: c_ArPoW7aCdR0NfmQQEv9P4k
          source_id: s_Hbjl5a2kZ3yObjSLRgKxsj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Hbjl5a2kZ3yObjSLRgKxsj
            source_type: api_record
            title: 中国历代人物传记资料库：王荍（CBDB 212039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json
            external_identifier: CBDB:212039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
---

# 王荍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荍，明人物。隆慶五年進士，籍贯商城。（中国历代人物传记资料库 CBDB 212039） | accepted |
| name.primary | 王荍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FjEtN9HHE5cWHWRD9ddU2X | 王浙 | accepted |
| other | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荍（CBDB 212039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json)
