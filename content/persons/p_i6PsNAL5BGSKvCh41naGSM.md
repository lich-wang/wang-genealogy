---
schema: wang-person/v1
id: p_i6PsNAL5BGSKvCh41naGSM
status: active
merged_into: null
display_name: 王延年
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mSFRQB7w1QC92KGKTiTmPz
        subject_person_id: p_i6PsNAL5BGSKvCh41naGSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7xQBxtpcJVCxH3V4mj6Jwf
          claim_id: c_mSFRQB7w1QC92KGKTiTmPz
          source_id: s_RFUKVPPjrMi2vkTDyEUws5
          stance: supports
          locator: CBDB:37227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37227）
          source: &a1
            id: s_RFUKVPPjrMi2vkTDyEUws5
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 37227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37227&o=json
            external_identifier: CBDB:37227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHr8AB3vNrHQoQ8WK8GVWf
        subject_person_id: p_i6PsNAL5BGSKvCh41naGSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eZCnmokQlYRujNohlYl7QS
          claim_id: c_rHr8AB3vNrHQoQ8WK8GVWf
          source_id: s_RFUKVPPjrMi2vkTDyEUws5
          stance: supports
          locator: CBDB:37227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2UmL6nydfAjxDV339IWBZ1
        subject_person_id: p_HPYYkmNEETrV6SW1UZLFZN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i6PsNAL5BGSKvCh41naGSM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7yFe9l0LX6VFgLK4PTI37j
          claim_id: c_2UmL6nydfAjxDV339IWBZ1
          source_id: s_frbkdIZnLDYdqjhBh-zgVQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1907）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_frbkdIZnLDYdqjhBh-zgVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 37227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37227&o=json
            external_identifier: CBDB:37227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HPYYkmNEETrV6SW1UZLFZN
        status: active
        display_name: 王次張
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延年 | accepted |
| bio.summary | 王延年，宋人物。籍贯會稽。（中国历代人物传记资料库 CBDB 37227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HPYYkmNEETrV6SW1UZLFZN | 王次張 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延年（CBDB 37227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37227&o=json)
