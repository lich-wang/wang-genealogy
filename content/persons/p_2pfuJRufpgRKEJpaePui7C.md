---
schema: wang-person/v1
id: p_2pfuJRufpgRKEJpaePui7C
status: active
merged_into: null
display_name: 王彥輝
cbdb_id: 254112
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqFyKMK6yHig5Vpy6QUX7a
        subject_person_id: p_2pfuJRufpgRKEJpaePui7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥輝，明人物。建文二年殿試進士，籍贯南昌。（中国历代人物传记资料库 CBDB 254112）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cqbS30bhMCYdfEYOcaRKhz
          claim_id: c_GqFyKMK6yHig5Vpy6QUX7a
          source_id: s_3WWQiBoBkJfnJ6PRMvwWYH
          stance: supports
          locator: CBDB:254112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3WWQiBoBkJfnJ6PRMvwWYH
            source_type: api_record
            title: 中国历代人物传记资料库：王彥輝（CBDB 254112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254112&o=json
            external_identifier: CBDB:254112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SyNLbtZxJteGNMQMKm4odX
        subject_person_id: p_2pfuJRufpgRKEJpaePui7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gjsBv6Hg5p5ZEYSS7qvxUd
          claim_id: c_SyNLbtZxJteGNMQMKm4odX
          source_id: s_3WWQiBoBkJfnJ6PRMvwWYH
          stance: supports
          locator: CBDB:254112
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sF987AcMxX-QBzb62C9Dd-
        subject_person_id: p_HuYEH2YSebAHXaYh9GTn72
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2pfuJRufpgRKEJpaePui7C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YlWLJRbCbM4zbMi3WFjDhh
          claim_id: c_sF987AcMxX-QBzb62C9Dd-
          source_id: s_MC968GsYGjHrdxEkZtujsZ
          stance: supports
          locator: CBDB：兄弟 王高（126625）之父／母 王繼和
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥輝 与 王高 为同胞（CBDB 记「兄」），王高 之父／母即 王彥輝 之父／母。
          source:
            id: s_MC968GsYGjHrdxEkZtujsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥輝（CBDB 254112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254112&o=json
            external_identifier: CBDB:254112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HuYEH2YSebAHXaYh9GTn72
        status: active
        display_name: 王繼和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_si-yJKIIhWYGKjehhx6NWZ
        subject_person_id: p_2pfuJRufpgRKEJpaePui7C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AUQVWk8JE4APmBfj8pSMKj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zArwY6tRoQ6n6lLuBP1De_
          claim_id: c_si-yJKIIhWYGKjehhx6NWZ
          source_id: s_MC968GsYGjHrdxEkZtujsZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126625 王高）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MC968GsYGjHrdxEkZtujsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥輝（CBDB 254112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254112&o=json
            external_identifier: CBDB:254112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUQVWk8JE4APmBfj8pSMKj
        status: active
        display_name: 王高
        merged_into_person_id: null
---

# 王彥輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥輝，明人物。建文二年殿試進士，籍贯南昌。（中国历代人物传记资料库 CBDB 254112） | accepted |
| name.primary | 王彥輝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HuYEH2YSebAHXaYh9GTn72 | 王繼和 | accepted |
| other | p_AUQVWk8JE4APmBfj8pSMKj | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥輝（CBDB 254112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254112&o=json)
