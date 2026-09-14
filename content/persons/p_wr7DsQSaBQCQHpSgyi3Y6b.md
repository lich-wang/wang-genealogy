---
schema: wang-person/v1
id: p_wr7DsQSaBQCQHpSgyi3Y6b
status: active
merged_into: null
display_name: 王宗燮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1cxHD3wLoKxpALGV1gWYHB
        subject_person_id: p_wr7DsQSaBQCQHpSgyi3Y6b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PFS9B7ib4Z8w4B37RuCcNB
          claim_id: c_1cxHD3wLoKxpALGV1gWYHB
          source_id: s_snXKMNht1EB3JA1AQgDBoK
          stance: supports
          locator: CBDB:693298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693298）
          source: &a1
            id: s_snXKMNht1EB3JA1AQgDBoK
            source_type: api_record
            title: 中国历代人物传记资料库：王宗燮（CBDB 693298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693298&o=json
            external_identifier: CBDB:693298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDPt47utieEdQ1aPhExBeY
        subject_person_id: p_wr7DsQSaBQCQHpSgyi3Y6b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗燮，清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 693298）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nM1BQVL8vAyehgdBh1PNdF
          claim_id: c_EDPt47utieEdQ1aPhExBeY
          source_id: s_snXKMNht1EB3JA1AQgDBoK
          stance: supports
          locator: CBDB:693298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3qCrekKjGD8G7O2kCsVVna
        subject_person_id: p_Rw1Ey9dDZsu3Kv48NiqzU1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wr7DsQSaBQCQHpSgyi3Y6b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ll5PG3ds5aUsi9Qr3YwkD0
          claim_id: c_3qCrekKjGD8G7O2kCsVVna
          source_id: s_YrMDlgYsa-eKPFuWrL71tw
          stance: supports
          locator: CBDB 亲属：長兄（KinPerson 693298 王宗燮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YrMDlgYsa-eKPFuWrL71tw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗熙（CBDB 693296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693296&o=json
            external_identifier: CBDB:693296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rw1Ey9dDZsu3Kv48NiqzU1
        status: active
        display_name: 王宗熙
        merged_into_person_id: null
---

# 王宗燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗燮 | accepted |
| bio.summary | 王宗燮，清人物。籍贯吳縣。（中国历代人物传记资料库 CBDB 693298） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_Rw1Ey9dDZsu3Kv48NiqzU1 | 王宗熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗熙（CBDB 693296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693296&o=json)
- [中国历代人物传记资料库：王宗燮（CBDB 693298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693298&o=json)
