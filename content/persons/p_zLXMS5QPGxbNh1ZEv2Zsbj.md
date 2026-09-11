---
schema: wang-person/v1
id: p_zLXMS5QPGxbNh1ZEv2Zsbj
status: active
merged_into: null
display_name: 王岐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5AJCJ5PiPpo7VioUEX86rD
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VG26q3z9tdwLtbyKHiyp9e
          claim_id: c_5AJCJ5PiPpo7VioUEX86rD
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
          stance: supports
          locator: CBDB:139818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139818）
          source: &a1
            id: s_S41eJ8smHY6tvN1ApoD2zP
            source_type: api_record
            title: 中国历代人物传记资料库：王岐（CBDB 139818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139818&o=json
            external_identifier: CBDB:139818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ohcABJx77XNrkP7K7tjfA6
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 590年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwiaYJE7bFHsUYfMx3hhCq
          claim_id: c_ohcABJx77XNrkP7K7tjfA6
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
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
        id: c_2TTvANv1fgMCFLHF2MmZ7o
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3YGVN1q7vkvTsaWUBHF7P
          claim_id: c_2TTvANv1fgMCFLHF2MmZ7o
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
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
        id: c_pEgL5C4vzDSb6uqE7mNyFZ
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQt2BpMmLeVbcSGDz85bJ4
          claim_id: c_pEgL5C4vzDSb6uqE7mNyFZ
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d7yeFaG7ps34edHBxCOOPS
        subject_person_id: p_qs5ZorGNagnPfgUNsGQXxe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPe9C2W0FMVLXoCBR8BLJ4
          claim_id: c_d7yeFaG7ps34edHBxCOOPS
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wenming 8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qs5ZorGNagnPfgUNsGQXxe
        status: active
        display_name: 王子紹
        merged_into_person_id: null
  children:
    - claim:
        id: c_nPTBWPZEmB8YRHwuCwe70c
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AG61CyNYJr7wCdQNQcAkZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_penBsCrUdiIqU-rwGyfCyX
          claim_id: c_nPTBWPZEmB8YRHwuCwe70c
          source_id: s_S41eJ8smHY6tvN1ApoD2zP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wenming 8：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AG61CyNYJr7wCdQNQcAkZ4
        status: active
        display_name: 王神祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_w9vfWZFJEFn3OWGdWCii1c
        subject_person_id: p_zLXMS5QPGxbNh1ZEv2Zsbj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2A3nbKJ9e277Ci8EW4ACHk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PvkauKhjhYaaS-bJ7J_C_L
          claim_id: c_w9vfWZFJEFn3OWGdWCii1c
          source_id: s_qgZX6j6f8QPGXCRXlWACba
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wenming 8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qgZX6j6f8QPGXCRXlWACba
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王岐妻)（CBDB 149139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149139&o=json
            external_identifier: CBDB:149139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2A3nbKJ9e277Ci8EW4ACHk
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王岐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岐 | accepted |
| birth.date | 590年 | accepted |
| death.date | 644年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qs5ZorGNagnPfgUNsGQXxe | 王子紹 | accepted |
| children | p_AG61CyNYJr7wCdQNQcAkZ4 | 王神祐 | accepted |
| spouses | p_2A3nbKJ9e277Ci8EW4ACHk | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王岐妻)（CBDB 149139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149139&o=json)
- [中国历代人物传记资料库：王岐（CBDB 139818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139818&o=json)
