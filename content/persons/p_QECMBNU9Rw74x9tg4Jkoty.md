---
schema: wang-person/v1
id: p_QECMBNU9Rw74x9tg4Jkoty
status: active
merged_into: null
display_name: 王法
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Aoh8Sd6rEJimHKCzvb7AJT
        subject_person_id: p_QECMBNU9Rw74x9tg4Jkoty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQr98ShhkLzhLFFDQC7j7e
          claim_id: c_Aoh8Sd6rEJimHKCzvb7AJT
          source_id: s_HAUVf2d4Se1bBWjAmUTUya
          stance: supports
          locator: CBDB:139139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139139）
          source: &a1
            id: s_HAUVf2d4Se1bBWjAmUTUya
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 139139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139139&o=json
            external_identifier: CBDB:139139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EDuXfb7AenADuezbRbR982
        subject_person_id: p_QECMBNU9Rw74x9tg4Jkoty
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 591年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLaJhL3iLbWKzFJR3BhTCK
          claim_id: c_EDuXfb7AenADuezbRbR982
          source_id: s_HAUVf2d4Se1bBWjAmUTUya
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
        id: c_nz8rucMinx31rFQfrc3N96
        subject_person_id: p_QECMBNU9Rw74x9tg4Jkoty
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RuV6bQbkdnVkHzfoeACZ6X
          claim_id: c_nz8rucMinx31rFQfrc3N96
          source_id: s_HAUVf2d4Se1bBWjAmUTUya
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
        id: c_cKyqE9zoaF7HLxccpQ4AhD
        subject_person_id: p_QECMBNU9Rw74x9tg4Jkoty
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
        - id: cs_2f3XLusRHgW9BFvfgVgDPR
          claim_id: c_cKyqE9zoaF7HLxccpQ4AhD
          source_id: s_HAUVf2d4Se1bBWjAmUTUya
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
        id: c_Hxh7j19dQ_6x8B_mL1HGWU
        subject_person_id: p_BVWSDvXE3MZBdfLsTdcRKk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QECMBNU9Rw74x9tg4Jkoty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFkilWoNE_DRbAFJNFeMEd
          claim_id: c_Hxh7j19dQ_6x8B_mL1HGWU
          source_id: s_cXpuV6HcmJwVsBQ7qHpyyL
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 73：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cXpuV6HcmJwVsBQ7qHpyyL
            source_type: api_record
            title: 中国历代人物传记资料库：王伯仁（CBDB 147458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147458&o=json
            external_identifier: CBDB:147458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BVWSDvXE3MZBdfLsTdcRKk
        status: active
        display_name: 王伯仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| birth.date | 591年 | accepted |
| death.date | 658年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BVWSDvXE3MZBdfLsTdcRKk | 王伯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯仁（CBDB 147458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147458&o=json)
- [中国历代人物传记资料库：王法（CBDB 139139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139139&o=json)
