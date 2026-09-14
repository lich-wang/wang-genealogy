---
schema: wang-person/v1
id: p_3JKfW8zU9aAN6L1FmP3X5i
status: active
merged_into: null
display_name: 王尚恭
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LN6WqWg9Yw7eAfGuQen7um
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n9pehAKTAdoHLmzQmsFmxo
          claim_id: c_LN6WqWg9Yw7eAfGuQen7um
          source_id: s_HJE6YQYSr8DT37MgBwYnbP
          stance: supports
          locator: CBDB:26511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26511）
          source: &a1
            id: s_HJE6YQYSr8DT37MgBwYnbP
            source_type: api_record
            title: 中国历代人物传记资料库：王尚恭（CBDB 26511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json
            external_identifier: CBDB:26511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8cEga8g1ZvkyBr1MeB2AHj
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1007年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y2q8PeHXb12FBNdY4Rovj2
          claim_id: c_8cEga8g1ZvkyBr1MeB2AHj
          source_id: s_HJE6YQYSr8DT37MgBwYnbP
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
        id: c_QKVtwyE1KdeUfudkGfgGoJ
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1084年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prtvmhSpbQHQ28j2HVkJjf
          claim_id: c_QKVtwyE1KdeUfudkGfgGoJ
          source_id: s_HJE6YQYSr8DT37MgBwYnbP
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
        id: c_QdsyeqjxGFKXhUi5Ro8ZHQ
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚恭（1007年—1084年），宋人物。籍贯河南府，入仕進士，曾任朝議大夫、秘書丞、太常寺少卿。（中国历代人物传记资料库 CBDB 26511）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d1FimFJ5heUc5QLhwDWRM-
          claim_id: c_QdsyeqjxGFKXhUi5Ro8ZHQ
          source_id: s_HJE6YQYSr8DT37MgBwYnbP
          stance: supports
          locator: CBDB:26511
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FSaDL5H-g7JqKhOfhWx0os
        subject_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NvQyhR6c7V_Fc3VfhvAKJB
          claim_id: c_FSaDL5H-g7JqKhOfhWx0os
          source_id: s_TuoT1Xx4PWRSkynDL00V2x
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26509）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_TuoT1Xx4PWRSkynDL00V2x
            source_type: api_record
            title: 中国历代人物传记资料库：王尚恭（CBDB 26511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json
            external_identifier: CBDB:26511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HFQK5L8YrnKx1CYJmv1MtZ
        status: active
        display_name: 王汲
        merged_into_person_id: null
  children:
    - claim:
        id: c_MIK6qD-d0t3QATlm-71gr8
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9oQBgCB7D5nNTgDeuwNJXK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73SK-PbeKQuuubXYicXj64
          claim_id: c_MIK6qD-d0t3QATlm-71gr8
          source_id: s_3PkZe4FG3y09fS8ZURJQTo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 26511）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_3PkZe4FG3y09fS8ZURJQTo
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 26517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26517&o=json
            external_identifier: CBDB:26517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9oQBgCB7D5nNTgDeuwNJXK
        status: active
        display_name: 王純
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NjRY12cDRWmXXnucvvfpfH
        subject_person_id: p_3JKfW8zU9aAN6L1FmP3X5i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9C9f5wPTpEPMhCZhZENbu8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O-lpFNMCcikyB47VV6hkYz
          claim_id: c_NjRY12cDRWmXXnucvvfpfH
          source_id: s_TuoT1Xx4PWRSkynDL00V2x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 26512 王尚喆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TuoT1Xx4PWRSkynDL00V2x
            source_type: api_record
            title: 中国历代人物传记资料库：王尚恭（CBDB 26511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json
            external_identifier: CBDB:26511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9C9f5wPTpEPMhCZhZENbu8
        status: active
        display_name: 王尚喆
        merged_into_person_id: null
---

# 王尚恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚恭 | accepted |
| birth.date | 1007年 | accepted |
| death.date | 1084年 | accepted |
| bio.summary | 王尚恭（1007年—1084年），宋人物。籍贯河南府，入仕進士，曾任朝議大夫、秘書丞、太常寺少卿。（中国历代人物传记资料库 CBDB 26511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HFQK5L8YrnKx1CYJmv1MtZ | 王汲 | accepted |
| children | p_9oQBgCB7D5nNTgDeuwNJXK | 王純 | accepted |
| other | p_9C9f5wPTpEPMhCZhZENbu8 | 王尚喆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 26517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26517&o=json)
- [中国历代人物传记资料库：王尚恭（CBDB 26511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26511&o=json)
