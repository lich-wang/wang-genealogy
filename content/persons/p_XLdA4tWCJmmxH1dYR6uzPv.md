---
schema: wang-person/v1
id: p_XLdA4tWCJmmxH1dYR6uzPv
status: active
merged_into: null
display_name: 王道謙
cbdb_id: 223218
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1um3eeHMDyy3RuuKJdmjDc
        subject_person_id: p_XLdA4tWCJmmxH1dYR6uzPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道謙，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223218）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_egitlZSDtrUKfKvr2Zk_mr
          claim_id: c_1um3eeHMDyy3RuuKJdmjDc
          source_id: s_3dBAB3imyhF2cU8xVUviGG
          stance: supports
          locator: CBDB:223218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3dBAB3imyhF2cU8xVUviGG
            source_type: api_record
            title: 中国历代人物传记资料库：王道謙（CBDB 223218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json
            external_identifier: CBDB:223218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvfXqJv8gJ8XEUkF1FRAG7
        subject_person_id: p_XLdA4tWCJmmxH1dYR6uzPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4iLRSg8kbUw5EL9tA1LbGK
          claim_id: c_FvfXqJv8gJ8XEUkF1FRAG7
          source_id: s_3dBAB3imyhF2cU8xVUviGG
          stance: supports
          locator: CBDB:223218
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5roO5T2uuh5jPczO3OtiTp
        subject_person_id: p_nrgvXCkYedEAAAukDFwR1j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XLdA4tWCJmmxH1dYR6uzPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oESlhtTWG13Z3tUfaBazeg
          claim_id: c_5roO5T2uuh5jPczO3OtiTp
          source_id: s_Sz0C2DkWuVhDGisiBcV5RC
          stance: supports
          locator: CBDB：兄弟 王道顯（206783）之父／母 王三錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王道謙 与 王道顯 为同胞（CBDB 记「兄」），王道顯 之父／母即 王道謙 之父／母。
          source:
            id: s_Sz0C2DkWuVhDGisiBcV5RC
            source_type: api_record
            title: 中国历代人物传记资料库：王道謙（CBDB 223218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json
            external_identifier: CBDB:223218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nrgvXCkYedEAAAukDFwR1j
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yqBD9nY1oEqZ25kD3kxtp1
        subject_person_id: p_7J92XTKdKB1ZCqpjcGmNN6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XLdA4tWCJmmxH1dYR6uzPv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dWutbuSpjqqkeR2imaPPA
          claim_id: c_yqBD9nY1oEqZ25kD3kxtp1
          source_id: s_Sz0C2DkWuVhDGisiBcV5RC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206783 王道顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sz0C2DkWuVhDGisiBcV5RC
            source_type: api_record
            title: 中国历代人物传记资料库：王道謙（CBDB 223218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json
            external_identifier: CBDB:223218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7J92XTKdKB1ZCqpjcGmNN6
        status: active
        display_name: 王道顯
        merged_into_person_id: null
---

# 王道謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道謙，明人物。萬曆十一年進士，籍贯同安。（中国历代人物传记资料库 CBDB 223218） | accepted |
| name.primary | 王道謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nrgvXCkYedEAAAukDFwR1j | 王三錫 | accepted |
| other | p_7J92XTKdKB1ZCqpjcGmNN6 | 王道顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道謙（CBDB 223218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223218&o=json)
