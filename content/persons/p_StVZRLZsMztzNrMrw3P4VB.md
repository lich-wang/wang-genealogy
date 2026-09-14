---
schema: wang-person/v1
id: p_StVZRLZsMztzNrMrw3P4VB
status: active
merged_into: null
display_name: 王正大
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaKQyZ6Zhui37HJMB9GBJm
        subject_person_id: p_StVZRLZsMztzNrMrw3P4VB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8MJ8pMFd7Tnw3jixhC985t
          claim_id: c_uaKQyZ6Zhui37HJMB9GBJm
          source_id: s_PDbApLDems6rct2WrUfyP7
          stance: supports
          locator: CBDB:313128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313128）
          source: &a1
            id: s_PDbApLDems6rct2WrUfyP7
            source_type: api_record
            title: 中国历代人物传记资料库：王正大（CBDB 313128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313128&o=json
            external_identifier: CBDB:313128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hvFuzgktnzWuebRDEw1sqe
        subject_person_id: p_StVZRLZsMztzNrMrw3P4VB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正大，明人物。嘉靖二十九年進士，籍贯宜陽。（中国历代人物传记资料库 CBDB 313128）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z4O_Eo_BJ2JafhE_Id-cGB
          claim_id: c_hvFuzgktnzWuebRDEw1sqe
          source_id: s_PDbApLDems6rct2WrUfyP7
          stance: supports
          locator: CBDB:313128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zg115Nkgey16I95hC_EMZx
        subject_person_id: p_Uu3urkECTiPumEtH6sBydY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_StVZRLZsMztzNrMrw3P4VB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqKd46EBFpi7JAZZZTN5m9
          claim_id: c_zg115Nkgey16I95hC_EMZx
          source_id: s_vg0tq0jbxsN4FBRzcRcw46
          stance: supports
          locator: CBDB：兄弟 王正国（68263）之父／母 王邦瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王正大 与 王正国 为同胞（CBDB 记「兄」），王正国 之父／母即 王正大 之父／母。
          source:
            id: s_vg0tq0jbxsN4FBRzcRcw46
            source_type: api_record
            title: 中国历代人物传记资料库：王正大（CBDB 313128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313128&o=json
            external_identifier: CBDB:313128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3urkECTiPumEtH6sBydY
        status: active
        display_name: 王邦瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_53Nre8QRRnlVLqcnznHFn9
        subject_person_id: p_KbE3VYwBQk3rLuTGnVB2me
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_StVZRLZsMztzNrMrw3P4VB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uf_j9KyGzoIkwXjSxcU-x2
          claim_id: c_53Nre8QRRnlVLqcnznHFn9
          source_id: s_vg0tq0jbxsN4FBRzcRcw46
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68263 王正國）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vg0tq0jbxsN4FBRzcRcw46
            source_type: api_record
            title: 中国历代人物传记资料库：王正大（CBDB 313128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313128&o=json
            external_identifier: CBDB:313128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KbE3VYwBQk3rLuTGnVB2me
        status: active
        display_name: 王正国
        merged_into_person_id: null
---

# 王正大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正大 | accepted |
| bio.summary | 王正大，明人物。嘉靖二十九年進士，籍贯宜陽。（中国历代人物传记资料库 CBDB 313128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Uu3urkECTiPumEtH6sBydY | 王邦瑞 | accepted |
| other | p_KbE3VYwBQk3rLuTGnVB2me | 王正国 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正大（CBDB 313128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313128&o=json)
