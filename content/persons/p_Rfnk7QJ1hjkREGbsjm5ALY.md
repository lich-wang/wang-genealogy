---
schema: wang-person/v1
id: p_Rfnk7QJ1hjkREGbsjm5ALY
status: active
merged_into: null
display_name: 王學召
cbdb_id: 303184
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W5a8euisEwwX7nEa4vQ7Gf
        subject_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學召，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303184）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2s2UMjw-BTqix4sTGzvG_i
          claim_id: c_W5a8euisEwwX7nEa4vQ7Gf
          source_id: s_YKjoHLPX6qsavPrjBY989e
          stance: supports
          locator: CBDB:303184
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YKjoHLPX6qsavPrjBY989e
            source_type: api_record
            title: 中国历代人物传记资料库：王學召（CBDB 303184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json
            external_identifier: CBDB:303184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2X9JPiDaTkuEfPtVSJ1xb
        subject_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JBgm3Wtb1BPXj7zba4K3Kc
          claim_id: c_R2X9JPiDaTkuEfPtVSJ1xb
          source_id: s_YKjoHLPX6qsavPrjBY989e
          stance: supports
          locator: CBDB:303184
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4Tj3Yg_KoRmfP4OLeVM_3c
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fGTXN-KH0UKP3dzmp-r_xX
          claim_id: c_4Tj3Yg_KoRmfP4OLeVM_3c
          source_id: s_LiX8t7vAudH8QsxSfUnvR6
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學召 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學召 之父／母。
          source:
            id: s_LiX8t7vAudH8QsxSfUnvR6
            source_type: api_record
            title: 中国历代人物传记资料库：王學召（CBDB 303184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json
            external_identifier: CBDB:303184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yV8QqpUGQWLUuKouGj9MgL
        subject_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxQfQqk_Xts0aw06Ins4Vh
          claim_id: c_yV8QqpUGQWLUuKouGj9MgL
          source_id: s_LiX8t7vAudH8QsxSfUnvR6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LiX8t7vAudH8QsxSfUnvR6
            source_type: api_record
            title: 中国历代人物传记资料库：王學召（CBDB 303184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json
            external_identifier: CBDB:303184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
---

# 王學召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學召，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303184） | accepted |
| name.primary | 王學召 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| other | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學召（CBDB 303184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json)
