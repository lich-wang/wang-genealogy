---
schema: wang-person/v1
id: p_3SsKRJx7NikxsZcGKGQPMX
status: active
merged_into: null
display_name: 王命賞
cbdb_id: 216552
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5MqJhrWKkzQ8bCnYfPuhRZ
        subject_person_id: p_3SsKRJx7NikxsZcGKGQPMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命賞，明人物。萬曆五年進士，籍贯廬陵，入仕監生。（中国历代人物传记资料库 CBDB 216552）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_a9l7EDg8J03ENUoQButW5p
          claim_id: c_5MqJhrWKkzQ8bCnYfPuhRZ
          source_id: s_j5ECmgYEA4D7W92DMu7Vzb
          stance: supports
          locator: CBDB:216552
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_j5ECmgYEA4D7W92DMu7Vzb
            source_type: api_record
            title: 中国历代人物传记资料库：王命賞（CBDB 216552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216552&o=json
            external_identifier: CBDB:216552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7gazyi5KKzc3RSqCXtAGf
        subject_person_id: p_3SsKRJx7NikxsZcGKGQPMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命賞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9RP4MthB58YkjMV4GrxKkF
          claim_id: c_Z7gazyi5KKzc3RSqCXtAGf
          source_id: s_j5ECmgYEA4D7W92DMu7Vzb
          stance: supports
          locator: CBDB:216552
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_byA1pHyJ_DKI-2sBKfjbnz
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3SsKRJx7NikxsZcGKGQPMX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_82o2vzLLAEBo-HXrgmjq7u
          claim_id: c_byA1pHyJ_DKI-2sBKfjbnz
          source_id: s_NKG7-sTR_DfHLF88o2ZHJE
          stance: supports
          locator: CBDB：兄弟 王命爵（206334）之父／母 王文炳
          quotation: null
          interpretation_note: 由兄弟关系推断：王命賞 与 王命爵 为同胞（CBDB 记「兄」），王命爵 之父／母即 王命賞 之父／母。
          source:
            id: s_NKG7-sTR_DfHLF88o2ZHJE
            source_type: api_record
            title: 中国历代人物传记资料库：王命賞（CBDB 216552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216552&o=json
            external_identifier: CBDB:216552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F6K893ZAWfJwH2zn9PeMz7
        status: active
        display_name: 王文炳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U4rrbMKc1dyv44iTvoDYSd
        subject_person_id: p_3SsKRJx7NikxsZcGKGQPMX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yj9ODYXypOWtx2pb4pDXqN
          claim_id: c_U4rrbMKc1dyv44iTvoDYSd
          source_id: s_NKG7-sTR_DfHLF88o2ZHJE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206334 王命爵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NKG7-sTR_DfHLF88o2ZHJE
            source_type: api_record
            title: 中国历代人物传记资料库：王命賞（CBDB 216552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216552&o=json
            external_identifier: CBDB:216552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fSRoLzmGTyVibfPFCP5xFh
        status: active
        display_name: 王命爵
        merged_into_person_id: null
---

# 王命賞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命賞，明人物。萬曆五年進士，籍贯廬陵，入仕監生。（中国历代人物传记资料库 CBDB 216552） | accepted |
| name.primary | 王命賞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F6K893ZAWfJwH2zn9PeMz7 | 王文炳 | accepted |
| other | p_fSRoLzmGTyVibfPFCP5xFh | 王命爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命賞（CBDB 216552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216552&o=json)
