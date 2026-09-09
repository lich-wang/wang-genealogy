---
schema: wang-person/v1
id: p_Gaw82eLMUREL4otcCy8uLm
status: active
merged_into: null
display_name: 王國華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H68NLYzr9H8pUMJf6ViJhq
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iNA5rdrEKEgVEkquNoeCL8
          claim_id: c_H68NLYzr9H8pUMJf6ViJhq
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: CBDB:69330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69330）
          source: &a1
            id: s_peiEiEziXw9q7UdS1GCKzj
            source_type: api_record
            title: 中国历代人物传记资料库：王國華（CBDB 69330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json
            external_identifier: CBDB:69330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eAAqGFDxCbRz9sSM8eenHH
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vx3Dv4gdWmieW4QTvyy9cc
          claim_id: c_eAAqGFDxCbRz9sSM8eenHH
          source_id: s_peiEiEziXw9q7UdS1GCKzj
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
        id: c_41ZFV8EKabnHZj229HPG29
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fE2w7a8R7HGNz5LYb2VGhn
          claim_id: c_41ZFV8EKabnHZj229HPG29
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王國華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國華 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國華（CBDB 69330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json)
