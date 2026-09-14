---
schema: wang-person/v1
id: p_FqhZ4oxaHvpQE9TXe9sD9L
status: active
merged_into: null
display_name: 王邦秀
cbdb_id: 214610
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Td8AUAG5Fd2aCi9TJoRopG
        subject_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦秀，明人物。萬曆二年進士，籍贯鄜州。（中国历代人物传记资料库 CBDB 214610）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7wMW1XeMCH_Oov9o8hSsMv
          claim_id: c_Td8AUAG5Fd2aCi9TJoRopG
          source_id: s_5uR2SNN3E4Z7ijGS69F52F
          stance: supports
          locator: CBDB:214610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5uR2SNN3E4Z7ijGS69F52F
            source_type: api_record
            title: 中国历代人物传记资料库：王邦秀（CBDB 214610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json
            external_identifier: CBDB:214610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z1t221ndsf6ouK22VDdMFJ
        subject_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Jg1cCXqNK5dqATKPHLmgw1
          claim_id: c_Z1t221ndsf6ouK22VDdMFJ
          source_id: s_5uR2SNN3E4Z7ijGS69F52F
          stance: supports
          locator: CBDB:214610
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qkcXxYsU9t21gy6R6PQfUZ
        subject_person_id: p_p52NPJ3XEL4EMz8XmEty7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4SsACjO3Qiysw9c5juW1P
          claim_id: c_qkcXxYsU9t21gy6R6PQfUZ
          source_id: s_PgDmBrnh47gQ3kQu2NW13H
          stance: supports
          locator: CBDB：兄弟 王邦俊（206190）之父／母 王瀾
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦秀 与 王邦俊 为同胞（CBDB 记「兄」），王邦俊 之父／母即 王邦秀 之父／母。
          source:
            id: s_PgDmBrnh47gQ3kQu2NW13H
            source_type: api_record
            title: 中国历代人物传记资料库：王邦秀（CBDB 214610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json
            external_identifier: CBDB:214610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p52NPJ3XEL4EMz8XmEty7C
        status: active
        display_name: 王瀾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JxZ2MZ3SvrCQHMkKDXpAMZ
        subject_person_id: p_FqhZ4oxaHvpQE9TXe9sD9L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RRZuE21H2Z9728UGo3kUPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_Egvo-Ug7QiMy5K8PH7oH
          claim_id: c_JxZ2MZ3SvrCQHMkKDXpAMZ
          source_id: s_PgDmBrnh47gQ3kQu2NW13H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206190 王邦俊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PgDmBrnh47gQ3kQu2NW13H
            source_type: api_record
            title: 中国历代人物传记资料库：王邦秀（CBDB 214610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json
            external_identifier: CBDB:214610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RRZuE21H2Z9728UGo3kUPT
        status: active
        display_name: 王邦俊
        merged_into_person_id: null
---

# 王邦秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王邦秀，明人物。萬曆二年進士，籍贯鄜州。（中国历代人物传记资料库 CBDB 214610） | accepted |
| name.primary | 王邦秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p52NPJ3XEL4EMz8XmEty7C | 王瀾 | accepted |
| other | p_RRZuE21H2Z9728UGo3kUPT | 王邦俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦秀（CBDB 214610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214610&o=json)
