---
schema: wang-person/v1
id: p_evzD6qcskC5Si9w9ieb42z
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6RbwPQ1SsCquGMrbcT6Hs
        subject_person_id: p_evzD6qcskC5Si9w9ieb42z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o4bCcdQzijzYgAmdhe3Lfr
          claim_id: c_S6RbwPQ1SsCquGMrbcT6Hs
          source_id: s_MFTaPWjueKYFdN82HgF9YH
          stance: supports
          locator: CBDB:265666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265666）
          source: &a1
            id: s_MFTaPWjueKYFdN82HgF9YH
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 265666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265666&o=json
            external_identifier: CBDB:265666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8GEeWv5TksDrxJNSKCLGyT
        subject_person_id: p_evzD6qcskC5Si9w9ieb42z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PHI6EhHTZekGKHYm1yP6_X
          claim_id: c_8GEeWv5TksDrxJNSKCLGyT
          source_id: s_MFTaPWjueKYFdN82HgF9YH
          stance: supports
          locator: CBDB:265666
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
        id: c_kYxYm5jeDHlOwRWUIvvoXb
        subject_person_id: p_evzD6qcskC5Si9w9ieb42z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6gohs3DCX_HbZJlyJc34X-
          claim_id: c_kYxYm5jeDHlOwRWUIvvoXb
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | 王思誠，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 265666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265666&o=json)
