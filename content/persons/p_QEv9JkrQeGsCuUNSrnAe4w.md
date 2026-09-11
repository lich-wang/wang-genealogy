---
schema: wang-person/v1
id: p_QEv9JkrQeGsCuUNSrnAe4w
status: active
merged_into: null
display_name: 王順孫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B3n8MV5c8kHwrLftLK6vkW
        subject_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NSv8VHG3TNTu9qMz4dfr4m
          claim_id: c_B3n8MV5c8kHwrLftLK6vkW
          source_id: s_KqAtkeq4Y6v6Z46jWJcVGM
          stance: supports
          locator: CBDB:138936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138936）
          source: &a1
            id: s_KqAtkeq4Y6v6Z46jWJcVGM
            source_type: api_record
            title: 中国历代人物传记资料库：王順孫（CBDB 138936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138936&o=json
            external_identifier: CBDB:138936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qXc57oQAEDNAPCT3tt17bW
        subject_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMMtSBQ88e6ftZH61vKo1U
          claim_id: c_qXc57oQAEDNAPCT3tt17bW
          source_id: s_KqAtkeq4Y6v6Z46jWJcVGM
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
        id: c_DkUmf24cS2NvC13Gy5W2q5
        subject_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ArN8J2Kn9nZkGQAvgX4uf
          claim_id: c_DkUmf24cS2NvC13Gy5W2q5
          source_id: s_KqAtkeq4Y6v6Z46jWJcVGM
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
        id: c_gp6diMFzMyRJL52dcbJTbk
        subject_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
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
        - id: cs_FjNQF3GhmQneLk97Y3DS1S
          claim_id: c_gp6diMFzMyRJL52dcbJTbk
          source_id: s_KqAtkeq4Y6v6Z46jWJcVGM
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
        id: c_ny-TM6x0OAelg8rEHfQ_eQ
        subject_person_id: p_A1wGg85mzdsAN68u1Gf3xE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFxFoRMzNkiz2955nT0fXs
          claim_id: c_ny-TM6x0OAelg8rEHfQ_eQ
          source_id: s_AtLg71EAXT937KbMwJXjjn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AtLg71EAXT937KbMwJXjjn
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 146932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146932&o=json
            external_identifier: CBDB:146932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A1wGg85mzdsAN68u1Gf3xE
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王順孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順孫 | accepted |
| birth.date | 595年 | accepted |
| death.date | 648年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A1wGg85mzdsAN68u1Gf3xE | 王璇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順孫（CBDB 138936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138936&o=json)
- [中国历代人物传记资料库：王璇（CBDB 146932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146932&o=json)
