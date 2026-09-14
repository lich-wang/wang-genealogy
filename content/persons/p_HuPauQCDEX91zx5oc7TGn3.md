---
schema: wang-person/v1
id: p_HuPauQCDEX91zx5oc7TGn3
status: active
merged_into: null
display_name: 王大治
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xouXCB7qPVPHcGHX9LcyJC
        subject_person_id: p_HuPauQCDEX91zx5oc7TGn3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FmJtwTXaBC7nY7u9FP6w2a
          claim_id: c_xouXCB7qPVPHcGHX9LcyJC
          source_id: s_wXB9kMi5LsPho3F6mumq84
          stance: supports
          locator: CBDB:301953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301953）
          source: &a1
            id: s_wXB9kMi5LsPho3F6mumq84
            source_type: api_record
            title: 中国历代人物传记资料库：王大治（CBDB 301953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json
            external_identifier: CBDB:301953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_njnES3i1GzTFKr12EHMK8U
        subject_person_id: p_HuPauQCDEX91zx5oc7TGn3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大治，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZKw2H_UwTMB5uhnsgHLab6
          claim_id: c_njnES3i1GzTFKr12EHMK8U
          source_id: s_wXB9kMi5LsPho3F6mumq84
          stance: supports
          locator: CBDB:301953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b6bOkaPcgIWU8Kay8hxmp8
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HuPauQCDEX91zx5oc7TGn3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wyy8_97wwChZPWgTopLy-3
          claim_id: c_b6bOkaPcgIWU8Kay8hxmp8
          source_id: s_Ga-RW-3fAbm2Js_YOiXdtT
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大治 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大治 之父／母。
          source:
            id: s_Ga-RW-3fAbm2Js_YOiXdtT
            source_type: api_record
            title: 中国历代人物传记资料库：王大治（CBDB 301953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json
            external_identifier: CBDB:301953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZGsXLfQQigV9EAPJ7Na3Ev
        subject_person_id: p_HuPauQCDEX91zx5oc7TGn3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1W10mxQfVENxKXcs5Nkho
          claim_id: c_ZGsXLfQQigV9EAPJ7Na3Ev
          source_id: s_Ga-RW-3fAbm2Js_YOiXdtT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ga-RW-3fAbm2Js_YOiXdtT
            source_type: api_record
            title: 中国历代人物传记资料库：王大治（CBDB 301953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json
            external_identifier: CBDB:301953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
---

# 王大治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大治 | accepted |
| bio.summary | 王大治，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| other | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大治（CBDB 301953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json)
