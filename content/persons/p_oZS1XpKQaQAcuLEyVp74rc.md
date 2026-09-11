---
schema: wang-person/v1
id: p_oZS1XpKQaQAcuLEyVp74rc
status: active
merged_into: null
display_name: 王繻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7r5ZW1WKmpPa3t1cAbRG5
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5N95Ld1KcMjQHxsYud33Gw
          claim_id: c_b7r5ZW1WKmpPa3t1cAbRG5
          source_id: s_JixpnQKckkDXkQHvgdF5WL
          stance: supports
          locator: CBDB:71295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71295）
          source: &a1
            id: s_JixpnQKckkDXkQHvgdF5WL
            source_type: api_record
            title: 中国历代人物传记资料库：王繻（CBDB 71295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71295&o=json
            external_identifier: CBDB:71295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mmjBS5McEvbyQPjXb6VjGa
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oLG8H1VjVgojDw1cwnq84R
          claim_id: c_mmjBS5McEvbyQPjXb6VjGa
          source_id: s_JixpnQKckkDXkQHvgdF5WL
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
        id: c_D5ZZceyguJMBnsitfh2oLK
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1720年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpR5Hv5unNGQavzAG5sCHK
          claim_id: c_D5ZZceyguJMBnsitfh2oLK
          source_id: s_JixpnQKckkDXkQHvgdF5WL
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
        id: c_grtML8J1qQxM9ta4qY1CXF
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
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
        - id: cs_X9LfBvCJC243BeqyBao1ty
          claim_id: c_grtML8J1qQxM9ta4qY1CXF
          source_id: s_JixpnQKckkDXkQHvgdF5WL
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
        id: c_IrH13OTbQc3VW8xDP_XiJE
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ei7i85XGXNcdp65hUkmtsM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npeMqRFJsC8ujfI2rS7Yoh
          claim_id: c_IrH13OTbQc3VW8xDP_XiJE
          source_id: s_GQ9g9XoqiPFNAAX5fCgK5J
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13223：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GQ9g9XoqiPFNAAX5fCgK5J
            source_type: api_record
            title: 中国历代人物传记资料库：王沛聞（CBDB 527064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527064&o=json
            external_identifier: CBDB:527064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ei7i85XGXNcdp65hUkmtsM
        status: active
        display_name: 王沛聞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繻 | accepted |
| birth.date | 1653年 | accepted |
| death.date | 1720年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ei7i85XGXNcdp65hUkmtsM | 王沛聞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沛聞（CBDB 527064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527064&o=json)
- [中国历代人物传记资料库：王繻（CBDB 71295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71295&o=json)
