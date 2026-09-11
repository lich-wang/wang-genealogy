---
schema: wang-person/v1
id: p_gmqrGvGzDPv1ATq8M2VNE6
status: active
merged_into: null
display_name: 王現
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VTrSMC343p7BP4N5tWuJj
        subject_person_id: p_gmqrGvGzDPv1ATq8M2VNE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王現
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98EemcMy7pJ9TjJFuwk8X5
          claim_id: c_8VTrSMC343p7BP4N5tWuJj
          source_id: s_yuEkTRSsfkKWvL9Yr9kszW
          stance: supports
          locator: CBDB:260244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260244）
          source: &a1
            id: s_yuEkTRSsfkKWvL9Yr9kszW
            source_type: api_record
            title: 中国历代人物传记资料库：王現（CBDB 260244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json
            external_identifier: CBDB:260244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aGfm6hwiLYCMnMQyQJLYe1
        subject_person_id: p_gmqrGvGzDPv1ATq8M2VNE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王現，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ff9XGnByscwgPB4ojGhGKC
          claim_id: c_aGfm6hwiLYCMnMQyQJLYe1
          source_id: s_yuEkTRSsfkKWvL9Yr9kszW
          stance: supports
          locator: CBDB:260244
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

# 王現

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王現 | accepted |
| bio.summary | 王現，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260244） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王現（CBDB 260244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json)
