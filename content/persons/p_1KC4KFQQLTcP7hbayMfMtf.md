---
schema: wang-person/v1
id: p_1KC4KFQQLTcP7hbayMfMtf
status: active
merged_into: null
display_name: 王建基
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xnmAJdtqmKLxEHqFymwjBd
        subject_person_id: p_1KC4KFQQLTcP7hbayMfMtf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qi5F618rm3ctuFNdF54QSf
          claim_id: c_xnmAJdtqmKLxEHqFymwjBd
          source_id: s_7AC1B4kvAwRucQPkGNAsaL
          stance: supports
          locator: CBDB:558204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558204）
          source: &a1
            id: s_7AC1B4kvAwRucQPkGNAsaL
            source_type: api_record
            title: 中国历代人物传记资料库：王建基（CBDB 558204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json
            external_identifier: CBDB:558204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3A7vDTs6cjXsQf6D1fPEt
        subject_person_id: p_1KC4KFQQLTcP7hbayMfMtf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建基，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558204）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1NxNxYn6RwvpnW-OzSy-9Q
          claim_id: c_V3A7vDTs6cjXsQf6D1fPEt
          source_id: s_7AC1B4kvAwRucQPkGNAsaL
          stance: supports
          locator: CBDB:558204
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5nVMMowIBJSMr5geG6dDqP
        subject_person_id: p_1KC4KFQQLTcP7hbayMfMtf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziuSm1aJKT5bBGkVpgPe6D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6drSyUsQK_3QMABsHMUH7i
          claim_id: c_5nVMMowIBJSMr5geG6dDqP
          source_id: s_OsVFPHYRBE73ioqRFhrH-W
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 558200 王肇基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OsVFPHYRBE73ioqRFhrH-W
            source_type: api_record
            title: 中国历代人物传记资料库：王建基（CBDB 558204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json
            external_identifier: CBDB:558204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziuSm1aJKT5bBGkVpgPe6D
        status: active
        display_name: 王肇基
        merged_into_person_id: null
    - claim:
        id: c_IqEeBC9mpptDDzxIwAKbhc
        subject_person_id: p_1KC4KFQQLTcP7hbayMfMtf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h3CXNojG2YSiYzwGfbYd94
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inqpc8vFHzPCwcQEoxKHYl
          claim_id: c_IqEeBC9mpptDDzxIwAKbhc
          source_id: s_OsVFPHYRBE73ioqRFhrH-W
          stance: supports
          locator: CBDB 亲属：兄弟（KinPerson 558202 王開基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OsVFPHYRBE73ioqRFhrH-W
            source_type: api_record
            title: 中国历代人物传记资料库：王建基（CBDB 558204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json
            external_identifier: CBDB:558204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h3CXNojG2YSiYzwGfbYd94
        status: active
        display_name: 王開基
        merged_into_person_id: null
---

# 王建基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建基 | accepted |
| bio.summary | 王建基，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558204） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_ziuSm1aJKT5bBGkVpgPe6D | 王肇基 | accepted |
| other | p_h3CXNojG2YSiYzwGfbYd94 | 王開基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建基（CBDB 558204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558204&o=json)
