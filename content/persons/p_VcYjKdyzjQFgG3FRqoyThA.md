---
schema: wang-person/v1
id: p_VcYjKdyzjQFgG3FRqoyThA
status: active
merged_into: null
display_name: 王完
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdmnFGxr4ihFY7QH1Sb14f
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rhCJR6yJ8yKEemZm55xsxr
          claim_id: c_XdmnFGxr4ihFY7QH1Sb14f
          source_id: s_4H3C6QuKjLwiYbqtgAHfk9
          stance: supports
          locator: CBDB:274245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274245）
          source: &a1
            id: s_4H3C6QuKjLwiYbqtgAHfk9
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 274245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274245&o=json
            external_identifier: CBDB:274245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hLvoc9F32xxoi4WBLdUFz5
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完，明人物。弘治十八年進士，籍贯金壇，曾任教諭。（中国历代人物传记资料库 CBDB 274245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rZnIJlx19uflm0SHka9Uy7
          claim_id: c_hLvoc9F32xxoi4WBLdUFz5
          source_id: s_4H3C6QuKjLwiYbqtgAHfk9
          stance: supports
          locator: CBDB:274245
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_n6vL9tcT-rNspw5dCHaRw-
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKYKLo9E1sn5NSncgTkQYb
          claim_id: c_n6vL9tcT-rNspw5dCHaRw-
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NLo5mZpLgs4MVDJkKMjgjs
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 201553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json
            external_identifier: CBDB:201553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| bio.summary | 王完，明人物。弘治十八年進士，籍贯金壇，曾任教諭。（中国历代人物传记资料库 CBDB 274245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栻（CBDB 201553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json)
- [中国历代人物传记资料库：王完（CBDB 274245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274245&o=json)
