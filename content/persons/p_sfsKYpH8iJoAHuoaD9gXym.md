---
schema: wang-person/v1
id: p_sfsKYpH8iJoAHuoaD9gXym
status: active
merged_into: null
display_name: 王淳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ThTgoYVhmxECmeEd1iZcf5
        subject_person_id: p_sfsKYpH8iJoAHuoaD9gXym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aYKwZ5fjNmUmmKQTPhMnLJ
          claim_id: c_ThTgoYVhmxECmeEd1iZcf5
          source_id: s_FWC6Tyrx84ktiG7wFgN8zr
          stance: supports
          locator: CBDB:570711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570711）
          source: &a1
            id: s_FWC6Tyrx84ktiG7wFgN8zr
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 570711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570711&o=json
            external_identifier: CBDB:570711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Q2Sw8GFmbpxnocDxwkPut
        subject_person_id: p_sfsKYpH8iJoAHuoaD9gXym
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
        - id: cs_N3nEp2BiRE8kDMH6Y8Ljc9
          claim_id: c_9Q2Sw8GFmbpxnocDxwkPut
          source_id: s_FWC6Tyrx84ktiG7wFgN8zr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rb6_AO2byFz0g6FSPK4mSM
        subject_person_id: p_sfsKYpH8iJoAHuoaD9gXym
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CtSVBmCmDig7VPF7gNP89q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7E7rxSLMy-COJPI818foB
          claim_id: c_rb6_AO2byFz0g6FSPK4mSM
          source_id: s_PrSP6LTG8yTwefWpgAj6SH
          stance: supports
          locator: 紹興府志:八十卷，lgid=316843：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PrSP6LTG8yTwefWpgAj6SH
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 570713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570713&o=json
            external_identifier: CBDB:570713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CtSVBmCmDig7VPF7gNP89q
        status: active
        display_name: 王棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CtSVBmCmDig7VPF7gNP89q | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 570711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570711&o=json)
- [中国历代人物传记资料库：王棟（CBDB 570713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570713&o=json)
