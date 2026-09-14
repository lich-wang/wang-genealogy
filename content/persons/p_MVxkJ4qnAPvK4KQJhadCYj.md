---
schema: wang-person/v1
id: p_MVxkJ4qnAPvK4KQJhadCYj
status: active
merged_into: null
display_name: 王元蘭
cbdb_id: 235480
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zELFqwtt3B7xKcPto41tp2
        subject_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元蘭，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235480）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MZ0m78v8TgYp79Vv7Jurl_
          claim_id: c_zELFqwtt3B7xKcPto41tp2
          source_id: s_auycmc1s3jagoefuGpW6J3
          stance: supports
          locator: CBDB:235480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_auycmc1s3jagoefuGpW6J3
            source_type: api_record
            title: 中国历代人物传记资料库：王元蘭（CBDB 235480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json
            external_identifier: CBDB:235480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDnbGu1mRmotNY45J179EZ
        subject_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ftNLLnAQAqHXnc1tkjrkHa
          claim_id: c_KDnbGu1mRmotNY45J179EZ
          source_id: s_auycmc1s3jagoefuGpW6J3
          stance: supports
          locator: CBDB:235480
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1Jjmw494_2x8WDPc8aujQ6
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kYGmBt9lrerWEtn_Un8aBC
          claim_id: c_1Jjmw494_2x8WDPc8aujQ6
          source_id: s__3AccALKjeRg8dIDnVJ0yT
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元蘭 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元蘭 之父／母。
          source:
            id: s__3AccALKjeRg8dIDnVJ0yT
            source_type: api_record
            title: 中国历代人物传记资料库：王元蘭（CBDB 235480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json
            external_identifier: CBDB:235480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2Mc8v4ohDD1kMXkFCQufHN
        subject_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UsTkGludvLvKucJG_4s91_
          claim_id: c_2Mc8v4ohDD1kMXkFCQufHN
          source_id: s__3AccALKjeRg8dIDnVJ0yT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__3AccALKjeRg8dIDnVJ0yT
            source_type: api_record
            title: 中国历代人物传记资料库：王元蘭（CBDB 235480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json
            external_identifier: CBDB:235480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
---

# 王元蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元蘭，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235480） | accepted |
| name.primary | 王元蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| other | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元蘭（CBDB 235480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json)
