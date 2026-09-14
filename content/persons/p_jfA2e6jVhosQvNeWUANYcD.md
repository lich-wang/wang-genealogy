---
schema: wang-person/v1
id: p_jfA2e6jVhosQvNeWUANYcD
status: active
merged_into: null
display_name: 王儒
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kfJ3obrykcwentsv2ZTg7V
        subject_person_id: p_jfA2e6jVhosQvNeWUANYcD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gJ1fgkqfSz7mzUP19tYcqS
          claim_id: c_kfJ3obrykcwentsv2ZTg7V
          source_id: s_8JVJ6V4J8kXGNnSbrbN8E2
          stance: supports
          locator: CBDB:236837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236837）
          source: &a1
            id: s_8JVJ6V4J8kXGNnSbrbN8E2
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XRmzocraLzh3MgkGrYDeHx
        subject_person_id: p_jfA2e6jVhosQvNeWUANYcD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4uCZ310Xtk6MQz8W6LLg2z
          claim_id: c_XRmzocraLzh3MgkGrYDeHx
          source_id: s_8JVJ6V4J8kXGNnSbrbN8E2
          stance: supports
          locator: CBDB:236837
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m1GLjzTIoRzyWxyAoYBd4J
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CiRQLEiR9J2GgNw8phALQs
          claim_id: c_m1GLjzTIoRzyWxyAoYBd4J
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王儒 之父／母。
          source:
            id: s_rIDOS-_zr7GtRGTrOIw75Z
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gnL9YXmgPRD5zGvODy7aQ5
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcLkJOmPdRI255fP78cVCm
          claim_id: c_gnL9YXmgPRD5zGvODy7aQ5
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rIDOS-_zr7GtRGTrOIw75Z
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
    - claim:
        id: c_Ds28viJzWu3ZBb65xQW6LF
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jfA2e6jVhosQvNeWUANYcD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yy1-Fbu48musxjB4n_1xM5
          claim_id: c_Ds28viJzWu3ZBb65xQW6LF
          source_id: s_rIDOS-_zr7GtRGTrOIw75Z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rIDOS-_zr7GtRGTrOIw75Z
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 236837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json
            external_identifier: CBDB:236837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |
| other | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 236837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236837&o=json)
