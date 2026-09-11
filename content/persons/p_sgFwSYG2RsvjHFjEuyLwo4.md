---
schema: wang-person/v1
id: p_sgFwSYG2RsvjHFjEuyLwo4
status: active
merged_into: null
display_name: 王煜文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6HFDPLokag2A7qfT22G3Bs
        subject_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wfJJzmXCVgHB2RvPSzMoGK
          claim_id: c_6HFDPLokag2A7qfT22G3Bs
          source_id: s_SxrKMr6A9jU2yTp2Y7FovN
          stance: supports
          locator: CBDB:551386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551386）
          source: &a1
            id: s_SxrKMr6A9jU2yTp2Y7FovN
            source_type: api_record
            title: 中国历代人物传记资料库：王煜文（CBDB 551386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551386&o=json
            external_identifier: CBDB:551386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mP3qC2BGEzyxGrNQ6wkrD5
        subject_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
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
        - id: cs_BLRkDHtditEdau5KPa1SEr
          claim_id: c_mP3qC2BGEzyxGrNQ6wkrD5
          source_id: s_SxrKMr6A9jU2yTp2Y7FovN
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
        id: c_ynVz7gj2LxAtxFW1_IgStV
        subject_person_id: p_sgFwSYG2RsvjHFjEuyLwo4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8uNUQvi293HuAyjPDSunag
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxADhuiyCCJw03jP2pD4a8
          claim_id: c_ynVz7gj2LxAtxFW1_IgStV
          source_id: s_QztKYy3xASZdxQsrCDfZS8
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QztKYy3xASZdxQsrCDfZS8
            source_type: api_record
            title: 中国历代人物传记资料库：王應超（CBDB 551389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json
            external_identifier: CBDB:551389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8uNUQvi293HuAyjPDSunag
        status: active
        display_name: 王應超
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王煜文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煜文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8uNUQvi293HuAyjPDSunag | 王應超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應超（CBDB 551389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551389&o=json)
- [中国历代人物传记资料库：王煜文（CBDB 551386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551386&o=json)
