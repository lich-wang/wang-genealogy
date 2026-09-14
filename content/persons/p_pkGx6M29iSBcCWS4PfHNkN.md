---
schema: wang-person/v1
id: p_pkGx6M29iSBcCWS4PfHNkN
status: active
merged_into: null
display_name: 王英臣
cbdb_id: 25609
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QuJES1NKEVcFFRCWMuTnp8
        subject_person_id: p_pkGx6M29iSBcCWS4PfHNkN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英臣，宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 25609）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F-6wzs1ORNx-t6R77La8Kh
          claim_id: c_QuJES1NKEVcFFRCWMuTnp8
          source_id: s_WefMkKeCMpexQML2uQrGub
          stance: supports
          locator: CBDB:25609
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WefMkKeCMpexQML2uQrGub
            source_type: api_record
            title: 中国历代人物传记资料库：王英臣（CBDB 25609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25609&o=json
            external_identifier: CBDB:25609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZPmYwumrkHZgPx6v7XWgvx
        subject_person_id: p_pkGx6M29iSBcCWS4PfHNkN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cHZbxRA7pqE1xjpHxguKqv
          claim_id: c_ZPmYwumrkHZgPx6v7XWgvx
          source_id: s_WefMkKeCMpexQML2uQrGub
          stance: supports
          locator: CBDB:25609
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ozVQP2x4nHeR61kfTDxk83
        subject_person_id: p_pkGx6M29iSBcCWS4PfHNkN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2RUMyWXcjs7z4tu3brwiP2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e7aiforoT7j4D8E__eQ8t4
          claim_id: c_ozVQP2x4nHeR61kfTDxk83
          source_id: s_eK1FsbK_JNUVYNZ3VFIsgF
          stance: supports
          locator: CBDB 亲属：父（KinPerson 25609）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_eK1FsbK_JNUVYNZ3VFIsgF
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 25610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25610&o=json
            external_identifier: CBDB:25610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2RUMyWXcjs7z4tu3brwiP2
        status: active
        display_name: 王琳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王英臣，宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 25609） | accepted |
| name.primary | 王英臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2RUMyWXcjs7z4tu3brwiP2 | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 25610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25610&o=json)
- [中国历代人物传记资料库：王英臣（CBDB 25609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25609&o=json)
