---
schema: wang-person/v1
id: p_WSV8MpZFr3BEfHFRbP3ZMW
status: active
merged_into: null
display_name: 王問儒
cbdb_id: 329117
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vK84yzgNSwPDhNnFJLCgzX
        subject_person_id: p_WSV8MpZFr3BEfHFRbP3ZMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問儒，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329117）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CS9mA3JjgjXrf7LfCuCbNS
          claim_id: c_vK84yzgNSwPDhNnFJLCgzX
          source_id: s_YZWPqwpn93DkeoaLDNdBxN
          stance: supports
          locator: CBDB:329117
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YZWPqwpn93DkeoaLDNdBxN
            source_type: api_record
            title: 中国历代人物传记资料库：王問儒（CBDB 329117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329117&o=json
            external_identifier: CBDB:329117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nf9Bv4KRzCsGATydFuALrG
        subject_person_id: p_WSV8MpZFr3BEfHFRbP3ZMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q8MWqpXgU6rnVY9GX88JeW
          claim_id: c_Nf9Bv4KRzCsGATydFuALrG
          source_id: s_YZWPqwpn93DkeoaLDNdBxN
          stance: supports
          locator: CBDB:329117
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uZ28DMcJleIryoGb8w46Ok
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WSV8MpZFr3BEfHFRbP3ZMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUokGFxv-Po_TRTVVGVPFo
          claim_id: c_uZ28DMcJleIryoGb8w46Ok
          source_id: s_hu4dSrv-hG_sGrSBVMWEzh
          stance: supports
          locator: CBDB：兄弟 王問臣（205162）之父／母 王明
          quotation: null
          interpretation_note: 由兄弟关系推断：王問儒 与 王問臣 为同胞（CBDB 记「弟」），王問臣 之父／母即 王問儒 之父／母。
          source:
            id: s_hu4dSrv-hG_sGrSBVMWEzh
            source_type: api_record
            title: 中国历代人物传记资料库：王問儒（CBDB 329117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329117&o=json
            external_identifier: CBDB:329117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Enkv6VPLQgLAYoVEPiVxJf
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9hZbBECIM3Xp5GIbTBN8QU
        subject_person_id: p_WSV8MpZFr3BEfHFRbP3ZMW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFiuUkBYgI6_34IDTLTfDi
          claim_id: c_9hZbBECIM3Xp5GIbTBN8QU
          source_id: s_hu4dSrv-hG_sGrSBVMWEzh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205162 王問臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hu4dSrv-hG_sGrSBVMWEzh
            source_type: api_record
            title: 中国历代人物传记资料库：王問儒（CBDB 329117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329117&o=json
            external_identifier: CBDB:329117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q8kfUyHi4DSEJ6L6oLkg4M
        status: active
        display_name: 王問臣
        merged_into_person_id: null
---

# 王問儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王問儒，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329117） | accepted |
| name.primary | 王問儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Enkv6VPLQgLAYoVEPiVxJf | 王明 | accepted |
| other | p_q8kfUyHi4DSEJ6L6oLkg4M | 王問臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王問儒（CBDB 329117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329117&o=json)
