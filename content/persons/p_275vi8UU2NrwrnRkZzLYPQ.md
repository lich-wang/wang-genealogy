---
schema: wang-person/v1
id: p_275vi8UU2NrwrnRkZzLYPQ
status: active
merged_into: null
display_name: 王從政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fAiwGEkJe1tQQgvmBWuxg5
        subject_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CeN5hrRANYP8zECs6U8KPN
          claim_id: c_fAiwGEkJe1tQQgvmBWuxg5
          source_id: s_d89gjmw8i6mSUtCmkfdjfF
          stance: supports
          locator: CBDB:231571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231571）
          source: &a1
            id: s_d89gjmw8i6mSUtCmkfdjfF
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LADtCNeCR9Hh86CvmuPhRX
        subject_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政，明人物。宣德八年進士，籍贯大城，入仕考上會試/貢士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 231571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Es6aAIFzhhzo_D8B2lG5u2
          claim_id: c_LADtCNeCR9Hh86CvmuPhRX
          source_id: s_d89gjmw8i6mSUtCmkfdjfF
          stance: supports
          locator: CBDB:231571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YhpyKX6RFHPVa2EG-T1AV8
        subject_person_id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBidPd4idgK0lbprpFbN_P
          claim_id: c_YhpyKX6RFHPVa2EG-T1AV8
          source_id: s_7FS9xZrI2oV90M4LvQ2KcN
          stance: supports
          locator: CBDB：兄弟 王亮（207345）之父／母 王甫林
          quotation: null
          interpretation_note: 由兄弟关系推断：王從政 与 王亮 为同胞（CBDB 记「弟」），王亮 之父／母即 王從政 之父／母。
          source:
            id: s_7FS9xZrI2oV90M4LvQ2KcN
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jn7Z5DoHyCUh3Tr3UBMSXH
        status: active
        display_name: 王甫林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YqVmWXc1iMwjAYlAqlsqLn
        subject_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_275vi8UU2NrwrnRkZzLYPQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ix4NEmDya0tyo0Pn1GufY_
          claim_id: c_YqVmWXc1iMwjAYlAqlsqLn
          source_id: s_7FS9xZrI2oV90M4LvQ2KcN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207345 王亮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7FS9xZrI2oV90M4LvQ2KcN
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 231571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json
            external_identifier: CBDB:231571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1GhPFs5m4G2BPwjpU26jtR
        status: active
        display_name: 王亮
        merged_into_person_id: null
---

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| bio.summary | 王從政，明人物。宣德八年進士，籍贯大城，入仕考上會試/貢士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 231571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jn7Z5DoHyCUh3Tr3UBMSXH | 王甫林 | accepted |
| other | p_1GhPFs5m4G2BPwjpU26jtR | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從政（CBDB 231571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231571&o=json)
