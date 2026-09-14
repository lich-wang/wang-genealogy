---
schema: wang-person/v1
id: p_xNuBMveoJNbM9ZvyqDs2xz
status: active
merged_into: null
display_name: 王瓚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5cfuAgxYuWqDzKpWW6iwE
        subject_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hh9kNvC7mjBAsYuzR7bwB1
          claim_id: c_L5cfuAgxYuWqDzKpWW6iwE
          source_id: s_4nx3v9G9292F3D3PaB6mRC
          stance: supports
          locator: CBDB:230883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230883）
          source: &a1
            id: s_4nx3v9G9292F3D3PaB6mRC
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 230883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json
            external_identifier: CBDB:230883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JcL1FLvtDNXUjgyXqWYHj2
        subject_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230883）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-uwcKHNw3-FQZHPptjp7QP
          claim_id: c_JcL1FLvtDNXUjgyXqWYHj2
          source_id: s_4nx3v9G9292F3D3PaB6mRC
          stance: supports
          locator: CBDB:230883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gI6KGTbUQKmmW6b4LUZ9oa
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MV7JK0PjNBMXIkVxBlybuS
          claim_id: c_gI6KGTbUQKmmW6b4LUZ9oa
          source_id: s_KJZaovp98zd5ZUWdAH6Owz
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓚 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王瓚 之父／母。
          source:
            id: s_KJZaovp98zd5ZUWdAH6Owz
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 230883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json
            external_identifier: CBDB:230883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6tdTGr8WHYZiKQmeHZ5QVe
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ecg0RPUm1nlPJ9KBRyMP5a
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lP_dcAZfmYQ59O-8egO-1X
          claim_id: c_ecg0RPUm1nlPJ9KBRyMP5a
          source_id: s_KJZaovp98zd5ZUWdAH6Owz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KJZaovp98zd5ZUWdAH6Owz
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 230883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json
            external_identifier: CBDB:230883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAKJt6kT5T4F5kcYrF9f6y
        status: active
        display_name: 王玠
        merged_into_person_id: null
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6tdTGr8WHYZiKQmeHZ5QVe | 王宗源 | accepted |
| other | p_EAKJt6kT5T4F5kcYrF9f6y | 王玠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 230883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json)
