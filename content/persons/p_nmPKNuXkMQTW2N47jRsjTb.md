---
schema: wang-person/v1
id: p_nmPKNuXkMQTW2N47jRsjTb
status: active
merged_into: null
display_name: 王時
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7iH4q4moQCxyLePpn2WZJ
        subject_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piyqJS1nmEZQaDzKCj3UGm
          claim_id: c_Z7iH4q4moQCxyLePpn2WZJ
          source_id: s_iPp3rGyWv2vC8FE1TgbaPU
          stance: supports
          locator: CBDB:208879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208879）
          source: &a1
            id: s_iPp3rGyWv2vC8FE1TgbaPU
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 208879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json
            external_identifier: CBDB:208879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zu3Bt2CpTCZyqi5FKLm8nz
        subject_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208879）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9CEBPR65GF2RbxprW13mGH
          claim_id: c_Zu3Bt2CpTCZyqi5FKLm8nz
          source_id: s_iPp3rGyWv2vC8FE1TgbaPU
          stance: supports
          locator: CBDB:208879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eQSO7uFa8lHEjbxgDHKsxj
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5YazPiHYEk7enZ-J6knL3m
          claim_id: c_eQSO7uFa8lHEjbxgDHKsxj
          source_id: s_-OD9GOuDquz9fNdpkhB0re
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王時 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王時 之父／母。
          source:
            id: s_-OD9GOuDquz9fNdpkhB0re
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 208879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json
            external_identifier: CBDB:208879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KoW6ut6ZKnojusyq0WWrPM
        subject_person_id: p_RznqNoKYNYcxhtUnus5Vov
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nmPKNuXkMQTW2N47jRsjTb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IZWCcZ3KlvroUIplPJyOCp
          claim_id: c_KoW6ut6ZKnojusyq0WWrPM
          source_id: s_-OD9GOuDquz9fNdpkhB0re
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-OD9GOuDquz9fNdpkhB0re
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 208879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json
            external_identifier: CBDB:208879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
---

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| bio.summary | 王時，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| other | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 208879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208879&o=json)
