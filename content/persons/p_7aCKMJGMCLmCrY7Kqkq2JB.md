---
schema: wang-person/v1
id: p_7aCKMJGMCLmCrY7Kqkq2JB
status: active
merged_into: null
display_name: 王鑰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_42RAFkC65QPwZTker432F3
        subject_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GHJz3bjhJXBHrfXbJCtG26
          claim_id: c_42RAFkC65QPwZTker432F3
          source_id: s_2Mn7eEiSVZcBBEs8XVWDML
          stance: supports
          locator: CBDB:212644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212644）
          source: &a1
            id: s_2Mn7eEiSVZcBBEs8XVWDML
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 212644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json
            external_identifier: CBDB:212644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xuFGnQyiBUFcnvUa2VGHMF
        subject_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212644）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RCjJetxtkNUCRAh1GIXXgz
          claim_id: c_xuFGnQyiBUFcnvUa2VGHMF
          source_id: s_2Mn7eEiSVZcBBEs8XVWDML
          stance: supports
          locator: CBDB:212644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SHeZwsb2tY_vvpF3T7pxWM
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XOGy_uP7ALSBJZlZjsxIqL
          claim_id: c_SHeZwsb2tY_vvpF3T7pxWM
          source_id: s_CL0uAurCXkfhlbaUWYAlmF
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鑰 之父／母。
          source:
            id: s_CL0uAurCXkfhlbaUWYAlmF
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 212644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json
            external_identifier: CBDB:212644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XSyusiB7GXwQNmzrNDUf4
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4bgl11KXOmdLphSFw8Ebxm
        subject_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YRGily-_Xm18Dur-cX430h
          claim_id: c_4bgl11KXOmdLphSFw8Ebxm
          source_id: s_CL0uAurCXkfhlbaUWYAlmF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CL0uAurCXkfhlbaUWYAlmF
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 212644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json
            external_identifier: CBDB:212644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1XSyusiB7GXwQNmzrNDUf4 | 王謙 | accepted |
| other | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 212644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json)
