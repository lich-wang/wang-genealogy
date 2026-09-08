---
schema: wang-person/v1
id: p_FrJEqY9jd798BiS6FFwQdX
status: active
merged_into: null
display_name: 王維瀚
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hJhaQeEB3qPCjwEyp0_SVQ
        subject_person_id: p_FrJEqY9jd798BiS6FFwQdX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維瀚，清人物。中国历代人物传记资料库（CBDB）以人物编号 526718 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcg1Otv-PjlDSjLBKs3qV5
          claim_id: c_hJhaQeEB3qPCjwEyp0_SVQ
          source_id: s_rKKTZsuzC3jvaeQorpU6B3
          stance: supports
          locator: CBDB:526718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rKKTZsuzC3jvaeQorpU6B3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王維瀚（526718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526718&o=json
            external_identifier: CBDB:526718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:25.264Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hvJ8JzWSzrKMVRJacfCpWL
        subject_person_id: p_FrJEqY9jd798BiS6FFwQdX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J59Bf5j332PoTPmvfk4rh5
          claim_id: c_hvJ8JzWSzrKMVRJacfCpWL
          source_id: s_rKKTZsuzC3jvaeQorpU6B3
          stance: supports
          locator: CBDB:526718
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2CMEKy9XxJ3WwY8ftqDpB5
        subject_person_id: p_ZbD99C4BekXwqC5kDUcsjZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_FrJEqY9jd798BiS6FFwQdX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nW22K5kk5EKEhFNfM5inwB
          claim_id: c_2CMEKy9XxJ3WwY8ftqDpB5
          source_id: s_jS8NjftuFRD38h7YN8QML7
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_jS8NjftuFRD38h7YN8QML7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王必達（69135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69135&o=json
            external_identifier: CBDB:69135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.371Z
            metadata_json: null
      object_person:
        id: p_ZbD99C4BekXwqC5kDUcsjZ
        status: active
        display_name: 王必达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王維瀚，清人物。中国历代人物传记资料库（CBDB）以人物编号 526718 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王維瀚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZbD99C4BekXwqC5kDUcsjZ | 王必达 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：王必達（69135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69135&o=json)
- [CBDB 中国历代人物传记资料库：王維瀚（526718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526718&o=json)
