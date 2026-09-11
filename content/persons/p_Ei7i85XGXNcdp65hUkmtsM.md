---
schema: wang-person/v1
id: p_Ei7i85XGXNcdp65hUkmtsM
status: active
merged_into: null
display_name: 王沛聞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmVBMERuTwUJ1JDp4PYxZU
        subject_person_id: p_Ei7i85XGXNcdp65hUkmtsM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛聞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zLg2DrEYDFFH7r7PfPezM5
          claim_id: c_BmVBMERuTwUJ1JDp4PYxZU
          source_id: s_GQ9g9XoqiPFNAAX5fCgK5J
          stance: supports
          locator: CBDB:527064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527064）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zx39X43BeNryszL5ERMJ3B
        subject_person_id: p_Ei7i85XGXNcdp65hUkmtsM
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
        - id: cs_j3D7Lo3kqhVL5FL6p57tM8
          claim_id: c_zx39X43BeNryszL5ERMJ3B
          source_id: s_GQ9g9XoqiPFNAAX5fCgK5J
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
          source: *a1
      object_person:
        id: p_oZS1XpKQaQAcuLEyVp74rc
        status: active
        display_name: 王繻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沛聞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛聞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZS1XpKQaQAcuLEyVp74rc | 王繻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沛聞（CBDB 527064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527064&o=json)
