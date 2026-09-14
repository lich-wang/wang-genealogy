---
schema: wang-person/v1
id: p_A5n2WXRqDodUy7kmhCiAPu
status: active
merged_into: null
display_name: 王舜中
cbdb_id: 22169
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SzC73adKN4AXsfp3CdRkd6
        subject_person_id: p_A5n2WXRqDodUy7kmhCiAPu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜中，宋人物。籍贯祁門，入仕進士。（中国历代人物传记资料库 CBDB 22169）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4gEbpUqplzHUhtET1JDFj4
          claim_id: c_SzC73adKN4AXsfp3CdRkd6
          source_id: s_DqCKzFVNnNY45V1EANpH48
          stance: supports
          locator: CBDB:22169
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DqCKzFVNnNY45V1EANpH48
            source_type: api_record
            title: 中国历代人物传记资料库：王舜中（CBDB 22169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22169&o=json
            external_identifier: CBDB:22169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PWrCuZH1pEcaKGuwY6DmUH
        subject_person_id: p_A5n2WXRqDodUy7kmhCiAPu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CMejMNLHVP1m6RWyCcrdHk
          claim_id: c_PWrCuZH1pEcaKGuwY6DmUH
          source_id: s_DqCKzFVNnNY45V1EANpH48
          stance: supports
          locator: CBDB:22169
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_eFhaWAJRYcjd-4VxInbG0s
        subject_person_id: p_A5n2WXRqDodUy7kmhCiAPu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PpV1Ms5y8YuJ1UJgsEz1qT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oRFZium6O2ELyKxBCMQzpE
          claim_id: c_eFhaWAJRYcjd-4VxInbG0s
          source_id: s_mtOfrBwoOUYdthnodTw64O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 7382 王舜舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mtOfrBwoOUYdthnodTw64O
            source_type: api_record
            title: 中国历代人物传记资料库：王舜中（CBDB 22169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22169&o=json
            external_identifier: CBDB:22169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PpV1Ms5y8YuJ1UJgsEz1qT
        status: active
        display_name: 王舜舉
        merged_into_person_id: null
---

# 王舜中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜中，宋人物。籍贯祁門，入仕進士。（中国历代人物传记资料库 CBDB 22169） | accepted |
| name.primary | 王舜中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_PpV1Ms5y8YuJ1UJgsEz1qT | 王舜舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜中（CBDB 22169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22169&o=json)
