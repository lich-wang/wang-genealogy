---
schema: wang-person/v1
id: p_TU7g5GRwzHkJGqEJiGHBCN
status: active
merged_into: null
display_name: 王仲修
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H35F6oKxrFtd1mTj5t9UJ5
        subject_person_id: p_TU7g5GRwzHkJGqEJiGHBCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i1JkMzxnX8izVXnESEbc37
          claim_id: c_H35F6oKxrFtd1mTj5t9UJ5
          source_id: s_JwiV4bCpUHJUa7Ho3vQATF
          stance: supports
          locator: CBDB:17934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17934）
          source: &a1
            id: s_JwiV4bCpUHJUa7Ho3vQATF
            source_type: api_record
            title: 中国历代人物传记资料库：王仲修（CBDB 17934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17934&o=json
            external_identifier: CBDB:17934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eoPg8W1FcC6b3JkoKkMKTy
        subject_person_id: p_TU7g5GRwzHkJGqEJiGHBCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲修，宋人物。籍贯東明，入仕進士，曾任司戶參軍、崇文院校書。（中国历代人物传记资料库 CBDB 17934）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_auiAZXMBf76xATylghFtGI
          claim_id: c_eoPg8W1FcC6b3JkoKkMKTy
          source_id: s_JwiV4bCpUHJUa7Ho3vQATF
          stance: supports
          locator: CBDB:17934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2S9XDThdbbOnmyzl5ZiWTt
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TU7g5GRwzHkJGqEJiGHBCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_lvOwfHQiOvVXYzxdCYw_GG
          claim_id: c_2S9XDThdbbOnmyzl5ZiWTt
          source_id: s_TPEIEqpHPNWjd52BBMdBKG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1845）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_TPEIEqpHPNWjd52BBMdBKG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲修（CBDB 17934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17934&o=json
            external_identifier: CBDB:17934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲修 | accepted |
| bio.summary | 王仲修，宋人物。籍贯東明，入仕進士，曾任司戶參軍、崇文院校書。（中国历代人物传记资料库 CBDB 17934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲修（CBDB 17934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17934&o=json)
