---
schema: wang-person/v1
id: p_iYGxGBVaCXJEW5CYUUJwPy
status: active
merged_into: null
display_name: 王賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KhA6UisDp39Hqu7CoNuTq3
        subject_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MrXuZwFeJkf2M1dKzrS62C
          claim_id: c_KhA6UisDp39Hqu7CoNuTq3
          source_id: s_oQSuFWn9rUBtD4gfDr8WXa
          stance: supports
          locator: CBDB:262637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262637）
          source: &a1
            id: s_oQSuFWn9rUBtD4gfDr8WXa
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json
            external_identifier: CBDB:262637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1kiU5SFrQvS8uYQoBTBsgc
        subject_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。景泰五年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 262637）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cKC5tUDfvgb3AFXz_fj-oL
          claim_id: c_1kiU5SFrQvS8uYQoBTBsgc
          source_id: s_oQSuFWn9rUBtD4gfDr8WXa
          stance: supports
          locator: CBDB:262637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pJ3-eJVdwLrlJoSmTv_ozb
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MdxGaiL2cMczPOqOqQsHkR
          claim_id: c_pJ3-eJVdwLrlJoSmTv_ozb
          source_id: s_VhkGbj54cPR4RbKhOPbwhj
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王賢 之父／母。
          source:
            id: s_VhkGbj54cPR4RbKhOPbwhj
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json
            external_identifier: CBDB:262637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_psesBqxpFDwKqz2PBTA4dC
        status: active
        display_name: 王宗器
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XXH7AVIht-ZxsDCey2VxUu
        subject_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lciaj--MQ7RTKG1nIissqW
          claim_id: c_XXH7AVIht-ZxsDCey2VxUu
          source_id: s_VhkGbj54cPR4RbKhOPbwhj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198362 王春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VhkGbj54cPR4RbKhOPbwhj
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json
            external_identifier: CBDB:262637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cnxHgvNWzCNiTbu6SVUA3o
        status: active
        display_name: 王春
        merged_into_person_id: null
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。景泰五年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 262637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_psesBqxpFDwKqz2PBTA4dC | 王宗器 | accepted |
| other | p_cnxHgvNWzCNiTbu6SVUA3o | 王春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 262637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json)
