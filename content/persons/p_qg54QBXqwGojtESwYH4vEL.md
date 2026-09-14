---
schema: wang-person/v1
id: p_qg54QBXqwGojtESwYH4vEL
status: active
merged_into: null
display_name: 王時正
cbdb_id: 262457
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hYYfLQAARhjzJCLEeESpv5
        subject_person_id: p_qg54QBXqwGojtESwYH4vEL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時正，明人物。弘治三年進士，籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 262457）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_W0ivsaQkYQVdEe6akUodqG
          claim_id: c_hYYfLQAARhjzJCLEeESpv5
          source_id: s_s1ogyxepY8TyQRDcSq4VKG
          stance: supports
          locator: CBDB:262457
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s1ogyxepY8TyQRDcSq4VKG
            source_type: api_record
            title: 中国历代人物传记资料库：王時正（CBDB 262457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json
            external_identifier: CBDB:262457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMUQiSMfhDx8FYaDP7dd6L
        subject_person_id: p_qg54QBXqwGojtESwYH4vEL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FqQzh5pLtR7Jd9RrMfmXD2
          claim_id: c_eMUQiSMfhDx8FYaDP7dd6L
          source_id: s_s1ogyxepY8TyQRDcSq4VKG
          stance: supports
          locator: CBDB:262457
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dA4HDl-4Xz6lmjh3ADmcM7
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qg54QBXqwGojtESwYH4vEL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeLqEyN8WWmn1Gm-VuXcpM
          claim_id: c_dA4HDl-4Xz6lmjh3ADmcM7
          source_id: s_A3LkW0PoZnpBx369N8yLyn
          stance: supports
          locator: CBDB：兄弟 王时中（68328）之父／母 王钻
          quotation: null
          interpretation_note: 由兄弟关系推断：王時正 与 王时中 为同胞（CBDB 记「兄」），王时中 之父／母即 王時正 之父／母。
          source:
            id: s_A3LkW0PoZnpBx369N8yLyn
            source_type: api_record
            title: 中国历代人物传记资料库：王時正（CBDB 262457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json
            external_identifier: CBDB:262457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bVznNBP2hMh6tDWAzv1nG9
        status: active
        display_name: 王钻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SrZKugwWs_4GeKeB4hBxiT
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qg54QBXqwGojtESwYH4vEL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdKI1musIKM7utmPXXqc72
          claim_id: c_SrZKugwWs_4GeKeB4hBxiT
          source_id: s_A3LkW0PoZnpBx369N8yLyn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68328 王時中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A3LkW0PoZnpBx369N8yLyn
            source_type: api_record
            title: 中国历代人物传记资料库：王時正（CBDB 262457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json
            external_identifier: CBDB:262457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
---

# 王時正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時正，明人物。弘治三年進士，籍贯黃縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 262457） | accepted |
| name.primary | 王時正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVznNBP2hMh6tDWAzv1nG9 | 王钻 | accepted |
| other | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時正（CBDB 262457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262457&o=json)
