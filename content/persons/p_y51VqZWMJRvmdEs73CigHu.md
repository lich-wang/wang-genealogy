---
schema: wang-person/v1
id: p_y51VqZWMJRvmdEs73CigHu
status: active
merged_into: null
display_name: 王鑅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hKPPemS951No7GCbt2jnau
        subject_person_id: p_y51VqZWMJRvmdEs73CigHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DL61n9Wb88mVXQNnN1Qy2
          claim_id: c_hKPPemS951No7GCbt2jnau
          source_id: s_n6KHmzUi8GzE52Fyv537oF
          stance: supports
          locator: CBDB:271363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271363）
          source: &a1
            id: s_n6KHmzUi8GzE52Fyv537oF
            source_type: api_record
            title: 中国历代人物传记资料库：王鑅（CBDB 271363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json
            external_identifier: CBDB:271363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zt5MgSQ8uwYRabJdYwrWuT
        subject_person_id: p_y51VqZWMJRvmdEs73CigHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑅，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4oViacj8YTNayMg_8xlNEL
          claim_id: c_Zt5MgSQ8uwYRabJdYwrWuT
          source_id: s_n6KHmzUi8GzE52Fyv537oF
          stance: supports
          locator: CBDB:271363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QyDE7hTnOcplPQB4u9NJ2y
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y51VqZWMJRvmdEs73CigHu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_n6yR1QrD9JO_UleksdAN
          claim_id: c_QyDE7hTnOcplPQB4u9NJ2y
          source_id: s_71nP9kKSTQBMOwXEu1gHNE
          stance: supports
          locator: CBDB：兄弟 王鍇（201376）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑅 与 王鍇 为同胞（CBDB 记「兄」），王鍇 之父／母即 王鑅 之父／母。
          source:
            id: s_71nP9kKSTQBMOwXEu1gHNE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑅（CBDB 271363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json
            external_identifier: CBDB:271363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JYHQSHbJNEj1qbs1Pwnvij
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_s1qMcq5XcwLF9_7ndnLUnI
        subject_person_id: p_y51VqZWMJRvmdEs73CigHu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P75ZowtcNPMtmtTypKrE49
          claim_id: c_s1qMcq5XcwLF9_7ndnLUnI
          source_id: s_71nP9kKSTQBMOwXEu1gHNE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201376 王鍇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_71nP9kKSTQBMOwXEu1gHNE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑅（CBDB 271363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json
            external_identifier: CBDB:271363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zpBDmxnkNUmk6akFW8LRFz
        status: active
        display_name: 王鍇
        merged_into_person_id: null
---

# 王鑅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑅 | accepted |
| bio.summary | 王鑅，明人物。弘治十五年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 271363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JYHQSHbJNEj1qbs1Pwnvij | 王紀 | accepted |
| other | p_zpBDmxnkNUmk6akFW8LRFz | 王鍇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑅（CBDB 271363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271363&o=json)
