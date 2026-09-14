---
schema: wang-person/v1
id: p_dfeoxAWu5qVKsU6vsvN5Cg
status: active
merged_into: null
display_name: 王士策
cbdb_id: 293430
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eZoFB3CYMJsx1CPit4L516
        subject_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士策，明人物。嘉靖十一年進士，籍贯甌寧，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 293430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-y2u-gLiXrWLzz8tNzG6S_
          claim_id: c_eZoFB3CYMJsx1CPit4L516
          source_id: s_AY8DEGQU16zp2jiALdrmSg
          stance: supports
          locator: CBDB:293430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AY8DEGQU16zp2jiALdrmSg
            source_type: api_record
            title: 中国历代人物传记资料库：王士策（CBDB 293430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json
            external_identifier: CBDB:293430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fntRkLvUNARyF3TFwarFib
        subject_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ffDH4NQ3RAo9oojgf7QCaL
          claim_id: c_fntRkLvUNARyF3TFwarFib
          source_id: s_AY8DEGQU16zp2jiALdrmSg
          stance: supports
          locator: CBDB:293430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QttzFVBUAV7eGK9CEnhP7Z
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bouNPyg4uJs_a561B9O9CG
          claim_id: c_QttzFVBUAV7eGK9CEnhP7Z
          source_id: s_UiMFFA9AJEUGBPhF1lvv4E
          stance: supports
          locator: CBDB：兄弟 王應詔（202740）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王士策 与 王應詔 为同胞（CBDB 记「兄」），王應詔 之父／母即 王士策 之父／母。
          source:
            id: s_UiMFFA9AJEUGBPhF1lvv4E
            source_type: api_record
            title: 中国历代人物传记资料库：王士策（CBDB 293430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json
            external_identifier: CBDB:293430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5B4suypXr1H38m3G8Gpz1b
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jz4QyyA2m04kxV88N4Uqed
        subject_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5obIFlCaghf88tcqSJhKOq
          claim_id: c_Jz4QyyA2m04kxV88N4Uqed
          source_id: s_UiMFFA9AJEUGBPhF1lvv4E
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202740 王應詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UiMFFA9AJEUGBPhF1lvv4E
            source_type: api_record
            title: 中国历代人物传记资料库：王士策（CBDB 293430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json
            external_identifier: CBDB:293430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
---

# 王士策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士策，明人物。嘉靖十一年進士，籍贯甌寧，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 293430） | accepted |
| name.primary | 王士策 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5B4suypXr1H38m3G8Gpz1b | 王貴 | accepted |
| other | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士策（CBDB 293430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json)
