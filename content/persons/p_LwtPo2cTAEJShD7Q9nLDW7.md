---
schema: wang-person/v1
id: p_LwtPo2cTAEJShD7Q9nLDW7
status: active
merged_into: null
display_name: 王纘爵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dnCBkkw1oVK43z5gmUUn1
        subject_person_id: p_LwtPo2cTAEJShD7Q9nLDW7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_34qFJQDUx6DEkYcGxp8LpJ
          claim_id: c_5dnCBkkw1oVK43z5gmUUn1
          source_id: s_q9FbMkuPVMPinDvP9dY4R6
          stance: supports
          locator: CBDB:697654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697654）
          source: &a1
            id: s_q9FbMkuPVMPinDvP9dY4R6
            source_type: api_record
            title: 中国历代人物传记资料库：王纘爵（CBDB 697654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697654&o=json
            external_identifier: CBDB:697654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.728Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X2VQmnCzteJBYapoKYpqev
        subject_person_id: p_LwtPo2cTAEJShD7Q9nLDW7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘爵，明人物。籍贯鄞縣，曾任知縣。（中国历代人物传记资料库 CBDB 697654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BusR2dF_fwoS5-TVHkzf0_
          claim_id: c_X2VQmnCzteJBYapoKYpqev
          source_id: s_q9FbMkuPVMPinDvP9dY4R6
          stance: supports
          locator: CBDB:697654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nkvtQ0jtv0KoRUjTt-r1y7
        subject_person_id: p_LwtPo2cTAEJShD7Q9nLDW7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J3P2fTe8ds7r3dVB3L7trB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jmTh7bhG4DcKb9LFlPCEG4
          claim_id: c_nkvtQ0jtv0KoRUjTt-r1y7
          source_id: s_Srs8kbRMxxDaDN7FRM7y2D
          stance: supports
          locator: 鄞縣志，lgid=243410：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Srs8kbRMxxDaDN7FRM7y2D
            source_type: api_record
            title: 中国历代人物传记资料库：王兆豸（CBDB 697655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697655&o=json
            external_identifier: CBDB:697655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J3P2fTe8ds7r3dVB3L7trB
        status: active
        display_name: 王兆豸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纘爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纘爵 | accepted |
| bio.summary | 王纘爵，明人物。籍贯鄞縣，曾任知縣。（中国历代人物传记资料库 CBDB 697654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J3P2fTe8ds7r3dVB3L7trB | 王兆豸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兆豸（CBDB 697655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697655&o=json)
- [中国历代人物传记资料库：王纘爵（CBDB 697654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697654&o=json)
