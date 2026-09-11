---
schema: wang-person/v1
id: p_TbcpzLjrifNrHgjecAVHZK
status: active
merged_into: null
display_name: 王貽杰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8z13XZV3zAsUDX5aRtxeGc
        subject_person_id: p_TbcpzLjrifNrHgjecAVHZK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽杰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRNo1wZLzHps3Ug3MqwLXM
          claim_id: c_8z13XZV3zAsUDX5aRtxeGc
          source_id: s_28zDfxYuN7JEypEcreuE66
          stance: supports
          locator: CBDB:561998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561998）
          source: &a1
            id: s_28zDfxYuN7JEypEcreuE66
            source_type: api_record
            title: 中国历代人物传记资料库：王貽杰（CBDB 561998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561998&o=json
            external_identifier: CBDB:561998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skj7y89Z5aQ8KvH2k6hG65
        subject_person_id: p_TbcpzLjrifNrHgjecAVHZK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽杰，明人物。籍贯餘姚，身份为孝子/孝女，入仕武舉進士，曾任都司。（中国历代人物传记资料库 CBDB 561998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wdY-f4bcqaZ6sNKzXnCRWD
          claim_id: c_skj7y89Z5aQ8KvH2k6hG65
          source_id: s_28zDfxYuN7JEypEcreuE66
          stance: supports
          locator: CBDB:561998
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
  descendants: []
  other: []
---

# 王貽杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽杰 | accepted |
| bio.summary | 王貽杰，明人物。籍贯餘姚，身份为孝子/孝女，入仕武舉進士，曾任都司。（中国历代人物传记资料库 CBDB 561998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽杰（CBDB 561998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561998&o=json)
