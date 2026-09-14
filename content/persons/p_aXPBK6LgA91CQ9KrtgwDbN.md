---
schema: wang-person/v1
id: p_aXPBK6LgA91CQ9KrtgwDbN
status: active
merged_into: null
display_name: 王體乾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8VYEEDm7nDBYFVMCagvrz
        subject_person_id: p_aXPBK6LgA91CQ9KrtgwDbN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HQFVBys8QAqqzBWThkosN8
          claim_id: c_i8VYEEDm7nDBYFVMCagvrz
          source_id: s_Pfj5zcG6C9eaXYBNAS7aQ8
          stance: supports
          locator: CBDB:334176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334176）
          source: &a1
            id: s_Pfj5zcG6C9eaXYBNAS7aQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 334176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json
            external_identifier: CBDB:334176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVrQEMPjkGHLEudkkUBu43
        subject_person_id: p_aXPBK6LgA91CQ9KrtgwDbN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體乾，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l9MhqFy05xHHYepPJTqFcn
          claim_id: c_uVrQEMPjkGHLEudkkUBu43
          source_id: s_Pfj5zcG6C9eaXYBNAS7aQ8
          stance: supports
          locator: CBDB:334176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RgeJaOdJV54i1SmKm5Megi
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aXPBK6LgA91CQ9KrtgwDbN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jj5q_WvtrzJwOdZcN85EXS
          claim_id: c_RgeJaOdJV54i1SmKm5Megi
          source_id: s_kC_OjskgomyODoDhpffB8b
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體乾 与 王體復 为同胞（CBDB 记「弟」），王體復 之父／母即 王體乾 之父／母。
          source:
            id: s_kC_OjskgomyODoDhpffB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 334176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json
            external_identifier: CBDB:334176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9KuNRr8o75Vr36yjwDeyAm
        status: active
        display_name: 王應時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6BWRaqhGtPGodTrCKp_H9X
        subject_person_id: p_Que1Sc9ugp524zabUcC6Bk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aXPBK6LgA91CQ9KrtgwDbN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPamqSvotcMG-HECJetqGA
          claim_id: c_6BWRaqhGtPGodTrCKp_H9X
          source_id: s_kC_OjskgomyODoDhpffB8b
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205493 王體復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kC_OjskgomyODoDhpffB8b
            source_type: api_record
            title: 中国历代人物传记资料库：王體乾（CBDB 334176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json
            external_identifier: CBDB:334176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Que1Sc9ugp524zabUcC6Bk
        status: active
        display_name: 王體復
        merged_into_person_id: null
---

# 王體乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體乾 | accepted |
| bio.summary | 王體乾，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9KuNRr8o75Vr36yjwDeyAm | 王應時 | accepted |
| other | p_Que1Sc9ugp524zabUcC6Bk | 王體復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王體乾（CBDB 334176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334176&o=json)
