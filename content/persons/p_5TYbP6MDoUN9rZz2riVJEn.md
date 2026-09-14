---
schema: wang-person/v1
id: p_5TYbP6MDoUN9rZz2riVJEn
status: active
merged_into: null
display_name: 王組
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SSx7Ja8kqkEEoncu6Huvsb
        subject_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WWyUnvSR4YtDbHaRHU7qxz
          claim_id: c_SSx7Ja8kqkEEoncu6Huvsb
          source_id: s_78gMCykE8ahzwnMmXNeoVQ
          stance: supports
          locator: CBDB:216221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216221）
          source: &a1
            id: s_78gMCykE8ahzwnMmXNeoVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 216221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json
            external_identifier: CBDB:216221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DVQgZnKuswNTM1qtajn2UV
        subject_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216221）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YSSC8XhcOlg2qWTbMpdDyc
          claim_id: c_DVQgZnKuswNTM1qtajn2UV
          source_id: s_78gMCykE8ahzwnMmXNeoVQ
          stance: supports
          locator: CBDB:216221
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JrMaEDhvHbUu-8HwyFN4Sl
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qGSpMAr96F85zlLNp1EKYg
          claim_id: c_JrMaEDhvHbUu-8HwyFN4Sl
          source_id: s_I1HN9NZ8N6i_sM48cgql7g
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王組 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王組 之父／母。
          source:
            id: s_I1HN9NZ8N6i_sM48cgql7g
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 216221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json
            external_identifier: CBDB:216221
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
        id: c_mu8tprhIAgPJtxoB9hDgjU
        subject_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdaIdFojafILT0TbgEPRtp
          claim_id: c_mu8tprhIAgPJtxoB9hDgjU
          source_id: s_I1HN9NZ8N6i_sM48cgql7g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1HN9NZ8N6i_sM48cgql7g
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 216221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json
            external_identifier: CBDB:216221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王組

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王組 | accepted |
| bio.summary | 王組，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| other | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王組（CBDB 216221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json)
