---
schema: wang-person/v1
id: p_A8nptdAhqen5QW96aEkpZW
status: active
merged_into: null
display_name: 王鎰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7W4M6tX8carQ9yk9aYt2dw
        subject_person_id: p_A8nptdAhqen5QW96aEkpZW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aHpGzNzFsHJVt3Am7KEgJF
          claim_id: c_7W4M6tX8carQ9yk9aYt2dw
          source_id: s_4QTX6DH5D8746C2524p5Az
          stance: supports
          locator: CBDB:284754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284754）
          source: &a1
            id: s_4QTX6DH5D8746C2524p5Az
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 284754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284754&o=json
            external_identifier: CBDB:284754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hZPbAbNB6oWfdg91zDgMTb
        subject_person_id: p_A8nptdAhqen5QW96aEkpZW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰，明人物。正德十六年進士，籍贯隴西，曾任正科。（中国历代人物传记资料库 CBDB 284754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vAT4GRuHzjdaMMILVcID6G
          claim_id: c_hZPbAbNB6oWfdg91zDgMTb
          source_id: s_4QTX6DH5D8746C2524p5Az
          stance: supports
          locator: CBDB:284754
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

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | 王鎰，明人物。正德十六年進士，籍贯隴西，曾任正科。（中国历代人物传记资料库 CBDB 284754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 284754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284754&o=json)
