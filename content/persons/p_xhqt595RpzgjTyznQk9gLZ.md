---
schema: wang-person/v1
id: p_xhqt595RpzgjTyznQk9gLZ
status: active
merged_into: null
display_name: 王法
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AVwx7NiLU9F6Yq9MmMKeHB
        subject_person_id: p_xhqt595RpzgjTyznQk9gLZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Szwn92jAadEGn42NqinwLp
          claim_id: c_AVwx7NiLU9F6Yq9MmMKeHB
          source_id: s_9HgCgJy8dJEZrBhBSBMmgT
          stance: supports
          locator: CBDB:282007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282007）
          source: &a1
            id: s_9HgCgJy8dJEZrBhBSBMmgT
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 282007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json
            external_identifier: CBDB:282007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y8e1kDXJy75i1QoPFzfXT8
        subject_person_id: p_xhqt595RpzgjTyznQk9gLZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_us-VUcR6-CyiJMfZVXrjfo
          claim_id: c_y8e1kDXJy75i1QoPFzfXT8
          source_id: s_9HgCgJy8dJEZrBhBSBMmgT
          stance: supports
          locator: CBDB:282007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_34_ewbGh9qBykxEqRyGgjF
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xhqt595RpzgjTyznQk9gLZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NIBjHZDH2SiftBx_It37s4
          claim_id: c_34_ewbGh9qBykxEqRyGgjF
          source_id: s_Tse_sZF9Ypu3H2uZk1hy-L
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王法 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王法 之父／母。
          source:
            id: s_Tse_sZF9Ypu3H2uZk1hy-L
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 282007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json
            external_identifier: CBDB:282007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0pty8pF94yQvF4FPh_MOJt
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xhqt595RpzgjTyznQk9gLZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ph0gUBoi7lhMfrvKkT0tJ4
          claim_id: c_0pty8pF94yQvF4FPh_MOJt
          source_id: s_Tse_sZF9Ypu3H2uZk1hy-L
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tse_sZF9Ypu3H2uZk1hy-L
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 282007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json
            external_identifier: CBDB:282007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| bio.summary | 王法，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| other | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王法（CBDB 282007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json)
