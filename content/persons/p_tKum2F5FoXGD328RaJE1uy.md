---
schema: wang-person/v1
id: p_tKum2F5FoXGD328RaJE1uy
status: active
merged_into: null
display_name: 王懋功
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94vW4wc1E7f6LPYfReQu2X
        subject_person_id: p_tKum2F5FoXGD328RaJE1uy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CGHhTNfmgQHGbhrfah8D4F
          claim_id: c_94vW4wc1E7f6LPYfReQu2X
          source_id: s_gfc9ccGUB7cZNPzokAKQHG
          stance: supports
          locator: CBDB:337973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337973）
          source: &a1
            id: s_gfc9ccGUB7cZNPzokAKQHG
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dk8LqsV9mY1nUJHNqCDxLK
        subject_person_id: p_tKum2F5FoXGD328RaJE1uy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋功，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U1-DP6o7iaPf7kQmqsB-7K
          claim_id: c_dk8LqsV9mY1nUJHNqCDxLK
          source_id: s_gfc9ccGUB7cZNPzokAKQHG
          stance: supports
          locator: CBDB:337973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tq-PhFf7D-FaAFgs7OlTIk
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tKum2F5FoXGD328RaJE1uy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTDvYyb94_ho3XrBq87h7e
          claim_id: c_tq-PhFf7D-FaAFgs7OlTIk
          source_id: s_KgkMygrMpS84tqaTXodgJz
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋功 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋功 之父／母。
          source:
            id: s_KgkMygrMpS84tqaTXodgJz
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__0sHQ8f8iErLM-pt6Q_4OG
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tKum2F5FoXGD328RaJE1uy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1HJlfYbALDfEkDpRPmgxG
          claim_id: c__0sHQ8f8iErLM-pt6Q_4OG
          source_id: s_KgkMygrMpS84tqaTXodgJz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KgkMygrMpS84tqaTXodgJz
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋功 | accepted |
| bio.summary | 王懋功，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| other | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋功（CBDB 337973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json)
