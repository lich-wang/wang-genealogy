---
schema: wang-person/v1
id: p_JdFR8yxrtP83oNDQKZ1JW5
status: active
merged_into: null
display_name: 王三格
cbdb_id: 214405
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeApQV1BVZ6j3QdUNtjUCG
        subject_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三格，明人物。萬曆二年進士，籍贯安平。（中国历代人物传记资料库 CBDB 214405）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UezwzFQK3YlR4-RocHgeob
          claim_id: c_AeApQV1BVZ6j3QdUNtjUCG
          source_id: s_RTA3wh95tYUMQYuX3nfhAu
          stance: supports
          locator: CBDB:214405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RTA3wh95tYUMQYuX3nfhAu
            source_type: api_record
            title: 中国历代人物传记资料库：王三格（CBDB 214405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json
            external_identifier: CBDB:214405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S2t7vC8hPe4HrBAWXUnPQg
        subject_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KSsEpm2Cr2kGQAFnouV6mr
          claim_id: c_S2t7vC8hPe4HrBAWXUnPQg
          source_id: s_RTA3wh95tYUMQYuX3nfhAu
          stance: supports
          locator: CBDB:214405
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NjsSmOLNJVA6bloUsSRnIw
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I3VaJW3Vd9KyMGVA7KIJVu
          claim_id: c_NjsSmOLNJVA6bloUsSRnIw
          source_id: s_ryCewhe7TgUtlT8PbBwhFF
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三格 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三格 之父／母。
          source:
            id: s_ryCewhe7TgUtlT8PbBwhFF
            source_type: api_record
            title: 中国历代人物传记资料库：王三格（CBDB 214405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json
            external_identifier: CBDB:214405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMZVjztWKmHmBJ3VeqqESt
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ScrUnCfSHpTl9NyIWhsvmh
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JdFR8yxrtP83oNDQKZ1JW5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQI0gT-KeH-gKzMsMR4GZX
          claim_id: c_ScrUnCfSHpTl9NyIWhsvmh
          source_id: s_ryCewhe7TgUtlT8PbBwhFF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ryCewhe7TgUtlT8PbBwhFF
            source_type: api_record
            title: 中国历代人物传记资料库：王三格（CBDB 214405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json
            external_identifier: CBDB:214405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
---

# 王三格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三格，明人物。萬曆二年進士，籍贯安平。（中国历代人物传记资料库 CBDB 214405） | accepted |
| name.primary | 王三格 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMZVjztWKmHmBJ3VeqqESt | 王遜 | accepted |
| other | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三格（CBDB 214405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214405&o=json)
