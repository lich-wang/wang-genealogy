---
schema: wang-person/v1
id: p_jgukCQ6yXT1KHa2JP2QrQF
status: active
merged_into: null
display_name: 王勝宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_twbLV5FxgBucZa8rnU3r2P
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n9yYdsBHYXo1JDiKe4Zfs3
          claim_id: c_twbLV5FxgBucZa8rnU3r2P
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: CBDB:236827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236827）
          source: &a1
            id: s_3QYpbUb1KA1PLDW4B4gFnk
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 236827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json
            external_identifier: CBDB:236827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84Hh2n1JFBNH5ZLtvCoRLD
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝宗，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u7zbluxNo6TpyK44rXhKEl
          claim_id: c_84Hh2n1JFBNH5ZLtvCoRLD
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: CBDB:236827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_4HVK4XPYa8RHOX3GQGWVdq
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UNHRZPPXYx_ZrxWfdAA4W
          claim_id: c_4HVK4XPYa8RHOX3GQGWVdq
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
    - claim:
        id: c_tJYqTsbpAy0gIARNTvsV88
        subject_person_id: p_jgukCQ6yXT1KHa2JP2QrQF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LX473TkhjNhdVPDnDKAqb
          claim_id: c_tJYqTsbpAy0gIARNTvsV88
          source_id: s_3QYpbUb1KA1PLDW4B4gFnk
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
  other: []
---

# 王勝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝宗 | accepted |
| bio.summary | 王勝宗，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 236827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |
| descendants | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勝宗（CBDB 236827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236827&o=json)
