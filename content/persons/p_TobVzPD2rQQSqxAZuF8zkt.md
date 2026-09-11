---
schema: wang-person/v1
id: p_TobVzPD2rQQSqxAZuF8zkt
status: active
merged_into: null
display_name: 王翃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9dFc1MovfBfGNMFuQBWPf8
        subject_person_id: p_TobVzPD2rQQSqxAZuF8zkt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UP2rdVN4JEJ22nHaASPgJh
          claim_id: c_9dFc1MovfBfGNMFuQBWPf8
          source_id: s_v34BBYfVv1mC1iz6KV6PS1
          stance: supports
          locator: CBDB:297274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297274）
          source: &a1
            id: s_v34BBYfVv1mC1iz6KV6PS1
            source_type: api_record
            title: 中国历代人物传记资料库：王翃（CBDB 297274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297274&o=json
            external_identifier: CBDB:297274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7v66fuVsiPTPERMcZFiwg5
        subject_person_id: p_TobVzPD2rQQSqxAZuF8zkt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃，明人物。嘉靖十四年進士，曾任義官。（中国历代人物传记资料库 CBDB 297274）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UulrLuKERmMCtxvPNYCZOs
          claim_id: c_7v66fuVsiPTPERMcZFiwg5
          source_id: s_v34BBYfVv1mC1iz6KV6PS1
          stance: supports
          locator: CBDB:297274
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
        id: c_BgSVeRE6cQ35jZ63EWb-2D
        subject_person_id: p_TobVzPD2rQQSqxAZuF8zkt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gGK3uZcMmf0zu1PVvVZisD
          claim_id: c_BgSVeRE6cQ35jZ63EWb-2D
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vKbHuxPyeqDcM9pzGKeEoA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 126784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json
            external_identifier: CBDB:126784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
  other: []
---

# 王翃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翃 | accepted |
| bio.summary | 王翃，明人物。嘉靖十四年進士，曾任義官。（中国历代人物传记资料库 CBDB 297274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翃（CBDB 297274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297274&o=json)
- [中国历代人物传记资料库：王夢弼（CBDB 126784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json)
