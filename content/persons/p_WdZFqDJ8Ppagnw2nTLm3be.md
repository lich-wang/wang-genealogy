---
schema: wang-person/v1
id: p_WdZFqDJ8Ppagnw2nTLm3be
status: active
merged_into: null
display_name: 王繪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iTbcdB1MYCXvQFjq9cn9Y7
        subject_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4KQrhca2ezDGH9zzswi81H
          claim_id: c_iTbcdB1MYCXvQFjq9cn9Y7
          source_id: s_awUZ2ELnfjoyXWVkvj9vnZ
          stance: supports
          locator: CBDB:216223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216223）
          source: &a1
            id: s_awUZ2ELnfjoyXWVkvj9vnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 216223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json
            external_identifier: CBDB:216223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_73Rd8qyACWrQXaV6DjnCas
        subject_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216223）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dwkrr7jYwzzdtj0XW2E6-1
          claim_id: c_73Rd8qyACWrQXaV6DjnCas
          source_id: s_awUZ2ELnfjoyXWVkvj9vnZ
          stance: supports
          locator: CBDB:216223
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tZw2H8hjMtumzHDPLDj6L1
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvgvYdi5cvSQ2PKcwhR6Z9
          claim_id: c_tZw2H8hjMtumzHDPLDj6L1
          source_id: s_HntUWixABTyozdQ5Pi23Mf
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王繪 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王繪 之父／母。
          source:
            id: s_HntUWixABTyozdQ5Pi23Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 216223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json
            external_identifier: CBDB:216223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJyHrTtA8vuQzWweqp45TE
        status: active
        display_name: 王以佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Qj3EMWmqJcDfF5mAP1n1Cj
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NzXUndnFkvENXislr5hEwJ
          claim_id: c_Qj3EMWmqJcDfF5mAP1n1Cj
          source_id: s_HntUWixABTyozdQ5Pi23Mf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HntUWixABTyozdQ5Pi23Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 216223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json
            external_identifier: CBDB:216223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王繪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繪 | accepted |
| bio.summary | 王繪，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| other | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 216223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json)
