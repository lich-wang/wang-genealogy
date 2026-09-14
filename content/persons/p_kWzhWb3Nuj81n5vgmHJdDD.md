---
schema: wang-person/v1
id: p_kWzhWb3Nuj81n5vgmHJdDD
status: active
merged_into: null
display_name: 王文宗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xD4E4dV6JiGQKwKRDE3JBP
        subject_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95m6tNrpYiWDGDhq6BmkdK
          claim_id: c_xD4E4dV6JiGQKwKRDE3JBP
          source_id: s_3Ajuh2mALnwCcaVyg8ULod
          stance: supports
          locator: CBDB:314482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314482）
          source: &a1
            id: s_3Ajuh2mALnwCcaVyg8ULod
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 314482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json
            external_identifier: CBDB:314482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7a4435MiAPpdD1WkCFvf8o
        subject_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宗，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8FURKKhXHmgrL_a8EvKHbr
          claim_id: c_7a4435MiAPpdD1WkCFvf8o
          source_id: s_3Ajuh2mALnwCcaVyg8ULod
          stance: supports
          locator: CBDB:314482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W6y3lLfw8ZtHMEo5eduLxz
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b2t3SpIri73dQlgUXG3iQW
          claim_id: c_W6y3lLfw8ZtHMEo5eduLxz
          source_id: s_rSRllFbpE3vWNEGXIfCcvK
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文宗 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文宗 之父／母。
          source:
            id: s_rSRllFbpE3vWNEGXIfCcvK
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 314482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json
            external_identifier: CBDB:314482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vDgtFRNYxuxGwwcAPH4NeN
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6fwLTM75m5E5e2ekf93upH
        subject_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPkiaQD35aS7p6XewBePLe
          claim_id: c_6fwLTM75m5E5e2ekf93upH
          source_id: s_rSRllFbpE3vWNEGXIfCcvK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rSRllFbpE3vWNEGXIfCcvK
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 314482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json
            external_identifier: CBDB:314482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ukJ2qr82oEuCTM4WYW3F7J
        status: active
        display_name: 王文翰
        merged_into_person_id: null
---

# 王文宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文宗 | accepted |
| bio.summary | 王文宗，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vDgtFRNYxuxGwwcAPH4NeN | 王繼 | accepted |
| other | p_ukJ2qr82oEuCTM4WYW3F7J | 王文翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文宗（CBDB 314482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json)
