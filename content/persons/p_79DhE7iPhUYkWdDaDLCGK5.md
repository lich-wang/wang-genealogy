---
schema: wang-person/v1
id: p_79DhE7iPhUYkWdDaDLCGK5
status: active
merged_into: null
display_name: 王琳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dYFAL1xvXhBctvocLvFBYS
        subject_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D8eMo2U96JK3ievMJcd413
          claim_id: c_dYFAL1xvXhBctvocLvFBYS
          source_id: s_ho7fhv3XLHBYJkXQjQ6L75
          stance: supports
          locator: CBDB:237509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237509）
          source: &a1
            id: s_ho7fhv3XLHBYJkXQjQ6L75
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 237509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json
            external_identifier: CBDB:237509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V1Ehr695YCxZzAuuP7CNVv
        subject_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237509）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdSlttEX8DNiVL9JHXZJQ1
          claim_id: c_V1Ehr695YCxZzAuuP7CNVv
          source_id: s_ho7fhv3XLHBYJkXQjQ6L75
          stance: supports
          locator: CBDB:237509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jQUdg3ls5qriZFLzf1pVcS
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q02y9i2Q2wRlv4-JywIXYc
          claim_id: c_jQUdg3ls5qriZFLzf1pVcS
          source_id: s__zOYzfOYWP26grC2HsLVZK
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王琳 之父／母。
          source:
            id: s__zOYzfOYWP26grC2HsLVZK
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 237509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json
            external_identifier: CBDB:237509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lj8WT4nJBhsqQXhWW65SRH
        status: active
        display_name: 王志善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HmHXaQs_XBX4WpbLdLOE6A
        subject_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7VGbjqitr48POusZgFtbl
          claim_id: c_HmHXaQs_XBX4WpbLdLOE6A
          source_id: s__zOYzfOYWP26grC2HsLVZK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__zOYzfOYWP26grC2HsLVZK
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 237509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json
            external_identifier: CBDB:237509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V99Mmn5gsgVZ4CwJWSpRRc
        status: active
        display_name: 王賓
        merged_into_person_id: null
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237509） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lj8WT4nJBhsqQXhWW65SRH | 王志善 | accepted |
| other | p_V99Mmn5gsgVZ4CwJWSpRRc | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 237509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json)
