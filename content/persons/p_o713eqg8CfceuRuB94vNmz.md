---
schema: wang-person/v1
id: p_o713eqg8CfceuRuB94vNmz
status: active
merged_into: null
display_name: 王朝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLs5WyKcbM8AJtvhP9PvuK
        subject_person_id: p_o713eqg8CfceuRuB94vNmz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xmDYZHg6BKPBYuKi1Q8CYH
          claim_id: c_sLs5WyKcbM8AJtvhP9PvuK
          source_id: s_g9nEtbDcuqvB1Bm35PZ84K
          stance: supports
          locator: CBDB:688839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688839）
          source: &a1
            id: s_g9nEtbDcuqvB1Bm35PZ84K
            source_type: api_record
            title: 中国历代人物传记资料库：王朝（CBDB 688839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688839&o=json
            external_identifier: CBDB:688839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQjjoBdsR1PpzqtKMBRWqo
        subject_person_id: p_o713eqg8CfceuRuB94vNmz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 688839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xEVcR0Z7le8mPXkImy3XpL
          claim_id: c_RQjjoBdsR1PpzqtKMBRWqo
          source_id: s_g9nEtbDcuqvB1Bm35PZ84K
          stance: supports
          locator: CBDB:688839
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

# 王朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝 | accepted |
| bio.summary | 王朝，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 688839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝（CBDB 688839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688839&o=json)
