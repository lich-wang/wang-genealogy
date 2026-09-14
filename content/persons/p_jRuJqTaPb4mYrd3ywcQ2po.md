---
schema: wang-person/v1
id: p_jRuJqTaPb4mYrd3ywcQ2po
status: active
merged_into: null
display_name: 王大猷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sySo5VvoEMY6qMme465dc2
        subject_person_id: p_jRuJqTaPb4mYrd3ywcQ2po
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KLR1vnFLq1yzWcJC3YVfP2
          claim_id: c_sySo5VvoEMY6qMme465dc2
          source_id: s_kmfA2iLog4dokTQo2asa6g
          stance: supports
          locator: CBDB:264455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264455）
          source: &a1
            id: s_kmfA2iLog4dokTQo2asa6g
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 264455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json
            external_identifier: CBDB:264455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6VgLkcJFsyU6qQNRCXxLrv
        subject_person_id: p_jRuJqTaPb4mYrd3ywcQ2po
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oJK09SHo04qFyi7WTGmq5z
          claim_id: c_6VgLkcJFsyU6qQNRCXxLrv
          source_id: s_kmfA2iLog4dokTQo2asa6g
          stance: supports
          locator: CBDB:264455
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4GKICXKDOuW1-fjltganJD
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRuJqTaPb4mYrd3ywcQ2po
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAm6NjPVtOYoFNVsChwar8
          claim_id: c_4GKICXKDOuW1-fjltganJD
          source_id: s_A_dZJoEvFsYOvLNfZdO49H
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大猷 与 王大用 为同胞（CBDB 记「兄」），王大用 之父／母即 王大猷 之父／母。
          source:
            id: s_A_dZJoEvFsYOvLNfZdO49H
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 264455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json
            external_identifier: CBDB:264455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hYFczFXSMMXJ25M18ZPJD
        status: active
        display_name: 王乂衡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wQ0pTCIwp0ZTSw9jYj6MI3
        subject_person_id: p_jRuJqTaPb4mYrd3ywcQ2po
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kqXm5WX3Chr623QJu96zs
          claim_id: c_wQ0pTCIwp0ZTSw9jYj6MI3
          source_id: s_A_dZJoEvFsYOvLNfZdO49H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200906 王大用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A_dZJoEvFsYOvLNfZdO49H
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 264455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json
            external_identifier: CBDB:264455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
---

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| bio.summary | 王大猷，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hYFczFXSMMXJ25M18ZPJD | 王乂衡 | accepted |
| other | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大猷（CBDB 264455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json)
