---
schema: wang-person/v1
id: p_nwCMi4iZGr3qyJpkQ9CEtf
status: active
merged_into: null
display_name: 王澍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8RGty43NtGw4yzVBoWU3Q
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFFH8TaBNUoLi2YTdgJfVG
          claim_id: c_M8RGty43NtGw4yzVBoWU3Q
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: CBDB:69453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69453）
          source: &a1
            id: s_95mKyZoEKdmPcKU7kAfRoT
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 69453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json
            external_identifier: CBDB:69453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jPzB2vGCL14BDL47qfQ51z
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNtHaVW1qjdhcLGr9qkbE7
          claim_id: c_jPzB2vGCL14BDL47qfQ51z
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TKDD4KyGMN2KBAx6kFmUNM
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1739年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNSvo6u9naCm1zDGgmY7jq
          claim_id: c_TKDD4KyGMN2KBAx6kFmUNM
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jneovcPqqrMXvi3Tu2i5pU
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍（1668年—1739年），清人物。明清進士進士，籍贯金壇，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 69453）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bATcJfIXIA08EEG8thStlG
          claim_id: c_jneovcPqqrMXvi3Tu2i5pU
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: CBDB:69453
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_87YKYtEnP-BB6uUAaHRP-v
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cpcA9aLvMeiR4mNGZSRAt9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OZK2eAW4O2Fy1jeNOdzlNp
          claim_id: c_87YKYtEnP-BB6uUAaHRP-v
          source_id: s_eQ4MMxL2xapPhR5fX5YPcG
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13164：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eQ4MMxL2xapPhR5fX5YPcG
            source_type: api_record
            title: 中国历代人物传记资料库：王稻孫（CBDB 526984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526984&o=json
            external_identifier: CBDB:526984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpcA9aLvMeiR4mNGZSRAt9
        status: active
        display_name: 王稻孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3iAvQgDqZ-mleCrBi3KpH6
        subject_person_id: p_R3tFPQ366GQJwYKxBYKMCA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYajiCnXmJJh82rPSA7pEA
          claim_id: c_3iAvQgDqZ-mleCrBi3KpH6
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13164：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R3tFPQ366GQJwYKxBYKMCA
        status: active
        display_name: 王甡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| birth.date | 1668年 | accepted |
| death.date | 1739年 | accepted |
| bio.summary | 王澍（1668年—1739年），清人物。明清進士進士，籍贯金壇，身份为書法家，入仕進士。（中国历代人物传记资料库 CBDB 69453） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cpcA9aLvMeiR4mNGZSRAt9 | 王稻孫 | accepted |
| ancestors | p_R3tFPQ366GQJwYKxBYKMCA | 王甡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稻孫（CBDB 526984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526984&o=json)
- [中国历代人物传记资料库：王澍（CBDB 69453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json)
