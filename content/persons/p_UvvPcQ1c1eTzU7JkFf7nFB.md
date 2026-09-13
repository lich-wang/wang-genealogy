---
schema: wang-person/v1
id: p_UvvPcQ1c1eTzU7JkFf7nFB
status: active
merged_into: null
display_name: 王英甫
cbdb_id: 253510
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yBXxGGSHPkN2z4yKji11Y2
        subject_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英甫，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253510）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dfXARrfAbyjOtsLFe-LfAn
          claim_id: c_yBXxGGSHPkN2z4yKji11Y2
          source_id: s_5tfCRSzsrQECJoQHGT95DN
          stance: supports
          locator: CBDB:253510
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5tfCRSzsrQECJoQHGT95DN
            source_type: api_record
            title: 中国历代人物传记资料库：王英甫（CBDB 253510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json
            external_identifier: CBDB:253510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHgsH1DnVGtED53YuAK65m
        subject_person_id: p_UvvPcQ1c1eTzU7JkFf7nFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vm1ZXY53gMBrTJJagQq7KG
          claim_id: c_EHgsH1DnVGtED53YuAK65m
          source_id: s_5tfCRSzsrQECJoQHGT95DN
          stance: supports
          locator: CBDB:253510
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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

# 王英甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王英甫，明人物。成化十四年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 253510） | accepted |
| name.primary | 王英甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英甫（CBDB 253510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253510&o=json)
